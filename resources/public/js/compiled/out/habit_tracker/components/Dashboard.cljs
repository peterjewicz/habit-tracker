(ns habit_tracker.components.Dashboard
  (:require [reagent.core :as reagent :refer [atom]]
            [habit_tracker.components.Habit :as Habit]
            [habit_tracker.utils.view_handler :as view_handler]
            [habit_tracker.components.New :as New]))

(defn render []
  (fn []
    (let [currentStorage (js->clj (.parse js/JSON (.getItem (.-localStorage js/window) "habits")))
          habits (atom currentStorage)]
      [:div.Dashboard
        (New/render view_handler/active-view habits)
        [:div.Header
        [:h3.title.uppercase "Your Habits"]]
        [:div.Dashboard-content
          (doall (for [habit @habits]
            [Habit/render habit]))
            [:p.addNewButton {:on-click #(view_handler/new-view-active)} "+"]]])))
