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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29064_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29064_SHARP_));
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
var seq__29065 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29066 = null;
var count__29067 = (0);
var i__29068 = (0);
while(true){
if((i__29068 < count__29067)){
var n = cljs.core._nth.call(null,chunk__29066,i__29068);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29069 = seq__29065;
var G__29070 = chunk__29066;
var G__29071 = count__29067;
var G__29072 = (i__29068 + (1));
seq__29065 = G__29069;
chunk__29066 = G__29070;
count__29067 = G__29071;
i__29068 = G__29072;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29065);
if(temp__5457__auto__){
var seq__29065__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29065__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29065__$1);
var G__29073 = cljs.core.chunk_rest.call(null,seq__29065__$1);
var G__29074 = c__4319__auto__;
var G__29075 = cljs.core.count.call(null,c__4319__auto__);
var G__29076 = (0);
seq__29065 = G__29073;
chunk__29066 = G__29074;
count__29067 = G__29075;
i__29068 = G__29076;
continue;
} else {
var n = cljs.core.first.call(null,seq__29065__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29077 = cljs.core.next.call(null,seq__29065__$1);
var G__29078 = null;
var G__29079 = (0);
var G__29080 = (0);
seq__29065 = G__29077;
chunk__29066 = G__29078;
count__29067 = G__29079;
i__29068 = G__29080;
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
return cljs.core.some.call(null,(function (p__29081){
var vec__29082 = p__29081;
var _ = cljs.core.nth.call(null,vec__29082,(0),null);
var v = cljs.core.nth.call(null,vec__29082,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__29085){
var vec__29086 = p__29085;
var k = cljs.core.nth.call(null,vec__29086,(0),null);
var v = cljs.core.nth.call(null,vec__29086,(1),null);
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

var seq__29098_29106 = cljs.core.seq.call(null,deps);
var chunk__29099_29107 = null;
var count__29100_29108 = (0);
var i__29101_29109 = (0);
while(true){
if((i__29101_29109 < count__29100_29108)){
var dep_29110 = cljs.core._nth.call(null,chunk__29099_29107,i__29101_29109);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29110;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29110));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29110,(depth + (1)),state);
} else {
}


var G__29111 = seq__29098_29106;
var G__29112 = chunk__29099_29107;
var G__29113 = count__29100_29108;
var G__29114 = (i__29101_29109 + (1));
seq__29098_29106 = G__29111;
chunk__29099_29107 = G__29112;
count__29100_29108 = G__29113;
i__29101_29109 = G__29114;
continue;
} else {
var temp__5457__auto___29115 = cljs.core.seq.call(null,seq__29098_29106);
if(temp__5457__auto___29115){
var seq__29098_29116__$1 = temp__5457__auto___29115;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29098_29116__$1)){
var c__4319__auto___29117 = cljs.core.chunk_first.call(null,seq__29098_29116__$1);
var G__29118 = cljs.core.chunk_rest.call(null,seq__29098_29116__$1);
var G__29119 = c__4319__auto___29117;
var G__29120 = cljs.core.count.call(null,c__4319__auto___29117);
var G__29121 = (0);
seq__29098_29106 = G__29118;
chunk__29099_29107 = G__29119;
count__29100_29108 = G__29120;
i__29101_29109 = G__29121;
continue;
} else {
var dep_29122 = cljs.core.first.call(null,seq__29098_29116__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29122;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29122));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29122,(depth + (1)),state);
} else {
}


var G__29123 = cljs.core.next.call(null,seq__29098_29116__$1);
var G__29124 = null;
var G__29125 = (0);
var G__29126 = (0);
seq__29098_29106 = G__29123;
chunk__29099_29107 = G__29124;
count__29100_29108 = G__29125;
i__29101_29109 = G__29126;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29102){
var vec__29103 = p__29102;
var seq__29104 = cljs.core.seq.call(null,vec__29103);
var first__29105 = cljs.core.first.call(null,seq__29104);
var seq__29104__$1 = cljs.core.next.call(null,seq__29104);
var x = first__29105;
var xs = seq__29104__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29103,seq__29104,first__29105,seq__29104__$1,x,xs,get_deps__$1){
return (function (p1__29089_SHARP_){
return clojure.set.difference.call(null,p1__29089_SHARP_,x);
});})(vec__29103,seq__29104,first__29105,seq__29104__$1,x,xs,get_deps__$1))
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
var seq__29127 = cljs.core.seq.call(null,provides);
var chunk__29128 = null;
var count__29129 = (0);
var i__29130 = (0);
while(true){
if((i__29130 < count__29129)){
var prov = cljs.core._nth.call(null,chunk__29128,i__29130);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29131_29139 = cljs.core.seq.call(null,requires);
var chunk__29132_29140 = null;
var count__29133_29141 = (0);
var i__29134_29142 = (0);
while(true){
if((i__29134_29142 < count__29133_29141)){
var req_29143 = cljs.core._nth.call(null,chunk__29132_29140,i__29134_29142);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29143,prov);


var G__29144 = seq__29131_29139;
var G__29145 = chunk__29132_29140;
var G__29146 = count__29133_29141;
var G__29147 = (i__29134_29142 + (1));
seq__29131_29139 = G__29144;
chunk__29132_29140 = G__29145;
count__29133_29141 = G__29146;
i__29134_29142 = G__29147;
continue;
} else {
var temp__5457__auto___29148 = cljs.core.seq.call(null,seq__29131_29139);
if(temp__5457__auto___29148){
var seq__29131_29149__$1 = temp__5457__auto___29148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29131_29149__$1)){
var c__4319__auto___29150 = cljs.core.chunk_first.call(null,seq__29131_29149__$1);
var G__29151 = cljs.core.chunk_rest.call(null,seq__29131_29149__$1);
var G__29152 = c__4319__auto___29150;
var G__29153 = cljs.core.count.call(null,c__4319__auto___29150);
var G__29154 = (0);
seq__29131_29139 = G__29151;
chunk__29132_29140 = G__29152;
count__29133_29141 = G__29153;
i__29134_29142 = G__29154;
continue;
} else {
var req_29155 = cljs.core.first.call(null,seq__29131_29149__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29155,prov);


var G__29156 = cljs.core.next.call(null,seq__29131_29149__$1);
var G__29157 = null;
var G__29158 = (0);
var G__29159 = (0);
seq__29131_29139 = G__29156;
chunk__29132_29140 = G__29157;
count__29133_29141 = G__29158;
i__29134_29142 = G__29159;
continue;
}
} else {
}
}
break;
}


var G__29160 = seq__29127;
var G__29161 = chunk__29128;
var G__29162 = count__29129;
var G__29163 = (i__29130 + (1));
seq__29127 = G__29160;
chunk__29128 = G__29161;
count__29129 = G__29162;
i__29130 = G__29163;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29127);
if(temp__5457__auto__){
var seq__29127__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29127__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29127__$1);
var G__29164 = cljs.core.chunk_rest.call(null,seq__29127__$1);
var G__29165 = c__4319__auto__;
var G__29166 = cljs.core.count.call(null,c__4319__auto__);
var G__29167 = (0);
seq__29127 = G__29164;
chunk__29128 = G__29165;
count__29129 = G__29166;
i__29130 = G__29167;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29127__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29135_29168 = cljs.core.seq.call(null,requires);
var chunk__29136_29169 = null;
var count__29137_29170 = (0);
var i__29138_29171 = (0);
while(true){
if((i__29138_29171 < count__29137_29170)){
var req_29172 = cljs.core._nth.call(null,chunk__29136_29169,i__29138_29171);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29172,prov);


var G__29173 = seq__29135_29168;
var G__29174 = chunk__29136_29169;
var G__29175 = count__29137_29170;
var G__29176 = (i__29138_29171 + (1));
seq__29135_29168 = G__29173;
chunk__29136_29169 = G__29174;
count__29137_29170 = G__29175;
i__29138_29171 = G__29176;
continue;
} else {
var temp__5457__auto___29177__$1 = cljs.core.seq.call(null,seq__29135_29168);
if(temp__5457__auto___29177__$1){
var seq__29135_29178__$1 = temp__5457__auto___29177__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29135_29178__$1)){
var c__4319__auto___29179 = cljs.core.chunk_first.call(null,seq__29135_29178__$1);
var G__29180 = cljs.core.chunk_rest.call(null,seq__29135_29178__$1);
var G__29181 = c__4319__auto___29179;
var G__29182 = cljs.core.count.call(null,c__4319__auto___29179);
var G__29183 = (0);
seq__29135_29168 = G__29180;
chunk__29136_29169 = G__29181;
count__29137_29170 = G__29182;
i__29138_29171 = G__29183;
continue;
} else {
var req_29184 = cljs.core.first.call(null,seq__29135_29178__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29184,prov);


var G__29185 = cljs.core.next.call(null,seq__29135_29178__$1);
var G__29186 = null;
var G__29187 = (0);
var G__29188 = (0);
seq__29135_29168 = G__29185;
chunk__29136_29169 = G__29186;
count__29137_29170 = G__29187;
i__29138_29171 = G__29188;
continue;
}
} else {
}
}
break;
}


var G__29189 = cljs.core.next.call(null,seq__29127__$1);
var G__29190 = null;
var G__29191 = (0);
var G__29192 = (0);
seq__29127 = G__29189;
chunk__29128 = G__29190;
count__29129 = G__29191;
i__29130 = G__29192;
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
var seq__29193_29197 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29194_29198 = null;
var count__29195_29199 = (0);
var i__29196_29200 = (0);
while(true){
if((i__29196_29200 < count__29195_29199)){
var ns_29201 = cljs.core._nth.call(null,chunk__29194_29198,i__29196_29200);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29201);


var G__29202 = seq__29193_29197;
var G__29203 = chunk__29194_29198;
var G__29204 = count__29195_29199;
var G__29205 = (i__29196_29200 + (1));
seq__29193_29197 = G__29202;
chunk__29194_29198 = G__29203;
count__29195_29199 = G__29204;
i__29196_29200 = G__29205;
continue;
} else {
var temp__5457__auto___29206 = cljs.core.seq.call(null,seq__29193_29197);
if(temp__5457__auto___29206){
var seq__29193_29207__$1 = temp__5457__auto___29206;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29193_29207__$1)){
var c__4319__auto___29208 = cljs.core.chunk_first.call(null,seq__29193_29207__$1);
var G__29209 = cljs.core.chunk_rest.call(null,seq__29193_29207__$1);
var G__29210 = c__4319__auto___29208;
var G__29211 = cljs.core.count.call(null,c__4319__auto___29208);
var G__29212 = (0);
seq__29193_29197 = G__29209;
chunk__29194_29198 = G__29210;
count__29195_29199 = G__29211;
i__29196_29200 = G__29212;
continue;
} else {
var ns_29213 = cljs.core.first.call(null,seq__29193_29207__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29213);


var G__29214 = cljs.core.next.call(null,seq__29193_29207__$1);
var G__29215 = null;
var G__29216 = (0);
var G__29217 = (0);
seq__29193_29197 = G__29214;
chunk__29194_29198 = G__29215;
count__29195_29199 = G__29216;
i__29196_29200 = G__29217;
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
var G__29218__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29218 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29219__i = 0, G__29219__a = new Array(arguments.length -  0);
while (G__29219__i < G__29219__a.length) {G__29219__a[G__29219__i] = arguments[G__29219__i + 0]; ++G__29219__i;}
  args = new cljs.core.IndexedSeq(G__29219__a,0,null);
} 
return G__29218__delegate.call(this,args);};
G__29218.cljs$lang$maxFixedArity = 0;
G__29218.cljs$lang$applyTo = (function (arglist__29220){
var args = cljs.core.seq(arglist__29220);
return G__29218__delegate(args);
});
G__29218.cljs$core$IFn$_invoke$arity$variadic = G__29218__delegate;
return G__29218;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__29221_SHARP_,p2__29222_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29221_SHARP_)].join('')),p2__29222_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__29223_SHARP_,p2__29224_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29223_SHARP_)].join(''),p2__29224_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29225 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29225.addCallback(((function (G__29225){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29225))
);

G__29225.addErrback(((function (G__29225){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29225))
);

return G__29225;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29226){if((e29226 instanceof Error)){
var e = e29226;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29226;

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
}catch (e29227){if((e29227 instanceof Error)){
var e = e29227;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29227;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29228 = cljs.core._EQ_;
var expr__29229 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29228.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29229))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29228.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29229))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29228.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29229))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29228,expr__29229){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29228,expr__29229))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29231,callback){
var map__29232 = p__29231;
var map__29232__$1 = ((((!((map__29232 == null)))?(((((map__29232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29232):map__29232);
var file_msg = map__29232__$1;
var request_url = cljs.core.get.call(null,map__29232__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29232,map__29232__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29232,map__29232__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__26955__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26955__auto__){
return (function (){
var f__26956__auto__ = (function (){var switch__26865__auto__ = ((function (c__26955__auto__){
return (function (state_29270){
var state_val_29271 = (state_29270[(1)]);
if((state_val_29271 === (7))){
var inst_29266 = (state_29270[(2)]);
var state_29270__$1 = state_29270;
var statearr_29272_29298 = state_29270__$1;
(statearr_29272_29298[(2)] = inst_29266);

(statearr_29272_29298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (1))){
var state_29270__$1 = state_29270;
var statearr_29273_29299 = state_29270__$1;
(statearr_29273_29299[(2)] = null);

(statearr_29273_29299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (4))){
var inst_29236 = (state_29270[(7)]);
var inst_29236__$1 = (state_29270[(2)]);
var state_29270__$1 = (function (){var statearr_29274 = state_29270;
(statearr_29274[(7)] = inst_29236__$1);

return statearr_29274;
})();
if(cljs.core.truth_(inst_29236__$1)){
var statearr_29275_29300 = state_29270__$1;
(statearr_29275_29300[(1)] = (5));

} else {
var statearr_29276_29301 = state_29270__$1;
(statearr_29276_29301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (15))){
var inst_29249 = (state_29270[(8)]);
var inst_29251 = (state_29270[(9)]);
var inst_29253 = inst_29251.call(null,inst_29249);
var state_29270__$1 = state_29270;
var statearr_29277_29302 = state_29270__$1;
(statearr_29277_29302[(2)] = inst_29253);

(statearr_29277_29302[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (13))){
var inst_29260 = (state_29270[(2)]);
var state_29270__$1 = state_29270;
var statearr_29278_29303 = state_29270__$1;
(statearr_29278_29303[(2)] = inst_29260);

(statearr_29278_29303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (6))){
var state_29270__$1 = state_29270;
var statearr_29279_29304 = state_29270__$1;
(statearr_29279_29304[(2)] = null);

(statearr_29279_29304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (17))){
var inst_29257 = (state_29270[(2)]);
var state_29270__$1 = state_29270;
var statearr_29280_29305 = state_29270__$1;
(statearr_29280_29305[(2)] = inst_29257);

(statearr_29280_29305[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (3))){
var inst_29268 = (state_29270[(2)]);
var state_29270__$1 = state_29270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29270__$1,inst_29268);
} else {
if((state_val_29271 === (12))){
var state_29270__$1 = state_29270;
var statearr_29281_29306 = state_29270__$1;
(statearr_29281_29306[(2)] = null);

(statearr_29281_29306[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (2))){
var state_29270__$1 = state_29270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29270__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29271 === (11))){
var inst_29241 = (state_29270[(10)]);
var inst_29247 = figwheel.client.file_reloading.blocking_load.call(null,inst_29241);
var state_29270__$1 = state_29270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29270__$1,(14),inst_29247);
} else {
if((state_val_29271 === (9))){
var inst_29241 = (state_29270[(10)]);
var state_29270__$1 = state_29270;
if(cljs.core.truth_(inst_29241)){
var statearr_29282_29307 = state_29270__$1;
(statearr_29282_29307[(1)] = (11));

} else {
var statearr_29283_29308 = state_29270__$1;
(statearr_29283_29308[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (5))){
var inst_29242 = (state_29270[(11)]);
var inst_29236 = (state_29270[(7)]);
var inst_29241 = cljs.core.nth.call(null,inst_29236,(0),null);
var inst_29242__$1 = cljs.core.nth.call(null,inst_29236,(1),null);
var state_29270__$1 = (function (){var statearr_29284 = state_29270;
(statearr_29284[(11)] = inst_29242__$1);

(statearr_29284[(10)] = inst_29241);

return statearr_29284;
})();
if(cljs.core.truth_(inst_29242__$1)){
var statearr_29285_29309 = state_29270__$1;
(statearr_29285_29309[(1)] = (8));

} else {
var statearr_29286_29310 = state_29270__$1;
(statearr_29286_29310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (14))){
var inst_29251 = (state_29270[(9)]);
var inst_29241 = (state_29270[(10)]);
var inst_29249 = (state_29270[(2)]);
var inst_29250 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29251__$1 = cljs.core.get.call(null,inst_29250,inst_29241);
var state_29270__$1 = (function (){var statearr_29287 = state_29270;
(statearr_29287[(8)] = inst_29249);

(statearr_29287[(9)] = inst_29251__$1);

return statearr_29287;
})();
if(cljs.core.truth_(inst_29251__$1)){
var statearr_29288_29311 = state_29270__$1;
(statearr_29288_29311[(1)] = (15));

} else {
var statearr_29289_29312 = state_29270__$1;
(statearr_29289_29312[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (16))){
var inst_29249 = (state_29270[(8)]);
var inst_29255 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29249);
var state_29270__$1 = state_29270;
var statearr_29290_29313 = state_29270__$1;
(statearr_29290_29313[(2)] = inst_29255);

(statearr_29290_29313[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (10))){
var inst_29262 = (state_29270[(2)]);
var state_29270__$1 = (function (){var statearr_29291 = state_29270;
(statearr_29291[(12)] = inst_29262);

return statearr_29291;
})();
var statearr_29292_29314 = state_29270__$1;
(statearr_29292_29314[(2)] = null);

(statearr_29292_29314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (8))){
var inst_29242 = (state_29270[(11)]);
var inst_29244 = eval(inst_29242);
var state_29270__$1 = state_29270;
var statearr_29293_29315 = state_29270__$1;
(statearr_29293_29315[(2)] = inst_29244);

(statearr_29293_29315[(1)] = (10));


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
});})(c__26955__auto__))
;
return ((function (switch__26865__auto__,c__26955__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26866__auto__ = null;
var figwheel$client$file_reloading$state_machine__26866__auto____0 = (function (){
var statearr_29294 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29294[(0)] = figwheel$client$file_reloading$state_machine__26866__auto__);

(statearr_29294[(1)] = (1));

return statearr_29294;
});
var figwheel$client$file_reloading$state_machine__26866__auto____1 = (function (state_29270){
while(true){
var ret_value__26867__auto__ = (function (){try{while(true){
var result__26868__auto__ = switch__26865__auto__.call(null,state_29270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26868__auto__;
}
break;
}
}catch (e29295){if((e29295 instanceof Object)){
var ex__26869__auto__ = e29295;
var statearr_29296_29316 = state_29270;
(statearr_29296_29316[(5)] = ex__26869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29317 = state_29270;
state_29270 = G__29317;
continue;
} else {
return ret_value__26867__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26866__auto__ = function(state_29270){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26866__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26866__auto____1.call(this,state_29270);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26866__auto____0;
figwheel$client$file_reloading$state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26866__auto____1;
return figwheel$client$file_reloading$state_machine__26866__auto__;
})()
;})(switch__26865__auto__,c__26955__auto__))
})();
var state__26957__auto__ = (function (){var statearr_29297 = f__26956__auto__.call(null);
(statearr_29297[(6)] = c__26955__auto__);

return statearr_29297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26957__auto__);
});})(c__26955__auto__))
);

return c__26955__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29319 = arguments.length;
switch (G__29319) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29321,callback){
var map__29322 = p__29321;
var map__29322__$1 = ((((!((map__29322 == null)))?(((((map__29322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29322):map__29322);
var file_msg = map__29322__$1;
var namespace = cljs.core.get.call(null,map__29322__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29322,map__29322__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29322,map__29322__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29324){
var map__29325 = p__29324;
var map__29325__$1 = ((((!((map__29325 == null)))?(((((map__29325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29325):map__29325);
var file_msg = map__29325__$1;
var namespace = cljs.core.get.call(null,map__29325__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29327){
var map__29328 = p__29327;
var map__29328__$1 = ((((!((map__29328 == null)))?(((((map__29328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29328):map__29328);
var file_msg = map__29328__$1;
var namespace = cljs.core.get.call(null,map__29328__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29330,callback){
var map__29331 = p__29330;
var map__29331__$1 = ((((!((map__29331 == null)))?(((((map__29331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29331):map__29331);
var file_msg = map__29331__$1;
var request_url = cljs.core.get.call(null,map__29331__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29331__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__26955__auto___29381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26955__auto___29381,out){
return (function (){
var f__26956__auto__ = (function (){var switch__26865__auto__ = ((function (c__26955__auto___29381,out){
return (function (state_29366){
var state_val_29367 = (state_29366[(1)]);
if((state_val_29367 === (1))){
var inst_29340 = cljs.core.seq.call(null,files);
var inst_29341 = cljs.core.first.call(null,inst_29340);
var inst_29342 = cljs.core.next.call(null,inst_29340);
var inst_29343 = files;
var state_29366__$1 = (function (){var statearr_29368 = state_29366;
(statearr_29368[(7)] = inst_29341);

(statearr_29368[(8)] = inst_29343);

(statearr_29368[(9)] = inst_29342);

return statearr_29368;
})();
var statearr_29369_29382 = state_29366__$1;
(statearr_29369_29382[(2)] = null);

(statearr_29369_29382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29367 === (2))){
var inst_29343 = (state_29366[(8)]);
var inst_29349 = (state_29366[(10)]);
var inst_29348 = cljs.core.seq.call(null,inst_29343);
var inst_29349__$1 = cljs.core.first.call(null,inst_29348);
var inst_29350 = cljs.core.next.call(null,inst_29348);
var inst_29351 = (inst_29349__$1 == null);
var inst_29352 = cljs.core.not.call(null,inst_29351);
var state_29366__$1 = (function (){var statearr_29370 = state_29366;
(statearr_29370[(11)] = inst_29350);

(statearr_29370[(10)] = inst_29349__$1);

return statearr_29370;
})();
if(inst_29352){
var statearr_29371_29383 = state_29366__$1;
(statearr_29371_29383[(1)] = (4));

} else {
var statearr_29372_29384 = state_29366__$1;
(statearr_29372_29384[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29367 === (3))){
var inst_29364 = (state_29366[(2)]);
var state_29366__$1 = state_29366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29366__$1,inst_29364);
} else {
if((state_val_29367 === (4))){
var inst_29349 = (state_29366[(10)]);
var inst_29354 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29349);
var state_29366__$1 = state_29366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29366__$1,(7),inst_29354);
} else {
if((state_val_29367 === (5))){
var inst_29360 = cljs.core.async.close_BANG_.call(null,out);
var state_29366__$1 = state_29366;
var statearr_29373_29385 = state_29366__$1;
(statearr_29373_29385[(2)] = inst_29360);

(statearr_29373_29385[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29367 === (6))){
var inst_29362 = (state_29366[(2)]);
var state_29366__$1 = state_29366;
var statearr_29374_29386 = state_29366__$1;
(statearr_29374_29386[(2)] = inst_29362);

(statearr_29374_29386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29367 === (7))){
var inst_29350 = (state_29366[(11)]);
var inst_29356 = (state_29366[(2)]);
var inst_29357 = cljs.core.async.put_BANG_.call(null,out,inst_29356);
var inst_29343 = inst_29350;
var state_29366__$1 = (function (){var statearr_29375 = state_29366;
(statearr_29375[(12)] = inst_29357);

(statearr_29375[(8)] = inst_29343);

return statearr_29375;
})();
var statearr_29376_29387 = state_29366__$1;
(statearr_29376_29387[(2)] = null);

(statearr_29376_29387[(1)] = (2));


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
});})(c__26955__auto___29381,out))
;
return ((function (switch__26865__auto__,c__26955__auto___29381,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26866__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26866__auto____0 = (function (){
var statearr_29377 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29377[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26866__auto__);

(statearr_29377[(1)] = (1));

return statearr_29377;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26866__auto____1 = (function (state_29366){
while(true){
var ret_value__26867__auto__ = (function (){try{while(true){
var result__26868__auto__ = switch__26865__auto__.call(null,state_29366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26868__auto__;
}
break;
}
}catch (e29378){if((e29378 instanceof Object)){
var ex__26869__auto__ = e29378;
var statearr_29379_29388 = state_29366;
(statearr_29379_29388[(5)] = ex__26869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29389 = state_29366;
state_29366 = G__29389;
continue;
} else {
return ret_value__26867__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26866__auto__ = function(state_29366){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26866__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26866__auto____1.call(this,state_29366);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26866__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26866__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26866__auto__;
})()
;})(switch__26865__auto__,c__26955__auto___29381,out))
})();
var state__26957__auto__ = (function (){var statearr_29380 = f__26956__auto__.call(null);
(statearr_29380[(6)] = c__26955__auto___29381);

return statearr_29380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26957__auto__);
});})(c__26955__auto___29381,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29390,opts){
var map__29391 = p__29390;
var map__29391__$1 = ((((!((map__29391 == null)))?(((((map__29391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29391):map__29391);
var eval_body = cljs.core.get.call(null,map__29391__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29391__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e29393){var e = e29393;
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
return (function (p1__29394_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29394_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__29395){
var vec__29396 = p__29395;
var k = cljs.core.nth.call(null,vec__29396,(0),null);
var v = cljs.core.nth.call(null,vec__29396,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29399){
var vec__29400 = p__29399;
var k = cljs.core.nth.call(null,vec__29400,(0),null);
var v = cljs.core.nth.call(null,vec__29400,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29406,p__29407){
var map__29408 = p__29406;
var map__29408__$1 = ((((!((map__29408 == null)))?(((((map__29408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29408):map__29408);
var opts = map__29408__$1;
var before_jsload = cljs.core.get.call(null,map__29408__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29408__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29408__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29409 = p__29407;
var map__29409__$1 = ((((!((map__29409 == null)))?(((((map__29409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29409):map__29409);
var msg = map__29409__$1;
var files = cljs.core.get.call(null,map__29409__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29409__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29409__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26955__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26955__auto__,map__29408,map__29408__$1,opts,before_jsload,on_jsload,reload_dependents,map__29409,map__29409__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26956__auto__ = (function (){var switch__26865__auto__ = ((function (c__26955__auto__,map__29408,map__29408__$1,opts,before_jsload,on_jsload,reload_dependents,map__29409,map__29409__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29563){
var state_val_29564 = (state_29563[(1)]);
if((state_val_29564 === (7))){
var inst_29424 = (state_29563[(7)]);
var inst_29426 = (state_29563[(8)]);
var inst_29425 = (state_29563[(9)]);
var inst_29423 = (state_29563[(10)]);
var inst_29431 = cljs.core._nth.call(null,inst_29424,inst_29426);
var inst_29432 = figwheel.client.file_reloading.eval_body.call(null,inst_29431,opts);
var inst_29433 = (inst_29426 + (1));
var tmp29565 = inst_29424;
var tmp29566 = inst_29425;
var tmp29567 = inst_29423;
var inst_29423__$1 = tmp29567;
var inst_29424__$1 = tmp29565;
var inst_29425__$1 = tmp29566;
var inst_29426__$1 = inst_29433;
var state_29563__$1 = (function (){var statearr_29568 = state_29563;
(statearr_29568[(7)] = inst_29424__$1);

(statearr_29568[(8)] = inst_29426__$1);

(statearr_29568[(11)] = inst_29432);

(statearr_29568[(9)] = inst_29425__$1);

(statearr_29568[(10)] = inst_29423__$1);

return statearr_29568;
})();
var statearr_29569_29652 = state_29563__$1;
(statearr_29569_29652[(2)] = null);

(statearr_29569_29652[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (20))){
var inst_29466 = (state_29563[(12)]);
var inst_29474 = figwheel.client.file_reloading.sort_files.call(null,inst_29466);
var state_29563__$1 = state_29563;
var statearr_29570_29653 = state_29563__$1;
(statearr_29570_29653[(2)] = inst_29474);

(statearr_29570_29653[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (27))){
var state_29563__$1 = state_29563;
var statearr_29571_29654 = state_29563__$1;
(statearr_29571_29654[(2)] = null);

(statearr_29571_29654[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (1))){
var inst_29415 = (state_29563[(13)]);
var inst_29412 = before_jsload.call(null,files);
var inst_29413 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29414 = (function (){return ((function (inst_29415,inst_29412,inst_29413,state_val_29564,c__26955__auto__,map__29408,map__29408__$1,opts,before_jsload,on_jsload,reload_dependents,map__29409,map__29409__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29403_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29403_SHARP_);
});
;})(inst_29415,inst_29412,inst_29413,state_val_29564,c__26955__auto__,map__29408,map__29408__$1,opts,before_jsload,on_jsload,reload_dependents,map__29409,map__29409__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29415__$1 = cljs.core.filter.call(null,inst_29414,files);
var inst_29416 = cljs.core.not_empty.call(null,inst_29415__$1);
var state_29563__$1 = (function (){var statearr_29572 = state_29563;
(statearr_29572[(14)] = inst_29413);

(statearr_29572[(15)] = inst_29412);

(statearr_29572[(13)] = inst_29415__$1);

return statearr_29572;
})();
if(cljs.core.truth_(inst_29416)){
var statearr_29573_29655 = state_29563__$1;
(statearr_29573_29655[(1)] = (2));

} else {
var statearr_29574_29656 = state_29563__$1;
(statearr_29574_29656[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (24))){
var state_29563__$1 = state_29563;
var statearr_29575_29657 = state_29563__$1;
(statearr_29575_29657[(2)] = null);

(statearr_29575_29657[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (39))){
var inst_29516 = (state_29563[(16)]);
var state_29563__$1 = state_29563;
var statearr_29576_29658 = state_29563__$1;
(statearr_29576_29658[(2)] = inst_29516);

(statearr_29576_29658[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (46))){
var inst_29558 = (state_29563[(2)]);
var state_29563__$1 = state_29563;
var statearr_29577_29659 = state_29563__$1;
(statearr_29577_29659[(2)] = inst_29558);

(statearr_29577_29659[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (4))){
var inst_29460 = (state_29563[(2)]);
var inst_29461 = cljs.core.List.EMPTY;
var inst_29462 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29461);
var inst_29463 = (function (){return ((function (inst_29460,inst_29461,inst_29462,state_val_29564,c__26955__auto__,map__29408,map__29408__$1,opts,before_jsload,on_jsload,reload_dependents,map__29409,map__29409__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29404_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29404_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29404_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29404_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_29460,inst_29461,inst_29462,state_val_29564,c__26955__auto__,map__29408,map__29408__$1,opts,before_jsload,on_jsload,reload_dependents,map__29409,map__29409__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29464 = cljs.core.filter.call(null,inst_29463,files);
var inst_29465 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29466 = cljs.core.concat.call(null,inst_29464,inst_29465);
var state_29563__$1 = (function (){var statearr_29578 = state_29563;
(statearr_29578[(17)] = inst_29462);

(statearr_29578[(18)] = inst_29460);

(statearr_29578[(12)] = inst_29466);

return statearr_29578;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29579_29660 = state_29563__$1;
(statearr_29579_29660[(1)] = (16));

} else {
var statearr_29580_29661 = state_29563__$1;
(statearr_29580_29661[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (15))){
var inst_29450 = (state_29563[(2)]);
var state_29563__$1 = state_29563;
var statearr_29581_29662 = state_29563__$1;
(statearr_29581_29662[(2)] = inst_29450);

(statearr_29581_29662[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (21))){
var inst_29476 = (state_29563[(19)]);
var inst_29476__$1 = (state_29563[(2)]);
var inst_29477 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29476__$1);
var state_29563__$1 = (function (){var statearr_29582 = state_29563;
(statearr_29582[(19)] = inst_29476__$1);

return statearr_29582;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29563__$1,(22),inst_29477);
} else {
if((state_val_29564 === (31))){
var inst_29561 = (state_29563[(2)]);
var state_29563__$1 = state_29563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29563__$1,inst_29561);
} else {
if((state_val_29564 === (32))){
var inst_29516 = (state_29563[(16)]);
var inst_29521 = inst_29516.cljs$lang$protocol_mask$partition0$;
var inst_29522 = (inst_29521 & (64));
var inst_29523 = inst_29516.cljs$core$ISeq$;
var inst_29524 = (cljs.core.PROTOCOL_SENTINEL === inst_29523);
var inst_29525 = ((inst_29522) || (inst_29524));
var state_29563__$1 = state_29563;
if(cljs.core.truth_(inst_29525)){
var statearr_29583_29663 = state_29563__$1;
(statearr_29583_29663[(1)] = (35));

} else {
var statearr_29584_29664 = state_29563__$1;
(statearr_29584_29664[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (40))){
var inst_29538 = (state_29563[(20)]);
var inst_29537 = (state_29563[(2)]);
var inst_29538__$1 = cljs.core.get.call(null,inst_29537,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29539 = cljs.core.get.call(null,inst_29537,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29540 = cljs.core.not_empty.call(null,inst_29538__$1);
var state_29563__$1 = (function (){var statearr_29585 = state_29563;
(statearr_29585[(20)] = inst_29538__$1);

(statearr_29585[(21)] = inst_29539);

return statearr_29585;
})();
if(cljs.core.truth_(inst_29540)){
var statearr_29586_29665 = state_29563__$1;
(statearr_29586_29665[(1)] = (41));

} else {
var statearr_29587_29666 = state_29563__$1;
(statearr_29587_29666[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (33))){
var state_29563__$1 = state_29563;
var statearr_29588_29667 = state_29563__$1;
(statearr_29588_29667[(2)] = false);

(statearr_29588_29667[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (13))){
var inst_29436 = (state_29563[(22)]);
var inst_29440 = cljs.core.chunk_first.call(null,inst_29436);
var inst_29441 = cljs.core.chunk_rest.call(null,inst_29436);
var inst_29442 = cljs.core.count.call(null,inst_29440);
var inst_29423 = inst_29441;
var inst_29424 = inst_29440;
var inst_29425 = inst_29442;
var inst_29426 = (0);
var state_29563__$1 = (function (){var statearr_29589 = state_29563;
(statearr_29589[(7)] = inst_29424);

(statearr_29589[(8)] = inst_29426);

(statearr_29589[(9)] = inst_29425);

(statearr_29589[(10)] = inst_29423);

return statearr_29589;
})();
var statearr_29590_29668 = state_29563__$1;
(statearr_29590_29668[(2)] = null);

(statearr_29590_29668[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (22))){
var inst_29484 = (state_29563[(23)]);
var inst_29479 = (state_29563[(24)]);
var inst_29476 = (state_29563[(19)]);
var inst_29480 = (state_29563[(25)]);
var inst_29479__$1 = (state_29563[(2)]);
var inst_29480__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29479__$1);
var inst_29481 = (function (){var all_files = inst_29476;
var res_SINGLEQUOTE_ = inst_29479__$1;
var res = inst_29480__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29484,inst_29479,inst_29476,inst_29480,inst_29479__$1,inst_29480__$1,state_val_29564,c__26955__auto__,map__29408,map__29408__$1,opts,before_jsload,on_jsload,reload_dependents,map__29409,map__29409__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29405_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29405_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29484,inst_29479,inst_29476,inst_29480,inst_29479__$1,inst_29480__$1,state_val_29564,c__26955__auto__,map__29408,map__29408__$1,opts,before_jsload,on_jsload,reload_dependents,map__29409,map__29409__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29482 = cljs.core.filter.call(null,inst_29481,inst_29479__$1);
var inst_29483 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29484__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29483);
var inst_29485 = cljs.core.not_empty.call(null,inst_29484__$1);
var state_29563__$1 = (function (){var statearr_29591 = state_29563;
(statearr_29591[(23)] = inst_29484__$1);

(statearr_29591[(24)] = inst_29479__$1);

(statearr_29591[(26)] = inst_29482);

(statearr_29591[(25)] = inst_29480__$1);

return statearr_29591;
})();
if(cljs.core.truth_(inst_29485)){
var statearr_29592_29669 = state_29563__$1;
(statearr_29592_29669[(1)] = (23));

} else {
var statearr_29593_29670 = state_29563__$1;
(statearr_29593_29670[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (36))){
var state_29563__$1 = state_29563;
var statearr_29594_29671 = state_29563__$1;
(statearr_29594_29671[(2)] = false);

(statearr_29594_29671[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (41))){
var inst_29538 = (state_29563[(20)]);
var inst_29542 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29543 = cljs.core.map.call(null,inst_29542,inst_29538);
var inst_29544 = cljs.core.pr_str.call(null,inst_29543);
var inst_29545 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29544)].join('');
var inst_29546 = figwheel.client.utils.log.call(null,inst_29545);
var state_29563__$1 = state_29563;
var statearr_29595_29672 = state_29563__$1;
(statearr_29595_29672[(2)] = inst_29546);

(statearr_29595_29672[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (43))){
var inst_29539 = (state_29563[(21)]);
var inst_29549 = (state_29563[(2)]);
var inst_29550 = cljs.core.not_empty.call(null,inst_29539);
var state_29563__$1 = (function (){var statearr_29596 = state_29563;
(statearr_29596[(27)] = inst_29549);

return statearr_29596;
})();
if(cljs.core.truth_(inst_29550)){
var statearr_29597_29673 = state_29563__$1;
(statearr_29597_29673[(1)] = (44));

} else {
var statearr_29598_29674 = state_29563__$1;
(statearr_29598_29674[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (29))){
var inst_29484 = (state_29563[(23)]);
var inst_29479 = (state_29563[(24)]);
var inst_29476 = (state_29563[(19)]);
var inst_29482 = (state_29563[(26)]);
var inst_29480 = (state_29563[(25)]);
var inst_29516 = (state_29563[(16)]);
var inst_29512 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29515 = (function (){var all_files = inst_29476;
var res_SINGLEQUOTE_ = inst_29479;
var res = inst_29480;
var files_not_loaded = inst_29482;
var dependencies_that_loaded = inst_29484;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29484,inst_29479,inst_29476,inst_29482,inst_29480,inst_29516,inst_29512,state_val_29564,c__26955__auto__,map__29408,map__29408__$1,opts,before_jsload,on_jsload,reload_dependents,map__29409,map__29409__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29514){
var map__29599 = p__29514;
var map__29599__$1 = ((((!((map__29599 == null)))?(((((map__29599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29599):map__29599);
var namespace = cljs.core.get.call(null,map__29599__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29484,inst_29479,inst_29476,inst_29482,inst_29480,inst_29516,inst_29512,state_val_29564,c__26955__auto__,map__29408,map__29408__$1,opts,before_jsload,on_jsload,reload_dependents,map__29409,map__29409__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29516__$1 = cljs.core.group_by.call(null,inst_29515,inst_29482);
var inst_29518 = (inst_29516__$1 == null);
var inst_29519 = cljs.core.not.call(null,inst_29518);
var state_29563__$1 = (function (){var statearr_29601 = state_29563;
(statearr_29601[(28)] = inst_29512);

(statearr_29601[(16)] = inst_29516__$1);

return statearr_29601;
})();
if(inst_29519){
var statearr_29602_29675 = state_29563__$1;
(statearr_29602_29675[(1)] = (32));

} else {
var statearr_29603_29676 = state_29563__$1;
(statearr_29603_29676[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (44))){
var inst_29539 = (state_29563[(21)]);
var inst_29552 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29539);
var inst_29553 = cljs.core.pr_str.call(null,inst_29552);
var inst_29554 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29553)].join('');
var inst_29555 = figwheel.client.utils.log.call(null,inst_29554);
var state_29563__$1 = state_29563;
var statearr_29604_29677 = state_29563__$1;
(statearr_29604_29677[(2)] = inst_29555);

(statearr_29604_29677[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (6))){
var inst_29457 = (state_29563[(2)]);
var state_29563__$1 = state_29563;
var statearr_29605_29678 = state_29563__$1;
(statearr_29605_29678[(2)] = inst_29457);

(statearr_29605_29678[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (28))){
var inst_29482 = (state_29563[(26)]);
var inst_29509 = (state_29563[(2)]);
var inst_29510 = cljs.core.not_empty.call(null,inst_29482);
var state_29563__$1 = (function (){var statearr_29606 = state_29563;
(statearr_29606[(29)] = inst_29509);

return statearr_29606;
})();
if(cljs.core.truth_(inst_29510)){
var statearr_29607_29679 = state_29563__$1;
(statearr_29607_29679[(1)] = (29));

} else {
var statearr_29608_29680 = state_29563__$1;
(statearr_29608_29680[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (25))){
var inst_29480 = (state_29563[(25)]);
var inst_29496 = (state_29563[(2)]);
var inst_29497 = cljs.core.not_empty.call(null,inst_29480);
var state_29563__$1 = (function (){var statearr_29609 = state_29563;
(statearr_29609[(30)] = inst_29496);

return statearr_29609;
})();
if(cljs.core.truth_(inst_29497)){
var statearr_29610_29681 = state_29563__$1;
(statearr_29610_29681[(1)] = (26));

} else {
var statearr_29611_29682 = state_29563__$1;
(statearr_29611_29682[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (34))){
var inst_29532 = (state_29563[(2)]);
var state_29563__$1 = state_29563;
if(cljs.core.truth_(inst_29532)){
var statearr_29612_29683 = state_29563__$1;
(statearr_29612_29683[(1)] = (38));

} else {
var statearr_29613_29684 = state_29563__$1;
(statearr_29613_29684[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (17))){
var state_29563__$1 = state_29563;
var statearr_29614_29685 = state_29563__$1;
(statearr_29614_29685[(2)] = recompile_dependents);

(statearr_29614_29685[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (3))){
var state_29563__$1 = state_29563;
var statearr_29615_29686 = state_29563__$1;
(statearr_29615_29686[(2)] = null);

(statearr_29615_29686[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (12))){
var inst_29453 = (state_29563[(2)]);
var state_29563__$1 = state_29563;
var statearr_29616_29687 = state_29563__$1;
(statearr_29616_29687[(2)] = inst_29453);

(statearr_29616_29687[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (2))){
var inst_29415 = (state_29563[(13)]);
var inst_29422 = cljs.core.seq.call(null,inst_29415);
var inst_29423 = inst_29422;
var inst_29424 = null;
var inst_29425 = (0);
var inst_29426 = (0);
var state_29563__$1 = (function (){var statearr_29617 = state_29563;
(statearr_29617[(7)] = inst_29424);

(statearr_29617[(8)] = inst_29426);

(statearr_29617[(9)] = inst_29425);

(statearr_29617[(10)] = inst_29423);

return statearr_29617;
})();
var statearr_29618_29688 = state_29563__$1;
(statearr_29618_29688[(2)] = null);

(statearr_29618_29688[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (23))){
var inst_29484 = (state_29563[(23)]);
var inst_29479 = (state_29563[(24)]);
var inst_29476 = (state_29563[(19)]);
var inst_29482 = (state_29563[(26)]);
var inst_29480 = (state_29563[(25)]);
var inst_29487 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29489 = (function (){var all_files = inst_29476;
var res_SINGLEQUOTE_ = inst_29479;
var res = inst_29480;
var files_not_loaded = inst_29482;
var dependencies_that_loaded = inst_29484;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29484,inst_29479,inst_29476,inst_29482,inst_29480,inst_29487,state_val_29564,c__26955__auto__,map__29408,map__29408__$1,opts,before_jsload,on_jsload,reload_dependents,map__29409,map__29409__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29488){
var map__29619 = p__29488;
var map__29619__$1 = ((((!((map__29619 == null)))?(((((map__29619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29619):map__29619);
var request_url = cljs.core.get.call(null,map__29619__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29484,inst_29479,inst_29476,inst_29482,inst_29480,inst_29487,state_val_29564,c__26955__auto__,map__29408,map__29408__$1,opts,before_jsload,on_jsload,reload_dependents,map__29409,map__29409__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29490 = cljs.core.reverse.call(null,inst_29484);
var inst_29491 = cljs.core.map.call(null,inst_29489,inst_29490);
var inst_29492 = cljs.core.pr_str.call(null,inst_29491);
var inst_29493 = figwheel.client.utils.log.call(null,inst_29492);
var state_29563__$1 = (function (){var statearr_29621 = state_29563;
(statearr_29621[(31)] = inst_29487);

return statearr_29621;
})();
var statearr_29622_29689 = state_29563__$1;
(statearr_29622_29689[(2)] = inst_29493);

(statearr_29622_29689[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (35))){
var state_29563__$1 = state_29563;
var statearr_29623_29690 = state_29563__$1;
(statearr_29623_29690[(2)] = true);

(statearr_29623_29690[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (19))){
var inst_29466 = (state_29563[(12)]);
var inst_29472 = figwheel.client.file_reloading.expand_files.call(null,inst_29466);
var state_29563__$1 = state_29563;
var statearr_29624_29691 = state_29563__$1;
(statearr_29624_29691[(2)] = inst_29472);

(statearr_29624_29691[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (11))){
var state_29563__$1 = state_29563;
var statearr_29625_29692 = state_29563__$1;
(statearr_29625_29692[(2)] = null);

(statearr_29625_29692[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (9))){
var inst_29455 = (state_29563[(2)]);
var state_29563__$1 = state_29563;
var statearr_29626_29693 = state_29563__$1;
(statearr_29626_29693[(2)] = inst_29455);

(statearr_29626_29693[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (5))){
var inst_29426 = (state_29563[(8)]);
var inst_29425 = (state_29563[(9)]);
var inst_29428 = (inst_29426 < inst_29425);
var inst_29429 = inst_29428;
var state_29563__$1 = state_29563;
if(cljs.core.truth_(inst_29429)){
var statearr_29627_29694 = state_29563__$1;
(statearr_29627_29694[(1)] = (7));

} else {
var statearr_29628_29695 = state_29563__$1;
(statearr_29628_29695[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (14))){
var inst_29436 = (state_29563[(22)]);
var inst_29445 = cljs.core.first.call(null,inst_29436);
var inst_29446 = figwheel.client.file_reloading.eval_body.call(null,inst_29445,opts);
var inst_29447 = cljs.core.next.call(null,inst_29436);
var inst_29423 = inst_29447;
var inst_29424 = null;
var inst_29425 = (0);
var inst_29426 = (0);
var state_29563__$1 = (function (){var statearr_29629 = state_29563;
(statearr_29629[(7)] = inst_29424);

(statearr_29629[(32)] = inst_29446);

(statearr_29629[(8)] = inst_29426);

(statearr_29629[(9)] = inst_29425);

(statearr_29629[(10)] = inst_29423);

return statearr_29629;
})();
var statearr_29630_29696 = state_29563__$1;
(statearr_29630_29696[(2)] = null);

(statearr_29630_29696[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (45))){
var state_29563__$1 = state_29563;
var statearr_29631_29697 = state_29563__$1;
(statearr_29631_29697[(2)] = null);

(statearr_29631_29697[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (26))){
var inst_29484 = (state_29563[(23)]);
var inst_29479 = (state_29563[(24)]);
var inst_29476 = (state_29563[(19)]);
var inst_29482 = (state_29563[(26)]);
var inst_29480 = (state_29563[(25)]);
var inst_29499 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29501 = (function (){var all_files = inst_29476;
var res_SINGLEQUOTE_ = inst_29479;
var res = inst_29480;
var files_not_loaded = inst_29482;
var dependencies_that_loaded = inst_29484;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29484,inst_29479,inst_29476,inst_29482,inst_29480,inst_29499,state_val_29564,c__26955__auto__,map__29408,map__29408__$1,opts,before_jsload,on_jsload,reload_dependents,map__29409,map__29409__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29500){
var map__29632 = p__29500;
var map__29632__$1 = ((((!((map__29632 == null)))?(((((map__29632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29632):map__29632);
var namespace = cljs.core.get.call(null,map__29632__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29632__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29484,inst_29479,inst_29476,inst_29482,inst_29480,inst_29499,state_val_29564,c__26955__auto__,map__29408,map__29408__$1,opts,before_jsload,on_jsload,reload_dependents,map__29409,map__29409__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29502 = cljs.core.map.call(null,inst_29501,inst_29480);
var inst_29503 = cljs.core.pr_str.call(null,inst_29502);
var inst_29504 = figwheel.client.utils.log.call(null,inst_29503);
var inst_29505 = (function (){var all_files = inst_29476;
var res_SINGLEQUOTE_ = inst_29479;
var res = inst_29480;
var files_not_loaded = inst_29482;
var dependencies_that_loaded = inst_29484;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29484,inst_29479,inst_29476,inst_29482,inst_29480,inst_29499,inst_29501,inst_29502,inst_29503,inst_29504,state_val_29564,c__26955__auto__,map__29408,map__29408__$1,opts,before_jsload,on_jsload,reload_dependents,map__29409,map__29409__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29484,inst_29479,inst_29476,inst_29482,inst_29480,inst_29499,inst_29501,inst_29502,inst_29503,inst_29504,state_val_29564,c__26955__auto__,map__29408,map__29408__$1,opts,before_jsload,on_jsload,reload_dependents,map__29409,map__29409__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29506 = setTimeout(inst_29505,(10));
var state_29563__$1 = (function (){var statearr_29634 = state_29563;
(statearr_29634[(33)] = inst_29504);

(statearr_29634[(34)] = inst_29499);

return statearr_29634;
})();
var statearr_29635_29698 = state_29563__$1;
(statearr_29635_29698[(2)] = inst_29506);

(statearr_29635_29698[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (16))){
var state_29563__$1 = state_29563;
var statearr_29636_29699 = state_29563__$1;
(statearr_29636_29699[(2)] = reload_dependents);

(statearr_29636_29699[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (38))){
var inst_29516 = (state_29563[(16)]);
var inst_29534 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29516);
var state_29563__$1 = state_29563;
var statearr_29637_29700 = state_29563__$1;
(statearr_29637_29700[(2)] = inst_29534);

(statearr_29637_29700[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (30))){
var state_29563__$1 = state_29563;
var statearr_29638_29701 = state_29563__$1;
(statearr_29638_29701[(2)] = null);

(statearr_29638_29701[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (10))){
var inst_29436 = (state_29563[(22)]);
var inst_29438 = cljs.core.chunked_seq_QMARK_.call(null,inst_29436);
var state_29563__$1 = state_29563;
if(inst_29438){
var statearr_29639_29702 = state_29563__$1;
(statearr_29639_29702[(1)] = (13));

} else {
var statearr_29640_29703 = state_29563__$1;
(statearr_29640_29703[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (18))){
var inst_29470 = (state_29563[(2)]);
var state_29563__$1 = state_29563;
if(cljs.core.truth_(inst_29470)){
var statearr_29641_29704 = state_29563__$1;
(statearr_29641_29704[(1)] = (19));

} else {
var statearr_29642_29705 = state_29563__$1;
(statearr_29642_29705[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (42))){
var state_29563__$1 = state_29563;
var statearr_29643_29706 = state_29563__$1;
(statearr_29643_29706[(2)] = null);

(statearr_29643_29706[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (37))){
var inst_29529 = (state_29563[(2)]);
var state_29563__$1 = state_29563;
var statearr_29644_29707 = state_29563__$1;
(statearr_29644_29707[(2)] = inst_29529);

(statearr_29644_29707[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (8))){
var inst_29436 = (state_29563[(22)]);
var inst_29423 = (state_29563[(10)]);
var inst_29436__$1 = cljs.core.seq.call(null,inst_29423);
var state_29563__$1 = (function (){var statearr_29645 = state_29563;
(statearr_29645[(22)] = inst_29436__$1);

return statearr_29645;
})();
if(inst_29436__$1){
var statearr_29646_29708 = state_29563__$1;
(statearr_29646_29708[(1)] = (10));

} else {
var statearr_29647_29709 = state_29563__$1;
(statearr_29647_29709[(1)] = (11));

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
});})(c__26955__auto__,map__29408,map__29408__$1,opts,before_jsload,on_jsload,reload_dependents,map__29409,map__29409__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26865__auto__,c__26955__auto__,map__29408,map__29408__$1,opts,before_jsload,on_jsload,reload_dependents,map__29409,map__29409__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26866__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26866__auto____0 = (function (){
var statearr_29648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29648[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26866__auto__);

(statearr_29648[(1)] = (1));

return statearr_29648;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26866__auto____1 = (function (state_29563){
while(true){
var ret_value__26867__auto__ = (function (){try{while(true){
var result__26868__auto__ = switch__26865__auto__.call(null,state_29563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26868__auto__;
}
break;
}
}catch (e29649){if((e29649 instanceof Object)){
var ex__26869__auto__ = e29649;
var statearr_29650_29710 = state_29563;
(statearr_29650_29710[(5)] = ex__26869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29711 = state_29563;
state_29563 = G__29711;
continue;
} else {
return ret_value__26867__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26866__auto__ = function(state_29563){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26866__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26866__auto____1.call(this,state_29563);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26866__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26866__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26866__auto__;
})()
;})(switch__26865__auto__,c__26955__auto__,map__29408,map__29408__$1,opts,before_jsload,on_jsload,reload_dependents,map__29409,map__29409__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26957__auto__ = (function (){var statearr_29651 = f__26956__auto__.call(null);
(statearr_29651[(6)] = c__26955__auto__);

return statearr_29651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26957__auto__);
});})(c__26955__auto__,map__29408,map__29408__$1,opts,before_jsload,on_jsload,reload_dependents,map__29409,map__29409__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26955__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29714,link){
var map__29715 = p__29714;
var map__29715__$1 = ((((!((map__29715 == null)))?(((((map__29715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29715):map__29715);
var file = cljs.core.get.call(null,map__29715__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__29715,map__29715__$1,file){
return (function (p1__29712_SHARP_,p2__29713_SHARP_){
if(cljs.core._EQ_.call(null,p1__29712_SHARP_,p2__29713_SHARP_)){
return p1__29712_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__29715,map__29715__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29718){
var map__29719 = p__29718;
var map__29719__$1 = ((((!((map__29719 == null)))?(((((map__29719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29719):map__29719);
var match_length = cljs.core.get.call(null,map__29719__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29719__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29717_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29717_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29721_SHARP_,p2__29722_SHARP_){
return cljs.core.assoc.call(null,p1__29721_SHARP_,cljs.core.get.call(null,p2__29722_SHARP_,key),p2__29722_SHARP_);
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
var loaded_f_datas_29723 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29723);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29723);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29724,p__29725){
var map__29726 = p__29724;
var map__29726__$1 = ((((!((map__29726 == null)))?(((((map__29726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29726):map__29726);
var on_cssload = cljs.core.get.call(null,map__29726__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29727 = p__29725;
var map__29727__$1 = ((((!((map__29727 == null)))?(((((map__29727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29727):map__29727);
var files_msg = map__29727__$1;
var files = cljs.core.get.call(null,map__29727__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1542636591804
