// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30527){
var map__30528 = p__30527;
var map__30528__$1 = ((((!((map__30528 == null)))?(((((map__30528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30528):map__30528);
var m = map__30528__$1;
var n = cljs.core.get.call(null,map__30528__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30528__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30530_30552 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30531_30553 = null;
var count__30532_30554 = (0);
var i__30533_30555 = (0);
while(true){
if((i__30533_30555 < count__30532_30554)){
var f_30556 = cljs.core._nth.call(null,chunk__30531_30553,i__30533_30555);
cljs.core.println.call(null,"  ",f_30556);


var G__30557 = seq__30530_30552;
var G__30558 = chunk__30531_30553;
var G__30559 = count__30532_30554;
var G__30560 = (i__30533_30555 + (1));
seq__30530_30552 = G__30557;
chunk__30531_30553 = G__30558;
count__30532_30554 = G__30559;
i__30533_30555 = G__30560;
continue;
} else {
var temp__5457__auto___30561 = cljs.core.seq.call(null,seq__30530_30552);
if(temp__5457__auto___30561){
var seq__30530_30562__$1 = temp__5457__auto___30561;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30530_30562__$1)){
var c__4319__auto___30563 = cljs.core.chunk_first.call(null,seq__30530_30562__$1);
var G__30564 = cljs.core.chunk_rest.call(null,seq__30530_30562__$1);
var G__30565 = c__4319__auto___30563;
var G__30566 = cljs.core.count.call(null,c__4319__auto___30563);
var G__30567 = (0);
seq__30530_30552 = G__30564;
chunk__30531_30553 = G__30565;
count__30532_30554 = G__30566;
i__30533_30555 = G__30567;
continue;
} else {
var f_30568 = cljs.core.first.call(null,seq__30530_30562__$1);
cljs.core.println.call(null,"  ",f_30568);


var G__30569 = cljs.core.next.call(null,seq__30530_30562__$1);
var G__30570 = null;
var G__30571 = (0);
var G__30572 = (0);
seq__30530_30552 = G__30569;
chunk__30531_30553 = G__30570;
count__30532_30554 = G__30571;
i__30533_30555 = G__30572;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30573 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30573);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30573)))?cljs.core.second.call(null,arglists_30573):arglists_30573));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30534_30574 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30535_30575 = null;
var count__30536_30576 = (0);
var i__30537_30577 = (0);
while(true){
if((i__30537_30577 < count__30536_30576)){
var vec__30538_30578 = cljs.core._nth.call(null,chunk__30535_30575,i__30537_30577);
var name_30579 = cljs.core.nth.call(null,vec__30538_30578,(0),null);
var map__30541_30580 = cljs.core.nth.call(null,vec__30538_30578,(1),null);
var map__30541_30581__$1 = ((((!((map__30541_30580 == null)))?(((((map__30541_30580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30541_30580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30541_30580):map__30541_30580);
var doc_30582 = cljs.core.get.call(null,map__30541_30581__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30583 = cljs.core.get.call(null,map__30541_30581__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30579);

cljs.core.println.call(null," ",arglists_30583);

if(cljs.core.truth_(doc_30582)){
cljs.core.println.call(null," ",doc_30582);
} else {
}


var G__30584 = seq__30534_30574;
var G__30585 = chunk__30535_30575;
var G__30586 = count__30536_30576;
var G__30587 = (i__30537_30577 + (1));
seq__30534_30574 = G__30584;
chunk__30535_30575 = G__30585;
count__30536_30576 = G__30586;
i__30537_30577 = G__30587;
continue;
} else {
var temp__5457__auto___30588 = cljs.core.seq.call(null,seq__30534_30574);
if(temp__5457__auto___30588){
var seq__30534_30589__$1 = temp__5457__auto___30588;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30534_30589__$1)){
var c__4319__auto___30590 = cljs.core.chunk_first.call(null,seq__30534_30589__$1);
var G__30591 = cljs.core.chunk_rest.call(null,seq__30534_30589__$1);
var G__30592 = c__4319__auto___30590;
var G__30593 = cljs.core.count.call(null,c__4319__auto___30590);
var G__30594 = (0);
seq__30534_30574 = G__30591;
chunk__30535_30575 = G__30592;
count__30536_30576 = G__30593;
i__30537_30577 = G__30594;
continue;
} else {
var vec__30543_30595 = cljs.core.first.call(null,seq__30534_30589__$1);
var name_30596 = cljs.core.nth.call(null,vec__30543_30595,(0),null);
var map__30546_30597 = cljs.core.nth.call(null,vec__30543_30595,(1),null);
var map__30546_30598__$1 = ((((!((map__30546_30597 == null)))?(((((map__30546_30597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30546_30597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30546_30597):map__30546_30597);
var doc_30599 = cljs.core.get.call(null,map__30546_30598__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30600 = cljs.core.get.call(null,map__30546_30598__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30596);

cljs.core.println.call(null," ",arglists_30600);

if(cljs.core.truth_(doc_30599)){
cljs.core.println.call(null," ",doc_30599);
} else {
}


var G__30601 = cljs.core.next.call(null,seq__30534_30589__$1);
var G__30602 = null;
var G__30603 = (0);
var G__30604 = (0);
seq__30534_30574 = G__30601;
chunk__30535_30575 = G__30602;
count__30536_30576 = G__30603;
i__30537_30577 = G__30604;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__30548 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30549 = null;
var count__30550 = (0);
var i__30551 = (0);
while(true){
if((i__30551 < count__30550)){
var role = cljs.core._nth.call(null,chunk__30549,i__30551);
var temp__5457__auto___30605__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30605__$1)){
var spec_30606 = temp__5457__auto___30605__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30606));
} else {
}


var G__30607 = seq__30548;
var G__30608 = chunk__30549;
var G__30609 = count__30550;
var G__30610 = (i__30551 + (1));
seq__30548 = G__30607;
chunk__30549 = G__30608;
count__30550 = G__30609;
i__30551 = G__30610;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__30548);
if(temp__5457__auto____$1){
var seq__30548__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30548__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30548__$1);
var G__30611 = cljs.core.chunk_rest.call(null,seq__30548__$1);
var G__30612 = c__4319__auto__;
var G__30613 = cljs.core.count.call(null,c__4319__auto__);
var G__30614 = (0);
seq__30548 = G__30611;
chunk__30549 = G__30612;
count__30550 = G__30613;
i__30551 = G__30614;
continue;
} else {
var role = cljs.core.first.call(null,seq__30548__$1);
var temp__5457__auto___30615__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30615__$2)){
var spec_30616 = temp__5457__auto___30615__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30616));
} else {
}


var G__30617 = cljs.core.next.call(null,seq__30548__$1);
var G__30618 = null;
var G__30619 = (0);
var G__30620 = (0);
seq__30548 = G__30617;
chunk__30549 = G__30618;
count__30550 = G__30619;
i__30551 = G__30620;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1542636593878
