(ns ^:figwheel-hooks habit-tracker.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [habit_tracker.utils.view_handler :as view_handler]
   [habit_tracker.components.Habit :as Habit]
   [habit_tracker.components.New :as New]))

(println "This text is printed from src/habit_tracker/core.cljs. Go ahead and edit it and see reloading in action.")

(defn multiply [a b] (* a b))


;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:text "Hello world!"}))

(defn get-app-element []
  (gdom/getElement "app"))

(defn Root []
  [:div.MainWrapper
    [:div.Header
      [:h4.addNew {:on-click #(view_handler/new-view-active)} "Add New Habit +"]]
   (if (:add-new @view_handler/active-view)
    (New/render))
   (if (:dashboard @view_handler/active-view)
    (Habit/render))])

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
