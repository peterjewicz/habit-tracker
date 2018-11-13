// Compiled by ClojureScript 1.10.238 {}
goog.provide('habit_tracker.utils.view_handler');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof habit_tracker.utils.view_handler.active_view !== 'undefined'){
} else {
habit_tracker.utils.view_handler.active_view = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),true,new cljs.core.Keyword(null,"add-new","add-new",-1399275206),false], null));
}
habit_tracker.utils.view_handler.home_view_active = (function habit_tracker$utils$view_handler$home_view_active(){
return cljs.core.reset_BANG_.call(null,habit_tracker.utils.view_handler.active_view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),true,new cljs.core.Keyword(null,"add-new","add-new",-1399275206),false], null));
});
habit_tracker.utils.view_handler.new_view_active = (function habit_tracker$utils$view_handler$new_view_active(){
return cljs.core.reset_BANG_.call(null,habit_tracker.utils.view_handler.active_view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"home","home",-74557309),false,new cljs.core.Keyword(null,"add-new","add-new",-1399275206),true], null));
});

//# sourceMappingURL=view_handler.js.map?rel=1542151510993
