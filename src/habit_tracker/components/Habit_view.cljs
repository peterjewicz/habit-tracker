(ns habit_tracker.components.Habit_view
  (:require [reagent.core :as reagent :refer [atom]]))


(defn get-habit [habit]
  "Grabs the list of dates for a habit"
  (js->clj (.parse js/JSON (.getItem (.-localStorage js/window) habit))))

(defn render [title opened]
  (let [habit (get-habit title)]
    (fn []
    [:div.Habit-View {:class @opened}
      [:h3.title title]
      [:p.close {:on-click #(reset! opened "")} "X"]])))
