(ns habit_tracker.components.Habit
  (:require [reagent.core :as reagent :refer [atom]]
            [habit_tracker.components.Habit_view :as Habit_view]
            [habit_tracker.utils.date_formatter :as date_formatter]))

(defonce is-complete (atom "Not Done Today"))

; TODO don't let two of the same days
(defn complete-habit [title is-complete]
  (reset! is-complete "Completed")
  (js/console.log @is-complete)
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
      (reset! is-complete "Completed")
      (do (reset! is-complete "Not Done Today")))
    (do (reset! is-complete "Not Done Today")))))


(defn render [title]
  (let [is-details-active (atom "")
        is-complete (atom (get-done-today title))] ;; <-- not included in `render`
    (fn []  ;; That returns a function  <-- `render` is from here down
      [:div.Habit
        (Habit_view/render title is-details-active)
        [:h3.title {:on-click #(reset! is-details-active "active")} title]
        [:p.status @is-complete]
        [:div.button-wrapper
          [:button {:on-click #(complete-habit title is-complete)} "Complete"]]])))
