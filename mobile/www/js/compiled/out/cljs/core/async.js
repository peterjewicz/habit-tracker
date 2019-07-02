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
var G__34509 = arguments.length;
switch (G__34509) {
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
if(typeof cljs.core.async.t_cljs$core$async34510 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34510 = (function (f,blockable,meta34511){
this.f = f;
this.blockable = blockable;
this.meta34511 = meta34511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34512,meta34511__$1){
var self__ = this;
var _34512__$1 = this;
return (new cljs.core.async.t_cljs$core$async34510(self__.f,self__.blockable,meta34511__$1));
});

cljs.core.async.t_cljs$core$async34510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34512){
var self__ = this;
var _34512__$1 = this;
return self__.meta34511;
});

cljs.core.async.t_cljs$core$async34510.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34510.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34510.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34510.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34510.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34511","meta34511",-877458517,null)], null);
});

cljs.core.async.t_cljs$core$async34510.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34510.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34510";

cljs.core.async.t_cljs$core$async34510.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async34510");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34510.
 */
cljs.core.async.__GT_t_cljs$core$async34510 = (function cljs$core$async$__GT_t_cljs$core$async34510(f__$1,blockable__$1,meta34511){
return (new cljs.core.async.t_cljs$core$async34510(f__$1,blockable__$1,meta34511));
});

}

return (new cljs.core.async.t_cljs$core$async34510(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34516 = arguments.length;
switch (G__34516) {
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
var G__34519 = arguments.length;
switch (G__34519) {
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
var G__34522 = arguments.length;
switch (G__34522) {
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
var val_34524 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34524);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34524,ret){
return (function (){
return fn1.call(null,val_34524);
});})(val_34524,ret))
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
var G__34526 = arguments.length;
switch (G__34526) {
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
var n__4376__auto___34528 = n;
var x_34529 = (0);
while(true){
if((x_34529 < n__4376__auto___34528)){
(a[x_34529] = (0));

var G__34530 = (x_34529 + (1));
x_34529 = G__34530;
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

var G__34531 = (i + (1));
i = G__34531;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34532 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34532 = (function (flag,meta34533){
this.flag = flag;
this.meta34533 = meta34533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34534,meta34533__$1){
var self__ = this;
var _34534__$1 = this;
return (new cljs.core.async.t_cljs$core$async34532(self__.flag,meta34533__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34532.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34534){
var self__ = this;
var _34534__$1 = this;
return self__.meta34533;
});})(flag))
;

cljs.core.async.t_cljs$core$async34532.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34532.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34532.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34532.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34532.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34533","meta34533",-306748112,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34532.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34532";

cljs.core.async.t_cljs$core$async34532.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async34532");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34532.
 */
cljs.core.async.__GT_t_cljs$core$async34532 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34532(flag__$1,meta34533){
return (new cljs.core.async.t_cljs$core$async34532(flag__$1,meta34533));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34532(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34535 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34535 = (function (flag,cb,meta34536){
this.flag = flag;
this.cb = cb;
this.meta34536 = meta34536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34537,meta34536__$1){
var self__ = this;
var _34537__$1 = this;
return (new cljs.core.async.t_cljs$core$async34535(self__.flag,self__.cb,meta34536__$1));
});

cljs.core.async.t_cljs$core$async34535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34537){
var self__ = this;
var _34537__$1 = this;
return self__.meta34536;
});

cljs.core.async.t_cljs$core$async34535.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34535.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34535.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34535.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34535.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34536","meta34536",-1219680009,null)], null);
});

cljs.core.async.t_cljs$core$async34535.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34535";

cljs.core.async.t_cljs$core$async34535.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async34535");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34535.
 */
cljs.core.async.__GT_t_cljs$core$async34535 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34535(flag__$1,cb__$1,meta34536){
return (new cljs.core.async.t_cljs$core$async34535(flag__$1,cb__$1,meta34536));
});

}

return (new cljs.core.async.t_cljs$core$async34535(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34538_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34538_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34539_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34539_SHARP_,port], null));
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
var G__34540 = (i + (1));
i = G__34540;
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
var len__4499__auto___34546 = arguments.length;
var i__4500__auto___34547 = (0);
while(true){
if((i__4500__auto___34547 < len__4499__auto___34546)){
args__4502__auto__.push((arguments[i__4500__auto___34547]));

var G__34548 = (i__4500__auto___34547 + (1));
i__4500__auto___34547 = G__34548;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34543){
var map__34544 = p__34543;
var map__34544__$1 = ((((!((map__34544 == null)))?(((((map__34544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34544):map__34544);
var opts = map__34544__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34541){
var G__34542 = cljs.core.first.call(null,seq34541);
var seq34541__$1 = cljs.core.next.call(null,seq34541);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34542,seq34541__$1);
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
var G__34550 = arguments.length;
switch (G__34550) {
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
var c__34449__auto___34596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34449__auto___34596){
return (function (){
var f__34450__auto__ = (function (){var switch__34359__auto__ = ((function (c__34449__auto___34596){
return (function (state_34574){
var state_val_34575 = (state_34574[(1)]);
if((state_val_34575 === (7))){
var inst_34570 = (state_34574[(2)]);
var state_34574__$1 = state_34574;
var statearr_34576_34597 = state_34574__$1;
(statearr_34576_34597[(2)] = inst_34570);

(statearr_34576_34597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (1))){
var state_34574__$1 = state_34574;
var statearr_34577_34598 = state_34574__$1;
(statearr_34577_34598[(2)] = null);

(statearr_34577_34598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (4))){
var inst_34553 = (state_34574[(7)]);
var inst_34553__$1 = (state_34574[(2)]);
var inst_34554 = (inst_34553__$1 == null);
var state_34574__$1 = (function (){var statearr_34578 = state_34574;
(statearr_34578[(7)] = inst_34553__$1);

return statearr_34578;
})();
if(cljs.core.truth_(inst_34554)){
var statearr_34579_34599 = state_34574__$1;
(statearr_34579_34599[(1)] = (5));

} else {
var statearr_34580_34600 = state_34574__$1;
(statearr_34580_34600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (13))){
var state_34574__$1 = state_34574;
var statearr_34581_34601 = state_34574__$1;
(statearr_34581_34601[(2)] = null);

(statearr_34581_34601[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (6))){
var inst_34553 = (state_34574[(7)]);
var state_34574__$1 = state_34574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34574__$1,(11),to,inst_34553);
} else {
if((state_val_34575 === (3))){
var inst_34572 = (state_34574[(2)]);
var state_34574__$1 = state_34574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34574__$1,inst_34572);
} else {
if((state_val_34575 === (12))){
var state_34574__$1 = state_34574;
var statearr_34582_34602 = state_34574__$1;
(statearr_34582_34602[(2)] = null);

(statearr_34582_34602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (2))){
var state_34574__$1 = state_34574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34574__$1,(4),from);
} else {
if((state_val_34575 === (11))){
var inst_34563 = (state_34574[(2)]);
var state_34574__$1 = state_34574;
if(cljs.core.truth_(inst_34563)){
var statearr_34583_34603 = state_34574__$1;
(statearr_34583_34603[(1)] = (12));

} else {
var statearr_34584_34604 = state_34574__$1;
(statearr_34584_34604[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (9))){
var state_34574__$1 = state_34574;
var statearr_34585_34605 = state_34574__$1;
(statearr_34585_34605[(2)] = null);

(statearr_34585_34605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (5))){
var state_34574__$1 = state_34574;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34586_34606 = state_34574__$1;
(statearr_34586_34606[(1)] = (8));

} else {
var statearr_34587_34607 = state_34574__$1;
(statearr_34587_34607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (14))){
var inst_34568 = (state_34574[(2)]);
var state_34574__$1 = state_34574;
var statearr_34588_34608 = state_34574__$1;
(statearr_34588_34608[(2)] = inst_34568);

(statearr_34588_34608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (10))){
var inst_34560 = (state_34574[(2)]);
var state_34574__$1 = state_34574;
var statearr_34589_34609 = state_34574__$1;
(statearr_34589_34609[(2)] = inst_34560);

(statearr_34589_34609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (8))){
var inst_34557 = cljs.core.async.close_BANG_.call(null,to);
var state_34574__$1 = state_34574;
var statearr_34590_34610 = state_34574__$1;
(statearr_34590_34610[(2)] = inst_34557);

(statearr_34590_34610[(1)] = (10));


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
});})(c__34449__auto___34596))
;
return ((function (switch__34359__auto__,c__34449__auto___34596){
return (function() {
var cljs$core$async$state_machine__34360__auto__ = null;
var cljs$core$async$state_machine__34360__auto____0 = (function (){
var statearr_34591 = [null,null,null,null,null,null,null,null];
(statearr_34591[(0)] = cljs$core$async$state_machine__34360__auto__);

(statearr_34591[(1)] = (1));

return statearr_34591;
});
var cljs$core$async$state_machine__34360__auto____1 = (function (state_34574){
while(true){
var ret_value__34361__auto__ = (function (){try{while(true){
var result__34362__auto__ = switch__34359__auto__.call(null,state_34574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34362__auto__;
}
break;
}
}catch (e34592){if((e34592 instanceof Object)){
var ex__34363__auto__ = e34592;
var statearr_34593_34611 = state_34574;
(statearr_34593_34611[(5)] = ex__34363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34612 = state_34574;
state_34574 = G__34612;
continue;
} else {
return ret_value__34361__auto__;
}
break;
}
});
cljs$core$async$state_machine__34360__auto__ = function(state_34574){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34360__auto____1.call(this,state_34574);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34360__auto____0;
cljs$core$async$state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34360__auto____1;
return cljs$core$async$state_machine__34360__auto__;
})()
;})(switch__34359__auto__,c__34449__auto___34596))
})();
var state__34451__auto__ = (function (){var statearr_34594 = f__34450__auto__.call(null);
(statearr_34594[(6)] = c__34449__auto___34596);

return statearr_34594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34451__auto__);
});})(c__34449__auto___34596))
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
return (function (p__34613){
var vec__34614 = p__34613;
var v = cljs.core.nth.call(null,vec__34614,(0),null);
var p = cljs.core.nth.call(null,vec__34614,(1),null);
var job = vec__34614;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34449__auto___34785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34449__auto___34785,res,vec__34614,v,p,job,jobs,results){
return (function (){
var f__34450__auto__ = (function (){var switch__34359__auto__ = ((function (c__34449__auto___34785,res,vec__34614,v,p,job,jobs,results){
return (function (state_34621){
var state_val_34622 = (state_34621[(1)]);
if((state_val_34622 === (1))){
var state_34621__$1 = state_34621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34621__$1,(2),res,v);
} else {
if((state_val_34622 === (2))){
var inst_34618 = (state_34621[(2)]);
var inst_34619 = cljs.core.async.close_BANG_.call(null,res);
var state_34621__$1 = (function (){var statearr_34623 = state_34621;
(statearr_34623[(7)] = inst_34618);

return statearr_34623;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34621__$1,inst_34619);
} else {
return null;
}
}
});})(c__34449__auto___34785,res,vec__34614,v,p,job,jobs,results))
;
return ((function (switch__34359__auto__,c__34449__auto___34785,res,vec__34614,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34360__auto____0 = (function (){
var statearr_34624 = [null,null,null,null,null,null,null,null];
(statearr_34624[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34360__auto__);

(statearr_34624[(1)] = (1));

return statearr_34624;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34360__auto____1 = (function (state_34621){
while(true){
var ret_value__34361__auto__ = (function (){try{while(true){
var result__34362__auto__ = switch__34359__auto__.call(null,state_34621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34362__auto__;
}
break;
}
}catch (e34625){if((e34625 instanceof Object)){
var ex__34363__auto__ = e34625;
var statearr_34626_34786 = state_34621;
(statearr_34626_34786[(5)] = ex__34363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34787 = state_34621;
state_34621 = G__34787;
continue;
} else {
return ret_value__34361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34360__auto__ = function(state_34621){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34360__auto____1.call(this,state_34621);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34360__auto__;
})()
;})(switch__34359__auto__,c__34449__auto___34785,res,vec__34614,v,p,job,jobs,results))
})();
var state__34451__auto__ = (function (){var statearr_34627 = f__34450__auto__.call(null);
(statearr_34627[(6)] = c__34449__auto___34785);

return statearr_34627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34451__auto__);
});})(c__34449__auto___34785,res,vec__34614,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34628){
var vec__34629 = p__34628;
var v = cljs.core.nth.call(null,vec__34629,(0),null);
var p = cljs.core.nth.call(null,vec__34629,(1),null);
var job = vec__34629;
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
var n__4376__auto___34788 = n;
var __34789 = (0);
while(true){
if((__34789 < n__4376__auto___34788)){
var G__34632_34790 = type;
var G__34632_34791__$1 = (((G__34632_34790 instanceof cljs.core.Keyword))?G__34632_34790.fqn:null);
switch (G__34632_34791__$1) {
case "compute":
var c__34449__auto___34793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34789,c__34449__auto___34793,G__34632_34790,G__34632_34791__$1,n__4376__auto___34788,jobs,results,process,async){
return (function (){
var f__34450__auto__ = (function (){var switch__34359__auto__ = ((function (__34789,c__34449__auto___34793,G__34632_34790,G__34632_34791__$1,n__4376__auto___34788,jobs,results,process,async){
return (function (state_34645){
var state_val_34646 = (state_34645[(1)]);
if((state_val_34646 === (1))){
var state_34645__$1 = state_34645;
var statearr_34647_34794 = state_34645__$1;
(statearr_34647_34794[(2)] = null);

(statearr_34647_34794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (2))){
var state_34645__$1 = state_34645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34645__$1,(4),jobs);
} else {
if((state_val_34646 === (3))){
var inst_34643 = (state_34645[(2)]);
var state_34645__$1 = state_34645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34645__$1,inst_34643);
} else {
if((state_val_34646 === (4))){
var inst_34635 = (state_34645[(2)]);
var inst_34636 = process.call(null,inst_34635);
var state_34645__$1 = state_34645;
if(cljs.core.truth_(inst_34636)){
var statearr_34648_34795 = state_34645__$1;
(statearr_34648_34795[(1)] = (5));

} else {
var statearr_34649_34796 = state_34645__$1;
(statearr_34649_34796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (5))){
var state_34645__$1 = state_34645;
var statearr_34650_34797 = state_34645__$1;
(statearr_34650_34797[(2)] = null);

(statearr_34650_34797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (6))){
var state_34645__$1 = state_34645;
var statearr_34651_34798 = state_34645__$1;
(statearr_34651_34798[(2)] = null);

(statearr_34651_34798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (7))){
var inst_34641 = (state_34645[(2)]);
var state_34645__$1 = state_34645;
var statearr_34652_34799 = state_34645__$1;
(statearr_34652_34799[(2)] = inst_34641);

(statearr_34652_34799[(1)] = (3));


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
});})(__34789,c__34449__auto___34793,G__34632_34790,G__34632_34791__$1,n__4376__auto___34788,jobs,results,process,async))
;
return ((function (__34789,switch__34359__auto__,c__34449__auto___34793,G__34632_34790,G__34632_34791__$1,n__4376__auto___34788,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34360__auto____0 = (function (){
var statearr_34653 = [null,null,null,null,null,null,null];
(statearr_34653[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34360__auto__);

(statearr_34653[(1)] = (1));

return statearr_34653;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34360__auto____1 = (function (state_34645){
while(true){
var ret_value__34361__auto__ = (function (){try{while(true){
var result__34362__auto__ = switch__34359__auto__.call(null,state_34645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34362__auto__;
}
break;
}
}catch (e34654){if((e34654 instanceof Object)){
var ex__34363__auto__ = e34654;
var statearr_34655_34800 = state_34645;
(statearr_34655_34800[(5)] = ex__34363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34801 = state_34645;
state_34645 = G__34801;
continue;
} else {
return ret_value__34361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34360__auto__ = function(state_34645){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34360__auto____1.call(this,state_34645);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34360__auto__;
})()
;})(__34789,switch__34359__auto__,c__34449__auto___34793,G__34632_34790,G__34632_34791__$1,n__4376__auto___34788,jobs,results,process,async))
})();
var state__34451__auto__ = (function (){var statearr_34656 = f__34450__auto__.call(null);
(statearr_34656[(6)] = c__34449__auto___34793);

return statearr_34656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34451__auto__);
});})(__34789,c__34449__auto___34793,G__34632_34790,G__34632_34791__$1,n__4376__auto___34788,jobs,results,process,async))
);


break;
case "async":
var c__34449__auto___34802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34789,c__34449__auto___34802,G__34632_34790,G__34632_34791__$1,n__4376__auto___34788,jobs,results,process,async){
return (function (){
var f__34450__auto__ = (function (){var switch__34359__auto__ = ((function (__34789,c__34449__auto___34802,G__34632_34790,G__34632_34791__$1,n__4376__auto___34788,jobs,results,process,async){
return (function (state_34669){
var state_val_34670 = (state_34669[(1)]);
if((state_val_34670 === (1))){
var state_34669__$1 = state_34669;
var statearr_34671_34803 = state_34669__$1;
(statearr_34671_34803[(2)] = null);

(statearr_34671_34803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (2))){
var state_34669__$1 = state_34669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34669__$1,(4),jobs);
} else {
if((state_val_34670 === (3))){
var inst_34667 = (state_34669[(2)]);
var state_34669__$1 = state_34669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34669__$1,inst_34667);
} else {
if((state_val_34670 === (4))){
var inst_34659 = (state_34669[(2)]);
var inst_34660 = async.call(null,inst_34659);
var state_34669__$1 = state_34669;
if(cljs.core.truth_(inst_34660)){
var statearr_34672_34804 = state_34669__$1;
(statearr_34672_34804[(1)] = (5));

} else {
var statearr_34673_34805 = state_34669__$1;
(statearr_34673_34805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (5))){
var state_34669__$1 = state_34669;
var statearr_34674_34806 = state_34669__$1;
(statearr_34674_34806[(2)] = null);

(statearr_34674_34806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (6))){
var state_34669__$1 = state_34669;
var statearr_34675_34807 = state_34669__$1;
(statearr_34675_34807[(2)] = null);

(statearr_34675_34807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (7))){
var inst_34665 = (state_34669[(2)]);
var state_34669__$1 = state_34669;
var statearr_34676_34808 = state_34669__$1;
(statearr_34676_34808[(2)] = inst_34665);

(statearr_34676_34808[(1)] = (3));


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
});})(__34789,c__34449__auto___34802,G__34632_34790,G__34632_34791__$1,n__4376__auto___34788,jobs,results,process,async))
;
return ((function (__34789,switch__34359__auto__,c__34449__auto___34802,G__34632_34790,G__34632_34791__$1,n__4376__auto___34788,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34360__auto____0 = (function (){
var statearr_34677 = [null,null,null,null,null,null,null];
(statearr_34677[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34360__auto__);

(statearr_34677[(1)] = (1));

return statearr_34677;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34360__auto____1 = (function (state_34669){
while(true){
var ret_value__34361__auto__ = (function (){try{while(true){
var result__34362__auto__ = switch__34359__auto__.call(null,state_34669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34362__auto__;
}
break;
}
}catch (e34678){if((e34678 instanceof Object)){
var ex__34363__auto__ = e34678;
var statearr_34679_34809 = state_34669;
(statearr_34679_34809[(5)] = ex__34363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34810 = state_34669;
state_34669 = G__34810;
continue;
} else {
return ret_value__34361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34360__auto__ = function(state_34669){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34360__auto____1.call(this,state_34669);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34360__auto__;
})()
;})(__34789,switch__34359__auto__,c__34449__auto___34802,G__34632_34790,G__34632_34791__$1,n__4376__auto___34788,jobs,results,process,async))
})();
var state__34451__auto__ = (function (){var statearr_34680 = f__34450__auto__.call(null);
(statearr_34680[(6)] = c__34449__auto___34802);

return statearr_34680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34451__auto__);
});})(__34789,c__34449__auto___34802,G__34632_34790,G__34632_34791__$1,n__4376__auto___34788,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34632_34791__$1)].join('')));

}

var G__34811 = (__34789 + (1));
__34789 = G__34811;
continue;
} else {
}
break;
}

var c__34449__auto___34812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34449__auto___34812,jobs,results,process,async){
return (function (){
var f__34450__auto__ = (function (){var switch__34359__auto__ = ((function (c__34449__auto___34812,jobs,results,process,async){
return (function (state_34702){
var state_val_34703 = (state_34702[(1)]);
if((state_val_34703 === (1))){
var state_34702__$1 = state_34702;
var statearr_34704_34813 = state_34702__$1;
(statearr_34704_34813[(2)] = null);

(statearr_34704_34813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34703 === (2))){
var state_34702__$1 = state_34702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34702__$1,(4),from);
} else {
if((state_val_34703 === (3))){
var inst_34700 = (state_34702[(2)]);
var state_34702__$1 = state_34702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34702__$1,inst_34700);
} else {
if((state_val_34703 === (4))){
var inst_34683 = (state_34702[(7)]);
var inst_34683__$1 = (state_34702[(2)]);
var inst_34684 = (inst_34683__$1 == null);
var state_34702__$1 = (function (){var statearr_34705 = state_34702;
(statearr_34705[(7)] = inst_34683__$1);

return statearr_34705;
})();
if(cljs.core.truth_(inst_34684)){
var statearr_34706_34814 = state_34702__$1;
(statearr_34706_34814[(1)] = (5));

} else {
var statearr_34707_34815 = state_34702__$1;
(statearr_34707_34815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34703 === (5))){
var inst_34686 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34702__$1 = state_34702;
var statearr_34708_34816 = state_34702__$1;
(statearr_34708_34816[(2)] = inst_34686);

(statearr_34708_34816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34703 === (6))){
var inst_34683 = (state_34702[(7)]);
var inst_34688 = (state_34702[(8)]);
var inst_34688__$1 = cljs.core.async.chan.call(null,(1));
var inst_34689 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34690 = [inst_34683,inst_34688__$1];
var inst_34691 = (new cljs.core.PersistentVector(null,2,(5),inst_34689,inst_34690,null));
var state_34702__$1 = (function (){var statearr_34709 = state_34702;
(statearr_34709[(8)] = inst_34688__$1);

return statearr_34709;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34702__$1,(8),jobs,inst_34691);
} else {
if((state_val_34703 === (7))){
var inst_34698 = (state_34702[(2)]);
var state_34702__$1 = state_34702;
var statearr_34710_34817 = state_34702__$1;
(statearr_34710_34817[(2)] = inst_34698);

(statearr_34710_34817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34703 === (8))){
var inst_34688 = (state_34702[(8)]);
var inst_34693 = (state_34702[(2)]);
var state_34702__$1 = (function (){var statearr_34711 = state_34702;
(statearr_34711[(9)] = inst_34693);

return statearr_34711;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34702__$1,(9),results,inst_34688);
} else {
if((state_val_34703 === (9))){
var inst_34695 = (state_34702[(2)]);
var state_34702__$1 = (function (){var statearr_34712 = state_34702;
(statearr_34712[(10)] = inst_34695);

return statearr_34712;
})();
var statearr_34713_34818 = state_34702__$1;
(statearr_34713_34818[(2)] = null);

(statearr_34713_34818[(1)] = (2));


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
});})(c__34449__auto___34812,jobs,results,process,async))
;
return ((function (switch__34359__auto__,c__34449__auto___34812,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34360__auto____0 = (function (){
var statearr_34714 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34714[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34360__auto__);

(statearr_34714[(1)] = (1));

return statearr_34714;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34360__auto____1 = (function (state_34702){
while(true){
var ret_value__34361__auto__ = (function (){try{while(true){
var result__34362__auto__ = switch__34359__auto__.call(null,state_34702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34362__auto__;
}
break;
}
}catch (e34715){if((e34715 instanceof Object)){
var ex__34363__auto__ = e34715;
var statearr_34716_34819 = state_34702;
(statearr_34716_34819[(5)] = ex__34363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34820 = state_34702;
state_34702 = G__34820;
continue;
} else {
return ret_value__34361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34360__auto__ = function(state_34702){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34360__auto____1.call(this,state_34702);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34360__auto__;
})()
;})(switch__34359__auto__,c__34449__auto___34812,jobs,results,process,async))
})();
var state__34451__auto__ = (function (){var statearr_34717 = f__34450__auto__.call(null);
(statearr_34717[(6)] = c__34449__auto___34812);

return statearr_34717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34451__auto__);
});})(c__34449__auto___34812,jobs,results,process,async))
);


var c__34449__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34449__auto__,jobs,results,process,async){
return (function (){
var f__34450__auto__ = (function (){var switch__34359__auto__ = ((function (c__34449__auto__,jobs,results,process,async){
return (function (state_34755){
var state_val_34756 = (state_34755[(1)]);
if((state_val_34756 === (7))){
var inst_34751 = (state_34755[(2)]);
var state_34755__$1 = state_34755;
var statearr_34757_34821 = state_34755__$1;
(statearr_34757_34821[(2)] = inst_34751);

(statearr_34757_34821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (20))){
var state_34755__$1 = state_34755;
var statearr_34758_34822 = state_34755__$1;
(statearr_34758_34822[(2)] = null);

(statearr_34758_34822[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (1))){
var state_34755__$1 = state_34755;
var statearr_34759_34823 = state_34755__$1;
(statearr_34759_34823[(2)] = null);

(statearr_34759_34823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (4))){
var inst_34720 = (state_34755[(7)]);
var inst_34720__$1 = (state_34755[(2)]);
var inst_34721 = (inst_34720__$1 == null);
var state_34755__$1 = (function (){var statearr_34760 = state_34755;
(statearr_34760[(7)] = inst_34720__$1);

return statearr_34760;
})();
if(cljs.core.truth_(inst_34721)){
var statearr_34761_34824 = state_34755__$1;
(statearr_34761_34824[(1)] = (5));

} else {
var statearr_34762_34825 = state_34755__$1;
(statearr_34762_34825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (15))){
var inst_34733 = (state_34755[(8)]);
var state_34755__$1 = state_34755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34755__$1,(18),to,inst_34733);
} else {
if((state_val_34756 === (21))){
var inst_34746 = (state_34755[(2)]);
var state_34755__$1 = state_34755;
var statearr_34763_34826 = state_34755__$1;
(statearr_34763_34826[(2)] = inst_34746);

(statearr_34763_34826[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (13))){
var inst_34748 = (state_34755[(2)]);
var state_34755__$1 = (function (){var statearr_34764 = state_34755;
(statearr_34764[(9)] = inst_34748);

return statearr_34764;
})();
var statearr_34765_34827 = state_34755__$1;
(statearr_34765_34827[(2)] = null);

(statearr_34765_34827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (6))){
var inst_34720 = (state_34755[(7)]);
var state_34755__$1 = state_34755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34755__$1,(11),inst_34720);
} else {
if((state_val_34756 === (17))){
var inst_34741 = (state_34755[(2)]);
var state_34755__$1 = state_34755;
if(cljs.core.truth_(inst_34741)){
var statearr_34766_34828 = state_34755__$1;
(statearr_34766_34828[(1)] = (19));

} else {
var statearr_34767_34829 = state_34755__$1;
(statearr_34767_34829[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (3))){
var inst_34753 = (state_34755[(2)]);
var state_34755__$1 = state_34755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34755__$1,inst_34753);
} else {
if((state_val_34756 === (12))){
var inst_34730 = (state_34755[(10)]);
var state_34755__$1 = state_34755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34755__$1,(14),inst_34730);
} else {
if((state_val_34756 === (2))){
var state_34755__$1 = state_34755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34755__$1,(4),results);
} else {
if((state_val_34756 === (19))){
var state_34755__$1 = state_34755;
var statearr_34768_34830 = state_34755__$1;
(statearr_34768_34830[(2)] = null);

(statearr_34768_34830[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (11))){
var inst_34730 = (state_34755[(2)]);
var state_34755__$1 = (function (){var statearr_34769 = state_34755;
(statearr_34769[(10)] = inst_34730);

return statearr_34769;
})();
var statearr_34770_34831 = state_34755__$1;
(statearr_34770_34831[(2)] = null);

(statearr_34770_34831[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (9))){
var state_34755__$1 = state_34755;
var statearr_34771_34832 = state_34755__$1;
(statearr_34771_34832[(2)] = null);

(statearr_34771_34832[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (5))){
var state_34755__$1 = state_34755;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34772_34833 = state_34755__$1;
(statearr_34772_34833[(1)] = (8));

} else {
var statearr_34773_34834 = state_34755__$1;
(statearr_34773_34834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (14))){
var inst_34733 = (state_34755[(8)]);
var inst_34735 = (state_34755[(11)]);
var inst_34733__$1 = (state_34755[(2)]);
var inst_34734 = (inst_34733__$1 == null);
var inst_34735__$1 = cljs.core.not.call(null,inst_34734);
var state_34755__$1 = (function (){var statearr_34774 = state_34755;
(statearr_34774[(8)] = inst_34733__$1);

(statearr_34774[(11)] = inst_34735__$1);

return statearr_34774;
})();
if(inst_34735__$1){
var statearr_34775_34835 = state_34755__$1;
(statearr_34775_34835[(1)] = (15));

} else {
var statearr_34776_34836 = state_34755__$1;
(statearr_34776_34836[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (16))){
var inst_34735 = (state_34755[(11)]);
var state_34755__$1 = state_34755;
var statearr_34777_34837 = state_34755__$1;
(statearr_34777_34837[(2)] = inst_34735);

(statearr_34777_34837[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (10))){
var inst_34727 = (state_34755[(2)]);
var state_34755__$1 = state_34755;
var statearr_34778_34838 = state_34755__$1;
(statearr_34778_34838[(2)] = inst_34727);

(statearr_34778_34838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (18))){
var inst_34738 = (state_34755[(2)]);
var state_34755__$1 = state_34755;
var statearr_34779_34839 = state_34755__$1;
(statearr_34779_34839[(2)] = inst_34738);

(statearr_34779_34839[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (8))){
var inst_34724 = cljs.core.async.close_BANG_.call(null,to);
var state_34755__$1 = state_34755;
var statearr_34780_34840 = state_34755__$1;
(statearr_34780_34840[(2)] = inst_34724);

(statearr_34780_34840[(1)] = (10));


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
});})(c__34449__auto__,jobs,results,process,async))
;
return ((function (switch__34359__auto__,c__34449__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34360__auto____0 = (function (){
var statearr_34781 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34781[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34360__auto__);

(statearr_34781[(1)] = (1));

return statearr_34781;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34360__auto____1 = (function (state_34755){
while(true){
var ret_value__34361__auto__ = (function (){try{while(true){
var result__34362__auto__ = switch__34359__auto__.call(null,state_34755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34362__auto__;
}
break;
}
}catch (e34782){if((e34782 instanceof Object)){
var ex__34363__auto__ = e34782;
var statearr_34783_34841 = state_34755;
(statearr_34783_34841[(5)] = ex__34363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34842 = state_34755;
state_34755 = G__34842;
continue;
} else {
return ret_value__34361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34360__auto__ = function(state_34755){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34360__auto____1.call(this,state_34755);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34360__auto__;
})()
;})(switch__34359__auto__,c__34449__auto__,jobs,results,process,async))
})();
var state__34451__auto__ = (function (){var statearr_34784 = f__34450__auto__.call(null);
(statearr_34784[(6)] = c__34449__auto__);

return statearr_34784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34451__auto__);
});})(c__34449__auto__,jobs,results,process,async))
);

return c__34449__auto__;
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
var G__34844 = arguments.length;
switch (G__34844) {
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
var G__34847 = arguments.length;
switch (G__34847) {
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
var G__34850 = arguments.length;
switch (G__34850) {
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
var c__34449__auto___34899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34449__auto___34899,tc,fc){
return (function (){
var f__34450__auto__ = (function (){var switch__34359__auto__ = ((function (c__34449__auto___34899,tc,fc){
return (function (state_34876){
var state_val_34877 = (state_34876[(1)]);
if((state_val_34877 === (7))){
var inst_34872 = (state_34876[(2)]);
var state_34876__$1 = state_34876;
var statearr_34878_34900 = state_34876__$1;
(statearr_34878_34900[(2)] = inst_34872);

(statearr_34878_34900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (1))){
var state_34876__$1 = state_34876;
var statearr_34879_34901 = state_34876__$1;
(statearr_34879_34901[(2)] = null);

(statearr_34879_34901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (4))){
var inst_34853 = (state_34876[(7)]);
var inst_34853__$1 = (state_34876[(2)]);
var inst_34854 = (inst_34853__$1 == null);
var state_34876__$1 = (function (){var statearr_34880 = state_34876;
(statearr_34880[(7)] = inst_34853__$1);

return statearr_34880;
})();
if(cljs.core.truth_(inst_34854)){
var statearr_34881_34902 = state_34876__$1;
(statearr_34881_34902[(1)] = (5));

} else {
var statearr_34882_34903 = state_34876__$1;
(statearr_34882_34903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (13))){
var state_34876__$1 = state_34876;
var statearr_34883_34904 = state_34876__$1;
(statearr_34883_34904[(2)] = null);

(statearr_34883_34904[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (6))){
var inst_34853 = (state_34876[(7)]);
var inst_34859 = p.call(null,inst_34853);
var state_34876__$1 = state_34876;
if(cljs.core.truth_(inst_34859)){
var statearr_34884_34905 = state_34876__$1;
(statearr_34884_34905[(1)] = (9));

} else {
var statearr_34885_34906 = state_34876__$1;
(statearr_34885_34906[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (3))){
var inst_34874 = (state_34876[(2)]);
var state_34876__$1 = state_34876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34876__$1,inst_34874);
} else {
if((state_val_34877 === (12))){
var state_34876__$1 = state_34876;
var statearr_34886_34907 = state_34876__$1;
(statearr_34886_34907[(2)] = null);

(statearr_34886_34907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (2))){
var state_34876__$1 = state_34876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34876__$1,(4),ch);
} else {
if((state_val_34877 === (11))){
var inst_34853 = (state_34876[(7)]);
var inst_34863 = (state_34876[(2)]);
var state_34876__$1 = state_34876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34876__$1,(8),inst_34863,inst_34853);
} else {
if((state_val_34877 === (9))){
var state_34876__$1 = state_34876;
var statearr_34887_34908 = state_34876__$1;
(statearr_34887_34908[(2)] = tc);

(statearr_34887_34908[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (5))){
var inst_34856 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34857 = cljs.core.async.close_BANG_.call(null,fc);
var state_34876__$1 = (function (){var statearr_34888 = state_34876;
(statearr_34888[(8)] = inst_34856);

return statearr_34888;
})();
var statearr_34889_34909 = state_34876__$1;
(statearr_34889_34909[(2)] = inst_34857);

(statearr_34889_34909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (14))){
var inst_34870 = (state_34876[(2)]);
var state_34876__$1 = state_34876;
var statearr_34890_34910 = state_34876__$1;
(statearr_34890_34910[(2)] = inst_34870);

(statearr_34890_34910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (10))){
var state_34876__$1 = state_34876;
var statearr_34891_34911 = state_34876__$1;
(statearr_34891_34911[(2)] = fc);

(statearr_34891_34911[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (8))){
var inst_34865 = (state_34876[(2)]);
var state_34876__$1 = state_34876;
if(cljs.core.truth_(inst_34865)){
var statearr_34892_34912 = state_34876__$1;
(statearr_34892_34912[(1)] = (12));

} else {
var statearr_34893_34913 = state_34876__$1;
(statearr_34893_34913[(1)] = (13));

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
});})(c__34449__auto___34899,tc,fc))
;
return ((function (switch__34359__auto__,c__34449__auto___34899,tc,fc){
return (function() {
var cljs$core$async$state_machine__34360__auto__ = null;
var cljs$core$async$state_machine__34360__auto____0 = (function (){
var statearr_34894 = [null,null,null,null,null,null,null,null,null];
(statearr_34894[(0)] = cljs$core$async$state_machine__34360__auto__);

(statearr_34894[(1)] = (1));

return statearr_34894;
});
var cljs$core$async$state_machine__34360__auto____1 = (function (state_34876){
while(true){
var ret_value__34361__auto__ = (function (){try{while(true){
var result__34362__auto__ = switch__34359__auto__.call(null,state_34876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34362__auto__;
}
break;
}
}catch (e34895){if((e34895 instanceof Object)){
var ex__34363__auto__ = e34895;
var statearr_34896_34914 = state_34876;
(statearr_34896_34914[(5)] = ex__34363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34915 = state_34876;
state_34876 = G__34915;
continue;
} else {
return ret_value__34361__auto__;
}
break;
}
});
cljs$core$async$state_machine__34360__auto__ = function(state_34876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34360__auto____1.call(this,state_34876);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34360__auto____0;
cljs$core$async$state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34360__auto____1;
return cljs$core$async$state_machine__34360__auto__;
})()
;})(switch__34359__auto__,c__34449__auto___34899,tc,fc))
})();
var state__34451__auto__ = (function (){var statearr_34897 = f__34450__auto__.call(null);
(statearr_34897[(6)] = c__34449__auto___34899);

return statearr_34897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34451__auto__);
});})(c__34449__auto___34899,tc,fc))
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
var c__34449__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34449__auto__){
return (function (){
var f__34450__auto__ = (function (){var switch__34359__auto__ = ((function (c__34449__auto__){
return (function (state_34936){
var state_val_34937 = (state_34936[(1)]);
if((state_val_34937 === (7))){
var inst_34932 = (state_34936[(2)]);
var state_34936__$1 = state_34936;
var statearr_34938_34956 = state_34936__$1;
(statearr_34938_34956[(2)] = inst_34932);

(statearr_34938_34956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (1))){
var inst_34916 = init;
var state_34936__$1 = (function (){var statearr_34939 = state_34936;
(statearr_34939[(7)] = inst_34916);

return statearr_34939;
})();
var statearr_34940_34957 = state_34936__$1;
(statearr_34940_34957[(2)] = null);

(statearr_34940_34957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (4))){
var inst_34919 = (state_34936[(8)]);
var inst_34919__$1 = (state_34936[(2)]);
var inst_34920 = (inst_34919__$1 == null);
var state_34936__$1 = (function (){var statearr_34941 = state_34936;
(statearr_34941[(8)] = inst_34919__$1);

return statearr_34941;
})();
if(cljs.core.truth_(inst_34920)){
var statearr_34942_34958 = state_34936__$1;
(statearr_34942_34958[(1)] = (5));

} else {
var statearr_34943_34959 = state_34936__$1;
(statearr_34943_34959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (6))){
var inst_34923 = (state_34936[(9)]);
var inst_34919 = (state_34936[(8)]);
var inst_34916 = (state_34936[(7)]);
var inst_34923__$1 = f.call(null,inst_34916,inst_34919);
var inst_34924 = cljs.core.reduced_QMARK_.call(null,inst_34923__$1);
var state_34936__$1 = (function (){var statearr_34944 = state_34936;
(statearr_34944[(9)] = inst_34923__$1);

return statearr_34944;
})();
if(inst_34924){
var statearr_34945_34960 = state_34936__$1;
(statearr_34945_34960[(1)] = (8));

} else {
var statearr_34946_34961 = state_34936__$1;
(statearr_34946_34961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (3))){
var inst_34934 = (state_34936[(2)]);
var state_34936__$1 = state_34936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34936__$1,inst_34934);
} else {
if((state_val_34937 === (2))){
var state_34936__$1 = state_34936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34936__$1,(4),ch);
} else {
if((state_val_34937 === (9))){
var inst_34923 = (state_34936[(9)]);
var inst_34916 = inst_34923;
var state_34936__$1 = (function (){var statearr_34947 = state_34936;
(statearr_34947[(7)] = inst_34916);

return statearr_34947;
})();
var statearr_34948_34962 = state_34936__$1;
(statearr_34948_34962[(2)] = null);

(statearr_34948_34962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (5))){
var inst_34916 = (state_34936[(7)]);
var state_34936__$1 = state_34936;
var statearr_34949_34963 = state_34936__$1;
(statearr_34949_34963[(2)] = inst_34916);

(statearr_34949_34963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (10))){
var inst_34930 = (state_34936[(2)]);
var state_34936__$1 = state_34936;
var statearr_34950_34964 = state_34936__$1;
(statearr_34950_34964[(2)] = inst_34930);

(statearr_34950_34964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (8))){
var inst_34923 = (state_34936[(9)]);
var inst_34926 = cljs.core.deref.call(null,inst_34923);
var state_34936__$1 = state_34936;
var statearr_34951_34965 = state_34936__$1;
(statearr_34951_34965[(2)] = inst_34926);

(statearr_34951_34965[(1)] = (10));


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
});})(c__34449__auto__))
;
return ((function (switch__34359__auto__,c__34449__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__34360__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34360__auto____0 = (function (){
var statearr_34952 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34952[(0)] = cljs$core$async$reduce_$_state_machine__34360__auto__);

(statearr_34952[(1)] = (1));

return statearr_34952;
});
var cljs$core$async$reduce_$_state_machine__34360__auto____1 = (function (state_34936){
while(true){
var ret_value__34361__auto__ = (function (){try{while(true){
var result__34362__auto__ = switch__34359__auto__.call(null,state_34936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34362__auto__;
}
break;
}
}catch (e34953){if((e34953 instanceof Object)){
var ex__34363__auto__ = e34953;
var statearr_34954_34966 = state_34936;
(statearr_34954_34966[(5)] = ex__34363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34967 = state_34936;
state_34936 = G__34967;
continue;
} else {
return ret_value__34361__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34360__auto__ = function(state_34936){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34360__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34360__auto____1.call(this,state_34936);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34360__auto____0;
cljs$core$async$reduce_$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34360__auto____1;
return cljs$core$async$reduce_$_state_machine__34360__auto__;
})()
;})(switch__34359__auto__,c__34449__auto__))
})();
var state__34451__auto__ = (function (){var statearr_34955 = f__34450__auto__.call(null);
(statearr_34955[(6)] = c__34449__auto__);

return statearr_34955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34451__auto__);
});})(c__34449__auto__))
);

return c__34449__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__34449__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34449__auto__,f__$1){
return (function (){
var f__34450__auto__ = (function (){var switch__34359__auto__ = ((function (c__34449__auto__,f__$1){
return (function (state_34973){
var state_val_34974 = (state_34973[(1)]);
if((state_val_34974 === (1))){
var inst_34968 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34973__$1 = state_34973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34973__$1,(2),inst_34968);
} else {
if((state_val_34974 === (2))){
var inst_34970 = (state_34973[(2)]);
var inst_34971 = f__$1.call(null,inst_34970);
var state_34973__$1 = state_34973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34973__$1,inst_34971);
} else {
return null;
}
}
});})(c__34449__auto__,f__$1))
;
return ((function (switch__34359__auto__,c__34449__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__34360__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34360__auto____0 = (function (){
var statearr_34975 = [null,null,null,null,null,null,null];
(statearr_34975[(0)] = cljs$core$async$transduce_$_state_machine__34360__auto__);

(statearr_34975[(1)] = (1));

return statearr_34975;
});
var cljs$core$async$transduce_$_state_machine__34360__auto____1 = (function (state_34973){
while(true){
var ret_value__34361__auto__ = (function (){try{while(true){
var result__34362__auto__ = switch__34359__auto__.call(null,state_34973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34362__auto__;
}
break;
}
}catch (e34976){if((e34976 instanceof Object)){
var ex__34363__auto__ = e34976;
var statearr_34977_34979 = state_34973;
(statearr_34977_34979[(5)] = ex__34363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34980 = state_34973;
state_34973 = G__34980;
continue;
} else {
return ret_value__34361__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34360__auto__ = function(state_34973){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34360__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34360__auto____1.call(this,state_34973);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34360__auto____0;
cljs$core$async$transduce_$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34360__auto____1;
return cljs$core$async$transduce_$_state_machine__34360__auto__;
})()
;})(switch__34359__auto__,c__34449__auto__,f__$1))
})();
var state__34451__auto__ = (function (){var statearr_34978 = f__34450__auto__.call(null);
(statearr_34978[(6)] = c__34449__auto__);

return statearr_34978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34451__auto__);
});})(c__34449__auto__,f__$1))
);

return c__34449__auto__;
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
var G__34982 = arguments.length;
switch (G__34982) {
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
var c__34449__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34449__auto__){
return (function (){
var f__34450__auto__ = (function (){var switch__34359__auto__ = ((function (c__34449__auto__){
return (function (state_35007){
var state_val_35008 = (state_35007[(1)]);
if((state_val_35008 === (7))){
var inst_34989 = (state_35007[(2)]);
var state_35007__$1 = state_35007;
var statearr_35009_35030 = state_35007__$1;
(statearr_35009_35030[(2)] = inst_34989);

(statearr_35009_35030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (1))){
var inst_34983 = cljs.core.seq.call(null,coll);
var inst_34984 = inst_34983;
var state_35007__$1 = (function (){var statearr_35010 = state_35007;
(statearr_35010[(7)] = inst_34984);

return statearr_35010;
})();
var statearr_35011_35031 = state_35007__$1;
(statearr_35011_35031[(2)] = null);

(statearr_35011_35031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (4))){
var inst_34984 = (state_35007[(7)]);
var inst_34987 = cljs.core.first.call(null,inst_34984);
var state_35007__$1 = state_35007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35007__$1,(7),ch,inst_34987);
} else {
if((state_val_35008 === (13))){
var inst_35001 = (state_35007[(2)]);
var state_35007__$1 = state_35007;
var statearr_35012_35032 = state_35007__$1;
(statearr_35012_35032[(2)] = inst_35001);

(statearr_35012_35032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (6))){
var inst_34992 = (state_35007[(2)]);
var state_35007__$1 = state_35007;
if(cljs.core.truth_(inst_34992)){
var statearr_35013_35033 = state_35007__$1;
(statearr_35013_35033[(1)] = (8));

} else {
var statearr_35014_35034 = state_35007__$1;
(statearr_35014_35034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (3))){
var inst_35005 = (state_35007[(2)]);
var state_35007__$1 = state_35007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35007__$1,inst_35005);
} else {
if((state_val_35008 === (12))){
var state_35007__$1 = state_35007;
var statearr_35015_35035 = state_35007__$1;
(statearr_35015_35035[(2)] = null);

(statearr_35015_35035[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (2))){
var inst_34984 = (state_35007[(7)]);
var state_35007__$1 = state_35007;
if(cljs.core.truth_(inst_34984)){
var statearr_35016_35036 = state_35007__$1;
(statearr_35016_35036[(1)] = (4));

} else {
var statearr_35017_35037 = state_35007__$1;
(statearr_35017_35037[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (11))){
var inst_34998 = cljs.core.async.close_BANG_.call(null,ch);
var state_35007__$1 = state_35007;
var statearr_35018_35038 = state_35007__$1;
(statearr_35018_35038[(2)] = inst_34998);

(statearr_35018_35038[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (9))){
var state_35007__$1 = state_35007;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35019_35039 = state_35007__$1;
(statearr_35019_35039[(1)] = (11));

} else {
var statearr_35020_35040 = state_35007__$1;
(statearr_35020_35040[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (5))){
var inst_34984 = (state_35007[(7)]);
var state_35007__$1 = state_35007;
var statearr_35021_35041 = state_35007__$1;
(statearr_35021_35041[(2)] = inst_34984);

(statearr_35021_35041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (10))){
var inst_35003 = (state_35007[(2)]);
var state_35007__$1 = state_35007;
var statearr_35022_35042 = state_35007__$1;
(statearr_35022_35042[(2)] = inst_35003);

(statearr_35022_35042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (8))){
var inst_34984 = (state_35007[(7)]);
var inst_34994 = cljs.core.next.call(null,inst_34984);
var inst_34984__$1 = inst_34994;
var state_35007__$1 = (function (){var statearr_35023 = state_35007;
(statearr_35023[(7)] = inst_34984__$1);

return statearr_35023;
})();
var statearr_35024_35043 = state_35007__$1;
(statearr_35024_35043[(2)] = null);

(statearr_35024_35043[(1)] = (2));


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
});})(c__34449__auto__))
;
return ((function (switch__34359__auto__,c__34449__auto__){
return (function() {
var cljs$core$async$state_machine__34360__auto__ = null;
var cljs$core$async$state_machine__34360__auto____0 = (function (){
var statearr_35025 = [null,null,null,null,null,null,null,null];
(statearr_35025[(0)] = cljs$core$async$state_machine__34360__auto__);

(statearr_35025[(1)] = (1));

return statearr_35025;
});
var cljs$core$async$state_machine__34360__auto____1 = (function (state_35007){
while(true){
var ret_value__34361__auto__ = (function (){try{while(true){
var result__34362__auto__ = switch__34359__auto__.call(null,state_35007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34362__auto__;
}
break;
}
}catch (e35026){if((e35026 instanceof Object)){
var ex__34363__auto__ = e35026;
var statearr_35027_35044 = state_35007;
(statearr_35027_35044[(5)] = ex__34363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35045 = state_35007;
state_35007 = G__35045;
continue;
} else {
return ret_value__34361__auto__;
}
break;
}
});
cljs$core$async$state_machine__34360__auto__ = function(state_35007){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34360__auto____1.call(this,state_35007);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34360__auto____0;
cljs$core$async$state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34360__auto____1;
return cljs$core$async$state_machine__34360__auto__;
})()
;})(switch__34359__auto__,c__34449__auto__))
})();
var state__34451__auto__ = (function (){var statearr_35028 = f__34450__auto__.call(null);
(statearr_35028[(6)] = c__34449__auto__);

return statearr_35028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34451__auto__);
});})(c__34449__auto__))
);

return c__34449__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async35046 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35046 = (function (ch,cs,meta35047){
this.ch = ch;
this.cs = cs;
this.meta35047 = meta35047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35048,meta35047__$1){
var self__ = this;
var _35048__$1 = this;
return (new cljs.core.async.t_cljs$core$async35046(self__.ch,self__.cs,meta35047__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async35046.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35048){
var self__ = this;
var _35048__$1 = this;
return self__.meta35047;
});})(cs))
;

cljs.core.async.t_cljs$core$async35046.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35046.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async35046.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35046.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35046.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35046.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35046.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35047","meta35047",1764325700,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async35046.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35046.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35046";

cljs.core.async.t_cljs$core$async35046.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35046");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35046.
 */
cljs.core.async.__GT_t_cljs$core$async35046 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async35046(ch__$1,cs__$1,meta35047){
return (new cljs.core.async.t_cljs$core$async35046(ch__$1,cs__$1,meta35047));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async35046(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34449__auto___35268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34449__auto___35268,cs,m,dchan,dctr,done){
return (function (){
var f__34450__auto__ = (function (){var switch__34359__auto__ = ((function (c__34449__auto___35268,cs,m,dchan,dctr,done){
return (function (state_35183){
var state_val_35184 = (state_35183[(1)]);
if((state_val_35184 === (7))){
var inst_35179 = (state_35183[(2)]);
var state_35183__$1 = state_35183;
var statearr_35185_35269 = state_35183__$1;
(statearr_35185_35269[(2)] = inst_35179);

(statearr_35185_35269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (20))){
var inst_35082 = (state_35183[(7)]);
var inst_35094 = cljs.core.first.call(null,inst_35082);
var inst_35095 = cljs.core.nth.call(null,inst_35094,(0),null);
var inst_35096 = cljs.core.nth.call(null,inst_35094,(1),null);
var state_35183__$1 = (function (){var statearr_35186 = state_35183;
(statearr_35186[(8)] = inst_35095);

return statearr_35186;
})();
if(cljs.core.truth_(inst_35096)){
var statearr_35187_35270 = state_35183__$1;
(statearr_35187_35270[(1)] = (22));

} else {
var statearr_35188_35271 = state_35183__$1;
(statearr_35188_35271[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (27))){
var inst_35131 = (state_35183[(9)]);
var inst_35126 = (state_35183[(10)]);
var inst_35124 = (state_35183[(11)]);
var inst_35051 = (state_35183[(12)]);
var inst_35131__$1 = cljs.core._nth.call(null,inst_35124,inst_35126);
var inst_35132 = cljs.core.async.put_BANG_.call(null,inst_35131__$1,inst_35051,done);
var state_35183__$1 = (function (){var statearr_35189 = state_35183;
(statearr_35189[(9)] = inst_35131__$1);

return statearr_35189;
})();
if(cljs.core.truth_(inst_35132)){
var statearr_35190_35272 = state_35183__$1;
(statearr_35190_35272[(1)] = (30));

} else {
var statearr_35191_35273 = state_35183__$1;
(statearr_35191_35273[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (1))){
var state_35183__$1 = state_35183;
var statearr_35192_35274 = state_35183__$1;
(statearr_35192_35274[(2)] = null);

(statearr_35192_35274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (24))){
var inst_35082 = (state_35183[(7)]);
var inst_35101 = (state_35183[(2)]);
var inst_35102 = cljs.core.next.call(null,inst_35082);
var inst_35060 = inst_35102;
var inst_35061 = null;
var inst_35062 = (0);
var inst_35063 = (0);
var state_35183__$1 = (function (){var statearr_35193 = state_35183;
(statearr_35193[(13)] = inst_35063);

(statearr_35193[(14)] = inst_35061);

(statearr_35193[(15)] = inst_35060);

(statearr_35193[(16)] = inst_35062);

(statearr_35193[(17)] = inst_35101);

return statearr_35193;
})();
var statearr_35194_35275 = state_35183__$1;
(statearr_35194_35275[(2)] = null);

(statearr_35194_35275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (39))){
var state_35183__$1 = state_35183;
var statearr_35198_35276 = state_35183__$1;
(statearr_35198_35276[(2)] = null);

(statearr_35198_35276[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (4))){
var inst_35051 = (state_35183[(12)]);
var inst_35051__$1 = (state_35183[(2)]);
var inst_35052 = (inst_35051__$1 == null);
var state_35183__$1 = (function (){var statearr_35199 = state_35183;
(statearr_35199[(12)] = inst_35051__$1);

return statearr_35199;
})();
if(cljs.core.truth_(inst_35052)){
var statearr_35200_35277 = state_35183__$1;
(statearr_35200_35277[(1)] = (5));

} else {
var statearr_35201_35278 = state_35183__$1;
(statearr_35201_35278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (15))){
var inst_35063 = (state_35183[(13)]);
var inst_35061 = (state_35183[(14)]);
var inst_35060 = (state_35183[(15)]);
var inst_35062 = (state_35183[(16)]);
var inst_35078 = (state_35183[(2)]);
var inst_35079 = (inst_35063 + (1));
var tmp35195 = inst_35061;
var tmp35196 = inst_35060;
var tmp35197 = inst_35062;
var inst_35060__$1 = tmp35196;
var inst_35061__$1 = tmp35195;
var inst_35062__$1 = tmp35197;
var inst_35063__$1 = inst_35079;
var state_35183__$1 = (function (){var statearr_35202 = state_35183;
(statearr_35202[(13)] = inst_35063__$1);

(statearr_35202[(14)] = inst_35061__$1);

(statearr_35202[(15)] = inst_35060__$1);

(statearr_35202[(18)] = inst_35078);

(statearr_35202[(16)] = inst_35062__$1);

return statearr_35202;
})();
var statearr_35203_35279 = state_35183__$1;
(statearr_35203_35279[(2)] = null);

(statearr_35203_35279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (21))){
var inst_35105 = (state_35183[(2)]);
var state_35183__$1 = state_35183;
var statearr_35207_35280 = state_35183__$1;
(statearr_35207_35280[(2)] = inst_35105);

(statearr_35207_35280[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (31))){
var inst_35131 = (state_35183[(9)]);
var inst_35135 = done.call(null,null);
var inst_35136 = cljs.core.async.untap_STAR_.call(null,m,inst_35131);
var state_35183__$1 = (function (){var statearr_35208 = state_35183;
(statearr_35208[(19)] = inst_35135);

return statearr_35208;
})();
var statearr_35209_35281 = state_35183__$1;
(statearr_35209_35281[(2)] = inst_35136);

(statearr_35209_35281[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (32))){
var inst_35123 = (state_35183[(20)]);
var inst_35126 = (state_35183[(10)]);
var inst_35124 = (state_35183[(11)]);
var inst_35125 = (state_35183[(21)]);
var inst_35138 = (state_35183[(2)]);
var inst_35139 = (inst_35126 + (1));
var tmp35204 = inst_35123;
var tmp35205 = inst_35124;
var tmp35206 = inst_35125;
var inst_35123__$1 = tmp35204;
var inst_35124__$1 = tmp35205;
var inst_35125__$1 = tmp35206;
var inst_35126__$1 = inst_35139;
var state_35183__$1 = (function (){var statearr_35210 = state_35183;
(statearr_35210[(20)] = inst_35123__$1);

(statearr_35210[(22)] = inst_35138);

(statearr_35210[(10)] = inst_35126__$1);

(statearr_35210[(11)] = inst_35124__$1);

(statearr_35210[(21)] = inst_35125__$1);

return statearr_35210;
})();
var statearr_35211_35282 = state_35183__$1;
(statearr_35211_35282[(2)] = null);

(statearr_35211_35282[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (40))){
var inst_35151 = (state_35183[(23)]);
var inst_35155 = done.call(null,null);
var inst_35156 = cljs.core.async.untap_STAR_.call(null,m,inst_35151);
var state_35183__$1 = (function (){var statearr_35212 = state_35183;
(statearr_35212[(24)] = inst_35155);

return statearr_35212;
})();
var statearr_35213_35283 = state_35183__$1;
(statearr_35213_35283[(2)] = inst_35156);

(statearr_35213_35283[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (33))){
var inst_35142 = (state_35183[(25)]);
var inst_35144 = cljs.core.chunked_seq_QMARK_.call(null,inst_35142);
var state_35183__$1 = state_35183;
if(inst_35144){
var statearr_35214_35284 = state_35183__$1;
(statearr_35214_35284[(1)] = (36));

} else {
var statearr_35215_35285 = state_35183__$1;
(statearr_35215_35285[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (13))){
var inst_35072 = (state_35183[(26)]);
var inst_35075 = cljs.core.async.close_BANG_.call(null,inst_35072);
var state_35183__$1 = state_35183;
var statearr_35216_35286 = state_35183__$1;
(statearr_35216_35286[(2)] = inst_35075);

(statearr_35216_35286[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (22))){
var inst_35095 = (state_35183[(8)]);
var inst_35098 = cljs.core.async.close_BANG_.call(null,inst_35095);
var state_35183__$1 = state_35183;
var statearr_35217_35287 = state_35183__$1;
(statearr_35217_35287[(2)] = inst_35098);

(statearr_35217_35287[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (36))){
var inst_35142 = (state_35183[(25)]);
var inst_35146 = cljs.core.chunk_first.call(null,inst_35142);
var inst_35147 = cljs.core.chunk_rest.call(null,inst_35142);
var inst_35148 = cljs.core.count.call(null,inst_35146);
var inst_35123 = inst_35147;
var inst_35124 = inst_35146;
var inst_35125 = inst_35148;
var inst_35126 = (0);
var state_35183__$1 = (function (){var statearr_35218 = state_35183;
(statearr_35218[(20)] = inst_35123);

(statearr_35218[(10)] = inst_35126);

(statearr_35218[(11)] = inst_35124);

(statearr_35218[(21)] = inst_35125);

return statearr_35218;
})();
var statearr_35219_35288 = state_35183__$1;
(statearr_35219_35288[(2)] = null);

(statearr_35219_35288[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (41))){
var inst_35142 = (state_35183[(25)]);
var inst_35158 = (state_35183[(2)]);
var inst_35159 = cljs.core.next.call(null,inst_35142);
var inst_35123 = inst_35159;
var inst_35124 = null;
var inst_35125 = (0);
var inst_35126 = (0);
var state_35183__$1 = (function (){var statearr_35220 = state_35183;
(statearr_35220[(20)] = inst_35123);

(statearr_35220[(10)] = inst_35126);

(statearr_35220[(11)] = inst_35124);

(statearr_35220[(27)] = inst_35158);

(statearr_35220[(21)] = inst_35125);

return statearr_35220;
})();
var statearr_35221_35289 = state_35183__$1;
(statearr_35221_35289[(2)] = null);

(statearr_35221_35289[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (43))){
var state_35183__$1 = state_35183;
var statearr_35222_35290 = state_35183__$1;
(statearr_35222_35290[(2)] = null);

(statearr_35222_35290[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (29))){
var inst_35167 = (state_35183[(2)]);
var state_35183__$1 = state_35183;
var statearr_35223_35291 = state_35183__$1;
(statearr_35223_35291[(2)] = inst_35167);

(statearr_35223_35291[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (44))){
var inst_35176 = (state_35183[(2)]);
var state_35183__$1 = (function (){var statearr_35224 = state_35183;
(statearr_35224[(28)] = inst_35176);

return statearr_35224;
})();
var statearr_35225_35292 = state_35183__$1;
(statearr_35225_35292[(2)] = null);

(statearr_35225_35292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (6))){
var inst_35115 = (state_35183[(29)]);
var inst_35114 = cljs.core.deref.call(null,cs);
var inst_35115__$1 = cljs.core.keys.call(null,inst_35114);
var inst_35116 = cljs.core.count.call(null,inst_35115__$1);
var inst_35117 = cljs.core.reset_BANG_.call(null,dctr,inst_35116);
var inst_35122 = cljs.core.seq.call(null,inst_35115__$1);
var inst_35123 = inst_35122;
var inst_35124 = null;
var inst_35125 = (0);
var inst_35126 = (0);
var state_35183__$1 = (function (){var statearr_35226 = state_35183;
(statearr_35226[(20)] = inst_35123);

(statearr_35226[(10)] = inst_35126);

(statearr_35226[(29)] = inst_35115__$1);

(statearr_35226[(11)] = inst_35124);

(statearr_35226[(30)] = inst_35117);

(statearr_35226[(21)] = inst_35125);

return statearr_35226;
})();
var statearr_35227_35293 = state_35183__$1;
(statearr_35227_35293[(2)] = null);

(statearr_35227_35293[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (28))){
var inst_35123 = (state_35183[(20)]);
var inst_35142 = (state_35183[(25)]);
var inst_35142__$1 = cljs.core.seq.call(null,inst_35123);
var state_35183__$1 = (function (){var statearr_35228 = state_35183;
(statearr_35228[(25)] = inst_35142__$1);

return statearr_35228;
})();
if(inst_35142__$1){
var statearr_35229_35294 = state_35183__$1;
(statearr_35229_35294[(1)] = (33));

} else {
var statearr_35230_35295 = state_35183__$1;
(statearr_35230_35295[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (25))){
var inst_35126 = (state_35183[(10)]);
var inst_35125 = (state_35183[(21)]);
var inst_35128 = (inst_35126 < inst_35125);
var inst_35129 = inst_35128;
var state_35183__$1 = state_35183;
if(cljs.core.truth_(inst_35129)){
var statearr_35231_35296 = state_35183__$1;
(statearr_35231_35296[(1)] = (27));

} else {
var statearr_35232_35297 = state_35183__$1;
(statearr_35232_35297[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (34))){
var state_35183__$1 = state_35183;
var statearr_35233_35298 = state_35183__$1;
(statearr_35233_35298[(2)] = null);

(statearr_35233_35298[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (17))){
var state_35183__$1 = state_35183;
var statearr_35234_35299 = state_35183__$1;
(statearr_35234_35299[(2)] = null);

(statearr_35234_35299[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (3))){
var inst_35181 = (state_35183[(2)]);
var state_35183__$1 = state_35183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35183__$1,inst_35181);
} else {
if((state_val_35184 === (12))){
var inst_35110 = (state_35183[(2)]);
var state_35183__$1 = state_35183;
var statearr_35235_35300 = state_35183__$1;
(statearr_35235_35300[(2)] = inst_35110);

(statearr_35235_35300[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (2))){
var state_35183__$1 = state_35183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35183__$1,(4),ch);
} else {
if((state_val_35184 === (23))){
var state_35183__$1 = state_35183;
var statearr_35236_35301 = state_35183__$1;
(statearr_35236_35301[(2)] = null);

(statearr_35236_35301[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (35))){
var inst_35165 = (state_35183[(2)]);
var state_35183__$1 = state_35183;
var statearr_35237_35302 = state_35183__$1;
(statearr_35237_35302[(2)] = inst_35165);

(statearr_35237_35302[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (19))){
var inst_35082 = (state_35183[(7)]);
var inst_35086 = cljs.core.chunk_first.call(null,inst_35082);
var inst_35087 = cljs.core.chunk_rest.call(null,inst_35082);
var inst_35088 = cljs.core.count.call(null,inst_35086);
var inst_35060 = inst_35087;
var inst_35061 = inst_35086;
var inst_35062 = inst_35088;
var inst_35063 = (0);
var state_35183__$1 = (function (){var statearr_35238 = state_35183;
(statearr_35238[(13)] = inst_35063);

(statearr_35238[(14)] = inst_35061);

(statearr_35238[(15)] = inst_35060);

(statearr_35238[(16)] = inst_35062);

return statearr_35238;
})();
var statearr_35239_35303 = state_35183__$1;
(statearr_35239_35303[(2)] = null);

(statearr_35239_35303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (11))){
var inst_35060 = (state_35183[(15)]);
var inst_35082 = (state_35183[(7)]);
var inst_35082__$1 = cljs.core.seq.call(null,inst_35060);
var state_35183__$1 = (function (){var statearr_35240 = state_35183;
(statearr_35240[(7)] = inst_35082__$1);

return statearr_35240;
})();
if(inst_35082__$1){
var statearr_35241_35304 = state_35183__$1;
(statearr_35241_35304[(1)] = (16));

} else {
var statearr_35242_35305 = state_35183__$1;
(statearr_35242_35305[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (9))){
var inst_35112 = (state_35183[(2)]);
var state_35183__$1 = state_35183;
var statearr_35243_35306 = state_35183__$1;
(statearr_35243_35306[(2)] = inst_35112);

(statearr_35243_35306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (5))){
var inst_35058 = cljs.core.deref.call(null,cs);
var inst_35059 = cljs.core.seq.call(null,inst_35058);
var inst_35060 = inst_35059;
var inst_35061 = null;
var inst_35062 = (0);
var inst_35063 = (0);
var state_35183__$1 = (function (){var statearr_35244 = state_35183;
(statearr_35244[(13)] = inst_35063);

(statearr_35244[(14)] = inst_35061);

(statearr_35244[(15)] = inst_35060);

(statearr_35244[(16)] = inst_35062);

return statearr_35244;
})();
var statearr_35245_35307 = state_35183__$1;
(statearr_35245_35307[(2)] = null);

(statearr_35245_35307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (14))){
var state_35183__$1 = state_35183;
var statearr_35246_35308 = state_35183__$1;
(statearr_35246_35308[(2)] = null);

(statearr_35246_35308[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (45))){
var inst_35173 = (state_35183[(2)]);
var state_35183__$1 = state_35183;
var statearr_35247_35309 = state_35183__$1;
(statearr_35247_35309[(2)] = inst_35173);

(statearr_35247_35309[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (26))){
var inst_35115 = (state_35183[(29)]);
var inst_35169 = (state_35183[(2)]);
var inst_35170 = cljs.core.seq.call(null,inst_35115);
var state_35183__$1 = (function (){var statearr_35248 = state_35183;
(statearr_35248[(31)] = inst_35169);

return statearr_35248;
})();
if(inst_35170){
var statearr_35249_35310 = state_35183__$1;
(statearr_35249_35310[(1)] = (42));

} else {
var statearr_35250_35311 = state_35183__$1;
(statearr_35250_35311[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (16))){
var inst_35082 = (state_35183[(7)]);
var inst_35084 = cljs.core.chunked_seq_QMARK_.call(null,inst_35082);
var state_35183__$1 = state_35183;
if(inst_35084){
var statearr_35251_35312 = state_35183__$1;
(statearr_35251_35312[(1)] = (19));

} else {
var statearr_35252_35313 = state_35183__$1;
(statearr_35252_35313[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (38))){
var inst_35162 = (state_35183[(2)]);
var state_35183__$1 = state_35183;
var statearr_35253_35314 = state_35183__$1;
(statearr_35253_35314[(2)] = inst_35162);

(statearr_35253_35314[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (30))){
var state_35183__$1 = state_35183;
var statearr_35254_35315 = state_35183__$1;
(statearr_35254_35315[(2)] = null);

(statearr_35254_35315[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (10))){
var inst_35063 = (state_35183[(13)]);
var inst_35061 = (state_35183[(14)]);
var inst_35071 = cljs.core._nth.call(null,inst_35061,inst_35063);
var inst_35072 = cljs.core.nth.call(null,inst_35071,(0),null);
var inst_35073 = cljs.core.nth.call(null,inst_35071,(1),null);
var state_35183__$1 = (function (){var statearr_35255 = state_35183;
(statearr_35255[(26)] = inst_35072);

return statearr_35255;
})();
if(cljs.core.truth_(inst_35073)){
var statearr_35256_35316 = state_35183__$1;
(statearr_35256_35316[(1)] = (13));

} else {
var statearr_35257_35317 = state_35183__$1;
(statearr_35257_35317[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (18))){
var inst_35108 = (state_35183[(2)]);
var state_35183__$1 = state_35183;
var statearr_35258_35318 = state_35183__$1;
(statearr_35258_35318[(2)] = inst_35108);

(statearr_35258_35318[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (42))){
var state_35183__$1 = state_35183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35183__$1,(45),dchan);
} else {
if((state_val_35184 === (37))){
var inst_35142 = (state_35183[(25)]);
var inst_35151 = (state_35183[(23)]);
var inst_35051 = (state_35183[(12)]);
var inst_35151__$1 = cljs.core.first.call(null,inst_35142);
var inst_35152 = cljs.core.async.put_BANG_.call(null,inst_35151__$1,inst_35051,done);
var state_35183__$1 = (function (){var statearr_35259 = state_35183;
(statearr_35259[(23)] = inst_35151__$1);

return statearr_35259;
})();
if(cljs.core.truth_(inst_35152)){
var statearr_35260_35319 = state_35183__$1;
(statearr_35260_35319[(1)] = (39));

} else {
var statearr_35261_35320 = state_35183__$1;
(statearr_35261_35320[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (8))){
var inst_35063 = (state_35183[(13)]);
var inst_35062 = (state_35183[(16)]);
var inst_35065 = (inst_35063 < inst_35062);
var inst_35066 = inst_35065;
var state_35183__$1 = state_35183;
if(cljs.core.truth_(inst_35066)){
var statearr_35262_35321 = state_35183__$1;
(statearr_35262_35321[(1)] = (10));

} else {
var statearr_35263_35322 = state_35183__$1;
(statearr_35263_35322[(1)] = (11));

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
});})(c__34449__auto___35268,cs,m,dchan,dctr,done))
;
return ((function (switch__34359__auto__,c__34449__auto___35268,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__34360__auto__ = null;
var cljs$core$async$mult_$_state_machine__34360__auto____0 = (function (){
var statearr_35264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35264[(0)] = cljs$core$async$mult_$_state_machine__34360__auto__);

(statearr_35264[(1)] = (1));

return statearr_35264;
});
var cljs$core$async$mult_$_state_machine__34360__auto____1 = (function (state_35183){
while(true){
var ret_value__34361__auto__ = (function (){try{while(true){
var result__34362__auto__ = switch__34359__auto__.call(null,state_35183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34362__auto__;
}
break;
}
}catch (e35265){if((e35265 instanceof Object)){
var ex__34363__auto__ = e35265;
var statearr_35266_35323 = state_35183;
(statearr_35266_35323[(5)] = ex__34363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35324 = state_35183;
state_35183 = G__35324;
continue;
} else {
return ret_value__34361__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34360__auto__ = function(state_35183){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34360__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34360__auto____1.call(this,state_35183);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34360__auto____0;
cljs$core$async$mult_$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34360__auto____1;
return cljs$core$async$mult_$_state_machine__34360__auto__;
})()
;})(switch__34359__auto__,c__34449__auto___35268,cs,m,dchan,dctr,done))
})();
var state__34451__auto__ = (function (){var statearr_35267 = f__34450__auto__.call(null);
(statearr_35267[(6)] = c__34449__auto___35268);

return statearr_35267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34451__auto__);
});})(c__34449__auto___35268,cs,m,dchan,dctr,done))
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
var G__35326 = arguments.length;
switch (G__35326) {
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
var len__4499__auto___35338 = arguments.length;
var i__4500__auto___35339 = (0);
while(true){
if((i__4500__auto___35339 < len__4499__auto___35338)){
args__4502__auto__.push((arguments[i__4500__auto___35339]));

var G__35340 = (i__4500__auto___35339 + (1));
i__4500__auto___35339 = G__35340;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35332){
var map__35333 = p__35332;
var map__35333__$1 = ((((!((map__35333 == null)))?(((((map__35333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35333):map__35333);
var opts = map__35333__$1;
var statearr_35335_35341 = state;
(statearr_35335_35341[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__35333,map__35333__$1,opts){
return (function (val){
var statearr_35336_35342 = state;
(statearr_35336_35342[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35333,map__35333__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_35337_35343 = state;
(statearr_35337_35343[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35328){
var G__35329 = cljs.core.first.call(null,seq35328);
var seq35328__$1 = cljs.core.next.call(null,seq35328);
var G__35330 = cljs.core.first.call(null,seq35328__$1);
var seq35328__$2 = cljs.core.next.call(null,seq35328__$1);
var G__35331 = cljs.core.first.call(null,seq35328__$2);
var seq35328__$3 = cljs.core.next.call(null,seq35328__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35329,G__35330,G__35331,seq35328__$3);
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
if(typeof cljs.core.async.t_cljs$core$async35344 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35344 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta35345){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta35345 = meta35345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35346,meta35345__$1){
var self__ = this;
var _35346__$1 = this;
return (new cljs.core.async.t_cljs$core$async35344(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta35345__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35344.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35346){
var self__ = this;
var _35346__$1 = this;
return self__.meta35345;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35344.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35344.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35344.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35344.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35344.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35344.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35344.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35344.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async35344.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta35345","meta35345",-1631841405,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35344.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35344";

cljs.core.async.t_cljs$core$async35344.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35344");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35344.
 */
cljs.core.async.__GT_t_cljs$core$async35344 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35344(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35345){
return (new cljs.core.async.t_cljs$core$async35344(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35345));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35344(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34449__auto___35508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34449__auto___35508,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34450__auto__ = (function (){var switch__34359__auto__ = ((function (c__34449__auto___35508,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35448){
var state_val_35449 = (state_35448[(1)]);
if((state_val_35449 === (7))){
var inst_35363 = (state_35448[(2)]);
var state_35448__$1 = state_35448;
var statearr_35450_35509 = state_35448__$1;
(statearr_35450_35509[(2)] = inst_35363);

(statearr_35450_35509[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (20))){
var inst_35375 = (state_35448[(7)]);
var state_35448__$1 = state_35448;
var statearr_35451_35510 = state_35448__$1;
(statearr_35451_35510[(2)] = inst_35375);

(statearr_35451_35510[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (27))){
var state_35448__$1 = state_35448;
var statearr_35452_35511 = state_35448__$1;
(statearr_35452_35511[(2)] = null);

(statearr_35452_35511[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (1))){
var inst_35350 = (state_35448[(8)]);
var inst_35350__$1 = calc_state.call(null);
var inst_35352 = (inst_35350__$1 == null);
var inst_35353 = cljs.core.not.call(null,inst_35352);
var state_35448__$1 = (function (){var statearr_35453 = state_35448;
(statearr_35453[(8)] = inst_35350__$1);

return statearr_35453;
})();
if(inst_35353){
var statearr_35454_35512 = state_35448__$1;
(statearr_35454_35512[(1)] = (2));

} else {
var statearr_35455_35513 = state_35448__$1;
(statearr_35455_35513[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (24))){
var inst_35422 = (state_35448[(9)]);
var inst_35408 = (state_35448[(10)]);
var inst_35399 = (state_35448[(11)]);
var inst_35422__$1 = inst_35399.call(null,inst_35408);
var state_35448__$1 = (function (){var statearr_35456 = state_35448;
(statearr_35456[(9)] = inst_35422__$1);

return statearr_35456;
})();
if(cljs.core.truth_(inst_35422__$1)){
var statearr_35457_35514 = state_35448__$1;
(statearr_35457_35514[(1)] = (29));

} else {
var statearr_35458_35515 = state_35448__$1;
(statearr_35458_35515[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (4))){
var inst_35366 = (state_35448[(2)]);
var state_35448__$1 = state_35448;
if(cljs.core.truth_(inst_35366)){
var statearr_35459_35516 = state_35448__$1;
(statearr_35459_35516[(1)] = (8));

} else {
var statearr_35460_35517 = state_35448__$1;
(statearr_35460_35517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (15))){
var inst_35393 = (state_35448[(2)]);
var state_35448__$1 = state_35448;
if(cljs.core.truth_(inst_35393)){
var statearr_35461_35518 = state_35448__$1;
(statearr_35461_35518[(1)] = (19));

} else {
var statearr_35462_35519 = state_35448__$1;
(statearr_35462_35519[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (21))){
var inst_35398 = (state_35448[(12)]);
var inst_35398__$1 = (state_35448[(2)]);
var inst_35399 = cljs.core.get.call(null,inst_35398__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35400 = cljs.core.get.call(null,inst_35398__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35401 = cljs.core.get.call(null,inst_35398__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35448__$1 = (function (){var statearr_35463 = state_35448;
(statearr_35463[(11)] = inst_35399);

(statearr_35463[(12)] = inst_35398__$1);

(statearr_35463[(13)] = inst_35400);

return statearr_35463;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35448__$1,(22),inst_35401);
} else {
if((state_val_35449 === (31))){
var inst_35430 = (state_35448[(2)]);
var state_35448__$1 = state_35448;
if(cljs.core.truth_(inst_35430)){
var statearr_35464_35520 = state_35448__$1;
(statearr_35464_35520[(1)] = (32));

} else {
var statearr_35465_35521 = state_35448__$1;
(statearr_35465_35521[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (32))){
var inst_35407 = (state_35448[(14)]);
var state_35448__$1 = state_35448;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35448__$1,(35),out,inst_35407);
} else {
if((state_val_35449 === (33))){
var inst_35398 = (state_35448[(12)]);
var inst_35375 = inst_35398;
var state_35448__$1 = (function (){var statearr_35466 = state_35448;
(statearr_35466[(7)] = inst_35375);

return statearr_35466;
})();
var statearr_35467_35522 = state_35448__$1;
(statearr_35467_35522[(2)] = null);

(statearr_35467_35522[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (13))){
var inst_35375 = (state_35448[(7)]);
var inst_35382 = inst_35375.cljs$lang$protocol_mask$partition0$;
var inst_35383 = (inst_35382 & (64));
var inst_35384 = inst_35375.cljs$core$ISeq$;
var inst_35385 = (cljs.core.PROTOCOL_SENTINEL === inst_35384);
var inst_35386 = ((inst_35383) || (inst_35385));
var state_35448__$1 = state_35448;
if(cljs.core.truth_(inst_35386)){
var statearr_35468_35523 = state_35448__$1;
(statearr_35468_35523[(1)] = (16));

} else {
var statearr_35469_35524 = state_35448__$1;
(statearr_35469_35524[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (22))){
var inst_35408 = (state_35448[(10)]);
var inst_35407 = (state_35448[(14)]);
var inst_35406 = (state_35448[(2)]);
var inst_35407__$1 = cljs.core.nth.call(null,inst_35406,(0),null);
var inst_35408__$1 = cljs.core.nth.call(null,inst_35406,(1),null);
var inst_35409 = (inst_35407__$1 == null);
var inst_35410 = cljs.core._EQ_.call(null,inst_35408__$1,change);
var inst_35411 = ((inst_35409) || (inst_35410));
var state_35448__$1 = (function (){var statearr_35470 = state_35448;
(statearr_35470[(10)] = inst_35408__$1);

(statearr_35470[(14)] = inst_35407__$1);

return statearr_35470;
})();
if(cljs.core.truth_(inst_35411)){
var statearr_35471_35525 = state_35448__$1;
(statearr_35471_35525[(1)] = (23));

} else {
var statearr_35472_35526 = state_35448__$1;
(statearr_35472_35526[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (36))){
var inst_35398 = (state_35448[(12)]);
var inst_35375 = inst_35398;
var state_35448__$1 = (function (){var statearr_35473 = state_35448;
(statearr_35473[(7)] = inst_35375);

return statearr_35473;
})();
var statearr_35474_35527 = state_35448__$1;
(statearr_35474_35527[(2)] = null);

(statearr_35474_35527[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (29))){
var inst_35422 = (state_35448[(9)]);
var state_35448__$1 = state_35448;
var statearr_35475_35528 = state_35448__$1;
(statearr_35475_35528[(2)] = inst_35422);

(statearr_35475_35528[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (6))){
var state_35448__$1 = state_35448;
var statearr_35476_35529 = state_35448__$1;
(statearr_35476_35529[(2)] = false);

(statearr_35476_35529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (28))){
var inst_35418 = (state_35448[(2)]);
var inst_35419 = calc_state.call(null);
var inst_35375 = inst_35419;
var state_35448__$1 = (function (){var statearr_35477 = state_35448;
(statearr_35477[(7)] = inst_35375);

(statearr_35477[(15)] = inst_35418);

return statearr_35477;
})();
var statearr_35478_35530 = state_35448__$1;
(statearr_35478_35530[(2)] = null);

(statearr_35478_35530[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (25))){
var inst_35444 = (state_35448[(2)]);
var state_35448__$1 = state_35448;
var statearr_35479_35531 = state_35448__$1;
(statearr_35479_35531[(2)] = inst_35444);

(statearr_35479_35531[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (34))){
var inst_35442 = (state_35448[(2)]);
var state_35448__$1 = state_35448;
var statearr_35480_35532 = state_35448__$1;
(statearr_35480_35532[(2)] = inst_35442);

(statearr_35480_35532[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (17))){
var state_35448__$1 = state_35448;
var statearr_35481_35533 = state_35448__$1;
(statearr_35481_35533[(2)] = false);

(statearr_35481_35533[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (3))){
var state_35448__$1 = state_35448;
var statearr_35482_35534 = state_35448__$1;
(statearr_35482_35534[(2)] = false);

(statearr_35482_35534[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (12))){
var inst_35446 = (state_35448[(2)]);
var state_35448__$1 = state_35448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35448__$1,inst_35446);
} else {
if((state_val_35449 === (2))){
var inst_35350 = (state_35448[(8)]);
var inst_35355 = inst_35350.cljs$lang$protocol_mask$partition0$;
var inst_35356 = (inst_35355 & (64));
var inst_35357 = inst_35350.cljs$core$ISeq$;
var inst_35358 = (cljs.core.PROTOCOL_SENTINEL === inst_35357);
var inst_35359 = ((inst_35356) || (inst_35358));
var state_35448__$1 = state_35448;
if(cljs.core.truth_(inst_35359)){
var statearr_35483_35535 = state_35448__$1;
(statearr_35483_35535[(1)] = (5));

} else {
var statearr_35484_35536 = state_35448__$1;
(statearr_35484_35536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (23))){
var inst_35407 = (state_35448[(14)]);
var inst_35413 = (inst_35407 == null);
var state_35448__$1 = state_35448;
if(cljs.core.truth_(inst_35413)){
var statearr_35485_35537 = state_35448__$1;
(statearr_35485_35537[(1)] = (26));

} else {
var statearr_35486_35538 = state_35448__$1;
(statearr_35486_35538[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (35))){
var inst_35433 = (state_35448[(2)]);
var state_35448__$1 = state_35448;
if(cljs.core.truth_(inst_35433)){
var statearr_35487_35539 = state_35448__$1;
(statearr_35487_35539[(1)] = (36));

} else {
var statearr_35488_35540 = state_35448__$1;
(statearr_35488_35540[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (19))){
var inst_35375 = (state_35448[(7)]);
var inst_35395 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35375);
var state_35448__$1 = state_35448;
var statearr_35489_35541 = state_35448__$1;
(statearr_35489_35541[(2)] = inst_35395);

(statearr_35489_35541[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (11))){
var inst_35375 = (state_35448[(7)]);
var inst_35379 = (inst_35375 == null);
var inst_35380 = cljs.core.not.call(null,inst_35379);
var state_35448__$1 = state_35448;
if(inst_35380){
var statearr_35490_35542 = state_35448__$1;
(statearr_35490_35542[(1)] = (13));

} else {
var statearr_35491_35543 = state_35448__$1;
(statearr_35491_35543[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (9))){
var inst_35350 = (state_35448[(8)]);
var state_35448__$1 = state_35448;
var statearr_35492_35544 = state_35448__$1;
(statearr_35492_35544[(2)] = inst_35350);

(statearr_35492_35544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (5))){
var state_35448__$1 = state_35448;
var statearr_35493_35545 = state_35448__$1;
(statearr_35493_35545[(2)] = true);

(statearr_35493_35545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (14))){
var state_35448__$1 = state_35448;
var statearr_35494_35546 = state_35448__$1;
(statearr_35494_35546[(2)] = false);

(statearr_35494_35546[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (26))){
var inst_35408 = (state_35448[(10)]);
var inst_35415 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35408);
var state_35448__$1 = state_35448;
var statearr_35495_35547 = state_35448__$1;
(statearr_35495_35547[(2)] = inst_35415);

(statearr_35495_35547[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (16))){
var state_35448__$1 = state_35448;
var statearr_35496_35548 = state_35448__$1;
(statearr_35496_35548[(2)] = true);

(statearr_35496_35548[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (38))){
var inst_35438 = (state_35448[(2)]);
var state_35448__$1 = state_35448;
var statearr_35497_35549 = state_35448__$1;
(statearr_35497_35549[(2)] = inst_35438);

(statearr_35497_35549[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (30))){
var inst_35408 = (state_35448[(10)]);
var inst_35399 = (state_35448[(11)]);
var inst_35400 = (state_35448[(13)]);
var inst_35425 = cljs.core.empty_QMARK_.call(null,inst_35399);
var inst_35426 = inst_35400.call(null,inst_35408);
var inst_35427 = cljs.core.not.call(null,inst_35426);
var inst_35428 = ((inst_35425) && (inst_35427));
var state_35448__$1 = state_35448;
var statearr_35498_35550 = state_35448__$1;
(statearr_35498_35550[(2)] = inst_35428);

(statearr_35498_35550[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (10))){
var inst_35350 = (state_35448[(8)]);
var inst_35371 = (state_35448[(2)]);
var inst_35372 = cljs.core.get.call(null,inst_35371,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35373 = cljs.core.get.call(null,inst_35371,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35374 = cljs.core.get.call(null,inst_35371,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35375 = inst_35350;
var state_35448__$1 = (function (){var statearr_35499 = state_35448;
(statearr_35499[(7)] = inst_35375);

(statearr_35499[(16)] = inst_35374);

(statearr_35499[(17)] = inst_35373);

(statearr_35499[(18)] = inst_35372);

return statearr_35499;
})();
var statearr_35500_35551 = state_35448__$1;
(statearr_35500_35551[(2)] = null);

(statearr_35500_35551[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (18))){
var inst_35390 = (state_35448[(2)]);
var state_35448__$1 = state_35448;
var statearr_35501_35552 = state_35448__$1;
(statearr_35501_35552[(2)] = inst_35390);

(statearr_35501_35552[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (37))){
var state_35448__$1 = state_35448;
var statearr_35502_35553 = state_35448__$1;
(statearr_35502_35553[(2)] = null);

(statearr_35502_35553[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35449 === (8))){
var inst_35350 = (state_35448[(8)]);
var inst_35368 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35350);
var state_35448__$1 = state_35448;
var statearr_35503_35554 = state_35448__$1;
(statearr_35503_35554[(2)] = inst_35368);

(statearr_35503_35554[(1)] = (10));


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
});})(c__34449__auto___35508,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__34359__auto__,c__34449__auto___35508,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__34360__auto__ = null;
var cljs$core$async$mix_$_state_machine__34360__auto____0 = (function (){
var statearr_35504 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35504[(0)] = cljs$core$async$mix_$_state_machine__34360__auto__);

(statearr_35504[(1)] = (1));

return statearr_35504;
});
var cljs$core$async$mix_$_state_machine__34360__auto____1 = (function (state_35448){
while(true){
var ret_value__34361__auto__ = (function (){try{while(true){
var result__34362__auto__ = switch__34359__auto__.call(null,state_35448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34362__auto__;
}
break;
}
}catch (e35505){if((e35505 instanceof Object)){
var ex__34363__auto__ = e35505;
var statearr_35506_35555 = state_35448;
(statearr_35506_35555[(5)] = ex__34363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35556 = state_35448;
state_35448 = G__35556;
continue;
} else {
return ret_value__34361__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34360__auto__ = function(state_35448){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34360__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34360__auto____1.call(this,state_35448);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34360__auto____0;
cljs$core$async$mix_$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34360__auto____1;
return cljs$core$async$mix_$_state_machine__34360__auto__;
})()
;})(switch__34359__auto__,c__34449__auto___35508,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34451__auto__ = (function (){var statearr_35507 = f__34450__auto__.call(null);
(statearr_35507[(6)] = c__34449__auto___35508);

return statearr_35507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34451__auto__);
});})(c__34449__auto___35508,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__35558 = arguments.length;
switch (G__35558) {
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
var G__35562 = arguments.length;
switch (G__35562) {
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
return (function (p1__35560_SHARP_){
if(cljs.core.truth_(p1__35560_SHARP_.call(null,topic))){
return p1__35560_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35560_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35563 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35563 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35564){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35564 = meta35564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35565,meta35564__$1){
var self__ = this;
var _35565__$1 = this;
return (new cljs.core.async.t_cljs$core$async35563(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35564__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35563.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35565){
var self__ = this;
var _35565__$1 = this;
return self__.meta35564;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35563.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35563.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35563.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35563.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35563.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async35563.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35563.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35563.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35564","meta35564",-1614907702,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35563.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35563.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35563";

cljs.core.async.t_cljs$core$async35563.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35563");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35563.
 */
cljs.core.async.__GT_t_cljs$core$async35563 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35563(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35564){
return (new cljs.core.async.t_cljs$core$async35563(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35564));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35563(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34449__auto___35683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34449__auto___35683,mults,ensure_mult,p){
return (function (){
var f__34450__auto__ = (function (){var switch__34359__auto__ = ((function (c__34449__auto___35683,mults,ensure_mult,p){
return (function (state_35637){
var state_val_35638 = (state_35637[(1)]);
if((state_val_35638 === (7))){
var inst_35633 = (state_35637[(2)]);
var state_35637__$1 = state_35637;
var statearr_35639_35684 = state_35637__$1;
(statearr_35639_35684[(2)] = inst_35633);

(statearr_35639_35684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (20))){
var state_35637__$1 = state_35637;
var statearr_35640_35685 = state_35637__$1;
(statearr_35640_35685[(2)] = null);

(statearr_35640_35685[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (1))){
var state_35637__$1 = state_35637;
var statearr_35641_35686 = state_35637__$1;
(statearr_35641_35686[(2)] = null);

(statearr_35641_35686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (24))){
var inst_35616 = (state_35637[(7)]);
var inst_35625 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35616);
var state_35637__$1 = state_35637;
var statearr_35642_35687 = state_35637__$1;
(statearr_35642_35687[(2)] = inst_35625);

(statearr_35642_35687[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (4))){
var inst_35568 = (state_35637[(8)]);
var inst_35568__$1 = (state_35637[(2)]);
var inst_35569 = (inst_35568__$1 == null);
var state_35637__$1 = (function (){var statearr_35643 = state_35637;
(statearr_35643[(8)] = inst_35568__$1);

return statearr_35643;
})();
if(cljs.core.truth_(inst_35569)){
var statearr_35644_35688 = state_35637__$1;
(statearr_35644_35688[(1)] = (5));

} else {
var statearr_35645_35689 = state_35637__$1;
(statearr_35645_35689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (15))){
var inst_35610 = (state_35637[(2)]);
var state_35637__$1 = state_35637;
var statearr_35646_35690 = state_35637__$1;
(statearr_35646_35690[(2)] = inst_35610);

(statearr_35646_35690[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (21))){
var inst_35630 = (state_35637[(2)]);
var state_35637__$1 = (function (){var statearr_35647 = state_35637;
(statearr_35647[(9)] = inst_35630);

return statearr_35647;
})();
var statearr_35648_35691 = state_35637__$1;
(statearr_35648_35691[(2)] = null);

(statearr_35648_35691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (13))){
var inst_35592 = (state_35637[(10)]);
var inst_35594 = cljs.core.chunked_seq_QMARK_.call(null,inst_35592);
var state_35637__$1 = state_35637;
if(inst_35594){
var statearr_35649_35692 = state_35637__$1;
(statearr_35649_35692[(1)] = (16));

} else {
var statearr_35650_35693 = state_35637__$1;
(statearr_35650_35693[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (22))){
var inst_35622 = (state_35637[(2)]);
var state_35637__$1 = state_35637;
if(cljs.core.truth_(inst_35622)){
var statearr_35651_35694 = state_35637__$1;
(statearr_35651_35694[(1)] = (23));

} else {
var statearr_35652_35695 = state_35637__$1;
(statearr_35652_35695[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (6))){
var inst_35568 = (state_35637[(8)]);
var inst_35616 = (state_35637[(7)]);
var inst_35618 = (state_35637[(11)]);
var inst_35616__$1 = topic_fn.call(null,inst_35568);
var inst_35617 = cljs.core.deref.call(null,mults);
var inst_35618__$1 = cljs.core.get.call(null,inst_35617,inst_35616__$1);
var state_35637__$1 = (function (){var statearr_35653 = state_35637;
(statearr_35653[(7)] = inst_35616__$1);

(statearr_35653[(11)] = inst_35618__$1);

return statearr_35653;
})();
if(cljs.core.truth_(inst_35618__$1)){
var statearr_35654_35696 = state_35637__$1;
(statearr_35654_35696[(1)] = (19));

} else {
var statearr_35655_35697 = state_35637__$1;
(statearr_35655_35697[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (25))){
var inst_35627 = (state_35637[(2)]);
var state_35637__$1 = state_35637;
var statearr_35656_35698 = state_35637__$1;
(statearr_35656_35698[(2)] = inst_35627);

(statearr_35656_35698[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (17))){
var inst_35592 = (state_35637[(10)]);
var inst_35601 = cljs.core.first.call(null,inst_35592);
var inst_35602 = cljs.core.async.muxch_STAR_.call(null,inst_35601);
var inst_35603 = cljs.core.async.close_BANG_.call(null,inst_35602);
var inst_35604 = cljs.core.next.call(null,inst_35592);
var inst_35578 = inst_35604;
var inst_35579 = null;
var inst_35580 = (0);
var inst_35581 = (0);
var state_35637__$1 = (function (){var statearr_35657 = state_35637;
(statearr_35657[(12)] = inst_35580);

(statearr_35657[(13)] = inst_35581);

(statearr_35657[(14)] = inst_35578);

(statearr_35657[(15)] = inst_35579);

(statearr_35657[(16)] = inst_35603);

return statearr_35657;
})();
var statearr_35658_35699 = state_35637__$1;
(statearr_35658_35699[(2)] = null);

(statearr_35658_35699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (3))){
var inst_35635 = (state_35637[(2)]);
var state_35637__$1 = state_35637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35637__$1,inst_35635);
} else {
if((state_val_35638 === (12))){
var inst_35612 = (state_35637[(2)]);
var state_35637__$1 = state_35637;
var statearr_35659_35700 = state_35637__$1;
(statearr_35659_35700[(2)] = inst_35612);

(statearr_35659_35700[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (2))){
var state_35637__$1 = state_35637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35637__$1,(4),ch);
} else {
if((state_val_35638 === (23))){
var state_35637__$1 = state_35637;
var statearr_35660_35701 = state_35637__$1;
(statearr_35660_35701[(2)] = null);

(statearr_35660_35701[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (19))){
var inst_35568 = (state_35637[(8)]);
var inst_35618 = (state_35637[(11)]);
var inst_35620 = cljs.core.async.muxch_STAR_.call(null,inst_35618);
var state_35637__$1 = state_35637;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35637__$1,(22),inst_35620,inst_35568);
} else {
if((state_val_35638 === (11))){
var inst_35592 = (state_35637[(10)]);
var inst_35578 = (state_35637[(14)]);
var inst_35592__$1 = cljs.core.seq.call(null,inst_35578);
var state_35637__$1 = (function (){var statearr_35661 = state_35637;
(statearr_35661[(10)] = inst_35592__$1);

return statearr_35661;
})();
if(inst_35592__$1){
var statearr_35662_35702 = state_35637__$1;
(statearr_35662_35702[(1)] = (13));

} else {
var statearr_35663_35703 = state_35637__$1;
(statearr_35663_35703[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (9))){
var inst_35614 = (state_35637[(2)]);
var state_35637__$1 = state_35637;
var statearr_35664_35704 = state_35637__$1;
(statearr_35664_35704[(2)] = inst_35614);

(statearr_35664_35704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (5))){
var inst_35575 = cljs.core.deref.call(null,mults);
var inst_35576 = cljs.core.vals.call(null,inst_35575);
var inst_35577 = cljs.core.seq.call(null,inst_35576);
var inst_35578 = inst_35577;
var inst_35579 = null;
var inst_35580 = (0);
var inst_35581 = (0);
var state_35637__$1 = (function (){var statearr_35665 = state_35637;
(statearr_35665[(12)] = inst_35580);

(statearr_35665[(13)] = inst_35581);

(statearr_35665[(14)] = inst_35578);

(statearr_35665[(15)] = inst_35579);

return statearr_35665;
})();
var statearr_35666_35705 = state_35637__$1;
(statearr_35666_35705[(2)] = null);

(statearr_35666_35705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (14))){
var state_35637__$1 = state_35637;
var statearr_35670_35706 = state_35637__$1;
(statearr_35670_35706[(2)] = null);

(statearr_35670_35706[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (16))){
var inst_35592 = (state_35637[(10)]);
var inst_35596 = cljs.core.chunk_first.call(null,inst_35592);
var inst_35597 = cljs.core.chunk_rest.call(null,inst_35592);
var inst_35598 = cljs.core.count.call(null,inst_35596);
var inst_35578 = inst_35597;
var inst_35579 = inst_35596;
var inst_35580 = inst_35598;
var inst_35581 = (0);
var state_35637__$1 = (function (){var statearr_35671 = state_35637;
(statearr_35671[(12)] = inst_35580);

(statearr_35671[(13)] = inst_35581);

(statearr_35671[(14)] = inst_35578);

(statearr_35671[(15)] = inst_35579);

return statearr_35671;
})();
var statearr_35672_35707 = state_35637__$1;
(statearr_35672_35707[(2)] = null);

(statearr_35672_35707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (10))){
var inst_35580 = (state_35637[(12)]);
var inst_35581 = (state_35637[(13)]);
var inst_35578 = (state_35637[(14)]);
var inst_35579 = (state_35637[(15)]);
var inst_35586 = cljs.core._nth.call(null,inst_35579,inst_35581);
var inst_35587 = cljs.core.async.muxch_STAR_.call(null,inst_35586);
var inst_35588 = cljs.core.async.close_BANG_.call(null,inst_35587);
var inst_35589 = (inst_35581 + (1));
var tmp35667 = inst_35580;
var tmp35668 = inst_35578;
var tmp35669 = inst_35579;
var inst_35578__$1 = tmp35668;
var inst_35579__$1 = tmp35669;
var inst_35580__$1 = tmp35667;
var inst_35581__$1 = inst_35589;
var state_35637__$1 = (function (){var statearr_35673 = state_35637;
(statearr_35673[(12)] = inst_35580__$1);

(statearr_35673[(13)] = inst_35581__$1);

(statearr_35673[(14)] = inst_35578__$1);

(statearr_35673[(15)] = inst_35579__$1);

(statearr_35673[(17)] = inst_35588);

return statearr_35673;
})();
var statearr_35674_35708 = state_35637__$1;
(statearr_35674_35708[(2)] = null);

(statearr_35674_35708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (18))){
var inst_35607 = (state_35637[(2)]);
var state_35637__$1 = state_35637;
var statearr_35675_35709 = state_35637__$1;
(statearr_35675_35709[(2)] = inst_35607);

(statearr_35675_35709[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (8))){
var inst_35580 = (state_35637[(12)]);
var inst_35581 = (state_35637[(13)]);
var inst_35583 = (inst_35581 < inst_35580);
var inst_35584 = inst_35583;
var state_35637__$1 = state_35637;
if(cljs.core.truth_(inst_35584)){
var statearr_35676_35710 = state_35637__$1;
(statearr_35676_35710[(1)] = (10));

} else {
var statearr_35677_35711 = state_35637__$1;
(statearr_35677_35711[(1)] = (11));

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
});})(c__34449__auto___35683,mults,ensure_mult,p))
;
return ((function (switch__34359__auto__,c__34449__auto___35683,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__34360__auto__ = null;
var cljs$core$async$state_machine__34360__auto____0 = (function (){
var statearr_35678 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35678[(0)] = cljs$core$async$state_machine__34360__auto__);

(statearr_35678[(1)] = (1));

return statearr_35678;
});
var cljs$core$async$state_machine__34360__auto____1 = (function (state_35637){
while(true){
var ret_value__34361__auto__ = (function (){try{while(true){
var result__34362__auto__ = switch__34359__auto__.call(null,state_35637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34362__auto__;
}
break;
}
}catch (e35679){if((e35679 instanceof Object)){
var ex__34363__auto__ = e35679;
var statearr_35680_35712 = state_35637;
(statearr_35680_35712[(5)] = ex__34363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35713 = state_35637;
state_35637 = G__35713;
continue;
} else {
return ret_value__34361__auto__;
}
break;
}
});
cljs$core$async$state_machine__34360__auto__ = function(state_35637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34360__auto____1.call(this,state_35637);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34360__auto____0;
cljs$core$async$state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34360__auto____1;
return cljs$core$async$state_machine__34360__auto__;
})()
;})(switch__34359__auto__,c__34449__auto___35683,mults,ensure_mult,p))
})();
var state__34451__auto__ = (function (){var statearr_35681 = f__34450__auto__.call(null);
(statearr_35681[(6)] = c__34449__auto___35683);

return statearr_35681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34451__auto__);
});})(c__34449__auto___35683,mults,ensure_mult,p))
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
var G__35715 = arguments.length;
switch (G__35715) {
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
var G__35718 = arguments.length;
switch (G__35718) {
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
var G__35721 = arguments.length;
switch (G__35721) {
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
var c__34449__auto___35788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34449__auto___35788,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34450__auto__ = (function (){var switch__34359__auto__ = ((function (c__34449__auto___35788,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35760){
var state_val_35761 = (state_35760[(1)]);
if((state_val_35761 === (7))){
var state_35760__$1 = state_35760;
var statearr_35762_35789 = state_35760__$1;
(statearr_35762_35789[(2)] = null);

(statearr_35762_35789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (1))){
var state_35760__$1 = state_35760;
var statearr_35763_35790 = state_35760__$1;
(statearr_35763_35790[(2)] = null);

(statearr_35763_35790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (4))){
var inst_35724 = (state_35760[(7)]);
var inst_35726 = (inst_35724 < cnt);
var state_35760__$1 = state_35760;
if(cljs.core.truth_(inst_35726)){
var statearr_35764_35791 = state_35760__$1;
(statearr_35764_35791[(1)] = (6));

} else {
var statearr_35765_35792 = state_35760__$1;
(statearr_35765_35792[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (15))){
var inst_35756 = (state_35760[(2)]);
var state_35760__$1 = state_35760;
var statearr_35766_35793 = state_35760__$1;
(statearr_35766_35793[(2)] = inst_35756);

(statearr_35766_35793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (13))){
var inst_35749 = cljs.core.async.close_BANG_.call(null,out);
var state_35760__$1 = state_35760;
var statearr_35767_35794 = state_35760__$1;
(statearr_35767_35794[(2)] = inst_35749);

(statearr_35767_35794[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (6))){
var state_35760__$1 = state_35760;
var statearr_35768_35795 = state_35760__$1;
(statearr_35768_35795[(2)] = null);

(statearr_35768_35795[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (3))){
var inst_35758 = (state_35760[(2)]);
var state_35760__$1 = state_35760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35760__$1,inst_35758);
} else {
if((state_val_35761 === (12))){
var inst_35746 = (state_35760[(8)]);
var inst_35746__$1 = (state_35760[(2)]);
var inst_35747 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35746__$1);
var state_35760__$1 = (function (){var statearr_35769 = state_35760;
(statearr_35769[(8)] = inst_35746__$1);

return statearr_35769;
})();
if(cljs.core.truth_(inst_35747)){
var statearr_35770_35796 = state_35760__$1;
(statearr_35770_35796[(1)] = (13));

} else {
var statearr_35771_35797 = state_35760__$1;
(statearr_35771_35797[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (2))){
var inst_35723 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35724 = (0);
var state_35760__$1 = (function (){var statearr_35772 = state_35760;
(statearr_35772[(9)] = inst_35723);

(statearr_35772[(7)] = inst_35724);

return statearr_35772;
})();
var statearr_35773_35798 = state_35760__$1;
(statearr_35773_35798[(2)] = null);

(statearr_35773_35798[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (11))){
var inst_35724 = (state_35760[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35760,(10),Object,null,(9));
var inst_35733 = chs__$1.call(null,inst_35724);
var inst_35734 = done.call(null,inst_35724);
var inst_35735 = cljs.core.async.take_BANG_.call(null,inst_35733,inst_35734);
var state_35760__$1 = state_35760;
var statearr_35774_35799 = state_35760__$1;
(statearr_35774_35799[(2)] = inst_35735);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35760__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (9))){
var inst_35724 = (state_35760[(7)]);
var inst_35737 = (state_35760[(2)]);
var inst_35738 = (inst_35724 + (1));
var inst_35724__$1 = inst_35738;
var state_35760__$1 = (function (){var statearr_35775 = state_35760;
(statearr_35775[(10)] = inst_35737);

(statearr_35775[(7)] = inst_35724__$1);

return statearr_35775;
})();
var statearr_35776_35800 = state_35760__$1;
(statearr_35776_35800[(2)] = null);

(statearr_35776_35800[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (5))){
var inst_35744 = (state_35760[(2)]);
var state_35760__$1 = (function (){var statearr_35777 = state_35760;
(statearr_35777[(11)] = inst_35744);

return statearr_35777;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35760__$1,(12),dchan);
} else {
if((state_val_35761 === (14))){
var inst_35746 = (state_35760[(8)]);
var inst_35751 = cljs.core.apply.call(null,f,inst_35746);
var state_35760__$1 = state_35760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35760__$1,(16),out,inst_35751);
} else {
if((state_val_35761 === (16))){
var inst_35753 = (state_35760[(2)]);
var state_35760__$1 = (function (){var statearr_35778 = state_35760;
(statearr_35778[(12)] = inst_35753);

return statearr_35778;
})();
var statearr_35779_35801 = state_35760__$1;
(statearr_35779_35801[(2)] = null);

(statearr_35779_35801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (10))){
var inst_35728 = (state_35760[(2)]);
var inst_35729 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35760__$1 = (function (){var statearr_35780 = state_35760;
(statearr_35780[(13)] = inst_35728);

return statearr_35780;
})();
var statearr_35781_35802 = state_35760__$1;
(statearr_35781_35802[(2)] = inst_35729);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35760__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (8))){
var inst_35742 = (state_35760[(2)]);
var state_35760__$1 = state_35760;
var statearr_35782_35803 = state_35760__$1;
(statearr_35782_35803[(2)] = inst_35742);

(statearr_35782_35803[(1)] = (5));


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
});})(c__34449__auto___35788,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__34359__auto__,c__34449__auto___35788,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__34360__auto__ = null;
var cljs$core$async$state_machine__34360__auto____0 = (function (){
var statearr_35783 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35783[(0)] = cljs$core$async$state_machine__34360__auto__);

(statearr_35783[(1)] = (1));

return statearr_35783;
});
var cljs$core$async$state_machine__34360__auto____1 = (function (state_35760){
while(true){
var ret_value__34361__auto__ = (function (){try{while(true){
var result__34362__auto__ = switch__34359__auto__.call(null,state_35760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34362__auto__;
}
break;
}
}catch (e35784){if((e35784 instanceof Object)){
var ex__34363__auto__ = e35784;
var statearr_35785_35804 = state_35760;
(statearr_35785_35804[(5)] = ex__34363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35805 = state_35760;
state_35760 = G__35805;
continue;
} else {
return ret_value__34361__auto__;
}
break;
}
});
cljs$core$async$state_machine__34360__auto__ = function(state_35760){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34360__auto____1.call(this,state_35760);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34360__auto____0;
cljs$core$async$state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34360__auto____1;
return cljs$core$async$state_machine__34360__auto__;
})()
;})(switch__34359__auto__,c__34449__auto___35788,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34451__auto__ = (function (){var statearr_35786 = f__34450__auto__.call(null);
(statearr_35786[(6)] = c__34449__auto___35788);

return statearr_35786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34451__auto__);
});})(c__34449__auto___35788,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__35808 = arguments.length;
switch (G__35808) {
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
var c__34449__auto___35862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34449__auto___35862,out){
return (function (){
var f__34450__auto__ = (function (){var switch__34359__auto__ = ((function (c__34449__auto___35862,out){
return (function (state_35840){
var state_val_35841 = (state_35840[(1)]);
if((state_val_35841 === (7))){
var inst_35819 = (state_35840[(7)]);
var inst_35820 = (state_35840[(8)]);
var inst_35819__$1 = (state_35840[(2)]);
var inst_35820__$1 = cljs.core.nth.call(null,inst_35819__$1,(0),null);
var inst_35821 = cljs.core.nth.call(null,inst_35819__$1,(1),null);
var inst_35822 = (inst_35820__$1 == null);
var state_35840__$1 = (function (){var statearr_35842 = state_35840;
(statearr_35842[(7)] = inst_35819__$1);

(statearr_35842[(9)] = inst_35821);

(statearr_35842[(8)] = inst_35820__$1);

return statearr_35842;
})();
if(cljs.core.truth_(inst_35822)){
var statearr_35843_35863 = state_35840__$1;
(statearr_35843_35863[(1)] = (8));

} else {
var statearr_35844_35864 = state_35840__$1;
(statearr_35844_35864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35841 === (1))){
var inst_35809 = cljs.core.vec.call(null,chs);
var inst_35810 = inst_35809;
var state_35840__$1 = (function (){var statearr_35845 = state_35840;
(statearr_35845[(10)] = inst_35810);

return statearr_35845;
})();
var statearr_35846_35865 = state_35840__$1;
(statearr_35846_35865[(2)] = null);

(statearr_35846_35865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35841 === (4))){
var inst_35810 = (state_35840[(10)]);
var state_35840__$1 = state_35840;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35840__$1,(7),inst_35810);
} else {
if((state_val_35841 === (6))){
var inst_35836 = (state_35840[(2)]);
var state_35840__$1 = state_35840;
var statearr_35847_35866 = state_35840__$1;
(statearr_35847_35866[(2)] = inst_35836);

(statearr_35847_35866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35841 === (3))){
var inst_35838 = (state_35840[(2)]);
var state_35840__$1 = state_35840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35840__$1,inst_35838);
} else {
if((state_val_35841 === (2))){
var inst_35810 = (state_35840[(10)]);
var inst_35812 = cljs.core.count.call(null,inst_35810);
var inst_35813 = (inst_35812 > (0));
var state_35840__$1 = state_35840;
if(cljs.core.truth_(inst_35813)){
var statearr_35849_35867 = state_35840__$1;
(statearr_35849_35867[(1)] = (4));

} else {
var statearr_35850_35868 = state_35840__$1;
(statearr_35850_35868[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35841 === (11))){
var inst_35810 = (state_35840[(10)]);
var inst_35829 = (state_35840[(2)]);
var tmp35848 = inst_35810;
var inst_35810__$1 = tmp35848;
var state_35840__$1 = (function (){var statearr_35851 = state_35840;
(statearr_35851[(11)] = inst_35829);

(statearr_35851[(10)] = inst_35810__$1);

return statearr_35851;
})();
var statearr_35852_35869 = state_35840__$1;
(statearr_35852_35869[(2)] = null);

(statearr_35852_35869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35841 === (9))){
var inst_35820 = (state_35840[(8)]);
var state_35840__$1 = state_35840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35840__$1,(11),out,inst_35820);
} else {
if((state_val_35841 === (5))){
var inst_35834 = cljs.core.async.close_BANG_.call(null,out);
var state_35840__$1 = state_35840;
var statearr_35853_35870 = state_35840__$1;
(statearr_35853_35870[(2)] = inst_35834);

(statearr_35853_35870[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35841 === (10))){
var inst_35832 = (state_35840[(2)]);
var state_35840__$1 = state_35840;
var statearr_35854_35871 = state_35840__$1;
(statearr_35854_35871[(2)] = inst_35832);

(statearr_35854_35871[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35841 === (8))){
var inst_35819 = (state_35840[(7)]);
var inst_35821 = (state_35840[(9)]);
var inst_35810 = (state_35840[(10)]);
var inst_35820 = (state_35840[(8)]);
var inst_35824 = (function (){var cs = inst_35810;
var vec__35815 = inst_35819;
var v = inst_35820;
var c = inst_35821;
return ((function (cs,vec__35815,v,c,inst_35819,inst_35821,inst_35810,inst_35820,state_val_35841,c__34449__auto___35862,out){
return (function (p1__35806_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35806_SHARP_);
});
;})(cs,vec__35815,v,c,inst_35819,inst_35821,inst_35810,inst_35820,state_val_35841,c__34449__auto___35862,out))
})();
var inst_35825 = cljs.core.filterv.call(null,inst_35824,inst_35810);
var inst_35810__$1 = inst_35825;
var state_35840__$1 = (function (){var statearr_35855 = state_35840;
(statearr_35855[(10)] = inst_35810__$1);

return statearr_35855;
})();
var statearr_35856_35872 = state_35840__$1;
(statearr_35856_35872[(2)] = null);

(statearr_35856_35872[(1)] = (2));


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
});})(c__34449__auto___35862,out))
;
return ((function (switch__34359__auto__,c__34449__auto___35862,out){
return (function() {
var cljs$core$async$state_machine__34360__auto__ = null;
var cljs$core$async$state_machine__34360__auto____0 = (function (){
var statearr_35857 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35857[(0)] = cljs$core$async$state_machine__34360__auto__);

(statearr_35857[(1)] = (1));

return statearr_35857;
});
var cljs$core$async$state_machine__34360__auto____1 = (function (state_35840){
while(true){
var ret_value__34361__auto__ = (function (){try{while(true){
var result__34362__auto__ = switch__34359__auto__.call(null,state_35840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34362__auto__;
}
break;
}
}catch (e35858){if((e35858 instanceof Object)){
var ex__34363__auto__ = e35858;
var statearr_35859_35873 = state_35840;
(statearr_35859_35873[(5)] = ex__34363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35874 = state_35840;
state_35840 = G__35874;
continue;
} else {
return ret_value__34361__auto__;
}
break;
}
});
cljs$core$async$state_machine__34360__auto__ = function(state_35840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34360__auto____1.call(this,state_35840);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34360__auto____0;
cljs$core$async$state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34360__auto____1;
return cljs$core$async$state_machine__34360__auto__;
})()
;})(switch__34359__auto__,c__34449__auto___35862,out))
})();
var state__34451__auto__ = (function (){var statearr_35860 = f__34450__auto__.call(null);
(statearr_35860[(6)] = c__34449__auto___35862);

return statearr_35860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34451__auto__);
});})(c__34449__auto___35862,out))
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
var G__35876 = arguments.length;
switch (G__35876) {
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
var c__34449__auto___35921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34449__auto___35921,out){
return (function (){
var f__34450__auto__ = (function (){var switch__34359__auto__ = ((function (c__34449__auto___35921,out){
return (function (state_35900){
var state_val_35901 = (state_35900[(1)]);
if((state_val_35901 === (7))){
var inst_35882 = (state_35900[(7)]);
var inst_35882__$1 = (state_35900[(2)]);
var inst_35883 = (inst_35882__$1 == null);
var inst_35884 = cljs.core.not.call(null,inst_35883);
var state_35900__$1 = (function (){var statearr_35902 = state_35900;
(statearr_35902[(7)] = inst_35882__$1);

return statearr_35902;
})();
if(inst_35884){
var statearr_35903_35922 = state_35900__$1;
(statearr_35903_35922[(1)] = (8));

} else {
var statearr_35904_35923 = state_35900__$1;
(statearr_35904_35923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (1))){
var inst_35877 = (0);
var state_35900__$1 = (function (){var statearr_35905 = state_35900;
(statearr_35905[(8)] = inst_35877);

return statearr_35905;
})();
var statearr_35906_35924 = state_35900__$1;
(statearr_35906_35924[(2)] = null);

(statearr_35906_35924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (4))){
var state_35900__$1 = state_35900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35900__$1,(7),ch);
} else {
if((state_val_35901 === (6))){
var inst_35895 = (state_35900[(2)]);
var state_35900__$1 = state_35900;
var statearr_35907_35925 = state_35900__$1;
(statearr_35907_35925[(2)] = inst_35895);

(statearr_35907_35925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (3))){
var inst_35897 = (state_35900[(2)]);
var inst_35898 = cljs.core.async.close_BANG_.call(null,out);
var state_35900__$1 = (function (){var statearr_35908 = state_35900;
(statearr_35908[(9)] = inst_35897);

return statearr_35908;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35900__$1,inst_35898);
} else {
if((state_val_35901 === (2))){
var inst_35877 = (state_35900[(8)]);
var inst_35879 = (inst_35877 < n);
var state_35900__$1 = state_35900;
if(cljs.core.truth_(inst_35879)){
var statearr_35909_35926 = state_35900__$1;
(statearr_35909_35926[(1)] = (4));

} else {
var statearr_35910_35927 = state_35900__$1;
(statearr_35910_35927[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (11))){
var inst_35877 = (state_35900[(8)]);
var inst_35887 = (state_35900[(2)]);
var inst_35888 = (inst_35877 + (1));
var inst_35877__$1 = inst_35888;
var state_35900__$1 = (function (){var statearr_35911 = state_35900;
(statearr_35911[(10)] = inst_35887);

(statearr_35911[(8)] = inst_35877__$1);

return statearr_35911;
})();
var statearr_35912_35928 = state_35900__$1;
(statearr_35912_35928[(2)] = null);

(statearr_35912_35928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (9))){
var state_35900__$1 = state_35900;
var statearr_35913_35929 = state_35900__$1;
(statearr_35913_35929[(2)] = null);

(statearr_35913_35929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (5))){
var state_35900__$1 = state_35900;
var statearr_35914_35930 = state_35900__$1;
(statearr_35914_35930[(2)] = null);

(statearr_35914_35930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (10))){
var inst_35892 = (state_35900[(2)]);
var state_35900__$1 = state_35900;
var statearr_35915_35931 = state_35900__$1;
(statearr_35915_35931[(2)] = inst_35892);

(statearr_35915_35931[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (8))){
var inst_35882 = (state_35900[(7)]);
var state_35900__$1 = state_35900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35900__$1,(11),out,inst_35882);
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
});})(c__34449__auto___35921,out))
;
return ((function (switch__34359__auto__,c__34449__auto___35921,out){
return (function() {
var cljs$core$async$state_machine__34360__auto__ = null;
var cljs$core$async$state_machine__34360__auto____0 = (function (){
var statearr_35916 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35916[(0)] = cljs$core$async$state_machine__34360__auto__);

(statearr_35916[(1)] = (1));

return statearr_35916;
});
var cljs$core$async$state_machine__34360__auto____1 = (function (state_35900){
while(true){
var ret_value__34361__auto__ = (function (){try{while(true){
var result__34362__auto__ = switch__34359__auto__.call(null,state_35900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34362__auto__;
}
break;
}
}catch (e35917){if((e35917 instanceof Object)){
var ex__34363__auto__ = e35917;
var statearr_35918_35932 = state_35900;
(statearr_35918_35932[(5)] = ex__34363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35933 = state_35900;
state_35900 = G__35933;
continue;
} else {
return ret_value__34361__auto__;
}
break;
}
});
cljs$core$async$state_machine__34360__auto__ = function(state_35900){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34360__auto____1.call(this,state_35900);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34360__auto____0;
cljs$core$async$state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34360__auto____1;
return cljs$core$async$state_machine__34360__auto__;
})()
;})(switch__34359__auto__,c__34449__auto___35921,out))
})();
var state__34451__auto__ = (function (){var statearr_35919 = f__34450__auto__.call(null);
(statearr_35919[(6)] = c__34449__auto___35921);

return statearr_35919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34451__auto__);
});})(c__34449__auto___35921,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35935 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35935 = (function (f,ch,meta35936){
this.f = f;
this.ch = ch;
this.meta35936 = meta35936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35937,meta35936__$1){
var self__ = this;
var _35937__$1 = this;
return (new cljs.core.async.t_cljs$core$async35935(self__.f,self__.ch,meta35936__$1));
});

cljs.core.async.t_cljs$core$async35935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35937){
var self__ = this;
var _35937__$1 = this;
return self__.meta35936;
});

cljs.core.async.t_cljs$core$async35935.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35935.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35935.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35935.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35935.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35938 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35938 = (function (f,ch,meta35936,_,fn1,meta35939){
this.f = f;
this.ch = ch;
this.meta35936 = meta35936;
this._ = _;
this.fn1 = fn1;
this.meta35939 = meta35939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35940,meta35939__$1){
var self__ = this;
var _35940__$1 = this;
return (new cljs.core.async.t_cljs$core$async35938(self__.f,self__.ch,self__.meta35936,self__._,self__.fn1,meta35939__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35938.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35940){
var self__ = this;
var _35940__$1 = this;
return self__.meta35939;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35938.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35938.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35938.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35938.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35934_SHARP_){
return f1.call(null,(((p1__35934_SHARP_ == null))?null:self__.f.call(null,p1__35934_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35938.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35936","meta35936",-863620210,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35935","cljs.core.async/t_cljs$core$async35935",1277559240,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35939","meta35939",1133791752,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35938.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35938.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35938";

cljs.core.async.t_cljs$core$async35938.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35938");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35938.
 */
cljs.core.async.__GT_t_cljs$core$async35938 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35938(f__$1,ch__$1,meta35936__$1,___$2,fn1__$1,meta35939){
return (new cljs.core.async.t_cljs$core$async35938(f__$1,ch__$1,meta35936__$1,___$2,fn1__$1,meta35939));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35938(self__.f,self__.ch,self__.meta35936,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async35935.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35935.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35935.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35936","meta35936",-863620210,null)], null);
});

cljs.core.async.t_cljs$core$async35935.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35935.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35935";

cljs.core.async.t_cljs$core$async35935.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35935");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35935.
 */
cljs.core.async.__GT_t_cljs$core$async35935 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35935(f__$1,ch__$1,meta35936){
return (new cljs.core.async.t_cljs$core$async35935(f__$1,ch__$1,meta35936));
});

}

return (new cljs.core.async.t_cljs$core$async35935(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35941 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35941 = (function (f,ch,meta35942){
this.f = f;
this.ch = ch;
this.meta35942 = meta35942;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35943,meta35942__$1){
var self__ = this;
var _35943__$1 = this;
return (new cljs.core.async.t_cljs$core$async35941(self__.f,self__.ch,meta35942__$1));
});

cljs.core.async.t_cljs$core$async35941.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35943){
var self__ = this;
var _35943__$1 = this;
return self__.meta35942;
});

cljs.core.async.t_cljs$core$async35941.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35941.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35941.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35941.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35941.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35941.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35941.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35942","meta35942",-1218955576,null)], null);
});

cljs.core.async.t_cljs$core$async35941.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35941.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35941";

cljs.core.async.t_cljs$core$async35941.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35941");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35941.
 */
cljs.core.async.__GT_t_cljs$core$async35941 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35941(f__$1,ch__$1,meta35942){
return (new cljs.core.async.t_cljs$core$async35941(f__$1,ch__$1,meta35942));
});

}

return (new cljs.core.async.t_cljs$core$async35941(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35944 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35944 = (function (p,ch,meta35945){
this.p = p;
this.ch = ch;
this.meta35945 = meta35945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35946,meta35945__$1){
var self__ = this;
var _35946__$1 = this;
return (new cljs.core.async.t_cljs$core$async35944(self__.p,self__.ch,meta35945__$1));
});

cljs.core.async.t_cljs$core$async35944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35946){
var self__ = this;
var _35946__$1 = this;
return self__.meta35945;
});

cljs.core.async.t_cljs$core$async35944.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35944.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35944.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35944.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35944.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35944.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35944.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35944.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35945","meta35945",-349499887,null)], null);
});

cljs.core.async.t_cljs$core$async35944.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35944";

cljs.core.async.t_cljs$core$async35944.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35944");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35944.
 */
cljs.core.async.__GT_t_cljs$core$async35944 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35944(p__$1,ch__$1,meta35945){
return (new cljs.core.async.t_cljs$core$async35944(p__$1,ch__$1,meta35945));
});

}

return (new cljs.core.async.t_cljs$core$async35944(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35948 = arguments.length;
switch (G__35948) {
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
var c__34449__auto___35988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34449__auto___35988,out){
return (function (){
var f__34450__auto__ = (function (){var switch__34359__auto__ = ((function (c__34449__auto___35988,out){
return (function (state_35969){
var state_val_35970 = (state_35969[(1)]);
if((state_val_35970 === (7))){
var inst_35965 = (state_35969[(2)]);
var state_35969__$1 = state_35969;
var statearr_35971_35989 = state_35969__$1;
(statearr_35971_35989[(2)] = inst_35965);

(statearr_35971_35989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35970 === (1))){
var state_35969__$1 = state_35969;
var statearr_35972_35990 = state_35969__$1;
(statearr_35972_35990[(2)] = null);

(statearr_35972_35990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35970 === (4))){
var inst_35951 = (state_35969[(7)]);
var inst_35951__$1 = (state_35969[(2)]);
var inst_35952 = (inst_35951__$1 == null);
var state_35969__$1 = (function (){var statearr_35973 = state_35969;
(statearr_35973[(7)] = inst_35951__$1);

return statearr_35973;
})();
if(cljs.core.truth_(inst_35952)){
var statearr_35974_35991 = state_35969__$1;
(statearr_35974_35991[(1)] = (5));

} else {
var statearr_35975_35992 = state_35969__$1;
(statearr_35975_35992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35970 === (6))){
var inst_35951 = (state_35969[(7)]);
var inst_35956 = p.call(null,inst_35951);
var state_35969__$1 = state_35969;
if(cljs.core.truth_(inst_35956)){
var statearr_35976_35993 = state_35969__$1;
(statearr_35976_35993[(1)] = (8));

} else {
var statearr_35977_35994 = state_35969__$1;
(statearr_35977_35994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35970 === (3))){
var inst_35967 = (state_35969[(2)]);
var state_35969__$1 = state_35969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35969__$1,inst_35967);
} else {
if((state_val_35970 === (2))){
var state_35969__$1 = state_35969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35969__$1,(4),ch);
} else {
if((state_val_35970 === (11))){
var inst_35959 = (state_35969[(2)]);
var state_35969__$1 = state_35969;
var statearr_35978_35995 = state_35969__$1;
(statearr_35978_35995[(2)] = inst_35959);

(statearr_35978_35995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35970 === (9))){
var state_35969__$1 = state_35969;
var statearr_35979_35996 = state_35969__$1;
(statearr_35979_35996[(2)] = null);

(statearr_35979_35996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35970 === (5))){
var inst_35954 = cljs.core.async.close_BANG_.call(null,out);
var state_35969__$1 = state_35969;
var statearr_35980_35997 = state_35969__$1;
(statearr_35980_35997[(2)] = inst_35954);

(statearr_35980_35997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35970 === (10))){
var inst_35962 = (state_35969[(2)]);
var state_35969__$1 = (function (){var statearr_35981 = state_35969;
(statearr_35981[(8)] = inst_35962);

return statearr_35981;
})();
var statearr_35982_35998 = state_35969__$1;
(statearr_35982_35998[(2)] = null);

(statearr_35982_35998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35970 === (8))){
var inst_35951 = (state_35969[(7)]);
var state_35969__$1 = state_35969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35969__$1,(11),out,inst_35951);
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
});})(c__34449__auto___35988,out))
;
return ((function (switch__34359__auto__,c__34449__auto___35988,out){
return (function() {
var cljs$core$async$state_machine__34360__auto__ = null;
var cljs$core$async$state_machine__34360__auto____0 = (function (){
var statearr_35983 = [null,null,null,null,null,null,null,null,null];
(statearr_35983[(0)] = cljs$core$async$state_machine__34360__auto__);

(statearr_35983[(1)] = (1));

return statearr_35983;
});
var cljs$core$async$state_machine__34360__auto____1 = (function (state_35969){
while(true){
var ret_value__34361__auto__ = (function (){try{while(true){
var result__34362__auto__ = switch__34359__auto__.call(null,state_35969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34362__auto__;
}
break;
}
}catch (e35984){if((e35984 instanceof Object)){
var ex__34363__auto__ = e35984;
var statearr_35985_35999 = state_35969;
(statearr_35985_35999[(5)] = ex__34363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36000 = state_35969;
state_35969 = G__36000;
continue;
} else {
return ret_value__34361__auto__;
}
break;
}
});
cljs$core$async$state_machine__34360__auto__ = function(state_35969){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34360__auto____1.call(this,state_35969);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34360__auto____0;
cljs$core$async$state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34360__auto____1;
return cljs$core$async$state_machine__34360__auto__;
})()
;})(switch__34359__auto__,c__34449__auto___35988,out))
})();
var state__34451__auto__ = (function (){var statearr_35986 = f__34450__auto__.call(null);
(statearr_35986[(6)] = c__34449__auto___35988);

return statearr_35986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34451__auto__);
});})(c__34449__auto___35988,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36002 = arguments.length;
switch (G__36002) {
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
var c__34449__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34449__auto__){
return (function (){
var f__34450__auto__ = (function (){var switch__34359__auto__ = ((function (c__34449__auto__){
return (function (state_36065){
var state_val_36066 = (state_36065[(1)]);
if((state_val_36066 === (7))){
var inst_36061 = (state_36065[(2)]);
var state_36065__$1 = state_36065;
var statearr_36067_36105 = state_36065__$1;
(statearr_36067_36105[(2)] = inst_36061);

(statearr_36067_36105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (20))){
var inst_36031 = (state_36065[(7)]);
var inst_36042 = (state_36065[(2)]);
var inst_36043 = cljs.core.next.call(null,inst_36031);
var inst_36017 = inst_36043;
var inst_36018 = null;
var inst_36019 = (0);
var inst_36020 = (0);
var state_36065__$1 = (function (){var statearr_36068 = state_36065;
(statearr_36068[(8)] = inst_36020);

(statearr_36068[(9)] = inst_36042);

(statearr_36068[(10)] = inst_36019);

(statearr_36068[(11)] = inst_36017);

(statearr_36068[(12)] = inst_36018);

return statearr_36068;
})();
var statearr_36069_36106 = state_36065__$1;
(statearr_36069_36106[(2)] = null);

(statearr_36069_36106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (1))){
var state_36065__$1 = state_36065;
var statearr_36070_36107 = state_36065__$1;
(statearr_36070_36107[(2)] = null);

(statearr_36070_36107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (4))){
var inst_36006 = (state_36065[(13)]);
var inst_36006__$1 = (state_36065[(2)]);
var inst_36007 = (inst_36006__$1 == null);
var state_36065__$1 = (function (){var statearr_36071 = state_36065;
(statearr_36071[(13)] = inst_36006__$1);

return statearr_36071;
})();
if(cljs.core.truth_(inst_36007)){
var statearr_36072_36108 = state_36065__$1;
(statearr_36072_36108[(1)] = (5));

} else {
var statearr_36073_36109 = state_36065__$1;
(statearr_36073_36109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (15))){
var state_36065__$1 = state_36065;
var statearr_36077_36110 = state_36065__$1;
(statearr_36077_36110[(2)] = null);

(statearr_36077_36110[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (21))){
var state_36065__$1 = state_36065;
var statearr_36078_36111 = state_36065__$1;
(statearr_36078_36111[(2)] = null);

(statearr_36078_36111[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (13))){
var inst_36020 = (state_36065[(8)]);
var inst_36019 = (state_36065[(10)]);
var inst_36017 = (state_36065[(11)]);
var inst_36018 = (state_36065[(12)]);
var inst_36027 = (state_36065[(2)]);
var inst_36028 = (inst_36020 + (1));
var tmp36074 = inst_36019;
var tmp36075 = inst_36017;
var tmp36076 = inst_36018;
var inst_36017__$1 = tmp36075;
var inst_36018__$1 = tmp36076;
var inst_36019__$1 = tmp36074;
var inst_36020__$1 = inst_36028;
var state_36065__$1 = (function (){var statearr_36079 = state_36065;
(statearr_36079[(8)] = inst_36020__$1);

(statearr_36079[(10)] = inst_36019__$1);

(statearr_36079[(14)] = inst_36027);

(statearr_36079[(11)] = inst_36017__$1);

(statearr_36079[(12)] = inst_36018__$1);

return statearr_36079;
})();
var statearr_36080_36112 = state_36065__$1;
(statearr_36080_36112[(2)] = null);

(statearr_36080_36112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (22))){
var state_36065__$1 = state_36065;
var statearr_36081_36113 = state_36065__$1;
(statearr_36081_36113[(2)] = null);

(statearr_36081_36113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (6))){
var inst_36006 = (state_36065[(13)]);
var inst_36015 = f.call(null,inst_36006);
var inst_36016 = cljs.core.seq.call(null,inst_36015);
var inst_36017 = inst_36016;
var inst_36018 = null;
var inst_36019 = (0);
var inst_36020 = (0);
var state_36065__$1 = (function (){var statearr_36082 = state_36065;
(statearr_36082[(8)] = inst_36020);

(statearr_36082[(10)] = inst_36019);

(statearr_36082[(11)] = inst_36017);

(statearr_36082[(12)] = inst_36018);

return statearr_36082;
})();
var statearr_36083_36114 = state_36065__$1;
(statearr_36083_36114[(2)] = null);

(statearr_36083_36114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (17))){
var inst_36031 = (state_36065[(7)]);
var inst_36035 = cljs.core.chunk_first.call(null,inst_36031);
var inst_36036 = cljs.core.chunk_rest.call(null,inst_36031);
var inst_36037 = cljs.core.count.call(null,inst_36035);
var inst_36017 = inst_36036;
var inst_36018 = inst_36035;
var inst_36019 = inst_36037;
var inst_36020 = (0);
var state_36065__$1 = (function (){var statearr_36084 = state_36065;
(statearr_36084[(8)] = inst_36020);

(statearr_36084[(10)] = inst_36019);

(statearr_36084[(11)] = inst_36017);

(statearr_36084[(12)] = inst_36018);

return statearr_36084;
})();
var statearr_36085_36115 = state_36065__$1;
(statearr_36085_36115[(2)] = null);

(statearr_36085_36115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (3))){
var inst_36063 = (state_36065[(2)]);
var state_36065__$1 = state_36065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36065__$1,inst_36063);
} else {
if((state_val_36066 === (12))){
var inst_36051 = (state_36065[(2)]);
var state_36065__$1 = state_36065;
var statearr_36086_36116 = state_36065__$1;
(statearr_36086_36116[(2)] = inst_36051);

(statearr_36086_36116[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (2))){
var state_36065__$1 = state_36065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36065__$1,(4),in$);
} else {
if((state_val_36066 === (23))){
var inst_36059 = (state_36065[(2)]);
var state_36065__$1 = state_36065;
var statearr_36087_36117 = state_36065__$1;
(statearr_36087_36117[(2)] = inst_36059);

(statearr_36087_36117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (19))){
var inst_36046 = (state_36065[(2)]);
var state_36065__$1 = state_36065;
var statearr_36088_36118 = state_36065__$1;
(statearr_36088_36118[(2)] = inst_36046);

(statearr_36088_36118[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (11))){
var inst_36031 = (state_36065[(7)]);
var inst_36017 = (state_36065[(11)]);
var inst_36031__$1 = cljs.core.seq.call(null,inst_36017);
var state_36065__$1 = (function (){var statearr_36089 = state_36065;
(statearr_36089[(7)] = inst_36031__$1);

return statearr_36089;
})();
if(inst_36031__$1){
var statearr_36090_36119 = state_36065__$1;
(statearr_36090_36119[(1)] = (14));

} else {
var statearr_36091_36120 = state_36065__$1;
(statearr_36091_36120[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (9))){
var inst_36053 = (state_36065[(2)]);
var inst_36054 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36065__$1 = (function (){var statearr_36092 = state_36065;
(statearr_36092[(15)] = inst_36053);

return statearr_36092;
})();
if(cljs.core.truth_(inst_36054)){
var statearr_36093_36121 = state_36065__$1;
(statearr_36093_36121[(1)] = (21));

} else {
var statearr_36094_36122 = state_36065__$1;
(statearr_36094_36122[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (5))){
var inst_36009 = cljs.core.async.close_BANG_.call(null,out);
var state_36065__$1 = state_36065;
var statearr_36095_36123 = state_36065__$1;
(statearr_36095_36123[(2)] = inst_36009);

(statearr_36095_36123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (14))){
var inst_36031 = (state_36065[(7)]);
var inst_36033 = cljs.core.chunked_seq_QMARK_.call(null,inst_36031);
var state_36065__$1 = state_36065;
if(inst_36033){
var statearr_36096_36124 = state_36065__$1;
(statearr_36096_36124[(1)] = (17));

} else {
var statearr_36097_36125 = state_36065__$1;
(statearr_36097_36125[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (16))){
var inst_36049 = (state_36065[(2)]);
var state_36065__$1 = state_36065;
var statearr_36098_36126 = state_36065__$1;
(statearr_36098_36126[(2)] = inst_36049);

(statearr_36098_36126[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (10))){
var inst_36020 = (state_36065[(8)]);
var inst_36018 = (state_36065[(12)]);
var inst_36025 = cljs.core._nth.call(null,inst_36018,inst_36020);
var state_36065__$1 = state_36065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36065__$1,(13),out,inst_36025);
} else {
if((state_val_36066 === (18))){
var inst_36031 = (state_36065[(7)]);
var inst_36040 = cljs.core.first.call(null,inst_36031);
var state_36065__$1 = state_36065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36065__$1,(20),out,inst_36040);
} else {
if((state_val_36066 === (8))){
var inst_36020 = (state_36065[(8)]);
var inst_36019 = (state_36065[(10)]);
var inst_36022 = (inst_36020 < inst_36019);
var inst_36023 = inst_36022;
var state_36065__$1 = state_36065;
if(cljs.core.truth_(inst_36023)){
var statearr_36099_36127 = state_36065__$1;
(statearr_36099_36127[(1)] = (10));

} else {
var statearr_36100_36128 = state_36065__$1;
(statearr_36100_36128[(1)] = (11));

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
});})(c__34449__auto__))
;
return ((function (switch__34359__auto__,c__34449__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34360__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34360__auto____0 = (function (){
var statearr_36101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36101[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34360__auto__);

(statearr_36101[(1)] = (1));

return statearr_36101;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34360__auto____1 = (function (state_36065){
while(true){
var ret_value__34361__auto__ = (function (){try{while(true){
var result__34362__auto__ = switch__34359__auto__.call(null,state_36065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34362__auto__;
}
break;
}
}catch (e36102){if((e36102 instanceof Object)){
var ex__34363__auto__ = e36102;
var statearr_36103_36129 = state_36065;
(statearr_36103_36129[(5)] = ex__34363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36130 = state_36065;
state_36065 = G__36130;
continue;
} else {
return ret_value__34361__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34360__auto__ = function(state_36065){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34360__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34360__auto____1.call(this,state_36065);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34360__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34360__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34360__auto__;
})()
;})(switch__34359__auto__,c__34449__auto__))
})();
var state__34451__auto__ = (function (){var statearr_36104 = f__34450__auto__.call(null);
(statearr_36104[(6)] = c__34449__auto__);

return statearr_36104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34451__auto__);
});})(c__34449__auto__))
);

return c__34449__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36132 = arguments.length;
switch (G__36132) {
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
var G__36135 = arguments.length;
switch (G__36135) {
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
var G__36138 = arguments.length;
switch (G__36138) {
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
var c__34449__auto___36185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34449__auto___36185,out){
return (function (){
var f__34450__auto__ = (function (){var switch__34359__auto__ = ((function (c__34449__auto___36185,out){
return (function (state_36162){
var state_val_36163 = (state_36162[(1)]);
if((state_val_36163 === (7))){
var inst_36157 = (state_36162[(2)]);
var state_36162__$1 = state_36162;
var statearr_36164_36186 = state_36162__$1;
(statearr_36164_36186[(2)] = inst_36157);

(statearr_36164_36186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36163 === (1))){
var inst_36139 = null;
var state_36162__$1 = (function (){var statearr_36165 = state_36162;
(statearr_36165[(7)] = inst_36139);

return statearr_36165;
})();
var statearr_36166_36187 = state_36162__$1;
(statearr_36166_36187[(2)] = null);

(statearr_36166_36187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36163 === (4))){
var inst_36142 = (state_36162[(8)]);
var inst_36142__$1 = (state_36162[(2)]);
var inst_36143 = (inst_36142__$1 == null);
var inst_36144 = cljs.core.not.call(null,inst_36143);
var state_36162__$1 = (function (){var statearr_36167 = state_36162;
(statearr_36167[(8)] = inst_36142__$1);

return statearr_36167;
})();
if(inst_36144){
var statearr_36168_36188 = state_36162__$1;
(statearr_36168_36188[(1)] = (5));

} else {
var statearr_36169_36189 = state_36162__$1;
(statearr_36169_36189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36163 === (6))){
var state_36162__$1 = state_36162;
var statearr_36170_36190 = state_36162__$1;
(statearr_36170_36190[(2)] = null);

(statearr_36170_36190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36163 === (3))){
var inst_36159 = (state_36162[(2)]);
var inst_36160 = cljs.core.async.close_BANG_.call(null,out);
var state_36162__$1 = (function (){var statearr_36171 = state_36162;
(statearr_36171[(9)] = inst_36159);

return statearr_36171;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36162__$1,inst_36160);
} else {
if((state_val_36163 === (2))){
var state_36162__$1 = state_36162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36162__$1,(4),ch);
} else {
if((state_val_36163 === (11))){
var inst_36142 = (state_36162[(8)]);
var inst_36151 = (state_36162[(2)]);
var inst_36139 = inst_36142;
var state_36162__$1 = (function (){var statearr_36172 = state_36162;
(statearr_36172[(7)] = inst_36139);

(statearr_36172[(10)] = inst_36151);

return statearr_36172;
})();
var statearr_36173_36191 = state_36162__$1;
(statearr_36173_36191[(2)] = null);

(statearr_36173_36191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36163 === (9))){
var inst_36142 = (state_36162[(8)]);
var state_36162__$1 = state_36162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36162__$1,(11),out,inst_36142);
} else {
if((state_val_36163 === (5))){
var inst_36139 = (state_36162[(7)]);
var inst_36142 = (state_36162[(8)]);
var inst_36146 = cljs.core._EQ_.call(null,inst_36142,inst_36139);
var state_36162__$1 = state_36162;
if(inst_36146){
var statearr_36175_36192 = state_36162__$1;
(statearr_36175_36192[(1)] = (8));

} else {
var statearr_36176_36193 = state_36162__$1;
(statearr_36176_36193[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36163 === (10))){
var inst_36154 = (state_36162[(2)]);
var state_36162__$1 = state_36162;
var statearr_36177_36194 = state_36162__$1;
(statearr_36177_36194[(2)] = inst_36154);

(statearr_36177_36194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36163 === (8))){
var inst_36139 = (state_36162[(7)]);
var tmp36174 = inst_36139;
var inst_36139__$1 = tmp36174;
var state_36162__$1 = (function (){var statearr_36178 = state_36162;
(statearr_36178[(7)] = inst_36139__$1);

return statearr_36178;
})();
var statearr_36179_36195 = state_36162__$1;
(statearr_36179_36195[(2)] = null);

(statearr_36179_36195[(1)] = (2));


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
});})(c__34449__auto___36185,out))
;
return ((function (switch__34359__auto__,c__34449__auto___36185,out){
return (function() {
var cljs$core$async$state_machine__34360__auto__ = null;
var cljs$core$async$state_machine__34360__auto____0 = (function (){
var statearr_36180 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36180[(0)] = cljs$core$async$state_machine__34360__auto__);

(statearr_36180[(1)] = (1));

return statearr_36180;
});
var cljs$core$async$state_machine__34360__auto____1 = (function (state_36162){
while(true){
var ret_value__34361__auto__ = (function (){try{while(true){
var result__34362__auto__ = switch__34359__auto__.call(null,state_36162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34362__auto__;
}
break;
}
}catch (e36181){if((e36181 instanceof Object)){
var ex__34363__auto__ = e36181;
var statearr_36182_36196 = state_36162;
(statearr_36182_36196[(5)] = ex__34363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36197 = state_36162;
state_36162 = G__36197;
continue;
} else {
return ret_value__34361__auto__;
}
break;
}
});
cljs$core$async$state_machine__34360__auto__ = function(state_36162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34360__auto____1.call(this,state_36162);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34360__auto____0;
cljs$core$async$state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34360__auto____1;
return cljs$core$async$state_machine__34360__auto__;
})()
;})(switch__34359__auto__,c__34449__auto___36185,out))
})();
var state__34451__auto__ = (function (){var statearr_36183 = f__34450__auto__.call(null);
(statearr_36183[(6)] = c__34449__auto___36185);

return statearr_36183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34451__auto__);
});})(c__34449__auto___36185,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36199 = arguments.length;
switch (G__36199) {
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
var c__34449__auto___36265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34449__auto___36265,out){
return (function (){
var f__34450__auto__ = (function (){var switch__34359__auto__ = ((function (c__34449__auto___36265,out){
return (function (state_36237){
var state_val_36238 = (state_36237[(1)]);
if((state_val_36238 === (7))){
var inst_36233 = (state_36237[(2)]);
var state_36237__$1 = state_36237;
var statearr_36239_36266 = state_36237__$1;
(statearr_36239_36266[(2)] = inst_36233);

(statearr_36239_36266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (1))){
var inst_36200 = (new Array(n));
var inst_36201 = inst_36200;
var inst_36202 = (0);
var state_36237__$1 = (function (){var statearr_36240 = state_36237;
(statearr_36240[(7)] = inst_36202);

(statearr_36240[(8)] = inst_36201);

return statearr_36240;
})();
var statearr_36241_36267 = state_36237__$1;
(statearr_36241_36267[(2)] = null);

(statearr_36241_36267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (4))){
var inst_36205 = (state_36237[(9)]);
var inst_36205__$1 = (state_36237[(2)]);
var inst_36206 = (inst_36205__$1 == null);
var inst_36207 = cljs.core.not.call(null,inst_36206);
var state_36237__$1 = (function (){var statearr_36242 = state_36237;
(statearr_36242[(9)] = inst_36205__$1);

return statearr_36242;
})();
if(inst_36207){
var statearr_36243_36268 = state_36237__$1;
(statearr_36243_36268[(1)] = (5));

} else {
var statearr_36244_36269 = state_36237__$1;
(statearr_36244_36269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (15))){
var inst_36227 = (state_36237[(2)]);
var state_36237__$1 = state_36237;
var statearr_36245_36270 = state_36237__$1;
(statearr_36245_36270[(2)] = inst_36227);

(statearr_36245_36270[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (13))){
var state_36237__$1 = state_36237;
var statearr_36246_36271 = state_36237__$1;
(statearr_36246_36271[(2)] = null);

(statearr_36246_36271[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (6))){
var inst_36202 = (state_36237[(7)]);
var inst_36223 = (inst_36202 > (0));
var state_36237__$1 = state_36237;
if(cljs.core.truth_(inst_36223)){
var statearr_36247_36272 = state_36237__$1;
(statearr_36247_36272[(1)] = (12));

} else {
var statearr_36248_36273 = state_36237__$1;
(statearr_36248_36273[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (3))){
var inst_36235 = (state_36237[(2)]);
var state_36237__$1 = state_36237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36237__$1,inst_36235);
} else {
if((state_val_36238 === (12))){
var inst_36201 = (state_36237[(8)]);
var inst_36225 = cljs.core.vec.call(null,inst_36201);
var state_36237__$1 = state_36237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36237__$1,(15),out,inst_36225);
} else {
if((state_val_36238 === (2))){
var state_36237__$1 = state_36237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36237__$1,(4),ch);
} else {
if((state_val_36238 === (11))){
var inst_36217 = (state_36237[(2)]);
var inst_36218 = (new Array(n));
var inst_36201 = inst_36218;
var inst_36202 = (0);
var state_36237__$1 = (function (){var statearr_36249 = state_36237;
(statearr_36249[(10)] = inst_36217);

(statearr_36249[(7)] = inst_36202);

(statearr_36249[(8)] = inst_36201);

return statearr_36249;
})();
var statearr_36250_36274 = state_36237__$1;
(statearr_36250_36274[(2)] = null);

(statearr_36250_36274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (9))){
var inst_36201 = (state_36237[(8)]);
var inst_36215 = cljs.core.vec.call(null,inst_36201);
var state_36237__$1 = state_36237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36237__$1,(11),out,inst_36215);
} else {
if((state_val_36238 === (5))){
var inst_36205 = (state_36237[(9)]);
var inst_36202 = (state_36237[(7)]);
var inst_36201 = (state_36237[(8)]);
var inst_36210 = (state_36237[(11)]);
var inst_36209 = (inst_36201[inst_36202] = inst_36205);
var inst_36210__$1 = (inst_36202 + (1));
var inst_36211 = (inst_36210__$1 < n);
var state_36237__$1 = (function (){var statearr_36251 = state_36237;
(statearr_36251[(12)] = inst_36209);

(statearr_36251[(11)] = inst_36210__$1);

return statearr_36251;
})();
if(cljs.core.truth_(inst_36211)){
var statearr_36252_36275 = state_36237__$1;
(statearr_36252_36275[(1)] = (8));

} else {
var statearr_36253_36276 = state_36237__$1;
(statearr_36253_36276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (14))){
var inst_36230 = (state_36237[(2)]);
var inst_36231 = cljs.core.async.close_BANG_.call(null,out);
var state_36237__$1 = (function (){var statearr_36255 = state_36237;
(statearr_36255[(13)] = inst_36230);

return statearr_36255;
})();
var statearr_36256_36277 = state_36237__$1;
(statearr_36256_36277[(2)] = inst_36231);

(statearr_36256_36277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (10))){
var inst_36221 = (state_36237[(2)]);
var state_36237__$1 = state_36237;
var statearr_36257_36278 = state_36237__$1;
(statearr_36257_36278[(2)] = inst_36221);

(statearr_36257_36278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (8))){
var inst_36201 = (state_36237[(8)]);
var inst_36210 = (state_36237[(11)]);
var tmp36254 = inst_36201;
var inst_36201__$1 = tmp36254;
var inst_36202 = inst_36210;
var state_36237__$1 = (function (){var statearr_36258 = state_36237;
(statearr_36258[(7)] = inst_36202);

(statearr_36258[(8)] = inst_36201__$1);

return statearr_36258;
})();
var statearr_36259_36279 = state_36237__$1;
(statearr_36259_36279[(2)] = null);

(statearr_36259_36279[(1)] = (2));


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
});})(c__34449__auto___36265,out))
;
return ((function (switch__34359__auto__,c__34449__auto___36265,out){
return (function() {
var cljs$core$async$state_machine__34360__auto__ = null;
var cljs$core$async$state_machine__34360__auto____0 = (function (){
var statearr_36260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36260[(0)] = cljs$core$async$state_machine__34360__auto__);

(statearr_36260[(1)] = (1));

return statearr_36260;
});
var cljs$core$async$state_machine__34360__auto____1 = (function (state_36237){
while(true){
var ret_value__34361__auto__ = (function (){try{while(true){
var result__34362__auto__ = switch__34359__auto__.call(null,state_36237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34362__auto__;
}
break;
}
}catch (e36261){if((e36261 instanceof Object)){
var ex__34363__auto__ = e36261;
var statearr_36262_36280 = state_36237;
(statearr_36262_36280[(5)] = ex__34363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36281 = state_36237;
state_36237 = G__36281;
continue;
} else {
return ret_value__34361__auto__;
}
break;
}
});
cljs$core$async$state_machine__34360__auto__ = function(state_36237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34360__auto____1.call(this,state_36237);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34360__auto____0;
cljs$core$async$state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34360__auto____1;
return cljs$core$async$state_machine__34360__auto__;
})()
;})(switch__34359__auto__,c__34449__auto___36265,out))
})();
var state__34451__auto__ = (function (){var statearr_36263 = f__34450__auto__.call(null);
(statearr_36263[(6)] = c__34449__auto___36265);

return statearr_36263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34451__auto__);
});})(c__34449__auto___36265,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36283 = arguments.length;
switch (G__36283) {
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
var c__34449__auto___36353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34449__auto___36353,out){
return (function (){
var f__34450__auto__ = (function (){var switch__34359__auto__ = ((function (c__34449__auto___36353,out){
return (function (state_36325){
var state_val_36326 = (state_36325[(1)]);
if((state_val_36326 === (7))){
var inst_36321 = (state_36325[(2)]);
var state_36325__$1 = state_36325;
var statearr_36327_36354 = state_36325__$1;
(statearr_36327_36354[(2)] = inst_36321);

(statearr_36327_36354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (1))){
var inst_36284 = [];
var inst_36285 = inst_36284;
var inst_36286 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36325__$1 = (function (){var statearr_36328 = state_36325;
(statearr_36328[(7)] = inst_36285);

(statearr_36328[(8)] = inst_36286);

return statearr_36328;
})();
var statearr_36329_36355 = state_36325__$1;
(statearr_36329_36355[(2)] = null);

(statearr_36329_36355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (4))){
var inst_36289 = (state_36325[(9)]);
var inst_36289__$1 = (state_36325[(2)]);
var inst_36290 = (inst_36289__$1 == null);
var inst_36291 = cljs.core.not.call(null,inst_36290);
var state_36325__$1 = (function (){var statearr_36330 = state_36325;
(statearr_36330[(9)] = inst_36289__$1);

return statearr_36330;
})();
if(inst_36291){
var statearr_36331_36356 = state_36325__$1;
(statearr_36331_36356[(1)] = (5));

} else {
var statearr_36332_36357 = state_36325__$1;
(statearr_36332_36357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (15))){
var inst_36315 = (state_36325[(2)]);
var state_36325__$1 = state_36325;
var statearr_36333_36358 = state_36325__$1;
(statearr_36333_36358[(2)] = inst_36315);

(statearr_36333_36358[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (13))){
var state_36325__$1 = state_36325;
var statearr_36334_36359 = state_36325__$1;
(statearr_36334_36359[(2)] = null);

(statearr_36334_36359[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (6))){
var inst_36285 = (state_36325[(7)]);
var inst_36310 = inst_36285.length;
var inst_36311 = (inst_36310 > (0));
var state_36325__$1 = state_36325;
if(cljs.core.truth_(inst_36311)){
var statearr_36335_36360 = state_36325__$1;
(statearr_36335_36360[(1)] = (12));

} else {
var statearr_36336_36361 = state_36325__$1;
(statearr_36336_36361[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (3))){
var inst_36323 = (state_36325[(2)]);
var state_36325__$1 = state_36325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36325__$1,inst_36323);
} else {
if((state_val_36326 === (12))){
var inst_36285 = (state_36325[(7)]);
var inst_36313 = cljs.core.vec.call(null,inst_36285);
var state_36325__$1 = state_36325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36325__$1,(15),out,inst_36313);
} else {
if((state_val_36326 === (2))){
var state_36325__$1 = state_36325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36325__$1,(4),ch);
} else {
if((state_val_36326 === (11))){
var inst_36293 = (state_36325[(10)]);
var inst_36289 = (state_36325[(9)]);
var inst_36303 = (state_36325[(2)]);
var inst_36304 = [];
var inst_36305 = inst_36304.push(inst_36289);
var inst_36285 = inst_36304;
var inst_36286 = inst_36293;
var state_36325__$1 = (function (){var statearr_36337 = state_36325;
(statearr_36337[(11)] = inst_36305);

(statearr_36337[(7)] = inst_36285);

(statearr_36337[(8)] = inst_36286);

(statearr_36337[(12)] = inst_36303);

return statearr_36337;
})();
var statearr_36338_36362 = state_36325__$1;
(statearr_36338_36362[(2)] = null);

(statearr_36338_36362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (9))){
var inst_36285 = (state_36325[(7)]);
var inst_36301 = cljs.core.vec.call(null,inst_36285);
var state_36325__$1 = state_36325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36325__$1,(11),out,inst_36301);
} else {
if((state_val_36326 === (5))){
var inst_36286 = (state_36325[(8)]);
var inst_36293 = (state_36325[(10)]);
var inst_36289 = (state_36325[(9)]);
var inst_36293__$1 = f.call(null,inst_36289);
var inst_36294 = cljs.core._EQ_.call(null,inst_36293__$1,inst_36286);
var inst_36295 = cljs.core.keyword_identical_QMARK_.call(null,inst_36286,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36296 = ((inst_36294) || (inst_36295));
var state_36325__$1 = (function (){var statearr_36339 = state_36325;
(statearr_36339[(10)] = inst_36293__$1);

return statearr_36339;
})();
if(cljs.core.truth_(inst_36296)){
var statearr_36340_36363 = state_36325__$1;
(statearr_36340_36363[(1)] = (8));

} else {
var statearr_36341_36364 = state_36325__$1;
(statearr_36341_36364[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (14))){
var inst_36318 = (state_36325[(2)]);
var inst_36319 = cljs.core.async.close_BANG_.call(null,out);
var state_36325__$1 = (function (){var statearr_36343 = state_36325;
(statearr_36343[(13)] = inst_36318);

return statearr_36343;
})();
var statearr_36344_36365 = state_36325__$1;
(statearr_36344_36365[(2)] = inst_36319);

(statearr_36344_36365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (10))){
var inst_36308 = (state_36325[(2)]);
var state_36325__$1 = state_36325;
var statearr_36345_36366 = state_36325__$1;
(statearr_36345_36366[(2)] = inst_36308);

(statearr_36345_36366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (8))){
var inst_36285 = (state_36325[(7)]);
var inst_36293 = (state_36325[(10)]);
var inst_36289 = (state_36325[(9)]);
var inst_36298 = inst_36285.push(inst_36289);
var tmp36342 = inst_36285;
var inst_36285__$1 = tmp36342;
var inst_36286 = inst_36293;
var state_36325__$1 = (function (){var statearr_36346 = state_36325;
(statearr_36346[(14)] = inst_36298);

(statearr_36346[(7)] = inst_36285__$1);

(statearr_36346[(8)] = inst_36286);

return statearr_36346;
})();
var statearr_36347_36367 = state_36325__$1;
(statearr_36347_36367[(2)] = null);

(statearr_36347_36367[(1)] = (2));


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
});})(c__34449__auto___36353,out))
;
return ((function (switch__34359__auto__,c__34449__auto___36353,out){
return (function() {
var cljs$core$async$state_machine__34360__auto__ = null;
var cljs$core$async$state_machine__34360__auto____0 = (function (){
var statearr_36348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36348[(0)] = cljs$core$async$state_machine__34360__auto__);

(statearr_36348[(1)] = (1));

return statearr_36348;
});
var cljs$core$async$state_machine__34360__auto____1 = (function (state_36325){
while(true){
var ret_value__34361__auto__ = (function (){try{while(true){
var result__34362__auto__ = switch__34359__auto__.call(null,state_36325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34362__auto__;
}
break;
}
}catch (e36349){if((e36349 instanceof Object)){
var ex__34363__auto__ = e36349;
var statearr_36350_36368 = state_36325;
(statearr_36350_36368[(5)] = ex__34363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36369 = state_36325;
state_36325 = G__36369;
continue;
} else {
return ret_value__34361__auto__;
}
break;
}
});
cljs$core$async$state_machine__34360__auto__ = function(state_36325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34360__auto____1.call(this,state_36325);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34360__auto____0;
cljs$core$async$state_machine__34360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34360__auto____1;
return cljs$core$async$state_machine__34360__auto__;
})()
;})(switch__34359__auto__,c__34449__auto___36353,out))
})();
var state__34451__auto__ = (function (){var statearr_36351 = f__34450__auto__.call(null);
(statearr_36351[(6)] = c__34449__auto___36353);

return statearr_36351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34451__auto__);
});})(c__34449__auto___36353,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1557923598265
