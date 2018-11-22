// Compiled by ClojureScript 1.10.238 {}
goog.provide('habit_tracker.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('habit_tracker.utils.view_handler');
goog.require('habit_tracker.components.Dashboard');
goog.require('habit_tracker.components.New');
habit_tracker.core.multiply = (function habit_tracker$core$multiply(a,b){
return (a * b);
});
habit_tracker.core.get_app_element = (function habit_tracker$core$get_app_element(){
return goog.dom.getElement("app");
});
habit_tracker.core.Root = (function habit_tracker$core$Root(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.MainWrapper","div.MainWrapper",-1637951801),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [habit_tracker.components.Dashboard.render], null)], null);
});
habit_tracker.core.mount = (function habit_tracker$core$mount(el){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [habit_tracker.core.Root], null),el);
});
habit_tracker.core.mount_app_element = (function habit_tracker$core$mount_app_element(){
var temp__5457__auto__ = habit_tracker.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return habit_tracker.core.mount.call(null,el);
} else {
return null;
}
});
habit_tracker.core.mount_app_element.call(null);
habit_tracker.core.on_reload = (function habit_tracker$core$on_reload(){
return habit_tracker.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map?rel=1542817780661
