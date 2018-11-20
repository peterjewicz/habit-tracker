// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e30815){if((e30815 instanceof Error)){
var e = e30815;
return "Error: Unable to stringify";
} else {
throw e30815;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30818 = arguments.length;
switch (G__30818) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30816_SHARP_){
if(typeof p1__30816_SHARP_ === 'string'){
return p1__30816_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30816_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30821 = arguments.length;
var i__4500__auto___30822 = (0);
while(true){
if((i__4500__auto___30822 < len__4499__auto___30821)){
args__4502__auto__.push((arguments[i__4500__auto___30822]));

var G__30823 = (i__4500__auto___30822 + (1));
i__4500__auto___30822 = G__30823;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30820){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30820));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30825 = arguments.length;
var i__4500__auto___30826 = (0);
while(true){
if((i__4500__auto___30826 < len__4499__auto___30825)){
args__4502__auto__.push((arguments[i__4500__auto___30826]));

var G__30827 = (i__4500__auto___30826 + (1));
i__4500__auto___30826 = G__30827;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30824){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30824));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30828){
var map__30829 = p__30828;
var map__30829__$1 = ((((!((map__30829 == null)))?(((((map__30829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30829):map__30829);
var message = cljs.core.get.call(null,map__30829__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30829__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26955__auto___30908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26955__auto___30908,ch){
return (function (){
var f__26956__auto__ = (function (){var switch__26865__auto__ = ((function (c__26955__auto___30908,ch){
return (function (state_30880){
var state_val_30881 = (state_30880[(1)]);
if((state_val_30881 === (7))){
var inst_30876 = (state_30880[(2)]);
var state_30880__$1 = state_30880;
var statearr_30882_30909 = state_30880__$1;
(statearr_30882_30909[(2)] = inst_30876);

(statearr_30882_30909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (1))){
var state_30880__$1 = state_30880;
var statearr_30883_30910 = state_30880__$1;
(statearr_30883_30910[(2)] = null);

(statearr_30883_30910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (4))){
var inst_30833 = (state_30880[(7)]);
var inst_30833__$1 = (state_30880[(2)]);
var state_30880__$1 = (function (){var statearr_30884 = state_30880;
(statearr_30884[(7)] = inst_30833__$1);

return statearr_30884;
})();
if(cljs.core.truth_(inst_30833__$1)){
var statearr_30885_30911 = state_30880__$1;
(statearr_30885_30911[(1)] = (5));

} else {
var statearr_30886_30912 = state_30880__$1;
(statearr_30886_30912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (15))){
var inst_30840 = (state_30880[(8)]);
var inst_30855 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30840);
var inst_30856 = cljs.core.first.call(null,inst_30855);
var inst_30857 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30856);
var inst_30858 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30857)].join('');
var inst_30859 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30858);
var state_30880__$1 = state_30880;
var statearr_30887_30913 = state_30880__$1;
(statearr_30887_30913[(2)] = inst_30859);

(statearr_30887_30913[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (13))){
var inst_30864 = (state_30880[(2)]);
var state_30880__$1 = state_30880;
var statearr_30888_30914 = state_30880__$1;
(statearr_30888_30914[(2)] = inst_30864);

(statearr_30888_30914[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (6))){
var state_30880__$1 = state_30880;
var statearr_30889_30915 = state_30880__$1;
(statearr_30889_30915[(2)] = null);

(statearr_30889_30915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (17))){
var inst_30862 = (state_30880[(2)]);
var state_30880__$1 = state_30880;
var statearr_30890_30916 = state_30880__$1;
(statearr_30890_30916[(2)] = inst_30862);

(statearr_30890_30916[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (3))){
var inst_30878 = (state_30880[(2)]);
var state_30880__$1 = state_30880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30880__$1,inst_30878);
} else {
if((state_val_30881 === (12))){
var inst_30839 = (state_30880[(9)]);
var inst_30853 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30839,opts);
var state_30880__$1 = state_30880;
if(cljs.core.truth_(inst_30853)){
var statearr_30891_30917 = state_30880__$1;
(statearr_30891_30917[(1)] = (15));

} else {
var statearr_30892_30918 = state_30880__$1;
(statearr_30892_30918[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (2))){
var state_30880__$1 = state_30880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30880__$1,(4),ch);
} else {
if((state_val_30881 === (11))){
var inst_30840 = (state_30880[(8)]);
var inst_30845 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30846 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30840);
var inst_30847 = cljs.core.async.timeout.call(null,(1000));
var inst_30848 = [inst_30846,inst_30847];
var inst_30849 = (new cljs.core.PersistentVector(null,2,(5),inst_30845,inst_30848,null));
var state_30880__$1 = state_30880;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30880__$1,(14),inst_30849);
} else {
if((state_val_30881 === (9))){
var inst_30840 = (state_30880[(8)]);
var inst_30866 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30867 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30840);
var inst_30868 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30867);
var inst_30869 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30868)].join('');
var inst_30870 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30869);
var state_30880__$1 = (function (){var statearr_30893 = state_30880;
(statearr_30893[(10)] = inst_30866);

return statearr_30893;
})();
var statearr_30894_30919 = state_30880__$1;
(statearr_30894_30919[(2)] = inst_30870);

(statearr_30894_30919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (5))){
var inst_30833 = (state_30880[(7)]);
var inst_30835 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30836 = (new cljs.core.PersistentArrayMap(null,2,inst_30835,null));
var inst_30837 = (new cljs.core.PersistentHashSet(null,inst_30836,null));
var inst_30838 = figwheel.client.focus_msgs.call(null,inst_30837,inst_30833);
var inst_30839 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30838);
var inst_30840 = cljs.core.first.call(null,inst_30838);
var inst_30841 = figwheel.client.autoload_QMARK_.call(null);
var state_30880__$1 = (function (){var statearr_30895 = state_30880;
(statearr_30895[(8)] = inst_30840);

(statearr_30895[(9)] = inst_30839);

return statearr_30895;
})();
if(cljs.core.truth_(inst_30841)){
var statearr_30896_30920 = state_30880__$1;
(statearr_30896_30920[(1)] = (8));

} else {
var statearr_30897_30921 = state_30880__$1;
(statearr_30897_30921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (14))){
var inst_30851 = (state_30880[(2)]);
var state_30880__$1 = state_30880;
var statearr_30898_30922 = state_30880__$1;
(statearr_30898_30922[(2)] = inst_30851);

(statearr_30898_30922[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (16))){
var state_30880__$1 = state_30880;
var statearr_30899_30923 = state_30880__$1;
(statearr_30899_30923[(2)] = null);

(statearr_30899_30923[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (10))){
var inst_30872 = (state_30880[(2)]);
var state_30880__$1 = (function (){var statearr_30900 = state_30880;
(statearr_30900[(11)] = inst_30872);

return statearr_30900;
})();
var statearr_30901_30924 = state_30880__$1;
(statearr_30901_30924[(2)] = null);

(statearr_30901_30924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (8))){
var inst_30839 = (state_30880[(9)]);
var inst_30843 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30839,opts);
var state_30880__$1 = state_30880;
if(cljs.core.truth_(inst_30843)){
var statearr_30902_30925 = state_30880__$1;
(statearr_30902_30925[(1)] = (11));

} else {
var statearr_30903_30926 = state_30880__$1;
(statearr_30903_30926[(1)] = (12));

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
});})(c__26955__auto___30908,ch))
;
return ((function (switch__26865__auto__,c__26955__auto___30908,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26866__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26866__auto____0 = (function (){
var statearr_30904 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30904[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26866__auto__);

(statearr_30904[(1)] = (1));

return statearr_30904;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26866__auto____1 = (function (state_30880){
while(true){
var ret_value__26867__auto__ = (function (){try{while(true){
var result__26868__auto__ = switch__26865__auto__.call(null,state_30880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26868__auto__;
}
break;
}
}catch (e30905){if((e30905 instanceof Object)){
var ex__26869__auto__ = e30905;
var statearr_30906_30927 = state_30880;
(statearr_30906_30927[(5)] = ex__26869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30928 = state_30880;
state_30880 = G__30928;
continue;
} else {
return ret_value__26867__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26866__auto__ = function(state_30880){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26866__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26866__auto____1.call(this,state_30880);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26866__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26866__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26866__auto__;
})()
;})(switch__26865__auto__,c__26955__auto___30908,ch))
})();
var state__26957__auto__ = (function (){var statearr_30907 = f__26956__auto__.call(null);
(statearr_30907[(6)] = c__26955__auto___30908);

return statearr_30907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26957__auto__);
});})(c__26955__auto___30908,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30929_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30929_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30933 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30933){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_30931 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_30932 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_30931,_STAR_print_fn_STAR_30932,sb,base_path_30933){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_30931,_STAR_print_fn_STAR_30932,sb,base_path_30933))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30932;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30931;
}}catch (e30930){if((e30930 instanceof Error)){
var e = e30930;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30933], null));
} else {
var e = e30930;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30933))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30934){
var map__30935 = p__30934;
var map__30935__$1 = ((((!((map__30935 == null)))?(((((map__30935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30935):map__30935);
var opts = map__30935__$1;
var build_id = cljs.core.get.call(null,map__30935__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30935,map__30935__$1,opts,build_id){
return (function (p__30937){
var vec__30938 = p__30937;
var seq__30939 = cljs.core.seq.call(null,vec__30938);
var first__30940 = cljs.core.first.call(null,seq__30939);
var seq__30939__$1 = cljs.core.next.call(null,seq__30939);
var map__30941 = first__30940;
var map__30941__$1 = ((((!((map__30941 == null)))?(((((map__30941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30941):map__30941);
var msg = map__30941__$1;
var msg_name = cljs.core.get.call(null,map__30941__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30939__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30938,seq__30939,first__30940,seq__30939__$1,map__30941,map__30941__$1,msg,msg_name,_,map__30935,map__30935__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30938,seq__30939,first__30940,seq__30939__$1,map__30941,map__30941__$1,msg,msg_name,_,map__30935,map__30935__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30935,map__30935__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30943){
var vec__30944 = p__30943;
var seq__30945 = cljs.core.seq.call(null,vec__30944);
var first__30946 = cljs.core.first.call(null,seq__30945);
var seq__30945__$1 = cljs.core.next.call(null,seq__30945);
var map__30947 = first__30946;
var map__30947__$1 = ((((!((map__30947 == null)))?(((((map__30947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30947):map__30947);
var msg = map__30947__$1;
var msg_name = cljs.core.get.call(null,map__30947__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30945__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30949){
var map__30950 = p__30949;
var map__30950__$1 = ((((!((map__30950 == null)))?(((((map__30950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30950):map__30950);
var on_compile_warning = cljs.core.get.call(null,map__30950__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30950__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30950,map__30950__$1,on_compile_warning,on_compile_fail){
return (function (p__30952){
var vec__30953 = p__30952;
var seq__30954 = cljs.core.seq.call(null,vec__30953);
var first__30955 = cljs.core.first.call(null,seq__30954);
var seq__30954__$1 = cljs.core.next.call(null,seq__30954);
var map__30956 = first__30955;
var map__30956__$1 = ((((!((map__30956 == null)))?(((((map__30956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30956):map__30956);
var msg = map__30956__$1;
var msg_name = cljs.core.get.call(null,map__30956__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30954__$1;
var pred__30958 = cljs.core._EQ_;
var expr__30959 = msg_name;
if(cljs.core.truth_(pred__30958.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30959))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30958.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30959))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30950,map__30950__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26955__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26955__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26956__auto__ = (function (){var switch__26865__auto__ = ((function (c__26955__auto__,msg_hist,msg_names,msg){
return (function (state_31048){
var state_val_31049 = (state_31048[(1)]);
if((state_val_31049 === (7))){
var inst_30968 = (state_31048[(2)]);
var state_31048__$1 = state_31048;
if(cljs.core.truth_(inst_30968)){
var statearr_31050_31097 = state_31048__$1;
(statearr_31050_31097[(1)] = (8));

} else {
var statearr_31051_31098 = state_31048__$1;
(statearr_31051_31098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (20))){
var inst_31042 = (state_31048[(2)]);
var state_31048__$1 = state_31048;
var statearr_31052_31099 = state_31048__$1;
(statearr_31052_31099[(2)] = inst_31042);

(statearr_31052_31099[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (27))){
var inst_31038 = (state_31048[(2)]);
var state_31048__$1 = state_31048;
var statearr_31053_31100 = state_31048__$1;
(statearr_31053_31100[(2)] = inst_31038);

(statearr_31053_31100[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (1))){
var inst_30961 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31048__$1 = state_31048;
if(cljs.core.truth_(inst_30961)){
var statearr_31054_31101 = state_31048__$1;
(statearr_31054_31101[(1)] = (2));

} else {
var statearr_31055_31102 = state_31048__$1;
(statearr_31055_31102[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (24))){
var inst_31040 = (state_31048[(2)]);
var state_31048__$1 = state_31048;
var statearr_31056_31103 = state_31048__$1;
(statearr_31056_31103[(2)] = inst_31040);

(statearr_31056_31103[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (4))){
var inst_31046 = (state_31048[(2)]);
var state_31048__$1 = state_31048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31048__$1,inst_31046);
} else {
if((state_val_31049 === (15))){
var inst_31044 = (state_31048[(2)]);
var state_31048__$1 = state_31048;
var statearr_31057_31104 = state_31048__$1;
(statearr_31057_31104[(2)] = inst_31044);

(statearr_31057_31104[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (21))){
var inst_30997 = (state_31048[(2)]);
var inst_30998 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30999 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30998);
var state_31048__$1 = (function (){var statearr_31058 = state_31048;
(statearr_31058[(7)] = inst_30997);

return statearr_31058;
})();
var statearr_31059_31105 = state_31048__$1;
(statearr_31059_31105[(2)] = inst_30999);

(statearr_31059_31105[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (31))){
var inst_31027 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31048__$1 = state_31048;
if(cljs.core.truth_(inst_31027)){
var statearr_31060_31106 = state_31048__$1;
(statearr_31060_31106[(1)] = (34));

} else {
var statearr_31061_31107 = state_31048__$1;
(statearr_31061_31107[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (32))){
var inst_31036 = (state_31048[(2)]);
var state_31048__$1 = state_31048;
var statearr_31062_31108 = state_31048__$1;
(statearr_31062_31108[(2)] = inst_31036);

(statearr_31062_31108[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (33))){
var inst_31023 = (state_31048[(2)]);
var inst_31024 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31025 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31024);
var state_31048__$1 = (function (){var statearr_31063 = state_31048;
(statearr_31063[(8)] = inst_31023);

return statearr_31063;
})();
var statearr_31064_31109 = state_31048__$1;
(statearr_31064_31109[(2)] = inst_31025);

(statearr_31064_31109[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (13))){
var inst_30982 = figwheel.client.heads_up.clear.call(null);
var state_31048__$1 = state_31048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31048__$1,(16),inst_30982);
} else {
if((state_val_31049 === (22))){
var inst_31003 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31004 = figwheel.client.heads_up.append_warning_message.call(null,inst_31003);
var state_31048__$1 = state_31048;
var statearr_31065_31110 = state_31048__$1;
(statearr_31065_31110[(2)] = inst_31004);

(statearr_31065_31110[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (36))){
var inst_31034 = (state_31048[(2)]);
var state_31048__$1 = state_31048;
var statearr_31066_31111 = state_31048__$1;
(statearr_31066_31111[(2)] = inst_31034);

(statearr_31066_31111[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (29))){
var inst_31014 = (state_31048[(2)]);
var inst_31015 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31016 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31015);
var state_31048__$1 = (function (){var statearr_31067 = state_31048;
(statearr_31067[(9)] = inst_31014);

return statearr_31067;
})();
var statearr_31068_31112 = state_31048__$1;
(statearr_31068_31112[(2)] = inst_31016);

(statearr_31068_31112[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (6))){
var inst_30963 = (state_31048[(10)]);
var state_31048__$1 = state_31048;
var statearr_31069_31113 = state_31048__$1;
(statearr_31069_31113[(2)] = inst_30963);

(statearr_31069_31113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (28))){
var inst_31010 = (state_31048[(2)]);
var inst_31011 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31012 = figwheel.client.heads_up.display_warning.call(null,inst_31011);
var state_31048__$1 = (function (){var statearr_31070 = state_31048;
(statearr_31070[(11)] = inst_31010);

return statearr_31070;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31048__$1,(29),inst_31012);
} else {
if((state_val_31049 === (25))){
var inst_31008 = figwheel.client.heads_up.clear.call(null);
var state_31048__$1 = state_31048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31048__$1,(28),inst_31008);
} else {
if((state_val_31049 === (34))){
var inst_31029 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31048__$1 = state_31048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31048__$1,(37),inst_31029);
} else {
if((state_val_31049 === (17))){
var inst_30988 = (state_31048[(2)]);
var inst_30989 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30990 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30989);
var state_31048__$1 = (function (){var statearr_31071 = state_31048;
(statearr_31071[(12)] = inst_30988);

return statearr_31071;
})();
var statearr_31072_31114 = state_31048__$1;
(statearr_31072_31114[(2)] = inst_30990);

(statearr_31072_31114[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (3))){
var inst_30980 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31048__$1 = state_31048;
if(cljs.core.truth_(inst_30980)){
var statearr_31073_31115 = state_31048__$1;
(statearr_31073_31115[(1)] = (13));

} else {
var statearr_31074_31116 = state_31048__$1;
(statearr_31074_31116[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (12))){
var inst_30976 = (state_31048[(2)]);
var state_31048__$1 = state_31048;
var statearr_31075_31117 = state_31048__$1;
(statearr_31075_31117[(2)] = inst_30976);

(statearr_31075_31117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (2))){
var inst_30963 = (state_31048[(10)]);
var inst_30963__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31048__$1 = (function (){var statearr_31076 = state_31048;
(statearr_31076[(10)] = inst_30963__$1);

return statearr_31076;
})();
if(cljs.core.truth_(inst_30963__$1)){
var statearr_31077_31118 = state_31048__$1;
(statearr_31077_31118[(1)] = (5));

} else {
var statearr_31078_31119 = state_31048__$1;
(statearr_31078_31119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (23))){
var inst_31006 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31048__$1 = state_31048;
if(cljs.core.truth_(inst_31006)){
var statearr_31079_31120 = state_31048__$1;
(statearr_31079_31120[(1)] = (25));

} else {
var statearr_31080_31121 = state_31048__$1;
(statearr_31080_31121[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (35))){
var state_31048__$1 = state_31048;
var statearr_31081_31122 = state_31048__$1;
(statearr_31081_31122[(2)] = null);

(statearr_31081_31122[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (19))){
var inst_31001 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31048__$1 = state_31048;
if(cljs.core.truth_(inst_31001)){
var statearr_31082_31123 = state_31048__$1;
(statearr_31082_31123[(1)] = (22));

} else {
var statearr_31083_31124 = state_31048__$1;
(statearr_31083_31124[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (11))){
var inst_30972 = (state_31048[(2)]);
var state_31048__$1 = state_31048;
var statearr_31084_31125 = state_31048__$1;
(statearr_31084_31125[(2)] = inst_30972);

(statearr_31084_31125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (9))){
var inst_30974 = figwheel.client.heads_up.clear.call(null);
var state_31048__$1 = state_31048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31048__$1,(12),inst_30974);
} else {
if((state_val_31049 === (5))){
var inst_30965 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31048__$1 = state_31048;
var statearr_31085_31126 = state_31048__$1;
(statearr_31085_31126[(2)] = inst_30965);

(statearr_31085_31126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (14))){
var inst_30992 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31048__$1 = state_31048;
if(cljs.core.truth_(inst_30992)){
var statearr_31086_31127 = state_31048__$1;
(statearr_31086_31127[(1)] = (18));

} else {
var statearr_31087_31128 = state_31048__$1;
(statearr_31087_31128[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (26))){
var inst_31018 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31048__$1 = state_31048;
if(cljs.core.truth_(inst_31018)){
var statearr_31088_31129 = state_31048__$1;
(statearr_31088_31129[(1)] = (30));

} else {
var statearr_31089_31130 = state_31048__$1;
(statearr_31089_31130[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (16))){
var inst_30984 = (state_31048[(2)]);
var inst_30985 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30986 = figwheel.client.heads_up.display_exception.call(null,inst_30985);
var state_31048__$1 = (function (){var statearr_31090 = state_31048;
(statearr_31090[(13)] = inst_30984);

return statearr_31090;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31048__$1,(17),inst_30986);
} else {
if((state_val_31049 === (30))){
var inst_31020 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31021 = figwheel.client.heads_up.display_warning.call(null,inst_31020);
var state_31048__$1 = state_31048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31048__$1,(33),inst_31021);
} else {
if((state_val_31049 === (10))){
var inst_30978 = (state_31048[(2)]);
var state_31048__$1 = state_31048;
var statearr_31091_31131 = state_31048__$1;
(statearr_31091_31131[(2)] = inst_30978);

(statearr_31091_31131[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (18))){
var inst_30994 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30995 = figwheel.client.heads_up.display_exception.call(null,inst_30994);
var state_31048__$1 = state_31048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31048__$1,(21),inst_30995);
} else {
if((state_val_31049 === (37))){
var inst_31031 = (state_31048[(2)]);
var state_31048__$1 = state_31048;
var statearr_31092_31132 = state_31048__$1;
(statearr_31092_31132[(2)] = inst_31031);

(statearr_31092_31132[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (8))){
var inst_30970 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31048__$1 = state_31048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31048__$1,(11),inst_30970);
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
});})(c__26955__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26865__auto__,c__26955__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26866__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26866__auto____0 = (function (){
var statearr_31093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31093[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26866__auto__);

(statearr_31093[(1)] = (1));

return statearr_31093;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26866__auto____1 = (function (state_31048){
while(true){
var ret_value__26867__auto__ = (function (){try{while(true){
var result__26868__auto__ = switch__26865__auto__.call(null,state_31048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26868__auto__;
}
break;
}
}catch (e31094){if((e31094 instanceof Object)){
var ex__26869__auto__ = e31094;
var statearr_31095_31133 = state_31048;
(statearr_31095_31133[(5)] = ex__26869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31134 = state_31048;
state_31048 = G__31134;
continue;
} else {
return ret_value__26867__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26866__auto__ = function(state_31048){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26866__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26866__auto____1.call(this,state_31048);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26866__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26866__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26866__auto__;
})()
;})(switch__26865__auto__,c__26955__auto__,msg_hist,msg_names,msg))
})();
var state__26957__auto__ = (function (){var statearr_31096 = f__26956__auto__.call(null);
(statearr_31096[(6)] = c__26955__auto__);

return statearr_31096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26957__auto__);
});})(c__26955__auto__,msg_hist,msg_names,msg))
);

return c__26955__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26955__auto___31163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26955__auto___31163,ch){
return (function (){
var f__26956__auto__ = (function (){var switch__26865__auto__ = ((function (c__26955__auto___31163,ch){
return (function (state_31149){
var state_val_31150 = (state_31149[(1)]);
if((state_val_31150 === (1))){
var state_31149__$1 = state_31149;
var statearr_31151_31164 = state_31149__$1;
(statearr_31151_31164[(2)] = null);

(statearr_31151_31164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31150 === (2))){
var state_31149__$1 = state_31149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31149__$1,(4),ch);
} else {
if((state_val_31150 === (3))){
var inst_31147 = (state_31149[(2)]);
var state_31149__$1 = state_31149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31149__$1,inst_31147);
} else {
if((state_val_31150 === (4))){
var inst_31137 = (state_31149[(7)]);
var inst_31137__$1 = (state_31149[(2)]);
var state_31149__$1 = (function (){var statearr_31152 = state_31149;
(statearr_31152[(7)] = inst_31137__$1);

return statearr_31152;
})();
if(cljs.core.truth_(inst_31137__$1)){
var statearr_31153_31165 = state_31149__$1;
(statearr_31153_31165[(1)] = (5));

} else {
var statearr_31154_31166 = state_31149__$1;
(statearr_31154_31166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31150 === (5))){
var inst_31137 = (state_31149[(7)]);
var inst_31139 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31137);
var state_31149__$1 = state_31149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31149__$1,(8),inst_31139);
} else {
if((state_val_31150 === (6))){
var state_31149__$1 = state_31149;
var statearr_31155_31167 = state_31149__$1;
(statearr_31155_31167[(2)] = null);

(statearr_31155_31167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31150 === (7))){
var inst_31145 = (state_31149[(2)]);
var state_31149__$1 = state_31149;
var statearr_31156_31168 = state_31149__$1;
(statearr_31156_31168[(2)] = inst_31145);

(statearr_31156_31168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31150 === (8))){
var inst_31141 = (state_31149[(2)]);
var state_31149__$1 = (function (){var statearr_31157 = state_31149;
(statearr_31157[(8)] = inst_31141);

return statearr_31157;
})();
var statearr_31158_31169 = state_31149__$1;
(statearr_31158_31169[(2)] = null);

(statearr_31158_31169[(1)] = (2));


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
});})(c__26955__auto___31163,ch))
;
return ((function (switch__26865__auto__,c__26955__auto___31163,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26866__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26866__auto____0 = (function (){
var statearr_31159 = [null,null,null,null,null,null,null,null,null];
(statearr_31159[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26866__auto__);

(statearr_31159[(1)] = (1));

return statearr_31159;
});
var figwheel$client$heads_up_plugin_$_state_machine__26866__auto____1 = (function (state_31149){
while(true){
var ret_value__26867__auto__ = (function (){try{while(true){
var result__26868__auto__ = switch__26865__auto__.call(null,state_31149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26868__auto__;
}
break;
}
}catch (e31160){if((e31160 instanceof Object)){
var ex__26869__auto__ = e31160;
var statearr_31161_31170 = state_31149;
(statearr_31161_31170[(5)] = ex__26869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31171 = state_31149;
state_31149 = G__31171;
continue;
} else {
return ret_value__26867__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26866__auto__ = function(state_31149){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26866__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26866__auto____1.call(this,state_31149);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26866__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26866__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26866__auto__;
})()
;})(switch__26865__auto__,c__26955__auto___31163,ch))
})();
var state__26957__auto__ = (function (){var statearr_31162 = f__26956__auto__.call(null);
(statearr_31162[(6)] = c__26955__auto___31163);

return statearr_31162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26957__auto__);
});})(c__26955__auto___31163,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26955__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26955__auto__){
return (function (){
var f__26956__auto__ = (function (){var switch__26865__auto__ = ((function (c__26955__auto__){
return (function (state_31177){
var state_val_31178 = (state_31177[(1)]);
if((state_val_31178 === (1))){
var inst_31172 = cljs.core.async.timeout.call(null,(3000));
var state_31177__$1 = state_31177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31177__$1,(2),inst_31172);
} else {
if((state_val_31178 === (2))){
var inst_31174 = (state_31177[(2)]);
var inst_31175 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31177__$1 = (function (){var statearr_31179 = state_31177;
(statearr_31179[(7)] = inst_31174);

return statearr_31179;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31177__$1,inst_31175);
} else {
return null;
}
}
});})(c__26955__auto__))
;
return ((function (switch__26865__auto__,c__26955__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26866__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26866__auto____0 = (function (){
var statearr_31180 = [null,null,null,null,null,null,null,null];
(statearr_31180[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26866__auto__);

(statearr_31180[(1)] = (1));

return statearr_31180;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26866__auto____1 = (function (state_31177){
while(true){
var ret_value__26867__auto__ = (function (){try{while(true){
var result__26868__auto__ = switch__26865__auto__.call(null,state_31177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26868__auto__;
}
break;
}
}catch (e31181){if((e31181 instanceof Object)){
var ex__26869__auto__ = e31181;
var statearr_31182_31184 = state_31177;
(statearr_31182_31184[(5)] = ex__26869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31185 = state_31177;
state_31177 = G__31185;
continue;
} else {
return ret_value__26867__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26866__auto__ = function(state_31177){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26866__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26866__auto____1.call(this,state_31177);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26866__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26866__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26866__auto__;
})()
;})(switch__26865__auto__,c__26955__auto__))
})();
var state__26957__auto__ = (function (){var statearr_31183 = f__26956__auto__.call(null);
(statearr_31183[(6)] = c__26955__auto__);

return statearr_31183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26957__auto__);
});})(c__26955__auto__))
);

return c__26955__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26955__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26955__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__26956__auto__ = (function (){var switch__26865__auto__ = ((function (c__26955__auto__,figwheel_version,temp__5457__auto__){
return (function (state_31192){
var state_val_31193 = (state_31192[(1)]);
if((state_val_31193 === (1))){
var inst_31186 = cljs.core.async.timeout.call(null,(2000));
var state_31192__$1 = state_31192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31192__$1,(2),inst_31186);
} else {
if((state_val_31193 === (2))){
var inst_31188 = (state_31192[(2)]);
var inst_31189 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31190 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31189);
var state_31192__$1 = (function (){var statearr_31194 = state_31192;
(statearr_31194[(7)] = inst_31188);

return statearr_31194;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31192__$1,inst_31190);
} else {
return null;
}
}
});})(c__26955__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__26865__auto__,c__26955__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26866__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26866__auto____0 = (function (){
var statearr_31195 = [null,null,null,null,null,null,null,null];
(statearr_31195[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26866__auto__);

(statearr_31195[(1)] = (1));

return statearr_31195;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26866__auto____1 = (function (state_31192){
while(true){
var ret_value__26867__auto__ = (function (){try{while(true){
var result__26868__auto__ = switch__26865__auto__.call(null,state_31192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26868__auto__;
}
break;
}
}catch (e31196){if((e31196 instanceof Object)){
var ex__26869__auto__ = e31196;
var statearr_31197_31199 = state_31192;
(statearr_31197_31199[(5)] = ex__26869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31200 = state_31192;
state_31192 = G__31200;
continue;
} else {
return ret_value__26867__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26866__auto__ = function(state_31192){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26866__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26866__auto____1.call(this,state_31192);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26866__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26866__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26866__auto__;
})()
;})(switch__26865__auto__,c__26955__auto__,figwheel_version,temp__5457__auto__))
})();
var state__26957__auto__ = (function (){var statearr_31198 = f__26956__auto__.call(null);
(statearr_31198[(6)] = c__26955__auto__);

return statearr_31198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26957__auto__);
});})(c__26955__auto__,figwheel_version,temp__5457__auto__))
);

return c__26955__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31201){
var map__31202 = p__31201;
var map__31202__$1 = ((((!((map__31202 == null)))?(((((map__31202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31202):map__31202);
var file = cljs.core.get.call(null,map__31202__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31202__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31202__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31204 = "";
var G__31204__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31204),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31204);
var G__31204__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31204__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31204__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31204__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31204__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31205){
var map__31206 = p__31205;
var map__31206__$1 = ((((!((map__31206 == null)))?(((((map__31206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31206):map__31206);
var ed = map__31206__$1;
var formatted_exception = cljs.core.get.call(null,map__31206__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31206__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31206__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31208_31212 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31209_31213 = null;
var count__31210_31214 = (0);
var i__31211_31215 = (0);
while(true){
if((i__31211_31215 < count__31210_31214)){
var msg_31216 = cljs.core._nth.call(null,chunk__31209_31213,i__31211_31215);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31216);


var G__31217 = seq__31208_31212;
var G__31218 = chunk__31209_31213;
var G__31219 = count__31210_31214;
var G__31220 = (i__31211_31215 + (1));
seq__31208_31212 = G__31217;
chunk__31209_31213 = G__31218;
count__31210_31214 = G__31219;
i__31211_31215 = G__31220;
continue;
} else {
var temp__5457__auto___31221 = cljs.core.seq.call(null,seq__31208_31212);
if(temp__5457__auto___31221){
var seq__31208_31222__$1 = temp__5457__auto___31221;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31208_31222__$1)){
var c__4319__auto___31223 = cljs.core.chunk_first.call(null,seq__31208_31222__$1);
var G__31224 = cljs.core.chunk_rest.call(null,seq__31208_31222__$1);
var G__31225 = c__4319__auto___31223;
var G__31226 = cljs.core.count.call(null,c__4319__auto___31223);
var G__31227 = (0);
seq__31208_31212 = G__31224;
chunk__31209_31213 = G__31225;
count__31210_31214 = G__31226;
i__31211_31215 = G__31227;
continue;
} else {
var msg_31228 = cljs.core.first.call(null,seq__31208_31222__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31228);


var G__31229 = cljs.core.next.call(null,seq__31208_31222__$1);
var G__31230 = null;
var G__31231 = (0);
var G__31232 = (0);
seq__31208_31212 = G__31229;
chunk__31209_31213 = G__31230;
count__31210_31214 = G__31231;
i__31211_31215 = G__31232;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31233){
var map__31234 = p__31233;
var map__31234__$1 = ((((!((map__31234 == null)))?(((((map__31234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31234):map__31234);
var w = map__31234__$1;
var message = cljs.core.get.call(null,map__31234__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31236 = cljs.core.seq.call(null,plugins);
var chunk__31237 = null;
var count__31238 = (0);
var i__31239 = (0);
while(true){
if((i__31239 < count__31238)){
var vec__31240 = cljs.core._nth.call(null,chunk__31237,i__31239);
var k = cljs.core.nth.call(null,vec__31240,(0),null);
var plugin = cljs.core.nth.call(null,vec__31240,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31246 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31236,chunk__31237,count__31238,i__31239,pl_31246,vec__31240,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31246.call(null,msg_hist);
});})(seq__31236,chunk__31237,count__31238,i__31239,pl_31246,vec__31240,k,plugin))
);
} else {
}


var G__31247 = seq__31236;
var G__31248 = chunk__31237;
var G__31249 = count__31238;
var G__31250 = (i__31239 + (1));
seq__31236 = G__31247;
chunk__31237 = G__31248;
count__31238 = G__31249;
i__31239 = G__31250;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31236);
if(temp__5457__auto__){
var seq__31236__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31236__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31236__$1);
var G__31251 = cljs.core.chunk_rest.call(null,seq__31236__$1);
var G__31252 = c__4319__auto__;
var G__31253 = cljs.core.count.call(null,c__4319__auto__);
var G__31254 = (0);
seq__31236 = G__31251;
chunk__31237 = G__31252;
count__31238 = G__31253;
i__31239 = G__31254;
continue;
} else {
var vec__31243 = cljs.core.first.call(null,seq__31236__$1);
var k = cljs.core.nth.call(null,vec__31243,(0),null);
var plugin = cljs.core.nth.call(null,vec__31243,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31255 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31236,chunk__31237,count__31238,i__31239,pl_31255,vec__31243,k,plugin,seq__31236__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31255.call(null,msg_hist);
});})(seq__31236,chunk__31237,count__31238,i__31239,pl_31255,vec__31243,k,plugin,seq__31236__$1,temp__5457__auto__))
);
} else {
}


var G__31256 = cljs.core.next.call(null,seq__31236__$1);
var G__31257 = null;
var G__31258 = (0);
var G__31259 = (0);
seq__31236 = G__31256;
chunk__31237 = G__31257;
count__31238 = G__31258;
i__31239 = G__31259;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__31261 = arguments.length;
switch (G__31261) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31262_31267 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31263_31268 = null;
var count__31264_31269 = (0);
var i__31265_31270 = (0);
while(true){
if((i__31265_31270 < count__31264_31269)){
var msg_31271 = cljs.core._nth.call(null,chunk__31263_31268,i__31265_31270);
figwheel.client.socket.handle_incoming_message.call(null,msg_31271);


var G__31272 = seq__31262_31267;
var G__31273 = chunk__31263_31268;
var G__31274 = count__31264_31269;
var G__31275 = (i__31265_31270 + (1));
seq__31262_31267 = G__31272;
chunk__31263_31268 = G__31273;
count__31264_31269 = G__31274;
i__31265_31270 = G__31275;
continue;
} else {
var temp__5457__auto___31276 = cljs.core.seq.call(null,seq__31262_31267);
if(temp__5457__auto___31276){
var seq__31262_31277__$1 = temp__5457__auto___31276;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31262_31277__$1)){
var c__4319__auto___31278 = cljs.core.chunk_first.call(null,seq__31262_31277__$1);
var G__31279 = cljs.core.chunk_rest.call(null,seq__31262_31277__$1);
var G__31280 = c__4319__auto___31278;
var G__31281 = cljs.core.count.call(null,c__4319__auto___31278);
var G__31282 = (0);
seq__31262_31267 = G__31279;
chunk__31263_31268 = G__31280;
count__31264_31269 = G__31281;
i__31265_31270 = G__31282;
continue;
} else {
var msg_31283 = cljs.core.first.call(null,seq__31262_31277__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31283);


var G__31284 = cljs.core.next.call(null,seq__31262_31277__$1);
var G__31285 = null;
var G__31286 = (0);
var G__31287 = (0);
seq__31262_31267 = G__31284;
chunk__31263_31268 = G__31285;
count__31264_31269 = G__31286;
i__31265_31270 = G__31287;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31292 = arguments.length;
var i__4500__auto___31293 = (0);
while(true){
if((i__4500__auto___31293 < len__4499__auto___31292)){
args__4502__auto__.push((arguments[i__4500__auto___31293]));

var G__31294 = (i__4500__auto___31293 + (1));
i__4500__auto___31293 = G__31294;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31289){
var map__31290 = p__31289;
var map__31290__$1 = ((((!((map__31290 == null)))?(((((map__31290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31290):map__31290);
var opts = map__31290__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31288){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31288));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31295){if((e31295 instanceof Error)){
var e = e31295;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31295;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31296){
var map__31297 = p__31296;
var map__31297__$1 = ((((!((map__31297 == null)))?(((((map__31297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31297):map__31297);
var msg_name = cljs.core.get.call(null,map__31297__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1542636594718
