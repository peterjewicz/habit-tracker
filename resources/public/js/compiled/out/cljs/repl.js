// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30835){
var map__30836 = p__30835;
var map__30836__$1 = ((((!((map__30836 == null)))?(((((map__30836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30836):map__30836);
var m = map__30836__$1;
var n = cljs.core.get.call(null,map__30836__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30836__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__30838_30860 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30839_30861 = null;
var count__30840_30862 = (0);
var i__30841_30863 = (0);
while(true){
if((i__30841_30863 < count__30840_30862)){
var f_30864 = cljs.core._nth.call(null,chunk__30839_30861,i__30841_30863);
cljs.core.println.call(null,"  ",f_30864);


var G__30865 = seq__30838_30860;
var G__30866 = chunk__30839_30861;
var G__30867 = count__30840_30862;
var G__30868 = (i__30841_30863 + (1));
seq__30838_30860 = G__30865;
chunk__30839_30861 = G__30866;
count__30840_30862 = G__30867;
i__30841_30863 = G__30868;
continue;
} else {
var temp__5457__auto___30869 = cljs.core.seq.call(null,seq__30838_30860);
if(temp__5457__auto___30869){
var seq__30838_30870__$1 = temp__5457__auto___30869;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30838_30870__$1)){
var c__4319__auto___30871 = cljs.core.chunk_first.call(null,seq__30838_30870__$1);
var G__30872 = cljs.core.chunk_rest.call(null,seq__30838_30870__$1);
var G__30873 = c__4319__auto___30871;
var G__30874 = cljs.core.count.call(null,c__4319__auto___30871);
var G__30875 = (0);
seq__30838_30860 = G__30872;
chunk__30839_30861 = G__30873;
count__30840_30862 = G__30874;
i__30841_30863 = G__30875;
continue;
} else {
var f_30876 = cljs.core.first.call(null,seq__30838_30870__$1);
cljs.core.println.call(null,"  ",f_30876);


var G__30877 = cljs.core.next.call(null,seq__30838_30870__$1);
var G__30878 = null;
var G__30879 = (0);
var G__30880 = (0);
seq__30838_30860 = G__30877;
chunk__30839_30861 = G__30878;
count__30840_30862 = G__30879;
i__30841_30863 = G__30880;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30881 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30881);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30881)))?cljs.core.second.call(null,arglists_30881):arglists_30881));
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
var seq__30842_30882 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30843_30883 = null;
var count__30844_30884 = (0);
var i__30845_30885 = (0);
while(true){
if((i__30845_30885 < count__30844_30884)){
var vec__30846_30886 = cljs.core._nth.call(null,chunk__30843_30883,i__30845_30885);
var name_30887 = cljs.core.nth.call(null,vec__30846_30886,(0),null);
var map__30849_30888 = cljs.core.nth.call(null,vec__30846_30886,(1),null);
var map__30849_30889__$1 = ((((!((map__30849_30888 == null)))?(((((map__30849_30888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30849_30888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30849_30888):map__30849_30888);
var doc_30890 = cljs.core.get.call(null,map__30849_30889__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30891 = cljs.core.get.call(null,map__30849_30889__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30887);

cljs.core.println.call(null," ",arglists_30891);

if(cljs.core.truth_(doc_30890)){
cljs.core.println.call(null," ",doc_30890);
} else {
}


var G__30892 = seq__30842_30882;
var G__30893 = chunk__30843_30883;
var G__30894 = count__30844_30884;
var G__30895 = (i__30845_30885 + (1));
seq__30842_30882 = G__30892;
chunk__30843_30883 = G__30893;
count__30844_30884 = G__30894;
i__30845_30885 = G__30895;
continue;
} else {
var temp__5457__auto___30896 = cljs.core.seq.call(null,seq__30842_30882);
if(temp__5457__auto___30896){
var seq__30842_30897__$1 = temp__5457__auto___30896;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30842_30897__$1)){
var c__4319__auto___30898 = cljs.core.chunk_first.call(null,seq__30842_30897__$1);
var G__30899 = cljs.core.chunk_rest.call(null,seq__30842_30897__$1);
var G__30900 = c__4319__auto___30898;
var G__30901 = cljs.core.count.call(null,c__4319__auto___30898);
var G__30902 = (0);
seq__30842_30882 = G__30899;
chunk__30843_30883 = G__30900;
count__30844_30884 = G__30901;
i__30845_30885 = G__30902;
continue;
} else {
var vec__30851_30903 = cljs.core.first.call(null,seq__30842_30897__$1);
var name_30904 = cljs.core.nth.call(null,vec__30851_30903,(0),null);
var map__30854_30905 = cljs.core.nth.call(null,vec__30851_30903,(1),null);
var map__30854_30906__$1 = ((((!((map__30854_30905 == null)))?(((((map__30854_30905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30854_30905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30854_30905):map__30854_30905);
var doc_30907 = cljs.core.get.call(null,map__30854_30906__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30908 = cljs.core.get.call(null,map__30854_30906__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30904);

cljs.core.println.call(null," ",arglists_30908);

if(cljs.core.truth_(doc_30907)){
cljs.core.println.call(null," ",doc_30907);
} else {
}


var G__30909 = cljs.core.next.call(null,seq__30842_30897__$1);
var G__30910 = null;
var G__30911 = (0);
var G__30912 = (0);
seq__30842_30882 = G__30909;
chunk__30843_30883 = G__30910;
count__30844_30884 = G__30911;
i__30845_30885 = G__30912;
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

var seq__30856 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30857 = null;
var count__30858 = (0);
var i__30859 = (0);
while(true){
if((i__30859 < count__30858)){
var role = cljs.core._nth.call(null,chunk__30857,i__30859);
var temp__5457__auto___30913__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30913__$1)){
var spec_30914 = temp__5457__auto___30913__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30914));
} else {
}


var G__30915 = seq__30856;
var G__30916 = chunk__30857;
var G__30917 = count__30858;
var G__30918 = (i__30859 + (1));
seq__30856 = G__30915;
chunk__30857 = G__30916;
count__30858 = G__30917;
i__30859 = G__30918;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__30856);
if(temp__5457__auto____$1){
var seq__30856__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30856__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30856__$1);
var G__30919 = cljs.core.chunk_rest.call(null,seq__30856__$1);
var G__30920 = c__4319__auto__;
var G__30921 = cljs.core.count.call(null,c__4319__auto__);
var G__30922 = (0);
seq__30856 = G__30919;
chunk__30857 = G__30920;
count__30858 = G__30921;
i__30859 = G__30922;
continue;
} else {
var role = cljs.core.first.call(null,seq__30856__$1);
var temp__5457__auto___30923__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30923__$2)){
var spec_30924 = temp__5457__auto___30923__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30924));
} else {
}


var G__30925 = cljs.core.next.call(null,seq__30856__$1);
var G__30926 = null;
var G__30927 = (0);
var G__30928 = (0);
seq__30856 = G__30925;
chunk__30857 = G__30926;
count__30858 = G__30927;
i__30859 = G__30928;
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

//# sourceMappingURL=repl.js.map?rel=1557923586319
