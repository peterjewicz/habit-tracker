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
}catch (e37418){if((e37418 instanceof Error)){
var e = e37418;
return "Error: Unable to stringify";
} else {
throw e37418;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37421 = arguments.length;
switch (G__37421) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37419_SHARP_){
if(typeof p1__37419_SHARP_ === 'string'){
return p1__37419_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37419_SHARP_);
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
var len__4499__auto___37424 = arguments.length;
var i__4500__auto___37425 = (0);
while(true){
if((i__4500__auto___37425 < len__4499__auto___37424)){
args__4502__auto__.push((arguments[i__4500__auto___37425]));

var G__37426 = (i__4500__auto___37425 + (1));
i__4500__auto___37425 = G__37426;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37423){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37423));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37428 = arguments.length;
var i__4500__auto___37429 = (0);
while(true){
if((i__4500__auto___37429 < len__4499__auto___37428)){
args__4502__auto__.push((arguments[i__4500__auto___37429]));

var G__37430 = (i__4500__auto___37429 + (1));
i__4500__auto___37429 = G__37430;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37427){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37427));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37431){
var map__37432 = p__37431;
var map__37432__$1 = ((((!((map__37432 == null)))?(((((map__37432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37432):map__37432);
var message = cljs.core.get.call(null,map__37432__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37432__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__34449__auto___37511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34449__auto___37511,ch){
return (function (){
var f__34450__auto__ = (function (){var switch__34359__auto__ = ((function (c__34449__auto___37511,ch){
return (function (state_37483){
var state_val_37484 = (state_37483[(1)]);
if((state_val_37484 === (7))){
var inst_37479 = (state_37483[(2)]);
var state_37483__$1 = state_37483;
var statearr_37485_37512 = state_37483__$1;
(statearr_37485_37512[(2)] = inst_37479);

(statearr_37485_37512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37484 === (1))){
var state_37483__$1 = state_37483;
var statearr_37486_37513 = state_37483__$1;
(statearr_37486_37513[(2)] = null);

(statearr_37486_37513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37484 === (4))){
var inst_37436 = (state_37483[(7)]);
var inst_37436__$1 = (state_37483[(2)]);
var state_37483__$1 = (function (){var statearr_37487 = state_37483;
(statearr_37487[(7)] = inst_37436__$1);

return statearr_37487;
})();
if(cljs.core.truth_(inst_37436__$1)){
var statearr_37488_37514 = state_37483__$1;
(statearr_37488_37514[(1)] = (5));

} else {
var statearr_37489_37515 = state_37483__$1;
(statearr_37489_37515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37484 === (15))){
var inst_37443 = (state_37483[(8)]);
var inst_37458 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37443);
var inst_37459 = cljs.core.first.call(null,inst_37458);
var inst_37460 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37459);
var inst_37461 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37460)].join('');
var inst_37462 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37461);
var state_37483__$1 = state_37483;
var statearr_37490_37516 = state_37483__$1;
(statearr_37490_37516[(2)] = inst_37462);

(statearr_37490_37516[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37484 === (13))){
var inst_37467 = (state_37483[(2)]);
var state_37483__$1 = state_37483;
var statearr_37491_37517 = state_37483__$1;
(statearr_37491_37517[(2)] = inst_37467);

(statearr_37491_37517[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37484 === (6))){
var state_37483__$1 = state_37483;
var statearr_37492_37518 = state_37483__$1;
(statearr_37492_37518[(2)] = null);

(statearr_37492_37518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37484 === (17))){
var inst_37465 = (state_37483[(2)]);
var state_37483__$1 = state_37483;
var statearr_37493_37519 = state_37483__$1;
(statearr_37493_37519[(2)] = inst_37465);

(statearr_37493_37519[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37484 === (3))){
var inst_37481 = (state_37483[(2)]);
var state_37483__$1 = state_37483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37483__$1,inst_37481);
} else {
if((state_val_37484 === (12))){
var inst_37442 = (state_37483[(9)]);
var inst_37456 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37442,opts);
var state_37483__$1 = state_37483;
if(cljs.core.truth_(inst_37456)){
var statearr_37494_37520 = state_37483__$1;
(statearr_37494_37520[(1)] = (15));

} else {
var statearr_37495_37521 = state_37483__$1;
(statearr_37495_37521[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37484 === (2))){
var state_37483__$1 = state_37483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37483__$1,(4),ch);
} else {
if((state_val_37484 === (11))){
var inst_37443 = (state_37483[(8)]);
var inst_37448 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37449 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37443);
var inst_37450 = cljs.core.async.timeout.call(null,(1000));
var inst_37451 = [inst_37449,inst_37450];
var inst_37452 = (new cljs.core.PersistentVector(null,2,(5),inst_37448,inst_37451,null));
var state_37483__$1 = state_37483;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37483__$1,(14),inst_37452);
} else {
if((state_val_37484 === (9))){
var inst_37443 = (state_37483[(8)]);
var inst_37469 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37470 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37443);
var inst_37471 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37470);
var inst_37472 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37471)].join('');
var inst_37473 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37472);
var state_37483__$1 = (function (){var statearr_37496 = state_37483;
(statearr_37496[(10)] = inst_37469);

return statearr_37496;
})();
var statearr_37497_37522 = state_37483__$1;
(statearr_37497_37522[(2)] = inst_37473);

(statearr_37497_37522[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37484 === (5))){
var inst_37436 = (state_37483[(7)]);
var inst_37438 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37439 = (new cljs.core.PersistentArrayMap(null,2,inst_37438,null));
var inst_37440 = (new cljs.core.PersistentHashSet(null,inst_37439,null));
var inst_37441 = figwheel.client.focus_msgs.call(null,inst_37440,inst_37436);
var inst_37442 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37441);
var inst_37443 = cljs.core.first.call(null,inst_37441);
var inst_37444 = figwheel.client.autoload_QMARK_.call(null);
var state_37483__$1 = (function (){var statearr_37498 = state_37483;
(statearr_37498[(9)] = inst_37442);

(statearr_37498[(8)] = inst_37443);

return statearr_37498;
})();
if(cljs.core.truth_(inst_37444)){
var statearr_37499_37523 = state_37483__$1;
(statearr_37499_37523[(1)] = (8));

} else {
var statearr_37500_37524 = state_37483__$1;
(statearr_37500_37524[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37484 === (14))){
var inst_37454 = (state_37483[(2)]);
var state_37483__$1 = state_37483;
var statearr_37501_37525 = state_37483__$1;
(statearr_37501_37525[(2)] = inst_37454);

(statearr_37501_37525[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37484 === (16))){
var state_37483__$1 = state_37483;
var statearr_37502_37526 = state_37483__$1;
(statearr_37502_37526[(2)] = null);

(statearr_37502_37526[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37484 === (10))){
var inst_37475 = (state_37483[(2)]);
var state_37483__$1 = (function (){var statearr_37503 = state_37483;
(statearr_37503[(11)] = inst_37475);

return statearr_37503;
})();
var statearr_37504_37527 = state_37483__$1;
(statearr_37504_37527[(2)] = null);

(statearr_37504_37527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37484 === (8))){
var inst_37442 = (state_37483[(9)]);
var inst_37446 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37442,opts);
var state_37483__$1 = state_37483;
if(cljs.core.truth_(inst_37446)){
var statearr_37505_37528 = state_37483__$1;
(statearr_37505_37528[(1)] = (11));

} else {
var statearr_37506_37529 = state_37483__$1;
(statearr_37506_37529[(1)] = (12));

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
});})(c__34449__auto___37511,ch))
;
return ((function (switch__34359__auto__,c__34449__auto___37511,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__34360__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__34360__auto____0 = (function (){
var statearr_37507 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37507[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__34360__auto__);

(statearr_37507[(1)] = (1));

return statearr_37507;
});
var figwheel$client$file_reloader_plugin_$_state_machine__34360__auto____1 = (function (state_37483){
while(true){
var ret_value__34361__auto__ = (function (){try{while(true){
var result__34362__auto__ = switch__34359__auto__.call(null,state_37483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34362__auto__;
}
break;
}
}catch (e37508){if((e37508 instanceof Object)){
var ex__34363__auto__ = e37508;
var statearr_37509_37530 = state_37483;
(statearr_37509_37530[(5)] = ex__34363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37531 = state_37483;
state_37483 = G__37531;
continue;
} else {
return ret_value__34361__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__34360__auto__ = function(state_37483){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__34360__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__34360__auto____1.call(this,state_37483);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__34360__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__34360__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__34360__auto__;
})()
;})(switch__34359__auto__,c__34449__auto___37511,ch))
})();
var state__34451__auto__ = (function (){var statearr_37510 = f__34450__auto__.call(null);
(statearr_37510[(6)] = c__34449__auto___37511);

return statearr_37510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34451__auto__);
});})(c__34449__auto___37511,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37532_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37532_SHARP_));
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
var base_path_37536 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37536){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_37534 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_37535 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_37534,_STAR_print_fn_STAR_37535,sb,base_path_37536){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_37534,_STAR_print_fn_STAR_37535,sb,base_path_37536))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37535;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_37534;
}}catch (e37533){if((e37533 instanceof Error)){
var e = e37533;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37536], null));
} else {
var e = e37533;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_37536))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37537){
var map__37538 = p__37537;
var map__37538__$1 = ((((!((map__37538 == null)))?(((((map__37538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37538):map__37538);
var opts = map__37538__$1;
var build_id = cljs.core.get.call(null,map__37538__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37538,map__37538__$1,opts,build_id){
return (function (p__37540){
var vec__37541 = p__37540;
var seq__37542 = cljs.core.seq.call(null,vec__37541);
var first__37543 = cljs.core.first.call(null,seq__37542);
var seq__37542__$1 = cljs.core.next.call(null,seq__37542);
var map__37544 = first__37543;
var map__37544__$1 = ((((!((map__37544 == null)))?(((((map__37544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37544):map__37544);
var msg = map__37544__$1;
var msg_name = cljs.core.get.call(null,map__37544__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37542__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37541,seq__37542,first__37543,seq__37542__$1,map__37544,map__37544__$1,msg,msg_name,_,map__37538,map__37538__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37541,seq__37542,first__37543,seq__37542__$1,map__37544,map__37544__$1,msg,msg_name,_,map__37538,map__37538__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37538,map__37538__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37546){
var vec__37547 = p__37546;
var seq__37548 = cljs.core.seq.call(null,vec__37547);
var first__37549 = cljs.core.first.call(null,seq__37548);
var seq__37548__$1 = cljs.core.next.call(null,seq__37548);
var map__37550 = first__37549;
var map__37550__$1 = ((((!((map__37550 == null)))?(((((map__37550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37550):map__37550);
var msg = map__37550__$1;
var msg_name = cljs.core.get.call(null,map__37550__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37548__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37552){
var map__37553 = p__37552;
var map__37553__$1 = ((((!((map__37553 == null)))?(((((map__37553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37553):map__37553);
var on_compile_warning = cljs.core.get.call(null,map__37553__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37553__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37553,map__37553__$1,on_compile_warning,on_compile_fail){
return (function (p__37555){
var vec__37556 = p__37555;
var seq__37557 = cljs.core.seq.call(null,vec__37556);
var first__37558 = cljs.core.first.call(null,seq__37557);
var seq__37557__$1 = cljs.core.next.call(null,seq__37557);
var map__37559 = first__37558;
var map__37559__$1 = ((((!((map__37559 == null)))?(((((map__37559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37559):map__37559);
var msg = map__37559__$1;
var msg_name = cljs.core.get.call(null,map__37559__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37557__$1;
var pred__37561 = cljs.core._EQ_;
var expr__37562 = msg_name;
if(cljs.core.truth_(pred__37561.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37562))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37561.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37562))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37553,map__37553__$1,on_compile_warning,on_compile_fail))
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
var c__34449__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34449__auto__,msg_hist,msg_names,msg){
return (function (){
var f__34450__auto__ = (function (){var switch__34359__auto__ = ((function (c__34449__auto__,msg_hist,msg_names,msg){
return (function (state_37651){
var state_val_37652 = (state_37651[(1)]);
if((state_val_37652 === (7))){
var inst_37571 = (state_37651[(2)]);
var state_37651__$1 = state_37651;
if(cljs.core.truth_(inst_37571)){
var statearr_37653_37700 = state_37651__$1;
(statearr_37653_37700[(1)] = (8));

} else {
var statearr_37654_37701 = state_37651__$1;
(statearr_37654_37701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (20))){
var inst_37645 = (state_37651[(2)]);
var state_37651__$1 = state_37651;
var statearr_37655_37702 = state_37651__$1;
(statearr_37655_37702[(2)] = inst_37645);

(statearr_37655_37702[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (27))){
var inst_37641 = (state_37651[(2)]);
var state_37651__$1 = state_37651;
var statearr_37656_37703 = state_37651__$1;
(statearr_37656_37703[(2)] = inst_37641);

(statearr_37656_37703[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (1))){
var inst_37564 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37651__$1 = state_37651;
if(cljs.core.truth_(inst_37564)){
var statearr_37657_37704 = state_37651__$1;
(statearr_37657_37704[(1)] = (2));

} else {
var statearr_37658_37705 = state_37651__$1;
(statearr_37658_37705[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (24))){
var inst_37643 = (state_37651[(2)]);
var state_37651__$1 = state_37651;
var statearr_37659_37706 = state_37651__$1;
(statearr_37659_37706[(2)] = inst_37643);

(statearr_37659_37706[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (4))){
var inst_37649 = (state_37651[(2)]);
var state_37651__$1 = state_37651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37651__$1,inst_37649);
} else {
if((state_val_37652 === (15))){
var inst_37647 = (state_37651[(2)]);
var state_37651__$1 = state_37651;
var statearr_37660_37707 = state_37651__$1;
(statearr_37660_37707[(2)] = inst_37647);

(statearr_37660_37707[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (21))){
var inst_37600 = (state_37651[(2)]);
var inst_37601 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37602 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37601);
var state_37651__$1 = (function (){var statearr_37661 = state_37651;
(statearr_37661[(7)] = inst_37600);

return statearr_37661;
})();
var statearr_37662_37708 = state_37651__$1;
(statearr_37662_37708[(2)] = inst_37602);

(statearr_37662_37708[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (31))){
var inst_37630 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37651__$1 = state_37651;
if(cljs.core.truth_(inst_37630)){
var statearr_37663_37709 = state_37651__$1;
(statearr_37663_37709[(1)] = (34));

} else {
var statearr_37664_37710 = state_37651__$1;
(statearr_37664_37710[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (32))){
var inst_37639 = (state_37651[(2)]);
var state_37651__$1 = state_37651;
var statearr_37665_37711 = state_37651__$1;
(statearr_37665_37711[(2)] = inst_37639);

(statearr_37665_37711[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (33))){
var inst_37626 = (state_37651[(2)]);
var inst_37627 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37628 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37627);
var state_37651__$1 = (function (){var statearr_37666 = state_37651;
(statearr_37666[(8)] = inst_37626);

return statearr_37666;
})();
var statearr_37667_37712 = state_37651__$1;
(statearr_37667_37712[(2)] = inst_37628);

(statearr_37667_37712[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (13))){
var inst_37585 = figwheel.client.heads_up.clear.call(null);
var state_37651__$1 = state_37651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37651__$1,(16),inst_37585);
} else {
if((state_val_37652 === (22))){
var inst_37606 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37607 = figwheel.client.heads_up.append_warning_message.call(null,inst_37606);
var state_37651__$1 = state_37651;
var statearr_37668_37713 = state_37651__$1;
(statearr_37668_37713[(2)] = inst_37607);

(statearr_37668_37713[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (36))){
var inst_37637 = (state_37651[(2)]);
var state_37651__$1 = state_37651;
var statearr_37669_37714 = state_37651__$1;
(statearr_37669_37714[(2)] = inst_37637);

(statearr_37669_37714[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (29))){
var inst_37617 = (state_37651[(2)]);
var inst_37618 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37619 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37618);
var state_37651__$1 = (function (){var statearr_37670 = state_37651;
(statearr_37670[(9)] = inst_37617);

return statearr_37670;
})();
var statearr_37671_37715 = state_37651__$1;
(statearr_37671_37715[(2)] = inst_37619);

(statearr_37671_37715[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (6))){
var inst_37566 = (state_37651[(10)]);
var state_37651__$1 = state_37651;
var statearr_37672_37716 = state_37651__$1;
(statearr_37672_37716[(2)] = inst_37566);

(statearr_37672_37716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (28))){
var inst_37613 = (state_37651[(2)]);
var inst_37614 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37615 = figwheel.client.heads_up.display_warning.call(null,inst_37614);
var state_37651__$1 = (function (){var statearr_37673 = state_37651;
(statearr_37673[(11)] = inst_37613);

return statearr_37673;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37651__$1,(29),inst_37615);
} else {
if((state_val_37652 === (25))){
var inst_37611 = figwheel.client.heads_up.clear.call(null);
var state_37651__$1 = state_37651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37651__$1,(28),inst_37611);
} else {
if((state_val_37652 === (34))){
var inst_37632 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37651__$1 = state_37651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37651__$1,(37),inst_37632);
} else {
if((state_val_37652 === (17))){
var inst_37591 = (state_37651[(2)]);
var inst_37592 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37593 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37592);
var state_37651__$1 = (function (){var statearr_37674 = state_37651;
(statearr_37674[(12)] = inst_37591);

return statearr_37674;
})();
var statearr_37675_37717 = state_37651__$1;
(statearr_37675_37717[(2)] = inst_37593);

(statearr_37675_37717[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (3))){
var inst_37583 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37651__$1 = state_37651;
if(cljs.core.truth_(inst_37583)){
var statearr_37676_37718 = state_37651__$1;
(statearr_37676_37718[(1)] = (13));

} else {
var statearr_37677_37719 = state_37651__$1;
(statearr_37677_37719[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (12))){
var inst_37579 = (state_37651[(2)]);
var state_37651__$1 = state_37651;
var statearr_37678_37720 = state_37651__$1;
(statearr_37678_37720[(2)] = inst_37579);

(statearr_37678_37720[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (2))){
var inst_37566 = (state_37651[(10)]);
var inst_37566__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37651__$1 = (function (){var statearr_37679 = state_37651;
(statearr_37679[(10)] = inst_37566__$1);

return statearr_37679;
})();
if(cljs.core.truth_(inst_37566__$1)){
var statearr_37680_37721 = state_37651__$1;
(statearr_37680_37721[(1)] = (5));

} else {
var statearr_37681_37722 = state_37651__$1;
(statearr_37681_37722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (23))){
var inst_37609 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37651__$1 = state_37651;
if(cljs.core.truth_(inst_37609)){
var statearr_37682_37723 = state_37651__$1;
(statearr_37682_37723[(1)] = (25));

} else {
var statearr_37683_37724 = state_37651__$1;
(statearr_37683_37724[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (35))){
var state_37651__$1 = state_37651;
var statearr_37684_37725 = state_37651__$1;
(statearr_37684_37725[(2)] = null);

(statearr_37684_37725[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (19))){
var inst_37604 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37651__$1 = state_37651;
if(cljs.core.truth_(inst_37604)){
var statearr_37685_37726 = state_37651__$1;
(statearr_37685_37726[(1)] = (22));

} else {
var statearr_37686_37727 = state_37651__$1;
(statearr_37686_37727[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (11))){
var inst_37575 = (state_37651[(2)]);
var state_37651__$1 = state_37651;
var statearr_37687_37728 = state_37651__$1;
(statearr_37687_37728[(2)] = inst_37575);

(statearr_37687_37728[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (9))){
var inst_37577 = figwheel.client.heads_up.clear.call(null);
var state_37651__$1 = state_37651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37651__$1,(12),inst_37577);
} else {
if((state_val_37652 === (5))){
var inst_37568 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37651__$1 = state_37651;
var statearr_37688_37729 = state_37651__$1;
(statearr_37688_37729[(2)] = inst_37568);

(statearr_37688_37729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (14))){
var inst_37595 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37651__$1 = state_37651;
if(cljs.core.truth_(inst_37595)){
var statearr_37689_37730 = state_37651__$1;
(statearr_37689_37730[(1)] = (18));

} else {
var statearr_37690_37731 = state_37651__$1;
(statearr_37690_37731[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (26))){
var inst_37621 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37651__$1 = state_37651;
if(cljs.core.truth_(inst_37621)){
var statearr_37691_37732 = state_37651__$1;
(statearr_37691_37732[(1)] = (30));

} else {
var statearr_37692_37733 = state_37651__$1;
(statearr_37692_37733[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (16))){
var inst_37587 = (state_37651[(2)]);
var inst_37588 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37589 = figwheel.client.heads_up.display_exception.call(null,inst_37588);
var state_37651__$1 = (function (){var statearr_37693 = state_37651;
(statearr_37693[(13)] = inst_37587);

return statearr_37693;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37651__$1,(17),inst_37589);
} else {
if((state_val_37652 === (30))){
var inst_37623 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37624 = figwheel.client.heads_up.display_warning.call(null,inst_37623);
var state_37651__$1 = state_37651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37651__$1,(33),inst_37624);
} else {
if((state_val_37652 === (10))){
var inst_37581 = (state_37651[(2)]);
var state_37651__$1 = state_37651;
var statearr_37694_37734 = state_37651__$1;
(statearr_37694_37734[(2)] = inst_37581);

(statearr_37694_37734[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (18))){
var inst_37597 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37598 = figwheel.client.heads_up.display_exception.call(null,inst_37597);
var state_37651__$1 = state_37651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37651__$1,(21),inst_37598);
} else {
if((state_val_37652 === (37))){
var inst_37634 = (state_37651[(2)]);
var state_37651__$1 = state_37651;
var statearr_37695_37735 = state_37651__$1;
(statearr_37695_37735[(2)] = inst_37634);

(statearr_37695_37735[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (8))){
var inst_37573 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37651__$1 = state_37651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37651__$1,(11),inst_37573);
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
});})(c__34449__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__34359__auto__,c__34449__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34360__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34360__auto____0 = (function (){
var statearr_37696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37696[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34360__auto__);

(statearr_37696[(1)] = (1));

return statearr_37696;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34360__auto____1 = (function (state_37651){
while(true){
var ret_value__34361__auto__ = (function (){try{while(true){
var result__34362__auto__ = switch__34359__auto__.call(null,state_37651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34362__auto__;
}
break;
}
}catch (e37697){if((e37697 instanceof Object)){
var ex__34363__auto__ = e37697;
var statearr_37698_37736 = state_37651;
(statearr_37698_37736[(5)] = ex__34363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37737 = state_37651;
state_37651 = G__37737;
continue;
} else {
return ret_value__34361__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34360__auto__ = function(state_37651){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34360__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34360__auto____1.call(this,state_37651);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34360__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34360__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34360__auto__;
})()
;})(switch__34359__auto__,c__34449__auto__,msg_hist,msg_names,msg))
})();
var state__34451__auto__ = (function (){var statearr_37699 = f__34450__auto__.call(null);
(statearr_37699[(6)] = c__34449__auto__);

return statearr_37699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34451__auto__);
});})(c__34449__auto__,msg_hist,msg_names,msg))
);

return c__34449__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34449__auto___37766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34449__auto___37766,ch){
return (function (){
var f__34450__auto__ = (function (){var switch__34359__auto__ = ((function (c__34449__auto___37766,ch){
return (function (state_37752){
var state_val_37753 = (state_37752[(1)]);
if((state_val_37753 === (1))){
var state_37752__$1 = state_37752;
var statearr_37754_37767 = state_37752__$1;
(statearr_37754_37767[(2)] = null);

(statearr_37754_37767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (2))){
var state_37752__$1 = state_37752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37752__$1,(4),ch);
} else {
if((state_val_37753 === (3))){
var inst_37750 = (state_37752[(2)]);
var state_37752__$1 = state_37752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37752__$1,inst_37750);
} else {
if((state_val_37753 === (4))){
var inst_37740 = (state_37752[(7)]);
var inst_37740__$1 = (state_37752[(2)]);
var state_37752__$1 = (function (){var statearr_37755 = state_37752;
(statearr_37755[(7)] = inst_37740__$1);

return statearr_37755;
})();
if(cljs.core.truth_(inst_37740__$1)){
var statearr_37756_37768 = state_37752__$1;
(statearr_37756_37768[(1)] = (5));

} else {
var statearr_37757_37769 = state_37752__$1;
(statearr_37757_37769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (5))){
var inst_37740 = (state_37752[(7)]);
var inst_37742 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37740);
var state_37752__$1 = state_37752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37752__$1,(8),inst_37742);
} else {
if((state_val_37753 === (6))){
var state_37752__$1 = state_37752;
var statearr_37758_37770 = state_37752__$1;
(statearr_37758_37770[(2)] = null);

(statearr_37758_37770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (7))){
var inst_37748 = (state_37752[(2)]);
var state_37752__$1 = state_37752;
var statearr_37759_37771 = state_37752__$1;
(statearr_37759_37771[(2)] = inst_37748);

(statearr_37759_37771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (8))){
var inst_37744 = (state_37752[(2)]);
var state_37752__$1 = (function (){var statearr_37760 = state_37752;
(statearr_37760[(8)] = inst_37744);

return statearr_37760;
})();
var statearr_37761_37772 = state_37752__$1;
(statearr_37761_37772[(2)] = null);

(statearr_37761_37772[(1)] = (2));


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
});})(c__34449__auto___37766,ch))
;
return ((function (switch__34359__auto__,c__34449__auto___37766,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__34360__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__34360__auto____0 = (function (){
var statearr_37762 = [null,null,null,null,null,null,null,null,null];
(statearr_37762[(0)] = figwheel$client$heads_up_plugin_$_state_machine__34360__auto__);

(statearr_37762[(1)] = (1));

return statearr_37762;
});
var figwheel$client$heads_up_plugin_$_state_machine__34360__auto____1 = (function (state_37752){
while(true){
var ret_value__34361__auto__ = (function (){try{while(true){
var result__34362__auto__ = switch__34359__auto__.call(null,state_37752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34362__auto__;
}
break;
}
}catch (e37763){if((e37763 instanceof Object)){
var ex__34363__auto__ = e37763;
var statearr_37764_37773 = state_37752;
(statearr_37764_37773[(5)] = ex__34363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37774 = state_37752;
state_37752 = G__37774;
continue;
} else {
return ret_value__34361__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__34360__auto__ = function(state_37752){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__34360__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__34360__auto____1.call(this,state_37752);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__34360__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__34360__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__34360__auto__;
})()
;})(switch__34359__auto__,c__34449__auto___37766,ch))
})();
var state__34451__auto__ = (function (){var statearr_37765 = f__34450__auto__.call(null);
(statearr_37765[(6)] = c__34449__auto___37766);

return statearr_37765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34451__auto__);
});})(c__34449__auto___37766,ch))
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
var c__34449__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34449__auto__){
return (function (){
var f__34450__auto__ = (function (){var switch__34359__auto__ = ((function (c__34449__auto__){
return (function (state_37780){
var state_val_37781 = (state_37780[(1)]);
if((state_val_37781 === (1))){
var inst_37775 = cljs.core.async.timeout.call(null,(3000));
var state_37780__$1 = state_37780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37780__$1,(2),inst_37775);
} else {
if((state_val_37781 === (2))){
var inst_37777 = (state_37780[(2)]);
var inst_37778 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37780__$1 = (function (){var statearr_37782 = state_37780;
(statearr_37782[(7)] = inst_37777);

return statearr_37782;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37780__$1,inst_37778);
} else {
return null;
}
}
});})(c__34449__auto__))
;
return ((function (switch__34359__auto__,c__34449__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__34360__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__34360__auto____0 = (function (){
var statearr_37783 = [null,null,null,null,null,null,null,null];
(statearr_37783[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__34360__auto__);

(statearr_37783[(1)] = (1));

return statearr_37783;
});
var figwheel$client$enforce_project_plugin_$_state_machine__34360__auto____1 = (function (state_37780){
while(true){
var ret_value__34361__auto__ = (function (){try{while(true){
var result__34362__auto__ = switch__34359__auto__.call(null,state_37780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34362__auto__;
}
break;
}
}catch (e37784){if((e37784 instanceof Object)){
var ex__34363__auto__ = e37784;
var statearr_37785_37787 = state_37780;
(statearr_37785_37787[(5)] = ex__34363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37788 = state_37780;
state_37780 = G__37788;
continue;
} else {
return ret_value__34361__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__34360__auto__ = function(state_37780){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__34360__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__34360__auto____1.call(this,state_37780);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__34360__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__34360__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__34360__auto__;
})()
;})(switch__34359__auto__,c__34449__auto__))
})();
var state__34451__auto__ = (function (){var statearr_37786 = f__34450__auto__.call(null);
(statearr_37786[(6)] = c__34449__auto__);

return statearr_37786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34451__auto__);
});})(c__34449__auto__))
);

return c__34449__auto__;
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
var c__34449__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34449__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__34450__auto__ = (function (){var switch__34359__auto__ = ((function (c__34449__auto__,figwheel_version,temp__5457__auto__){
return (function (state_37795){
var state_val_37796 = (state_37795[(1)]);
if((state_val_37796 === (1))){
var inst_37789 = cljs.core.async.timeout.call(null,(2000));
var state_37795__$1 = state_37795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37795__$1,(2),inst_37789);
} else {
if((state_val_37796 === (2))){
var inst_37791 = (state_37795[(2)]);
var inst_37792 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37793 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37792);
var state_37795__$1 = (function (){var statearr_37797 = state_37795;
(statearr_37797[(7)] = inst_37791);

return statearr_37797;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37795__$1,inst_37793);
} else {
return null;
}
}
});})(c__34449__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__34359__auto__,c__34449__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34360__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34360__auto____0 = (function (){
var statearr_37798 = [null,null,null,null,null,null,null,null];
(statearr_37798[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34360__auto__);

(statearr_37798[(1)] = (1));

return statearr_37798;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34360__auto____1 = (function (state_37795){
while(true){
var ret_value__34361__auto__ = (function (){try{while(true){
var result__34362__auto__ = switch__34359__auto__.call(null,state_37795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34362__auto__;
}
break;
}
}catch (e37799){if((e37799 instanceof Object)){
var ex__34363__auto__ = e37799;
var statearr_37800_37802 = state_37795;
(statearr_37800_37802[(5)] = ex__34363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37803 = state_37795;
state_37795 = G__37803;
continue;
} else {
return ret_value__34361__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34360__auto__ = function(state_37795){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34360__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34360__auto____1.call(this,state_37795);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34360__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34360__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34360__auto__;
})()
;})(switch__34359__auto__,c__34449__auto__,figwheel_version,temp__5457__auto__))
})();
var state__34451__auto__ = (function (){var statearr_37801 = f__34450__auto__.call(null);
(statearr_37801[(6)] = c__34449__auto__);

return statearr_37801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34451__auto__);
});})(c__34449__auto__,figwheel_version,temp__5457__auto__))
);

return c__34449__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37804){
var map__37805 = p__37804;
var map__37805__$1 = ((((!((map__37805 == null)))?(((((map__37805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37805):map__37805);
var file = cljs.core.get.call(null,map__37805__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37805__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37805__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37807 = "";
var G__37807__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37807),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37807);
var G__37807__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37807__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37807__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37807__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37807__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37808){
var map__37809 = p__37808;
var map__37809__$1 = ((((!((map__37809 == null)))?(((((map__37809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37809):map__37809);
var ed = map__37809__$1;
var formatted_exception = cljs.core.get.call(null,map__37809__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37809__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37809__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37811_37815 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37812_37816 = null;
var count__37813_37817 = (0);
var i__37814_37818 = (0);
while(true){
if((i__37814_37818 < count__37813_37817)){
var msg_37819 = cljs.core._nth.call(null,chunk__37812_37816,i__37814_37818);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37819);


var G__37820 = seq__37811_37815;
var G__37821 = chunk__37812_37816;
var G__37822 = count__37813_37817;
var G__37823 = (i__37814_37818 + (1));
seq__37811_37815 = G__37820;
chunk__37812_37816 = G__37821;
count__37813_37817 = G__37822;
i__37814_37818 = G__37823;
continue;
} else {
var temp__5457__auto___37824 = cljs.core.seq.call(null,seq__37811_37815);
if(temp__5457__auto___37824){
var seq__37811_37825__$1 = temp__5457__auto___37824;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37811_37825__$1)){
var c__4319__auto___37826 = cljs.core.chunk_first.call(null,seq__37811_37825__$1);
var G__37827 = cljs.core.chunk_rest.call(null,seq__37811_37825__$1);
var G__37828 = c__4319__auto___37826;
var G__37829 = cljs.core.count.call(null,c__4319__auto___37826);
var G__37830 = (0);
seq__37811_37815 = G__37827;
chunk__37812_37816 = G__37828;
count__37813_37817 = G__37829;
i__37814_37818 = G__37830;
continue;
} else {
var msg_37831 = cljs.core.first.call(null,seq__37811_37825__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37831);


var G__37832 = cljs.core.next.call(null,seq__37811_37825__$1);
var G__37833 = null;
var G__37834 = (0);
var G__37835 = (0);
seq__37811_37815 = G__37832;
chunk__37812_37816 = G__37833;
count__37813_37817 = G__37834;
i__37814_37818 = G__37835;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37836){
var map__37837 = p__37836;
var map__37837__$1 = ((((!((map__37837 == null)))?(((((map__37837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37837):map__37837);
var w = map__37837__$1;
var message = cljs.core.get.call(null,map__37837__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__37839 = cljs.core.seq.call(null,plugins);
var chunk__37840 = null;
var count__37841 = (0);
var i__37842 = (0);
while(true){
if((i__37842 < count__37841)){
var vec__37843 = cljs.core._nth.call(null,chunk__37840,i__37842);
var k = cljs.core.nth.call(null,vec__37843,(0),null);
var plugin = cljs.core.nth.call(null,vec__37843,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37849 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37839,chunk__37840,count__37841,i__37842,pl_37849,vec__37843,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37849.call(null,msg_hist);
});})(seq__37839,chunk__37840,count__37841,i__37842,pl_37849,vec__37843,k,plugin))
);
} else {
}


var G__37850 = seq__37839;
var G__37851 = chunk__37840;
var G__37852 = count__37841;
var G__37853 = (i__37842 + (1));
seq__37839 = G__37850;
chunk__37840 = G__37851;
count__37841 = G__37852;
i__37842 = G__37853;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37839);
if(temp__5457__auto__){
var seq__37839__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37839__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__37839__$1);
var G__37854 = cljs.core.chunk_rest.call(null,seq__37839__$1);
var G__37855 = c__4319__auto__;
var G__37856 = cljs.core.count.call(null,c__4319__auto__);
var G__37857 = (0);
seq__37839 = G__37854;
chunk__37840 = G__37855;
count__37841 = G__37856;
i__37842 = G__37857;
continue;
} else {
var vec__37846 = cljs.core.first.call(null,seq__37839__$1);
var k = cljs.core.nth.call(null,vec__37846,(0),null);
var plugin = cljs.core.nth.call(null,vec__37846,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37858 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37839,chunk__37840,count__37841,i__37842,pl_37858,vec__37846,k,plugin,seq__37839__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37858.call(null,msg_hist);
});})(seq__37839,chunk__37840,count__37841,i__37842,pl_37858,vec__37846,k,plugin,seq__37839__$1,temp__5457__auto__))
);
} else {
}


var G__37859 = cljs.core.next.call(null,seq__37839__$1);
var G__37860 = null;
var G__37861 = (0);
var G__37862 = (0);
seq__37839 = G__37859;
chunk__37840 = G__37860;
count__37841 = G__37861;
i__37842 = G__37862;
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
var G__37864 = arguments.length;
switch (G__37864) {
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

var seq__37865_37870 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37866_37871 = null;
var count__37867_37872 = (0);
var i__37868_37873 = (0);
while(true){
if((i__37868_37873 < count__37867_37872)){
var msg_37874 = cljs.core._nth.call(null,chunk__37866_37871,i__37868_37873);
figwheel.client.socket.handle_incoming_message.call(null,msg_37874);


var G__37875 = seq__37865_37870;
var G__37876 = chunk__37866_37871;
var G__37877 = count__37867_37872;
var G__37878 = (i__37868_37873 + (1));
seq__37865_37870 = G__37875;
chunk__37866_37871 = G__37876;
count__37867_37872 = G__37877;
i__37868_37873 = G__37878;
continue;
} else {
var temp__5457__auto___37879 = cljs.core.seq.call(null,seq__37865_37870);
if(temp__5457__auto___37879){
var seq__37865_37880__$1 = temp__5457__auto___37879;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37865_37880__$1)){
var c__4319__auto___37881 = cljs.core.chunk_first.call(null,seq__37865_37880__$1);
var G__37882 = cljs.core.chunk_rest.call(null,seq__37865_37880__$1);
var G__37883 = c__4319__auto___37881;
var G__37884 = cljs.core.count.call(null,c__4319__auto___37881);
var G__37885 = (0);
seq__37865_37870 = G__37882;
chunk__37866_37871 = G__37883;
count__37867_37872 = G__37884;
i__37868_37873 = G__37885;
continue;
} else {
var msg_37886 = cljs.core.first.call(null,seq__37865_37880__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37886);


var G__37887 = cljs.core.next.call(null,seq__37865_37880__$1);
var G__37888 = null;
var G__37889 = (0);
var G__37890 = (0);
seq__37865_37870 = G__37887;
chunk__37866_37871 = G__37888;
count__37867_37872 = G__37889;
i__37868_37873 = G__37890;
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
var len__4499__auto___37895 = arguments.length;
var i__4500__auto___37896 = (0);
while(true){
if((i__4500__auto___37896 < len__4499__auto___37895)){
args__4502__auto__.push((arguments[i__4500__auto___37896]));

var G__37897 = (i__4500__auto___37896 + (1));
i__4500__auto___37896 = G__37897;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37892){
var map__37893 = p__37892;
var map__37893__$1 = ((((!((map__37893 == null)))?(((((map__37893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37893):map__37893);
var opts = map__37893__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37891){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37891));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37898){if((e37898 instanceof Error)){
var e = e37898;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37898;

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
return (function (p__37899){
var map__37900 = p__37899;
var map__37900__$1 = ((((!((map__37900 == null)))?(((((map__37900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37900):map__37900);
var msg_name = cljs.core.get.call(null,map__37900__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1557923600916
