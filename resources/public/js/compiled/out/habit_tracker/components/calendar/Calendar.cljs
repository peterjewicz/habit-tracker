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

(defn generate-table-row [offsetAmount numberOfDays i currentMonth currentYear date-values]
  "Generates the table HTML"
  (loop [x 1
         row [:tr]]
        (if (= x 8)
          row
          (do
              (if ( some #{(str currentMonth "/" (- (+ i x) offsetAmount) "/" currentYear)} date-values)
              (recur (inc x) (conj row [:td.active (get-day-display offsetAmount numberOfDays (+ i x))]))
              (recur (inc x) (conj row [:td (get-day-display offsetAmount numberOfDays (+ i x))]))))
          )))

(defn generate-table-html [numberOfDays currentMonth currentYear date-values]
  (let [offsetAmount (.day (.startOf (moment) "month"))
        loopTotal (+ offsetAmount numberOfDays)]
    (loop [i 0
          html [:tbody]]
          (if (>= i loopTotal)
            html ; Our end condition and output
          (recur (+ i 7) (conj html (generate-table-row offsetAmount numberOfDays i currentMonth currentYear date-values)))))))


(defn render [dates]
  (let [monthDays (get-current-month-days)
        currentMonth 11
        currentYear 2018]
    (fn []
    [:div.Calendar
      (.format (moment) "MMMM")
      [:table.Calendar-wrapper
        [:tr
          [:th "Sun"]
          [:th "Mon"]
          [:th "Tue"]
          [:th "Wed"]
          [:th "Thur"]
          [:th "Fri"]
          [:th "Sat"]]
          (generate-table-html monthDays currentMonth currentYear dates)]])))
