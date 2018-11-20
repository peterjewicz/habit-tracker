// Compiled by ClojureScript 1.10.238 {}
goog.provide('habit_tracker.components.Habit');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('habit_tracker.components.Habit_view');
goog.require('habit_tracker.utils.date_formatter');
habit_tracker.components.Habit.get_habit = (function habit_tracker$components$Habit$get_habit(habit){

return cljs.core.js__GT_clj.call(null,JSON.parse(window.localStorage.getItem(habit)));
});
habit_tracker.components.Habit.complete_habit = (function habit_tracker$components$Habit$complete_habit(title,is_complete,habits){
cljs.core.reset_BANG_.call(null,is_complete,"Completed");

var completedDays = cljs.core.js__GT_clj.call(null,JSON.parse(window.localStorage.getItem(title)));
window.localStorage.setItem(title,JSON.stringify(cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,completedDays,habit_tracker.utils.date_formatter.format_todays_date.call(null)))));

return cljs.core.swap_BANG_.call(null,habits,cljs.core.conj,habit_tracker.utils.date_formatter.format_todays_date.call(null));
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
var habits = reagent.core.atom.call(null,habit_tracker.components.Habit.get_habit.call(null,title));
return ((function (is_details_active,is_complete,habits){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Habit","div.Habit",-1616572144),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [habit_tracker.components.Habit_view.render,habits,title,is_details_active], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title-wrapper","div.title-wrapper",-455103576),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.title","h3.title",1837656649),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (is_details_active,is_complete,habits){
return (function (){
return cljs.core.reset_BANG_.call(null,is_details_active,"active");
});})(is_details_active,is_complete,habits))
], null),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button-wrapper","div.button-wrapper",-603753840),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,is_complete),"Not Done Today"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (is_details_active,is_complete,habits){
return (function (){
return habit_tracker.components.Habit.complete_habit.call(null,title,is_complete,habits);
});})(is_details_active,is_complete,habits))
], null),"Complete"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (is_details_active,is_complete,habits){
return (function (){
return cljs.core.reset_BANG_.call(null,is_details_active,"active");
});})(is_details_active,is_complete,habits))
], null),"Completed For Today!"], null))], null)], null);
});
;})(is_details_active,is_complete,habits))
});

//# sourceMappingURL=Habit.js.map?rel=1542636580833
