// Compiled by ClojureScript 1.10.238 {}
goog.provide('habit_tracker.components.Habit_view');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('module$Applications$server$habit_tracker$node_modules$fullcalendar$dist$fullcalendar');
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
], null),"X"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.title","h3.title",1837656649),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Calendar","div.Calendar",-810226548),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"cal here"], null)], null)], null);
});
;})(habit))
});

//# sourceMappingURL=Habit_view.js.map?rel=1542151907301
