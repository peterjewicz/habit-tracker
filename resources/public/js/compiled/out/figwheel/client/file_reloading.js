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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29050_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29050_SHARP_));
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
var seq__29051 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29052 = null;
var count__29053 = (0);
var i__29054 = (0);
while(true){
if((i__29054 < count__29053)){
var n = cljs.core._nth.call(null,chunk__29052,i__29054);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29055 = seq__29051;
var G__29056 = chunk__29052;
var G__29057 = count__29053;
var G__29058 = (i__29054 + (1));
seq__29051 = G__29055;
chunk__29052 = G__29056;
count__29053 = G__29057;
i__29054 = G__29058;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29051);
if(temp__5457__auto__){
var seq__29051__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29051__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29051__$1);
var G__29059 = cljs.core.chunk_rest.call(null,seq__29051__$1);
var G__29060 = c__4319__auto__;
var G__29061 = cljs.core.count.call(null,c__4319__auto__);
var G__29062 = (0);
seq__29051 = G__29059;
chunk__29052 = G__29060;
count__29053 = G__29061;
i__29054 = G__29062;
continue;
} else {
var n = cljs.core.first.call(null,seq__29051__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29063 = cljs.core.next.call(null,seq__29051__$1);
var G__29064 = null;
var G__29065 = (0);
var G__29066 = (0);
seq__29051 = G__29063;
chunk__29052 = G__29064;
count__29053 = G__29065;
i__29054 = G__29066;
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
return cljs.core.some.call(null,(function (p__29067){
var vec__29068 = p__29067;
var _ = cljs.core.nth.call(null,vec__29068,(0),null);
var v = cljs.core.nth.call(null,vec__29068,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__29071){
var vec__29072 = p__29071;
var k = cljs.core.nth.call(null,vec__29072,(0),null);
var v = cljs.core.nth.call(null,vec__29072,(1),null);
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

var seq__29084_29092 = cljs.core.seq.call(null,deps);
var chunk__29085_29093 = null;
var count__29086_29094 = (0);
var i__29087_29095 = (0);
while(true){
if((i__29087_29095 < count__29086_29094)){
var dep_29096 = cljs.core._nth.call(null,chunk__29085_29093,i__29087_29095);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29096;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29096));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29096,(depth + (1)),state);
} else {
}


var G__29097 = seq__29084_29092;
var G__29098 = chunk__29085_29093;
var G__29099 = count__29086_29094;
var G__29100 = (i__29087_29095 + (1));
seq__29084_29092 = G__29097;
chunk__29085_29093 = G__29098;
count__29086_29094 = G__29099;
i__29087_29095 = G__29100;
continue;
} else {
var temp__5457__auto___29101 = cljs.core.seq.call(null,seq__29084_29092);
if(temp__5457__auto___29101){
var seq__29084_29102__$1 = temp__5457__auto___29101;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29084_29102__$1)){
var c__4319__auto___29103 = cljs.core.chunk_first.call(null,seq__29084_29102__$1);
var G__29104 = cljs.core.chunk_rest.call(null,seq__29084_29102__$1);
var G__29105 = c__4319__auto___29103;
var G__29106 = cljs.core.count.call(null,c__4319__auto___29103);
var G__29107 = (0);
seq__29084_29092 = G__29104;
chunk__29085_29093 = G__29105;
count__29086_29094 = G__29106;
i__29087_29095 = G__29107;
continue;
} else {
var dep_29108 = cljs.core.first.call(null,seq__29084_29102__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29108;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29108));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29108,(depth + (1)),state);
} else {
}


var G__29109 = cljs.core.next.call(null,seq__29084_29102__$1);
var G__29110 = null;
var G__29111 = (0);
var G__29112 = (0);
seq__29084_29092 = G__29109;
chunk__29085_29093 = G__29110;
count__29086_29094 = G__29111;
i__29087_29095 = G__29112;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29088){
var vec__29089 = p__29088;
var seq__29090 = cljs.core.seq.call(null,vec__29089);
var first__29091 = cljs.core.first.call(null,seq__29090);
var seq__29090__$1 = cljs.core.next.call(null,seq__29090);
var x = first__29091;
var xs = seq__29090__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29089,seq__29090,first__29091,seq__29090__$1,x,xs,get_deps__$1){
return (function (p1__29075_SHARP_){
return clojure.set.difference.call(null,p1__29075_SHARP_,x);
});})(vec__29089,seq__29090,first__29091,seq__29090__$1,x,xs,get_deps__$1))
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
var seq__29113 = cljs.core.seq.call(null,provides);
var chunk__29114 = null;
var count__29115 = (0);
var i__29116 = (0);
while(true){
if((i__29116 < count__29115)){
var prov = cljs.core._nth.call(null,chunk__29114,i__29116);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29117_29125 = cljs.core.seq.call(null,requires);
var chunk__29118_29126 = null;
var count__29119_29127 = (0);
var i__29120_29128 = (0);
while(true){
if((i__29120_29128 < count__29119_29127)){
var req_29129 = cljs.core._nth.call(null,chunk__29118_29126,i__29120_29128);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29129,prov);


var G__29130 = seq__29117_29125;
var G__29131 = chunk__29118_29126;
var G__29132 = count__29119_29127;
var G__29133 = (i__29120_29128 + (1));
seq__29117_29125 = G__29130;
chunk__29118_29126 = G__29131;
count__29119_29127 = G__29132;
i__29120_29128 = G__29133;
continue;
} else {
var temp__5457__auto___29134 = cljs.core.seq.call(null,seq__29117_29125);
if(temp__5457__auto___29134){
var seq__29117_29135__$1 = temp__5457__auto___29134;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29117_29135__$1)){
var c__4319__auto___29136 = cljs.core.chunk_first.call(null,seq__29117_29135__$1);
var G__29137 = cljs.core.chunk_rest.call(null,seq__29117_29135__$1);
var G__29138 = c__4319__auto___29136;
var G__29139 = cljs.core.count.call(null,c__4319__auto___29136);
var G__29140 = (0);
seq__29117_29125 = G__29137;
chunk__29118_29126 = G__29138;
count__29119_29127 = G__29139;
i__29120_29128 = G__29140;
continue;
} else {
var req_29141 = cljs.core.first.call(null,seq__29117_29135__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29141,prov);


var G__29142 = cljs.core.next.call(null,seq__29117_29135__$1);
var G__29143 = null;
var G__29144 = (0);
var G__29145 = (0);
seq__29117_29125 = G__29142;
chunk__29118_29126 = G__29143;
count__29119_29127 = G__29144;
i__29120_29128 = G__29145;
continue;
}
} else {
}
}
break;
}


var G__29146 = seq__29113;
var G__29147 = chunk__29114;
var G__29148 = count__29115;
var G__29149 = (i__29116 + (1));
seq__29113 = G__29146;
chunk__29114 = G__29147;
count__29115 = G__29148;
i__29116 = G__29149;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29113);
if(temp__5457__auto__){
var seq__29113__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29113__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29113__$1);
var G__29150 = cljs.core.chunk_rest.call(null,seq__29113__$1);
var G__29151 = c__4319__auto__;
var G__29152 = cljs.core.count.call(null,c__4319__auto__);
var G__29153 = (0);
seq__29113 = G__29150;
chunk__29114 = G__29151;
count__29115 = G__29152;
i__29116 = G__29153;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29113__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29121_29154 = cljs.core.seq.call(null,requires);
var chunk__29122_29155 = null;
var count__29123_29156 = (0);
var i__29124_29157 = (0);
while(true){
if((i__29124_29157 < count__29123_29156)){
var req_29158 = cljs.core._nth.call(null,chunk__29122_29155,i__29124_29157);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29158,prov);


var G__29159 = seq__29121_29154;
var G__29160 = chunk__29122_29155;
var G__29161 = count__29123_29156;
var G__29162 = (i__29124_29157 + (1));
seq__29121_29154 = G__29159;
chunk__29122_29155 = G__29160;
count__29123_29156 = G__29161;
i__29124_29157 = G__29162;
continue;
} else {
var temp__5457__auto___29163__$1 = cljs.core.seq.call(null,seq__29121_29154);
if(temp__5457__auto___29163__$1){
var seq__29121_29164__$1 = temp__5457__auto___29163__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29121_29164__$1)){
var c__4319__auto___29165 = cljs.core.chunk_first.call(null,seq__29121_29164__$1);
var G__29166 = cljs.core.chunk_rest.call(null,seq__29121_29164__$1);
var G__29167 = c__4319__auto___29165;
var G__29168 = cljs.core.count.call(null,c__4319__auto___29165);
var G__29169 = (0);
seq__29121_29154 = G__29166;
chunk__29122_29155 = G__29167;
count__29123_29156 = G__29168;
i__29124_29157 = G__29169;
continue;
} else {
var req_29170 = cljs.core.first.call(null,seq__29121_29164__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29170,prov);


var G__29171 = cljs.core.next.call(null,seq__29121_29164__$1);
var G__29172 = null;
var G__29173 = (0);
var G__29174 = (0);
seq__29121_29154 = G__29171;
chunk__29122_29155 = G__29172;
count__29123_29156 = G__29173;
i__29124_29157 = G__29174;
continue;
}
} else {
}
}
break;
}


var G__29175 = cljs.core.next.call(null,seq__29113__$1);
var G__29176 = null;
var G__29177 = (0);
var G__29178 = (0);
seq__29113 = G__29175;
chunk__29114 = G__29176;
count__29115 = G__29177;
i__29116 = G__29178;
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
var seq__29179_29183 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29180_29184 = null;
var count__29181_29185 = (0);
var i__29182_29186 = (0);
while(true){
if((i__29182_29186 < count__29181_29185)){
var ns_29187 = cljs.core._nth.call(null,chunk__29180_29184,i__29182_29186);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29187);


var G__29188 = seq__29179_29183;
var G__29189 = chunk__29180_29184;
var G__29190 = count__29181_29185;
var G__29191 = (i__29182_29186 + (1));
seq__29179_29183 = G__29188;
chunk__29180_29184 = G__29189;
count__29181_29185 = G__29190;
i__29182_29186 = G__29191;
continue;
} else {
var temp__5457__auto___29192 = cljs.core.seq.call(null,seq__29179_29183);
if(temp__5457__auto___29192){
var seq__29179_29193__$1 = temp__5457__auto___29192;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29179_29193__$1)){
var c__4319__auto___29194 = cljs.core.chunk_first.call(null,seq__29179_29193__$1);
var G__29195 = cljs.core.chunk_rest.call(null,seq__29179_29193__$1);
var G__29196 = c__4319__auto___29194;
var G__29197 = cljs.core.count.call(null,c__4319__auto___29194);
var G__29198 = (0);
seq__29179_29183 = G__29195;
chunk__29180_29184 = G__29196;
count__29181_29185 = G__29197;
i__29182_29186 = G__29198;
continue;
} else {
var ns_29199 = cljs.core.first.call(null,seq__29179_29193__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29199);


var G__29200 = cljs.core.next.call(null,seq__29179_29193__$1);
var G__29201 = null;
var G__29202 = (0);
var G__29203 = (0);
seq__29179_29183 = G__29200;
chunk__29180_29184 = G__29201;
count__29181_29185 = G__29202;
i__29182_29186 = G__29203;
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
var G__29204__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29204 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29205__i = 0, G__29205__a = new Array(arguments.length -  0);
while (G__29205__i < G__29205__a.length) {G__29205__a[G__29205__i] = arguments[G__29205__i + 0]; ++G__29205__i;}
  args = new cljs.core.IndexedSeq(G__29205__a,0,null);
} 
return G__29204__delegate.call(this,args);};
G__29204.cljs$lang$maxFixedArity = 0;
G__29204.cljs$lang$applyTo = (function (arglist__29206){
var args = cljs.core.seq(arglist__29206);
return G__29204__delegate(args);
});
G__29204.cljs$core$IFn$_invoke$arity$variadic = G__29204__delegate;
return G__29204;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__29207_SHARP_,p2__29208_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29207_SHARP_)].join('')),p2__29208_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__29209_SHARP_,p2__29210_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29209_SHARP_)].join(''),p2__29210_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29211 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29211.addCallback(((function (G__29211){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29211))
);

G__29211.addErrback(((function (G__29211){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29211))
);

return G__29211;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29212){if((e29212 instanceof Error)){
var e = e29212;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29212;

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
}catch (e29213){if((e29213 instanceof Error)){
var e = e29213;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29213;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29214 = cljs.core._EQ_;
var expr__29215 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29214.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29215))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29214.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29215))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29214.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29215))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29214,expr__29215){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29214,expr__29215))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29217,callback){
var map__29218 = p__29217;
var map__29218__$1 = ((((!((map__29218 == null)))?(((((map__29218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29218):map__29218);
var file_msg = map__29218__$1;
var request_url = cljs.core.get.call(null,map__29218__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29218,map__29218__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29218,map__29218__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__26941__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26941__auto__){
return (function (){
var f__26942__auto__ = (function (){var switch__26851__auto__ = ((function (c__26941__auto__){
return (function (state_29256){
var state_val_29257 = (state_29256[(1)]);
if((state_val_29257 === (7))){
var inst_29252 = (state_29256[(2)]);
var state_29256__$1 = state_29256;
var statearr_29258_29284 = state_29256__$1;
(statearr_29258_29284[(2)] = inst_29252);

(statearr_29258_29284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29257 === (1))){
var state_29256__$1 = state_29256;
var statearr_29259_29285 = state_29256__$1;
(statearr_29259_29285[(2)] = null);

(statearr_29259_29285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29257 === (4))){
var inst_29222 = (state_29256[(7)]);
var inst_29222__$1 = (state_29256[(2)]);
var state_29256__$1 = (function (){var statearr_29260 = state_29256;
(statearr_29260[(7)] = inst_29222__$1);

return statearr_29260;
})();
if(cljs.core.truth_(inst_29222__$1)){
var statearr_29261_29286 = state_29256__$1;
(statearr_29261_29286[(1)] = (5));

} else {
var statearr_29262_29287 = state_29256__$1;
(statearr_29262_29287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29257 === (15))){
var inst_29235 = (state_29256[(8)]);
var inst_29237 = (state_29256[(9)]);
var inst_29239 = inst_29237.call(null,inst_29235);
var state_29256__$1 = state_29256;
var statearr_29263_29288 = state_29256__$1;
(statearr_29263_29288[(2)] = inst_29239);

(statearr_29263_29288[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29257 === (13))){
var inst_29246 = (state_29256[(2)]);
var state_29256__$1 = state_29256;
var statearr_29264_29289 = state_29256__$1;
(statearr_29264_29289[(2)] = inst_29246);

(statearr_29264_29289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29257 === (6))){
var state_29256__$1 = state_29256;
var statearr_29265_29290 = state_29256__$1;
(statearr_29265_29290[(2)] = null);

(statearr_29265_29290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29257 === (17))){
var inst_29243 = (state_29256[(2)]);
var state_29256__$1 = state_29256;
var statearr_29266_29291 = state_29256__$1;
(statearr_29266_29291[(2)] = inst_29243);

(statearr_29266_29291[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29257 === (3))){
var inst_29254 = (state_29256[(2)]);
var state_29256__$1 = state_29256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29256__$1,inst_29254);
} else {
if((state_val_29257 === (12))){
var state_29256__$1 = state_29256;
var statearr_29267_29292 = state_29256__$1;
(statearr_29267_29292[(2)] = null);

(statearr_29267_29292[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29257 === (2))){
var state_29256__$1 = state_29256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29256__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29257 === (11))){
var inst_29227 = (state_29256[(10)]);
var inst_29233 = figwheel.client.file_reloading.blocking_load.call(null,inst_29227);
var state_29256__$1 = state_29256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29256__$1,(14),inst_29233);
} else {
if((state_val_29257 === (9))){
var inst_29227 = (state_29256[(10)]);
var state_29256__$1 = state_29256;
if(cljs.core.truth_(inst_29227)){
var statearr_29268_29293 = state_29256__$1;
(statearr_29268_29293[(1)] = (11));

} else {
var statearr_29269_29294 = state_29256__$1;
(statearr_29269_29294[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29257 === (5))){
var inst_29222 = (state_29256[(7)]);
var inst_29228 = (state_29256[(11)]);
var inst_29227 = cljs.core.nth.call(null,inst_29222,(0),null);
var inst_29228__$1 = cljs.core.nth.call(null,inst_29222,(1),null);
var state_29256__$1 = (function (){var statearr_29270 = state_29256;
(statearr_29270[(10)] = inst_29227);

(statearr_29270[(11)] = inst_29228__$1);

return statearr_29270;
})();
if(cljs.core.truth_(inst_29228__$1)){
var statearr_29271_29295 = state_29256__$1;
(statearr_29271_29295[(1)] = (8));

} else {
var statearr_29272_29296 = state_29256__$1;
(statearr_29272_29296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29257 === (14))){
var inst_29227 = (state_29256[(10)]);
var inst_29237 = (state_29256[(9)]);
var inst_29235 = (state_29256[(2)]);
var inst_29236 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29237__$1 = cljs.core.get.call(null,inst_29236,inst_29227);
var state_29256__$1 = (function (){var statearr_29273 = state_29256;
(statearr_29273[(8)] = inst_29235);

(statearr_29273[(9)] = inst_29237__$1);

return statearr_29273;
})();
if(cljs.core.truth_(inst_29237__$1)){
var statearr_29274_29297 = state_29256__$1;
(statearr_29274_29297[(1)] = (15));

} else {
var statearr_29275_29298 = state_29256__$1;
(statearr_29275_29298[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29257 === (16))){
var inst_29235 = (state_29256[(8)]);
var inst_29241 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29235);
var state_29256__$1 = state_29256;
var statearr_29276_29299 = state_29256__$1;
(statearr_29276_29299[(2)] = inst_29241);

(statearr_29276_29299[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29257 === (10))){
var inst_29248 = (state_29256[(2)]);
var state_29256__$1 = (function (){var statearr_29277 = state_29256;
(statearr_29277[(12)] = inst_29248);

return statearr_29277;
})();
var statearr_29278_29300 = state_29256__$1;
(statearr_29278_29300[(2)] = null);

(statearr_29278_29300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29257 === (8))){
var inst_29228 = (state_29256[(11)]);
var inst_29230 = eval(inst_29228);
var state_29256__$1 = state_29256;
var statearr_29279_29301 = state_29256__$1;
(statearr_29279_29301[(2)] = inst_29230);

(statearr_29279_29301[(1)] = (10));


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
});})(c__26941__auto__))
;
return ((function (switch__26851__auto__,c__26941__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26852__auto__ = null;
var figwheel$client$file_reloading$state_machine__26852__auto____0 = (function (){
var statearr_29280 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29280[(0)] = figwheel$client$file_reloading$state_machine__26852__auto__);

(statearr_29280[(1)] = (1));

return statearr_29280;
});
var figwheel$client$file_reloading$state_machine__26852__auto____1 = (function (state_29256){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_29256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e29281){if((e29281 instanceof Object)){
var ex__26855__auto__ = e29281;
var statearr_29282_29302 = state_29256;
(statearr_29282_29302[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29303 = state_29256;
state_29256 = G__29303;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26852__auto__ = function(state_29256){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26852__auto____1.call(this,state_29256);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26852__auto____0;
figwheel$client$file_reloading$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26852__auto____1;
return figwheel$client$file_reloading$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26941__auto__))
})();
var state__26943__auto__ = (function (){var statearr_29283 = f__26942__auto__.call(null);
(statearr_29283[(6)] = c__26941__auto__);

return statearr_29283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26943__auto__);
});})(c__26941__auto__))
);

return c__26941__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29305 = arguments.length;
switch (G__29305) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29307,callback){
var map__29308 = p__29307;
var map__29308__$1 = ((((!((map__29308 == null)))?(((((map__29308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29308):map__29308);
var file_msg = map__29308__$1;
var namespace = cljs.core.get.call(null,map__29308__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29308,map__29308__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29308,map__29308__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29310){
var map__29311 = p__29310;
var map__29311__$1 = ((((!((map__29311 == null)))?(((((map__29311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29311):map__29311);
var file_msg = map__29311__$1;
var namespace = cljs.core.get.call(null,map__29311__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29313){
var map__29314 = p__29313;
var map__29314__$1 = ((((!((map__29314 == null)))?(((((map__29314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29314):map__29314);
var file_msg = map__29314__$1;
var namespace = cljs.core.get.call(null,map__29314__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29316,callback){
var map__29317 = p__29316;
var map__29317__$1 = ((((!((map__29317 == null)))?(((((map__29317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29317):map__29317);
var file_msg = map__29317__$1;
var request_url = cljs.core.get.call(null,map__29317__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29317__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__26941__auto___29367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26941__auto___29367,out){
return (function (){
var f__26942__auto__ = (function (){var switch__26851__auto__ = ((function (c__26941__auto___29367,out){
return (function (state_29352){
var state_val_29353 = (state_29352[(1)]);
if((state_val_29353 === (1))){
var inst_29326 = cljs.core.seq.call(null,files);
var inst_29327 = cljs.core.first.call(null,inst_29326);
var inst_29328 = cljs.core.next.call(null,inst_29326);
var inst_29329 = files;
var state_29352__$1 = (function (){var statearr_29354 = state_29352;
(statearr_29354[(7)] = inst_29327);

(statearr_29354[(8)] = inst_29328);

(statearr_29354[(9)] = inst_29329);

return statearr_29354;
})();
var statearr_29355_29368 = state_29352__$1;
(statearr_29355_29368[(2)] = null);

(statearr_29355_29368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (2))){
var inst_29335 = (state_29352[(10)]);
var inst_29329 = (state_29352[(9)]);
var inst_29334 = cljs.core.seq.call(null,inst_29329);
var inst_29335__$1 = cljs.core.first.call(null,inst_29334);
var inst_29336 = cljs.core.next.call(null,inst_29334);
var inst_29337 = (inst_29335__$1 == null);
var inst_29338 = cljs.core.not.call(null,inst_29337);
var state_29352__$1 = (function (){var statearr_29356 = state_29352;
(statearr_29356[(11)] = inst_29336);

(statearr_29356[(10)] = inst_29335__$1);

return statearr_29356;
})();
if(inst_29338){
var statearr_29357_29369 = state_29352__$1;
(statearr_29357_29369[(1)] = (4));

} else {
var statearr_29358_29370 = state_29352__$1;
(statearr_29358_29370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (3))){
var inst_29350 = (state_29352[(2)]);
var state_29352__$1 = state_29352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29352__$1,inst_29350);
} else {
if((state_val_29353 === (4))){
var inst_29335 = (state_29352[(10)]);
var inst_29340 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29335);
var state_29352__$1 = state_29352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29352__$1,(7),inst_29340);
} else {
if((state_val_29353 === (5))){
var inst_29346 = cljs.core.async.close_BANG_.call(null,out);
var state_29352__$1 = state_29352;
var statearr_29359_29371 = state_29352__$1;
(statearr_29359_29371[(2)] = inst_29346);

(statearr_29359_29371[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (6))){
var inst_29348 = (state_29352[(2)]);
var state_29352__$1 = state_29352;
var statearr_29360_29372 = state_29352__$1;
(statearr_29360_29372[(2)] = inst_29348);

(statearr_29360_29372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (7))){
var inst_29336 = (state_29352[(11)]);
var inst_29342 = (state_29352[(2)]);
var inst_29343 = cljs.core.async.put_BANG_.call(null,out,inst_29342);
var inst_29329 = inst_29336;
var state_29352__$1 = (function (){var statearr_29361 = state_29352;
(statearr_29361[(9)] = inst_29329);

(statearr_29361[(12)] = inst_29343);

return statearr_29361;
})();
var statearr_29362_29373 = state_29352__$1;
(statearr_29362_29373[(2)] = null);

(statearr_29362_29373[(1)] = (2));


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
});})(c__26941__auto___29367,out))
;
return ((function (switch__26851__auto__,c__26941__auto___29367,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto____0 = (function (){
var statearr_29363 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29363[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto__);

(statearr_29363[(1)] = (1));

return statearr_29363;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto____1 = (function (state_29352){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_29352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e29364){if((e29364 instanceof Object)){
var ex__26855__auto__ = e29364;
var statearr_29365_29374 = state_29352;
(statearr_29365_29374[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29375 = state_29352;
state_29352 = G__29375;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto__ = function(state_29352){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto____1.call(this,state_29352);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26941__auto___29367,out))
})();
var state__26943__auto__ = (function (){var statearr_29366 = f__26942__auto__.call(null);
(statearr_29366[(6)] = c__26941__auto___29367);

return statearr_29366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26943__auto__);
});})(c__26941__auto___29367,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29376,opts){
var map__29377 = p__29376;
var map__29377__$1 = ((((!((map__29377 == null)))?(((((map__29377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29377):map__29377);
var eval_body = cljs.core.get.call(null,map__29377__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29377__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e29379){var e = e29379;
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
return (function (p1__29380_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29380_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__29381){
var vec__29382 = p__29381;
var k = cljs.core.nth.call(null,vec__29382,(0),null);
var v = cljs.core.nth.call(null,vec__29382,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29385){
var vec__29386 = p__29385;
var k = cljs.core.nth.call(null,vec__29386,(0),null);
var v = cljs.core.nth.call(null,vec__29386,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29392,p__29393){
var map__29394 = p__29392;
var map__29394__$1 = ((((!((map__29394 == null)))?(((((map__29394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29394):map__29394);
var opts = map__29394__$1;
var before_jsload = cljs.core.get.call(null,map__29394__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29394__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29394__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29395 = p__29393;
var map__29395__$1 = ((((!((map__29395 == null)))?(((((map__29395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29395):map__29395);
var msg = map__29395__$1;
var files = cljs.core.get.call(null,map__29395__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29395__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29395__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26941__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26941__auto__,map__29394,map__29394__$1,opts,before_jsload,on_jsload,reload_dependents,map__29395,map__29395__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26942__auto__ = (function (){var switch__26851__auto__ = ((function (c__26941__auto__,map__29394,map__29394__$1,opts,before_jsload,on_jsload,reload_dependents,map__29395,map__29395__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29549){
var state_val_29550 = (state_29549[(1)]);
if((state_val_29550 === (7))){
var inst_29410 = (state_29549[(7)]);
var inst_29411 = (state_29549[(8)]);
var inst_29412 = (state_29549[(9)]);
var inst_29409 = (state_29549[(10)]);
var inst_29417 = cljs.core._nth.call(null,inst_29410,inst_29412);
var inst_29418 = figwheel.client.file_reloading.eval_body.call(null,inst_29417,opts);
var inst_29419 = (inst_29412 + (1));
var tmp29551 = inst_29410;
var tmp29552 = inst_29411;
var tmp29553 = inst_29409;
var inst_29409__$1 = tmp29553;
var inst_29410__$1 = tmp29551;
var inst_29411__$1 = tmp29552;
var inst_29412__$1 = inst_29419;
var state_29549__$1 = (function (){var statearr_29554 = state_29549;
(statearr_29554[(7)] = inst_29410__$1);

(statearr_29554[(11)] = inst_29418);

(statearr_29554[(8)] = inst_29411__$1);

(statearr_29554[(9)] = inst_29412__$1);

(statearr_29554[(10)] = inst_29409__$1);

return statearr_29554;
})();
var statearr_29555_29638 = state_29549__$1;
(statearr_29555_29638[(2)] = null);

(statearr_29555_29638[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (20))){
var inst_29452 = (state_29549[(12)]);
var inst_29460 = figwheel.client.file_reloading.sort_files.call(null,inst_29452);
var state_29549__$1 = state_29549;
var statearr_29556_29639 = state_29549__$1;
(statearr_29556_29639[(2)] = inst_29460);

(statearr_29556_29639[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (27))){
var state_29549__$1 = state_29549;
var statearr_29557_29640 = state_29549__$1;
(statearr_29557_29640[(2)] = null);

(statearr_29557_29640[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (1))){
var inst_29401 = (state_29549[(13)]);
var inst_29398 = before_jsload.call(null,files);
var inst_29399 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29400 = (function (){return ((function (inst_29401,inst_29398,inst_29399,state_val_29550,c__26941__auto__,map__29394,map__29394__$1,opts,before_jsload,on_jsload,reload_dependents,map__29395,map__29395__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29389_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29389_SHARP_);
});
;})(inst_29401,inst_29398,inst_29399,state_val_29550,c__26941__auto__,map__29394,map__29394__$1,opts,before_jsload,on_jsload,reload_dependents,map__29395,map__29395__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29401__$1 = cljs.core.filter.call(null,inst_29400,files);
var inst_29402 = cljs.core.not_empty.call(null,inst_29401__$1);
var state_29549__$1 = (function (){var statearr_29558 = state_29549;
(statearr_29558[(14)] = inst_29398);

(statearr_29558[(15)] = inst_29399);

(statearr_29558[(13)] = inst_29401__$1);

return statearr_29558;
})();
if(cljs.core.truth_(inst_29402)){
var statearr_29559_29641 = state_29549__$1;
(statearr_29559_29641[(1)] = (2));

} else {
var statearr_29560_29642 = state_29549__$1;
(statearr_29560_29642[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (24))){
var state_29549__$1 = state_29549;
var statearr_29561_29643 = state_29549__$1;
(statearr_29561_29643[(2)] = null);

(statearr_29561_29643[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (39))){
var inst_29502 = (state_29549[(16)]);
var state_29549__$1 = state_29549;
var statearr_29562_29644 = state_29549__$1;
(statearr_29562_29644[(2)] = inst_29502);

(statearr_29562_29644[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (46))){
var inst_29544 = (state_29549[(2)]);
var state_29549__$1 = state_29549;
var statearr_29563_29645 = state_29549__$1;
(statearr_29563_29645[(2)] = inst_29544);

(statearr_29563_29645[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (4))){
var inst_29446 = (state_29549[(2)]);
var inst_29447 = cljs.core.List.EMPTY;
var inst_29448 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29447);
var inst_29449 = (function (){return ((function (inst_29446,inst_29447,inst_29448,state_val_29550,c__26941__auto__,map__29394,map__29394__$1,opts,before_jsload,on_jsload,reload_dependents,map__29395,map__29395__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29390_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29390_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29390_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29390_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_29446,inst_29447,inst_29448,state_val_29550,c__26941__auto__,map__29394,map__29394__$1,opts,before_jsload,on_jsload,reload_dependents,map__29395,map__29395__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29450 = cljs.core.filter.call(null,inst_29449,files);
var inst_29451 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29452 = cljs.core.concat.call(null,inst_29450,inst_29451);
var state_29549__$1 = (function (){var statearr_29564 = state_29549;
(statearr_29564[(17)] = inst_29446);

(statearr_29564[(12)] = inst_29452);

(statearr_29564[(18)] = inst_29448);

return statearr_29564;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29565_29646 = state_29549__$1;
(statearr_29565_29646[(1)] = (16));

} else {
var statearr_29566_29647 = state_29549__$1;
(statearr_29566_29647[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (15))){
var inst_29436 = (state_29549[(2)]);
var state_29549__$1 = state_29549;
var statearr_29567_29648 = state_29549__$1;
(statearr_29567_29648[(2)] = inst_29436);

(statearr_29567_29648[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (21))){
var inst_29462 = (state_29549[(19)]);
var inst_29462__$1 = (state_29549[(2)]);
var inst_29463 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29462__$1);
var state_29549__$1 = (function (){var statearr_29568 = state_29549;
(statearr_29568[(19)] = inst_29462__$1);

return statearr_29568;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29549__$1,(22),inst_29463);
} else {
if((state_val_29550 === (31))){
var inst_29547 = (state_29549[(2)]);
var state_29549__$1 = state_29549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29549__$1,inst_29547);
} else {
if((state_val_29550 === (32))){
var inst_29502 = (state_29549[(16)]);
var inst_29507 = inst_29502.cljs$lang$protocol_mask$partition0$;
var inst_29508 = (inst_29507 & (64));
var inst_29509 = inst_29502.cljs$core$ISeq$;
var inst_29510 = (cljs.core.PROTOCOL_SENTINEL === inst_29509);
var inst_29511 = ((inst_29508) || (inst_29510));
var state_29549__$1 = state_29549;
if(cljs.core.truth_(inst_29511)){
var statearr_29569_29649 = state_29549__$1;
(statearr_29569_29649[(1)] = (35));

} else {
var statearr_29570_29650 = state_29549__$1;
(statearr_29570_29650[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (40))){
var inst_29524 = (state_29549[(20)]);
var inst_29523 = (state_29549[(2)]);
var inst_29524__$1 = cljs.core.get.call(null,inst_29523,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29525 = cljs.core.get.call(null,inst_29523,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29526 = cljs.core.not_empty.call(null,inst_29524__$1);
var state_29549__$1 = (function (){var statearr_29571 = state_29549;
(statearr_29571[(20)] = inst_29524__$1);

(statearr_29571[(21)] = inst_29525);

return statearr_29571;
})();
if(cljs.core.truth_(inst_29526)){
var statearr_29572_29651 = state_29549__$1;
(statearr_29572_29651[(1)] = (41));

} else {
var statearr_29573_29652 = state_29549__$1;
(statearr_29573_29652[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (33))){
var state_29549__$1 = state_29549;
var statearr_29574_29653 = state_29549__$1;
(statearr_29574_29653[(2)] = false);

(statearr_29574_29653[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (13))){
var inst_29422 = (state_29549[(22)]);
var inst_29426 = cljs.core.chunk_first.call(null,inst_29422);
var inst_29427 = cljs.core.chunk_rest.call(null,inst_29422);
var inst_29428 = cljs.core.count.call(null,inst_29426);
var inst_29409 = inst_29427;
var inst_29410 = inst_29426;
var inst_29411 = inst_29428;
var inst_29412 = (0);
var state_29549__$1 = (function (){var statearr_29575 = state_29549;
(statearr_29575[(7)] = inst_29410);

(statearr_29575[(8)] = inst_29411);

(statearr_29575[(9)] = inst_29412);

(statearr_29575[(10)] = inst_29409);

return statearr_29575;
})();
var statearr_29576_29654 = state_29549__$1;
(statearr_29576_29654[(2)] = null);

(statearr_29576_29654[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (22))){
var inst_29465 = (state_29549[(23)]);
var inst_29462 = (state_29549[(19)]);
var inst_29470 = (state_29549[(24)]);
var inst_29466 = (state_29549[(25)]);
var inst_29465__$1 = (state_29549[(2)]);
var inst_29466__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29465__$1);
var inst_29467 = (function (){var all_files = inst_29462;
var res_SINGLEQUOTE_ = inst_29465__$1;
var res = inst_29466__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29465,inst_29462,inst_29470,inst_29466,inst_29465__$1,inst_29466__$1,state_val_29550,c__26941__auto__,map__29394,map__29394__$1,opts,before_jsload,on_jsload,reload_dependents,map__29395,map__29395__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29391_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29391_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29465,inst_29462,inst_29470,inst_29466,inst_29465__$1,inst_29466__$1,state_val_29550,c__26941__auto__,map__29394,map__29394__$1,opts,before_jsload,on_jsload,reload_dependents,map__29395,map__29395__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29468 = cljs.core.filter.call(null,inst_29467,inst_29465__$1);
var inst_29469 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29470__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29469);
var inst_29471 = cljs.core.not_empty.call(null,inst_29470__$1);
var state_29549__$1 = (function (){var statearr_29577 = state_29549;
(statearr_29577[(26)] = inst_29468);

(statearr_29577[(23)] = inst_29465__$1);

(statearr_29577[(24)] = inst_29470__$1);

(statearr_29577[(25)] = inst_29466__$1);

return statearr_29577;
})();
if(cljs.core.truth_(inst_29471)){
var statearr_29578_29655 = state_29549__$1;
(statearr_29578_29655[(1)] = (23));

} else {
var statearr_29579_29656 = state_29549__$1;
(statearr_29579_29656[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (36))){
var state_29549__$1 = state_29549;
var statearr_29580_29657 = state_29549__$1;
(statearr_29580_29657[(2)] = false);

(statearr_29580_29657[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (41))){
var inst_29524 = (state_29549[(20)]);
var inst_29528 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29529 = cljs.core.map.call(null,inst_29528,inst_29524);
var inst_29530 = cljs.core.pr_str.call(null,inst_29529);
var inst_29531 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29530)].join('');
var inst_29532 = figwheel.client.utils.log.call(null,inst_29531);
var state_29549__$1 = state_29549;
var statearr_29581_29658 = state_29549__$1;
(statearr_29581_29658[(2)] = inst_29532);

(statearr_29581_29658[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (43))){
var inst_29525 = (state_29549[(21)]);
var inst_29535 = (state_29549[(2)]);
var inst_29536 = cljs.core.not_empty.call(null,inst_29525);
var state_29549__$1 = (function (){var statearr_29582 = state_29549;
(statearr_29582[(27)] = inst_29535);

return statearr_29582;
})();
if(cljs.core.truth_(inst_29536)){
var statearr_29583_29659 = state_29549__$1;
(statearr_29583_29659[(1)] = (44));

} else {
var statearr_29584_29660 = state_29549__$1;
(statearr_29584_29660[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (29))){
var inst_29468 = (state_29549[(26)]);
var inst_29502 = (state_29549[(16)]);
var inst_29465 = (state_29549[(23)]);
var inst_29462 = (state_29549[(19)]);
var inst_29470 = (state_29549[(24)]);
var inst_29466 = (state_29549[(25)]);
var inst_29498 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29501 = (function (){var all_files = inst_29462;
var res_SINGLEQUOTE_ = inst_29465;
var res = inst_29466;
var files_not_loaded = inst_29468;
var dependencies_that_loaded = inst_29470;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29468,inst_29502,inst_29465,inst_29462,inst_29470,inst_29466,inst_29498,state_val_29550,c__26941__auto__,map__29394,map__29394__$1,opts,before_jsload,on_jsload,reload_dependents,map__29395,map__29395__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29500){
var map__29585 = p__29500;
var map__29585__$1 = ((((!((map__29585 == null)))?(((((map__29585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29585):map__29585);
var namespace = cljs.core.get.call(null,map__29585__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29468,inst_29502,inst_29465,inst_29462,inst_29470,inst_29466,inst_29498,state_val_29550,c__26941__auto__,map__29394,map__29394__$1,opts,before_jsload,on_jsload,reload_dependents,map__29395,map__29395__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29502__$1 = cljs.core.group_by.call(null,inst_29501,inst_29468);
var inst_29504 = (inst_29502__$1 == null);
var inst_29505 = cljs.core.not.call(null,inst_29504);
var state_29549__$1 = (function (){var statearr_29587 = state_29549;
(statearr_29587[(16)] = inst_29502__$1);

(statearr_29587[(28)] = inst_29498);

return statearr_29587;
})();
if(inst_29505){
var statearr_29588_29661 = state_29549__$1;
(statearr_29588_29661[(1)] = (32));

} else {
var statearr_29589_29662 = state_29549__$1;
(statearr_29589_29662[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (44))){
var inst_29525 = (state_29549[(21)]);
var inst_29538 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29525);
var inst_29539 = cljs.core.pr_str.call(null,inst_29538);
var inst_29540 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29539)].join('');
var inst_29541 = figwheel.client.utils.log.call(null,inst_29540);
var state_29549__$1 = state_29549;
var statearr_29590_29663 = state_29549__$1;
(statearr_29590_29663[(2)] = inst_29541);

(statearr_29590_29663[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (6))){
var inst_29443 = (state_29549[(2)]);
var state_29549__$1 = state_29549;
var statearr_29591_29664 = state_29549__$1;
(statearr_29591_29664[(2)] = inst_29443);

(statearr_29591_29664[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (28))){
var inst_29468 = (state_29549[(26)]);
var inst_29495 = (state_29549[(2)]);
var inst_29496 = cljs.core.not_empty.call(null,inst_29468);
var state_29549__$1 = (function (){var statearr_29592 = state_29549;
(statearr_29592[(29)] = inst_29495);

return statearr_29592;
})();
if(cljs.core.truth_(inst_29496)){
var statearr_29593_29665 = state_29549__$1;
(statearr_29593_29665[(1)] = (29));

} else {
var statearr_29594_29666 = state_29549__$1;
(statearr_29594_29666[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (25))){
var inst_29466 = (state_29549[(25)]);
var inst_29482 = (state_29549[(2)]);
var inst_29483 = cljs.core.not_empty.call(null,inst_29466);
var state_29549__$1 = (function (){var statearr_29595 = state_29549;
(statearr_29595[(30)] = inst_29482);

return statearr_29595;
})();
if(cljs.core.truth_(inst_29483)){
var statearr_29596_29667 = state_29549__$1;
(statearr_29596_29667[(1)] = (26));

} else {
var statearr_29597_29668 = state_29549__$1;
(statearr_29597_29668[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (34))){
var inst_29518 = (state_29549[(2)]);
var state_29549__$1 = state_29549;
if(cljs.core.truth_(inst_29518)){
var statearr_29598_29669 = state_29549__$1;
(statearr_29598_29669[(1)] = (38));

} else {
var statearr_29599_29670 = state_29549__$1;
(statearr_29599_29670[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (17))){
var state_29549__$1 = state_29549;
var statearr_29600_29671 = state_29549__$1;
(statearr_29600_29671[(2)] = recompile_dependents);

(statearr_29600_29671[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (3))){
var state_29549__$1 = state_29549;
var statearr_29601_29672 = state_29549__$1;
(statearr_29601_29672[(2)] = null);

(statearr_29601_29672[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (12))){
var inst_29439 = (state_29549[(2)]);
var state_29549__$1 = state_29549;
var statearr_29602_29673 = state_29549__$1;
(statearr_29602_29673[(2)] = inst_29439);

(statearr_29602_29673[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (2))){
var inst_29401 = (state_29549[(13)]);
var inst_29408 = cljs.core.seq.call(null,inst_29401);
var inst_29409 = inst_29408;
var inst_29410 = null;
var inst_29411 = (0);
var inst_29412 = (0);
var state_29549__$1 = (function (){var statearr_29603 = state_29549;
(statearr_29603[(7)] = inst_29410);

(statearr_29603[(8)] = inst_29411);

(statearr_29603[(9)] = inst_29412);

(statearr_29603[(10)] = inst_29409);

return statearr_29603;
})();
var statearr_29604_29674 = state_29549__$1;
(statearr_29604_29674[(2)] = null);

(statearr_29604_29674[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (23))){
var inst_29468 = (state_29549[(26)]);
var inst_29465 = (state_29549[(23)]);
var inst_29462 = (state_29549[(19)]);
var inst_29470 = (state_29549[(24)]);
var inst_29466 = (state_29549[(25)]);
var inst_29473 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29475 = (function (){var all_files = inst_29462;
var res_SINGLEQUOTE_ = inst_29465;
var res = inst_29466;
var files_not_loaded = inst_29468;
var dependencies_that_loaded = inst_29470;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29468,inst_29465,inst_29462,inst_29470,inst_29466,inst_29473,state_val_29550,c__26941__auto__,map__29394,map__29394__$1,opts,before_jsload,on_jsload,reload_dependents,map__29395,map__29395__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29474){
var map__29605 = p__29474;
var map__29605__$1 = ((((!((map__29605 == null)))?(((((map__29605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29605):map__29605);
var request_url = cljs.core.get.call(null,map__29605__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29468,inst_29465,inst_29462,inst_29470,inst_29466,inst_29473,state_val_29550,c__26941__auto__,map__29394,map__29394__$1,opts,before_jsload,on_jsload,reload_dependents,map__29395,map__29395__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29476 = cljs.core.reverse.call(null,inst_29470);
var inst_29477 = cljs.core.map.call(null,inst_29475,inst_29476);
var inst_29478 = cljs.core.pr_str.call(null,inst_29477);
var inst_29479 = figwheel.client.utils.log.call(null,inst_29478);
var state_29549__$1 = (function (){var statearr_29607 = state_29549;
(statearr_29607[(31)] = inst_29473);

return statearr_29607;
})();
var statearr_29608_29675 = state_29549__$1;
(statearr_29608_29675[(2)] = inst_29479);

(statearr_29608_29675[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (35))){
var state_29549__$1 = state_29549;
var statearr_29609_29676 = state_29549__$1;
(statearr_29609_29676[(2)] = true);

(statearr_29609_29676[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (19))){
var inst_29452 = (state_29549[(12)]);
var inst_29458 = figwheel.client.file_reloading.expand_files.call(null,inst_29452);
var state_29549__$1 = state_29549;
var statearr_29610_29677 = state_29549__$1;
(statearr_29610_29677[(2)] = inst_29458);

(statearr_29610_29677[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (11))){
var state_29549__$1 = state_29549;
var statearr_29611_29678 = state_29549__$1;
(statearr_29611_29678[(2)] = null);

(statearr_29611_29678[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (9))){
var inst_29441 = (state_29549[(2)]);
var state_29549__$1 = state_29549;
var statearr_29612_29679 = state_29549__$1;
(statearr_29612_29679[(2)] = inst_29441);

(statearr_29612_29679[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (5))){
var inst_29411 = (state_29549[(8)]);
var inst_29412 = (state_29549[(9)]);
var inst_29414 = (inst_29412 < inst_29411);
var inst_29415 = inst_29414;
var state_29549__$1 = state_29549;
if(cljs.core.truth_(inst_29415)){
var statearr_29613_29680 = state_29549__$1;
(statearr_29613_29680[(1)] = (7));

} else {
var statearr_29614_29681 = state_29549__$1;
(statearr_29614_29681[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (14))){
var inst_29422 = (state_29549[(22)]);
var inst_29431 = cljs.core.first.call(null,inst_29422);
var inst_29432 = figwheel.client.file_reloading.eval_body.call(null,inst_29431,opts);
var inst_29433 = cljs.core.next.call(null,inst_29422);
var inst_29409 = inst_29433;
var inst_29410 = null;
var inst_29411 = (0);
var inst_29412 = (0);
var state_29549__$1 = (function (){var statearr_29615 = state_29549;
(statearr_29615[(7)] = inst_29410);

(statearr_29615[(8)] = inst_29411);

(statearr_29615[(32)] = inst_29432);

(statearr_29615[(9)] = inst_29412);

(statearr_29615[(10)] = inst_29409);

return statearr_29615;
})();
var statearr_29616_29682 = state_29549__$1;
(statearr_29616_29682[(2)] = null);

(statearr_29616_29682[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (45))){
var state_29549__$1 = state_29549;
var statearr_29617_29683 = state_29549__$1;
(statearr_29617_29683[(2)] = null);

(statearr_29617_29683[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (26))){
var inst_29468 = (state_29549[(26)]);
var inst_29465 = (state_29549[(23)]);
var inst_29462 = (state_29549[(19)]);
var inst_29470 = (state_29549[(24)]);
var inst_29466 = (state_29549[(25)]);
var inst_29485 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29487 = (function (){var all_files = inst_29462;
var res_SINGLEQUOTE_ = inst_29465;
var res = inst_29466;
var files_not_loaded = inst_29468;
var dependencies_that_loaded = inst_29470;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29468,inst_29465,inst_29462,inst_29470,inst_29466,inst_29485,state_val_29550,c__26941__auto__,map__29394,map__29394__$1,opts,before_jsload,on_jsload,reload_dependents,map__29395,map__29395__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29486){
var map__29618 = p__29486;
var map__29618__$1 = ((((!((map__29618 == null)))?(((((map__29618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29618):map__29618);
var namespace = cljs.core.get.call(null,map__29618__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29618__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29468,inst_29465,inst_29462,inst_29470,inst_29466,inst_29485,state_val_29550,c__26941__auto__,map__29394,map__29394__$1,opts,before_jsload,on_jsload,reload_dependents,map__29395,map__29395__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29488 = cljs.core.map.call(null,inst_29487,inst_29466);
var inst_29489 = cljs.core.pr_str.call(null,inst_29488);
var inst_29490 = figwheel.client.utils.log.call(null,inst_29489);
var inst_29491 = (function (){var all_files = inst_29462;
var res_SINGLEQUOTE_ = inst_29465;
var res = inst_29466;
var files_not_loaded = inst_29468;
var dependencies_that_loaded = inst_29470;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29468,inst_29465,inst_29462,inst_29470,inst_29466,inst_29485,inst_29487,inst_29488,inst_29489,inst_29490,state_val_29550,c__26941__auto__,map__29394,map__29394__$1,opts,before_jsload,on_jsload,reload_dependents,map__29395,map__29395__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29468,inst_29465,inst_29462,inst_29470,inst_29466,inst_29485,inst_29487,inst_29488,inst_29489,inst_29490,state_val_29550,c__26941__auto__,map__29394,map__29394__$1,opts,before_jsload,on_jsload,reload_dependents,map__29395,map__29395__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29492 = setTimeout(inst_29491,(10));
var state_29549__$1 = (function (){var statearr_29620 = state_29549;
(statearr_29620[(33)] = inst_29485);

(statearr_29620[(34)] = inst_29490);

return statearr_29620;
})();
var statearr_29621_29684 = state_29549__$1;
(statearr_29621_29684[(2)] = inst_29492);

(statearr_29621_29684[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (16))){
var state_29549__$1 = state_29549;
var statearr_29622_29685 = state_29549__$1;
(statearr_29622_29685[(2)] = reload_dependents);

(statearr_29622_29685[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (38))){
var inst_29502 = (state_29549[(16)]);
var inst_29520 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29502);
var state_29549__$1 = state_29549;
var statearr_29623_29686 = state_29549__$1;
(statearr_29623_29686[(2)] = inst_29520);

(statearr_29623_29686[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (30))){
var state_29549__$1 = state_29549;
var statearr_29624_29687 = state_29549__$1;
(statearr_29624_29687[(2)] = null);

(statearr_29624_29687[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (10))){
var inst_29422 = (state_29549[(22)]);
var inst_29424 = cljs.core.chunked_seq_QMARK_.call(null,inst_29422);
var state_29549__$1 = state_29549;
if(inst_29424){
var statearr_29625_29688 = state_29549__$1;
(statearr_29625_29688[(1)] = (13));

} else {
var statearr_29626_29689 = state_29549__$1;
(statearr_29626_29689[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (18))){
var inst_29456 = (state_29549[(2)]);
var state_29549__$1 = state_29549;
if(cljs.core.truth_(inst_29456)){
var statearr_29627_29690 = state_29549__$1;
(statearr_29627_29690[(1)] = (19));

} else {
var statearr_29628_29691 = state_29549__$1;
(statearr_29628_29691[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (42))){
var state_29549__$1 = state_29549;
var statearr_29629_29692 = state_29549__$1;
(statearr_29629_29692[(2)] = null);

(statearr_29629_29692[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (37))){
var inst_29515 = (state_29549[(2)]);
var state_29549__$1 = state_29549;
var statearr_29630_29693 = state_29549__$1;
(statearr_29630_29693[(2)] = inst_29515);

(statearr_29630_29693[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (8))){
var inst_29422 = (state_29549[(22)]);
var inst_29409 = (state_29549[(10)]);
var inst_29422__$1 = cljs.core.seq.call(null,inst_29409);
var state_29549__$1 = (function (){var statearr_29631 = state_29549;
(statearr_29631[(22)] = inst_29422__$1);

return statearr_29631;
})();
if(inst_29422__$1){
var statearr_29632_29694 = state_29549__$1;
(statearr_29632_29694[(1)] = (10));

} else {
var statearr_29633_29695 = state_29549__$1;
(statearr_29633_29695[(1)] = (11));

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
});})(c__26941__auto__,map__29394,map__29394__$1,opts,before_jsload,on_jsload,reload_dependents,map__29395,map__29395__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26851__auto__,c__26941__auto__,map__29394,map__29394__$1,opts,before_jsload,on_jsload,reload_dependents,map__29395,map__29395__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto____0 = (function (){
var statearr_29634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29634[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto__);

(statearr_29634[(1)] = (1));

return statearr_29634;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto____1 = (function (state_29549){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_29549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e29635){if((e29635 instanceof Object)){
var ex__26855__auto__ = e29635;
var statearr_29636_29696 = state_29549;
(statearr_29636_29696[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29697 = state_29549;
state_29549 = G__29697;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto__ = function(state_29549){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto____1.call(this,state_29549);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26941__auto__,map__29394,map__29394__$1,opts,before_jsload,on_jsload,reload_dependents,map__29395,map__29395__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26943__auto__ = (function (){var statearr_29637 = f__26942__auto__.call(null);
(statearr_29637[(6)] = c__26941__auto__);

return statearr_29637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26943__auto__);
});})(c__26941__auto__,map__29394,map__29394__$1,opts,before_jsload,on_jsload,reload_dependents,map__29395,map__29395__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26941__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29700,link){
var map__29701 = p__29700;
var map__29701__$1 = ((((!((map__29701 == null)))?(((((map__29701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29701):map__29701);
var file = cljs.core.get.call(null,map__29701__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__29701,map__29701__$1,file){
return (function (p1__29698_SHARP_,p2__29699_SHARP_){
if(cljs.core._EQ_.call(null,p1__29698_SHARP_,p2__29699_SHARP_)){
return p1__29698_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__29701,map__29701__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29704){
var map__29705 = p__29704;
var map__29705__$1 = ((((!((map__29705 == null)))?(((((map__29705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29705):map__29705);
var match_length = cljs.core.get.call(null,map__29705__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29705__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29703_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29703_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29707_SHARP_,p2__29708_SHARP_){
return cljs.core.assoc.call(null,p1__29707_SHARP_,cljs.core.get.call(null,p2__29708_SHARP_,key),p2__29708_SHARP_);
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
var loaded_f_datas_29709 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29709);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29709);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29710,p__29711){
var map__29712 = p__29710;
var map__29712__$1 = ((((!((map__29712 == null)))?(((((map__29712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29712):map__29712);
var on_cssload = cljs.core.get.call(null,map__29712__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29713 = p__29711;
var map__29713__$1 = ((((!((map__29713 == null)))?(((((map__29713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29713):map__29713);
var files_msg = map__29713__$1;
var files = cljs.core.get.call(null,map__29713__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1542151520127
