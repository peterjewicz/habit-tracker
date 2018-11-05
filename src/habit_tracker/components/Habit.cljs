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

(defn get-done-today [habit]
  "Checks the completions for a habit to determine if it's been done today"
  (let [habit-completed-days (js->clj (.parse js/JSON (.getItem (.-localStorage js/window) habit)))]
  (if habit-completed-days
    ; We only need to check the last one as it's the most recent
    (if (= (last habit-completed-days) (date_formatter/format-todays-date))
      "Completed!"
      (do "Not Done Today"))
    (do "Not Done Today"))))

(defn render [title]
  [:div.Habit
    [:h3.title title]
    ; [:p.status "Not Done Today!"]
    [:p.status (get-done-today title)]
    [:div.button-wrapper
      [:button {:on-click #(complete-habit title)} "Complete"]]])
