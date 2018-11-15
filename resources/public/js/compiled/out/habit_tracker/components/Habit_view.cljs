(ns habit_tracker.components.Habit_view
  (:require [reagent.core :as reagent :refer [atom]]
            [habit_tracker.components.calendar.Calendar :as Calendar]
            ["moment" :as moment]))

(defn get-habit [habit]
  "Grabs the list of dates for a habit"
  (js->clj (.parse js/JSON (.getItem (.-localStorage js/window) habit))))


(defn get-current-streak [currentStreak currentDate dates]
  (let [compareToDate (peek dates)
        currentToCompare (moment currentDate)]
        (js/console.log compareToDate)
        (js/console.log currentToCompare)
        (js/console.log (.diff currentToCompare (moment compareToDate) "days"))
    (if (= 1 (.diff currentToCompare (moment compareToDate) "days"))
      (inc currentStreak)
      0)))

(defn compare-streaks [currentStreak longestStreak]
  (if (> currentStreak longestStreak)
    currentStreak
    longestStreak)
  )
; TODO need to look at this as it will display 0 for a single day streak,
; we need to change the inc in the if to increment if the dates is initially larger than 0 as then it
; should always be at least a streak of 1 we can probably use current streak to check this
(defn get-longest-streak [dates]
  "Itterates through a list of dates to find the longest consecutive streak"
    (loop [currentStreak 0
           longestStreak 0
           dates dates]
           (if (= (count dates) 0)
            (if (> longestStreak 0)
              (inc longestStreak) ; Make it one more if its greater than 0 as it counts comparisons not days
              longestStreak)
           (let [currentDate (peek dates)
                 dates (pop dates)
                 currentStreak (get-current-streak currentStreak currentDate dates)
                 longestStreak (compare-streaks currentStreak longestStreak)]
                 (recur currentStreak longestStreak dates)))))


(defn render [title opened]
  (let [habit (get-habit title)]
    ; (js/console.log (get-longest-streak ["11/12/2018", "11/14/2018", "11/15/2018"]))
    (fn []
    [:div.Habit-View {:class @opened}
      [:div.Header
        [:p.close {:on-click #(reset! opened "")} "X"]
        [:h3.title title]]
        [:div#Calendar
          [Calendar/render habit]]
        [:div.Stats]
          [:h3 "Stats"]
          [:h4 (str "Total: " (count habit))]
          [:h4 (str "Longest Streak: " (get-longest-streak ["11/12/2018", "11/14/2018", "11/15/2018", "11/16/2018"]))]
          [:h4 "Current Streak: "]])))
