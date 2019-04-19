// Compiled by ClojureScript 1.10.238 {}
goog.provide('habit_tracker.components.calendar.Calendar');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('module$Applications$server$habit_tracker$node_modules$moment$moment');
habit_tracker.components.calendar.Calendar.check_false_on_month = (function habit_tracker$components$calendar$Calendar$check_false_on_month(date){

if(cljs.core._EQ_.call(null,cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join('')),(1))){
return date;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join(''),(1)))].join('');
}
});
habit_tracker.components.calendar.Calendar.get_current_month_days = (function habit_tracker$components$calendar$Calendar$get_current_month_days(currentMonth){
return module$Applications$server$habit_tracker$node_modules$moment$moment["default"](currentMonth,"MM").daysInMonth("YYYY-MM");
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
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(currentMonth),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((i + x) - offsetAmount)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(currentYear)].join('')]),date_values);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(habit_tracker.components.calendar.Calendar.check_false_on_month.call(null,currentMonth)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((i + x) - offsetAmount)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(currentYear)].join('')]),date_values);
}
})())){
var G__27726 = (x + (1));
var G__27727 = cljs.core.conj.call(null,row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.active","td.active",1072089856),habit_tracker.components.calendar.Calendar.get_day_display.call(null,offsetAmount,numberOfDays,(i + x))], null));
x = G__27726;
row = G__27727;
continue;
} else {
var G__27728 = (x + (1));
var G__27729 = cljs.core.conj.call(null,row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),habit_tracker.components.calendar.Calendar.get_day_display.call(null,offsetAmount,numberOfDays,(i + x))], null));
x = G__27728;
row = G__27729;
continue;
}
}
break;
}
});
habit_tracker.components.calendar.Calendar.generate_table_html = (function habit_tracker$components$calendar$Calendar$generate_table_html(numberOfDays,currentMonth,currentYear,date_values){
var offsetAmount = module$Applications$server$habit_tracker$node_modules$moment$moment["default"]([cljs.core.str.cljs$core$IFn$_invoke$arity$1(currentMonth),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(currentYear)].join(''),"MM/YYYY").startOf("month").day();
var loopTotal = (offsetAmount + numberOfDays);
var i = (0);
var html = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null);
while(true){
if((i >= loopTotal)){
return html;
} else {
var G__27730 = (i + (7));
var G__27731 = cljs.core.conj.call(null,html,habit_tracker.components.calendar.Calendar.generate_table_row.call(null,offsetAmount,numberOfDays,i,currentMonth,currentYear,date_values));
i = G__27730;
html = G__27731;
continue;
}
break;
}
});
habit_tracker.components.calendar.Calendar.increment_year = (function habit_tracker$components$calendar$Calendar$increment_year(currentYear){
return (parseInt(currentYear) + (1));
});
habit_tracker.components.calendar.Calendar.deincrement_year = (function habit_tracker$components$calendar$Calendar$deincrement_year(currentYear){
return (parseInt(currentYear) - (1));
});
habit_tracker.components.calendar.Calendar.increment_month = (function habit_tracker$components$calendar$Calendar$increment_month(current,currentYear,monthDays){
if(cljs.core._EQ_.call(null,current,(12))){
cljs.core.reset_BANG_.call(null,monthDays,habit_tracker.components.calendar.Calendar.get_current_month_days.call(null,(1)));

cljs.core.swap_BANG_.call(null,currentYear,(function (current__$1){
return habit_tracker.components.calendar.Calendar.increment_year.call(null,current__$1);
}));

return (1);
} else {
cljs.core.reset_BANG_.call(null,monthDays,habit_tracker.components.calendar.Calendar.get_current_month_days.call(null,(parseInt(current) + (1))));

return (parseInt(current) + (1));
}
});
habit_tracker.components.calendar.Calendar.deincrement_month = (function habit_tracker$components$calendar$Calendar$deincrement_month(current,currentYear,monthDays){
if(cljs.core._EQ_.call(null,current,(1))){
cljs.core.reset_BANG_.call(null,monthDays,habit_tracker.components.calendar.Calendar.get_current_month_days.call(null,(12)));

cljs.core.swap_BANG_.call(null,currentYear,(function (current__$1){
return habit_tracker.components.calendar.Calendar.deincrement_year.call(null,current__$1);
}));

return (12);
} else {
cljs.core.reset_BANG_.call(null,monthDays,habit_tracker.components.calendar.Calendar.get_current_month_days.call(null,(parseInt(current) - (1))));

return (parseInt(current) - (1));
}
});
habit_tracker.components.calendar.Calendar.render = (function habit_tracker$components$calendar$Calendar$render(dates){
var currentMonth = reagent.core.atom.call(null,module$Applications$server$habit_tracker$node_modules$moment$moment["default"]().format("MM"));
var currentYear = reagent.core.atom.call(null,module$Applications$server$habit_tracker$node_modules$moment$moment["default"]().format("YYYY"));
var monthDays = reagent.core.atom.call(null,habit_tracker.components.calendar.Calendar.get_current_month_days.call(null,cljs.core.deref.call(null,currentMonth)));
return ((function (currentMonth,currentYear,monthDays){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Calendar","div.Calendar",-810226548),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Calendar-Header","div.Calendar-Header",-409061792),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.Calendar-arrow","p.Calendar-arrow",-1111322593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (currentMonth,currentYear,monthDays){
return (function (){
return cljs.core.swap_BANG_.call(null,currentMonth,((function (currentMonth,currentYear,monthDays){
return (function (current,currentYear__$1){
return habit_tracker.components.calendar.Calendar.deincrement_month.call(null,current,currentYear__$1,monthDays);
});})(currentMonth,currentYear,monthDays))
,currentYear,monthDays);
});})(currentMonth,currentYear,monthDays))
], null),"<-"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.Calendar-Title","p.Calendar-Title",1330416951),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$Applications$server$habit_tracker$node_modules$moment$moment["default"](cljs.core.deref.call(null,currentMonth),"MM").format("MMMM"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,currentYear))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.Calendar-arrow","p.Calendar-arrow",-1111322593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (currentMonth,currentYear,monthDays){
return (function (){
return cljs.core.swap_BANG_.call(null,currentMonth,((function (currentMonth,currentYear,monthDays){
return (function (current,currentYear__$1){
return habit_tracker.components.calendar.Calendar.increment_month.call(null,current,currentYear__$1,monthDays);
});})(currentMonth,currentYear,monthDays))
,currentYear,monthDays);
});})(currentMonth,currentYear,monthDays))
], null),"->"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.Calendar-wrapper","table.Calendar-wrapper",958754365),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Sun"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Mon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Tue"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Wed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Thur"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Fri"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Sat"], null)], null),habit_tracker.components.calendar.Calendar.generate_table_html.call(null,cljs.core.deref.call(null,monthDays),cljs.core.deref.call(null,currentMonth),cljs.core.deref.call(null,currentYear),cljs.core.deref.call(null,dates))], null)], null);
});
;})(currentMonth,currentYear,monthDays))
});

//# sourceMappingURL=Calendar.js.map?rel=1555715418829
