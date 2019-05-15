// Compiled by ClojureScript 1.10.238 {}
goog.provide('habit_tracker.components.New');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('habit_tracker.utils.view_handler');
goog.require('fancy_alert.core');
if(typeof habit_tracker.components.New.new_habit_name !== 'undefined'){
} else {
habit_tracker.components.New.new_habit_name = reagent.core.atom.call(null,"");
}
/**
 * Adds a new habit to localStorge to pull from later
 */
habit_tracker.components.New.add_new_habit = (function habit_tracker$components$New$add_new_habit(habits){
var currentStorage_38097 = cljs.core.js__GT_clj.call(null,JSON.parse(window.localStorage.getItem("habits")));
if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.deref.call(null,habit_tracker.components.New.new_habit_name)]),currentStorage_38097))){
window.localStorage.setItem("habits",JSON.stringify(cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,currentStorage_38097,cljs.core.deref.call(null,habit_tracker.components.New.new_habit_name)))));

cljs.core.swap_BANG_.call(null,habits,cljs.core.conj,habit_tracker.components.New.new_habit_name);

fancy_alert.core.fancy_alert(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"Habit Added!",new cljs.core.Keyword(null,"hideAfterN","hideAfterN",1402371045),false,new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),"#173392;",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"900;",new cljs.core.Keyword(null,"color","color",1011675173),"white;"], null),new cljs.core.Keyword(null,"buttonProperties","buttonProperties",1221783147),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buttonText","buttonText",282861744),"Okay"], null)], null));
} else {
alert("That Habit Already Exists");
}

return cljs.core.reset_BANG_.call(null,habit_tracker.components.New.new_habit_name,"");
});
/**
 * Grabs a new habit by the key name
 */
habit_tracker.components.New.get_habit = (function habit_tracker$components$New$get_habit(key){
return window.localStorage.getItem(key);
});
/**
 * Gets all the keys for the current localStorage session
 */
habit_tracker.components.New.get_localStorage_keys = (function habit_tracker$components$New$get_localStorage_keys(){
var localStorageItems = window.localStorage;
var localStorageLength = localStorageItems.length;
return console.log(localStorageLength);
});
habit_tracker.components.New.render = (function habit_tracker$components$New$render(active,habits){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.New","div.New",1346884937),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"add-new","add-new",-1399275206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Header","div.Header",-753829133),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.close","p.close",-1878443002),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return habit_tracker.utils.view_handler.home_view_active.call(null);
})], null),"X"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.title","h3.title",1837656649),"New Habit"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.New--content","div.New--content",-1292506787),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Add a new habit to track below"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,habit_tracker.components.New.new_habit_name),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Habit Name",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38098_SHARP_){
return cljs.core.reset_BANG_.call(null,habit_tracker.components.New.new_habit_name,p1__38098_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return habit_tracker.components.New.add_new_habit.call(null,habits);
})], null),"Add New Habit"], null)], null)], null);
});

//# sourceMappingURL=New.js.map?rel=1557924059246
