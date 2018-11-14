// Compiled by ClojureScript 1.10.238 {}
goog.provide('habit_tracker.components.Habit_view');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('habit_tracker.components.calendar.Calendar');
habit_tracker.components.Habit_view.get_habit = (function habit_tracker$components$Habit_view$get_habit(habit){

return cljs.core.js__GT_clj.call(null,JSON.parse(window.localStorage.getItem(habit)));
});
habit_tracker.components.Habit_view.render = (function habit_tracker$components$Habit_view$render(title,opened){
var habit = habit_tracker.components.Habit_view.get_habit.call(null,title);
return ((function (habit){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Habit-View","div.Habit-View",135581833),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,opened)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Header","div.Header",-753829133),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.close","p.close",-1878443002),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (habit){
return (function (){
return cljs.core.reset_BANG_.call(null,opened,"");
});})(habit))
], null),"X"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.title","h3.title",1837656649),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#Calendar","div#Calendar",-706580000),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [habit_tracker.components.calendar.Calendar.render], null)], null)], null);
});
;})(habit))
});

//# sourceMappingURL=Habit_view.js.map?rel=1542237921664
