// Compiled by ClojureScript 1.10.238 {}
goog.provide('habit_tracker.components.Dashboard');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('habit_tracker.components.Habit');
goog.require('habit_tracker.utils.view_handler');
/**
 * Gets all the habits on load of the page
 */
habit_tracker.components.Dashboard.get_all_habits = (function habit_tracker$components$Dashboard$get_all_habits(){
return null;
});
var currentStorage_27606 = cljs.core.js__GT_clj.call(null,JSON.parse(window.localStorage.getItem("habits")));
if(typeof habit_tracker.components.Dashboard.habits !== 'undefined'){
} else {
habit_tracker.components.Dashboard.habits = reagent.core.atom.call(null,currentStorage_27606);
}
habit_tracker.components.Dashboard.render = (function habit_tracker$components$Dashboard$render(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Dashboard","div.Dashboard",1804914400),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Header","div.Header",-753829133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.title.uppercase","h2.title.uppercase",1663906155),"Your Habits"], null)], null),cljs.core.doall.call(null,(function (){var iter__4292__auto__ = (function habit_tracker$components$Dashboard$render_$_iter__27607(s__27608){
return (new cljs.core.LazySeq(null,(function (){
var s__27608__$1 = s__27608;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__27608__$1);
if(temp__5457__auto__){
var s__27608__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27608__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__27608__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__27610 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__27609 = (0);
while(true){
if((i__27609 < size__4291__auto__)){
var habit = cljs.core._nth.call(null,c__4290__auto__,i__27609);
cljs.core.chunk_append.call(null,b__27610,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [habit_tracker.components.Habit.render,habit], null));

var G__27611 = (i__27609 + (1));
i__27609 = G__27611;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27610),habit_tracker$components$Dashboard$render_$_iter__27607.call(null,cljs.core.chunk_rest.call(null,s__27608__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27610),null);
}
} else {
var habit = cljs.core.first.call(null,s__27608__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [habit_tracker.components.Habit.render,habit], null),habit_tracker$components$Dashboard$render_$_iter__27607.call(null,cljs.core.rest.call(null,s__27608__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.deref.call(null,habit_tracker.components.Dashboard.habits));
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.addNewButton","p.addNewButton",-189000126),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return habit_tracker.utils.view_handler.new_view_active.call(null);
})], null),"+"], null)], null);
});

//# sourceMappingURL=Dashboard.js.map?rel=1542417080092
