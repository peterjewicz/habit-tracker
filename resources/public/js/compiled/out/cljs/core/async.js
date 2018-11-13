// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27001 = arguments.length;
switch (G__27001) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27002 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27002 = (function (f,blockable,meta27003){
this.f = f;
this.blockable = blockable;
this.meta27003 = meta27003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27004,meta27003__$1){
var self__ = this;
var _27004__$1 = this;
return (new cljs.core.async.t_cljs$core$async27002(self__.f,self__.blockable,meta27003__$1));
});

cljs.core.async.t_cljs$core$async27002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27004){
var self__ = this;
var _27004__$1 = this;
return self__.meta27003;
});

cljs.core.async.t_cljs$core$async27002.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27002.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27002.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27002.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27002.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27003","meta27003",2004421822,null)], null);
});

cljs.core.async.t_cljs$core$async27002.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27002.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27002";

cljs.core.async.t_cljs$core$async27002.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27002");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27002.
 */
cljs.core.async.__GT_t_cljs$core$async27002 = (function cljs$core$async$__GT_t_cljs$core$async27002(f__$1,blockable__$1,meta27003){
return (new cljs.core.async.t_cljs$core$async27002(f__$1,blockable__$1,meta27003));
});

}

return (new cljs.core.async.t_cljs$core$async27002(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__27008 = arguments.length;
switch (G__27008) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__27011 = arguments.length;
switch (G__27011) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__27014 = arguments.length;
switch (G__27014) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27016 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27016);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27016,ret){
return (function (){
return fn1.call(null,val_27016);
});})(val_27016,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__27018 = arguments.length;
switch (G__27018) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___27020 = n;
var x_27021 = (0);
while(true){
if((x_27021 < n__4376__auto___27020)){
(a[x_27021] = (0));

var G__27022 = (x_27021 + (1));
x_27021 = G__27022;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27023 = (i + (1));
i = G__27023;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27024 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27024 = (function (flag,meta27025){
this.flag = flag;
this.meta27025 = meta27025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27026,meta27025__$1){
var self__ = this;
var _27026__$1 = this;
return (new cljs.core.async.t_cljs$core$async27024(self__.flag,meta27025__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27024.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27026){
var self__ = this;
var _27026__$1 = this;
return self__.meta27025;
});})(flag))
;

cljs.core.async.t_cljs$core$async27024.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27024.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27024.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27024.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27024.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27025","meta27025",-396692054,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27024.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27024";

cljs.core.async.t_cljs$core$async27024.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27024");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27024.
 */
cljs.core.async.__GT_t_cljs$core$async27024 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27024(flag__$1,meta27025){
return (new cljs.core.async.t_cljs$core$async27024(flag__$1,meta27025));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27024(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27027 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27027 = (function (flag,cb,meta27028){
this.flag = flag;
this.cb = cb;
this.meta27028 = meta27028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27029,meta27028__$1){
var self__ = this;
var _27029__$1 = this;
return (new cljs.core.async.t_cljs$core$async27027(self__.flag,self__.cb,meta27028__$1));
});

cljs.core.async.t_cljs$core$async27027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27029){
var self__ = this;
var _27029__$1 = this;
return self__.meta27028;
});

cljs.core.async.t_cljs$core$async27027.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27027.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27027.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27027.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27027.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27028","meta27028",-1539674384,null)], null);
});

cljs.core.async.t_cljs$core$async27027.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27027.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27027";

cljs.core.async.t_cljs$core$async27027.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27027");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27027.
 */
cljs.core.async.__GT_t_cljs$core$async27027 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27027(flag__$1,cb__$1,meta27028){
return (new cljs.core.async.t_cljs$core$async27027(flag__$1,cb__$1,meta27028));
});

}

return (new cljs.core.async.t_cljs$core$async27027(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27030_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27030_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27031_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27031_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27032 = (i + (1));
i = G__27032;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27038 = arguments.length;
var i__4500__auto___27039 = (0);
while(true){
if((i__4500__auto___27039 < len__4499__auto___27038)){
args__4502__auto__.push((arguments[i__4500__auto___27039]));

var G__27040 = (i__4500__auto___27039 + (1));
i__4500__auto___27039 = G__27040;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27035){
var map__27036 = p__27035;
var map__27036__$1 = ((((!((map__27036 == null)))?(((((map__27036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27036):map__27036);
var opts = map__27036__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27033){
var G__27034 = cljs.core.first.call(null,seq27033);
var seq27033__$1 = cljs.core.next.call(null,seq27033);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27034,seq27033__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__27042 = arguments.length;
switch (G__27042) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26941__auto___27088 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26941__auto___27088){
return (function (){
var f__26942__auto__ = (function (){var switch__26851__auto__ = ((function (c__26941__auto___27088){
return (function (state_27066){
var state_val_27067 = (state_27066[(1)]);
if((state_val_27067 === (7))){
var inst_27062 = (state_27066[(2)]);
var state_27066__$1 = state_27066;
var statearr_27068_27089 = state_27066__$1;
(statearr_27068_27089[(2)] = inst_27062);

(statearr_27068_27089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (1))){
var state_27066__$1 = state_27066;
var statearr_27069_27090 = state_27066__$1;
(statearr_27069_27090[(2)] = null);

(statearr_27069_27090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (4))){
var inst_27045 = (state_27066[(7)]);
var inst_27045__$1 = (state_27066[(2)]);
var inst_27046 = (inst_27045__$1 == null);
var state_27066__$1 = (function (){var statearr_27070 = state_27066;
(statearr_27070[(7)] = inst_27045__$1);

return statearr_27070;
})();
if(cljs.core.truth_(inst_27046)){
var statearr_27071_27091 = state_27066__$1;
(statearr_27071_27091[(1)] = (5));

} else {
var statearr_27072_27092 = state_27066__$1;
(statearr_27072_27092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (13))){
var state_27066__$1 = state_27066;
var statearr_27073_27093 = state_27066__$1;
(statearr_27073_27093[(2)] = null);

(statearr_27073_27093[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (6))){
var inst_27045 = (state_27066[(7)]);
var state_27066__$1 = state_27066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27066__$1,(11),to,inst_27045);
} else {
if((state_val_27067 === (3))){
var inst_27064 = (state_27066[(2)]);
var state_27066__$1 = state_27066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27066__$1,inst_27064);
} else {
if((state_val_27067 === (12))){
var state_27066__$1 = state_27066;
var statearr_27074_27094 = state_27066__$1;
(statearr_27074_27094[(2)] = null);

(statearr_27074_27094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (2))){
var state_27066__$1 = state_27066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27066__$1,(4),from);
} else {
if((state_val_27067 === (11))){
var inst_27055 = (state_27066[(2)]);
var state_27066__$1 = state_27066;
if(cljs.core.truth_(inst_27055)){
var statearr_27075_27095 = state_27066__$1;
(statearr_27075_27095[(1)] = (12));

} else {
var statearr_27076_27096 = state_27066__$1;
(statearr_27076_27096[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (9))){
var state_27066__$1 = state_27066;
var statearr_27077_27097 = state_27066__$1;
(statearr_27077_27097[(2)] = null);

(statearr_27077_27097[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (5))){
var state_27066__$1 = state_27066;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27078_27098 = state_27066__$1;
(statearr_27078_27098[(1)] = (8));

} else {
var statearr_27079_27099 = state_27066__$1;
(statearr_27079_27099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (14))){
var inst_27060 = (state_27066[(2)]);
var state_27066__$1 = state_27066;
var statearr_27080_27100 = state_27066__$1;
(statearr_27080_27100[(2)] = inst_27060);

(statearr_27080_27100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (10))){
var inst_27052 = (state_27066[(2)]);
var state_27066__$1 = state_27066;
var statearr_27081_27101 = state_27066__$1;
(statearr_27081_27101[(2)] = inst_27052);

(statearr_27081_27101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (8))){
var inst_27049 = cljs.core.async.close_BANG_.call(null,to);
var state_27066__$1 = state_27066;
var statearr_27082_27102 = state_27066__$1;
(statearr_27082_27102[(2)] = inst_27049);

(statearr_27082_27102[(1)] = (10));


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
});})(c__26941__auto___27088))
;
return ((function (switch__26851__auto__,c__26941__auto___27088){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_27083 = [null,null,null,null,null,null,null,null];
(statearr_27083[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_27083[(1)] = (1));

return statearr_27083;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_27066){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_27066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e27084){if((e27084 instanceof Object)){
var ex__26855__auto__ = e27084;
var statearr_27085_27103 = state_27066;
(statearr_27085_27103[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27104 = state_27066;
state_27066 = G__27104;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_27066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_27066);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26941__auto___27088))
})();
var state__26943__auto__ = (function (){var statearr_27086 = f__26942__auto__.call(null);
(statearr_27086[(6)] = c__26941__auto___27088);

return statearr_27086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26943__auto__);
});})(c__26941__auto___27088))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27105){
var vec__27106 = p__27105;
var v = cljs.core.nth.call(null,vec__27106,(0),null);
var p = cljs.core.nth.call(null,vec__27106,(1),null);
var job = vec__27106;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26941__auto___27277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26941__auto___27277,res,vec__27106,v,p,job,jobs,results){
return (function (){
var f__26942__auto__ = (function (){var switch__26851__auto__ = ((function (c__26941__auto___27277,res,vec__27106,v,p,job,jobs,results){
return (function (state_27113){
var state_val_27114 = (state_27113[(1)]);
if((state_val_27114 === (1))){
var state_27113__$1 = state_27113;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27113__$1,(2),res,v);
} else {
if((state_val_27114 === (2))){
var inst_27110 = (state_27113[(2)]);
var inst_27111 = cljs.core.async.close_BANG_.call(null,res);
var state_27113__$1 = (function (){var statearr_27115 = state_27113;
(statearr_27115[(7)] = inst_27110);

return statearr_27115;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27113__$1,inst_27111);
} else {
return null;
}
}
});})(c__26941__auto___27277,res,vec__27106,v,p,job,jobs,results))
;
return ((function (switch__26851__auto__,c__26941__auto___27277,res,vec__27106,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0 = (function (){
var statearr_27116 = [null,null,null,null,null,null,null,null];
(statearr_27116[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__);

(statearr_27116[(1)] = (1));

return statearr_27116;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1 = (function (state_27113){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_27113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e27117){if((e27117 instanceof Object)){
var ex__26855__auto__ = e27117;
var statearr_27118_27278 = state_27113;
(statearr_27118_27278[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27279 = state_27113;
state_27113 = G__27279;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__ = function(state_27113){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1.call(this,state_27113);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26941__auto___27277,res,vec__27106,v,p,job,jobs,results))
})();
var state__26943__auto__ = (function (){var statearr_27119 = f__26942__auto__.call(null);
(statearr_27119[(6)] = c__26941__auto___27277);

return statearr_27119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26943__auto__);
});})(c__26941__auto___27277,res,vec__27106,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27120){
var vec__27121 = p__27120;
var v = cljs.core.nth.call(null,vec__27121,(0),null);
var p = cljs.core.nth.call(null,vec__27121,(1),null);
var job = vec__27121;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___27280 = n;
var __27281 = (0);
while(true){
if((__27281 < n__4376__auto___27280)){
var G__27124_27282 = type;
var G__27124_27283__$1 = (((G__27124_27282 instanceof cljs.core.Keyword))?G__27124_27282.fqn:null);
switch (G__27124_27283__$1) {
case "compute":
var c__26941__auto___27285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27281,c__26941__auto___27285,G__27124_27282,G__27124_27283__$1,n__4376__auto___27280,jobs,results,process,async){
return (function (){
var f__26942__auto__ = (function (){var switch__26851__auto__ = ((function (__27281,c__26941__auto___27285,G__27124_27282,G__27124_27283__$1,n__4376__auto___27280,jobs,results,process,async){
return (function (state_27137){
var state_val_27138 = (state_27137[(1)]);
if((state_val_27138 === (1))){
var state_27137__$1 = state_27137;
var statearr_27139_27286 = state_27137__$1;
(statearr_27139_27286[(2)] = null);

(statearr_27139_27286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27138 === (2))){
var state_27137__$1 = state_27137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27137__$1,(4),jobs);
} else {
if((state_val_27138 === (3))){
var inst_27135 = (state_27137[(2)]);
var state_27137__$1 = state_27137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27137__$1,inst_27135);
} else {
if((state_val_27138 === (4))){
var inst_27127 = (state_27137[(2)]);
var inst_27128 = process.call(null,inst_27127);
var state_27137__$1 = state_27137;
if(cljs.core.truth_(inst_27128)){
var statearr_27140_27287 = state_27137__$1;
(statearr_27140_27287[(1)] = (5));

} else {
var statearr_27141_27288 = state_27137__$1;
(statearr_27141_27288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27138 === (5))){
var state_27137__$1 = state_27137;
var statearr_27142_27289 = state_27137__$1;
(statearr_27142_27289[(2)] = null);

(statearr_27142_27289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27138 === (6))){
var state_27137__$1 = state_27137;
var statearr_27143_27290 = state_27137__$1;
(statearr_27143_27290[(2)] = null);

(statearr_27143_27290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27138 === (7))){
var inst_27133 = (state_27137[(2)]);
var state_27137__$1 = state_27137;
var statearr_27144_27291 = state_27137__$1;
(statearr_27144_27291[(2)] = inst_27133);

(statearr_27144_27291[(1)] = (3));


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
});})(__27281,c__26941__auto___27285,G__27124_27282,G__27124_27283__$1,n__4376__auto___27280,jobs,results,process,async))
;
return ((function (__27281,switch__26851__auto__,c__26941__auto___27285,G__27124_27282,G__27124_27283__$1,n__4376__auto___27280,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0 = (function (){
var statearr_27145 = [null,null,null,null,null,null,null];
(statearr_27145[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__);

(statearr_27145[(1)] = (1));

return statearr_27145;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1 = (function (state_27137){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_27137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e27146){if((e27146 instanceof Object)){
var ex__26855__auto__ = e27146;
var statearr_27147_27292 = state_27137;
(statearr_27147_27292[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27293 = state_27137;
state_27137 = G__27293;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__ = function(state_27137){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1.call(this,state_27137);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__;
})()
;})(__27281,switch__26851__auto__,c__26941__auto___27285,G__27124_27282,G__27124_27283__$1,n__4376__auto___27280,jobs,results,process,async))
})();
var state__26943__auto__ = (function (){var statearr_27148 = f__26942__auto__.call(null);
(statearr_27148[(6)] = c__26941__auto___27285);

return statearr_27148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26943__auto__);
});})(__27281,c__26941__auto___27285,G__27124_27282,G__27124_27283__$1,n__4376__auto___27280,jobs,results,process,async))
);


break;
case "async":
var c__26941__auto___27294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27281,c__26941__auto___27294,G__27124_27282,G__27124_27283__$1,n__4376__auto___27280,jobs,results,process,async){
return (function (){
var f__26942__auto__ = (function (){var switch__26851__auto__ = ((function (__27281,c__26941__auto___27294,G__27124_27282,G__27124_27283__$1,n__4376__auto___27280,jobs,results,process,async){
return (function (state_27161){
var state_val_27162 = (state_27161[(1)]);
if((state_val_27162 === (1))){
var state_27161__$1 = state_27161;
var statearr_27163_27295 = state_27161__$1;
(statearr_27163_27295[(2)] = null);

(statearr_27163_27295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27162 === (2))){
var state_27161__$1 = state_27161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27161__$1,(4),jobs);
} else {
if((state_val_27162 === (3))){
var inst_27159 = (state_27161[(2)]);
var state_27161__$1 = state_27161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27161__$1,inst_27159);
} else {
if((state_val_27162 === (4))){
var inst_27151 = (state_27161[(2)]);
var inst_27152 = async.call(null,inst_27151);
var state_27161__$1 = state_27161;
if(cljs.core.truth_(inst_27152)){
var statearr_27164_27296 = state_27161__$1;
(statearr_27164_27296[(1)] = (5));

} else {
var statearr_27165_27297 = state_27161__$1;
(statearr_27165_27297[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27162 === (5))){
var state_27161__$1 = state_27161;
var statearr_27166_27298 = state_27161__$1;
(statearr_27166_27298[(2)] = null);

(statearr_27166_27298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27162 === (6))){
var state_27161__$1 = state_27161;
var statearr_27167_27299 = state_27161__$1;
(statearr_27167_27299[(2)] = null);

(statearr_27167_27299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27162 === (7))){
var inst_27157 = (state_27161[(2)]);
var state_27161__$1 = state_27161;
var statearr_27168_27300 = state_27161__$1;
(statearr_27168_27300[(2)] = inst_27157);

(statearr_27168_27300[(1)] = (3));


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
});})(__27281,c__26941__auto___27294,G__27124_27282,G__27124_27283__$1,n__4376__auto___27280,jobs,results,process,async))
;
return ((function (__27281,switch__26851__auto__,c__26941__auto___27294,G__27124_27282,G__27124_27283__$1,n__4376__auto___27280,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0 = (function (){
var statearr_27169 = [null,null,null,null,null,null,null];
(statearr_27169[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__);

(statearr_27169[(1)] = (1));

return statearr_27169;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1 = (function (state_27161){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_27161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e27170){if((e27170 instanceof Object)){
var ex__26855__auto__ = e27170;
var statearr_27171_27301 = state_27161;
(statearr_27171_27301[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27302 = state_27161;
state_27161 = G__27302;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__ = function(state_27161){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1.call(this,state_27161);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__;
})()
;})(__27281,switch__26851__auto__,c__26941__auto___27294,G__27124_27282,G__27124_27283__$1,n__4376__auto___27280,jobs,results,process,async))
})();
var state__26943__auto__ = (function (){var statearr_27172 = f__26942__auto__.call(null);
(statearr_27172[(6)] = c__26941__auto___27294);

return statearr_27172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26943__auto__);
});})(__27281,c__26941__auto___27294,G__27124_27282,G__27124_27283__$1,n__4376__auto___27280,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27124_27283__$1)].join('')));

}

var G__27303 = (__27281 + (1));
__27281 = G__27303;
continue;
} else {
}
break;
}

var c__26941__auto___27304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26941__auto___27304,jobs,results,process,async){
return (function (){
var f__26942__auto__ = (function (){var switch__26851__auto__ = ((function (c__26941__auto___27304,jobs,results,process,async){
return (function (state_27194){
var state_val_27195 = (state_27194[(1)]);
if((state_val_27195 === (1))){
var state_27194__$1 = state_27194;
var statearr_27196_27305 = state_27194__$1;
(statearr_27196_27305[(2)] = null);

(statearr_27196_27305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27195 === (2))){
var state_27194__$1 = state_27194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27194__$1,(4),from);
} else {
if((state_val_27195 === (3))){
var inst_27192 = (state_27194[(2)]);
var state_27194__$1 = state_27194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27194__$1,inst_27192);
} else {
if((state_val_27195 === (4))){
var inst_27175 = (state_27194[(7)]);
var inst_27175__$1 = (state_27194[(2)]);
var inst_27176 = (inst_27175__$1 == null);
var state_27194__$1 = (function (){var statearr_27197 = state_27194;
(statearr_27197[(7)] = inst_27175__$1);

return statearr_27197;
})();
if(cljs.core.truth_(inst_27176)){
var statearr_27198_27306 = state_27194__$1;
(statearr_27198_27306[(1)] = (5));

} else {
var statearr_27199_27307 = state_27194__$1;
(statearr_27199_27307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27195 === (5))){
var inst_27178 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27194__$1 = state_27194;
var statearr_27200_27308 = state_27194__$1;
(statearr_27200_27308[(2)] = inst_27178);

(statearr_27200_27308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27195 === (6))){
var inst_27175 = (state_27194[(7)]);
var inst_27180 = (state_27194[(8)]);
var inst_27180__$1 = cljs.core.async.chan.call(null,(1));
var inst_27181 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27182 = [inst_27175,inst_27180__$1];
var inst_27183 = (new cljs.core.PersistentVector(null,2,(5),inst_27181,inst_27182,null));
var state_27194__$1 = (function (){var statearr_27201 = state_27194;
(statearr_27201[(8)] = inst_27180__$1);

return statearr_27201;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27194__$1,(8),jobs,inst_27183);
} else {
if((state_val_27195 === (7))){
var inst_27190 = (state_27194[(2)]);
var state_27194__$1 = state_27194;
var statearr_27202_27309 = state_27194__$1;
(statearr_27202_27309[(2)] = inst_27190);

(statearr_27202_27309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27195 === (8))){
var inst_27180 = (state_27194[(8)]);
var inst_27185 = (state_27194[(2)]);
var state_27194__$1 = (function (){var statearr_27203 = state_27194;
(statearr_27203[(9)] = inst_27185);

return statearr_27203;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27194__$1,(9),results,inst_27180);
} else {
if((state_val_27195 === (9))){
var inst_27187 = (state_27194[(2)]);
var state_27194__$1 = (function (){var statearr_27204 = state_27194;
(statearr_27204[(10)] = inst_27187);

return statearr_27204;
})();
var statearr_27205_27310 = state_27194__$1;
(statearr_27205_27310[(2)] = null);

(statearr_27205_27310[(1)] = (2));


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
});})(c__26941__auto___27304,jobs,results,process,async))
;
return ((function (switch__26851__auto__,c__26941__auto___27304,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0 = (function (){
var statearr_27206 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27206[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__);

(statearr_27206[(1)] = (1));

return statearr_27206;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1 = (function (state_27194){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_27194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e27207){if((e27207 instanceof Object)){
var ex__26855__auto__ = e27207;
var statearr_27208_27311 = state_27194;
(statearr_27208_27311[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27312 = state_27194;
state_27194 = G__27312;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__ = function(state_27194){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1.call(this,state_27194);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26941__auto___27304,jobs,results,process,async))
})();
var state__26943__auto__ = (function (){var statearr_27209 = f__26942__auto__.call(null);
(statearr_27209[(6)] = c__26941__auto___27304);

return statearr_27209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26943__auto__);
});})(c__26941__auto___27304,jobs,results,process,async))
);


var c__26941__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26941__auto__,jobs,results,process,async){
return (function (){
var f__26942__auto__ = (function (){var switch__26851__auto__ = ((function (c__26941__auto__,jobs,results,process,async){
return (function (state_27247){
var state_val_27248 = (state_27247[(1)]);
if((state_val_27248 === (7))){
var inst_27243 = (state_27247[(2)]);
var state_27247__$1 = state_27247;
var statearr_27249_27313 = state_27247__$1;
(statearr_27249_27313[(2)] = inst_27243);

(statearr_27249_27313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27248 === (20))){
var state_27247__$1 = state_27247;
var statearr_27250_27314 = state_27247__$1;
(statearr_27250_27314[(2)] = null);

(statearr_27250_27314[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27248 === (1))){
var state_27247__$1 = state_27247;
var statearr_27251_27315 = state_27247__$1;
(statearr_27251_27315[(2)] = null);

(statearr_27251_27315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27248 === (4))){
var inst_27212 = (state_27247[(7)]);
var inst_27212__$1 = (state_27247[(2)]);
var inst_27213 = (inst_27212__$1 == null);
var state_27247__$1 = (function (){var statearr_27252 = state_27247;
(statearr_27252[(7)] = inst_27212__$1);

return statearr_27252;
})();
if(cljs.core.truth_(inst_27213)){
var statearr_27253_27316 = state_27247__$1;
(statearr_27253_27316[(1)] = (5));

} else {
var statearr_27254_27317 = state_27247__$1;
(statearr_27254_27317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27248 === (15))){
var inst_27225 = (state_27247[(8)]);
var state_27247__$1 = state_27247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27247__$1,(18),to,inst_27225);
} else {
if((state_val_27248 === (21))){
var inst_27238 = (state_27247[(2)]);
var state_27247__$1 = state_27247;
var statearr_27255_27318 = state_27247__$1;
(statearr_27255_27318[(2)] = inst_27238);

(statearr_27255_27318[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27248 === (13))){
var inst_27240 = (state_27247[(2)]);
var state_27247__$1 = (function (){var statearr_27256 = state_27247;
(statearr_27256[(9)] = inst_27240);

return statearr_27256;
})();
var statearr_27257_27319 = state_27247__$1;
(statearr_27257_27319[(2)] = null);

(statearr_27257_27319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27248 === (6))){
var inst_27212 = (state_27247[(7)]);
var state_27247__$1 = state_27247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27247__$1,(11),inst_27212);
} else {
if((state_val_27248 === (17))){
var inst_27233 = (state_27247[(2)]);
var state_27247__$1 = state_27247;
if(cljs.core.truth_(inst_27233)){
var statearr_27258_27320 = state_27247__$1;
(statearr_27258_27320[(1)] = (19));

} else {
var statearr_27259_27321 = state_27247__$1;
(statearr_27259_27321[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27248 === (3))){
var inst_27245 = (state_27247[(2)]);
var state_27247__$1 = state_27247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27247__$1,inst_27245);
} else {
if((state_val_27248 === (12))){
var inst_27222 = (state_27247[(10)]);
var state_27247__$1 = state_27247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27247__$1,(14),inst_27222);
} else {
if((state_val_27248 === (2))){
var state_27247__$1 = state_27247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27247__$1,(4),results);
} else {
if((state_val_27248 === (19))){
var state_27247__$1 = state_27247;
var statearr_27260_27322 = state_27247__$1;
(statearr_27260_27322[(2)] = null);

(statearr_27260_27322[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27248 === (11))){
var inst_27222 = (state_27247[(2)]);
var state_27247__$1 = (function (){var statearr_27261 = state_27247;
(statearr_27261[(10)] = inst_27222);

return statearr_27261;
})();
var statearr_27262_27323 = state_27247__$1;
(statearr_27262_27323[(2)] = null);

(statearr_27262_27323[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27248 === (9))){
var state_27247__$1 = state_27247;
var statearr_27263_27324 = state_27247__$1;
(statearr_27263_27324[(2)] = null);

(statearr_27263_27324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27248 === (5))){
var state_27247__$1 = state_27247;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27264_27325 = state_27247__$1;
(statearr_27264_27325[(1)] = (8));

} else {
var statearr_27265_27326 = state_27247__$1;
(statearr_27265_27326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27248 === (14))){
var inst_27227 = (state_27247[(11)]);
var inst_27225 = (state_27247[(8)]);
var inst_27225__$1 = (state_27247[(2)]);
var inst_27226 = (inst_27225__$1 == null);
var inst_27227__$1 = cljs.core.not.call(null,inst_27226);
var state_27247__$1 = (function (){var statearr_27266 = state_27247;
(statearr_27266[(11)] = inst_27227__$1);

(statearr_27266[(8)] = inst_27225__$1);

return statearr_27266;
})();
if(inst_27227__$1){
var statearr_27267_27327 = state_27247__$1;
(statearr_27267_27327[(1)] = (15));

} else {
var statearr_27268_27328 = state_27247__$1;
(statearr_27268_27328[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27248 === (16))){
var inst_27227 = (state_27247[(11)]);
var state_27247__$1 = state_27247;
var statearr_27269_27329 = state_27247__$1;
(statearr_27269_27329[(2)] = inst_27227);

(statearr_27269_27329[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27248 === (10))){
var inst_27219 = (state_27247[(2)]);
var state_27247__$1 = state_27247;
var statearr_27270_27330 = state_27247__$1;
(statearr_27270_27330[(2)] = inst_27219);

(statearr_27270_27330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27248 === (18))){
var inst_27230 = (state_27247[(2)]);
var state_27247__$1 = state_27247;
var statearr_27271_27331 = state_27247__$1;
(statearr_27271_27331[(2)] = inst_27230);

(statearr_27271_27331[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27248 === (8))){
var inst_27216 = cljs.core.async.close_BANG_.call(null,to);
var state_27247__$1 = state_27247;
var statearr_27272_27332 = state_27247__$1;
(statearr_27272_27332[(2)] = inst_27216);

(statearr_27272_27332[(1)] = (10));


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
});})(c__26941__auto__,jobs,results,process,async))
;
return ((function (switch__26851__auto__,c__26941__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0 = (function (){
var statearr_27273 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27273[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__);

(statearr_27273[(1)] = (1));

return statearr_27273;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1 = (function (state_27247){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_27247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e27274){if((e27274 instanceof Object)){
var ex__26855__auto__ = e27274;
var statearr_27275_27333 = state_27247;
(statearr_27275_27333[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27334 = state_27247;
state_27247 = G__27334;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__ = function(state_27247){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1.call(this,state_27247);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26941__auto__,jobs,results,process,async))
})();
var state__26943__auto__ = (function (){var statearr_27276 = f__26942__auto__.call(null);
(statearr_27276[(6)] = c__26941__auto__);

return statearr_27276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26943__auto__);
});})(c__26941__auto__,jobs,results,process,async))
);

return c__26941__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__27336 = arguments.length;
switch (G__27336) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__27339 = arguments.length;
switch (G__27339) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__27342 = arguments.length;
switch (G__27342) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26941__auto___27391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26941__auto___27391,tc,fc){
return (function (){
var f__26942__auto__ = (function (){var switch__26851__auto__ = ((function (c__26941__auto___27391,tc,fc){
return (function (state_27368){
var state_val_27369 = (state_27368[(1)]);
if((state_val_27369 === (7))){
var inst_27364 = (state_27368[(2)]);
var state_27368__$1 = state_27368;
var statearr_27370_27392 = state_27368__$1;
(statearr_27370_27392[(2)] = inst_27364);

(statearr_27370_27392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27369 === (1))){
var state_27368__$1 = state_27368;
var statearr_27371_27393 = state_27368__$1;
(statearr_27371_27393[(2)] = null);

(statearr_27371_27393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27369 === (4))){
var inst_27345 = (state_27368[(7)]);
var inst_27345__$1 = (state_27368[(2)]);
var inst_27346 = (inst_27345__$1 == null);
var state_27368__$1 = (function (){var statearr_27372 = state_27368;
(statearr_27372[(7)] = inst_27345__$1);

return statearr_27372;
})();
if(cljs.core.truth_(inst_27346)){
var statearr_27373_27394 = state_27368__$1;
(statearr_27373_27394[(1)] = (5));

} else {
var statearr_27374_27395 = state_27368__$1;
(statearr_27374_27395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27369 === (13))){
var state_27368__$1 = state_27368;
var statearr_27375_27396 = state_27368__$1;
(statearr_27375_27396[(2)] = null);

(statearr_27375_27396[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27369 === (6))){
var inst_27345 = (state_27368[(7)]);
var inst_27351 = p.call(null,inst_27345);
var state_27368__$1 = state_27368;
if(cljs.core.truth_(inst_27351)){
var statearr_27376_27397 = state_27368__$1;
(statearr_27376_27397[(1)] = (9));

} else {
var statearr_27377_27398 = state_27368__$1;
(statearr_27377_27398[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27369 === (3))){
var inst_27366 = (state_27368[(2)]);
var state_27368__$1 = state_27368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27368__$1,inst_27366);
} else {
if((state_val_27369 === (12))){
var state_27368__$1 = state_27368;
var statearr_27378_27399 = state_27368__$1;
(statearr_27378_27399[(2)] = null);

(statearr_27378_27399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27369 === (2))){
var state_27368__$1 = state_27368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27368__$1,(4),ch);
} else {
if((state_val_27369 === (11))){
var inst_27345 = (state_27368[(7)]);
var inst_27355 = (state_27368[(2)]);
var state_27368__$1 = state_27368;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27368__$1,(8),inst_27355,inst_27345);
} else {
if((state_val_27369 === (9))){
var state_27368__$1 = state_27368;
var statearr_27379_27400 = state_27368__$1;
(statearr_27379_27400[(2)] = tc);

(statearr_27379_27400[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27369 === (5))){
var inst_27348 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27349 = cljs.core.async.close_BANG_.call(null,fc);
var state_27368__$1 = (function (){var statearr_27380 = state_27368;
(statearr_27380[(8)] = inst_27348);

return statearr_27380;
})();
var statearr_27381_27401 = state_27368__$1;
(statearr_27381_27401[(2)] = inst_27349);

(statearr_27381_27401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27369 === (14))){
var inst_27362 = (state_27368[(2)]);
var state_27368__$1 = state_27368;
var statearr_27382_27402 = state_27368__$1;
(statearr_27382_27402[(2)] = inst_27362);

(statearr_27382_27402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27369 === (10))){
var state_27368__$1 = state_27368;
var statearr_27383_27403 = state_27368__$1;
(statearr_27383_27403[(2)] = fc);

(statearr_27383_27403[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27369 === (8))){
var inst_27357 = (state_27368[(2)]);
var state_27368__$1 = state_27368;
if(cljs.core.truth_(inst_27357)){
var statearr_27384_27404 = state_27368__$1;
(statearr_27384_27404[(1)] = (12));

} else {
var statearr_27385_27405 = state_27368__$1;
(statearr_27385_27405[(1)] = (13));

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
});})(c__26941__auto___27391,tc,fc))
;
return ((function (switch__26851__auto__,c__26941__auto___27391,tc,fc){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_27386 = [null,null,null,null,null,null,null,null,null];
(statearr_27386[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_27386[(1)] = (1));

return statearr_27386;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_27368){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_27368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e27387){if((e27387 instanceof Object)){
var ex__26855__auto__ = e27387;
var statearr_27388_27406 = state_27368;
(statearr_27388_27406[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27407 = state_27368;
state_27368 = G__27407;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_27368){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_27368);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26941__auto___27391,tc,fc))
})();
var state__26943__auto__ = (function (){var statearr_27389 = f__26942__auto__.call(null);
(statearr_27389[(6)] = c__26941__auto___27391);

return statearr_27389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26943__auto__);
});})(c__26941__auto___27391,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26941__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26941__auto__){
return (function (){
var f__26942__auto__ = (function (){var switch__26851__auto__ = ((function (c__26941__auto__){
return (function (state_27428){
var state_val_27429 = (state_27428[(1)]);
if((state_val_27429 === (7))){
var inst_27424 = (state_27428[(2)]);
var state_27428__$1 = state_27428;
var statearr_27430_27448 = state_27428__$1;
(statearr_27430_27448[(2)] = inst_27424);

(statearr_27430_27448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27429 === (1))){
var inst_27408 = init;
var state_27428__$1 = (function (){var statearr_27431 = state_27428;
(statearr_27431[(7)] = inst_27408);

return statearr_27431;
})();
var statearr_27432_27449 = state_27428__$1;
(statearr_27432_27449[(2)] = null);

(statearr_27432_27449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27429 === (4))){
var inst_27411 = (state_27428[(8)]);
var inst_27411__$1 = (state_27428[(2)]);
var inst_27412 = (inst_27411__$1 == null);
var state_27428__$1 = (function (){var statearr_27433 = state_27428;
(statearr_27433[(8)] = inst_27411__$1);

return statearr_27433;
})();
if(cljs.core.truth_(inst_27412)){
var statearr_27434_27450 = state_27428__$1;
(statearr_27434_27450[(1)] = (5));

} else {
var statearr_27435_27451 = state_27428__$1;
(statearr_27435_27451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27429 === (6))){
var inst_27415 = (state_27428[(9)]);
var inst_27411 = (state_27428[(8)]);
var inst_27408 = (state_27428[(7)]);
var inst_27415__$1 = f.call(null,inst_27408,inst_27411);
var inst_27416 = cljs.core.reduced_QMARK_.call(null,inst_27415__$1);
var state_27428__$1 = (function (){var statearr_27436 = state_27428;
(statearr_27436[(9)] = inst_27415__$1);

return statearr_27436;
})();
if(inst_27416){
var statearr_27437_27452 = state_27428__$1;
(statearr_27437_27452[(1)] = (8));

} else {
var statearr_27438_27453 = state_27428__$1;
(statearr_27438_27453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27429 === (3))){
var inst_27426 = (state_27428[(2)]);
var state_27428__$1 = state_27428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27428__$1,inst_27426);
} else {
if((state_val_27429 === (2))){
var state_27428__$1 = state_27428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27428__$1,(4),ch);
} else {
if((state_val_27429 === (9))){
var inst_27415 = (state_27428[(9)]);
var inst_27408 = inst_27415;
var state_27428__$1 = (function (){var statearr_27439 = state_27428;
(statearr_27439[(7)] = inst_27408);

return statearr_27439;
})();
var statearr_27440_27454 = state_27428__$1;
(statearr_27440_27454[(2)] = null);

(statearr_27440_27454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27429 === (5))){
var inst_27408 = (state_27428[(7)]);
var state_27428__$1 = state_27428;
var statearr_27441_27455 = state_27428__$1;
(statearr_27441_27455[(2)] = inst_27408);

(statearr_27441_27455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27429 === (10))){
var inst_27422 = (state_27428[(2)]);
var state_27428__$1 = state_27428;
var statearr_27442_27456 = state_27428__$1;
(statearr_27442_27456[(2)] = inst_27422);

(statearr_27442_27456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27429 === (8))){
var inst_27415 = (state_27428[(9)]);
var inst_27418 = cljs.core.deref.call(null,inst_27415);
var state_27428__$1 = state_27428;
var statearr_27443_27457 = state_27428__$1;
(statearr_27443_27457[(2)] = inst_27418);

(statearr_27443_27457[(1)] = (10));


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
});})(c__26941__auto__))
;
return ((function (switch__26851__auto__,c__26941__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26852__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26852__auto____0 = (function (){
var statearr_27444 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27444[(0)] = cljs$core$async$reduce_$_state_machine__26852__auto__);

(statearr_27444[(1)] = (1));

return statearr_27444;
});
var cljs$core$async$reduce_$_state_machine__26852__auto____1 = (function (state_27428){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_27428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e27445){if((e27445 instanceof Object)){
var ex__26855__auto__ = e27445;
var statearr_27446_27458 = state_27428;
(statearr_27446_27458[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27459 = state_27428;
state_27428 = G__27459;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26852__auto__ = function(state_27428){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26852__auto____1.call(this,state_27428);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26852__auto____0;
cljs$core$async$reduce_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26852__auto____1;
return cljs$core$async$reduce_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26941__auto__))
})();
var state__26943__auto__ = (function (){var statearr_27447 = f__26942__auto__.call(null);
(statearr_27447[(6)] = c__26941__auto__);

return statearr_27447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26943__auto__);
});})(c__26941__auto__))
);

return c__26941__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26941__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26941__auto__,f__$1){
return (function (){
var f__26942__auto__ = (function (){var switch__26851__auto__ = ((function (c__26941__auto__,f__$1){
return (function (state_27465){
var state_val_27466 = (state_27465[(1)]);
if((state_val_27466 === (1))){
var inst_27460 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27465__$1 = state_27465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27465__$1,(2),inst_27460);
} else {
if((state_val_27466 === (2))){
var inst_27462 = (state_27465[(2)]);
var inst_27463 = f__$1.call(null,inst_27462);
var state_27465__$1 = state_27465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27465__$1,inst_27463);
} else {
return null;
}
}
});})(c__26941__auto__,f__$1))
;
return ((function (switch__26851__auto__,c__26941__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26852__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26852__auto____0 = (function (){
var statearr_27467 = [null,null,null,null,null,null,null];
(statearr_27467[(0)] = cljs$core$async$transduce_$_state_machine__26852__auto__);

(statearr_27467[(1)] = (1));

return statearr_27467;
});
var cljs$core$async$transduce_$_state_machine__26852__auto____1 = (function (state_27465){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_27465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e27468){if((e27468 instanceof Object)){
var ex__26855__auto__ = e27468;
var statearr_27469_27471 = state_27465;
(statearr_27469_27471[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27472 = state_27465;
state_27465 = G__27472;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26852__auto__ = function(state_27465){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26852__auto____1.call(this,state_27465);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26852__auto____0;
cljs$core$async$transduce_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26852__auto____1;
return cljs$core$async$transduce_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26941__auto__,f__$1))
})();
var state__26943__auto__ = (function (){var statearr_27470 = f__26942__auto__.call(null);
(statearr_27470[(6)] = c__26941__auto__);

return statearr_27470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26943__auto__);
});})(c__26941__auto__,f__$1))
);

return c__26941__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__27474 = arguments.length;
switch (G__27474) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26941__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26941__auto__){
return (function (){
var f__26942__auto__ = (function (){var switch__26851__auto__ = ((function (c__26941__auto__){
return (function (state_27499){
var state_val_27500 = (state_27499[(1)]);
if((state_val_27500 === (7))){
var inst_27481 = (state_27499[(2)]);
var state_27499__$1 = state_27499;
var statearr_27501_27522 = state_27499__$1;
(statearr_27501_27522[(2)] = inst_27481);

(statearr_27501_27522[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (1))){
var inst_27475 = cljs.core.seq.call(null,coll);
var inst_27476 = inst_27475;
var state_27499__$1 = (function (){var statearr_27502 = state_27499;
(statearr_27502[(7)] = inst_27476);

return statearr_27502;
})();
var statearr_27503_27523 = state_27499__$1;
(statearr_27503_27523[(2)] = null);

(statearr_27503_27523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (4))){
var inst_27476 = (state_27499[(7)]);
var inst_27479 = cljs.core.first.call(null,inst_27476);
var state_27499__$1 = state_27499;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27499__$1,(7),ch,inst_27479);
} else {
if((state_val_27500 === (13))){
var inst_27493 = (state_27499[(2)]);
var state_27499__$1 = state_27499;
var statearr_27504_27524 = state_27499__$1;
(statearr_27504_27524[(2)] = inst_27493);

(statearr_27504_27524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (6))){
var inst_27484 = (state_27499[(2)]);
var state_27499__$1 = state_27499;
if(cljs.core.truth_(inst_27484)){
var statearr_27505_27525 = state_27499__$1;
(statearr_27505_27525[(1)] = (8));

} else {
var statearr_27506_27526 = state_27499__$1;
(statearr_27506_27526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (3))){
var inst_27497 = (state_27499[(2)]);
var state_27499__$1 = state_27499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27499__$1,inst_27497);
} else {
if((state_val_27500 === (12))){
var state_27499__$1 = state_27499;
var statearr_27507_27527 = state_27499__$1;
(statearr_27507_27527[(2)] = null);

(statearr_27507_27527[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (2))){
var inst_27476 = (state_27499[(7)]);
var state_27499__$1 = state_27499;
if(cljs.core.truth_(inst_27476)){
var statearr_27508_27528 = state_27499__$1;
(statearr_27508_27528[(1)] = (4));

} else {
var statearr_27509_27529 = state_27499__$1;
(statearr_27509_27529[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (11))){
var inst_27490 = cljs.core.async.close_BANG_.call(null,ch);
var state_27499__$1 = state_27499;
var statearr_27510_27530 = state_27499__$1;
(statearr_27510_27530[(2)] = inst_27490);

(statearr_27510_27530[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (9))){
var state_27499__$1 = state_27499;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27511_27531 = state_27499__$1;
(statearr_27511_27531[(1)] = (11));

} else {
var statearr_27512_27532 = state_27499__$1;
(statearr_27512_27532[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (5))){
var inst_27476 = (state_27499[(7)]);
var state_27499__$1 = state_27499;
var statearr_27513_27533 = state_27499__$1;
(statearr_27513_27533[(2)] = inst_27476);

(statearr_27513_27533[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (10))){
var inst_27495 = (state_27499[(2)]);
var state_27499__$1 = state_27499;
var statearr_27514_27534 = state_27499__$1;
(statearr_27514_27534[(2)] = inst_27495);

(statearr_27514_27534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (8))){
var inst_27476 = (state_27499[(7)]);
var inst_27486 = cljs.core.next.call(null,inst_27476);
var inst_27476__$1 = inst_27486;
var state_27499__$1 = (function (){var statearr_27515 = state_27499;
(statearr_27515[(7)] = inst_27476__$1);

return statearr_27515;
})();
var statearr_27516_27535 = state_27499__$1;
(statearr_27516_27535[(2)] = null);

(statearr_27516_27535[(1)] = (2));


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
});})(c__26941__auto__))
;
return ((function (switch__26851__auto__,c__26941__auto__){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_27517 = [null,null,null,null,null,null,null,null];
(statearr_27517[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_27517[(1)] = (1));

return statearr_27517;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_27499){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_27499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e27518){if((e27518 instanceof Object)){
var ex__26855__auto__ = e27518;
var statearr_27519_27536 = state_27499;
(statearr_27519_27536[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27537 = state_27499;
state_27499 = G__27537;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_27499){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_27499);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26941__auto__))
})();
var state__26943__auto__ = (function (){var statearr_27520 = f__26942__auto__.call(null);
(statearr_27520[(6)] = c__26941__auto__);

return statearr_27520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26943__auto__);
});})(c__26941__auto__))
);

return c__26941__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27538 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27538 = (function (ch,cs,meta27539){
this.ch = ch;
this.cs = cs;
this.meta27539 = meta27539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27540,meta27539__$1){
var self__ = this;
var _27540__$1 = this;
return (new cljs.core.async.t_cljs$core$async27538(self__.ch,self__.cs,meta27539__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27538.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27540){
var self__ = this;
var _27540__$1 = this;
return self__.meta27539;
});})(cs))
;

cljs.core.async.t_cljs$core$async27538.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27538.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27538.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27538.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27538.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27538.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27538.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27539","meta27539",-268678905,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27538.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27538";

cljs.core.async.t_cljs$core$async27538.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27538");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27538.
 */
cljs.core.async.__GT_t_cljs$core$async27538 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27538(ch__$1,cs__$1,meta27539){
return (new cljs.core.async.t_cljs$core$async27538(ch__$1,cs__$1,meta27539));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27538(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26941__auto___27760 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26941__auto___27760,cs,m,dchan,dctr,done){
return (function (){
var f__26942__auto__ = (function (){var switch__26851__auto__ = ((function (c__26941__auto___27760,cs,m,dchan,dctr,done){
return (function (state_27675){
var state_val_27676 = (state_27675[(1)]);
if((state_val_27676 === (7))){
var inst_27671 = (state_27675[(2)]);
var state_27675__$1 = state_27675;
var statearr_27677_27761 = state_27675__$1;
(statearr_27677_27761[(2)] = inst_27671);

(statearr_27677_27761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (20))){
var inst_27574 = (state_27675[(7)]);
var inst_27586 = cljs.core.first.call(null,inst_27574);
var inst_27587 = cljs.core.nth.call(null,inst_27586,(0),null);
var inst_27588 = cljs.core.nth.call(null,inst_27586,(1),null);
var state_27675__$1 = (function (){var statearr_27678 = state_27675;
(statearr_27678[(8)] = inst_27587);

return statearr_27678;
})();
if(cljs.core.truth_(inst_27588)){
var statearr_27679_27762 = state_27675__$1;
(statearr_27679_27762[(1)] = (22));

} else {
var statearr_27680_27763 = state_27675__$1;
(statearr_27680_27763[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (27))){
var inst_27623 = (state_27675[(9)]);
var inst_27543 = (state_27675[(10)]);
var inst_27616 = (state_27675[(11)]);
var inst_27618 = (state_27675[(12)]);
var inst_27623__$1 = cljs.core._nth.call(null,inst_27616,inst_27618);
var inst_27624 = cljs.core.async.put_BANG_.call(null,inst_27623__$1,inst_27543,done);
var state_27675__$1 = (function (){var statearr_27681 = state_27675;
(statearr_27681[(9)] = inst_27623__$1);

return statearr_27681;
})();
if(cljs.core.truth_(inst_27624)){
var statearr_27682_27764 = state_27675__$1;
(statearr_27682_27764[(1)] = (30));

} else {
var statearr_27683_27765 = state_27675__$1;
(statearr_27683_27765[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (1))){
var state_27675__$1 = state_27675;
var statearr_27684_27766 = state_27675__$1;
(statearr_27684_27766[(2)] = null);

(statearr_27684_27766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (24))){
var inst_27574 = (state_27675[(7)]);
var inst_27593 = (state_27675[(2)]);
var inst_27594 = cljs.core.next.call(null,inst_27574);
var inst_27552 = inst_27594;
var inst_27553 = null;
var inst_27554 = (0);
var inst_27555 = (0);
var state_27675__$1 = (function (){var statearr_27685 = state_27675;
(statearr_27685[(13)] = inst_27552);

(statearr_27685[(14)] = inst_27593);

(statearr_27685[(15)] = inst_27555);

(statearr_27685[(16)] = inst_27554);

(statearr_27685[(17)] = inst_27553);

return statearr_27685;
})();
var statearr_27686_27767 = state_27675__$1;
(statearr_27686_27767[(2)] = null);

(statearr_27686_27767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (39))){
var state_27675__$1 = state_27675;
var statearr_27690_27768 = state_27675__$1;
(statearr_27690_27768[(2)] = null);

(statearr_27690_27768[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (4))){
var inst_27543 = (state_27675[(10)]);
var inst_27543__$1 = (state_27675[(2)]);
var inst_27544 = (inst_27543__$1 == null);
var state_27675__$1 = (function (){var statearr_27691 = state_27675;
(statearr_27691[(10)] = inst_27543__$1);

return statearr_27691;
})();
if(cljs.core.truth_(inst_27544)){
var statearr_27692_27769 = state_27675__$1;
(statearr_27692_27769[(1)] = (5));

} else {
var statearr_27693_27770 = state_27675__$1;
(statearr_27693_27770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (15))){
var inst_27552 = (state_27675[(13)]);
var inst_27555 = (state_27675[(15)]);
var inst_27554 = (state_27675[(16)]);
var inst_27553 = (state_27675[(17)]);
var inst_27570 = (state_27675[(2)]);
var inst_27571 = (inst_27555 + (1));
var tmp27687 = inst_27552;
var tmp27688 = inst_27554;
var tmp27689 = inst_27553;
var inst_27552__$1 = tmp27687;
var inst_27553__$1 = tmp27689;
var inst_27554__$1 = tmp27688;
var inst_27555__$1 = inst_27571;
var state_27675__$1 = (function (){var statearr_27694 = state_27675;
(statearr_27694[(13)] = inst_27552__$1);

(statearr_27694[(15)] = inst_27555__$1);

(statearr_27694[(18)] = inst_27570);

(statearr_27694[(16)] = inst_27554__$1);

(statearr_27694[(17)] = inst_27553__$1);

return statearr_27694;
})();
var statearr_27695_27771 = state_27675__$1;
(statearr_27695_27771[(2)] = null);

(statearr_27695_27771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (21))){
var inst_27597 = (state_27675[(2)]);
var state_27675__$1 = state_27675;
var statearr_27699_27772 = state_27675__$1;
(statearr_27699_27772[(2)] = inst_27597);

(statearr_27699_27772[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (31))){
var inst_27623 = (state_27675[(9)]);
var inst_27627 = done.call(null,null);
var inst_27628 = cljs.core.async.untap_STAR_.call(null,m,inst_27623);
var state_27675__$1 = (function (){var statearr_27700 = state_27675;
(statearr_27700[(19)] = inst_27627);

return statearr_27700;
})();
var statearr_27701_27773 = state_27675__$1;
(statearr_27701_27773[(2)] = inst_27628);

(statearr_27701_27773[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (32))){
var inst_27617 = (state_27675[(20)]);
var inst_27616 = (state_27675[(11)]);
var inst_27615 = (state_27675[(21)]);
var inst_27618 = (state_27675[(12)]);
var inst_27630 = (state_27675[(2)]);
var inst_27631 = (inst_27618 + (1));
var tmp27696 = inst_27617;
var tmp27697 = inst_27616;
var tmp27698 = inst_27615;
var inst_27615__$1 = tmp27698;
var inst_27616__$1 = tmp27697;
var inst_27617__$1 = tmp27696;
var inst_27618__$1 = inst_27631;
var state_27675__$1 = (function (){var statearr_27702 = state_27675;
(statearr_27702[(20)] = inst_27617__$1);

(statearr_27702[(11)] = inst_27616__$1);

(statearr_27702[(21)] = inst_27615__$1);

(statearr_27702[(12)] = inst_27618__$1);

(statearr_27702[(22)] = inst_27630);

return statearr_27702;
})();
var statearr_27703_27774 = state_27675__$1;
(statearr_27703_27774[(2)] = null);

(statearr_27703_27774[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (40))){
var inst_27643 = (state_27675[(23)]);
var inst_27647 = done.call(null,null);
var inst_27648 = cljs.core.async.untap_STAR_.call(null,m,inst_27643);
var state_27675__$1 = (function (){var statearr_27704 = state_27675;
(statearr_27704[(24)] = inst_27647);

return statearr_27704;
})();
var statearr_27705_27775 = state_27675__$1;
(statearr_27705_27775[(2)] = inst_27648);

(statearr_27705_27775[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (33))){
var inst_27634 = (state_27675[(25)]);
var inst_27636 = cljs.core.chunked_seq_QMARK_.call(null,inst_27634);
var state_27675__$1 = state_27675;
if(inst_27636){
var statearr_27706_27776 = state_27675__$1;
(statearr_27706_27776[(1)] = (36));

} else {
var statearr_27707_27777 = state_27675__$1;
(statearr_27707_27777[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (13))){
var inst_27564 = (state_27675[(26)]);
var inst_27567 = cljs.core.async.close_BANG_.call(null,inst_27564);
var state_27675__$1 = state_27675;
var statearr_27708_27778 = state_27675__$1;
(statearr_27708_27778[(2)] = inst_27567);

(statearr_27708_27778[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (22))){
var inst_27587 = (state_27675[(8)]);
var inst_27590 = cljs.core.async.close_BANG_.call(null,inst_27587);
var state_27675__$1 = state_27675;
var statearr_27709_27779 = state_27675__$1;
(statearr_27709_27779[(2)] = inst_27590);

(statearr_27709_27779[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (36))){
var inst_27634 = (state_27675[(25)]);
var inst_27638 = cljs.core.chunk_first.call(null,inst_27634);
var inst_27639 = cljs.core.chunk_rest.call(null,inst_27634);
var inst_27640 = cljs.core.count.call(null,inst_27638);
var inst_27615 = inst_27639;
var inst_27616 = inst_27638;
var inst_27617 = inst_27640;
var inst_27618 = (0);
var state_27675__$1 = (function (){var statearr_27710 = state_27675;
(statearr_27710[(20)] = inst_27617);

(statearr_27710[(11)] = inst_27616);

(statearr_27710[(21)] = inst_27615);

(statearr_27710[(12)] = inst_27618);

return statearr_27710;
})();
var statearr_27711_27780 = state_27675__$1;
(statearr_27711_27780[(2)] = null);

(statearr_27711_27780[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (41))){
var inst_27634 = (state_27675[(25)]);
var inst_27650 = (state_27675[(2)]);
var inst_27651 = cljs.core.next.call(null,inst_27634);
var inst_27615 = inst_27651;
var inst_27616 = null;
var inst_27617 = (0);
var inst_27618 = (0);
var state_27675__$1 = (function (){var statearr_27712 = state_27675;
(statearr_27712[(20)] = inst_27617);

(statearr_27712[(11)] = inst_27616);

(statearr_27712[(21)] = inst_27615);

(statearr_27712[(27)] = inst_27650);

(statearr_27712[(12)] = inst_27618);

return statearr_27712;
})();
var statearr_27713_27781 = state_27675__$1;
(statearr_27713_27781[(2)] = null);

(statearr_27713_27781[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (43))){
var state_27675__$1 = state_27675;
var statearr_27714_27782 = state_27675__$1;
(statearr_27714_27782[(2)] = null);

(statearr_27714_27782[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (29))){
var inst_27659 = (state_27675[(2)]);
var state_27675__$1 = state_27675;
var statearr_27715_27783 = state_27675__$1;
(statearr_27715_27783[(2)] = inst_27659);

(statearr_27715_27783[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (44))){
var inst_27668 = (state_27675[(2)]);
var state_27675__$1 = (function (){var statearr_27716 = state_27675;
(statearr_27716[(28)] = inst_27668);

return statearr_27716;
})();
var statearr_27717_27784 = state_27675__$1;
(statearr_27717_27784[(2)] = null);

(statearr_27717_27784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (6))){
var inst_27607 = (state_27675[(29)]);
var inst_27606 = cljs.core.deref.call(null,cs);
var inst_27607__$1 = cljs.core.keys.call(null,inst_27606);
var inst_27608 = cljs.core.count.call(null,inst_27607__$1);
var inst_27609 = cljs.core.reset_BANG_.call(null,dctr,inst_27608);
var inst_27614 = cljs.core.seq.call(null,inst_27607__$1);
var inst_27615 = inst_27614;
var inst_27616 = null;
var inst_27617 = (0);
var inst_27618 = (0);
var state_27675__$1 = (function (){var statearr_27718 = state_27675;
(statearr_27718[(20)] = inst_27617);

(statearr_27718[(29)] = inst_27607__$1);

(statearr_27718[(30)] = inst_27609);

(statearr_27718[(11)] = inst_27616);

(statearr_27718[(21)] = inst_27615);

(statearr_27718[(12)] = inst_27618);

return statearr_27718;
})();
var statearr_27719_27785 = state_27675__$1;
(statearr_27719_27785[(2)] = null);

(statearr_27719_27785[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (28))){
var inst_27615 = (state_27675[(21)]);
var inst_27634 = (state_27675[(25)]);
var inst_27634__$1 = cljs.core.seq.call(null,inst_27615);
var state_27675__$1 = (function (){var statearr_27720 = state_27675;
(statearr_27720[(25)] = inst_27634__$1);

return statearr_27720;
})();
if(inst_27634__$1){
var statearr_27721_27786 = state_27675__$1;
(statearr_27721_27786[(1)] = (33));

} else {
var statearr_27722_27787 = state_27675__$1;
(statearr_27722_27787[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (25))){
var inst_27617 = (state_27675[(20)]);
var inst_27618 = (state_27675[(12)]);
var inst_27620 = (inst_27618 < inst_27617);
var inst_27621 = inst_27620;
var state_27675__$1 = state_27675;
if(cljs.core.truth_(inst_27621)){
var statearr_27723_27788 = state_27675__$1;
(statearr_27723_27788[(1)] = (27));

} else {
var statearr_27724_27789 = state_27675__$1;
(statearr_27724_27789[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (34))){
var state_27675__$1 = state_27675;
var statearr_27725_27790 = state_27675__$1;
(statearr_27725_27790[(2)] = null);

(statearr_27725_27790[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (17))){
var state_27675__$1 = state_27675;
var statearr_27726_27791 = state_27675__$1;
(statearr_27726_27791[(2)] = null);

(statearr_27726_27791[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (3))){
var inst_27673 = (state_27675[(2)]);
var state_27675__$1 = state_27675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27675__$1,inst_27673);
} else {
if((state_val_27676 === (12))){
var inst_27602 = (state_27675[(2)]);
var state_27675__$1 = state_27675;
var statearr_27727_27792 = state_27675__$1;
(statearr_27727_27792[(2)] = inst_27602);

(statearr_27727_27792[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (2))){
var state_27675__$1 = state_27675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27675__$1,(4),ch);
} else {
if((state_val_27676 === (23))){
var state_27675__$1 = state_27675;
var statearr_27728_27793 = state_27675__$1;
(statearr_27728_27793[(2)] = null);

(statearr_27728_27793[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (35))){
var inst_27657 = (state_27675[(2)]);
var state_27675__$1 = state_27675;
var statearr_27729_27794 = state_27675__$1;
(statearr_27729_27794[(2)] = inst_27657);

(statearr_27729_27794[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (19))){
var inst_27574 = (state_27675[(7)]);
var inst_27578 = cljs.core.chunk_first.call(null,inst_27574);
var inst_27579 = cljs.core.chunk_rest.call(null,inst_27574);
var inst_27580 = cljs.core.count.call(null,inst_27578);
var inst_27552 = inst_27579;
var inst_27553 = inst_27578;
var inst_27554 = inst_27580;
var inst_27555 = (0);
var state_27675__$1 = (function (){var statearr_27730 = state_27675;
(statearr_27730[(13)] = inst_27552);

(statearr_27730[(15)] = inst_27555);

(statearr_27730[(16)] = inst_27554);

(statearr_27730[(17)] = inst_27553);

return statearr_27730;
})();
var statearr_27731_27795 = state_27675__$1;
(statearr_27731_27795[(2)] = null);

(statearr_27731_27795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (11))){
var inst_27552 = (state_27675[(13)]);
var inst_27574 = (state_27675[(7)]);
var inst_27574__$1 = cljs.core.seq.call(null,inst_27552);
var state_27675__$1 = (function (){var statearr_27732 = state_27675;
(statearr_27732[(7)] = inst_27574__$1);

return statearr_27732;
})();
if(inst_27574__$1){
var statearr_27733_27796 = state_27675__$1;
(statearr_27733_27796[(1)] = (16));

} else {
var statearr_27734_27797 = state_27675__$1;
(statearr_27734_27797[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (9))){
var inst_27604 = (state_27675[(2)]);
var state_27675__$1 = state_27675;
var statearr_27735_27798 = state_27675__$1;
(statearr_27735_27798[(2)] = inst_27604);

(statearr_27735_27798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (5))){
var inst_27550 = cljs.core.deref.call(null,cs);
var inst_27551 = cljs.core.seq.call(null,inst_27550);
var inst_27552 = inst_27551;
var inst_27553 = null;
var inst_27554 = (0);
var inst_27555 = (0);
var state_27675__$1 = (function (){var statearr_27736 = state_27675;
(statearr_27736[(13)] = inst_27552);

(statearr_27736[(15)] = inst_27555);

(statearr_27736[(16)] = inst_27554);

(statearr_27736[(17)] = inst_27553);

return statearr_27736;
})();
var statearr_27737_27799 = state_27675__$1;
(statearr_27737_27799[(2)] = null);

(statearr_27737_27799[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (14))){
var state_27675__$1 = state_27675;
var statearr_27738_27800 = state_27675__$1;
(statearr_27738_27800[(2)] = null);

(statearr_27738_27800[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (45))){
var inst_27665 = (state_27675[(2)]);
var state_27675__$1 = state_27675;
var statearr_27739_27801 = state_27675__$1;
(statearr_27739_27801[(2)] = inst_27665);

(statearr_27739_27801[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (26))){
var inst_27607 = (state_27675[(29)]);
var inst_27661 = (state_27675[(2)]);
var inst_27662 = cljs.core.seq.call(null,inst_27607);
var state_27675__$1 = (function (){var statearr_27740 = state_27675;
(statearr_27740[(31)] = inst_27661);

return statearr_27740;
})();
if(inst_27662){
var statearr_27741_27802 = state_27675__$1;
(statearr_27741_27802[(1)] = (42));

} else {
var statearr_27742_27803 = state_27675__$1;
(statearr_27742_27803[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (16))){
var inst_27574 = (state_27675[(7)]);
var inst_27576 = cljs.core.chunked_seq_QMARK_.call(null,inst_27574);
var state_27675__$1 = state_27675;
if(inst_27576){
var statearr_27743_27804 = state_27675__$1;
(statearr_27743_27804[(1)] = (19));

} else {
var statearr_27744_27805 = state_27675__$1;
(statearr_27744_27805[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (38))){
var inst_27654 = (state_27675[(2)]);
var state_27675__$1 = state_27675;
var statearr_27745_27806 = state_27675__$1;
(statearr_27745_27806[(2)] = inst_27654);

(statearr_27745_27806[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (30))){
var state_27675__$1 = state_27675;
var statearr_27746_27807 = state_27675__$1;
(statearr_27746_27807[(2)] = null);

(statearr_27746_27807[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (10))){
var inst_27555 = (state_27675[(15)]);
var inst_27553 = (state_27675[(17)]);
var inst_27563 = cljs.core._nth.call(null,inst_27553,inst_27555);
var inst_27564 = cljs.core.nth.call(null,inst_27563,(0),null);
var inst_27565 = cljs.core.nth.call(null,inst_27563,(1),null);
var state_27675__$1 = (function (){var statearr_27747 = state_27675;
(statearr_27747[(26)] = inst_27564);

return statearr_27747;
})();
if(cljs.core.truth_(inst_27565)){
var statearr_27748_27808 = state_27675__$1;
(statearr_27748_27808[(1)] = (13));

} else {
var statearr_27749_27809 = state_27675__$1;
(statearr_27749_27809[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (18))){
var inst_27600 = (state_27675[(2)]);
var state_27675__$1 = state_27675;
var statearr_27750_27810 = state_27675__$1;
(statearr_27750_27810[(2)] = inst_27600);

(statearr_27750_27810[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (42))){
var state_27675__$1 = state_27675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27675__$1,(45),dchan);
} else {
if((state_val_27676 === (37))){
var inst_27543 = (state_27675[(10)]);
var inst_27634 = (state_27675[(25)]);
var inst_27643 = (state_27675[(23)]);
var inst_27643__$1 = cljs.core.first.call(null,inst_27634);
var inst_27644 = cljs.core.async.put_BANG_.call(null,inst_27643__$1,inst_27543,done);
var state_27675__$1 = (function (){var statearr_27751 = state_27675;
(statearr_27751[(23)] = inst_27643__$1);

return statearr_27751;
})();
if(cljs.core.truth_(inst_27644)){
var statearr_27752_27811 = state_27675__$1;
(statearr_27752_27811[(1)] = (39));

} else {
var statearr_27753_27812 = state_27675__$1;
(statearr_27753_27812[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (8))){
var inst_27555 = (state_27675[(15)]);
var inst_27554 = (state_27675[(16)]);
var inst_27557 = (inst_27555 < inst_27554);
var inst_27558 = inst_27557;
var state_27675__$1 = state_27675;
if(cljs.core.truth_(inst_27558)){
var statearr_27754_27813 = state_27675__$1;
(statearr_27754_27813[(1)] = (10));

} else {
var statearr_27755_27814 = state_27675__$1;
(statearr_27755_27814[(1)] = (11));

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
});})(c__26941__auto___27760,cs,m,dchan,dctr,done))
;
return ((function (switch__26851__auto__,c__26941__auto___27760,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26852__auto__ = null;
var cljs$core$async$mult_$_state_machine__26852__auto____0 = (function (){
var statearr_27756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27756[(0)] = cljs$core$async$mult_$_state_machine__26852__auto__);

(statearr_27756[(1)] = (1));

return statearr_27756;
});
var cljs$core$async$mult_$_state_machine__26852__auto____1 = (function (state_27675){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_27675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e27757){if((e27757 instanceof Object)){
var ex__26855__auto__ = e27757;
var statearr_27758_27815 = state_27675;
(statearr_27758_27815[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27816 = state_27675;
state_27675 = G__27816;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26852__auto__ = function(state_27675){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26852__auto____1.call(this,state_27675);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26852__auto____0;
cljs$core$async$mult_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26852__auto____1;
return cljs$core$async$mult_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26941__auto___27760,cs,m,dchan,dctr,done))
})();
var state__26943__auto__ = (function (){var statearr_27759 = f__26942__auto__.call(null);
(statearr_27759[(6)] = c__26941__auto___27760);

return statearr_27759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26943__auto__);
});})(c__26941__auto___27760,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__27818 = arguments.length;
switch (G__27818) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27830 = arguments.length;
var i__4500__auto___27831 = (0);
while(true){
if((i__4500__auto___27831 < len__4499__auto___27830)){
args__4502__auto__.push((arguments[i__4500__auto___27831]));

var G__27832 = (i__4500__auto___27831 + (1));
i__4500__auto___27831 = G__27832;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27824){
var map__27825 = p__27824;
var map__27825__$1 = ((((!((map__27825 == null)))?(((((map__27825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27825):map__27825);
var opts = map__27825__$1;
var statearr_27827_27833 = state;
(statearr_27827_27833[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__27825,map__27825__$1,opts){
return (function (val){
var statearr_27828_27834 = state;
(statearr_27828_27834[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27825,map__27825__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_27829_27835 = state;
(statearr_27829_27835[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27820){
var G__27821 = cljs.core.first.call(null,seq27820);
var seq27820__$1 = cljs.core.next.call(null,seq27820);
var G__27822 = cljs.core.first.call(null,seq27820__$1);
var seq27820__$2 = cljs.core.next.call(null,seq27820__$1);
var G__27823 = cljs.core.first.call(null,seq27820__$2);
var seq27820__$3 = cljs.core.next.call(null,seq27820__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27821,G__27822,G__27823,seq27820__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27836 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27836 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta27837){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta27837 = meta27837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27838,meta27837__$1){
var self__ = this;
var _27838__$1 = this;
return (new cljs.core.async.t_cljs$core$async27836(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta27837__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27836.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27838){
var self__ = this;
var _27838__$1 = this;
return self__.meta27837;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27836.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27836.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27836.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27836.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27836.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27836.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27836.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27836.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27836.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta27837","meta27837",530188807,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27836.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27836.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27836";

cljs.core.async.t_cljs$core$async27836.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27836");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27836.
 */
cljs.core.async.__GT_t_cljs$core$async27836 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27836(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27837){
return (new cljs.core.async.t_cljs$core$async27836(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27837));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27836(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26941__auto___28000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26941__auto___28000,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26942__auto__ = (function (){var switch__26851__auto__ = ((function (c__26941__auto___28000,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27940){
var state_val_27941 = (state_27940[(1)]);
if((state_val_27941 === (7))){
var inst_27855 = (state_27940[(2)]);
var state_27940__$1 = state_27940;
var statearr_27942_28001 = state_27940__$1;
(statearr_27942_28001[(2)] = inst_27855);

(statearr_27942_28001[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (20))){
var inst_27867 = (state_27940[(7)]);
var state_27940__$1 = state_27940;
var statearr_27943_28002 = state_27940__$1;
(statearr_27943_28002[(2)] = inst_27867);

(statearr_27943_28002[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (27))){
var state_27940__$1 = state_27940;
var statearr_27944_28003 = state_27940__$1;
(statearr_27944_28003[(2)] = null);

(statearr_27944_28003[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (1))){
var inst_27842 = (state_27940[(8)]);
var inst_27842__$1 = calc_state.call(null);
var inst_27844 = (inst_27842__$1 == null);
var inst_27845 = cljs.core.not.call(null,inst_27844);
var state_27940__$1 = (function (){var statearr_27945 = state_27940;
(statearr_27945[(8)] = inst_27842__$1);

return statearr_27945;
})();
if(inst_27845){
var statearr_27946_28004 = state_27940__$1;
(statearr_27946_28004[(1)] = (2));

} else {
var statearr_27947_28005 = state_27940__$1;
(statearr_27947_28005[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (24))){
var inst_27900 = (state_27940[(9)]);
var inst_27914 = (state_27940[(10)]);
var inst_27891 = (state_27940[(11)]);
var inst_27914__$1 = inst_27891.call(null,inst_27900);
var state_27940__$1 = (function (){var statearr_27948 = state_27940;
(statearr_27948[(10)] = inst_27914__$1);

return statearr_27948;
})();
if(cljs.core.truth_(inst_27914__$1)){
var statearr_27949_28006 = state_27940__$1;
(statearr_27949_28006[(1)] = (29));

} else {
var statearr_27950_28007 = state_27940__$1;
(statearr_27950_28007[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (4))){
var inst_27858 = (state_27940[(2)]);
var state_27940__$1 = state_27940;
if(cljs.core.truth_(inst_27858)){
var statearr_27951_28008 = state_27940__$1;
(statearr_27951_28008[(1)] = (8));

} else {
var statearr_27952_28009 = state_27940__$1;
(statearr_27952_28009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (15))){
var inst_27885 = (state_27940[(2)]);
var state_27940__$1 = state_27940;
if(cljs.core.truth_(inst_27885)){
var statearr_27953_28010 = state_27940__$1;
(statearr_27953_28010[(1)] = (19));

} else {
var statearr_27954_28011 = state_27940__$1;
(statearr_27954_28011[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (21))){
var inst_27890 = (state_27940[(12)]);
var inst_27890__$1 = (state_27940[(2)]);
var inst_27891 = cljs.core.get.call(null,inst_27890__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27892 = cljs.core.get.call(null,inst_27890__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27893 = cljs.core.get.call(null,inst_27890__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27940__$1 = (function (){var statearr_27955 = state_27940;
(statearr_27955[(12)] = inst_27890__$1);

(statearr_27955[(13)] = inst_27892);

(statearr_27955[(11)] = inst_27891);

return statearr_27955;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27940__$1,(22),inst_27893);
} else {
if((state_val_27941 === (31))){
var inst_27922 = (state_27940[(2)]);
var state_27940__$1 = state_27940;
if(cljs.core.truth_(inst_27922)){
var statearr_27956_28012 = state_27940__$1;
(statearr_27956_28012[(1)] = (32));

} else {
var statearr_27957_28013 = state_27940__$1;
(statearr_27957_28013[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (32))){
var inst_27899 = (state_27940[(14)]);
var state_27940__$1 = state_27940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27940__$1,(35),out,inst_27899);
} else {
if((state_val_27941 === (33))){
var inst_27890 = (state_27940[(12)]);
var inst_27867 = inst_27890;
var state_27940__$1 = (function (){var statearr_27958 = state_27940;
(statearr_27958[(7)] = inst_27867);

return statearr_27958;
})();
var statearr_27959_28014 = state_27940__$1;
(statearr_27959_28014[(2)] = null);

(statearr_27959_28014[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (13))){
var inst_27867 = (state_27940[(7)]);
var inst_27874 = inst_27867.cljs$lang$protocol_mask$partition0$;
var inst_27875 = (inst_27874 & (64));
var inst_27876 = inst_27867.cljs$core$ISeq$;
var inst_27877 = (cljs.core.PROTOCOL_SENTINEL === inst_27876);
var inst_27878 = ((inst_27875) || (inst_27877));
var state_27940__$1 = state_27940;
if(cljs.core.truth_(inst_27878)){
var statearr_27960_28015 = state_27940__$1;
(statearr_27960_28015[(1)] = (16));

} else {
var statearr_27961_28016 = state_27940__$1;
(statearr_27961_28016[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (22))){
var inst_27900 = (state_27940[(9)]);
var inst_27899 = (state_27940[(14)]);
var inst_27898 = (state_27940[(2)]);
var inst_27899__$1 = cljs.core.nth.call(null,inst_27898,(0),null);
var inst_27900__$1 = cljs.core.nth.call(null,inst_27898,(1),null);
var inst_27901 = (inst_27899__$1 == null);
var inst_27902 = cljs.core._EQ_.call(null,inst_27900__$1,change);
var inst_27903 = ((inst_27901) || (inst_27902));
var state_27940__$1 = (function (){var statearr_27962 = state_27940;
(statearr_27962[(9)] = inst_27900__$1);

(statearr_27962[(14)] = inst_27899__$1);

return statearr_27962;
})();
if(cljs.core.truth_(inst_27903)){
var statearr_27963_28017 = state_27940__$1;
(statearr_27963_28017[(1)] = (23));

} else {
var statearr_27964_28018 = state_27940__$1;
(statearr_27964_28018[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (36))){
var inst_27890 = (state_27940[(12)]);
var inst_27867 = inst_27890;
var state_27940__$1 = (function (){var statearr_27965 = state_27940;
(statearr_27965[(7)] = inst_27867);

return statearr_27965;
})();
var statearr_27966_28019 = state_27940__$1;
(statearr_27966_28019[(2)] = null);

(statearr_27966_28019[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (29))){
var inst_27914 = (state_27940[(10)]);
var state_27940__$1 = state_27940;
var statearr_27967_28020 = state_27940__$1;
(statearr_27967_28020[(2)] = inst_27914);

(statearr_27967_28020[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (6))){
var state_27940__$1 = state_27940;
var statearr_27968_28021 = state_27940__$1;
(statearr_27968_28021[(2)] = false);

(statearr_27968_28021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (28))){
var inst_27910 = (state_27940[(2)]);
var inst_27911 = calc_state.call(null);
var inst_27867 = inst_27911;
var state_27940__$1 = (function (){var statearr_27969 = state_27940;
(statearr_27969[(7)] = inst_27867);

(statearr_27969[(15)] = inst_27910);

return statearr_27969;
})();
var statearr_27970_28022 = state_27940__$1;
(statearr_27970_28022[(2)] = null);

(statearr_27970_28022[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (25))){
var inst_27936 = (state_27940[(2)]);
var state_27940__$1 = state_27940;
var statearr_27971_28023 = state_27940__$1;
(statearr_27971_28023[(2)] = inst_27936);

(statearr_27971_28023[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (34))){
var inst_27934 = (state_27940[(2)]);
var state_27940__$1 = state_27940;
var statearr_27972_28024 = state_27940__$1;
(statearr_27972_28024[(2)] = inst_27934);

(statearr_27972_28024[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (17))){
var state_27940__$1 = state_27940;
var statearr_27973_28025 = state_27940__$1;
(statearr_27973_28025[(2)] = false);

(statearr_27973_28025[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (3))){
var state_27940__$1 = state_27940;
var statearr_27974_28026 = state_27940__$1;
(statearr_27974_28026[(2)] = false);

(statearr_27974_28026[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (12))){
var inst_27938 = (state_27940[(2)]);
var state_27940__$1 = state_27940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27940__$1,inst_27938);
} else {
if((state_val_27941 === (2))){
var inst_27842 = (state_27940[(8)]);
var inst_27847 = inst_27842.cljs$lang$protocol_mask$partition0$;
var inst_27848 = (inst_27847 & (64));
var inst_27849 = inst_27842.cljs$core$ISeq$;
var inst_27850 = (cljs.core.PROTOCOL_SENTINEL === inst_27849);
var inst_27851 = ((inst_27848) || (inst_27850));
var state_27940__$1 = state_27940;
if(cljs.core.truth_(inst_27851)){
var statearr_27975_28027 = state_27940__$1;
(statearr_27975_28027[(1)] = (5));

} else {
var statearr_27976_28028 = state_27940__$1;
(statearr_27976_28028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (23))){
var inst_27899 = (state_27940[(14)]);
var inst_27905 = (inst_27899 == null);
var state_27940__$1 = state_27940;
if(cljs.core.truth_(inst_27905)){
var statearr_27977_28029 = state_27940__$1;
(statearr_27977_28029[(1)] = (26));

} else {
var statearr_27978_28030 = state_27940__$1;
(statearr_27978_28030[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (35))){
var inst_27925 = (state_27940[(2)]);
var state_27940__$1 = state_27940;
if(cljs.core.truth_(inst_27925)){
var statearr_27979_28031 = state_27940__$1;
(statearr_27979_28031[(1)] = (36));

} else {
var statearr_27980_28032 = state_27940__$1;
(statearr_27980_28032[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (19))){
var inst_27867 = (state_27940[(7)]);
var inst_27887 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27867);
var state_27940__$1 = state_27940;
var statearr_27981_28033 = state_27940__$1;
(statearr_27981_28033[(2)] = inst_27887);

(statearr_27981_28033[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (11))){
var inst_27867 = (state_27940[(7)]);
var inst_27871 = (inst_27867 == null);
var inst_27872 = cljs.core.not.call(null,inst_27871);
var state_27940__$1 = state_27940;
if(inst_27872){
var statearr_27982_28034 = state_27940__$1;
(statearr_27982_28034[(1)] = (13));

} else {
var statearr_27983_28035 = state_27940__$1;
(statearr_27983_28035[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (9))){
var inst_27842 = (state_27940[(8)]);
var state_27940__$1 = state_27940;
var statearr_27984_28036 = state_27940__$1;
(statearr_27984_28036[(2)] = inst_27842);

(statearr_27984_28036[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (5))){
var state_27940__$1 = state_27940;
var statearr_27985_28037 = state_27940__$1;
(statearr_27985_28037[(2)] = true);

(statearr_27985_28037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (14))){
var state_27940__$1 = state_27940;
var statearr_27986_28038 = state_27940__$1;
(statearr_27986_28038[(2)] = false);

(statearr_27986_28038[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (26))){
var inst_27900 = (state_27940[(9)]);
var inst_27907 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27900);
var state_27940__$1 = state_27940;
var statearr_27987_28039 = state_27940__$1;
(statearr_27987_28039[(2)] = inst_27907);

(statearr_27987_28039[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (16))){
var state_27940__$1 = state_27940;
var statearr_27988_28040 = state_27940__$1;
(statearr_27988_28040[(2)] = true);

(statearr_27988_28040[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (38))){
var inst_27930 = (state_27940[(2)]);
var state_27940__$1 = state_27940;
var statearr_27989_28041 = state_27940__$1;
(statearr_27989_28041[(2)] = inst_27930);

(statearr_27989_28041[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (30))){
var inst_27900 = (state_27940[(9)]);
var inst_27892 = (state_27940[(13)]);
var inst_27891 = (state_27940[(11)]);
var inst_27917 = cljs.core.empty_QMARK_.call(null,inst_27891);
var inst_27918 = inst_27892.call(null,inst_27900);
var inst_27919 = cljs.core.not.call(null,inst_27918);
var inst_27920 = ((inst_27917) && (inst_27919));
var state_27940__$1 = state_27940;
var statearr_27990_28042 = state_27940__$1;
(statearr_27990_28042[(2)] = inst_27920);

(statearr_27990_28042[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (10))){
var inst_27842 = (state_27940[(8)]);
var inst_27863 = (state_27940[(2)]);
var inst_27864 = cljs.core.get.call(null,inst_27863,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27865 = cljs.core.get.call(null,inst_27863,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27866 = cljs.core.get.call(null,inst_27863,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27867 = inst_27842;
var state_27940__$1 = (function (){var statearr_27991 = state_27940;
(statearr_27991[(7)] = inst_27867);

(statearr_27991[(16)] = inst_27864);

(statearr_27991[(17)] = inst_27865);

(statearr_27991[(18)] = inst_27866);

return statearr_27991;
})();
var statearr_27992_28043 = state_27940__$1;
(statearr_27992_28043[(2)] = null);

(statearr_27992_28043[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (18))){
var inst_27882 = (state_27940[(2)]);
var state_27940__$1 = state_27940;
var statearr_27993_28044 = state_27940__$1;
(statearr_27993_28044[(2)] = inst_27882);

(statearr_27993_28044[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (37))){
var state_27940__$1 = state_27940;
var statearr_27994_28045 = state_27940__$1;
(statearr_27994_28045[(2)] = null);

(statearr_27994_28045[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (8))){
var inst_27842 = (state_27940[(8)]);
var inst_27860 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27842);
var state_27940__$1 = state_27940;
var statearr_27995_28046 = state_27940__$1;
(statearr_27995_28046[(2)] = inst_27860);

(statearr_27995_28046[(1)] = (10));


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
});})(c__26941__auto___28000,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26851__auto__,c__26941__auto___28000,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26852__auto__ = null;
var cljs$core$async$mix_$_state_machine__26852__auto____0 = (function (){
var statearr_27996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27996[(0)] = cljs$core$async$mix_$_state_machine__26852__auto__);

(statearr_27996[(1)] = (1));

return statearr_27996;
});
var cljs$core$async$mix_$_state_machine__26852__auto____1 = (function (state_27940){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_27940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e27997){if((e27997 instanceof Object)){
var ex__26855__auto__ = e27997;
var statearr_27998_28047 = state_27940;
(statearr_27998_28047[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28048 = state_27940;
state_27940 = G__28048;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26852__auto__ = function(state_27940){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26852__auto____1.call(this,state_27940);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26852__auto____0;
cljs$core$async$mix_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26852__auto____1;
return cljs$core$async$mix_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26941__auto___28000,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26943__auto__ = (function (){var statearr_27999 = f__26942__auto__.call(null);
(statearr_27999[(6)] = c__26941__auto___28000);

return statearr_27999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26943__auto__);
});})(c__26941__auto___28000,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28050 = arguments.length;
switch (G__28050) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__28054 = arguments.length;
switch (G__28054) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__28052_SHARP_){
if(cljs.core.truth_(p1__28052_SHARP_.call(null,topic))){
return p1__28052_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28052_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28055 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28055 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28056){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28056 = meta28056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28057,meta28056__$1){
var self__ = this;
var _28057__$1 = this;
return (new cljs.core.async.t_cljs$core$async28055(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28056__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28055.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28057){
var self__ = this;
var _28057__$1 = this;
return self__.meta28056;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28055.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28055.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28055.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28055.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28055.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28055.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28055.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28055.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28056","meta28056",1417341983,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28055.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28055.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28055";

cljs.core.async.t_cljs$core$async28055.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28055");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28055.
 */
cljs.core.async.__GT_t_cljs$core$async28055 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28055(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28056){
return (new cljs.core.async.t_cljs$core$async28055(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28056));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28055(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26941__auto___28175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26941__auto___28175,mults,ensure_mult,p){
return (function (){
var f__26942__auto__ = (function (){var switch__26851__auto__ = ((function (c__26941__auto___28175,mults,ensure_mult,p){
return (function (state_28129){
var state_val_28130 = (state_28129[(1)]);
if((state_val_28130 === (7))){
var inst_28125 = (state_28129[(2)]);
var state_28129__$1 = state_28129;
var statearr_28131_28176 = state_28129__$1;
(statearr_28131_28176[(2)] = inst_28125);

(statearr_28131_28176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (20))){
var state_28129__$1 = state_28129;
var statearr_28132_28177 = state_28129__$1;
(statearr_28132_28177[(2)] = null);

(statearr_28132_28177[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (1))){
var state_28129__$1 = state_28129;
var statearr_28133_28178 = state_28129__$1;
(statearr_28133_28178[(2)] = null);

(statearr_28133_28178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (24))){
var inst_28108 = (state_28129[(7)]);
var inst_28117 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28108);
var state_28129__$1 = state_28129;
var statearr_28134_28179 = state_28129__$1;
(statearr_28134_28179[(2)] = inst_28117);

(statearr_28134_28179[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (4))){
var inst_28060 = (state_28129[(8)]);
var inst_28060__$1 = (state_28129[(2)]);
var inst_28061 = (inst_28060__$1 == null);
var state_28129__$1 = (function (){var statearr_28135 = state_28129;
(statearr_28135[(8)] = inst_28060__$1);

return statearr_28135;
})();
if(cljs.core.truth_(inst_28061)){
var statearr_28136_28180 = state_28129__$1;
(statearr_28136_28180[(1)] = (5));

} else {
var statearr_28137_28181 = state_28129__$1;
(statearr_28137_28181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (15))){
var inst_28102 = (state_28129[(2)]);
var state_28129__$1 = state_28129;
var statearr_28138_28182 = state_28129__$1;
(statearr_28138_28182[(2)] = inst_28102);

(statearr_28138_28182[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (21))){
var inst_28122 = (state_28129[(2)]);
var state_28129__$1 = (function (){var statearr_28139 = state_28129;
(statearr_28139[(9)] = inst_28122);

return statearr_28139;
})();
var statearr_28140_28183 = state_28129__$1;
(statearr_28140_28183[(2)] = null);

(statearr_28140_28183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (13))){
var inst_28084 = (state_28129[(10)]);
var inst_28086 = cljs.core.chunked_seq_QMARK_.call(null,inst_28084);
var state_28129__$1 = state_28129;
if(inst_28086){
var statearr_28141_28184 = state_28129__$1;
(statearr_28141_28184[(1)] = (16));

} else {
var statearr_28142_28185 = state_28129__$1;
(statearr_28142_28185[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (22))){
var inst_28114 = (state_28129[(2)]);
var state_28129__$1 = state_28129;
if(cljs.core.truth_(inst_28114)){
var statearr_28143_28186 = state_28129__$1;
(statearr_28143_28186[(1)] = (23));

} else {
var statearr_28144_28187 = state_28129__$1;
(statearr_28144_28187[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (6))){
var inst_28110 = (state_28129[(11)]);
var inst_28060 = (state_28129[(8)]);
var inst_28108 = (state_28129[(7)]);
var inst_28108__$1 = topic_fn.call(null,inst_28060);
var inst_28109 = cljs.core.deref.call(null,mults);
var inst_28110__$1 = cljs.core.get.call(null,inst_28109,inst_28108__$1);
var state_28129__$1 = (function (){var statearr_28145 = state_28129;
(statearr_28145[(11)] = inst_28110__$1);

(statearr_28145[(7)] = inst_28108__$1);

return statearr_28145;
})();
if(cljs.core.truth_(inst_28110__$1)){
var statearr_28146_28188 = state_28129__$1;
(statearr_28146_28188[(1)] = (19));

} else {
var statearr_28147_28189 = state_28129__$1;
(statearr_28147_28189[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (25))){
var inst_28119 = (state_28129[(2)]);
var state_28129__$1 = state_28129;
var statearr_28148_28190 = state_28129__$1;
(statearr_28148_28190[(2)] = inst_28119);

(statearr_28148_28190[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (17))){
var inst_28084 = (state_28129[(10)]);
var inst_28093 = cljs.core.first.call(null,inst_28084);
var inst_28094 = cljs.core.async.muxch_STAR_.call(null,inst_28093);
var inst_28095 = cljs.core.async.close_BANG_.call(null,inst_28094);
var inst_28096 = cljs.core.next.call(null,inst_28084);
var inst_28070 = inst_28096;
var inst_28071 = null;
var inst_28072 = (0);
var inst_28073 = (0);
var state_28129__$1 = (function (){var statearr_28149 = state_28129;
(statearr_28149[(12)] = inst_28071);

(statearr_28149[(13)] = inst_28073);

(statearr_28149[(14)] = inst_28095);

(statearr_28149[(15)] = inst_28070);

(statearr_28149[(16)] = inst_28072);

return statearr_28149;
})();
var statearr_28150_28191 = state_28129__$1;
(statearr_28150_28191[(2)] = null);

(statearr_28150_28191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (3))){
var inst_28127 = (state_28129[(2)]);
var state_28129__$1 = state_28129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28129__$1,inst_28127);
} else {
if((state_val_28130 === (12))){
var inst_28104 = (state_28129[(2)]);
var state_28129__$1 = state_28129;
var statearr_28151_28192 = state_28129__$1;
(statearr_28151_28192[(2)] = inst_28104);

(statearr_28151_28192[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (2))){
var state_28129__$1 = state_28129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28129__$1,(4),ch);
} else {
if((state_val_28130 === (23))){
var state_28129__$1 = state_28129;
var statearr_28152_28193 = state_28129__$1;
(statearr_28152_28193[(2)] = null);

(statearr_28152_28193[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (19))){
var inst_28110 = (state_28129[(11)]);
var inst_28060 = (state_28129[(8)]);
var inst_28112 = cljs.core.async.muxch_STAR_.call(null,inst_28110);
var state_28129__$1 = state_28129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28129__$1,(22),inst_28112,inst_28060);
} else {
if((state_val_28130 === (11))){
var inst_28084 = (state_28129[(10)]);
var inst_28070 = (state_28129[(15)]);
var inst_28084__$1 = cljs.core.seq.call(null,inst_28070);
var state_28129__$1 = (function (){var statearr_28153 = state_28129;
(statearr_28153[(10)] = inst_28084__$1);

return statearr_28153;
})();
if(inst_28084__$1){
var statearr_28154_28194 = state_28129__$1;
(statearr_28154_28194[(1)] = (13));

} else {
var statearr_28155_28195 = state_28129__$1;
(statearr_28155_28195[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (9))){
var inst_28106 = (state_28129[(2)]);
var state_28129__$1 = state_28129;
var statearr_28156_28196 = state_28129__$1;
(statearr_28156_28196[(2)] = inst_28106);

(statearr_28156_28196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (5))){
var inst_28067 = cljs.core.deref.call(null,mults);
var inst_28068 = cljs.core.vals.call(null,inst_28067);
var inst_28069 = cljs.core.seq.call(null,inst_28068);
var inst_28070 = inst_28069;
var inst_28071 = null;
var inst_28072 = (0);
var inst_28073 = (0);
var state_28129__$1 = (function (){var statearr_28157 = state_28129;
(statearr_28157[(12)] = inst_28071);

(statearr_28157[(13)] = inst_28073);

(statearr_28157[(15)] = inst_28070);

(statearr_28157[(16)] = inst_28072);

return statearr_28157;
})();
var statearr_28158_28197 = state_28129__$1;
(statearr_28158_28197[(2)] = null);

(statearr_28158_28197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (14))){
var state_28129__$1 = state_28129;
var statearr_28162_28198 = state_28129__$1;
(statearr_28162_28198[(2)] = null);

(statearr_28162_28198[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (16))){
var inst_28084 = (state_28129[(10)]);
var inst_28088 = cljs.core.chunk_first.call(null,inst_28084);
var inst_28089 = cljs.core.chunk_rest.call(null,inst_28084);
var inst_28090 = cljs.core.count.call(null,inst_28088);
var inst_28070 = inst_28089;
var inst_28071 = inst_28088;
var inst_28072 = inst_28090;
var inst_28073 = (0);
var state_28129__$1 = (function (){var statearr_28163 = state_28129;
(statearr_28163[(12)] = inst_28071);

(statearr_28163[(13)] = inst_28073);

(statearr_28163[(15)] = inst_28070);

(statearr_28163[(16)] = inst_28072);

return statearr_28163;
})();
var statearr_28164_28199 = state_28129__$1;
(statearr_28164_28199[(2)] = null);

(statearr_28164_28199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (10))){
var inst_28071 = (state_28129[(12)]);
var inst_28073 = (state_28129[(13)]);
var inst_28070 = (state_28129[(15)]);
var inst_28072 = (state_28129[(16)]);
var inst_28078 = cljs.core._nth.call(null,inst_28071,inst_28073);
var inst_28079 = cljs.core.async.muxch_STAR_.call(null,inst_28078);
var inst_28080 = cljs.core.async.close_BANG_.call(null,inst_28079);
var inst_28081 = (inst_28073 + (1));
var tmp28159 = inst_28071;
var tmp28160 = inst_28070;
var tmp28161 = inst_28072;
var inst_28070__$1 = tmp28160;
var inst_28071__$1 = tmp28159;
var inst_28072__$1 = tmp28161;
var inst_28073__$1 = inst_28081;
var state_28129__$1 = (function (){var statearr_28165 = state_28129;
(statearr_28165[(12)] = inst_28071__$1);

(statearr_28165[(17)] = inst_28080);

(statearr_28165[(13)] = inst_28073__$1);

(statearr_28165[(15)] = inst_28070__$1);

(statearr_28165[(16)] = inst_28072__$1);

return statearr_28165;
})();
var statearr_28166_28200 = state_28129__$1;
(statearr_28166_28200[(2)] = null);

(statearr_28166_28200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (18))){
var inst_28099 = (state_28129[(2)]);
var state_28129__$1 = state_28129;
var statearr_28167_28201 = state_28129__$1;
(statearr_28167_28201[(2)] = inst_28099);

(statearr_28167_28201[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28130 === (8))){
var inst_28073 = (state_28129[(13)]);
var inst_28072 = (state_28129[(16)]);
var inst_28075 = (inst_28073 < inst_28072);
var inst_28076 = inst_28075;
var state_28129__$1 = state_28129;
if(cljs.core.truth_(inst_28076)){
var statearr_28168_28202 = state_28129__$1;
(statearr_28168_28202[(1)] = (10));

} else {
var statearr_28169_28203 = state_28129__$1;
(statearr_28169_28203[(1)] = (11));

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
});})(c__26941__auto___28175,mults,ensure_mult,p))
;
return ((function (switch__26851__auto__,c__26941__auto___28175,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_28170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28170[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_28170[(1)] = (1));

return statearr_28170;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_28129){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_28129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e28171){if((e28171 instanceof Object)){
var ex__26855__auto__ = e28171;
var statearr_28172_28204 = state_28129;
(statearr_28172_28204[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28205 = state_28129;
state_28129 = G__28205;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_28129){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_28129);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26941__auto___28175,mults,ensure_mult,p))
})();
var state__26943__auto__ = (function (){var statearr_28173 = f__26942__auto__.call(null);
(statearr_28173[(6)] = c__26941__auto___28175);

return statearr_28173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26943__auto__);
});})(c__26941__auto___28175,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__28207 = arguments.length;
switch (G__28207) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__28210 = arguments.length;
switch (G__28210) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__28213 = arguments.length;
switch (G__28213) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__26941__auto___28280 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26941__auto___28280,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26942__auto__ = (function (){var switch__26851__auto__ = ((function (c__26941__auto___28280,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28252){
var state_val_28253 = (state_28252[(1)]);
if((state_val_28253 === (7))){
var state_28252__$1 = state_28252;
var statearr_28254_28281 = state_28252__$1;
(statearr_28254_28281[(2)] = null);

(statearr_28254_28281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (1))){
var state_28252__$1 = state_28252;
var statearr_28255_28282 = state_28252__$1;
(statearr_28255_28282[(2)] = null);

(statearr_28255_28282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (4))){
var inst_28216 = (state_28252[(7)]);
var inst_28218 = (inst_28216 < cnt);
var state_28252__$1 = state_28252;
if(cljs.core.truth_(inst_28218)){
var statearr_28256_28283 = state_28252__$1;
(statearr_28256_28283[(1)] = (6));

} else {
var statearr_28257_28284 = state_28252__$1;
(statearr_28257_28284[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (15))){
var inst_28248 = (state_28252[(2)]);
var state_28252__$1 = state_28252;
var statearr_28258_28285 = state_28252__$1;
(statearr_28258_28285[(2)] = inst_28248);

(statearr_28258_28285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (13))){
var inst_28241 = cljs.core.async.close_BANG_.call(null,out);
var state_28252__$1 = state_28252;
var statearr_28259_28286 = state_28252__$1;
(statearr_28259_28286[(2)] = inst_28241);

(statearr_28259_28286[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (6))){
var state_28252__$1 = state_28252;
var statearr_28260_28287 = state_28252__$1;
(statearr_28260_28287[(2)] = null);

(statearr_28260_28287[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (3))){
var inst_28250 = (state_28252[(2)]);
var state_28252__$1 = state_28252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28252__$1,inst_28250);
} else {
if((state_val_28253 === (12))){
var inst_28238 = (state_28252[(8)]);
var inst_28238__$1 = (state_28252[(2)]);
var inst_28239 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28238__$1);
var state_28252__$1 = (function (){var statearr_28261 = state_28252;
(statearr_28261[(8)] = inst_28238__$1);

return statearr_28261;
})();
if(cljs.core.truth_(inst_28239)){
var statearr_28262_28288 = state_28252__$1;
(statearr_28262_28288[(1)] = (13));

} else {
var statearr_28263_28289 = state_28252__$1;
(statearr_28263_28289[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (2))){
var inst_28215 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28216 = (0);
var state_28252__$1 = (function (){var statearr_28264 = state_28252;
(statearr_28264[(7)] = inst_28216);

(statearr_28264[(9)] = inst_28215);

return statearr_28264;
})();
var statearr_28265_28290 = state_28252__$1;
(statearr_28265_28290[(2)] = null);

(statearr_28265_28290[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (11))){
var inst_28216 = (state_28252[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28252,(10),Object,null,(9));
var inst_28225 = chs__$1.call(null,inst_28216);
var inst_28226 = done.call(null,inst_28216);
var inst_28227 = cljs.core.async.take_BANG_.call(null,inst_28225,inst_28226);
var state_28252__$1 = state_28252;
var statearr_28266_28291 = state_28252__$1;
(statearr_28266_28291[(2)] = inst_28227);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28252__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (9))){
var inst_28216 = (state_28252[(7)]);
var inst_28229 = (state_28252[(2)]);
var inst_28230 = (inst_28216 + (1));
var inst_28216__$1 = inst_28230;
var state_28252__$1 = (function (){var statearr_28267 = state_28252;
(statearr_28267[(10)] = inst_28229);

(statearr_28267[(7)] = inst_28216__$1);

return statearr_28267;
})();
var statearr_28268_28292 = state_28252__$1;
(statearr_28268_28292[(2)] = null);

(statearr_28268_28292[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (5))){
var inst_28236 = (state_28252[(2)]);
var state_28252__$1 = (function (){var statearr_28269 = state_28252;
(statearr_28269[(11)] = inst_28236);

return statearr_28269;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28252__$1,(12),dchan);
} else {
if((state_val_28253 === (14))){
var inst_28238 = (state_28252[(8)]);
var inst_28243 = cljs.core.apply.call(null,f,inst_28238);
var state_28252__$1 = state_28252;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28252__$1,(16),out,inst_28243);
} else {
if((state_val_28253 === (16))){
var inst_28245 = (state_28252[(2)]);
var state_28252__$1 = (function (){var statearr_28270 = state_28252;
(statearr_28270[(12)] = inst_28245);

return statearr_28270;
})();
var statearr_28271_28293 = state_28252__$1;
(statearr_28271_28293[(2)] = null);

(statearr_28271_28293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (10))){
var inst_28220 = (state_28252[(2)]);
var inst_28221 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28252__$1 = (function (){var statearr_28272 = state_28252;
(statearr_28272[(13)] = inst_28220);

return statearr_28272;
})();
var statearr_28273_28294 = state_28252__$1;
(statearr_28273_28294[(2)] = inst_28221);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28252__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (8))){
var inst_28234 = (state_28252[(2)]);
var state_28252__$1 = state_28252;
var statearr_28274_28295 = state_28252__$1;
(statearr_28274_28295[(2)] = inst_28234);

(statearr_28274_28295[(1)] = (5));


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
});})(c__26941__auto___28280,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26851__auto__,c__26941__auto___28280,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_28275 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28275[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_28275[(1)] = (1));

return statearr_28275;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_28252){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_28252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e28276){if((e28276 instanceof Object)){
var ex__26855__auto__ = e28276;
var statearr_28277_28296 = state_28252;
(statearr_28277_28296[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28297 = state_28252;
state_28252 = G__28297;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_28252){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_28252);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26941__auto___28280,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26943__auto__ = (function (){var statearr_28278 = f__26942__auto__.call(null);
(statearr_28278[(6)] = c__26941__auto___28280);

return statearr_28278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26943__auto__);
});})(c__26941__auto___28280,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__28300 = arguments.length;
switch (G__28300) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26941__auto___28354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26941__auto___28354,out){
return (function (){
var f__26942__auto__ = (function (){var switch__26851__auto__ = ((function (c__26941__auto___28354,out){
return (function (state_28332){
var state_val_28333 = (state_28332[(1)]);
if((state_val_28333 === (7))){
var inst_28312 = (state_28332[(7)]);
var inst_28311 = (state_28332[(8)]);
var inst_28311__$1 = (state_28332[(2)]);
var inst_28312__$1 = cljs.core.nth.call(null,inst_28311__$1,(0),null);
var inst_28313 = cljs.core.nth.call(null,inst_28311__$1,(1),null);
var inst_28314 = (inst_28312__$1 == null);
var state_28332__$1 = (function (){var statearr_28334 = state_28332;
(statearr_28334[(7)] = inst_28312__$1);

(statearr_28334[(8)] = inst_28311__$1);

(statearr_28334[(9)] = inst_28313);

return statearr_28334;
})();
if(cljs.core.truth_(inst_28314)){
var statearr_28335_28355 = state_28332__$1;
(statearr_28335_28355[(1)] = (8));

} else {
var statearr_28336_28356 = state_28332__$1;
(statearr_28336_28356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28333 === (1))){
var inst_28301 = cljs.core.vec.call(null,chs);
var inst_28302 = inst_28301;
var state_28332__$1 = (function (){var statearr_28337 = state_28332;
(statearr_28337[(10)] = inst_28302);

return statearr_28337;
})();
var statearr_28338_28357 = state_28332__$1;
(statearr_28338_28357[(2)] = null);

(statearr_28338_28357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28333 === (4))){
var inst_28302 = (state_28332[(10)]);
var state_28332__$1 = state_28332;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28332__$1,(7),inst_28302);
} else {
if((state_val_28333 === (6))){
var inst_28328 = (state_28332[(2)]);
var state_28332__$1 = state_28332;
var statearr_28339_28358 = state_28332__$1;
(statearr_28339_28358[(2)] = inst_28328);

(statearr_28339_28358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28333 === (3))){
var inst_28330 = (state_28332[(2)]);
var state_28332__$1 = state_28332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28332__$1,inst_28330);
} else {
if((state_val_28333 === (2))){
var inst_28302 = (state_28332[(10)]);
var inst_28304 = cljs.core.count.call(null,inst_28302);
var inst_28305 = (inst_28304 > (0));
var state_28332__$1 = state_28332;
if(cljs.core.truth_(inst_28305)){
var statearr_28341_28359 = state_28332__$1;
(statearr_28341_28359[(1)] = (4));

} else {
var statearr_28342_28360 = state_28332__$1;
(statearr_28342_28360[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28333 === (11))){
var inst_28302 = (state_28332[(10)]);
var inst_28321 = (state_28332[(2)]);
var tmp28340 = inst_28302;
var inst_28302__$1 = tmp28340;
var state_28332__$1 = (function (){var statearr_28343 = state_28332;
(statearr_28343[(11)] = inst_28321);

(statearr_28343[(10)] = inst_28302__$1);

return statearr_28343;
})();
var statearr_28344_28361 = state_28332__$1;
(statearr_28344_28361[(2)] = null);

(statearr_28344_28361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28333 === (9))){
var inst_28312 = (state_28332[(7)]);
var state_28332__$1 = state_28332;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28332__$1,(11),out,inst_28312);
} else {
if((state_val_28333 === (5))){
var inst_28326 = cljs.core.async.close_BANG_.call(null,out);
var state_28332__$1 = state_28332;
var statearr_28345_28362 = state_28332__$1;
(statearr_28345_28362[(2)] = inst_28326);

(statearr_28345_28362[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28333 === (10))){
var inst_28324 = (state_28332[(2)]);
var state_28332__$1 = state_28332;
var statearr_28346_28363 = state_28332__$1;
(statearr_28346_28363[(2)] = inst_28324);

(statearr_28346_28363[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28333 === (8))){
var inst_28312 = (state_28332[(7)]);
var inst_28302 = (state_28332[(10)]);
var inst_28311 = (state_28332[(8)]);
var inst_28313 = (state_28332[(9)]);
var inst_28316 = (function (){var cs = inst_28302;
var vec__28307 = inst_28311;
var v = inst_28312;
var c = inst_28313;
return ((function (cs,vec__28307,v,c,inst_28312,inst_28302,inst_28311,inst_28313,state_val_28333,c__26941__auto___28354,out){
return (function (p1__28298_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28298_SHARP_);
});
;})(cs,vec__28307,v,c,inst_28312,inst_28302,inst_28311,inst_28313,state_val_28333,c__26941__auto___28354,out))
})();
var inst_28317 = cljs.core.filterv.call(null,inst_28316,inst_28302);
var inst_28302__$1 = inst_28317;
var state_28332__$1 = (function (){var statearr_28347 = state_28332;
(statearr_28347[(10)] = inst_28302__$1);

return statearr_28347;
})();
var statearr_28348_28364 = state_28332__$1;
(statearr_28348_28364[(2)] = null);

(statearr_28348_28364[(1)] = (2));


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
});})(c__26941__auto___28354,out))
;
return ((function (switch__26851__auto__,c__26941__auto___28354,out){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_28349 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28349[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_28349[(1)] = (1));

return statearr_28349;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_28332){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_28332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e28350){if((e28350 instanceof Object)){
var ex__26855__auto__ = e28350;
var statearr_28351_28365 = state_28332;
(statearr_28351_28365[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28366 = state_28332;
state_28332 = G__28366;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_28332){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_28332);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26941__auto___28354,out))
})();
var state__26943__auto__ = (function (){var statearr_28352 = f__26942__auto__.call(null);
(statearr_28352[(6)] = c__26941__auto___28354);

return statearr_28352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26943__auto__);
});})(c__26941__auto___28354,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__28368 = arguments.length;
switch (G__28368) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26941__auto___28413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26941__auto___28413,out){
return (function (){
var f__26942__auto__ = (function (){var switch__26851__auto__ = ((function (c__26941__auto___28413,out){
return (function (state_28392){
var state_val_28393 = (state_28392[(1)]);
if((state_val_28393 === (7))){
var inst_28374 = (state_28392[(7)]);
var inst_28374__$1 = (state_28392[(2)]);
var inst_28375 = (inst_28374__$1 == null);
var inst_28376 = cljs.core.not.call(null,inst_28375);
var state_28392__$1 = (function (){var statearr_28394 = state_28392;
(statearr_28394[(7)] = inst_28374__$1);

return statearr_28394;
})();
if(inst_28376){
var statearr_28395_28414 = state_28392__$1;
(statearr_28395_28414[(1)] = (8));

} else {
var statearr_28396_28415 = state_28392__$1;
(statearr_28396_28415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (1))){
var inst_28369 = (0);
var state_28392__$1 = (function (){var statearr_28397 = state_28392;
(statearr_28397[(8)] = inst_28369);

return statearr_28397;
})();
var statearr_28398_28416 = state_28392__$1;
(statearr_28398_28416[(2)] = null);

(statearr_28398_28416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (4))){
var state_28392__$1 = state_28392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28392__$1,(7),ch);
} else {
if((state_val_28393 === (6))){
var inst_28387 = (state_28392[(2)]);
var state_28392__$1 = state_28392;
var statearr_28399_28417 = state_28392__$1;
(statearr_28399_28417[(2)] = inst_28387);

(statearr_28399_28417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (3))){
var inst_28389 = (state_28392[(2)]);
var inst_28390 = cljs.core.async.close_BANG_.call(null,out);
var state_28392__$1 = (function (){var statearr_28400 = state_28392;
(statearr_28400[(9)] = inst_28389);

return statearr_28400;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28392__$1,inst_28390);
} else {
if((state_val_28393 === (2))){
var inst_28369 = (state_28392[(8)]);
var inst_28371 = (inst_28369 < n);
var state_28392__$1 = state_28392;
if(cljs.core.truth_(inst_28371)){
var statearr_28401_28418 = state_28392__$1;
(statearr_28401_28418[(1)] = (4));

} else {
var statearr_28402_28419 = state_28392__$1;
(statearr_28402_28419[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (11))){
var inst_28369 = (state_28392[(8)]);
var inst_28379 = (state_28392[(2)]);
var inst_28380 = (inst_28369 + (1));
var inst_28369__$1 = inst_28380;
var state_28392__$1 = (function (){var statearr_28403 = state_28392;
(statearr_28403[(10)] = inst_28379);

(statearr_28403[(8)] = inst_28369__$1);

return statearr_28403;
})();
var statearr_28404_28420 = state_28392__$1;
(statearr_28404_28420[(2)] = null);

(statearr_28404_28420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (9))){
var state_28392__$1 = state_28392;
var statearr_28405_28421 = state_28392__$1;
(statearr_28405_28421[(2)] = null);

(statearr_28405_28421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (5))){
var state_28392__$1 = state_28392;
var statearr_28406_28422 = state_28392__$1;
(statearr_28406_28422[(2)] = null);

(statearr_28406_28422[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (10))){
var inst_28384 = (state_28392[(2)]);
var state_28392__$1 = state_28392;
var statearr_28407_28423 = state_28392__$1;
(statearr_28407_28423[(2)] = inst_28384);

(statearr_28407_28423[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (8))){
var inst_28374 = (state_28392[(7)]);
var state_28392__$1 = state_28392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28392__$1,(11),out,inst_28374);
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
});})(c__26941__auto___28413,out))
;
return ((function (switch__26851__auto__,c__26941__auto___28413,out){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_28408 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28408[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_28408[(1)] = (1));

return statearr_28408;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_28392){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_28392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e28409){if((e28409 instanceof Object)){
var ex__26855__auto__ = e28409;
var statearr_28410_28424 = state_28392;
(statearr_28410_28424[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28425 = state_28392;
state_28392 = G__28425;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_28392){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_28392);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26941__auto___28413,out))
})();
var state__26943__auto__ = (function (){var statearr_28411 = f__26942__auto__.call(null);
(statearr_28411[(6)] = c__26941__auto___28413);

return statearr_28411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26943__auto__);
});})(c__26941__auto___28413,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28427 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28427 = (function (f,ch,meta28428){
this.f = f;
this.ch = ch;
this.meta28428 = meta28428;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28429,meta28428__$1){
var self__ = this;
var _28429__$1 = this;
return (new cljs.core.async.t_cljs$core$async28427(self__.f,self__.ch,meta28428__$1));
});

cljs.core.async.t_cljs$core$async28427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28429){
var self__ = this;
var _28429__$1 = this;
return self__.meta28428;
});

cljs.core.async.t_cljs$core$async28427.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28427.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28427.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28427.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28427.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28430 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28430 = (function (f,ch,meta28428,_,fn1,meta28431){
this.f = f;
this.ch = ch;
this.meta28428 = meta28428;
this._ = _;
this.fn1 = fn1;
this.meta28431 = meta28431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28432,meta28431__$1){
var self__ = this;
var _28432__$1 = this;
return (new cljs.core.async.t_cljs$core$async28430(self__.f,self__.ch,self__.meta28428,self__._,self__.fn1,meta28431__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28430.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28432){
var self__ = this;
var _28432__$1 = this;
return self__.meta28431;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28430.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28430.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28430.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28430.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28426_SHARP_){
return f1.call(null,(((p1__28426_SHARP_ == null))?null:self__.f.call(null,p1__28426_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28430.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28428","meta28428",1606882337,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28427","cljs.core.async/t_cljs$core$async28427",-1914162726,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28431","meta28431",2071603261,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28430.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28430.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28430";

cljs.core.async.t_cljs$core$async28430.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28430");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28430.
 */
cljs.core.async.__GT_t_cljs$core$async28430 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28430(f__$1,ch__$1,meta28428__$1,___$2,fn1__$1,meta28431){
return (new cljs.core.async.t_cljs$core$async28430(f__$1,ch__$1,meta28428__$1,___$2,fn1__$1,meta28431));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28430(self__.f,self__.ch,self__.meta28428,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28427.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28427.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28427.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28428","meta28428",1606882337,null)], null);
});

cljs.core.async.t_cljs$core$async28427.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28427.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28427";

cljs.core.async.t_cljs$core$async28427.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28427");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28427.
 */
cljs.core.async.__GT_t_cljs$core$async28427 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28427(f__$1,ch__$1,meta28428){
return (new cljs.core.async.t_cljs$core$async28427(f__$1,ch__$1,meta28428));
});

}

return (new cljs.core.async.t_cljs$core$async28427(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28433 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28433 = (function (f,ch,meta28434){
this.f = f;
this.ch = ch;
this.meta28434 = meta28434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28435,meta28434__$1){
var self__ = this;
var _28435__$1 = this;
return (new cljs.core.async.t_cljs$core$async28433(self__.f,self__.ch,meta28434__$1));
});

cljs.core.async.t_cljs$core$async28433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28435){
var self__ = this;
var _28435__$1 = this;
return self__.meta28434;
});

cljs.core.async.t_cljs$core$async28433.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28433.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28433.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28433.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28433.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28433.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28433.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28434","meta28434",58064888,null)], null);
});

cljs.core.async.t_cljs$core$async28433.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28433.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28433";

cljs.core.async.t_cljs$core$async28433.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28433");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28433.
 */
cljs.core.async.__GT_t_cljs$core$async28433 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28433(f__$1,ch__$1,meta28434){
return (new cljs.core.async.t_cljs$core$async28433(f__$1,ch__$1,meta28434));
});

}

return (new cljs.core.async.t_cljs$core$async28433(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28436 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28436 = (function (p,ch,meta28437){
this.p = p;
this.ch = ch;
this.meta28437 = meta28437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28438,meta28437__$1){
var self__ = this;
var _28438__$1 = this;
return (new cljs.core.async.t_cljs$core$async28436(self__.p,self__.ch,meta28437__$1));
});

cljs.core.async.t_cljs$core$async28436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28438){
var self__ = this;
var _28438__$1 = this;
return self__.meta28437;
});

cljs.core.async.t_cljs$core$async28436.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28436.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28436.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28436.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28436.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28436.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28436.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28437","meta28437",1515167435,null)], null);
});

cljs.core.async.t_cljs$core$async28436.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28436";

cljs.core.async.t_cljs$core$async28436.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28436");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28436.
 */
cljs.core.async.__GT_t_cljs$core$async28436 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28436(p__$1,ch__$1,meta28437){
return (new cljs.core.async.t_cljs$core$async28436(p__$1,ch__$1,meta28437));
});

}

return (new cljs.core.async.t_cljs$core$async28436(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__28440 = arguments.length;
switch (G__28440) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26941__auto___28480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26941__auto___28480,out){
return (function (){
var f__26942__auto__ = (function (){var switch__26851__auto__ = ((function (c__26941__auto___28480,out){
return (function (state_28461){
var state_val_28462 = (state_28461[(1)]);
if((state_val_28462 === (7))){
var inst_28457 = (state_28461[(2)]);
var state_28461__$1 = state_28461;
var statearr_28463_28481 = state_28461__$1;
(statearr_28463_28481[(2)] = inst_28457);

(statearr_28463_28481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (1))){
var state_28461__$1 = state_28461;
var statearr_28464_28482 = state_28461__$1;
(statearr_28464_28482[(2)] = null);

(statearr_28464_28482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (4))){
var inst_28443 = (state_28461[(7)]);
var inst_28443__$1 = (state_28461[(2)]);
var inst_28444 = (inst_28443__$1 == null);
var state_28461__$1 = (function (){var statearr_28465 = state_28461;
(statearr_28465[(7)] = inst_28443__$1);

return statearr_28465;
})();
if(cljs.core.truth_(inst_28444)){
var statearr_28466_28483 = state_28461__$1;
(statearr_28466_28483[(1)] = (5));

} else {
var statearr_28467_28484 = state_28461__$1;
(statearr_28467_28484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (6))){
var inst_28443 = (state_28461[(7)]);
var inst_28448 = p.call(null,inst_28443);
var state_28461__$1 = state_28461;
if(cljs.core.truth_(inst_28448)){
var statearr_28468_28485 = state_28461__$1;
(statearr_28468_28485[(1)] = (8));

} else {
var statearr_28469_28486 = state_28461__$1;
(statearr_28469_28486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (3))){
var inst_28459 = (state_28461[(2)]);
var state_28461__$1 = state_28461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28461__$1,inst_28459);
} else {
if((state_val_28462 === (2))){
var state_28461__$1 = state_28461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28461__$1,(4),ch);
} else {
if((state_val_28462 === (11))){
var inst_28451 = (state_28461[(2)]);
var state_28461__$1 = state_28461;
var statearr_28470_28487 = state_28461__$1;
(statearr_28470_28487[(2)] = inst_28451);

(statearr_28470_28487[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (9))){
var state_28461__$1 = state_28461;
var statearr_28471_28488 = state_28461__$1;
(statearr_28471_28488[(2)] = null);

(statearr_28471_28488[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (5))){
var inst_28446 = cljs.core.async.close_BANG_.call(null,out);
var state_28461__$1 = state_28461;
var statearr_28472_28489 = state_28461__$1;
(statearr_28472_28489[(2)] = inst_28446);

(statearr_28472_28489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (10))){
var inst_28454 = (state_28461[(2)]);
var state_28461__$1 = (function (){var statearr_28473 = state_28461;
(statearr_28473[(8)] = inst_28454);

return statearr_28473;
})();
var statearr_28474_28490 = state_28461__$1;
(statearr_28474_28490[(2)] = null);

(statearr_28474_28490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (8))){
var inst_28443 = (state_28461[(7)]);
var state_28461__$1 = state_28461;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28461__$1,(11),out,inst_28443);
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
});})(c__26941__auto___28480,out))
;
return ((function (switch__26851__auto__,c__26941__auto___28480,out){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_28475 = [null,null,null,null,null,null,null,null,null];
(statearr_28475[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_28475[(1)] = (1));

return statearr_28475;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_28461){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_28461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e28476){if((e28476 instanceof Object)){
var ex__26855__auto__ = e28476;
var statearr_28477_28491 = state_28461;
(statearr_28477_28491[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28492 = state_28461;
state_28461 = G__28492;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_28461){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_28461);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26941__auto___28480,out))
})();
var state__26943__auto__ = (function (){var statearr_28478 = f__26942__auto__.call(null);
(statearr_28478[(6)] = c__26941__auto___28480);

return statearr_28478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26943__auto__);
});})(c__26941__auto___28480,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28494 = arguments.length;
switch (G__28494) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26941__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26941__auto__){
return (function (){
var f__26942__auto__ = (function (){var switch__26851__auto__ = ((function (c__26941__auto__){
return (function (state_28557){
var state_val_28558 = (state_28557[(1)]);
if((state_val_28558 === (7))){
var inst_28553 = (state_28557[(2)]);
var state_28557__$1 = state_28557;
var statearr_28559_28597 = state_28557__$1;
(statearr_28559_28597[(2)] = inst_28553);

(statearr_28559_28597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (20))){
var inst_28523 = (state_28557[(7)]);
var inst_28534 = (state_28557[(2)]);
var inst_28535 = cljs.core.next.call(null,inst_28523);
var inst_28509 = inst_28535;
var inst_28510 = null;
var inst_28511 = (0);
var inst_28512 = (0);
var state_28557__$1 = (function (){var statearr_28560 = state_28557;
(statearr_28560[(8)] = inst_28509);

(statearr_28560[(9)] = inst_28512);

(statearr_28560[(10)] = inst_28534);

(statearr_28560[(11)] = inst_28510);

(statearr_28560[(12)] = inst_28511);

return statearr_28560;
})();
var statearr_28561_28598 = state_28557__$1;
(statearr_28561_28598[(2)] = null);

(statearr_28561_28598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (1))){
var state_28557__$1 = state_28557;
var statearr_28562_28599 = state_28557__$1;
(statearr_28562_28599[(2)] = null);

(statearr_28562_28599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (4))){
var inst_28498 = (state_28557[(13)]);
var inst_28498__$1 = (state_28557[(2)]);
var inst_28499 = (inst_28498__$1 == null);
var state_28557__$1 = (function (){var statearr_28563 = state_28557;
(statearr_28563[(13)] = inst_28498__$1);

return statearr_28563;
})();
if(cljs.core.truth_(inst_28499)){
var statearr_28564_28600 = state_28557__$1;
(statearr_28564_28600[(1)] = (5));

} else {
var statearr_28565_28601 = state_28557__$1;
(statearr_28565_28601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (15))){
var state_28557__$1 = state_28557;
var statearr_28569_28602 = state_28557__$1;
(statearr_28569_28602[(2)] = null);

(statearr_28569_28602[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (21))){
var state_28557__$1 = state_28557;
var statearr_28570_28603 = state_28557__$1;
(statearr_28570_28603[(2)] = null);

(statearr_28570_28603[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (13))){
var inst_28509 = (state_28557[(8)]);
var inst_28512 = (state_28557[(9)]);
var inst_28510 = (state_28557[(11)]);
var inst_28511 = (state_28557[(12)]);
var inst_28519 = (state_28557[(2)]);
var inst_28520 = (inst_28512 + (1));
var tmp28566 = inst_28509;
var tmp28567 = inst_28510;
var tmp28568 = inst_28511;
var inst_28509__$1 = tmp28566;
var inst_28510__$1 = tmp28567;
var inst_28511__$1 = tmp28568;
var inst_28512__$1 = inst_28520;
var state_28557__$1 = (function (){var statearr_28571 = state_28557;
(statearr_28571[(8)] = inst_28509__$1);

(statearr_28571[(9)] = inst_28512__$1);

(statearr_28571[(11)] = inst_28510__$1);

(statearr_28571[(14)] = inst_28519);

(statearr_28571[(12)] = inst_28511__$1);

return statearr_28571;
})();
var statearr_28572_28604 = state_28557__$1;
(statearr_28572_28604[(2)] = null);

(statearr_28572_28604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (22))){
var state_28557__$1 = state_28557;
var statearr_28573_28605 = state_28557__$1;
(statearr_28573_28605[(2)] = null);

(statearr_28573_28605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (6))){
var inst_28498 = (state_28557[(13)]);
var inst_28507 = f.call(null,inst_28498);
var inst_28508 = cljs.core.seq.call(null,inst_28507);
var inst_28509 = inst_28508;
var inst_28510 = null;
var inst_28511 = (0);
var inst_28512 = (0);
var state_28557__$1 = (function (){var statearr_28574 = state_28557;
(statearr_28574[(8)] = inst_28509);

(statearr_28574[(9)] = inst_28512);

(statearr_28574[(11)] = inst_28510);

(statearr_28574[(12)] = inst_28511);

return statearr_28574;
})();
var statearr_28575_28606 = state_28557__$1;
(statearr_28575_28606[(2)] = null);

(statearr_28575_28606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (17))){
var inst_28523 = (state_28557[(7)]);
var inst_28527 = cljs.core.chunk_first.call(null,inst_28523);
var inst_28528 = cljs.core.chunk_rest.call(null,inst_28523);
var inst_28529 = cljs.core.count.call(null,inst_28527);
var inst_28509 = inst_28528;
var inst_28510 = inst_28527;
var inst_28511 = inst_28529;
var inst_28512 = (0);
var state_28557__$1 = (function (){var statearr_28576 = state_28557;
(statearr_28576[(8)] = inst_28509);

(statearr_28576[(9)] = inst_28512);

(statearr_28576[(11)] = inst_28510);

(statearr_28576[(12)] = inst_28511);

return statearr_28576;
})();
var statearr_28577_28607 = state_28557__$1;
(statearr_28577_28607[(2)] = null);

(statearr_28577_28607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (3))){
var inst_28555 = (state_28557[(2)]);
var state_28557__$1 = state_28557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28557__$1,inst_28555);
} else {
if((state_val_28558 === (12))){
var inst_28543 = (state_28557[(2)]);
var state_28557__$1 = state_28557;
var statearr_28578_28608 = state_28557__$1;
(statearr_28578_28608[(2)] = inst_28543);

(statearr_28578_28608[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (2))){
var state_28557__$1 = state_28557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28557__$1,(4),in$);
} else {
if((state_val_28558 === (23))){
var inst_28551 = (state_28557[(2)]);
var state_28557__$1 = state_28557;
var statearr_28579_28609 = state_28557__$1;
(statearr_28579_28609[(2)] = inst_28551);

(statearr_28579_28609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (19))){
var inst_28538 = (state_28557[(2)]);
var state_28557__$1 = state_28557;
var statearr_28580_28610 = state_28557__$1;
(statearr_28580_28610[(2)] = inst_28538);

(statearr_28580_28610[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (11))){
var inst_28509 = (state_28557[(8)]);
var inst_28523 = (state_28557[(7)]);
var inst_28523__$1 = cljs.core.seq.call(null,inst_28509);
var state_28557__$1 = (function (){var statearr_28581 = state_28557;
(statearr_28581[(7)] = inst_28523__$1);

return statearr_28581;
})();
if(inst_28523__$1){
var statearr_28582_28611 = state_28557__$1;
(statearr_28582_28611[(1)] = (14));

} else {
var statearr_28583_28612 = state_28557__$1;
(statearr_28583_28612[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (9))){
var inst_28545 = (state_28557[(2)]);
var inst_28546 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28557__$1 = (function (){var statearr_28584 = state_28557;
(statearr_28584[(15)] = inst_28545);

return statearr_28584;
})();
if(cljs.core.truth_(inst_28546)){
var statearr_28585_28613 = state_28557__$1;
(statearr_28585_28613[(1)] = (21));

} else {
var statearr_28586_28614 = state_28557__$1;
(statearr_28586_28614[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (5))){
var inst_28501 = cljs.core.async.close_BANG_.call(null,out);
var state_28557__$1 = state_28557;
var statearr_28587_28615 = state_28557__$1;
(statearr_28587_28615[(2)] = inst_28501);

(statearr_28587_28615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (14))){
var inst_28523 = (state_28557[(7)]);
var inst_28525 = cljs.core.chunked_seq_QMARK_.call(null,inst_28523);
var state_28557__$1 = state_28557;
if(inst_28525){
var statearr_28588_28616 = state_28557__$1;
(statearr_28588_28616[(1)] = (17));

} else {
var statearr_28589_28617 = state_28557__$1;
(statearr_28589_28617[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (16))){
var inst_28541 = (state_28557[(2)]);
var state_28557__$1 = state_28557;
var statearr_28590_28618 = state_28557__$1;
(statearr_28590_28618[(2)] = inst_28541);

(statearr_28590_28618[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (10))){
var inst_28512 = (state_28557[(9)]);
var inst_28510 = (state_28557[(11)]);
var inst_28517 = cljs.core._nth.call(null,inst_28510,inst_28512);
var state_28557__$1 = state_28557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28557__$1,(13),out,inst_28517);
} else {
if((state_val_28558 === (18))){
var inst_28523 = (state_28557[(7)]);
var inst_28532 = cljs.core.first.call(null,inst_28523);
var state_28557__$1 = state_28557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28557__$1,(20),out,inst_28532);
} else {
if((state_val_28558 === (8))){
var inst_28512 = (state_28557[(9)]);
var inst_28511 = (state_28557[(12)]);
var inst_28514 = (inst_28512 < inst_28511);
var inst_28515 = inst_28514;
var state_28557__$1 = state_28557;
if(cljs.core.truth_(inst_28515)){
var statearr_28591_28619 = state_28557__$1;
(statearr_28591_28619[(1)] = (10));

} else {
var statearr_28592_28620 = state_28557__$1;
(statearr_28592_28620[(1)] = (11));

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
});})(c__26941__auto__))
;
return ((function (switch__26851__auto__,c__26941__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26852__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26852__auto____0 = (function (){
var statearr_28593 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28593[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26852__auto__);

(statearr_28593[(1)] = (1));

return statearr_28593;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26852__auto____1 = (function (state_28557){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_28557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e28594){if((e28594 instanceof Object)){
var ex__26855__auto__ = e28594;
var statearr_28595_28621 = state_28557;
(statearr_28595_28621[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28622 = state_28557;
state_28557 = G__28622;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26852__auto__ = function(state_28557){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26852__auto____1.call(this,state_28557);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26852__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26852__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26941__auto__))
})();
var state__26943__auto__ = (function (){var statearr_28596 = f__26942__auto__.call(null);
(statearr_28596[(6)] = c__26941__auto__);

return statearr_28596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26943__auto__);
});})(c__26941__auto__))
);

return c__26941__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28624 = arguments.length;
switch (G__28624) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__28627 = arguments.length;
switch (G__28627) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__28630 = arguments.length;
switch (G__28630) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26941__auto___28677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26941__auto___28677,out){
return (function (){
var f__26942__auto__ = (function (){var switch__26851__auto__ = ((function (c__26941__auto___28677,out){
return (function (state_28654){
var state_val_28655 = (state_28654[(1)]);
if((state_val_28655 === (7))){
var inst_28649 = (state_28654[(2)]);
var state_28654__$1 = state_28654;
var statearr_28656_28678 = state_28654__$1;
(statearr_28656_28678[(2)] = inst_28649);

(statearr_28656_28678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28655 === (1))){
var inst_28631 = null;
var state_28654__$1 = (function (){var statearr_28657 = state_28654;
(statearr_28657[(7)] = inst_28631);

return statearr_28657;
})();
var statearr_28658_28679 = state_28654__$1;
(statearr_28658_28679[(2)] = null);

(statearr_28658_28679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28655 === (4))){
var inst_28634 = (state_28654[(8)]);
var inst_28634__$1 = (state_28654[(2)]);
var inst_28635 = (inst_28634__$1 == null);
var inst_28636 = cljs.core.not.call(null,inst_28635);
var state_28654__$1 = (function (){var statearr_28659 = state_28654;
(statearr_28659[(8)] = inst_28634__$1);

return statearr_28659;
})();
if(inst_28636){
var statearr_28660_28680 = state_28654__$1;
(statearr_28660_28680[(1)] = (5));

} else {
var statearr_28661_28681 = state_28654__$1;
(statearr_28661_28681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28655 === (6))){
var state_28654__$1 = state_28654;
var statearr_28662_28682 = state_28654__$1;
(statearr_28662_28682[(2)] = null);

(statearr_28662_28682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28655 === (3))){
var inst_28651 = (state_28654[(2)]);
var inst_28652 = cljs.core.async.close_BANG_.call(null,out);
var state_28654__$1 = (function (){var statearr_28663 = state_28654;
(statearr_28663[(9)] = inst_28651);

return statearr_28663;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28654__$1,inst_28652);
} else {
if((state_val_28655 === (2))){
var state_28654__$1 = state_28654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28654__$1,(4),ch);
} else {
if((state_val_28655 === (11))){
var inst_28634 = (state_28654[(8)]);
var inst_28643 = (state_28654[(2)]);
var inst_28631 = inst_28634;
var state_28654__$1 = (function (){var statearr_28664 = state_28654;
(statearr_28664[(7)] = inst_28631);

(statearr_28664[(10)] = inst_28643);

return statearr_28664;
})();
var statearr_28665_28683 = state_28654__$1;
(statearr_28665_28683[(2)] = null);

(statearr_28665_28683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28655 === (9))){
var inst_28634 = (state_28654[(8)]);
var state_28654__$1 = state_28654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28654__$1,(11),out,inst_28634);
} else {
if((state_val_28655 === (5))){
var inst_28631 = (state_28654[(7)]);
var inst_28634 = (state_28654[(8)]);
var inst_28638 = cljs.core._EQ_.call(null,inst_28634,inst_28631);
var state_28654__$1 = state_28654;
if(inst_28638){
var statearr_28667_28684 = state_28654__$1;
(statearr_28667_28684[(1)] = (8));

} else {
var statearr_28668_28685 = state_28654__$1;
(statearr_28668_28685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28655 === (10))){
var inst_28646 = (state_28654[(2)]);
var state_28654__$1 = state_28654;
var statearr_28669_28686 = state_28654__$1;
(statearr_28669_28686[(2)] = inst_28646);

(statearr_28669_28686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28655 === (8))){
var inst_28631 = (state_28654[(7)]);
var tmp28666 = inst_28631;
var inst_28631__$1 = tmp28666;
var state_28654__$1 = (function (){var statearr_28670 = state_28654;
(statearr_28670[(7)] = inst_28631__$1);

return statearr_28670;
})();
var statearr_28671_28687 = state_28654__$1;
(statearr_28671_28687[(2)] = null);

(statearr_28671_28687[(1)] = (2));


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
});})(c__26941__auto___28677,out))
;
return ((function (switch__26851__auto__,c__26941__auto___28677,out){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_28672 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28672[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_28672[(1)] = (1));

return statearr_28672;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_28654){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_28654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e28673){if((e28673 instanceof Object)){
var ex__26855__auto__ = e28673;
var statearr_28674_28688 = state_28654;
(statearr_28674_28688[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28689 = state_28654;
state_28654 = G__28689;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_28654){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_28654);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26941__auto___28677,out))
})();
var state__26943__auto__ = (function (){var statearr_28675 = f__26942__auto__.call(null);
(statearr_28675[(6)] = c__26941__auto___28677);

return statearr_28675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26943__auto__);
});})(c__26941__auto___28677,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28691 = arguments.length;
switch (G__28691) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26941__auto___28757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26941__auto___28757,out){
return (function (){
var f__26942__auto__ = (function (){var switch__26851__auto__ = ((function (c__26941__auto___28757,out){
return (function (state_28729){
var state_val_28730 = (state_28729[(1)]);
if((state_val_28730 === (7))){
var inst_28725 = (state_28729[(2)]);
var state_28729__$1 = state_28729;
var statearr_28731_28758 = state_28729__$1;
(statearr_28731_28758[(2)] = inst_28725);

(statearr_28731_28758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28730 === (1))){
var inst_28692 = (new Array(n));
var inst_28693 = inst_28692;
var inst_28694 = (0);
var state_28729__$1 = (function (){var statearr_28732 = state_28729;
(statearr_28732[(7)] = inst_28694);

(statearr_28732[(8)] = inst_28693);

return statearr_28732;
})();
var statearr_28733_28759 = state_28729__$1;
(statearr_28733_28759[(2)] = null);

(statearr_28733_28759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28730 === (4))){
var inst_28697 = (state_28729[(9)]);
var inst_28697__$1 = (state_28729[(2)]);
var inst_28698 = (inst_28697__$1 == null);
var inst_28699 = cljs.core.not.call(null,inst_28698);
var state_28729__$1 = (function (){var statearr_28734 = state_28729;
(statearr_28734[(9)] = inst_28697__$1);

return statearr_28734;
})();
if(inst_28699){
var statearr_28735_28760 = state_28729__$1;
(statearr_28735_28760[(1)] = (5));

} else {
var statearr_28736_28761 = state_28729__$1;
(statearr_28736_28761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28730 === (15))){
var inst_28719 = (state_28729[(2)]);
var state_28729__$1 = state_28729;
var statearr_28737_28762 = state_28729__$1;
(statearr_28737_28762[(2)] = inst_28719);

(statearr_28737_28762[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28730 === (13))){
var state_28729__$1 = state_28729;
var statearr_28738_28763 = state_28729__$1;
(statearr_28738_28763[(2)] = null);

(statearr_28738_28763[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28730 === (6))){
var inst_28694 = (state_28729[(7)]);
var inst_28715 = (inst_28694 > (0));
var state_28729__$1 = state_28729;
if(cljs.core.truth_(inst_28715)){
var statearr_28739_28764 = state_28729__$1;
(statearr_28739_28764[(1)] = (12));

} else {
var statearr_28740_28765 = state_28729__$1;
(statearr_28740_28765[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28730 === (3))){
var inst_28727 = (state_28729[(2)]);
var state_28729__$1 = state_28729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28729__$1,inst_28727);
} else {
if((state_val_28730 === (12))){
var inst_28693 = (state_28729[(8)]);
var inst_28717 = cljs.core.vec.call(null,inst_28693);
var state_28729__$1 = state_28729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28729__$1,(15),out,inst_28717);
} else {
if((state_val_28730 === (2))){
var state_28729__$1 = state_28729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28729__$1,(4),ch);
} else {
if((state_val_28730 === (11))){
var inst_28709 = (state_28729[(2)]);
var inst_28710 = (new Array(n));
var inst_28693 = inst_28710;
var inst_28694 = (0);
var state_28729__$1 = (function (){var statearr_28741 = state_28729;
(statearr_28741[(10)] = inst_28709);

(statearr_28741[(7)] = inst_28694);

(statearr_28741[(8)] = inst_28693);

return statearr_28741;
})();
var statearr_28742_28766 = state_28729__$1;
(statearr_28742_28766[(2)] = null);

(statearr_28742_28766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28730 === (9))){
var inst_28693 = (state_28729[(8)]);
var inst_28707 = cljs.core.vec.call(null,inst_28693);
var state_28729__$1 = state_28729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28729__$1,(11),out,inst_28707);
} else {
if((state_val_28730 === (5))){
var inst_28702 = (state_28729[(11)]);
var inst_28694 = (state_28729[(7)]);
var inst_28697 = (state_28729[(9)]);
var inst_28693 = (state_28729[(8)]);
var inst_28701 = (inst_28693[inst_28694] = inst_28697);
var inst_28702__$1 = (inst_28694 + (1));
var inst_28703 = (inst_28702__$1 < n);
var state_28729__$1 = (function (){var statearr_28743 = state_28729;
(statearr_28743[(11)] = inst_28702__$1);

(statearr_28743[(12)] = inst_28701);

return statearr_28743;
})();
if(cljs.core.truth_(inst_28703)){
var statearr_28744_28767 = state_28729__$1;
(statearr_28744_28767[(1)] = (8));

} else {
var statearr_28745_28768 = state_28729__$1;
(statearr_28745_28768[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28730 === (14))){
var inst_28722 = (state_28729[(2)]);
var inst_28723 = cljs.core.async.close_BANG_.call(null,out);
var state_28729__$1 = (function (){var statearr_28747 = state_28729;
(statearr_28747[(13)] = inst_28722);

return statearr_28747;
})();
var statearr_28748_28769 = state_28729__$1;
(statearr_28748_28769[(2)] = inst_28723);

(statearr_28748_28769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28730 === (10))){
var inst_28713 = (state_28729[(2)]);
var state_28729__$1 = state_28729;
var statearr_28749_28770 = state_28729__$1;
(statearr_28749_28770[(2)] = inst_28713);

(statearr_28749_28770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28730 === (8))){
var inst_28702 = (state_28729[(11)]);
var inst_28693 = (state_28729[(8)]);
var tmp28746 = inst_28693;
var inst_28693__$1 = tmp28746;
var inst_28694 = inst_28702;
var state_28729__$1 = (function (){var statearr_28750 = state_28729;
(statearr_28750[(7)] = inst_28694);

(statearr_28750[(8)] = inst_28693__$1);

return statearr_28750;
})();
var statearr_28751_28771 = state_28729__$1;
(statearr_28751_28771[(2)] = null);

(statearr_28751_28771[(1)] = (2));


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
});})(c__26941__auto___28757,out))
;
return ((function (switch__26851__auto__,c__26941__auto___28757,out){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_28752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28752[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_28752[(1)] = (1));

return statearr_28752;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_28729){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_28729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e28753){if((e28753 instanceof Object)){
var ex__26855__auto__ = e28753;
var statearr_28754_28772 = state_28729;
(statearr_28754_28772[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28773 = state_28729;
state_28729 = G__28773;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_28729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_28729);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26941__auto___28757,out))
})();
var state__26943__auto__ = (function (){var statearr_28755 = f__26942__auto__.call(null);
(statearr_28755[(6)] = c__26941__auto___28757);

return statearr_28755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26943__auto__);
});})(c__26941__auto___28757,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28775 = arguments.length;
switch (G__28775) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26941__auto___28845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26941__auto___28845,out){
return (function (){
var f__26942__auto__ = (function (){var switch__26851__auto__ = ((function (c__26941__auto___28845,out){
return (function (state_28817){
var state_val_28818 = (state_28817[(1)]);
if((state_val_28818 === (7))){
var inst_28813 = (state_28817[(2)]);
var state_28817__$1 = state_28817;
var statearr_28819_28846 = state_28817__$1;
(statearr_28819_28846[(2)] = inst_28813);

(statearr_28819_28846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (1))){
var inst_28776 = [];
var inst_28777 = inst_28776;
var inst_28778 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28817__$1 = (function (){var statearr_28820 = state_28817;
(statearr_28820[(7)] = inst_28777);

(statearr_28820[(8)] = inst_28778);

return statearr_28820;
})();
var statearr_28821_28847 = state_28817__$1;
(statearr_28821_28847[(2)] = null);

(statearr_28821_28847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (4))){
var inst_28781 = (state_28817[(9)]);
var inst_28781__$1 = (state_28817[(2)]);
var inst_28782 = (inst_28781__$1 == null);
var inst_28783 = cljs.core.not.call(null,inst_28782);
var state_28817__$1 = (function (){var statearr_28822 = state_28817;
(statearr_28822[(9)] = inst_28781__$1);

return statearr_28822;
})();
if(inst_28783){
var statearr_28823_28848 = state_28817__$1;
(statearr_28823_28848[(1)] = (5));

} else {
var statearr_28824_28849 = state_28817__$1;
(statearr_28824_28849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (15))){
var inst_28807 = (state_28817[(2)]);
var state_28817__$1 = state_28817;
var statearr_28825_28850 = state_28817__$1;
(statearr_28825_28850[(2)] = inst_28807);

(statearr_28825_28850[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (13))){
var state_28817__$1 = state_28817;
var statearr_28826_28851 = state_28817__$1;
(statearr_28826_28851[(2)] = null);

(statearr_28826_28851[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (6))){
var inst_28777 = (state_28817[(7)]);
var inst_28802 = inst_28777.length;
var inst_28803 = (inst_28802 > (0));
var state_28817__$1 = state_28817;
if(cljs.core.truth_(inst_28803)){
var statearr_28827_28852 = state_28817__$1;
(statearr_28827_28852[(1)] = (12));

} else {
var statearr_28828_28853 = state_28817__$1;
(statearr_28828_28853[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (3))){
var inst_28815 = (state_28817[(2)]);
var state_28817__$1 = state_28817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28817__$1,inst_28815);
} else {
if((state_val_28818 === (12))){
var inst_28777 = (state_28817[(7)]);
var inst_28805 = cljs.core.vec.call(null,inst_28777);
var state_28817__$1 = state_28817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28817__$1,(15),out,inst_28805);
} else {
if((state_val_28818 === (2))){
var state_28817__$1 = state_28817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28817__$1,(4),ch);
} else {
if((state_val_28818 === (11))){
var inst_28785 = (state_28817[(10)]);
var inst_28781 = (state_28817[(9)]);
var inst_28795 = (state_28817[(2)]);
var inst_28796 = [];
var inst_28797 = inst_28796.push(inst_28781);
var inst_28777 = inst_28796;
var inst_28778 = inst_28785;
var state_28817__$1 = (function (){var statearr_28829 = state_28817;
(statearr_28829[(11)] = inst_28795);

(statearr_28829[(7)] = inst_28777);

(statearr_28829[(12)] = inst_28797);

(statearr_28829[(8)] = inst_28778);

return statearr_28829;
})();
var statearr_28830_28854 = state_28817__$1;
(statearr_28830_28854[(2)] = null);

(statearr_28830_28854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (9))){
var inst_28777 = (state_28817[(7)]);
var inst_28793 = cljs.core.vec.call(null,inst_28777);
var state_28817__$1 = state_28817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28817__$1,(11),out,inst_28793);
} else {
if((state_val_28818 === (5))){
var inst_28785 = (state_28817[(10)]);
var inst_28778 = (state_28817[(8)]);
var inst_28781 = (state_28817[(9)]);
var inst_28785__$1 = f.call(null,inst_28781);
var inst_28786 = cljs.core._EQ_.call(null,inst_28785__$1,inst_28778);
var inst_28787 = cljs.core.keyword_identical_QMARK_.call(null,inst_28778,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28788 = ((inst_28786) || (inst_28787));
var state_28817__$1 = (function (){var statearr_28831 = state_28817;
(statearr_28831[(10)] = inst_28785__$1);

return statearr_28831;
})();
if(cljs.core.truth_(inst_28788)){
var statearr_28832_28855 = state_28817__$1;
(statearr_28832_28855[(1)] = (8));

} else {
var statearr_28833_28856 = state_28817__$1;
(statearr_28833_28856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (14))){
var inst_28810 = (state_28817[(2)]);
var inst_28811 = cljs.core.async.close_BANG_.call(null,out);
var state_28817__$1 = (function (){var statearr_28835 = state_28817;
(statearr_28835[(13)] = inst_28810);

return statearr_28835;
})();
var statearr_28836_28857 = state_28817__$1;
(statearr_28836_28857[(2)] = inst_28811);

(statearr_28836_28857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (10))){
var inst_28800 = (state_28817[(2)]);
var state_28817__$1 = state_28817;
var statearr_28837_28858 = state_28817__$1;
(statearr_28837_28858[(2)] = inst_28800);

(statearr_28837_28858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (8))){
var inst_28777 = (state_28817[(7)]);
var inst_28785 = (state_28817[(10)]);
var inst_28781 = (state_28817[(9)]);
var inst_28790 = inst_28777.push(inst_28781);
var tmp28834 = inst_28777;
var inst_28777__$1 = tmp28834;
var inst_28778 = inst_28785;
var state_28817__$1 = (function (){var statearr_28838 = state_28817;
(statearr_28838[(14)] = inst_28790);

(statearr_28838[(7)] = inst_28777__$1);

(statearr_28838[(8)] = inst_28778);

return statearr_28838;
})();
var statearr_28839_28859 = state_28817__$1;
(statearr_28839_28859[(2)] = null);

(statearr_28839_28859[(1)] = (2));


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
});})(c__26941__auto___28845,out))
;
return ((function (switch__26851__auto__,c__26941__auto___28845,out){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_28840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28840[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_28840[(1)] = (1));

return statearr_28840;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_28817){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_28817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e28841){if((e28841 instanceof Object)){
var ex__26855__auto__ = e28841;
var statearr_28842_28860 = state_28817;
(statearr_28842_28860[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28861 = state_28817;
state_28817 = G__28861;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_28817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_28817);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26941__auto___28845,out))
})();
var state__26943__auto__ = (function (){var statearr_28843 = f__26942__auto__.call(null);
(statearr_28843[(6)] = c__26941__auto___28845);

return statearr_28843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26943__auto__);
});})(c__26941__auto___28845,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1542151519247
