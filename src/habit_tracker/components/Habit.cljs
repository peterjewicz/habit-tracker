(ns habit_tracker.components.Habit
  (:require [reagent.core :as reagent :refer [atom]]
            [habit_tracker.utils.date_formatter :as date_formatter]))

;TODO don't let two of the same days
(defn complete-habit [title]
  (let [completedDays (js->clj (.parse js/JSON (.getItem (.-localStorage js/window) title)))]
  (.setItem
        (.-localStorage js/window) title
        (.stringify js/JSON
          (clj->js(conj completedDays (date_formatter/format-todays-date)))))))

(defn render [title]
  [:div.Habit
    [:h2.title title]
    [:h3.status "Not Done Today!"]
    [:div.button-wrapper
      [:button {:on-click #(complete-habit title)} "Complete"]]])
