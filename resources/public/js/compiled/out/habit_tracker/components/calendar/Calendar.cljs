(ns habit_tracker.components.calendar.Calendar
  (:require [reagent.core :as reagent :refer [atom]]
            ["moment" :as moment]))

(defn get-current-month-days []
  (.daysInMonth (moment) "YYYY-MM"))

(defn generate-table-html [numberOfDays]
  (let [offsetAmount (.day (.startOf (moment) "month"))]
    (loop [i 0
          html [:tr]]
          (if (= i offsetAmount)
            html ; Our end condition and output
          (recur (inc i) (conj html [:td i]))))))


; (js/console.log (.daysInMonth (moment) "YYYY-MM") )
; moment().startOf('month')

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
