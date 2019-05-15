// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36558_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36558_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__36559 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36560 = null;
var count__36561 = (0);
var i__36562 = (0);
while(true){
if((i__36562 < count__36561)){
var n = cljs.core._nth.call(null,chunk__36560,i__36562);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__36563 = seq__36559;
var G__36564 = chunk__36560;
var G__36565 = count__36561;
var G__36566 = (i__36562 + (1));
seq__36559 = G__36563;
chunk__36560 = G__36564;
count__36561 = G__36565;
i__36562 = G__36566;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36559);
if(temp__5457__auto__){
var seq__36559__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36559__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__36559__$1);
var G__36567 = cljs.core.chunk_rest.call(null,seq__36559__$1);
var G__36568 = c__4319__auto__;
var G__36569 = cljs.core.count.call(null,c__4319__auto__);
var G__36570 = (0);
seq__36559 = G__36567;
chunk__36560 = G__36568;
count__36561 = G__36569;
i__36562 = G__36570;
continue;
} else {
var n = cljs.core.first.call(null,seq__36559__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__36571 = cljs.core.next.call(null,seq__36559__$1);
var G__36572 = null;
var G__36573 = (0);
var G__36574 = (0);
seq__36559 = G__36571;
chunk__36560 = G__36572;
count__36561 = G__36573;
i__36562 = G__36574;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__36575){
var vec__36576 = p__36575;
var _ = cljs.core.nth.call(null,vec__36576,(0),null);
var v = cljs.core.nth.call(null,vec__36576,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__36579){
var vec__36580 = p__36579;
var k = cljs.core.nth.call(null,vec__36580,(0),null);
var v = cljs.core.nth.call(null,vec__36580,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__36592_36600 = cljs.core.seq.call(null,deps);
var chunk__36593_36601 = null;
var count__36594_36602 = (0);
var i__36595_36603 = (0);
while(true){
if((i__36595_36603 < count__36594_36602)){
var dep_36604 = cljs.core._nth.call(null,chunk__36593_36601,i__36595_36603);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_36604;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_36604));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_36604,(depth + (1)),state);
} else {
}


var G__36605 = seq__36592_36600;
var G__36606 = chunk__36593_36601;
var G__36607 = count__36594_36602;
var G__36608 = (i__36595_36603 + (1));
seq__36592_36600 = G__36605;
chunk__36593_36601 = G__36606;
count__36594_36602 = G__36607;
i__36595_36603 = G__36608;
continue;
} else {
var temp__5457__auto___36609 = cljs.core.seq.call(null,seq__36592_36600);
if(temp__5457__auto___36609){
var seq__36592_36610__$1 = temp__5457__auto___36609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36592_36610__$1)){
var c__4319__auto___36611 = cljs.core.chunk_first.call(null,seq__36592_36610__$1);
var G__36612 = cljs.core.chunk_rest.call(null,seq__36592_36610__$1);
var G__36613 = c__4319__auto___36611;
var G__36614 = cljs.core.count.call(null,c__4319__auto___36611);
var G__36615 = (0);
seq__36592_36600 = G__36612;
chunk__36593_36601 = G__36613;
count__36594_36602 = G__36614;
i__36595_36603 = G__36615;
continue;
} else {
var dep_36616 = cljs.core.first.call(null,seq__36592_36610__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_36616;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_36616));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_36616,(depth + (1)),state);
} else {
}


var G__36617 = cljs.core.next.call(null,seq__36592_36610__$1);
var G__36618 = null;
var G__36619 = (0);
var G__36620 = (0);
seq__36592_36600 = G__36617;
chunk__36593_36601 = G__36618;
count__36594_36602 = G__36619;
i__36595_36603 = G__36620;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36596){
var vec__36597 = p__36596;
var seq__36598 = cljs.core.seq.call(null,vec__36597);
var first__36599 = cljs.core.first.call(null,seq__36598);
var seq__36598__$1 = cljs.core.next.call(null,seq__36598);
var x = first__36599;
var xs = seq__36598__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36597,seq__36598,first__36599,seq__36598__$1,x,xs,get_deps__$1){
return (function (p1__36583_SHARP_){
return clojure.set.difference.call(null,p1__36583_SHARP_,x);
});})(vec__36597,seq__36598,first__36599,seq__36598__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__36621 = cljs.core.seq.call(null,provides);
var chunk__36622 = null;
var count__36623 = (0);
var i__36624 = (0);
while(true){
if((i__36624 < count__36623)){
var prov = cljs.core._nth.call(null,chunk__36622,i__36624);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36625_36633 = cljs.core.seq.call(null,requires);
var chunk__36626_36634 = null;
var count__36627_36635 = (0);
var i__36628_36636 = (0);
while(true){
if((i__36628_36636 < count__36627_36635)){
var req_36637 = cljs.core._nth.call(null,chunk__36626_36634,i__36628_36636);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36637,prov);


var G__36638 = seq__36625_36633;
var G__36639 = chunk__36626_36634;
var G__36640 = count__36627_36635;
var G__36641 = (i__36628_36636 + (1));
seq__36625_36633 = G__36638;
chunk__36626_36634 = G__36639;
count__36627_36635 = G__36640;
i__36628_36636 = G__36641;
continue;
} else {
var temp__5457__auto___36642 = cljs.core.seq.call(null,seq__36625_36633);
if(temp__5457__auto___36642){
var seq__36625_36643__$1 = temp__5457__auto___36642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36625_36643__$1)){
var c__4319__auto___36644 = cljs.core.chunk_first.call(null,seq__36625_36643__$1);
var G__36645 = cljs.core.chunk_rest.call(null,seq__36625_36643__$1);
var G__36646 = c__4319__auto___36644;
var G__36647 = cljs.core.count.call(null,c__4319__auto___36644);
var G__36648 = (0);
seq__36625_36633 = G__36645;
chunk__36626_36634 = G__36646;
count__36627_36635 = G__36647;
i__36628_36636 = G__36648;
continue;
} else {
var req_36649 = cljs.core.first.call(null,seq__36625_36643__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36649,prov);


var G__36650 = cljs.core.next.call(null,seq__36625_36643__$1);
var G__36651 = null;
var G__36652 = (0);
var G__36653 = (0);
seq__36625_36633 = G__36650;
chunk__36626_36634 = G__36651;
count__36627_36635 = G__36652;
i__36628_36636 = G__36653;
continue;
}
} else {
}
}
break;
}


var G__36654 = seq__36621;
var G__36655 = chunk__36622;
var G__36656 = count__36623;
var G__36657 = (i__36624 + (1));
seq__36621 = G__36654;
chunk__36622 = G__36655;
count__36623 = G__36656;
i__36624 = G__36657;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36621);
if(temp__5457__auto__){
var seq__36621__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36621__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__36621__$1);
var G__36658 = cljs.core.chunk_rest.call(null,seq__36621__$1);
var G__36659 = c__4319__auto__;
var G__36660 = cljs.core.count.call(null,c__4319__auto__);
var G__36661 = (0);
seq__36621 = G__36658;
chunk__36622 = G__36659;
count__36623 = G__36660;
i__36624 = G__36661;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36621__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36629_36662 = cljs.core.seq.call(null,requires);
var chunk__36630_36663 = null;
var count__36631_36664 = (0);
var i__36632_36665 = (0);
while(true){
if((i__36632_36665 < count__36631_36664)){
var req_36666 = cljs.core._nth.call(null,chunk__36630_36663,i__36632_36665);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36666,prov);


var G__36667 = seq__36629_36662;
var G__36668 = chunk__36630_36663;
var G__36669 = count__36631_36664;
var G__36670 = (i__36632_36665 + (1));
seq__36629_36662 = G__36667;
chunk__36630_36663 = G__36668;
count__36631_36664 = G__36669;
i__36632_36665 = G__36670;
continue;
} else {
var temp__5457__auto___36671__$1 = cljs.core.seq.call(null,seq__36629_36662);
if(temp__5457__auto___36671__$1){
var seq__36629_36672__$1 = temp__5457__auto___36671__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36629_36672__$1)){
var c__4319__auto___36673 = cljs.core.chunk_first.call(null,seq__36629_36672__$1);
var G__36674 = cljs.core.chunk_rest.call(null,seq__36629_36672__$1);
var G__36675 = c__4319__auto___36673;
var G__36676 = cljs.core.count.call(null,c__4319__auto___36673);
var G__36677 = (0);
seq__36629_36662 = G__36674;
chunk__36630_36663 = G__36675;
count__36631_36664 = G__36676;
i__36632_36665 = G__36677;
continue;
} else {
var req_36678 = cljs.core.first.call(null,seq__36629_36672__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36678,prov);


var G__36679 = cljs.core.next.call(null,seq__36629_36672__$1);
var G__36680 = null;
var G__36681 = (0);
var G__36682 = (0);
seq__36629_36662 = G__36679;
chunk__36630_36663 = G__36680;
count__36631_36664 = G__36681;
i__36632_36665 = G__36682;
continue;
}
} else {
}
}
break;
}


var G__36683 = cljs.core.next.call(null,seq__36621__$1);
var G__36684 = null;
var G__36685 = (0);
var G__36686 = (0);
seq__36621 = G__36683;
chunk__36622 = G__36684;
count__36623 = G__36685;
i__36624 = G__36686;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__36687_36691 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36688_36692 = null;
var count__36689_36693 = (0);
var i__36690_36694 = (0);
while(true){
if((i__36690_36694 < count__36689_36693)){
var ns_36695 = cljs.core._nth.call(null,chunk__36688_36692,i__36690_36694);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36695);


var G__36696 = seq__36687_36691;
var G__36697 = chunk__36688_36692;
var G__36698 = count__36689_36693;
var G__36699 = (i__36690_36694 + (1));
seq__36687_36691 = G__36696;
chunk__36688_36692 = G__36697;
count__36689_36693 = G__36698;
i__36690_36694 = G__36699;
continue;
} else {
var temp__5457__auto___36700 = cljs.core.seq.call(null,seq__36687_36691);
if(temp__5457__auto___36700){
var seq__36687_36701__$1 = temp__5457__auto___36700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36687_36701__$1)){
var c__4319__auto___36702 = cljs.core.chunk_first.call(null,seq__36687_36701__$1);
var G__36703 = cljs.core.chunk_rest.call(null,seq__36687_36701__$1);
var G__36704 = c__4319__auto___36702;
var G__36705 = cljs.core.count.call(null,c__4319__auto___36702);
var G__36706 = (0);
seq__36687_36691 = G__36703;
chunk__36688_36692 = G__36704;
count__36689_36693 = G__36705;
i__36690_36694 = G__36706;
continue;
} else {
var ns_36707 = cljs.core.first.call(null,seq__36687_36701__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36707);


var G__36708 = cljs.core.next.call(null,seq__36687_36701__$1);
var G__36709 = null;
var G__36710 = (0);
var G__36711 = (0);
seq__36687_36691 = G__36708;
chunk__36688_36692 = G__36709;
count__36689_36693 = G__36710;
i__36690_36694 = G__36711;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__36712__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36712 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36713__i = 0, G__36713__a = new Array(arguments.length -  0);
while (G__36713__i < G__36713__a.length) {G__36713__a[G__36713__i] = arguments[G__36713__i + 0]; ++G__36713__i;}
  args = new cljs.core.IndexedSeq(G__36713__a,0,null);
} 
return G__36712__delegate.call(this,args);};
G__36712.cljs$lang$maxFixedArity = 0;
G__36712.cljs$lang$applyTo = (function (arglist__36714){
var args = cljs.core.seq(arglist__36714);
return G__36712__delegate(args);
});
G__36712.cljs$core$IFn$_invoke$arity$variadic = G__36712__delegate;
return G__36712;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__36715_SHARP_,p2__36716_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36715_SHARP_)].join('')),p2__36716_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__36717_SHARP_,p2__36718_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36717_SHARP_)].join(''),p2__36718_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__36719 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__36719.addCallback(((function (G__36719){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__36719))
);

G__36719.addErrback(((function (G__36719){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__36719))
);

return G__36719;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e36720){if((e36720 instanceof Error)){
var e = e36720;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36720;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36721){if((e36721 instanceof Error)){
var e = e36721;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36721;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36722 = cljs.core._EQ_;
var expr__36723 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36722.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36723))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__36722.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36723))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__36722.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__36723))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__36722,expr__36723){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36722,expr__36723))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36725,callback){
var map__36726 = p__36725;
var map__36726__$1 = ((((!((map__36726 == null)))?(((((map__36726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36726):map__36726);
var file_msg = map__36726__$1;
var request_url = cljs.core.get.call(null,map__36726__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__36726,map__36726__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36726,map__36726__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__34449__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34449__auto__){
return (function (){
var f__34450__auto__ = (function (){var switch__34359__auto__ = ((function (c__34449__auto__){
return (function (state_36764){
var state_val_36765 = (state_36764[(1)]);
if((state_val_36765 === (7))){
var inst_36760 = (state_36764[(2)]);
var state_36764__$1 = state_36764;
var statearr_36766_36792 = state_36764__$1;
(statearr_36766_36792[(2)] = inst_36760);

(statearr_36766_36792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (1))){
var state_36764__$1 = state_36764;
var statearr_36767_36793 = state_36764__$1;
(statearr_36767_36793[(2)] = null);

(statearr_36767_36793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (4))){
var inst_36730 = (state_36764[(7)]);
var inst_36730__$1 = (state_36764[(2)]);
var state_36764__$1 = (function (){var statearr_36768 = state_36764;
(statearr_36768[(7)] = inst_36730__$1);

return statearr_36768;
})();
if(cljs.core.truth_(inst_36730__$1)){
var statearr_36769_36794 = state_36764__$1;
(statearr_36769_36794[(1)] = (5));

} else {
var statearr_36770_36795 = state_36764__$1;
(statearr_36770_36795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (15))){
var inst_36745 = (state_36764[(8)]);
var inst_36743 = (state_36764[(9)]);
var inst_36747 = inst_36745.call(null,inst_36743);
var state_36764__$1 = state_36764;
var statearr_36771_36796 = state_36764__$1;
(statearr_36771_36796[(2)] = inst_36747);

(statearr_36771_36796[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (13))){
var inst_36754 = (state_36764[(2)]);
var state_36764__$1 = state_36764;
var statearr_36772_36797 = state_36764__$1;
(statearr_36772_36797[(2)] = inst_36754);

(statearr_36772_36797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (6))){
var state_36764__$1 = state_36764;
var statearr_36773_36798 = state_36764__$1;
(statearr_36773_36798[(2)] = null);

(statearr_36773_36798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (17))){
var inst_36751 = (state_36764[(2)]);
var state_36764__$1 = state_36764;
var statearr_36774_36799 = state_36764__$1;
(statearr_36774_36799[(2)] = inst_36751);

(statearr_36774_36799[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (3))){
var inst_36762 = (state_36764[(2)]);
var state_36764__$1 = state_36764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36764__$1,inst_36762);
} else {
if((state_val_36765 === (12))){
var state_36764__$1 = state_36764;
var statearr_36775_36800 = state_36764__$1;
(statearr_36775_36800[(2)] = null);

(statearr_36775_36800[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (2))){
var state_36764__$1 = state_36764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36764__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36765 === (11))){
var inst_36735 = (state_36764[(10)]);
var inst_36741 = figwheel.client.file_reloading.blocking_load.call(null,inst_36735);
var state_36764__$1 = state_36764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36764__$1,(14),inst_36741);
} else {
if((state_val_36765 === (9))){
var inst_36735 = (state_36764[(10)]);
var state_36764__$1 = state_36764;
if(cljs.core.truth_(inst_36735)){
var statearr_36776_36801 = state_36764__$1;
(statearr_36776_36801[(1)] = (11));

} else {
var statearr_36777_36802 = state_36764__$1;
(statearr_36777_36802[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (5))){
var inst_36730 = (state_36764[(7)]);
var inst_36736 = (state_36764[(11)]);
var inst_36735 = cljs.core.nth.call(null,inst_36730,(0),null);
var inst_36736__$1 = cljs.core.nth.call(null,inst_36730,(1),null);
var state_36764__$1 = (function (){var statearr_36778 = state_36764;
(statearr_36778[(11)] = inst_36736__$1);

(statearr_36778[(10)] = inst_36735);

return statearr_36778;
})();
if(cljs.core.truth_(inst_36736__$1)){
var statearr_36779_36803 = state_36764__$1;
(statearr_36779_36803[(1)] = (8));

} else {
var statearr_36780_36804 = state_36764__$1;
(statearr_36780_36804[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (14))){
var inst_36745 = (state_36764[(8)]);
var inst_36735 = (state_36764[(10)]);
var inst_36743 = (state_36764[(2)]);
var inst_36744 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36745__$1 = cljs.core.get.call(null,inst_36744,inst_36735);
var state_36764__$1 = (function (){var statearr_36781 = state_36764;
(statearr_36781[(8)] = inst_36745__$1);

(statearr_36781[(9)] = inst_36743);

return statearr_36781;
})();
if(cljs.core.truth_(inst_36745__$1)){
var statearr_36782_36805 = state_36764__$1;
(statearr_36782_36805[(1)] = (15));

} else {
var statearr_36783_36806 = state_36764__$1;
(statearr_36783_36806[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (16))){
var inst_36743 = (state_36764[(9)]);
var inst_36749 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36743);
var state_36764__$1 = state_36764;
var statearr_36784_36807 = state_36764__$1;
(statearr_36784_36807[(2)] = inst_36749);

(statearr_36784_36807[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (10))){
var inst_36756 = (state_36764[(2)]);
var state_36764__$1 = (function (){var statearr_36785 = state_36764;
(statearr_36785[(12)] = inst_36756);

return statearr_36785;
})();
var statearr_36786_36808 = state_36764__$1;
(statearr_36786_36808[(2)] = null);

(statearr_36786_36808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (8))){
var inst_36736 = (state_36764[(11)]);
var inst_36738 = eval(inst_36736);
var state_36764__$1 = state_36764;
var statearr_36787_36809 = state_36764__$1;
(statearr_36787_36809[(2)] = inst_36738);

(statearr_36787_36809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34449__auto__))
;
return ((function (switch__34359__auto__,c__34449__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__34360__auto__ = null;
var figwheel$client$file_reloading$state_machine__34360__auto____0 = (function (){
var statearr_36788 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36788[(0)] = figwheel$client$file_reloading$state_machine__34360__auto__);

(statearr_36788[(1)] = (1));

return statearr_36788;
});
var figwheel$client$file_reloading$state_machine__34360__auto____1 = (function (state_36764){
while(true){
var ret_value__34361__auto__ = (function (){try{while(true){
var result__34362__auto__ = switch__34359__auto__.call(null,state_36764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34362__auto__;
}
break;
}
}catch (e36789){if((e36789 instanceof Object)){
var ex__34363__auto__ = e36789;
var statearr_36790_36810 = state_36764;
(statearr_36790_36810[(5)] = ex__34363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36811 = state_36764;
state_36764 = G__36811;
continue;
} else {
return ret_value__34361__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__34360__auto__ = function(state_36764){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__34360__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__34360__auto____1.call(this,state_36764);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__34360__auto____0;
figwheel$client$file_reloading$state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__34360__auto____1;
return figwheel$client$file_reloading$state_machine__34360__auto__;
})()
;})(switch__34359__auto__,c__34449__auto__))
})();
var state__34451__auto__ = (function (){var statearr_36791 = f__34450__auto__.call(null);
(statearr_36791[(6)] = c__34449__auto__);

return statearr_36791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34451__auto__);
});})(c__34449__auto__))
);

return c__34449__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__36813 = arguments.length;
switch (G__36813) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36815,callback){
var map__36816 = p__36815;
var map__36816__$1 = ((((!((map__36816 == null)))?(((((map__36816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36816):map__36816);
var file_msg = map__36816__$1;
var namespace = cljs.core.get.call(null,map__36816__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36816,map__36816__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36816,map__36816__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__36818){
var map__36819 = p__36818;
var map__36819__$1 = ((((!((map__36819 == null)))?(((((map__36819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36819):map__36819);
var file_msg = map__36819__$1;
var namespace = cljs.core.get.call(null,map__36819__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36821){
var map__36822 = p__36821;
var map__36822__$1 = ((((!((map__36822 == null)))?(((((map__36822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36822):map__36822);
var file_msg = map__36822__$1;
var namespace = cljs.core.get.call(null,map__36822__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36824,callback){
var map__36825 = p__36824;
var map__36825__$1 = ((((!((map__36825 == null)))?(((((map__36825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36825):map__36825);
var file_msg = map__36825__$1;
var request_url = cljs.core.get.call(null,map__36825__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36825__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__34449__auto___36875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34449__auto___36875,out){
return (function (){
var f__34450__auto__ = (function (){var switch__34359__auto__ = ((function (c__34449__auto___36875,out){
return (function (state_36860){
var state_val_36861 = (state_36860[(1)]);
if((state_val_36861 === (1))){
var inst_36834 = cljs.core.seq.call(null,files);
var inst_36835 = cljs.core.first.call(null,inst_36834);
var inst_36836 = cljs.core.next.call(null,inst_36834);
var inst_36837 = files;
var state_36860__$1 = (function (){var statearr_36862 = state_36860;
(statearr_36862[(7)] = inst_36836);

(statearr_36862[(8)] = inst_36835);

(statearr_36862[(9)] = inst_36837);

return statearr_36862;
})();
var statearr_36863_36876 = state_36860__$1;
(statearr_36863_36876[(2)] = null);

(statearr_36863_36876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36861 === (2))){
var inst_36843 = (state_36860[(10)]);
var inst_36837 = (state_36860[(9)]);
var inst_36842 = cljs.core.seq.call(null,inst_36837);
var inst_36843__$1 = cljs.core.first.call(null,inst_36842);
var inst_36844 = cljs.core.next.call(null,inst_36842);
var inst_36845 = (inst_36843__$1 == null);
var inst_36846 = cljs.core.not.call(null,inst_36845);
var state_36860__$1 = (function (){var statearr_36864 = state_36860;
(statearr_36864[(10)] = inst_36843__$1);

(statearr_36864[(11)] = inst_36844);

return statearr_36864;
})();
if(inst_36846){
var statearr_36865_36877 = state_36860__$1;
(statearr_36865_36877[(1)] = (4));

} else {
var statearr_36866_36878 = state_36860__$1;
(statearr_36866_36878[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36861 === (3))){
var inst_36858 = (state_36860[(2)]);
var state_36860__$1 = state_36860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36860__$1,inst_36858);
} else {
if((state_val_36861 === (4))){
var inst_36843 = (state_36860[(10)]);
var inst_36848 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36843);
var state_36860__$1 = state_36860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36860__$1,(7),inst_36848);
} else {
if((state_val_36861 === (5))){
var inst_36854 = cljs.core.async.close_BANG_.call(null,out);
var state_36860__$1 = state_36860;
var statearr_36867_36879 = state_36860__$1;
(statearr_36867_36879[(2)] = inst_36854);

(statearr_36867_36879[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36861 === (6))){
var inst_36856 = (state_36860[(2)]);
var state_36860__$1 = state_36860;
var statearr_36868_36880 = state_36860__$1;
(statearr_36868_36880[(2)] = inst_36856);

(statearr_36868_36880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36861 === (7))){
var inst_36844 = (state_36860[(11)]);
var inst_36850 = (state_36860[(2)]);
var inst_36851 = cljs.core.async.put_BANG_.call(null,out,inst_36850);
var inst_36837 = inst_36844;
var state_36860__$1 = (function (){var statearr_36869 = state_36860;
(statearr_36869[(12)] = inst_36851);

(statearr_36869[(9)] = inst_36837);

return statearr_36869;
})();
var statearr_36870_36881 = state_36860__$1;
(statearr_36870_36881[(2)] = null);

(statearr_36870_36881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__34449__auto___36875,out))
;
return ((function (switch__34359__auto__,c__34449__auto___36875,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34360__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34360__auto____0 = (function (){
var statearr_36871 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36871[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34360__auto__);

(statearr_36871[(1)] = (1));

return statearr_36871;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34360__auto____1 = (function (state_36860){
while(true){
var ret_value__34361__auto__ = (function (){try{while(true){
var result__34362__auto__ = switch__34359__auto__.call(null,state_36860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34362__auto__;
}
break;
}
}catch (e36872){if((e36872 instanceof Object)){
var ex__34363__auto__ = e36872;
var statearr_36873_36882 = state_36860;
(statearr_36873_36882[(5)] = ex__34363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36883 = state_36860;
state_36860 = G__36883;
continue;
} else {
return ret_value__34361__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34360__auto__ = function(state_36860){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34360__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34360__auto____1.call(this,state_36860);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34360__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34360__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34360__auto__;
})()
;})(switch__34359__auto__,c__34449__auto___36875,out))
})();
var state__34451__auto__ = (function (){var statearr_36874 = f__34450__auto__.call(null);
(statearr_36874[(6)] = c__34449__auto___36875);

return statearr_36874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34451__auto__);
});})(c__34449__auto___36875,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36884,opts){
var map__36885 = p__36884;
var map__36885__$1 = ((((!((map__36885 == null)))?(((((map__36885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36885):map__36885);
var eval_body = cljs.core.get.call(null,map__36885__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36885__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e36887){var e = e36887;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__36888_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36888_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__36889){
var vec__36890 = p__36889;
var k = cljs.core.nth.call(null,vec__36890,(0),null);
var v = cljs.core.nth.call(null,vec__36890,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36893){
var vec__36894 = p__36893;
var k = cljs.core.nth.call(null,vec__36894,(0),null);
var v = cljs.core.nth.call(null,vec__36894,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36900,p__36901){
var map__36902 = p__36900;
var map__36902__$1 = ((((!((map__36902 == null)))?(((((map__36902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36902):map__36902);
var opts = map__36902__$1;
var before_jsload = cljs.core.get.call(null,map__36902__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36902__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36902__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36903 = p__36901;
var map__36903__$1 = ((((!((map__36903 == null)))?(((((map__36903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36903):map__36903);
var msg = map__36903__$1;
var files = cljs.core.get.call(null,map__36903__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36903__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36903__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34449__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34449__auto__,map__36902,map__36902__$1,opts,before_jsload,on_jsload,reload_dependents,map__36903,map__36903__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__34450__auto__ = (function (){var switch__34359__auto__ = ((function (c__34449__auto__,map__36902,map__36902__$1,opts,before_jsload,on_jsload,reload_dependents,map__36903,map__36903__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37057){
var state_val_37058 = (state_37057[(1)]);
if((state_val_37058 === (7))){
var inst_36919 = (state_37057[(7)]);
var inst_36917 = (state_37057[(8)]);
var inst_36920 = (state_37057[(9)]);
var inst_36918 = (state_37057[(10)]);
var inst_36925 = cljs.core._nth.call(null,inst_36918,inst_36920);
var inst_36926 = figwheel.client.file_reloading.eval_body.call(null,inst_36925,opts);
var inst_36927 = (inst_36920 + (1));
var tmp37059 = inst_36919;
var tmp37060 = inst_36917;
var tmp37061 = inst_36918;
var inst_36917__$1 = tmp37060;
var inst_36918__$1 = tmp37061;
var inst_36919__$1 = tmp37059;
var inst_36920__$1 = inst_36927;
var state_37057__$1 = (function (){var statearr_37062 = state_37057;
(statearr_37062[(7)] = inst_36919__$1);

(statearr_37062[(8)] = inst_36917__$1);

(statearr_37062[(11)] = inst_36926);

(statearr_37062[(9)] = inst_36920__$1);

(statearr_37062[(10)] = inst_36918__$1);

return statearr_37062;
})();
var statearr_37063_37146 = state_37057__$1;
(statearr_37063_37146[(2)] = null);

(statearr_37063_37146[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (20))){
var inst_36960 = (state_37057[(12)]);
var inst_36968 = figwheel.client.file_reloading.sort_files.call(null,inst_36960);
var state_37057__$1 = state_37057;
var statearr_37064_37147 = state_37057__$1;
(statearr_37064_37147[(2)] = inst_36968);

(statearr_37064_37147[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (27))){
var state_37057__$1 = state_37057;
var statearr_37065_37148 = state_37057__$1;
(statearr_37065_37148[(2)] = null);

(statearr_37065_37148[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (1))){
var inst_36909 = (state_37057[(13)]);
var inst_36906 = before_jsload.call(null,files);
var inst_36907 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36908 = (function (){return ((function (inst_36909,inst_36906,inst_36907,state_val_37058,c__34449__auto__,map__36902,map__36902__$1,opts,before_jsload,on_jsload,reload_dependents,map__36903,map__36903__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36897_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36897_SHARP_);
});
;})(inst_36909,inst_36906,inst_36907,state_val_37058,c__34449__auto__,map__36902,map__36902__$1,opts,before_jsload,on_jsload,reload_dependents,map__36903,map__36903__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36909__$1 = cljs.core.filter.call(null,inst_36908,files);
var inst_36910 = cljs.core.not_empty.call(null,inst_36909__$1);
var state_37057__$1 = (function (){var statearr_37066 = state_37057;
(statearr_37066[(13)] = inst_36909__$1);

(statearr_37066[(14)] = inst_36906);

(statearr_37066[(15)] = inst_36907);

return statearr_37066;
})();
if(cljs.core.truth_(inst_36910)){
var statearr_37067_37149 = state_37057__$1;
(statearr_37067_37149[(1)] = (2));

} else {
var statearr_37068_37150 = state_37057__$1;
(statearr_37068_37150[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (24))){
var state_37057__$1 = state_37057;
var statearr_37069_37151 = state_37057__$1;
(statearr_37069_37151[(2)] = null);

(statearr_37069_37151[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (39))){
var inst_37010 = (state_37057[(16)]);
var state_37057__$1 = state_37057;
var statearr_37070_37152 = state_37057__$1;
(statearr_37070_37152[(2)] = inst_37010);

(statearr_37070_37152[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (46))){
var inst_37052 = (state_37057[(2)]);
var state_37057__$1 = state_37057;
var statearr_37071_37153 = state_37057__$1;
(statearr_37071_37153[(2)] = inst_37052);

(statearr_37071_37153[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (4))){
var inst_36954 = (state_37057[(2)]);
var inst_36955 = cljs.core.List.EMPTY;
var inst_36956 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36955);
var inst_36957 = (function (){return ((function (inst_36954,inst_36955,inst_36956,state_val_37058,c__34449__auto__,map__36902,map__36902__$1,opts,before_jsload,on_jsload,reload_dependents,map__36903,map__36903__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36898_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36898_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36898_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36898_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_36954,inst_36955,inst_36956,state_val_37058,c__34449__auto__,map__36902,map__36902__$1,opts,before_jsload,on_jsload,reload_dependents,map__36903,map__36903__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36958 = cljs.core.filter.call(null,inst_36957,files);
var inst_36959 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36960 = cljs.core.concat.call(null,inst_36958,inst_36959);
var state_37057__$1 = (function (){var statearr_37072 = state_37057;
(statearr_37072[(17)] = inst_36954);

(statearr_37072[(18)] = inst_36956);

(statearr_37072[(12)] = inst_36960);

return statearr_37072;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37073_37154 = state_37057__$1;
(statearr_37073_37154[(1)] = (16));

} else {
var statearr_37074_37155 = state_37057__$1;
(statearr_37074_37155[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (15))){
var inst_36944 = (state_37057[(2)]);
var state_37057__$1 = state_37057;
var statearr_37075_37156 = state_37057__$1;
(statearr_37075_37156[(2)] = inst_36944);

(statearr_37075_37156[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (21))){
var inst_36970 = (state_37057[(19)]);
var inst_36970__$1 = (state_37057[(2)]);
var inst_36971 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36970__$1);
var state_37057__$1 = (function (){var statearr_37076 = state_37057;
(statearr_37076[(19)] = inst_36970__$1);

return statearr_37076;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37057__$1,(22),inst_36971);
} else {
if((state_val_37058 === (31))){
var inst_37055 = (state_37057[(2)]);
var state_37057__$1 = state_37057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37057__$1,inst_37055);
} else {
if((state_val_37058 === (32))){
var inst_37010 = (state_37057[(16)]);
var inst_37015 = inst_37010.cljs$lang$protocol_mask$partition0$;
var inst_37016 = (inst_37015 & (64));
var inst_37017 = inst_37010.cljs$core$ISeq$;
var inst_37018 = (cljs.core.PROTOCOL_SENTINEL === inst_37017);
var inst_37019 = ((inst_37016) || (inst_37018));
var state_37057__$1 = state_37057;
if(cljs.core.truth_(inst_37019)){
var statearr_37077_37157 = state_37057__$1;
(statearr_37077_37157[(1)] = (35));

} else {
var statearr_37078_37158 = state_37057__$1;
(statearr_37078_37158[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (40))){
var inst_37032 = (state_37057[(20)]);
var inst_37031 = (state_37057[(2)]);
var inst_37032__$1 = cljs.core.get.call(null,inst_37031,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37033 = cljs.core.get.call(null,inst_37031,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37034 = cljs.core.not_empty.call(null,inst_37032__$1);
var state_37057__$1 = (function (){var statearr_37079 = state_37057;
(statearr_37079[(20)] = inst_37032__$1);

(statearr_37079[(21)] = inst_37033);

return statearr_37079;
})();
if(cljs.core.truth_(inst_37034)){
var statearr_37080_37159 = state_37057__$1;
(statearr_37080_37159[(1)] = (41));

} else {
var statearr_37081_37160 = state_37057__$1;
(statearr_37081_37160[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (33))){
var state_37057__$1 = state_37057;
var statearr_37082_37161 = state_37057__$1;
(statearr_37082_37161[(2)] = false);

(statearr_37082_37161[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (13))){
var inst_36930 = (state_37057[(22)]);
var inst_36934 = cljs.core.chunk_first.call(null,inst_36930);
var inst_36935 = cljs.core.chunk_rest.call(null,inst_36930);
var inst_36936 = cljs.core.count.call(null,inst_36934);
var inst_36917 = inst_36935;
var inst_36918 = inst_36934;
var inst_36919 = inst_36936;
var inst_36920 = (0);
var state_37057__$1 = (function (){var statearr_37083 = state_37057;
(statearr_37083[(7)] = inst_36919);

(statearr_37083[(8)] = inst_36917);

(statearr_37083[(9)] = inst_36920);

(statearr_37083[(10)] = inst_36918);

return statearr_37083;
})();
var statearr_37084_37162 = state_37057__$1;
(statearr_37084_37162[(2)] = null);

(statearr_37084_37162[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (22))){
var inst_36978 = (state_37057[(23)]);
var inst_36973 = (state_37057[(24)]);
var inst_36974 = (state_37057[(25)]);
var inst_36970 = (state_37057[(19)]);
var inst_36973__$1 = (state_37057[(2)]);
var inst_36974__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36973__$1);
var inst_36975 = (function (){var all_files = inst_36970;
var res_SINGLEQUOTE_ = inst_36973__$1;
var res = inst_36974__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36978,inst_36973,inst_36974,inst_36970,inst_36973__$1,inst_36974__$1,state_val_37058,c__34449__auto__,map__36902,map__36902__$1,opts,before_jsload,on_jsload,reload_dependents,map__36903,map__36903__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36899_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36899_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36978,inst_36973,inst_36974,inst_36970,inst_36973__$1,inst_36974__$1,state_val_37058,c__34449__auto__,map__36902,map__36902__$1,opts,before_jsload,on_jsload,reload_dependents,map__36903,map__36903__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36976 = cljs.core.filter.call(null,inst_36975,inst_36973__$1);
var inst_36977 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36978__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36977);
var inst_36979 = cljs.core.not_empty.call(null,inst_36978__$1);
var state_37057__$1 = (function (){var statearr_37085 = state_37057;
(statearr_37085[(26)] = inst_36976);

(statearr_37085[(23)] = inst_36978__$1);

(statearr_37085[(24)] = inst_36973__$1);

(statearr_37085[(25)] = inst_36974__$1);

return statearr_37085;
})();
if(cljs.core.truth_(inst_36979)){
var statearr_37086_37163 = state_37057__$1;
(statearr_37086_37163[(1)] = (23));

} else {
var statearr_37087_37164 = state_37057__$1;
(statearr_37087_37164[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (36))){
var state_37057__$1 = state_37057;
var statearr_37088_37165 = state_37057__$1;
(statearr_37088_37165[(2)] = false);

(statearr_37088_37165[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (41))){
var inst_37032 = (state_37057[(20)]);
var inst_37036 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37037 = cljs.core.map.call(null,inst_37036,inst_37032);
var inst_37038 = cljs.core.pr_str.call(null,inst_37037);
var inst_37039 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37038)].join('');
var inst_37040 = figwheel.client.utils.log.call(null,inst_37039);
var state_37057__$1 = state_37057;
var statearr_37089_37166 = state_37057__$1;
(statearr_37089_37166[(2)] = inst_37040);

(statearr_37089_37166[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (43))){
var inst_37033 = (state_37057[(21)]);
var inst_37043 = (state_37057[(2)]);
var inst_37044 = cljs.core.not_empty.call(null,inst_37033);
var state_37057__$1 = (function (){var statearr_37090 = state_37057;
(statearr_37090[(27)] = inst_37043);

return statearr_37090;
})();
if(cljs.core.truth_(inst_37044)){
var statearr_37091_37167 = state_37057__$1;
(statearr_37091_37167[(1)] = (44));

} else {
var statearr_37092_37168 = state_37057__$1;
(statearr_37092_37168[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (29))){
var inst_36976 = (state_37057[(26)]);
var inst_37010 = (state_37057[(16)]);
var inst_36978 = (state_37057[(23)]);
var inst_36973 = (state_37057[(24)]);
var inst_36974 = (state_37057[(25)]);
var inst_36970 = (state_37057[(19)]);
var inst_37006 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37009 = (function (){var all_files = inst_36970;
var res_SINGLEQUOTE_ = inst_36973;
var res = inst_36974;
var files_not_loaded = inst_36976;
var dependencies_that_loaded = inst_36978;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36976,inst_37010,inst_36978,inst_36973,inst_36974,inst_36970,inst_37006,state_val_37058,c__34449__auto__,map__36902,map__36902__$1,opts,before_jsload,on_jsload,reload_dependents,map__36903,map__36903__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37008){
var map__37093 = p__37008;
var map__37093__$1 = ((((!((map__37093 == null)))?(((((map__37093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37093):map__37093);
var namespace = cljs.core.get.call(null,map__37093__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36976,inst_37010,inst_36978,inst_36973,inst_36974,inst_36970,inst_37006,state_val_37058,c__34449__auto__,map__36902,map__36902__$1,opts,before_jsload,on_jsload,reload_dependents,map__36903,map__36903__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37010__$1 = cljs.core.group_by.call(null,inst_37009,inst_36976);
var inst_37012 = (inst_37010__$1 == null);
var inst_37013 = cljs.core.not.call(null,inst_37012);
var state_37057__$1 = (function (){var statearr_37095 = state_37057;
(statearr_37095[(28)] = inst_37006);

(statearr_37095[(16)] = inst_37010__$1);

return statearr_37095;
})();
if(inst_37013){
var statearr_37096_37169 = state_37057__$1;
(statearr_37096_37169[(1)] = (32));

} else {
var statearr_37097_37170 = state_37057__$1;
(statearr_37097_37170[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (44))){
var inst_37033 = (state_37057[(21)]);
var inst_37046 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37033);
var inst_37047 = cljs.core.pr_str.call(null,inst_37046);
var inst_37048 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37047)].join('');
var inst_37049 = figwheel.client.utils.log.call(null,inst_37048);
var state_37057__$1 = state_37057;
var statearr_37098_37171 = state_37057__$1;
(statearr_37098_37171[(2)] = inst_37049);

(statearr_37098_37171[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (6))){
var inst_36951 = (state_37057[(2)]);
var state_37057__$1 = state_37057;
var statearr_37099_37172 = state_37057__$1;
(statearr_37099_37172[(2)] = inst_36951);

(statearr_37099_37172[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (28))){
var inst_36976 = (state_37057[(26)]);
var inst_37003 = (state_37057[(2)]);
var inst_37004 = cljs.core.not_empty.call(null,inst_36976);
var state_37057__$1 = (function (){var statearr_37100 = state_37057;
(statearr_37100[(29)] = inst_37003);

return statearr_37100;
})();
if(cljs.core.truth_(inst_37004)){
var statearr_37101_37173 = state_37057__$1;
(statearr_37101_37173[(1)] = (29));

} else {
var statearr_37102_37174 = state_37057__$1;
(statearr_37102_37174[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (25))){
var inst_36974 = (state_37057[(25)]);
var inst_36990 = (state_37057[(2)]);
var inst_36991 = cljs.core.not_empty.call(null,inst_36974);
var state_37057__$1 = (function (){var statearr_37103 = state_37057;
(statearr_37103[(30)] = inst_36990);

return statearr_37103;
})();
if(cljs.core.truth_(inst_36991)){
var statearr_37104_37175 = state_37057__$1;
(statearr_37104_37175[(1)] = (26));

} else {
var statearr_37105_37176 = state_37057__$1;
(statearr_37105_37176[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (34))){
var inst_37026 = (state_37057[(2)]);
var state_37057__$1 = state_37057;
if(cljs.core.truth_(inst_37026)){
var statearr_37106_37177 = state_37057__$1;
(statearr_37106_37177[(1)] = (38));

} else {
var statearr_37107_37178 = state_37057__$1;
(statearr_37107_37178[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (17))){
var state_37057__$1 = state_37057;
var statearr_37108_37179 = state_37057__$1;
(statearr_37108_37179[(2)] = recompile_dependents);

(statearr_37108_37179[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (3))){
var state_37057__$1 = state_37057;
var statearr_37109_37180 = state_37057__$1;
(statearr_37109_37180[(2)] = null);

(statearr_37109_37180[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (12))){
var inst_36947 = (state_37057[(2)]);
var state_37057__$1 = state_37057;
var statearr_37110_37181 = state_37057__$1;
(statearr_37110_37181[(2)] = inst_36947);

(statearr_37110_37181[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (2))){
var inst_36909 = (state_37057[(13)]);
var inst_36916 = cljs.core.seq.call(null,inst_36909);
var inst_36917 = inst_36916;
var inst_36918 = null;
var inst_36919 = (0);
var inst_36920 = (0);
var state_37057__$1 = (function (){var statearr_37111 = state_37057;
(statearr_37111[(7)] = inst_36919);

(statearr_37111[(8)] = inst_36917);

(statearr_37111[(9)] = inst_36920);

(statearr_37111[(10)] = inst_36918);

return statearr_37111;
})();
var statearr_37112_37182 = state_37057__$1;
(statearr_37112_37182[(2)] = null);

(statearr_37112_37182[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (23))){
var inst_36976 = (state_37057[(26)]);
var inst_36978 = (state_37057[(23)]);
var inst_36973 = (state_37057[(24)]);
var inst_36974 = (state_37057[(25)]);
var inst_36970 = (state_37057[(19)]);
var inst_36981 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36983 = (function (){var all_files = inst_36970;
var res_SINGLEQUOTE_ = inst_36973;
var res = inst_36974;
var files_not_loaded = inst_36976;
var dependencies_that_loaded = inst_36978;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36976,inst_36978,inst_36973,inst_36974,inst_36970,inst_36981,state_val_37058,c__34449__auto__,map__36902,map__36902__$1,opts,before_jsload,on_jsload,reload_dependents,map__36903,map__36903__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36982){
var map__37113 = p__36982;
var map__37113__$1 = ((((!((map__37113 == null)))?(((((map__37113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37113):map__37113);
var request_url = cljs.core.get.call(null,map__37113__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36976,inst_36978,inst_36973,inst_36974,inst_36970,inst_36981,state_val_37058,c__34449__auto__,map__36902,map__36902__$1,opts,before_jsload,on_jsload,reload_dependents,map__36903,map__36903__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36984 = cljs.core.reverse.call(null,inst_36978);
var inst_36985 = cljs.core.map.call(null,inst_36983,inst_36984);
var inst_36986 = cljs.core.pr_str.call(null,inst_36985);
var inst_36987 = figwheel.client.utils.log.call(null,inst_36986);
var state_37057__$1 = (function (){var statearr_37115 = state_37057;
(statearr_37115[(31)] = inst_36981);

return statearr_37115;
})();
var statearr_37116_37183 = state_37057__$1;
(statearr_37116_37183[(2)] = inst_36987);

(statearr_37116_37183[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (35))){
var state_37057__$1 = state_37057;
var statearr_37117_37184 = state_37057__$1;
(statearr_37117_37184[(2)] = true);

(statearr_37117_37184[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (19))){
var inst_36960 = (state_37057[(12)]);
var inst_36966 = figwheel.client.file_reloading.expand_files.call(null,inst_36960);
var state_37057__$1 = state_37057;
var statearr_37118_37185 = state_37057__$1;
(statearr_37118_37185[(2)] = inst_36966);

(statearr_37118_37185[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (11))){
var state_37057__$1 = state_37057;
var statearr_37119_37186 = state_37057__$1;
(statearr_37119_37186[(2)] = null);

(statearr_37119_37186[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (9))){
var inst_36949 = (state_37057[(2)]);
var state_37057__$1 = state_37057;
var statearr_37120_37187 = state_37057__$1;
(statearr_37120_37187[(2)] = inst_36949);

(statearr_37120_37187[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (5))){
var inst_36919 = (state_37057[(7)]);
var inst_36920 = (state_37057[(9)]);
var inst_36922 = (inst_36920 < inst_36919);
var inst_36923 = inst_36922;
var state_37057__$1 = state_37057;
if(cljs.core.truth_(inst_36923)){
var statearr_37121_37188 = state_37057__$1;
(statearr_37121_37188[(1)] = (7));

} else {
var statearr_37122_37189 = state_37057__$1;
(statearr_37122_37189[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (14))){
var inst_36930 = (state_37057[(22)]);
var inst_36939 = cljs.core.first.call(null,inst_36930);
var inst_36940 = figwheel.client.file_reloading.eval_body.call(null,inst_36939,opts);
var inst_36941 = cljs.core.next.call(null,inst_36930);
var inst_36917 = inst_36941;
var inst_36918 = null;
var inst_36919 = (0);
var inst_36920 = (0);
var state_37057__$1 = (function (){var statearr_37123 = state_37057;
(statearr_37123[(7)] = inst_36919);

(statearr_37123[(32)] = inst_36940);

(statearr_37123[(8)] = inst_36917);

(statearr_37123[(9)] = inst_36920);

(statearr_37123[(10)] = inst_36918);

return statearr_37123;
})();
var statearr_37124_37190 = state_37057__$1;
(statearr_37124_37190[(2)] = null);

(statearr_37124_37190[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (45))){
var state_37057__$1 = state_37057;
var statearr_37125_37191 = state_37057__$1;
(statearr_37125_37191[(2)] = null);

(statearr_37125_37191[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (26))){
var inst_36976 = (state_37057[(26)]);
var inst_36978 = (state_37057[(23)]);
var inst_36973 = (state_37057[(24)]);
var inst_36974 = (state_37057[(25)]);
var inst_36970 = (state_37057[(19)]);
var inst_36993 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36995 = (function (){var all_files = inst_36970;
var res_SINGLEQUOTE_ = inst_36973;
var res = inst_36974;
var files_not_loaded = inst_36976;
var dependencies_that_loaded = inst_36978;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36976,inst_36978,inst_36973,inst_36974,inst_36970,inst_36993,state_val_37058,c__34449__auto__,map__36902,map__36902__$1,opts,before_jsload,on_jsload,reload_dependents,map__36903,map__36903__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36994){
var map__37126 = p__36994;
var map__37126__$1 = ((((!((map__37126 == null)))?(((((map__37126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37126):map__37126);
var namespace = cljs.core.get.call(null,map__37126__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37126__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36976,inst_36978,inst_36973,inst_36974,inst_36970,inst_36993,state_val_37058,c__34449__auto__,map__36902,map__36902__$1,opts,before_jsload,on_jsload,reload_dependents,map__36903,map__36903__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36996 = cljs.core.map.call(null,inst_36995,inst_36974);
var inst_36997 = cljs.core.pr_str.call(null,inst_36996);
var inst_36998 = figwheel.client.utils.log.call(null,inst_36997);
var inst_36999 = (function (){var all_files = inst_36970;
var res_SINGLEQUOTE_ = inst_36973;
var res = inst_36974;
var files_not_loaded = inst_36976;
var dependencies_that_loaded = inst_36978;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36976,inst_36978,inst_36973,inst_36974,inst_36970,inst_36993,inst_36995,inst_36996,inst_36997,inst_36998,state_val_37058,c__34449__auto__,map__36902,map__36902__$1,opts,before_jsload,on_jsload,reload_dependents,map__36903,map__36903__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36976,inst_36978,inst_36973,inst_36974,inst_36970,inst_36993,inst_36995,inst_36996,inst_36997,inst_36998,state_val_37058,c__34449__auto__,map__36902,map__36902__$1,opts,before_jsload,on_jsload,reload_dependents,map__36903,map__36903__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37000 = setTimeout(inst_36999,(10));
var state_37057__$1 = (function (){var statearr_37128 = state_37057;
(statearr_37128[(33)] = inst_36998);

(statearr_37128[(34)] = inst_36993);

return statearr_37128;
})();
var statearr_37129_37192 = state_37057__$1;
(statearr_37129_37192[(2)] = inst_37000);

(statearr_37129_37192[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (16))){
var state_37057__$1 = state_37057;
var statearr_37130_37193 = state_37057__$1;
(statearr_37130_37193[(2)] = reload_dependents);

(statearr_37130_37193[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (38))){
var inst_37010 = (state_37057[(16)]);
var inst_37028 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37010);
var state_37057__$1 = state_37057;
var statearr_37131_37194 = state_37057__$1;
(statearr_37131_37194[(2)] = inst_37028);

(statearr_37131_37194[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (30))){
var state_37057__$1 = state_37057;
var statearr_37132_37195 = state_37057__$1;
(statearr_37132_37195[(2)] = null);

(statearr_37132_37195[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (10))){
var inst_36930 = (state_37057[(22)]);
var inst_36932 = cljs.core.chunked_seq_QMARK_.call(null,inst_36930);
var state_37057__$1 = state_37057;
if(inst_36932){
var statearr_37133_37196 = state_37057__$1;
(statearr_37133_37196[(1)] = (13));

} else {
var statearr_37134_37197 = state_37057__$1;
(statearr_37134_37197[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (18))){
var inst_36964 = (state_37057[(2)]);
var state_37057__$1 = state_37057;
if(cljs.core.truth_(inst_36964)){
var statearr_37135_37198 = state_37057__$1;
(statearr_37135_37198[(1)] = (19));

} else {
var statearr_37136_37199 = state_37057__$1;
(statearr_37136_37199[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (42))){
var state_37057__$1 = state_37057;
var statearr_37137_37200 = state_37057__$1;
(statearr_37137_37200[(2)] = null);

(statearr_37137_37200[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (37))){
var inst_37023 = (state_37057[(2)]);
var state_37057__$1 = state_37057;
var statearr_37138_37201 = state_37057__$1;
(statearr_37138_37201[(2)] = inst_37023);

(statearr_37138_37201[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (8))){
var inst_36930 = (state_37057[(22)]);
var inst_36917 = (state_37057[(8)]);
var inst_36930__$1 = cljs.core.seq.call(null,inst_36917);
var state_37057__$1 = (function (){var statearr_37139 = state_37057;
(statearr_37139[(22)] = inst_36930__$1);

return statearr_37139;
})();
if(inst_36930__$1){
var statearr_37140_37202 = state_37057__$1;
(statearr_37140_37202[(1)] = (10));

} else {
var statearr_37141_37203 = state_37057__$1;
(statearr_37141_37203[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34449__auto__,map__36902,map__36902__$1,opts,before_jsload,on_jsload,reload_dependents,map__36903,map__36903__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__34359__auto__,c__34449__auto__,map__36902,map__36902__$1,opts,before_jsload,on_jsload,reload_dependents,map__36903,map__36903__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34360__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34360__auto____0 = (function (){
var statearr_37142 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37142[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__34360__auto__);

(statearr_37142[(1)] = (1));

return statearr_37142;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34360__auto____1 = (function (state_37057){
while(true){
var ret_value__34361__auto__ = (function (){try{while(true){
var result__34362__auto__ = switch__34359__auto__.call(null,state_37057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34362__auto__;
}
break;
}
}catch (e37143){if((e37143 instanceof Object)){
var ex__34363__auto__ = e37143;
var statearr_37144_37204 = state_37057;
(statearr_37144_37204[(5)] = ex__34363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37205 = state_37057;
state_37057 = G__37205;
continue;
} else {
return ret_value__34361__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__34360__auto__ = function(state_37057){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34360__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34360__auto____1.call(this,state_37057);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34360__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34360__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34360__auto__;
})()
;})(switch__34359__auto__,c__34449__auto__,map__36902,map__36902__$1,opts,before_jsload,on_jsload,reload_dependents,map__36903,map__36903__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__34451__auto__ = (function (){var statearr_37145 = f__34450__auto__.call(null);
(statearr_37145[(6)] = c__34449__auto__);

return statearr_37145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34451__auto__);
});})(c__34449__auto__,map__36902,map__36902__$1,opts,before_jsload,on_jsload,reload_dependents,map__36903,map__36903__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__34449__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37208,link){
var map__37209 = p__37208;
var map__37209__$1 = ((((!((map__37209 == null)))?(((((map__37209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37209):map__37209);
var file = cljs.core.get.call(null,map__37209__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__37209,map__37209__$1,file){
return (function (p1__37206_SHARP_,p2__37207_SHARP_){
if(cljs.core._EQ_.call(null,p1__37206_SHARP_,p2__37207_SHARP_)){
return p1__37206_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__37209,map__37209__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37212){
var map__37213 = p__37212;
var map__37213__$1 = ((((!((map__37213 == null)))?(((((map__37213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37213):map__37213);
var match_length = cljs.core.get.call(null,map__37213__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37213__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37211_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37211_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37215_SHARP_,p2__37216_SHARP_){
return cljs.core.assoc.call(null,p1__37215_SHARP_,cljs.core.get.call(null,p2__37216_SHARP_,key),p2__37216_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_37217 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37217);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37217);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37218,p__37219){
var map__37220 = p__37218;
var map__37220__$1 = ((((!((map__37220 == null)))?(((((map__37220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37220):map__37220);
var on_cssload = cljs.core.get.call(null,map__37220__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37221 = p__37219;
var map__37221__$1 = ((((!((map__37221 == null)))?(((((map__37221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37221):map__37221);
var files_msg = map__37221__$1;
var files = cljs.core.get.call(null,map__37221__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1557923599861
