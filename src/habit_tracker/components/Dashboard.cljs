(ns habit_tracker.components.Dashboard
  (:require [reagent.core :as reagent :refer [atom]]
            [habit_tracker.components.Habit :as Habit]
            [habit_tracker.utils.view_handler :as view_handler]))

(defn get-all-habits
  "Gets all the habits on load of the page"
  [])

(let [currentStorage (js->clj (.parse js/JSON (.getItem (.-localStorage js/window) "habits")))]
      (defonce habits (atom currentStorage)))

(defn render []
  [:div.Dashboard
    [:div.Header]
    [:h2.title "Dashboard"]
    (doall (for [habit @habits]
      [Habit/render habit]))
      [:p.addNewButton {:on-click #(view_handler/new-view-active)} "+"]])
