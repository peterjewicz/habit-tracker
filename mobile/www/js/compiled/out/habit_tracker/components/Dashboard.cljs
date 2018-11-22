(ns habit_tracker.components.Dashboard
  (:require [reagent.core :as reagent :refer [atom]]
            [habit_tracker.components.Habit :as Habit]
            [habit_tracker.utils.view_handler :as view_handler]
            [habit_tracker.components.New :as New]
            [habit_tracker.components.Tutorial :as Tutorial]))

(defn render []
  (fn []
    (let [currentStorage (js->clj (.parse js/JSON (.getItem (.-localStorage js/window) "habits")))
          habits (atom currentStorage)
          firstTime (js->clj (.parse js/JSON (.getItem (.-localStorage js/window) "firstTime")))]
      (if (not firstTime)
        (view_handler/tutorial-view-active))
      [:div.Dashboard
        (New/render view_handler/active-view habits)
        (Tutorial/render view_handler/active-view)
        [:div.Header
        [:h3.title.uppercase "Your Habits"]]
        [:div.Dashboard-content
          (doall (for [habit @habits]
            [Habit/render habit]))
            [:p.addNewButton {:on-click #(view_handler/new-view-active)} "+"]]])))
