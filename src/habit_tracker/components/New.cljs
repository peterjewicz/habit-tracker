(ns habit_tracker.components.New
  (:require [reagent.core :as reagent :refer [atom]]
            [habit_tracker.utils.view_handler :as view_handler]))

(defonce new-habit-name (atom ""))

; TODO move these to a localStorage helper - we'll need similar functionality all across the app.
(defn add-new-habit
  "Adds a new habit to localStorge to pull from later"
  []
  (let [currentStorage (js->clj (.parse js/JSON (.getItem (.-localStorage js/window) "habits")))]
    (if-not (some #{@new-habit-name} currentStorage)
    (.setItem
      (.-localStorage js/window) "habits"
      (.stringify js/JSON (clj->js(conj currentStorage @new-habit-name))))
      (js/alert "That Habit Already Exists")))
  (reset! new-habit-name "")
  (js/alert "Habit Added"))

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


(defn render [active]
  [:div.New {:class (:add-new @active)}
    [:div.Header
      [:p.close {:on-click #(view_handler/home-view-active)} "X"]
      [:h3.title "New Habit"]]
    [:div.New--content
      [:p "Add a new habit below"]
      [:input {:type "text"
               :value @new-habit-name
               :placeholder "Habit Name"
               :on-change #(reset! new-habit-name (-> % .-target .-value))}]
      [:button {:on-click #(add-new-habit)} "Add New Habit"]]])
