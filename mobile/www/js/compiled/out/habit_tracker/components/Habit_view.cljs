(ns habit_tracker.components.Habit_view
  (:require [reagent.core :as reagent :refer [atom]]
            [habit_tracker.components.calendar.Calendar :as Calendar]
            ["moment" :as moment]))

(defn get-current-streak [currentStreak currentDate dates]
  (let [compareToDate (peek dates)
        currentToCompare (moment currentDate)]
    (if (= 1 (.diff currentToCompare (moment compareToDate) "days"))
      (inc currentStreak)
      0)))

(defn compare-streaks [currentStreak longestStreak]
  (if (> currentStreak longestStreak)
    currentStreak
    longestStreak))

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

(defn get-current-streak-length [dates]
  "Itterates through the list of dates and gets the current consecutive streak"
  (let [todaysDate  (moment)
        lastDate (peek dates)
        dateList dates]
        (if (or (= lastDate (.format todaysDate "MM/DD/YYYY")) (= 1 (.diff todaysDate (moment lastDate) "days")))
        (do
          (loop [currentStreak 1
                 lastDate (peek dateList)
                 dateList (pop dateList)]
             (if (= 1 (.diff (moment lastDate) (moment (last dateList)) "days"))
              (recur (inc currentStreak) (peek dateList) (pop dateList))
              currentStreak
              ))) 0)))

(defn render [habits title opened]
  (let [test 1]
    (fn []
    [:div.Habit-View {:class @opened}
      [:div.Header
        [:p.close {:on-click #(reset! opened "")} "X"]
        [:h3.title title]]
        [:div#Calendar
          [Calendar/render habits]]
        [:div.Stats
          [:h2.Stats--header "Stats"]
          [:h4 (str "Total: " (count @habits))]
          [:h4 (str "Longest Streak: " (get-longest-streak @habits))]
          [:h4 (str "Current Streak: " (get-current-streak-length @habits))]]])))
