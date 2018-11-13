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
}catch (e30801){if((e30801 instanceof Error)){
var e = e30801;
return "Error: Unable to stringify";
} else {
throw e30801;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30804 = arguments.length;
switch (G__30804) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30802_SHARP_){
if(typeof p1__30802_SHARP_ === 'string'){
return p1__30802_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30802_SHARP_);
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
var len__4499__auto___30807 = arguments.length;
var i__4500__auto___30808 = (0);
while(true){
if((i__4500__auto___30808 < len__4499__auto___30807)){
args__4502__auto__.push((arguments[i__4500__auto___30808]));

var G__30809 = (i__4500__auto___30808 + (1));
i__4500__auto___30808 = G__30809;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30806){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30806));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30811 = arguments.length;
var i__4500__auto___30812 = (0);
while(true){
if((i__4500__auto___30812 < len__4499__auto___30811)){
args__4502__auto__.push((arguments[i__4500__auto___30812]));

var G__30813 = (i__4500__auto___30812 + (1));
i__4500__auto___30812 = G__30813;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30810){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30810));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30814){
var map__30815 = p__30814;
var map__30815__$1 = ((((!((map__30815 == null)))?(((((map__30815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30815):map__30815);
var message = cljs.core.get.call(null,map__30815__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30815__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__26941__auto___30894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26941__auto___30894,ch){
return (function (){
var f__26942__auto__ = (function (){var switch__26851__auto__ = ((function (c__26941__auto___30894,ch){
return (function (state_30866){
var state_val_30867 = (state_30866[(1)]);
if((state_val_30867 === (7))){
var inst_30862 = (state_30866[(2)]);
var state_30866__$1 = state_30866;
var statearr_30868_30895 = state_30866__$1;
(statearr_30868_30895[(2)] = inst_30862);

(statearr_30868_30895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (1))){
var state_30866__$1 = state_30866;
var statearr_30869_30896 = state_30866__$1;
(statearr_30869_30896[(2)] = null);

(statearr_30869_30896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (4))){
var inst_30819 = (state_30866[(7)]);
var inst_30819__$1 = (state_30866[(2)]);
var state_30866__$1 = (function (){var statearr_30870 = state_30866;
(statearr_30870[(7)] = inst_30819__$1);

return statearr_30870;
})();
if(cljs.core.truth_(inst_30819__$1)){
var statearr_30871_30897 = state_30866__$1;
(statearr_30871_30897[(1)] = (5));

} else {
var statearr_30872_30898 = state_30866__$1;
(statearr_30872_30898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (15))){
var inst_30826 = (state_30866[(8)]);
var inst_30841 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30826);
var inst_30842 = cljs.core.first.call(null,inst_30841);
var inst_30843 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30842);
var inst_30844 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30843)].join('');
var inst_30845 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30844);
var state_30866__$1 = state_30866;
var statearr_30873_30899 = state_30866__$1;
(statearr_30873_30899[(2)] = inst_30845);

(statearr_30873_30899[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (13))){
var inst_30850 = (state_30866[(2)]);
var state_30866__$1 = state_30866;
var statearr_30874_30900 = state_30866__$1;
(statearr_30874_30900[(2)] = inst_30850);

(statearr_30874_30900[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (6))){
var state_30866__$1 = state_30866;
var statearr_30875_30901 = state_30866__$1;
(statearr_30875_30901[(2)] = null);

(statearr_30875_30901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (17))){
var inst_30848 = (state_30866[(2)]);
var state_30866__$1 = state_30866;
var statearr_30876_30902 = state_30866__$1;
(statearr_30876_30902[(2)] = inst_30848);

(statearr_30876_30902[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (3))){
var inst_30864 = (state_30866[(2)]);
var state_30866__$1 = state_30866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30866__$1,inst_30864);
} else {
if((state_val_30867 === (12))){
var inst_30825 = (state_30866[(9)]);
var inst_30839 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30825,opts);
var state_30866__$1 = state_30866;
if(cljs.core.truth_(inst_30839)){
var statearr_30877_30903 = state_30866__$1;
(statearr_30877_30903[(1)] = (15));

} else {
var statearr_30878_30904 = state_30866__$1;
(statearr_30878_30904[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (2))){
var state_30866__$1 = state_30866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30866__$1,(4),ch);
} else {
if((state_val_30867 === (11))){
var inst_30826 = (state_30866[(8)]);
var inst_30831 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30832 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30826);
var inst_30833 = cljs.core.async.timeout.call(null,(1000));
var inst_30834 = [inst_30832,inst_30833];
var inst_30835 = (new cljs.core.PersistentVector(null,2,(5),inst_30831,inst_30834,null));
var state_30866__$1 = state_30866;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30866__$1,(14),inst_30835);
} else {
if((state_val_30867 === (9))){
var inst_30826 = (state_30866[(8)]);
var inst_30852 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30853 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30826);
var inst_30854 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30853);
var inst_30855 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30854)].join('');
var inst_30856 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30855);
var state_30866__$1 = (function (){var statearr_30879 = state_30866;
(statearr_30879[(10)] = inst_30852);

return statearr_30879;
})();
var statearr_30880_30905 = state_30866__$1;
(statearr_30880_30905[(2)] = inst_30856);

(statearr_30880_30905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (5))){
var inst_30819 = (state_30866[(7)]);
var inst_30821 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30822 = (new cljs.core.PersistentArrayMap(null,2,inst_30821,null));
var inst_30823 = (new cljs.core.PersistentHashSet(null,inst_30822,null));
var inst_30824 = figwheel.client.focus_msgs.call(null,inst_30823,inst_30819);
var inst_30825 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30824);
var inst_30826 = cljs.core.first.call(null,inst_30824);
var inst_30827 = figwheel.client.autoload_QMARK_.call(null);
var state_30866__$1 = (function (){var statearr_30881 = state_30866;
(statearr_30881[(8)] = inst_30826);

(statearr_30881[(9)] = inst_30825);

return statearr_30881;
})();
if(cljs.core.truth_(inst_30827)){
var statearr_30882_30906 = state_30866__$1;
(statearr_30882_30906[(1)] = (8));

} else {
var statearr_30883_30907 = state_30866__$1;
(statearr_30883_30907[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (14))){
var inst_30837 = (state_30866[(2)]);
var state_30866__$1 = state_30866;
var statearr_30884_30908 = state_30866__$1;
(statearr_30884_30908[(2)] = inst_30837);

(statearr_30884_30908[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (16))){
var state_30866__$1 = state_30866;
var statearr_30885_30909 = state_30866__$1;
(statearr_30885_30909[(2)] = null);

(statearr_30885_30909[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (10))){
var inst_30858 = (state_30866[(2)]);
var state_30866__$1 = (function (){var statearr_30886 = state_30866;
(statearr_30886[(11)] = inst_30858);

return statearr_30886;
})();
var statearr_30887_30910 = state_30866__$1;
(statearr_30887_30910[(2)] = null);

(statearr_30887_30910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (8))){
var inst_30825 = (state_30866[(9)]);
var inst_30829 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30825,opts);
var state_30866__$1 = state_30866;
if(cljs.core.truth_(inst_30829)){
var statearr_30888_30911 = state_30866__$1;
(statearr_30888_30911[(1)] = (11));

} else {
var statearr_30889_30912 = state_30866__$1;
(statearr_30889_30912[(1)] = (12));

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
});})(c__26941__auto___30894,ch))
;
return ((function (switch__26851__auto__,c__26941__auto___30894,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26852__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26852__auto____0 = (function (){
var statearr_30890 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30890[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26852__auto__);

(statearr_30890[(1)] = (1));

return statearr_30890;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26852__auto____1 = (function (state_30866){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_30866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e30891){if((e30891 instanceof Object)){
var ex__26855__auto__ = e30891;
var statearr_30892_30913 = state_30866;
(statearr_30892_30913[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30914 = state_30866;
state_30866 = G__30914;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26852__auto__ = function(state_30866){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26852__auto____1.call(this,state_30866);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26852__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26852__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26941__auto___30894,ch))
})();
var state__26943__auto__ = (function (){var statearr_30893 = f__26942__auto__.call(null);
(statearr_30893[(6)] = c__26941__auto___30894);

return statearr_30893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26943__auto__);
});})(c__26941__auto___30894,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30915_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30915_SHARP_));
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
var base_path_30919 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30919){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_30917 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_30918 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_30917,_STAR_print_fn_STAR_30918,sb,base_path_30919){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_30917,_STAR_print_fn_STAR_30918,sb,base_path_30919))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30918;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30917;
}}catch (e30916){if((e30916 instanceof Error)){
var e = e30916;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30919], null));
} else {
var e = e30916;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30919))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30920){
var map__30921 = p__30920;
var map__30921__$1 = ((((!((map__30921 == null)))?(((((map__30921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30921):map__30921);
var opts = map__30921__$1;
var build_id = cljs.core.get.call(null,map__30921__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30921,map__30921__$1,opts,build_id){
return (function (p__30923){
var vec__30924 = p__30923;
var seq__30925 = cljs.core.seq.call(null,vec__30924);
var first__30926 = cljs.core.first.call(null,seq__30925);
var seq__30925__$1 = cljs.core.next.call(null,seq__30925);
var map__30927 = first__30926;
var map__30927__$1 = ((((!((map__30927 == null)))?(((((map__30927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30927):map__30927);
var msg = map__30927__$1;
var msg_name = cljs.core.get.call(null,map__30927__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30925__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30924,seq__30925,first__30926,seq__30925__$1,map__30927,map__30927__$1,msg,msg_name,_,map__30921,map__30921__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30924,seq__30925,first__30926,seq__30925__$1,map__30927,map__30927__$1,msg,msg_name,_,map__30921,map__30921__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30921,map__30921__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30929){
var vec__30930 = p__30929;
var seq__30931 = cljs.core.seq.call(null,vec__30930);
var first__30932 = cljs.core.first.call(null,seq__30931);
var seq__30931__$1 = cljs.core.next.call(null,seq__30931);
var map__30933 = first__30932;
var map__30933__$1 = ((((!((map__30933 == null)))?(((((map__30933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30933):map__30933);
var msg = map__30933__$1;
var msg_name = cljs.core.get.call(null,map__30933__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30931__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30935){
var map__30936 = p__30935;
var map__30936__$1 = ((((!((map__30936 == null)))?(((((map__30936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30936):map__30936);
var on_compile_warning = cljs.core.get.call(null,map__30936__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30936__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30936,map__30936__$1,on_compile_warning,on_compile_fail){
return (function (p__30938){
var vec__30939 = p__30938;
var seq__30940 = cljs.core.seq.call(null,vec__30939);
var first__30941 = cljs.core.first.call(null,seq__30940);
var seq__30940__$1 = cljs.core.next.call(null,seq__30940);
var map__30942 = first__30941;
var map__30942__$1 = ((((!((map__30942 == null)))?(((((map__30942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30942):map__30942);
var msg = map__30942__$1;
var msg_name = cljs.core.get.call(null,map__30942__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30940__$1;
var pred__30944 = cljs.core._EQ_;
var expr__30945 = msg_name;
if(cljs.core.truth_(pred__30944.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30945))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30944.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30945))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30936,map__30936__$1,on_compile_warning,on_compile_fail))
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
var c__26941__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26941__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26942__auto__ = (function (){var switch__26851__auto__ = ((function (c__26941__auto__,msg_hist,msg_names,msg){
return (function (state_31034){
var state_val_31035 = (state_31034[(1)]);
if((state_val_31035 === (7))){
var inst_30954 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
if(cljs.core.truth_(inst_30954)){
var statearr_31036_31083 = state_31034__$1;
(statearr_31036_31083[(1)] = (8));

} else {
var statearr_31037_31084 = state_31034__$1;
(statearr_31037_31084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (20))){
var inst_31028 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
var statearr_31038_31085 = state_31034__$1;
(statearr_31038_31085[(2)] = inst_31028);

(statearr_31038_31085[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (27))){
var inst_31024 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
var statearr_31039_31086 = state_31034__$1;
(statearr_31039_31086[(2)] = inst_31024);

(statearr_31039_31086[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (1))){
var inst_30947 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31034__$1 = state_31034;
if(cljs.core.truth_(inst_30947)){
var statearr_31040_31087 = state_31034__$1;
(statearr_31040_31087[(1)] = (2));

} else {
var statearr_31041_31088 = state_31034__$1;
(statearr_31041_31088[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (24))){
var inst_31026 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
var statearr_31042_31089 = state_31034__$1;
(statearr_31042_31089[(2)] = inst_31026);

(statearr_31042_31089[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (4))){
var inst_31032 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31034__$1,inst_31032);
} else {
if((state_val_31035 === (15))){
var inst_31030 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
var statearr_31043_31090 = state_31034__$1;
(statearr_31043_31090[(2)] = inst_31030);

(statearr_31043_31090[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (21))){
var inst_30983 = (state_31034[(2)]);
var inst_30984 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30985 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30984);
var state_31034__$1 = (function (){var statearr_31044 = state_31034;
(statearr_31044[(7)] = inst_30983);

return statearr_31044;
})();
var statearr_31045_31091 = state_31034__$1;
(statearr_31045_31091[(2)] = inst_30985);

(statearr_31045_31091[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (31))){
var inst_31013 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31034__$1 = state_31034;
if(cljs.core.truth_(inst_31013)){
var statearr_31046_31092 = state_31034__$1;
(statearr_31046_31092[(1)] = (34));

} else {
var statearr_31047_31093 = state_31034__$1;
(statearr_31047_31093[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (32))){
var inst_31022 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
var statearr_31048_31094 = state_31034__$1;
(statearr_31048_31094[(2)] = inst_31022);

(statearr_31048_31094[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (33))){
var inst_31009 = (state_31034[(2)]);
var inst_31010 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31011 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31010);
var state_31034__$1 = (function (){var statearr_31049 = state_31034;
(statearr_31049[(8)] = inst_31009);

return statearr_31049;
})();
var statearr_31050_31095 = state_31034__$1;
(statearr_31050_31095[(2)] = inst_31011);

(statearr_31050_31095[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (13))){
var inst_30968 = figwheel.client.heads_up.clear.call(null);
var state_31034__$1 = state_31034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31034__$1,(16),inst_30968);
} else {
if((state_val_31035 === (22))){
var inst_30989 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30990 = figwheel.client.heads_up.append_warning_message.call(null,inst_30989);
var state_31034__$1 = state_31034;
var statearr_31051_31096 = state_31034__$1;
(statearr_31051_31096[(2)] = inst_30990);

(statearr_31051_31096[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (36))){
var inst_31020 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
var statearr_31052_31097 = state_31034__$1;
(statearr_31052_31097[(2)] = inst_31020);

(statearr_31052_31097[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (29))){
var inst_31000 = (state_31034[(2)]);
var inst_31001 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31002 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31001);
var state_31034__$1 = (function (){var statearr_31053 = state_31034;
(statearr_31053[(9)] = inst_31000);

return statearr_31053;
})();
var statearr_31054_31098 = state_31034__$1;
(statearr_31054_31098[(2)] = inst_31002);

(statearr_31054_31098[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (6))){
var inst_30949 = (state_31034[(10)]);
var state_31034__$1 = state_31034;
var statearr_31055_31099 = state_31034__$1;
(statearr_31055_31099[(2)] = inst_30949);

(statearr_31055_31099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (28))){
var inst_30996 = (state_31034[(2)]);
var inst_30997 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30998 = figwheel.client.heads_up.display_warning.call(null,inst_30997);
var state_31034__$1 = (function (){var statearr_31056 = state_31034;
(statearr_31056[(11)] = inst_30996);

return statearr_31056;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31034__$1,(29),inst_30998);
} else {
if((state_val_31035 === (25))){
var inst_30994 = figwheel.client.heads_up.clear.call(null);
var state_31034__$1 = state_31034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31034__$1,(28),inst_30994);
} else {
if((state_val_31035 === (34))){
var inst_31015 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31034__$1 = state_31034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31034__$1,(37),inst_31015);
} else {
if((state_val_31035 === (17))){
var inst_30974 = (state_31034[(2)]);
var inst_30975 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30976 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30975);
var state_31034__$1 = (function (){var statearr_31057 = state_31034;
(statearr_31057[(12)] = inst_30974);

return statearr_31057;
})();
var statearr_31058_31100 = state_31034__$1;
(statearr_31058_31100[(2)] = inst_30976);

(statearr_31058_31100[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (3))){
var inst_30966 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31034__$1 = state_31034;
if(cljs.core.truth_(inst_30966)){
var statearr_31059_31101 = state_31034__$1;
(statearr_31059_31101[(1)] = (13));

} else {
var statearr_31060_31102 = state_31034__$1;
(statearr_31060_31102[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (12))){
var inst_30962 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
var statearr_31061_31103 = state_31034__$1;
(statearr_31061_31103[(2)] = inst_30962);

(statearr_31061_31103[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (2))){
var inst_30949 = (state_31034[(10)]);
var inst_30949__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31034__$1 = (function (){var statearr_31062 = state_31034;
(statearr_31062[(10)] = inst_30949__$1);

return statearr_31062;
})();
if(cljs.core.truth_(inst_30949__$1)){
var statearr_31063_31104 = state_31034__$1;
(statearr_31063_31104[(1)] = (5));

} else {
var statearr_31064_31105 = state_31034__$1;
(statearr_31064_31105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (23))){
var inst_30992 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31034__$1 = state_31034;
if(cljs.core.truth_(inst_30992)){
var statearr_31065_31106 = state_31034__$1;
(statearr_31065_31106[(1)] = (25));

} else {
var statearr_31066_31107 = state_31034__$1;
(statearr_31066_31107[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (35))){
var state_31034__$1 = state_31034;
var statearr_31067_31108 = state_31034__$1;
(statearr_31067_31108[(2)] = null);

(statearr_31067_31108[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (19))){
var inst_30987 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31034__$1 = state_31034;
if(cljs.core.truth_(inst_30987)){
var statearr_31068_31109 = state_31034__$1;
(statearr_31068_31109[(1)] = (22));

} else {
var statearr_31069_31110 = state_31034__$1;
(statearr_31069_31110[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (11))){
var inst_30958 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
var statearr_31070_31111 = state_31034__$1;
(statearr_31070_31111[(2)] = inst_30958);

(statearr_31070_31111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (9))){
var inst_30960 = figwheel.client.heads_up.clear.call(null);
var state_31034__$1 = state_31034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31034__$1,(12),inst_30960);
} else {
if((state_val_31035 === (5))){
var inst_30951 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31034__$1 = state_31034;
var statearr_31071_31112 = state_31034__$1;
(statearr_31071_31112[(2)] = inst_30951);

(statearr_31071_31112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (14))){
var inst_30978 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31034__$1 = state_31034;
if(cljs.core.truth_(inst_30978)){
var statearr_31072_31113 = state_31034__$1;
(statearr_31072_31113[(1)] = (18));

} else {
var statearr_31073_31114 = state_31034__$1;
(statearr_31073_31114[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (26))){
var inst_31004 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31034__$1 = state_31034;
if(cljs.core.truth_(inst_31004)){
var statearr_31074_31115 = state_31034__$1;
(statearr_31074_31115[(1)] = (30));

} else {
var statearr_31075_31116 = state_31034__$1;
(statearr_31075_31116[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (16))){
var inst_30970 = (state_31034[(2)]);
var inst_30971 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30972 = figwheel.client.heads_up.display_exception.call(null,inst_30971);
var state_31034__$1 = (function (){var statearr_31076 = state_31034;
(statearr_31076[(13)] = inst_30970);

return statearr_31076;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31034__$1,(17),inst_30972);
} else {
if((state_val_31035 === (30))){
var inst_31006 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31007 = figwheel.client.heads_up.display_warning.call(null,inst_31006);
var state_31034__$1 = state_31034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31034__$1,(33),inst_31007);
} else {
if((state_val_31035 === (10))){
var inst_30964 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
var statearr_31077_31117 = state_31034__$1;
(statearr_31077_31117[(2)] = inst_30964);

(statearr_31077_31117[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (18))){
var inst_30980 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30981 = figwheel.client.heads_up.display_exception.call(null,inst_30980);
var state_31034__$1 = state_31034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31034__$1,(21),inst_30981);
} else {
if((state_val_31035 === (37))){
var inst_31017 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
var statearr_31078_31118 = state_31034__$1;
(statearr_31078_31118[(2)] = inst_31017);

(statearr_31078_31118[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (8))){
var inst_30956 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31034__$1 = state_31034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31034__$1,(11),inst_30956);
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
});})(c__26941__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26851__auto__,c__26941__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto____0 = (function (){
var statearr_31079 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31079[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto__);

(statearr_31079[(1)] = (1));

return statearr_31079;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto____1 = (function (state_31034){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_31034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e31080){if((e31080 instanceof Object)){
var ex__26855__auto__ = e31080;
var statearr_31081_31119 = state_31034;
(statearr_31081_31119[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31120 = state_31034;
state_31034 = G__31120;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto__ = function(state_31034){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto____1.call(this,state_31034);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26941__auto__,msg_hist,msg_names,msg))
})();
var state__26943__auto__ = (function (){var statearr_31082 = f__26942__auto__.call(null);
(statearr_31082[(6)] = c__26941__auto__);

return statearr_31082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26943__auto__);
});})(c__26941__auto__,msg_hist,msg_names,msg))
);

return c__26941__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26941__auto___31149 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26941__auto___31149,ch){
return (function (){
var f__26942__auto__ = (function (){var switch__26851__auto__ = ((function (c__26941__auto___31149,ch){
return (function (state_31135){
var state_val_31136 = (state_31135[(1)]);
if((state_val_31136 === (1))){
var state_31135__$1 = state_31135;
var statearr_31137_31150 = state_31135__$1;
(statearr_31137_31150[(2)] = null);

(statearr_31137_31150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31136 === (2))){
var state_31135__$1 = state_31135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31135__$1,(4),ch);
} else {
if((state_val_31136 === (3))){
var inst_31133 = (state_31135[(2)]);
var state_31135__$1 = state_31135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31135__$1,inst_31133);
} else {
if((state_val_31136 === (4))){
var inst_31123 = (state_31135[(7)]);
var inst_31123__$1 = (state_31135[(2)]);
var state_31135__$1 = (function (){var statearr_31138 = state_31135;
(statearr_31138[(7)] = inst_31123__$1);

return statearr_31138;
})();
if(cljs.core.truth_(inst_31123__$1)){
var statearr_31139_31151 = state_31135__$1;
(statearr_31139_31151[(1)] = (5));

} else {
var statearr_31140_31152 = state_31135__$1;
(statearr_31140_31152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31136 === (5))){
var inst_31123 = (state_31135[(7)]);
var inst_31125 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31123);
var state_31135__$1 = state_31135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31135__$1,(8),inst_31125);
} else {
if((state_val_31136 === (6))){
var state_31135__$1 = state_31135;
var statearr_31141_31153 = state_31135__$1;
(statearr_31141_31153[(2)] = null);

(statearr_31141_31153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31136 === (7))){
var inst_31131 = (state_31135[(2)]);
var state_31135__$1 = state_31135;
var statearr_31142_31154 = state_31135__$1;
(statearr_31142_31154[(2)] = inst_31131);

(statearr_31142_31154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31136 === (8))){
var inst_31127 = (state_31135[(2)]);
var state_31135__$1 = (function (){var statearr_31143 = state_31135;
(statearr_31143[(8)] = inst_31127);

return statearr_31143;
})();
var statearr_31144_31155 = state_31135__$1;
(statearr_31144_31155[(2)] = null);

(statearr_31144_31155[(1)] = (2));


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
});})(c__26941__auto___31149,ch))
;
return ((function (switch__26851__auto__,c__26941__auto___31149,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26852__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26852__auto____0 = (function (){
var statearr_31145 = [null,null,null,null,null,null,null,null,null];
(statearr_31145[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26852__auto__);

(statearr_31145[(1)] = (1));

return statearr_31145;
});
var figwheel$client$heads_up_plugin_$_state_machine__26852__auto____1 = (function (state_31135){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_31135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e31146){if((e31146 instanceof Object)){
var ex__26855__auto__ = e31146;
var statearr_31147_31156 = state_31135;
(statearr_31147_31156[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31157 = state_31135;
state_31135 = G__31157;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26852__auto__ = function(state_31135){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26852__auto____1.call(this,state_31135);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26852__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26852__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26941__auto___31149,ch))
})();
var state__26943__auto__ = (function (){var statearr_31148 = f__26942__auto__.call(null);
(statearr_31148[(6)] = c__26941__auto___31149);

return statearr_31148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26943__auto__);
});})(c__26941__auto___31149,ch))
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
var c__26941__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26941__auto__){
return (function (){
var f__26942__auto__ = (function (){var switch__26851__auto__ = ((function (c__26941__auto__){
return (function (state_31163){
var state_val_31164 = (state_31163[(1)]);
if((state_val_31164 === (1))){
var inst_31158 = cljs.core.async.timeout.call(null,(3000));
var state_31163__$1 = state_31163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31163__$1,(2),inst_31158);
} else {
if((state_val_31164 === (2))){
var inst_31160 = (state_31163[(2)]);
var inst_31161 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31163__$1 = (function (){var statearr_31165 = state_31163;
(statearr_31165[(7)] = inst_31160);

return statearr_31165;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31163__$1,inst_31161);
} else {
return null;
}
}
});})(c__26941__auto__))
;
return ((function (switch__26851__auto__,c__26941__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26852__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26852__auto____0 = (function (){
var statearr_31166 = [null,null,null,null,null,null,null,null];
(statearr_31166[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26852__auto__);

(statearr_31166[(1)] = (1));

return statearr_31166;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26852__auto____1 = (function (state_31163){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_31163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e31167){if((e31167 instanceof Object)){
var ex__26855__auto__ = e31167;
var statearr_31168_31170 = state_31163;
(statearr_31168_31170[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31171 = state_31163;
state_31163 = G__31171;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26852__auto__ = function(state_31163){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26852__auto____1.call(this,state_31163);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26852__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26852__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26941__auto__))
})();
var state__26943__auto__ = (function (){var statearr_31169 = f__26942__auto__.call(null);
(statearr_31169[(6)] = c__26941__auto__);

return statearr_31169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26943__auto__);
});})(c__26941__auto__))
);

return c__26941__auto__;
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
var c__26941__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26941__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__26942__auto__ = (function (){var switch__26851__auto__ = ((function (c__26941__auto__,figwheel_version,temp__5457__auto__){
return (function (state_31178){
var state_val_31179 = (state_31178[(1)]);
if((state_val_31179 === (1))){
var inst_31172 = cljs.core.async.timeout.call(null,(2000));
var state_31178__$1 = state_31178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31178__$1,(2),inst_31172);
} else {
if((state_val_31179 === (2))){
var inst_31174 = (state_31178[(2)]);
var inst_31175 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31176 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31175);
var state_31178__$1 = (function (){var statearr_31180 = state_31178;
(statearr_31180[(7)] = inst_31174);

return statearr_31180;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31178__$1,inst_31176);
} else {
return null;
}
}
});})(c__26941__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__26851__auto__,c__26941__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto____0 = (function (){
var statearr_31181 = [null,null,null,null,null,null,null,null];
(statearr_31181[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto__);

(statearr_31181[(1)] = (1));

return statearr_31181;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto____1 = (function (state_31178){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_31178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e31182){if((e31182 instanceof Object)){
var ex__26855__auto__ = e31182;
var statearr_31183_31185 = state_31178;
(statearr_31183_31185[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31186 = state_31178;
state_31178 = G__31186;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto__ = function(state_31178){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto____1.call(this,state_31178);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26941__auto__,figwheel_version,temp__5457__auto__))
})();
var state__26943__auto__ = (function (){var statearr_31184 = f__26942__auto__.call(null);
(statearr_31184[(6)] = c__26941__auto__);

return statearr_31184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26943__auto__);
});})(c__26941__auto__,figwheel_version,temp__5457__auto__))
);

return c__26941__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31187){
var map__31188 = p__31187;
var map__31188__$1 = ((((!((map__31188 == null)))?(((((map__31188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31188):map__31188);
var file = cljs.core.get.call(null,map__31188__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31188__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31188__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31190 = "";
var G__31190__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31190),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31190);
var G__31190__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31190__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31190__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31190__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31190__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31191){
var map__31192 = p__31191;
var map__31192__$1 = ((((!((map__31192 == null)))?(((((map__31192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31192):map__31192);
var ed = map__31192__$1;
var formatted_exception = cljs.core.get.call(null,map__31192__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31192__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31192__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31194_31198 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31195_31199 = null;
var count__31196_31200 = (0);
var i__31197_31201 = (0);
while(true){
if((i__31197_31201 < count__31196_31200)){
var msg_31202 = cljs.core._nth.call(null,chunk__31195_31199,i__31197_31201);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31202);


var G__31203 = seq__31194_31198;
var G__31204 = chunk__31195_31199;
var G__31205 = count__31196_31200;
var G__31206 = (i__31197_31201 + (1));
seq__31194_31198 = G__31203;
chunk__31195_31199 = G__31204;
count__31196_31200 = G__31205;
i__31197_31201 = G__31206;
continue;
} else {
var temp__5457__auto___31207 = cljs.core.seq.call(null,seq__31194_31198);
if(temp__5457__auto___31207){
var seq__31194_31208__$1 = temp__5457__auto___31207;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31194_31208__$1)){
var c__4319__auto___31209 = cljs.core.chunk_first.call(null,seq__31194_31208__$1);
var G__31210 = cljs.core.chunk_rest.call(null,seq__31194_31208__$1);
var G__31211 = c__4319__auto___31209;
var G__31212 = cljs.core.count.call(null,c__4319__auto___31209);
var G__31213 = (0);
seq__31194_31198 = G__31210;
chunk__31195_31199 = G__31211;
count__31196_31200 = G__31212;
i__31197_31201 = G__31213;
continue;
} else {
var msg_31214 = cljs.core.first.call(null,seq__31194_31208__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31214);


var G__31215 = cljs.core.next.call(null,seq__31194_31208__$1);
var G__31216 = null;
var G__31217 = (0);
var G__31218 = (0);
seq__31194_31198 = G__31215;
chunk__31195_31199 = G__31216;
count__31196_31200 = G__31217;
i__31197_31201 = G__31218;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31219){
var map__31220 = p__31219;
var map__31220__$1 = ((((!((map__31220 == null)))?(((((map__31220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31220):map__31220);
var w = map__31220__$1;
var message = cljs.core.get.call(null,map__31220__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__31222 = cljs.core.seq.call(null,plugins);
var chunk__31223 = null;
var count__31224 = (0);
var i__31225 = (0);
while(true){
if((i__31225 < count__31224)){
var vec__31226 = cljs.core._nth.call(null,chunk__31223,i__31225);
var k = cljs.core.nth.call(null,vec__31226,(0),null);
var plugin = cljs.core.nth.call(null,vec__31226,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31232 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31222,chunk__31223,count__31224,i__31225,pl_31232,vec__31226,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31232.call(null,msg_hist);
});})(seq__31222,chunk__31223,count__31224,i__31225,pl_31232,vec__31226,k,plugin))
);
} else {
}


var G__31233 = seq__31222;
var G__31234 = chunk__31223;
var G__31235 = count__31224;
var G__31236 = (i__31225 + (1));
seq__31222 = G__31233;
chunk__31223 = G__31234;
count__31224 = G__31235;
i__31225 = G__31236;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31222);
if(temp__5457__auto__){
var seq__31222__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31222__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31222__$1);
var G__31237 = cljs.core.chunk_rest.call(null,seq__31222__$1);
var G__31238 = c__4319__auto__;
var G__31239 = cljs.core.count.call(null,c__4319__auto__);
var G__31240 = (0);
seq__31222 = G__31237;
chunk__31223 = G__31238;
count__31224 = G__31239;
i__31225 = G__31240;
continue;
} else {
var vec__31229 = cljs.core.first.call(null,seq__31222__$1);
var k = cljs.core.nth.call(null,vec__31229,(0),null);
var plugin = cljs.core.nth.call(null,vec__31229,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31241 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31222,chunk__31223,count__31224,i__31225,pl_31241,vec__31229,k,plugin,seq__31222__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31241.call(null,msg_hist);
});})(seq__31222,chunk__31223,count__31224,i__31225,pl_31241,vec__31229,k,plugin,seq__31222__$1,temp__5457__auto__))
);
} else {
}


var G__31242 = cljs.core.next.call(null,seq__31222__$1);
var G__31243 = null;
var G__31244 = (0);
var G__31245 = (0);
seq__31222 = G__31242;
chunk__31223 = G__31243;
count__31224 = G__31244;
i__31225 = G__31245;
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
var G__31247 = arguments.length;
switch (G__31247) {
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

var seq__31248_31253 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31249_31254 = null;
var count__31250_31255 = (0);
var i__31251_31256 = (0);
while(true){
if((i__31251_31256 < count__31250_31255)){
var msg_31257 = cljs.core._nth.call(null,chunk__31249_31254,i__31251_31256);
figwheel.client.socket.handle_incoming_message.call(null,msg_31257);


var G__31258 = seq__31248_31253;
var G__31259 = chunk__31249_31254;
var G__31260 = count__31250_31255;
var G__31261 = (i__31251_31256 + (1));
seq__31248_31253 = G__31258;
chunk__31249_31254 = G__31259;
count__31250_31255 = G__31260;
i__31251_31256 = G__31261;
continue;
} else {
var temp__5457__auto___31262 = cljs.core.seq.call(null,seq__31248_31253);
if(temp__5457__auto___31262){
var seq__31248_31263__$1 = temp__5457__auto___31262;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31248_31263__$1)){
var c__4319__auto___31264 = cljs.core.chunk_first.call(null,seq__31248_31263__$1);
var G__31265 = cljs.core.chunk_rest.call(null,seq__31248_31263__$1);
var G__31266 = c__4319__auto___31264;
var G__31267 = cljs.core.count.call(null,c__4319__auto___31264);
var G__31268 = (0);
seq__31248_31253 = G__31265;
chunk__31249_31254 = G__31266;
count__31250_31255 = G__31267;
i__31251_31256 = G__31268;
continue;
} else {
var msg_31269 = cljs.core.first.call(null,seq__31248_31263__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31269);


var G__31270 = cljs.core.next.call(null,seq__31248_31263__$1);
var G__31271 = null;
var G__31272 = (0);
var G__31273 = (0);
seq__31248_31253 = G__31270;
chunk__31249_31254 = G__31271;
count__31250_31255 = G__31272;
i__31251_31256 = G__31273;
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
var len__4499__auto___31278 = arguments.length;
var i__4500__auto___31279 = (0);
while(true){
if((i__4500__auto___31279 < len__4499__auto___31278)){
args__4502__auto__.push((arguments[i__4500__auto___31279]));

var G__31280 = (i__4500__auto___31279 + (1));
i__4500__auto___31279 = G__31280;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31275){
var map__31276 = p__31275;
var map__31276__$1 = ((((!((map__31276 == null)))?(((((map__31276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31276):map__31276);
var opts = map__31276__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31274){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31274));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31281){if((e31281 instanceof Error)){
var e = e31281;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31281;

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
return (function (p__31282){
var map__31283 = p__31282;
var map__31283__$1 = ((((!((map__31283 == null)))?(((((map__31283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31283):map__31283);
var msg_name = cljs.core.get.call(null,map__31283__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1542151522691
