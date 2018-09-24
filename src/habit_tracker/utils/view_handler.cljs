;All the functionality and vars for handling the different views of the apps
(ns habit_tracker.utils.view_handler
  (:require [reagent.core :as reagent :refer [atom]]))

(defonce active-view (atom {:dashboard true :add-new false}))


; TODO create a generic function that sets all to false except the one passed in
; easier than writing a new function to handle every individual view
(defn home-view-active []
  (reset! active-view {
    :dashboard true
    :add-new false}))

(defn new-view-active []
  (reset! active-view {
    :home false
    :add-new true}))
