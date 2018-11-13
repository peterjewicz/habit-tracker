// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30513){
var map__30514 = p__30513;
var map__30514__$1 = ((((!((map__30514 == null)))?(((((map__30514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30514):map__30514);
var m = map__30514__$1;
var n = cljs.core.get.call(null,map__30514__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30514__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__30516_30538 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30517_30539 = null;
var count__30518_30540 = (0);
var i__30519_30541 = (0);
while(true){
if((i__30519_30541 < count__30518_30540)){
var f_30542 = cljs.core._nth.call(null,chunk__30517_30539,i__30519_30541);
cljs.core.println.call(null,"  ",f_30542);


var G__30543 = seq__30516_30538;
var G__30544 = chunk__30517_30539;
var G__30545 = count__30518_30540;
var G__30546 = (i__30519_30541 + (1));
seq__30516_30538 = G__30543;
chunk__30517_30539 = G__30544;
count__30518_30540 = G__30545;
i__30519_30541 = G__30546;
continue;
} else {
var temp__5457__auto___30547 = cljs.core.seq.call(null,seq__30516_30538);
if(temp__5457__auto___30547){
var seq__30516_30548__$1 = temp__5457__auto___30547;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30516_30548__$1)){
var c__4319__auto___30549 = cljs.core.chunk_first.call(null,seq__30516_30548__$1);
var G__30550 = cljs.core.chunk_rest.call(null,seq__30516_30548__$1);
var G__30551 = c__4319__auto___30549;
var G__30552 = cljs.core.count.call(null,c__4319__auto___30549);
var G__30553 = (0);
seq__30516_30538 = G__30550;
chunk__30517_30539 = G__30551;
count__30518_30540 = G__30552;
i__30519_30541 = G__30553;
continue;
} else {
var f_30554 = cljs.core.first.call(null,seq__30516_30548__$1);
cljs.core.println.call(null,"  ",f_30554);


var G__30555 = cljs.core.next.call(null,seq__30516_30548__$1);
var G__30556 = null;
var G__30557 = (0);
var G__30558 = (0);
seq__30516_30538 = G__30555;
chunk__30517_30539 = G__30556;
count__30518_30540 = G__30557;
i__30519_30541 = G__30558;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30559 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30559);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30559)))?cljs.core.second.call(null,arglists_30559):arglists_30559));
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
var seq__30520_30560 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30521_30561 = null;
var count__30522_30562 = (0);
var i__30523_30563 = (0);
while(true){
if((i__30523_30563 < count__30522_30562)){
var vec__30524_30564 = cljs.core._nth.call(null,chunk__30521_30561,i__30523_30563);
var name_30565 = cljs.core.nth.call(null,vec__30524_30564,(0),null);
var map__30527_30566 = cljs.core.nth.call(null,vec__30524_30564,(1),null);
var map__30527_30567__$1 = ((((!((map__30527_30566 == null)))?(((((map__30527_30566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30527_30566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30527_30566):map__30527_30566);
var doc_30568 = cljs.core.get.call(null,map__30527_30567__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30569 = cljs.core.get.call(null,map__30527_30567__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30565);

cljs.core.println.call(null," ",arglists_30569);

if(cljs.core.truth_(doc_30568)){
cljs.core.println.call(null," ",doc_30568);
} else {
}


var G__30570 = seq__30520_30560;
var G__30571 = chunk__30521_30561;
var G__30572 = count__30522_30562;
var G__30573 = (i__30523_30563 + (1));
seq__30520_30560 = G__30570;
chunk__30521_30561 = G__30571;
count__30522_30562 = G__30572;
i__30523_30563 = G__30573;
continue;
} else {
var temp__5457__auto___30574 = cljs.core.seq.call(null,seq__30520_30560);
if(temp__5457__auto___30574){
var seq__30520_30575__$1 = temp__5457__auto___30574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30520_30575__$1)){
var c__4319__auto___30576 = cljs.core.chunk_first.call(null,seq__30520_30575__$1);
var G__30577 = cljs.core.chunk_rest.call(null,seq__30520_30575__$1);
var G__30578 = c__4319__auto___30576;
var G__30579 = cljs.core.count.call(null,c__4319__auto___30576);
var G__30580 = (0);
seq__30520_30560 = G__30577;
chunk__30521_30561 = G__30578;
count__30522_30562 = G__30579;
i__30523_30563 = G__30580;
continue;
} else {
var vec__30529_30581 = cljs.core.first.call(null,seq__30520_30575__$1);
var name_30582 = cljs.core.nth.call(null,vec__30529_30581,(0),null);
var map__30532_30583 = cljs.core.nth.call(null,vec__30529_30581,(1),null);
var map__30532_30584__$1 = ((((!((map__30532_30583 == null)))?(((((map__30532_30583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30532_30583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30532_30583):map__30532_30583);
var doc_30585 = cljs.core.get.call(null,map__30532_30584__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30586 = cljs.core.get.call(null,map__30532_30584__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30582);

cljs.core.println.call(null," ",arglists_30586);

if(cljs.core.truth_(doc_30585)){
cljs.core.println.call(null," ",doc_30585);
} else {
}


var G__30587 = cljs.core.next.call(null,seq__30520_30575__$1);
var G__30588 = null;
var G__30589 = (0);
var G__30590 = (0);
seq__30520_30560 = G__30587;
chunk__30521_30561 = G__30588;
count__30522_30562 = G__30589;
i__30523_30563 = G__30590;
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

var seq__30534 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30535 = null;
var count__30536 = (0);
var i__30537 = (0);
while(true){
if((i__30537 < count__30536)){
var role = cljs.core._nth.call(null,chunk__30535,i__30537);
var temp__5457__auto___30591__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30591__$1)){
var spec_30592 = temp__5457__auto___30591__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30592));
} else {
}


var G__30593 = seq__30534;
var G__30594 = chunk__30535;
var G__30595 = count__30536;
var G__30596 = (i__30537 + (1));
seq__30534 = G__30593;
chunk__30535 = G__30594;
count__30536 = G__30595;
i__30537 = G__30596;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__30534);
if(temp__5457__auto____$1){
var seq__30534__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30534__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30534__$1);
var G__30597 = cljs.core.chunk_rest.call(null,seq__30534__$1);
var G__30598 = c__4319__auto__;
var G__30599 = cljs.core.count.call(null,c__4319__auto__);
var G__30600 = (0);
seq__30534 = G__30597;
chunk__30535 = G__30598;
count__30536 = G__30599;
i__30537 = G__30600;
continue;
} else {
var role = cljs.core.first.call(null,seq__30534__$1);
var temp__5457__auto___30601__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30601__$2)){
var spec_30602 = temp__5457__auto___30601__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30602));
} else {
}


var G__30603 = cljs.core.next.call(null,seq__30534__$1);
var G__30604 = null;
var G__30605 = (0);
var G__30606 = (0);
seq__30534 = G__30603;
chunk__30535 = G__30604;
count__30536 = G__30605;
i__30537 = G__30606;
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

//# sourceMappingURL=repl.js.map?rel=1542151522010
