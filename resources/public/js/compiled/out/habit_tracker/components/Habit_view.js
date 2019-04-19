// Compiled by ClojureScript 1.10.238 {}
goog.provide('habit_tracker.components.Habit_view');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('habit_tracker.components.calendar.Calendar');
goog.require('module$Applications$server$habit_tracker$node_modules$moment$moment');
habit_tracker.components.Habit_view.get_current_streak = (function habit_tracker$components$Habit_view$get_current_streak(currentStreak,currentDate,dates){
var compareToDate = cljs.core.peek.call(null,dates);
var currentToCompare = module$Applications$server$habit_tracker$node_modules$moment$moment["default"](currentDate);
if(cljs.core._EQ_.call(null,(1),currentToCompare.diff(module$Applications$server$habit_tracker$node_modules$moment$moment["default"](compareToDate),"days"))){
return (currentStreak + (1));
} else {
return (0);
}
});
habit_tracker.components.Habit_view.compare_streaks = (function habit_tracker$components$Habit_view$compare_streaks(currentStreak,longestStreak){
if((currentStreak > longestStreak)){
return currentStreak;
} else {
return longestStreak;
}
});
habit_tracker.components.Habit_view.get_longest_streak = (function habit_tracker$components$Habit_view$get_longest_streak(dates){

var currentStreak = (0);
var longestStreak = (0);
var dates__$1 = dates;
while(true){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,dates__$1),(0))){
if((longestStreak > (0))){
return (longestStreak + (1));
} else {
return longestStreak;
}
} else {
var currentDate = cljs.core.peek.call(null,dates__$1);
var dates__$2 = cljs.core.pop.call(null,dates__$1);
var currentStreak__$1 = habit_tracker.components.Habit_view.get_current_streak.call(null,currentStreak,currentDate,dates__$2);
var longestStreak__$1 = habit_tracker.components.Habit_view.compare_streaks.call(null,currentStreak__$1,longestStreak);
var G__27734 = currentStreak__$1;
var G__27735 = longestStreak__$1;
var G__27736 = dates__$2;
currentStreak = G__27734;
longestStreak = G__27735;
dates__$1 = G__27736;
continue;
}
break;
}
});
habit_tracker.components.Habit_view.get_current_streak_length = (function habit_tracker$components$Habit_view$get_current_streak_length(dates){

var todaysDate = module$Applications$server$habit_tracker$node_modules$moment$moment["default"]();
var lastDate = cljs.core.peek.call(null,dates);
var dateList = dates;
if(((cljs.core._EQ_.call(null,lastDate,todaysDate.format("MM/DD/YYYY"))) || (cljs.core._EQ_.call(null,(1),todaysDate.diff(module$Applications$server$habit_tracker$node_modules$moment$moment["default"](lastDate),"days"))))){
var currentStreak = (1);
var lastDate__$1 = cljs.core.peek.call(null,dateList);
var dateList__$1 = cljs.core.pop.call(null,dateList);
while(true){
if(cljs.core._EQ_.call(null,(1),module$Applications$server$habit_tracker$node_modules$moment$moment["default"](lastDate__$1).diff(module$Applications$server$habit_tracker$node_modules$moment$moment["default"](cljs.core.last.call(null,dateList__$1)),"days"))){
var G__27737 = (currentStreak + (1));
var G__27738 = cljs.core.peek.call(null,dateList__$1);
var G__27739 = cljs.core.pop.call(null,dateList__$1);
currentStreak = G__27737;
lastDate__$1 = G__27738;
dateList__$1 = G__27739;
continue;
} else {
return currentStreak;
}
break;
}
} else {
return (0);
}
});
habit_tracker.components.Habit_view.render = (function habit_tracker$components$Habit_view$render(habits,title,opened){
var test = reagent.core.atom.call(null,"");
return ((function (test){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Habit-View","div.Habit-View",135581833),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,opened)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Header","div.Header",-753829133),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.close","p.close",-1878443002),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (test){
return (function (){
return cljs.core.reset_BANG_.call(null,opened,"");
});})(test))
], null),"X"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.title","h3.title",1837656649),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#Calendar","div#Calendar",-706580000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [habit_tracker.components.calendar.Calendar.render,habits], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Stats","div.Stats",1931344051),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.Stats--header","h2.Stats--header",1754005233),"Stats"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),["Total: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.deref.call(null,habits)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),["Longest Streak: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(habit_tracker.components.Habit_view.get_longest_streak.call(null,cljs.core.deref.call(null,habits)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),["Current Streak: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(habit_tracker.components.Habit_view.get_current_streak_length.call(null,cljs.core.deref.call(null,habits)))].join('')], null)], null)], null);
});
;})(test))
});

//# sourceMappingURL=Habit_view.js.map?rel=1555715418868
