(ns habit_tracker.components.Habit
  (:require [reagent.core :as reagent :refer [atom]]
            [habit_tracker.components.Habit_view :as Habit_view]
            [habit_tracker.utils.date_formatter :as date_formatter]))

(defn get-habit [habit]
  "Grabs the list of dates for a habit"
  (js->clj (.parse js/JSON (.getItem (.-localStorage js/window) habit))))

; TODO don't let two of the same days
(defn complete-habit [title is-complete habits]
  (reset! is-complete "Completed")
  (let [completedDays (js->clj (.parse js/JSON (.getItem (.-localStorage js/window) title)))]
  (.setItem
        (.-localStorage js/window) title
        (.stringify js/JSON
          (clj->js(conj completedDays (date_formatter/format-todays-date)))))
          (swap! habits conj (date_formatter/format-todays-date))))

(defn get-done-today [habit]
  "Checks the completions for a habit to determine if it's been done today"
  (let [habit-completed-days (js->clj (.parse js/JSON (.getItem (.-localStorage js/window) habit)))]
  (if habit-completed-days
    ; We only need to check the last one as it's the most recent
    (if (= (last habit-completed-days) (date_formatter/format-todays-date))
      "Completed"
      "Not Done Today")
    "Not Done Today")))


(defn render [title]
  (let [is-details-active (atom "")
        is-complete (atom (get-done-today title))
        habits (atom (get-habit title))] ;; <-- not included in `render`
    (fn []  ;; That returns a function  <-- `render` is from here down
      [:div.Habit
        [Habit_view/render habits title is-details-active]
        [:div.title-wrapper
          [:h3.title {:on-click #(reset! is-details-active "active")} title]]
        [:div.button-wrapper
          (if (= @is-complete "Not Done Today")
            [:button {:on-click #(complete-habit title is-complete habits)} "Complete"]
            [:span {:on-click #(reset! is-details-active "active")} "Completed For Today!"])]])))
