// Compiled by ClojureScript 1.10.238 {}
goog.provide('habit_tracker.components.calendar.Calendar');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('module$Applications$server$habit_tracker$node_modules$moment$moment');
habit_tracker.components.calendar.Calendar.get_current_month_days = (function habit_tracker$components$calendar$Calendar$get_current_month_days(){
return module$Applications$server$habit_tracker$node_modules$moment$moment["default"]().daysInMonth("YYYY-MM");
});
habit_tracker.components.calendar.Calendar.generate_table_html = (function habit_tracker$components$calendar$Calendar$generate_table_html(numberOfDays){
var offsetAmount = module$Applications$server$habit_tracker$node_modules$moment$moment["default"]().startOf("month").day();
var i = (0);
var html = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null);
while(true){
if(cljs.core._EQ_.call(null,i,offsetAmount)){
return html;
} else {
var G__28245 = (i + (1));
var G__28246 = cljs.core.conj.call(null,html,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),i], null));
i = G__28245;
html = G__28246;
continue;
}
break;
}
});
habit_tracker.components.calendar.Calendar.render = (function habit_tracker$components$calendar$Calendar$render(){
var monthDays = habit_tracker.components.calendar.Calendar.get_current_month_days.call(null);
habit_tracker.components.calendar.Calendar.generate_table_html.call(null,monthDays);

return ((function (monthDays){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Calendar","div.Calendar",-810226548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.Calendar-wrapper","table.Calendar-wrapper",958754365),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Sun"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Mon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Tue"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Wed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Thur"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Fri"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Sat"], null)], null),habit_tracker.components.calendar.Calendar.generate_table_html.call(null,monthDays)], null)], null);
});
;})(monthDays))
});

//# sourceMappingURL=Calendar.js.map?rel=1542205219155
