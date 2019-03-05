// Compiled by ClojureScript 1.10.238 {}
goog.provide('habit_tracker.components.Dashboard');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('habit_tracker.components.Habit');
goog.require('habit_tracker.utils.view_handler');
goog.require('habit_tracker.components.New');
goog.require('habit_tracker.components.Tutorial');
habit_tracker.components.Dashboard.render = (function habit_tracker$components$Dashboard$render(){
return (function (){
var currentStorage = cljs.core.js__GT_clj.call(null,JSON.parse(window.localStorage.getItem("habits")));
var habits = reagent.core.atom.call(null,currentStorage);
var firstTime = cljs.core.js__GT_clj.call(null,JSON.parse(window.localStorage.getItem("firstTime")));
if(cljs.core.not.call(null,firstTime)){
habit_tracker.utils.view_handler.tutorial_view_active.call(null);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Dashboard","div.Dashboard",1804914400),habit_tracker.components.New.render.call(null,habit_tracker.utils.view_handler.active_view,habits),habit_tracker.components.Tutorial.render.call(null,habit_tracker.utils.view_handler.active_view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Header","div.Header",-753829133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.title.uppercase","h3.title.uppercase",1537702661),"Your Habits"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Dashboard-content","div.Dashboard-content",-14814664),cljs.core.doall.call(null,(function (){var iter__4292__auto__ = ((function (currentStorage,habits,firstTime){
return (function habit_tracker$components$Dashboard$render_$_iter__21905(s__21906){
return (new cljs.core.LazySeq(null,((function (currentStorage,habits,firstTime){
return (function (){
var s__21906__$1 = s__21906;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__21906__$1);
if(temp__5457__auto__){
var s__21906__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21906__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__21906__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__21908 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__21907 = (0);
while(true){
if((i__21907 < size__4291__auto__)){
var habit = cljs.core._nth.call(null,c__4290__auto__,i__21907);
cljs.core.chunk_append.call(null,b__21908,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [habit_tracker.components.Habit.render,habit], null));

var G__21909 = (i__21907 + (1));
i__21907 = G__21909;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21908),habit_tracker$components$Dashboard$render_$_iter__21905.call(null,cljs.core.chunk_rest.call(null,s__21906__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21908),null);
}
} else {
var habit = cljs.core.first.call(null,s__21906__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [habit_tracker.components.Habit.render,habit], null),habit_tracker$components$Dashboard$render_$_iter__21905.call(null,cljs.core.rest.call(null,s__21906__$2)));
}
} else {
return null;
}
break;
}
});})(currentStorage,habits,firstTime))
,null,null));
});})(currentStorage,habits,firstTime))
;
return iter__4292__auto__.call(null,cljs.core.deref.call(null,habits));
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.addNewButton","p.addNewButton",-189000126),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (currentStorage,habits,firstTime){
return (function (){
return habit_tracker.utils.view_handler.new_view_active.call(null);
});})(currentStorage,habits,firstTime))
], null),"+"], null)], null)], null);
});
});

//# sourceMappingURL=Dashboard.js.map?rel=1551826403637
