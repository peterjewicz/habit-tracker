(ns habit_tracker.components.Tutorial
  (:require [reagent.core :as reagent :refer [atom]]
            [habit_tracker.utils.view_handler :as view_handler]))

(defonce tutorial-slide-active(atom {:slide2 false :slide3 false :slide4 false}))


; TODO there's a better way to do this
(defn activate-slide-2 []
  (reset! tutorial-slide-active {
    :slide2 "active"
    :slide3 false
    :slide4 false}))

(defn activate-slide-3 []
  (reset! tutorial-slide-active {
    :slide2 "active"
    :slide3 "active"
    :slide4 false}))

(defn activate-slide-4 []
  (reset! tutorial-slide-active {
    :slide2 "active"
    :slide3 "active"
    :slide4 "active"}))

(defn finish-tutorial []
  "Finishes the tutorial by setting dashboard active and saving tag to localstorage"
  (.setItem (.-localStorage js/window) "firstTime" true)
  (view_handler/home-view-active))

(defn render [active ]
  [:div.Tutorial {:class (:tutorial @active)}
    [:div.Tutorial-slide.slide1.active
      [:h1 "Welcome To Daily Habit Tracker!"]
      [:p "The Easy Way To Build New Habits Each Day"]
      [:p {:on-click #(activate-slide-2)} "->"]]
    [:div.Tutorial-slide.slide2 {:class (:slide2 @tutorial-slide-active)}
      [:img {:src "images/tutorial-1.png"}]
      [:h3 "Quickly Add new Habits To Track Each Day"]
      [:p {:on-click #(activate-slide-3)} "->"]]
    [:div.Tutorial-slide.slide3 {:class (:slide3 @tutorial-slide-active)}
      [:img {:src "images/tutorial-2.png"}]
      [:h3 "One Tap To Complete Each Day"]
      [:p {:on-click #(activate-slide-4)} "->"]]
    [:div.Tutorial-slide.slide4 {:class (:slide4 @tutorial-slide-active)}
      [:img {:src "images/tutorial-3.png"}]
      [:h3 "Keep Up With Your Progress and Streaks"]
      [:button {:on-click #(finish-tutorial)} "Get Started"]]])
