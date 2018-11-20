// Compiled by ClojureScript 1.10.238 {}
goog.provide('habit_tracker.components.Tutorial');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('habit_tracker.utils.view_handler');
if(typeof habit_tracker.components.Tutorial.tutorial_slide_active !== 'undefined'){
} else {
habit_tracker.components.Tutorial.tutorial_slide_active = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"slide2","slide2",-1997938053),false,new cljs.core.Keyword(null,"slide3","slide3",-142465950),false,new cljs.core.Keyword(null,"slide4","slide4",-2073766964),false], null));
}
habit_tracker.components.Tutorial.activate_slide_2 = (function habit_tracker$components$Tutorial$activate_slide_2(){
return cljs.core.reset_BANG_.call(null,habit_tracker.components.Tutorial.tutorial_slide_active,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"slide2","slide2",-1997938053),"active",new cljs.core.Keyword(null,"slide3","slide3",-142465950),false,new cljs.core.Keyword(null,"slide4","slide4",-2073766964),false], null));
});
habit_tracker.components.Tutorial.activate_slide_3 = (function habit_tracker$components$Tutorial$activate_slide_3(){
return cljs.core.reset_BANG_.call(null,habit_tracker.components.Tutorial.tutorial_slide_active,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"slide2","slide2",-1997938053),"active",new cljs.core.Keyword(null,"slide3","slide3",-142465950),"active",new cljs.core.Keyword(null,"slide4","slide4",-2073766964),false], null));
});
habit_tracker.components.Tutorial.activate_slide_4 = (function habit_tracker$components$Tutorial$activate_slide_4(){
return cljs.core.reset_BANG_.call(null,habit_tracker.components.Tutorial.tutorial_slide_active,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"slide2","slide2",-1997938053),"active",new cljs.core.Keyword(null,"slide3","slide3",-142465950),"active",new cljs.core.Keyword(null,"slide4","slide4",-2073766964),"active"], null));
});
habit_tracker.components.Tutorial.finish_tutorial = (function habit_tracker$components$Tutorial$finish_tutorial(){

window.localStorage.setItem("firstTime",true);

return habit_tracker.utils.view_handler.home_view_active.call(null);
});
habit_tracker.components.Tutorial.render = (function habit_tracker$components$Tutorial$render(active){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Tutorial","div.Tutorial",2049885165),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"tutorial","tutorial",1017223195).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Tutorial-slide.slide1.active","div.Tutorial-slide.slide1.active",1787902860),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Welcome To Daily Habit Tracker!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The Easy Way To Build New Habits Each Day"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return habit_tracker.components.Tutorial.activate_slide_2.call(null);
})], null),"->"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Tutorial-slide.slide2","div.Tutorial-slide.slide2",-1787793072),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"slide2","slide2",-1997938053).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,habit_tracker.components.Tutorial.tutorial_slide_active))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Quickly Add new Habits To Track Each Day"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return habit_tracker.components.Tutorial.activate_slide_3.call(null);
})], null),"->"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Tutorial-slide.slide3","div.Tutorial-slide.slide3",-523397441),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"slide3","slide3",-142465950).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,habit_tracker.components.Tutorial.tutorial_slide_active))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"One Tap To Complete Each Day"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return habit_tracker.components.Tutorial.activate_slide_4.call(null);
})], null),"->"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Tutorial-slide.slide4","div.Tutorial-slide.slide4",-374250332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"slide4","slide4",-2073766964).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,habit_tracker.components.Tutorial.tutorial_slide_active))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Keep Up With Your Progress and Streaks"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return habit_tracker.components.Tutorial.finish_tutorial.call(null);
})], null),"Get Started"], null)], null)], null);
});

//# sourceMappingURL=Tutorial.js.map?rel=1542723256258
