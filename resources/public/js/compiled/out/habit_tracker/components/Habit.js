// Compiled by ClojureScript 1.10.238 {}
goog.provide('habit_tracker.components.Habit');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('habit_tracker.components.Habit_view');
goog.require('habit_tracker.utils.date_formatter');
habit_tracker.components.Habit.complete_habit = (function habit_tracker$components$Habit$complete_habit(title,is_complete){
cljs.core.reset_BANG_.call(null,is_complete,"Completed");

var completedDays = cljs.core.js__GT_clj.call(null,JSON.parse(window.localStorage.getItem(title)));
return window.localStorage.setItem(title,JSON.stringify(cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,completedDays,habit_tracker.utils.date_formatter.format_todays_date.call(null)))));
});
habit_tracker.components.Habit.get_done_today = (function habit_tracker$components$Habit$get_done_today(habit){

var habit_completed_days = cljs.core.js__GT_clj.call(null,JSON.parse(window.localStorage.getItem(habit)));
if(cljs.core.truth_(habit_completed_days)){
if(cljs.core._EQ_.call(null,cljs.core.last.call(null,habit_completed_days),habit_tracker.utils.date_formatter.format_todays_date.call(null))){
return "Completed";
} else {
return "Not Done Today";
}
} else {
return "Not Done Today";
}
});
habit_tracker.components.Habit.render = (function habit_tracker$components$Habit$render(title){
var is_details_active = reagent.core.atom.call(null,"");
var is_complete = reagent.core.atom.call(null,habit_tracker.components.Habit.get_done_today.call(null,title));
return ((function (is_details_active,is_complete){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Habit","div.Habit",-1616572144),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [habit_tracker.components.Habit_view.render,title,is_details_active], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title-wrapper","div.title-wrapper",-455103576),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.title","h3.title",1837656649),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (is_details_active,is_complete){
return (function (){
return cljs.core.reset_BANG_.call(null,is_details_active,"active");
});})(is_details_active,is_complete))
], null),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button-wrapper","div.button-wrapper",-603753840),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,is_complete),"Not Done Today"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (is_details_active,is_complete){
return (function (){
return habit_tracker.components.Habit.complete_habit.call(null,title,is_complete);
});})(is_details_active,is_complete))
], null),"Complete"], null):"Completed For Today!")], null)], null);
});
;})(is_details_active,is_complete))
});

//# sourceMappingURL=Habit.js.map?rel=1542205219179