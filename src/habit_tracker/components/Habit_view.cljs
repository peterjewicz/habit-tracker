(ns habit_tracker.components.Habit_view
  (:require [reagent.core :as reagent :refer [atom]]))


(defn render [title opened]
  [:div.Habit-View {:class @opened}
    [:h3.title title]])
