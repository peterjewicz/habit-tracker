;Date Functionality
(ns habit_tracker.utils.date_formatter)


(defn format-todays-date
  "Returns todays date formated mm/dd/yyyy"
  []
  (let [currentDate (js/Date.)]
    (str (+ 1(.getMonth currentDate)) "/"
         (.getDate currentDate) "/"
         (.getFullYear currentDate))))
