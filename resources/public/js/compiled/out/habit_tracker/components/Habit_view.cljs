(ns habit_tracker.components.Habit_view
  (:require [reagent.core :as reagent :refer [atom]]
            ["fullcalendar" :as fullcalendar]))

(defn get-habit [habit]
  "Grabs the list of dates for a habit"
  (js->clj (.parse js/JSON (.getItem (.-localStorage js/window) habit))))

(defn render [title opened]
  (let [habit (get-habit title)]
    (fn []
    [:div.Habit-View {:class @opened}
      [:div.Header
        [:p.close {:on-click #(reset! opened "")} "X"]
        [:h3.title title]]
        [:div.Calendar
          [:p "cal here"]]])))
