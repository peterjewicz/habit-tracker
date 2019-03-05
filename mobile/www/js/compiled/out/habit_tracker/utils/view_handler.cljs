;All the functionality and vars for handling the different views of the apps
(ns habit_tracker.utils.view_handler
  (:require [reagent.core :as reagent :refer [atom]]))

(defonce active-view (atom {:dashboard true :add-new false :tutorial false}))


; TODO create a generic function that sets all to false except the one passed in
; easier than writing a new function to handle every individual view
; We have something better in the time tracker app, we can add that logic here
; and just swap the current state into the atom
(defn home-view-active []
  (reset! active-view {
    :dashboard true
    :add-new false
    :tutorial false}))

(defn new-view-active []
  (reset! active-view {
    :home false
    :add-new true
    :tutorial false}))

(defn tutorial-view-active []
  (reset! active-view {
    :home false
    :add-new false
    :tutorial true}))
