(ns habit_tracker.components.Dashboard
  (:require [reagent.core :as reagent :refer [atom]]
            [habit_tracker.utils.view_handler :as view_handler]))

(defn get-all-habits
  "Gets all the habits on load of the page"
  [])

(let [currentStorage (js->clj (.parse js/JSON (.getItem (.-localStorage js/window) "habits")))]
      (defonce habits (atom currentStorage)))

(defn render []
  [:div.Dashboard
    [:div.Header
      [:h4.addNew {:on-click #(view_handler/new-view-active)} "Add New Habit +"]]
    [:h2.title "Dashboard"]
    (for [habit @habits]
      [:p habit])])
