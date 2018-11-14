(ns habit_tracker.components.calendar.Calendar
  (:require [reagent.core :as reagent :refer [atom]]
            ["moment" :as moment]))

(defn get-current-month-days []
  (.daysInMonth (moment) "YYYY-MM"))

(defn get-day-display [offsetAmount numberOfDays currentCount]
  "Determines what to display for a particular table cell"
  (if (<= currentCount offsetAmount)
    ""
    (if (> currentCount (+ offsetAmount numberOfDays))
    ""
    (- currentCount offsetAmount))))

(defn generate-table-row [offsetAmount numberOfDays i]
  "Generates the table HTML"
  (loop [x 1
         row [:tr]]
        (if (= x 8)
          row
          (recur (inc x) (conj row [:td (get-day-display offsetAmount numberOfDays (+ i x))])))))

(defn generate-table-html [numberOfDays]
  (let [offsetAmount (.day (.startOf (moment) "month"))
        loopTotal (+ offsetAmount numberOfDays)]
    (loop [i 0
          html [:tbody]]
          (if (>= i loopTotal)
            html ; Our end condition and output
          (recur (+ i 7) (conj html (generate-table-row offsetAmount numberOfDays i)))))))


(defn render []
  (let [monthDays (get-current-month-days)]
    (generate-table-html monthDays)
    (fn []
    [:div.Calendar
      [:table.Calendar-wrapper
        [:tr
          [:th "Sun"]
          [:th "Mon"]
          [:th "Tue"]
          [:th "Wed"]
          [:th "Thur"]
          [:th "Fri"]
          [:th "Sat"]]
          (generate-table-html monthDays)]])))
