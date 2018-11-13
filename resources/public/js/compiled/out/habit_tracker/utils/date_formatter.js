// Compiled by ClojureScript 1.10.238 {}
goog.provide('habit_tracker.utils.date_formatter');
goog.require('cljs.core');
/**
 * Returns todays date formated mm/dd/yyyy
 */
habit_tracker.utils.date_formatter.format_todays_date = (function habit_tracker$utils$date_formatter$format_todays_date(){
var currentDate = (new Date());
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((1) + currentDate.getMonth())),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(currentDate.getDate()),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(currentDate.getFullYear())].join('');
});

//# sourceMappingURL=date_formatter.js.map?rel=1542151509393
