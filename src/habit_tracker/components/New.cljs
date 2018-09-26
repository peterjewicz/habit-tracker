(ns habit_tracker.components.New
  (:require [reagent.core :as reagent :refer [atom]]
            [habit_tracker.utils.view_handler :as view_handler]))

(defonce new-habit-name (atom ""))

; TODO move these to a localStorage helper - we'll need similar functionality all across the app.
(defn add-new-habit
  "Adds a new habit to localStorge to pull from later"
  []
    (let [currentStorage (js->clj (.parse js/JSON (.getItem (.-localStorage js/window) "habits")))]
      (.setItem (.-localStorage js/window) "habits" (.stringify js/JSON (clj->js(conj currentStorage @new-habit-name)))))
  (reset! new-habit-name ""))

(defn get-habit
  "Grabs a new habit by the key name"
  [key]
  (.getItem (.-localStorage js/window) key))

; We can probably just map over the keys here instead of explicity pulling the size
(defn get-localStorage-keys
  "Gets all the keys for the current localStorage session"
  []
  (let [localStorageItems (.-localStorage js/window)
        localStorageLength (.-length localStorageItems)]
  (js/console.log localStorageLength)))


  ; remove item is hte same as get habit with just a .removeItem instead of get we can add that later


(defn render []
  [:div.New
    [:h2.title "New Page"]
    [:p {:on-click #(view_handler/home-view-active)} "Back to Dashboard"]
    [:input {:type "text"
             :value @new-habit-name
             :on-change #(reset! new-habit-name (-> % .-target .-value))}]
    [:p {:on-click #(add-new-habit)} "Add Test"]])
