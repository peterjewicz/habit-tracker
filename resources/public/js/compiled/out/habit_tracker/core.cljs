(ns ^:figwheel-hooks habit-tracker.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [habit_tracker.utils.view_handler :as view_handler]
   [habit_tracker.components.Dashboard :as Dashboard]
   [habit_tracker.components.New :as New]))

(defn multiply [a b] (* a b))

(defn get-app-element []
  (gdom/getElement "app"))

(defn Root []
  [:div.MainWrapper
   (if (:add-new @view_handler/active-view)
    (New/render))
   (if (:dashboard @view_handler/active-view)
    (Dashboard/render))])

(defn mount [el]
  (reagent/render-component [Root] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
