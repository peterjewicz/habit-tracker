(ns habit_tracker.components.Habit
  (:require [reagent.core :as reagent :refer [atom]]))



(defn render []
  [:div.Habit
    [:h2.title "Title Of Habit"]
    [:h3.status "Not Done Today!"]
    [:div.button-wrapper
      [:button "Complete"]]])
