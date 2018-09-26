(ns habit_tracker.components.Dashboard
  (:require [reagent.core :as reagent :refer [atom]]
            [habit_tracker.utils.view_handler :as view_handler]))



(defn render []
  [:div.Dashboard
    [:div.Header
      [:h4.addNew {:on-click #(view_handler/new-view-active)} "Add New Habit +"]]
    [:h2.title "Dashboard"]])
