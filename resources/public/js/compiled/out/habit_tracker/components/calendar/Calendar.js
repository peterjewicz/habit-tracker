// Compiled by ClojureScript 1.10.238 {}
goog.provide('habit_tracker.components.calendar.Calendar');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('module$Applications$server$habit_tracker$node_modules$moment$moment');
habit_tracker.components.calendar.Calendar.get_current_month_days = (function habit_tracker$components$calendar$Calendar$get_current_month_days(){
return module$Applications$server$habit_tracker$node_modules$moment$moment["default"]().daysInMonth("YYYY-MM");
});
habit_tracker.components.calendar.Calendar.get_day_display = (function habit_tracker$components$calendar$Calendar$get_day_display(offsetAmount,numberOfDays,currentCount){

if((currentCount <= offsetAmount)){
return "";
} else {
if((currentCount > (offsetAmount + numberOfDays))){
return "";
} else {
return (currentCount - offsetAmount);
}
}
});
habit_tracker.components.calendar.Calendar.generate_table_row = (function habit_tracker$components$calendar$Calendar$generate_table_row(offsetAmount,numberOfDays,i,currentMonth,currentYear,date_values){

var x = (1);
var row = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null);
while(true){
if(cljs.core._EQ_.call(null,x,(8))){
return row;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(currentMonth),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((i + x) - offsetAmount)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(currentYear)].join('')]),date_values))){
var G__27881 = (x + (1));
var G__27882 = cljs.core.conj.call(null,row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.active","td.active",1072089856),habit_tracker.components.calendar.Calendar.get_day_display.call(null,offsetAmount,numberOfDays,(i + x))], null));
x = G__27881;
row = G__27882;
continue;
} else {
var G__27883 = (x + (1));
var G__27884 = cljs.core.conj.call(null,row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),habit_tracker.components.calendar.Calendar.get_day_display.call(null,offsetAmount,numberOfDays,(i + x))], null));
x = G__27883;
row = G__27884;
continue;
}
}
break;
}
});
habit_tracker.components.calendar.Calendar.generate_table_html = (function habit_tracker$components$calendar$Calendar$generate_table_html(numberOfDays,currentMonth,currentYear,date_values){
var offsetAmount = module$Applications$server$habit_tracker$node_modules$moment$moment["default"](currentMonth,"MM").startOf("month").day();
var loopTotal = (offsetAmount + numberOfDays);
var i = (0);
var html = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null);
while(true){
if((i >= loopTotal)){
return html;
} else {
var G__27885 = (i + (7));
var G__27886 = cljs.core.conj.call(null,html,habit_tracker.components.calendar.Calendar.generate_table_row.call(null,offsetAmount,numberOfDays,i,currentMonth,currentYear,date_values));
i = G__27885;
html = G__27886;
continue;
}
break;
}
});
habit_tracker.components.calendar.Calendar.increment_month = (function habit_tracker$components$calendar$Calendar$increment_month(current){
if(cljs.core._EQ_.call(null,current,(12))){
return (1);
} else {
return (parseInt(current) + (1));
}
});
habit_tracker.components.calendar.Calendar.deincrement_month = (function habit_tracker$components$calendar$Calendar$deincrement_month(current){
if(cljs.core._EQ_.call(null,current,(1))){
return (12);
} else {
return (parseInt(current) - (1));
}
});
habit_tracker.components.calendar.Calendar.render = (function habit_tracker$components$calendar$Calendar$render(dates){
var monthDays = habit_tracker.components.calendar.Calendar.get_current_month_days.call(null);
var currentMonth = reagent.core.atom.call(null,module$Applications$server$habit_tracker$node_modules$moment$moment["default"]().format("MM"));
var currentYear = (2018);
return ((function (monthDays,currentMonth,currentYear){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Calendar","div.Calendar",-810226548),module$Applications$server$habit_tracker$node_modules$moment$moment["default"](cljs.core.deref.call(null,currentMonth),"MM").format("MMMM"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (monthDays,currentMonth,currentYear){
return (function (){
return cljs.core.swap_BANG_.call(null,currentMonth,((function (monthDays,currentMonth,currentYear){
return (function (current){
return habit_tracker.components.calendar.Calendar.increment_month.call(null,current);
});})(monthDays,currentMonth,currentYear))
);
});})(monthDays,currentMonth,currentYear))
], null),"->"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (monthDays,currentMonth,currentYear){
return (function (){
return cljs.core.swap_BANG_.call(null,currentMonth,((function (monthDays,currentMonth,currentYear){
return (function (current){
return habit_tracker.components.calendar.Calendar.deincrement_month.call(null,current);
});})(monthDays,currentMonth,currentYear))
);
});})(monthDays,currentMonth,currentYear))
], null),"<-"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.deref.call(null,currentMonth)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.Calendar-wrapper","table.Calendar-wrapper",958754365),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Sun"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Mon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Tue"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Wed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Thur"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Fri"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Sat"], null)], null),habit_tracker.components.calendar.Calendar.generate_table_html.call(null,monthDays,cljs.core.deref.call(null,currentMonth),currentYear,dates)], null)], null);
});
;})(monthDays,currentMonth,currentYear))
});

//# sourceMappingURL=Calendar.js.map?rel=1542374872687
