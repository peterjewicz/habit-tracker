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
var G__27015 = arguments.length;
switch (G__27015) {
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
if(typeof cljs.core.async.t_cljs$core$async27016 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27016 = (function (f,blockable,meta27017){
this.f = f;
this.blockable = blockable;
this.meta27017 = meta27017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27018,meta27017__$1){
var self__ = this;
var _27018__$1 = this;
return (new cljs.core.async.t_cljs$core$async27016(self__.f,self__.blockable,meta27017__$1));
});

cljs.core.async.t_cljs$core$async27016.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27018){
var self__ = this;
var _27018__$1 = this;
return self__.meta27017;
});

cljs.core.async.t_cljs$core$async27016.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27016.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27016.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27016.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27016.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27017","meta27017",-1769366896,null)], null);
});

cljs.core.async.t_cljs$core$async27016.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27016.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27016";

cljs.core.async.t_cljs$core$async27016.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27016");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27016.
 */
cljs.core.async.__GT_t_cljs$core$async27016 = (function cljs$core$async$__GT_t_cljs$core$async27016(f__$1,blockable__$1,meta27017){
return (new cljs.core.async.t_cljs$core$async27016(f__$1,blockable__$1,meta27017));
});

}

return (new cljs.core.async.t_cljs$core$async27016(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27022 = arguments.length;
switch (G__27022) {
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
var G__27025 = arguments.length;
switch (G__27025) {
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
var G__27028 = arguments.length;
switch (G__27028) {
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
var val_27030 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27030);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27030,ret){
return (function (){
return fn1.call(null,val_27030);
});})(val_27030,ret))
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
var G__27032 = arguments.length;
switch (G__27032) {
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
var n__4376__auto___27034 = n;
var x_27035 = (0);
while(true){
if((x_27035 < n__4376__auto___27034)){
(a[x_27035] = (0));

var G__27036 = (x_27035 + (1));
x_27035 = G__27036;
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

var G__27037 = (i + (1));
i = G__27037;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27038 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27038 = (function (flag,meta27039){
this.flag = flag;
this.meta27039 = meta27039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27040,meta27039__$1){
var self__ = this;
var _27040__$1 = this;
return (new cljs.core.async.t_cljs$core$async27038(self__.flag,meta27039__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27038.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27040){
var self__ = this;
var _27040__$1 = this;
return self__.meta27039;
});})(flag))
;

cljs.core.async.t_cljs$core$async27038.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27038.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27038.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27038.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27038.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27039","meta27039",136735737,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27038.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27038";

cljs.core.async.t_cljs$core$async27038.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27038");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27038.
 */
cljs.core.async.__GT_t_cljs$core$async27038 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27038(flag__$1,meta27039){
return (new cljs.core.async.t_cljs$core$async27038(flag__$1,meta27039));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27038(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27041 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27041 = (function (flag,cb,meta27042){
this.flag = flag;
this.cb = cb;
this.meta27042 = meta27042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27043,meta27042__$1){
var self__ = this;
var _27043__$1 = this;
return (new cljs.core.async.t_cljs$core$async27041(self__.flag,self__.cb,meta27042__$1));
});

cljs.core.async.t_cljs$core$async27041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27043){
var self__ = this;
var _27043__$1 = this;
return self__.meta27042;
});

cljs.core.async.t_cljs$core$async27041.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27041.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27041.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27041.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27041.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27042","meta27042",865971046,null)], null);
});

cljs.core.async.t_cljs$core$async27041.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27041.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27041";

cljs.core.async.t_cljs$core$async27041.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27041");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27041.
 */
cljs.core.async.__GT_t_cljs$core$async27041 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27041(flag__$1,cb__$1,meta27042){
return (new cljs.core.async.t_cljs$core$async27041(flag__$1,cb__$1,meta27042));
});

}

return (new cljs.core.async.t_cljs$core$async27041(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27044_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27044_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27045_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27045_SHARP_,port], null));
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
var G__27046 = (i + (1));
i = G__27046;
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
var len__4499__auto___27052 = arguments.length;
var i__4500__auto___27053 = (0);
while(true){
if((i__4500__auto___27053 < len__4499__auto___27052)){
args__4502__auto__.push((arguments[i__4500__auto___27053]));

var G__27054 = (i__4500__auto___27053 + (1));
i__4500__auto___27053 = G__27054;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27049){
var map__27050 = p__27049;
var map__27050__$1 = ((((!((map__27050 == null)))?(((((map__27050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27050):map__27050);
var opts = map__27050__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27047){
var G__27048 = cljs.core.first.call(null,seq27047);
var seq27047__$1 = cljs.core.next.call(null,seq27047);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27048,seq27047__$1);
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
var G__27056 = arguments.length;
switch (G__27056) {
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
var c__26955__auto___27102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26955__auto___27102){
return (function (){
var f__26956__auto__ = (function (){var switch__26865__auto__ = ((function (c__26955__auto___27102){
return (function (state_27080){
var state_val_27081 = (state_27080[(1)]);
if((state_val_27081 === (7))){
var inst_27076 = (state_27080[(2)]);
var state_27080__$1 = state_27080;
var statearr_27082_27103 = state_27080__$1;
(statearr_27082_27103[(2)] = inst_27076);

(statearr_27082_27103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (1))){
var state_27080__$1 = state_27080;
var statearr_27083_27104 = state_27080__$1;
(statearr_27083_27104[(2)] = null);

(statearr_27083_27104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (4))){
var inst_27059 = (state_27080[(7)]);
var inst_27059__$1 = (state_27080[(2)]);
var inst_27060 = (inst_27059__$1 == null);
var state_27080__$1 = (function (){var statearr_27084 = state_27080;
(statearr_27084[(7)] = inst_27059__$1);

return statearr_27084;
})();
if(cljs.core.truth_(inst_27060)){
var statearr_27085_27105 = state_27080__$1;
(statearr_27085_27105[(1)] = (5));

} else {
var statearr_27086_27106 = state_27080__$1;
(statearr_27086_27106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (13))){
var state_27080__$1 = state_27080;
var statearr_27087_27107 = state_27080__$1;
(statearr_27087_27107[(2)] = null);

(statearr_27087_27107[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (6))){
var inst_27059 = (state_27080[(7)]);
var state_27080__$1 = state_27080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27080__$1,(11),to,inst_27059);
} else {
if((state_val_27081 === (3))){
var inst_27078 = (state_27080[(2)]);
var state_27080__$1 = state_27080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27080__$1,inst_27078);
} else {
if((state_val_27081 === (12))){
var state_27080__$1 = state_27080;
var statearr_27088_27108 = state_27080__$1;
(statearr_27088_27108[(2)] = null);

(statearr_27088_27108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (2))){
var state_27080__$1 = state_27080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27080__$1,(4),from);
} else {
if((state_val_27081 === (11))){
var inst_27069 = (state_27080[(2)]);
var state_27080__$1 = state_27080;
if(cljs.core.truth_(inst_27069)){
var statearr_27089_27109 = state_27080__$1;
(statearr_27089_27109[(1)] = (12));

} else {
var statearr_27090_27110 = state_27080__$1;
(statearr_27090_27110[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (9))){
var state_27080__$1 = state_27080;
var statearr_27091_27111 = state_27080__$1;
(statearr_27091_27111[(2)] = null);

(statearr_27091_27111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (5))){
var state_27080__$1 = state_27080;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27092_27112 = state_27080__$1;
(statearr_27092_27112[(1)] = (8));

} else {
var statearr_27093_27113 = state_27080__$1;
(statearr_27093_27113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (14))){
var inst_27074 = (state_27080[(2)]);
var state_27080__$1 = state_27080;
var statearr_27094_27114 = state_27080__$1;
(statearr_27094_27114[(2)] = inst_27074);

(statearr_27094_27114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (10))){
var inst_27066 = (state_27080[(2)]);
var state_27080__$1 = state_27080;
var statearr_27095_27115 = state_27080__$1;
(statearr_27095_27115[(2)] = inst_27066);

(statearr_27095_27115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (8))){
var inst_27063 = cljs.core.async.close_BANG_.call(null,to);
var state_27080__$1 = state_27080;
var statearr_27096_27116 = state_27080__$1;
(statearr_27096_27116[(2)] = inst_27063);

(statearr_27096_27116[(1)] = (10));


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
});})(c__26955__auto___27102))
;
return ((function (switch__26865__auto__,c__26955__auto___27102){
return (function() {
var cljs$core$async$state_machine__26866__auto__ = null;
var cljs$core$async$state_machine__26866__auto____0 = (function (){
var statearr_27097 = [null,null,null,null,null,null,null,null];
(statearr_27097[(0)] = cljs$core$async$state_machine__26866__auto__);

(statearr_27097[(1)] = (1));

return statearr_27097;
});
var cljs$core$async$state_machine__26866__auto____1 = (function (state_27080){
while(true){
var ret_value__26867__auto__ = (function (){try{while(true){
var result__26868__auto__ = switch__26865__auto__.call(null,state_27080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26868__auto__;
}
break;
}
}catch (e27098){if((e27098 instanceof Object)){
var ex__26869__auto__ = e27098;
var statearr_27099_27117 = state_27080;
(statearr_27099_27117[(5)] = ex__26869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27118 = state_27080;
state_27080 = G__27118;
continue;
} else {
return ret_value__26867__auto__;
}
break;
}
});
cljs$core$async$state_machine__26866__auto__ = function(state_27080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26866__auto____1.call(this,state_27080);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26866__auto____0;
cljs$core$async$state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26866__auto____1;
return cljs$core$async$state_machine__26866__auto__;
})()
;})(switch__26865__auto__,c__26955__auto___27102))
})();
var state__26957__auto__ = (function (){var statearr_27100 = f__26956__auto__.call(null);
(statearr_27100[(6)] = c__26955__auto___27102);

return statearr_27100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26957__auto__);
});})(c__26955__auto___27102))
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
return (function (p__27119){
var vec__27120 = p__27119;
var v = cljs.core.nth.call(null,vec__27120,(0),null);
var p = cljs.core.nth.call(null,vec__27120,(1),null);
var job = vec__27120;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26955__auto___27291 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26955__auto___27291,res,vec__27120,v,p,job,jobs,results){
return (function (){
var f__26956__auto__ = (function (){var switch__26865__auto__ = ((function (c__26955__auto___27291,res,vec__27120,v,p,job,jobs,results){
return (function (state_27127){
var state_val_27128 = (state_27127[(1)]);
if((state_val_27128 === (1))){
var state_27127__$1 = state_27127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27127__$1,(2),res,v);
} else {
if((state_val_27128 === (2))){
var inst_27124 = (state_27127[(2)]);
var inst_27125 = cljs.core.async.close_BANG_.call(null,res);
var state_27127__$1 = (function (){var statearr_27129 = state_27127;
(statearr_27129[(7)] = inst_27124);

return statearr_27129;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27127__$1,inst_27125);
} else {
return null;
}
}
});})(c__26955__auto___27291,res,vec__27120,v,p,job,jobs,results))
;
return ((function (switch__26865__auto__,c__26955__auto___27291,res,vec__27120,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26866__auto____0 = (function (){
var statearr_27130 = [null,null,null,null,null,null,null,null];
(statearr_27130[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26866__auto__);

(statearr_27130[(1)] = (1));

return statearr_27130;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26866__auto____1 = (function (state_27127){
while(true){
var ret_value__26867__auto__ = (function (){try{while(true){
var result__26868__auto__ = switch__26865__auto__.call(null,state_27127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26868__auto__;
}
break;
}
}catch (e27131){if((e27131 instanceof Object)){
var ex__26869__auto__ = e27131;
var statearr_27132_27292 = state_27127;
(statearr_27132_27292[(5)] = ex__26869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27293 = state_27127;
state_27127 = G__27293;
continue;
} else {
return ret_value__26867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26866__auto__ = function(state_27127){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26866__auto____1.call(this,state_27127);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26866__auto__;
})()
;})(switch__26865__auto__,c__26955__auto___27291,res,vec__27120,v,p,job,jobs,results))
})();
var state__26957__auto__ = (function (){var statearr_27133 = f__26956__auto__.call(null);
(statearr_27133[(6)] = c__26955__auto___27291);

return statearr_27133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26957__auto__);
});})(c__26955__auto___27291,res,vec__27120,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27134){
var vec__27135 = p__27134;
var v = cljs.core.nth.call(null,vec__27135,(0),null);
var p = cljs.core.nth.call(null,vec__27135,(1),null);
var job = vec__27135;
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
var n__4376__auto___27294 = n;
var __27295 = (0);
while(true){
if((__27295 < n__4376__auto___27294)){
var G__27138_27296 = type;
var G__27138_27297__$1 = (((G__27138_27296 instanceof cljs.core.Keyword))?G__27138_27296.fqn:null);
switch (G__27138_27297__$1) {
case "compute":
var c__26955__auto___27299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27295,c__26955__auto___27299,G__27138_27296,G__27138_27297__$1,n__4376__auto___27294,jobs,results,process,async){
return (function (){
var f__26956__auto__ = (function (){var switch__26865__auto__ = ((function (__27295,c__26955__auto___27299,G__27138_27296,G__27138_27297__$1,n__4376__auto___27294,jobs,results,process,async){
return (function (state_27151){
var state_val_27152 = (state_27151[(1)]);
if((state_val_27152 === (1))){
var state_27151__$1 = state_27151;
var statearr_27153_27300 = state_27151__$1;
(statearr_27153_27300[(2)] = null);

(statearr_27153_27300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27152 === (2))){
var state_27151__$1 = state_27151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27151__$1,(4),jobs);
} else {
if((state_val_27152 === (3))){
var inst_27149 = (state_27151[(2)]);
var state_27151__$1 = state_27151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27151__$1,inst_27149);
} else {
if((state_val_27152 === (4))){
var inst_27141 = (state_27151[(2)]);
var inst_27142 = process.call(null,inst_27141);
var state_27151__$1 = state_27151;
if(cljs.core.truth_(inst_27142)){
var statearr_27154_27301 = state_27151__$1;
(statearr_27154_27301[(1)] = (5));

} else {
var statearr_27155_27302 = state_27151__$1;
(statearr_27155_27302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27152 === (5))){
var state_27151__$1 = state_27151;
var statearr_27156_27303 = state_27151__$1;
(statearr_27156_27303[(2)] = null);

(statearr_27156_27303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27152 === (6))){
var state_27151__$1 = state_27151;
var statearr_27157_27304 = state_27151__$1;
(statearr_27157_27304[(2)] = null);

(statearr_27157_27304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27152 === (7))){
var inst_27147 = (state_27151[(2)]);
var state_27151__$1 = state_27151;
var statearr_27158_27305 = state_27151__$1;
(statearr_27158_27305[(2)] = inst_27147);

(statearr_27158_27305[(1)] = (3));


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
});})(__27295,c__26955__auto___27299,G__27138_27296,G__27138_27297__$1,n__4376__auto___27294,jobs,results,process,async))
;
return ((function (__27295,switch__26865__auto__,c__26955__auto___27299,G__27138_27296,G__27138_27297__$1,n__4376__auto___27294,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26866__auto____0 = (function (){
var statearr_27159 = [null,null,null,null,null,null,null];
(statearr_27159[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26866__auto__);

(statearr_27159[(1)] = (1));

return statearr_27159;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26866__auto____1 = (function (state_27151){
while(true){
var ret_value__26867__auto__ = (function (){try{while(true){
var result__26868__auto__ = switch__26865__auto__.call(null,state_27151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26868__auto__;
}
break;
}
}catch (e27160){if((e27160 instanceof Object)){
var ex__26869__auto__ = e27160;
var statearr_27161_27306 = state_27151;
(statearr_27161_27306[(5)] = ex__26869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27307 = state_27151;
state_27151 = G__27307;
continue;
} else {
return ret_value__26867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26866__auto__ = function(state_27151){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26866__auto____1.call(this,state_27151);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26866__auto__;
})()
;})(__27295,switch__26865__auto__,c__26955__auto___27299,G__27138_27296,G__27138_27297__$1,n__4376__auto___27294,jobs,results,process,async))
})();
var state__26957__auto__ = (function (){var statearr_27162 = f__26956__auto__.call(null);
(statearr_27162[(6)] = c__26955__auto___27299);

return statearr_27162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26957__auto__);
});})(__27295,c__26955__auto___27299,G__27138_27296,G__27138_27297__$1,n__4376__auto___27294,jobs,results,process,async))
);


break;
case "async":
var c__26955__auto___27308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27295,c__26955__auto___27308,G__27138_27296,G__27138_27297__$1,n__4376__auto___27294,jobs,results,process,async){
return (function (){
var f__26956__auto__ = (function (){var switch__26865__auto__ = ((function (__27295,c__26955__auto___27308,G__27138_27296,G__27138_27297__$1,n__4376__auto___27294,jobs,results,process,async){
return (function (state_27175){
var state_val_27176 = (state_27175[(1)]);
if((state_val_27176 === (1))){
var state_27175__$1 = state_27175;
var statearr_27177_27309 = state_27175__$1;
(statearr_27177_27309[(2)] = null);

(statearr_27177_27309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (2))){
var state_27175__$1 = state_27175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27175__$1,(4),jobs);
} else {
if((state_val_27176 === (3))){
var inst_27173 = (state_27175[(2)]);
var state_27175__$1 = state_27175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27175__$1,inst_27173);
} else {
if((state_val_27176 === (4))){
var inst_27165 = (state_27175[(2)]);
var inst_27166 = async.call(null,inst_27165);
var state_27175__$1 = state_27175;
if(cljs.core.truth_(inst_27166)){
var statearr_27178_27310 = state_27175__$1;
(statearr_27178_27310[(1)] = (5));

} else {
var statearr_27179_27311 = state_27175__$1;
(statearr_27179_27311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (5))){
var state_27175__$1 = state_27175;
var statearr_27180_27312 = state_27175__$1;
(statearr_27180_27312[(2)] = null);

(statearr_27180_27312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (6))){
var state_27175__$1 = state_27175;
var statearr_27181_27313 = state_27175__$1;
(statearr_27181_27313[(2)] = null);

(statearr_27181_27313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (7))){
var inst_27171 = (state_27175[(2)]);
var state_27175__$1 = state_27175;
var statearr_27182_27314 = state_27175__$1;
(statearr_27182_27314[(2)] = inst_27171);

(statearr_27182_27314[(1)] = (3));


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
});})(__27295,c__26955__auto___27308,G__27138_27296,G__27138_27297__$1,n__4376__auto___27294,jobs,results,process,async))
;
return ((function (__27295,switch__26865__auto__,c__26955__auto___27308,G__27138_27296,G__27138_27297__$1,n__4376__auto___27294,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26866__auto____0 = (function (){
var statearr_27183 = [null,null,null,null,null,null,null];
(statearr_27183[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26866__auto__);

(statearr_27183[(1)] = (1));

return statearr_27183;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26866__auto____1 = (function (state_27175){
while(true){
var ret_value__26867__auto__ = (function (){try{while(true){
var result__26868__auto__ = switch__26865__auto__.call(null,state_27175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26868__auto__;
}
break;
}
}catch (e27184){if((e27184 instanceof Object)){
var ex__26869__auto__ = e27184;
var statearr_27185_27315 = state_27175;
(statearr_27185_27315[(5)] = ex__26869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27316 = state_27175;
state_27175 = G__27316;
continue;
} else {
return ret_value__26867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26866__auto__ = function(state_27175){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26866__auto____1.call(this,state_27175);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26866__auto__;
})()
;})(__27295,switch__26865__auto__,c__26955__auto___27308,G__27138_27296,G__27138_27297__$1,n__4376__auto___27294,jobs,results,process,async))
})();
var state__26957__auto__ = (function (){var statearr_27186 = f__26956__auto__.call(null);
(statearr_27186[(6)] = c__26955__auto___27308);

return statearr_27186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26957__auto__);
});})(__27295,c__26955__auto___27308,G__27138_27296,G__27138_27297__$1,n__4376__auto___27294,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27138_27297__$1)].join('')));

}

var G__27317 = (__27295 + (1));
__27295 = G__27317;
continue;
} else {
}
break;
}

var c__26955__auto___27318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26955__auto___27318,jobs,results,process,async){
return (function (){
var f__26956__auto__ = (function (){var switch__26865__auto__ = ((function (c__26955__auto___27318,jobs,results,process,async){
return (function (state_27208){
var state_val_27209 = (state_27208[(1)]);
if((state_val_27209 === (1))){
var state_27208__$1 = state_27208;
var statearr_27210_27319 = state_27208__$1;
(statearr_27210_27319[(2)] = null);

(statearr_27210_27319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (2))){
var state_27208__$1 = state_27208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27208__$1,(4),from);
} else {
if((state_val_27209 === (3))){
var inst_27206 = (state_27208[(2)]);
var state_27208__$1 = state_27208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27208__$1,inst_27206);
} else {
if((state_val_27209 === (4))){
var inst_27189 = (state_27208[(7)]);
var inst_27189__$1 = (state_27208[(2)]);
var inst_27190 = (inst_27189__$1 == null);
var state_27208__$1 = (function (){var statearr_27211 = state_27208;
(statearr_27211[(7)] = inst_27189__$1);

return statearr_27211;
})();
if(cljs.core.truth_(inst_27190)){
var statearr_27212_27320 = state_27208__$1;
(statearr_27212_27320[(1)] = (5));

} else {
var statearr_27213_27321 = state_27208__$1;
(statearr_27213_27321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (5))){
var inst_27192 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27208__$1 = state_27208;
var statearr_27214_27322 = state_27208__$1;
(statearr_27214_27322[(2)] = inst_27192);

(statearr_27214_27322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (6))){
var inst_27189 = (state_27208[(7)]);
var inst_27194 = (state_27208[(8)]);
var inst_27194__$1 = cljs.core.async.chan.call(null,(1));
var inst_27195 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27196 = [inst_27189,inst_27194__$1];
var inst_27197 = (new cljs.core.PersistentVector(null,2,(5),inst_27195,inst_27196,null));
var state_27208__$1 = (function (){var statearr_27215 = state_27208;
(statearr_27215[(8)] = inst_27194__$1);

return statearr_27215;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27208__$1,(8),jobs,inst_27197);
} else {
if((state_val_27209 === (7))){
var inst_27204 = (state_27208[(2)]);
var state_27208__$1 = state_27208;
var statearr_27216_27323 = state_27208__$1;
(statearr_27216_27323[(2)] = inst_27204);

(statearr_27216_27323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (8))){
var inst_27194 = (state_27208[(8)]);
var inst_27199 = (state_27208[(2)]);
var state_27208__$1 = (function (){var statearr_27217 = state_27208;
(statearr_27217[(9)] = inst_27199);

return statearr_27217;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27208__$1,(9),results,inst_27194);
} else {
if((state_val_27209 === (9))){
var inst_27201 = (state_27208[(2)]);
var state_27208__$1 = (function (){var statearr_27218 = state_27208;
(statearr_27218[(10)] = inst_27201);

return statearr_27218;
})();
var statearr_27219_27324 = state_27208__$1;
(statearr_27219_27324[(2)] = null);

(statearr_27219_27324[(1)] = (2));


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
});})(c__26955__auto___27318,jobs,results,process,async))
;
return ((function (switch__26865__auto__,c__26955__auto___27318,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26866__auto____0 = (function (){
var statearr_27220 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27220[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26866__auto__);

(statearr_27220[(1)] = (1));

return statearr_27220;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26866__auto____1 = (function (state_27208){
while(true){
var ret_value__26867__auto__ = (function (){try{while(true){
var result__26868__auto__ = switch__26865__auto__.call(null,state_27208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26868__auto__;
}
break;
}
}catch (e27221){if((e27221 instanceof Object)){
var ex__26869__auto__ = e27221;
var statearr_27222_27325 = state_27208;
(statearr_27222_27325[(5)] = ex__26869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27326 = state_27208;
state_27208 = G__27326;
continue;
} else {
return ret_value__26867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26866__auto__ = function(state_27208){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26866__auto____1.call(this,state_27208);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26866__auto__;
})()
;})(switch__26865__auto__,c__26955__auto___27318,jobs,results,process,async))
})();
var state__26957__auto__ = (function (){var statearr_27223 = f__26956__auto__.call(null);
(statearr_27223[(6)] = c__26955__auto___27318);

return statearr_27223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26957__auto__);
});})(c__26955__auto___27318,jobs,results,process,async))
);


var c__26955__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26955__auto__,jobs,results,process,async){
return (function (){
var f__26956__auto__ = (function (){var switch__26865__auto__ = ((function (c__26955__auto__,jobs,results,process,async){
return (function (state_27261){
var state_val_27262 = (state_27261[(1)]);
if((state_val_27262 === (7))){
var inst_27257 = (state_27261[(2)]);
var state_27261__$1 = state_27261;
var statearr_27263_27327 = state_27261__$1;
(statearr_27263_27327[(2)] = inst_27257);

(statearr_27263_27327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27262 === (20))){
var state_27261__$1 = state_27261;
var statearr_27264_27328 = state_27261__$1;
(statearr_27264_27328[(2)] = null);

(statearr_27264_27328[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27262 === (1))){
var state_27261__$1 = state_27261;
var statearr_27265_27329 = state_27261__$1;
(statearr_27265_27329[(2)] = null);

(statearr_27265_27329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27262 === (4))){
var inst_27226 = (state_27261[(7)]);
var inst_27226__$1 = (state_27261[(2)]);
var inst_27227 = (inst_27226__$1 == null);
var state_27261__$1 = (function (){var statearr_27266 = state_27261;
(statearr_27266[(7)] = inst_27226__$1);

return statearr_27266;
})();
if(cljs.core.truth_(inst_27227)){
var statearr_27267_27330 = state_27261__$1;
(statearr_27267_27330[(1)] = (5));

} else {
var statearr_27268_27331 = state_27261__$1;
(statearr_27268_27331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27262 === (15))){
var inst_27239 = (state_27261[(8)]);
var state_27261__$1 = state_27261;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27261__$1,(18),to,inst_27239);
} else {
if((state_val_27262 === (21))){
var inst_27252 = (state_27261[(2)]);
var state_27261__$1 = state_27261;
var statearr_27269_27332 = state_27261__$1;
(statearr_27269_27332[(2)] = inst_27252);

(statearr_27269_27332[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27262 === (13))){
var inst_27254 = (state_27261[(2)]);
var state_27261__$1 = (function (){var statearr_27270 = state_27261;
(statearr_27270[(9)] = inst_27254);

return statearr_27270;
})();
var statearr_27271_27333 = state_27261__$1;
(statearr_27271_27333[(2)] = null);

(statearr_27271_27333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27262 === (6))){
var inst_27226 = (state_27261[(7)]);
var state_27261__$1 = state_27261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27261__$1,(11),inst_27226);
} else {
if((state_val_27262 === (17))){
var inst_27247 = (state_27261[(2)]);
var state_27261__$1 = state_27261;
if(cljs.core.truth_(inst_27247)){
var statearr_27272_27334 = state_27261__$1;
(statearr_27272_27334[(1)] = (19));

} else {
var statearr_27273_27335 = state_27261__$1;
(statearr_27273_27335[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27262 === (3))){
var inst_27259 = (state_27261[(2)]);
var state_27261__$1 = state_27261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27261__$1,inst_27259);
} else {
if((state_val_27262 === (12))){
var inst_27236 = (state_27261[(10)]);
var state_27261__$1 = state_27261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27261__$1,(14),inst_27236);
} else {
if((state_val_27262 === (2))){
var state_27261__$1 = state_27261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27261__$1,(4),results);
} else {
if((state_val_27262 === (19))){
var state_27261__$1 = state_27261;
var statearr_27274_27336 = state_27261__$1;
(statearr_27274_27336[(2)] = null);

(statearr_27274_27336[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27262 === (11))){
var inst_27236 = (state_27261[(2)]);
var state_27261__$1 = (function (){var statearr_27275 = state_27261;
(statearr_27275[(10)] = inst_27236);

return statearr_27275;
})();
var statearr_27276_27337 = state_27261__$1;
(statearr_27276_27337[(2)] = null);

(statearr_27276_27337[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27262 === (9))){
var state_27261__$1 = state_27261;
var statearr_27277_27338 = state_27261__$1;
(statearr_27277_27338[(2)] = null);

(statearr_27277_27338[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27262 === (5))){
var state_27261__$1 = state_27261;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27278_27339 = state_27261__$1;
(statearr_27278_27339[(1)] = (8));

} else {
var statearr_27279_27340 = state_27261__$1;
(statearr_27279_27340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27262 === (14))){
var inst_27241 = (state_27261[(11)]);
var inst_27239 = (state_27261[(8)]);
var inst_27239__$1 = (state_27261[(2)]);
var inst_27240 = (inst_27239__$1 == null);
var inst_27241__$1 = cljs.core.not.call(null,inst_27240);
var state_27261__$1 = (function (){var statearr_27280 = state_27261;
(statearr_27280[(11)] = inst_27241__$1);

(statearr_27280[(8)] = inst_27239__$1);

return statearr_27280;
})();
if(inst_27241__$1){
var statearr_27281_27341 = state_27261__$1;
(statearr_27281_27341[(1)] = (15));

} else {
var statearr_27282_27342 = state_27261__$1;
(statearr_27282_27342[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27262 === (16))){
var inst_27241 = (state_27261[(11)]);
var state_27261__$1 = state_27261;
var statearr_27283_27343 = state_27261__$1;
(statearr_27283_27343[(2)] = inst_27241);

(statearr_27283_27343[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27262 === (10))){
var inst_27233 = (state_27261[(2)]);
var state_27261__$1 = state_27261;
var statearr_27284_27344 = state_27261__$1;
(statearr_27284_27344[(2)] = inst_27233);

(statearr_27284_27344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27262 === (18))){
var inst_27244 = (state_27261[(2)]);
var state_27261__$1 = state_27261;
var statearr_27285_27345 = state_27261__$1;
(statearr_27285_27345[(2)] = inst_27244);

(statearr_27285_27345[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27262 === (8))){
var inst_27230 = cljs.core.async.close_BANG_.call(null,to);
var state_27261__$1 = state_27261;
var statearr_27286_27346 = state_27261__$1;
(statearr_27286_27346[(2)] = inst_27230);

(statearr_27286_27346[(1)] = (10));


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
});})(c__26955__auto__,jobs,results,process,async))
;
return ((function (switch__26865__auto__,c__26955__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26866__auto____0 = (function (){
var statearr_27287 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27287[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26866__auto__);

(statearr_27287[(1)] = (1));

return statearr_27287;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26866__auto____1 = (function (state_27261){
while(true){
var ret_value__26867__auto__ = (function (){try{while(true){
var result__26868__auto__ = switch__26865__auto__.call(null,state_27261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26868__auto__;
}
break;
}
}catch (e27288){if((e27288 instanceof Object)){
var ex__26869__auto__ = e27288;
var statearr_27289_27347 = state_27261;
(statearr_27289_27347[(5)] = ex__26869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27348 = state_27261;
state_27261 = G__27348;
continue;
} else {
return ret_value__26867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26866__auto__ = function(state_27261){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26866__auto____1.call(this,state_27261);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26866__auto__;
})()
;})(switch__26865__auto__,c__26955__auto__,jobs,results,process,async))
})();
var state__26957__auto__ = (function (){var statearr_27290 = f__26956__auto__.call(null);
(statearr_27290[(6)] = c__26955__auto__);

return statearr_27290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26957__auto__);
});})(c__26955__auto__,jobs,results,process,async))
);

return c__26955__auto__;
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
var G__27350 = arguments.length;
switch (G__27350) {
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
var G__27353 = arguments.length;
switch (G__27353) {
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
var G__27356 = arguments.length;
switch (G__27356) {
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
var c__26955__auto___27405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26955__auto___27405,tc,fc){
return (function (){
var f__26956__auto__ = (function (){var switch__26865__auto__ = ((function (c__26955__auto___27405,tc,fc){
return (function (state_27382){
var state_val_27383 = (state_27382[(1)]);
if((state_val_27383 === (7))){
var inst_27378 = (state_27382[(2)]);
var state_27382__$1 = state_27382;
var statearr_27384_27406 = state_27382__$1;
(statearr_27384_27406[(2)] = inst_27378);

(statearr_27384_27406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27383 === (1))){
var state_27382__$1 = state_27382;
var statearr_27385_27407 = state_27382__$1;
(statearr_27385_27407[(2)] = null);

(statearr_27385_27407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27383 === (4))){
var inst_27359 = (state_27382[(7)]);
var inst_27359__$1 = (state_27382[(2)]);
var inst_27360 = (inst_27359__$1 == null);
var state_27382__$1 = (function (){var statearr_27386 = state_27382;
(statearr_27386[(7)] = inst_27359__$1);

return statearr_27386;
})();
if(cljs.core.truth_(inst_27360)){
var statearr_27387_27408 = state_27382__$1;
(statearr_27387_27408[(1)] = (5));

} else {
var statearr_27388_27409 = state_27382__$1;
(statearr_27388_27409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27383 === (13))){
var state_27382__$1 = state_27382;
var statearr_27389_27410 = state_27382__$1;
(statearr_27389_27410[(2)] = null);

(statearr_27389_27410[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27383 === (6))){
var inst_27359 = (state_27382[(7)]);
var inst_27365 = p.call(null,inst_27359);
var state_27382__$1 = state_27382;
if(cljs.core.truth_(inst_27365)){
var statearr_27390_27411 = state_27382__$1;
(statearr_27390_27411[(1)] = (9));

} else {
var statearr_27391_27412 = state_27382__$1;
(statearr_27391_27412[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27383 === (3))){
var inst_27380 = (state_27382[(2)]);
var state_27382__$1 = state_27382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27382__$1,inst_27380);
} else {
if((state_val_27383 === (12))){
var state_27382__$1 = state_27382;
var statearr_27392_27413 = state_27382__$1;
(statearr_27392_27413[(2)] = null);

(statearr_27392_27413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27383 === (2))){
var state_27382__$1 = state_27382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27382__$1,(4),ch);
} else {
if((state_val_27383 === (11))){
var inst_27359 = (state_27382[(7)]);
var inst_27369 = (state_27382[(2)]);
var state_27382__$1 = state_27382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27382__$1,(8),inst_27369,inst_27359);
} else {
if((state_val_27383 === (9))){
var state_27382__$1 = state_27382;
var statearr_27393_27414 = state_27382__$1;
(statearr_27393_27414[(2)] = tc);

(statearr_27393_27414[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27383 === (5))){
var inst_27362 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27363 = cljs.core.async.close_BANG_.call(null,fc);
var state_27382__$1 = (function (){var statearr_27394 = state_27382;
(statearr_27394[(8)] = inst_27362);

return statearr_27394;
})();
var statearr_27395_27415 = state_27382__$1;
(statearr_27395_27415[(2)] = inst_27363);

(statearr_27395_27415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27383 === (14))){
var inst_27376 = (state_27382[(2)]);
var state_27382__$1 = state_27382;
var statearr_27396_27416 = state_27382__$1;
(statearr_27396_27416[(2)] = inst_27376);

(statearr_27396_27416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27383 === (10))){
var state_27382__$1 = state_27382;
var statearr_27397_27417 = state_27382__$1;
(statearr_27397_27417[(2)] = fc);

(statearr_27397_27417[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27383 === (8))){
var inst_27371 = (state_27382[(2)]);
var state_27382__$1 = state_27382;
if(cljs.core.truth_(inst_27371)){
var statearr_27398_27418 = state_27382__$1;
(statearr_27398_27418[(1)] = (12));

} else {
var statearr_27399_27419 = state_27382__$1;
(statearr_27399_27419[(1)] = (13));

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
});})(c__26955__auto___27405,tc,fc))
;
return ((function (switch__26865__auto__,c__26955__auto___27405,tc,fc){
return (function() {
var cljs$core$async$state_machine__26866__auto__ = null;
var cljs$core$async$state_machine__26866__auto____0 = (function (){
var statearr_27400 = [null,null,null,null,null,null,null,null,null];
(statearr_27400[(0)] = cljs$core$async$state_machine__26866__auto__);

(statearr_27400[(1)] = (1));

return statearr_27400;
});
var cljs$core$async$state_machine__26866__auto____1 = (function (state_27382){
while(true){
var ret_value__26867__auto__ = (function (){try{while(true){
var result__26868__auto__ = switch__26865__auto__.call(null,state_27382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26868__auto__;
}
break;
}
}catch (e27401){if((e27401 instanceof Object)){
var ex__26869__auto__ = e27401;
var statearr_27402_27420 = state_27382;
(statearr_27402_27420[(5)] = ex__26869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27421 = state_27382;
state_27382 = G__27421;
continue;
} else {
return ret_value__26867__auto__;
}
break;
}
});
cljs$core$async$state_machine__26866__auto__ = function(state_27382){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26866__auto____1.call(this,state_27382);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26866__auto____0;
cljs$core$async$state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26866__auto____1;
return cljs$core$async$state_machine__26866__auto__;
})()
;})(switch__26865__auto__,c__26955__auto___27405,tc,fc))
})();
var state__26957__auto__ = (function (){var statearr_27403 = f__26956__auto__.call(null);
(statearr_27403[(6)] = c__26955__auto___27405);

return statearr_27403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26957__auto__);
});})(c__26955__auto___27405,tc,fc))
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
var c__26955__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26955__auto__){
return (function (){
var f__26956__auto__ = (function (){var switch__26865__auto__ = ((function (c__26955__auto__){
return (function (state_27442){
var state_val_27443 = (state_27442[(1)]);
if((state_val_27443 === (7))){
var inst_27438 = (state_27442[(2)]);
var state_27442__$1 = state_27442;
var statearr_27444_27462 = state_27442__$1;
(statearr_27444_27462[(2)] = inst_27438);

(statearr_27444_27462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (1))){
var inst_27422 = init;
var state_27442__$1 = (function (){var statearr_27445 = state_27442;
(statearr_27445[(7)] = inst_27422);

return statearr_27445;
})();
var statearr_27446_27463 = state_27442__$1;
(statearr_27446_27463[(2)] = null);

(statearr_27446_27463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (4))){
var inst_27425 = (state_27442[(8)]);
var inst_27425__$1 = (state_27442[(2)]);
var inst_27426 = (inst_27425__$1 == null);
var state_27442__$1 = (function (){var statearr_27447 = state_27442;
(statearr_27447[(8)] = inst_27425__$1);

return statearr_27447;
})();
if(cljs.core.truth_(inst_27426)){
var statearr_27448_27464 = state_27442__$1;
(statearr_27448_27464[(1)] = (5));

} else {
var statearr_27449_27465 = state_27442__$1;
(statearr_27449_27465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (6))){
var inst_27422 = (state_27442[(7)]);
var inst_27429 = (state_27442[(9)]);
var inst_27425 = (state_27442[(8)]);
var inst_27429__$1 = f.call(null,inst_27422,inst_27425);
var inst_27430 = cljs.core.reduced_QMARK_.call(null,inst_27429__$1);
var state_27442__$1 = (function (){var statearr_27450 = state_27442;
(statearr_27450[(9)] = inst_27429__$1);

return statearr_27450;
})();
if(inst_27430){
var statearr_27451_27466 = state_27442__$1;
(statearr_27451_27466[(1)] = (8));

} else {
var statearr_27452_27467 = state_27442__$1;
(statearr_27452_27467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (3))){
var inst_27440 = (state_27442[(2)]);
var state_27442__$1 = state_27442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27442__$1,inst_27440);
} else {
if((state_val_27443 === (2))){
var state_27442__$1 = state_27442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27442__$1,(4),ch);
} else {
if((state_val_27443 === (9))){
var inst_27429 = (state_27442[(9)]);
var inst_27422 = inst_27429;
var state_27442__$1 = (function (){var statearr_27453 = state_27442;
(statearr_27453[(7)] = inst_27422);

return statearr_27453;
})();
var statearr_27454_27468 = state_27442__$1;
(statearr_27454_27468[(2)] = null);

(statearr_27454_27468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (5))){
var inst_27422 = (state_27442[(7)]);
var state_27442__$1 = state_27442;
var statearr_27455_27469 = state_27442__$1;
(statearr_27455_27469[(2)] = inst_27422);

(statearr_27455_27469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (10))){
var inst_27436 = (state_27442[(2)]);
var state_27442__$1 = state_27442;
var statearr_27456_27470 = state_27442__$1;
(statearr_27456_27470[(2)] = inst_27436);

(statearr_27456_27470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (8))){
var inst_27429 = (state_27442[(9)]);
var inst_27432 = cljs.core.deref.call(null,inst_27429);
var state_27442__$1 = state_27442;
var statearr_27457_27471 = state_27442__$1;
(statearr_27457_27471[(2)] = inst_27432);

(statearr_27457_27471[(1)] = (10));


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
});})(c__26955__auto__))
;
return ((function (switch__26865__auto__,c__26955__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26866__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26866__auto____0 = (function (){
var statearr_27458 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27458[(0)] = cljs$core$async$reduce_$_state_machine__26866__auto__);

(statearr_27458[(1)] = (1));

return statearr_27458;
});
var cljs$core$async$reduce_$_state_machine__26866__auto____1 = (function (state_27442){
while(true){
var ret_value__26867__auto__ = (function (){try{while(true){
var result__26868__auto__ = switch__26865__auto__.call(null,state_27442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26868__auto__;
}
break;
}
}catch (e27459){if((e27459 instanceof Object)){
var ex__26869__auto__ = e27459;
var statearr_27460_27472 = state_27442;
(statearr_27460_27472[(5)] = ex__26869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27473 = state_27442;
state_27442 = G__27473;
continue;
} else {
return ret_value__26867__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26866__auto__ = function(state_27442){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26866__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26866__auto____1.call(this,state_27442);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26866__auto____0;
cljs$core$async$reduce_$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26866__auto____1;
return cljs$core$async$reduce_$_state_machine__26866__auto__;
})()
;})(switch__26865__auto__,c__26955__auto__))
})();
var state__26957__auto__ = (function (){var statearr_27461 = f__26956__auto__.call(null);
(statearr_27461[(6)] = c__26955__auto__);

return statearr_27461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26957__auto__);
});})(c__26955__auto__))
);

return c__26955__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26955__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26955__auto__,f__$1){
return (function (){
var f__26956__auto__ = (function (){var switch__26865__auto__ = ((function (c__26955__auto__,f__$1){
return (function (state_27479){
var state_val_27480 = (state_27479[(1)]);
if((state_val_27480 === (1))){
var inst_27474 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27479__$1 = state_27479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27479__$1,(2),inst_27474);
} else {
if((state_val_27480 === (2))){
var inst_27476 = (state_27479[(2)]);
var inst_27477 = f__$1.call(null,inst_27476);
var state_27479__$1 = state_27479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27479__$1,inst_27477);
} else {
return null;
}
}
});})(c__26955__auto__,f__$1))
;
return ((function (switch__26865__auto__,c__26955__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26866__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26866__auto____0 = (function (){
var statearr_27481 = [null,null,null,null,null,null,null];
(statearr_27481[(0)] = cljs$core$async$transduce_$_state_machine__26866__auto__);

(statearr_27481[(1)] = (1));

return statearr_27481;
});
var cljs$core$async$transduce_$_state_machine__26866__auto____1 = (function (state_27479){
while(true){
var ret_value__26867__auto__ = (function (){try{while(true){
var result__26868__auto__ = switch__26865__auto__.call(null,state_27479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26868__auto__;
}
break;
}
}catch (e27482){if((e27482 instanceof Object)){
var ex__26869__auto__ = e27482;
var statearr_27483_27485 = state_27479;
(statearr_27483_27485[(5)] = ex__26869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27486 = state_27479;
state_27479 = G__27486;
continue;
} else {
return ret_value__26867__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26866__auto__ = function(state_27479){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26866__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26866__auto____1.call(this,state_27479);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26866__auto____0;
cljs$core$async$transduce_$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26866__auto____1;
return cljs$core$async$transduce_$_state_machine__26866__auto__;
})()
;})(switch__26865__auto__,c__26955__auto__,f__$1))
})();
var state__26957__auto__ = (function (){var statearr_27484 = f__26956__auto__.call(null);
(statearr_27484[(6)] = c__26955__auto__);

return statearr_27484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26957__auto__);
});})(c__26955__auto__,f__$1))
);

return c__26955__auto__;
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
var G__27488 = arguments.length;
switch (G__27488) {
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
var c__26955__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26955__auto__){
return (function (){
var f__26956__auto__ = (function (){var switch__26865__auto__ = ((function (c__26955__auto__){
return (function (state_27513){
var state_val_27514 = (state_27513[(1)]);
if((state_val_27514 === (7))){
var inst_27495 = (state_27513[(2)]);
var state_27513__$1 = state_27513;
var statearr_27515_27536 = state_27513__$1;
(statearr_27515_27536[(2)] = inst_27495);

(statearr_27515_27536[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27514 === (1))){
var inst_27489 = cljs.core.seq.call(null,coll);
var inst_27490 = inst_27489;
var state_27513__$1 = (function (){var statearr_27516 = state_27513;
(statearr_27516[(7)] = inst_27490);

return statearr_27516;
})();
var statearr_27517_27537 = state_27513__$1;
(statearr_27517_27537[(2)] = null);

(statearr_27517_27537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27514 === (4))){
var inst_27490 = (state_27513[(7)]);
var inst_27493 = cljs.core.first.call(null,inst_27490);
var state_27513__$1 = state_27513;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27513__$1,(7),ch,inst_27493);
} else {
if((state_val_27514 === (13))){
var inst_27507 = (state_27513[(2)]);
var state_27513__$1 = state_27513;
var statearr_27518_27538 = state_27513__$1;
(statearr_27518_27538[(2)] = inst_27507);

(statearr_27518_27538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27514 === (6))){
var inst_27498 = (state_27513[(2)]);
var state_27513__$1 = state_27513;
if(cljs.core.truth_(inst_27498)){
var statearr_27519_27539 = state_27513__$1;
(statearr_27519_27539[(1)] = (8));

} else {
var statearr_27520_27540 = state_27513__$1;
(statearr_27520_27540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27514 === (3))){
var inst_27511 = (state_27513[(2)]);
var state_27513__$1 = state_27513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27513__$1,inst_27511);
} else {
if((state_val_27514 === (12))){
var state_27513__$1 = state_27513;
var statearr_27521_27541 = state_27513__$1;
(statearr_27521_27541[(2)] = null);

(statearr_27521_27541[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27514 === (2))){
var inst_27490 = (state_27513[(7)]);
var state_27513__$1 = state_27513;
if(cljs.core.truth_(inst_27490)){
var statearr_27522_27542 = state_27513__$1;
(statearr_27522_27542[(1)] = (4));

} else {
var statearr_27523_27543 = state_27513__$1;
(statearr_27523_27543[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27514 === (11))){
var inst_27504 = cljs.core.async.close_BANG_.call(null,ch);
var state_27513__$1 = state_27513;
var statearr_27524_27544 = state_27513__$1;
(statearr_27524_27544[(2)] = inst_27504);

(statearr_27524_27544[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27514 === (9))){
var state_27513__$1 = state_27513;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27525_27545 = state_27513__$1;
(statearr_27525_27545[(1)] = (11));

} else {
var statearr_27526_27546 = state_27513__$1;
(statearr_27526_27546[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27514 === (5))){
var inst_27490 = (state_27513[(7)]);
var state_27513__$1 = state_27513;
var statearr_27527_27547 = state_27513__$1;
(statearr_27527_27547[(2)] = inst_27490);

(statearr_27527_27547[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27514 === (10))){
var inst_27509 = (state_27513[(2)]);
var state_27513__$1 = state_27513;
var statearr_27528_27548 = state_27513__$1;
(statearr_27528_27548[(2)] = inst_27509);

(statearr_27528_27548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27514 === (8))){
var inst_27490 = (state_27513[(7)]);
var inst_27500 = cljs.core.next.call(null,inst_27490);
var inst_27490__$1 = inst_27500;
var state_27513__$1 = (function (){var statearr_27529 = state_27513;
(statearr_27529[(7)] = inst_27490__$1);

return statearr_27529;
})();
var statearr_27530_27549 = state_27513__$1;
(statearr_27530_27549[(2)] = null);

(statearr_27530_27549[(1)] = (2));


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
});})(c__26955__auto__))
;
return ((function (switch__26865__auto__,c__26955__auto__){
return (function() {
var cljs$core$async$state_machine__26866__auto__ = null;
var cljs$core$async$state_machine__26866__auto____0 = (function (){
var statearr_27531 = [null,null,null,null,null,null,null,null];
(statearr_27531[(0)] = cljs$core$async$state_machine__26866__auto__);

(statearr_27531[(1)] = (1));

return statearr_27531;
});
var cljs$core$async$state_machine__26866__auto____1 = (function (state_27513){
while(true){
var ret_value__26867__auto__ = (function (){try{while(true){
var result__26868__auto__ = switch__26865__auto__.call(null,state_27513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26868__auto__;
}
break;
}
}catch (e27532){if((e27532 instanceof Object)){
var ex__26869__auto__ = e27532;
var statearr_27533_27550 = state_27513;
(statearr_27533_27550[(5)] = ex__26869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27551 = state_27513;
state_27513 = G__27551;
continue;
} else {
return ret_value__26867__auto__;
}
break;
}
});
cljs$core$async$state_machine__26866__auto__ = function(state_27513){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26866__auto____1.call(this,state_27513);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26866__auto____0;
cljs$core$async$state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26866__auto____1;
return cljs$core$async$state_machine__26866__auto__;
})()
;})(switch__26865__auto__,c__26955__auto__))
})();
var state__26957__auto__ = (function (){var statearr_27534 = f__26956__auto__.call(null);
(statearr_27534[(6)] = c__26955__auto__);

return statearr_27534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26957__auto__);
});})(c__26955__auto__))
);

return c__26955__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async27552 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27552 = (function (ch,cs,meta27553){
this.ch = ch;
this.cs = cs;
this.meta27553 = meta27553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27554,meta27553__$1){
var self__ = this;
var _27554__$1 = this;
return (new cljs.core.async.t_cljs$core$async27552(self__.ch,self__.cs,meta27553__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27552.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27554){
var self__ = this;
var _27554__$1 = this;
return self__.meta27553;
});})(cs))
;

cljs.core.async.t_cljs$core$async27552.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27552.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27552.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27552.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27552.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27552.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27552.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27553","meta27553",-953359069,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27552.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27552";

cljs.core.async.t_cljs$core$async27552.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27552");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27552.
 */
cljs.core.async.__GT_t_cljs$core$async27552 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27552(ch__$1,cs__$1,meta27553){
return (new cljs.core.async.t_cljs$core$async27552(ch__$1,cs__$1,meta27553));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27552(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26955__auto___27774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26955__auto___27774,cs,m,dchan,dctr,done){
return (function (){
var f__26956__auto__ = (function (){var switch__26865__auto__ = ((function (c__26955__auto___27774,cs,m,dchan,dctr,done){
return (function (state_27689){
var state_val_27690 = (state_27689[(1)]);
if((state_val_27690 === (7))){
var inst_27685 = (state_27689[(2)]);
var state_27689__$1 = state_27689;
var statearr_27691_27775 = state_27689__$1;
(statearr_27691_27775[(2)] = inst_27685);

(statearr_27691_27775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (20))){
var inst_27588 = (state_27689[(7)]);
var inst_27600 = cljs.core.first.call(null,inst_27588);
var inst_27601 = cljs.core.nth.call(null,inst_27600,(0),null);
var inst_27602 = cljs.core.nth.call(null,inst_27600,(1),null);
var state_27689__$1 = (function (){var statearr_27692 = state_27689;
(statearr_27692[(8)] = inst_27601);

return statearr_27692;
})();
if(cljs.core.truth_(inst_27602)){
var statearr_27693_27776 = state_27689__$1;
(statearr_27693_27776[(1)] = (22));

} else {
var statearr_27694_27777 = state_27689__$1;
(statearr_27694_27777[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (27))){
var inst_27632 = (state_27689[(9)]);
var inst_27557 = (state_27689[(10)]);
var inst_27630 = (state_27689[(11)]);
var inst_27637 = (state_27689[(12)]);
var inst_27637__$1 = cljs.core._nth.call(null,inst_27630,inst_27632);
var inst_27638 = cljs.core.async.put_BANG_.call(null,inst_27637__$1,inst_27557,done);
var state_27689__$1 = (function (){var statearr_27695 = state_27689;
(statearr_27695[(12)] = inst_27637__$1);

return statearr_27695;
})();
if(cljs.core.truth_(inst_27638)){
var statearr_27696_27778 = state_27689__$1;
(statearr_27696_27778[(1)] = (30));

} else {
var statearr_27697_27779 = state_27689__$1;
(statearr_27697_27779[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (1))){
var state_27689__$1 = state_27689;
var statearr_27698_27780 = state_27689__$1;
(statearr_27698_27780[(2)] = null);

(statearr_27698_27780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (24))){
var inst_27588 = (state_27689[(7)]);
var inst_27607 = (state_27689[(2)]);
var inst_27608 = cljs.core.next.call(null,inst_27588);
var inst_27566 = inst_27608;
var inst_27567 = null;
var inst_27568 = (0);
var inst_27569 = (0);
var state_27689__$1 = (function (){var statearr_27699 = state_27689;
(statearr_27699[(13)] = inst_27607);

(statearr_27699[(14)] = inst_27568);

(statearr_27699[(15)] = inst_27567);

(statearr_27699[(16)] = inst_27569);

(statearr_27699[(17)] = inst_27566);

return statearr_27699;
})();
var statearr_27700_27781 = state_27689__$1;
(statearr_27700_27781[(2)] = null);

(statearr_27700_27781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (39))){
var state_27689__$1 = state_27689;
var statearr_27704_27782 = state_27689__$1;
(statearr_27704_27782[(2)] = null);

(statearr_27704_27782[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (4))){
var inst_27557 = (state_27689[(10)]);
var inst_27557__$1 = (state_27689[(2)]);
var inst_27558 = (inst_27557__$1 == null);
var state_27689__$1 = (function (){var statearr_27705 = state_27689;
(statearr_27705[(10)] = inst_27557__$1);

return statearr_27705;
})();
if(cljs.core.truth_(inst_27558)){
var statearr_27706_27783 = state_27689__$1;
(statearr_27706_27783[(1)] = (5));

} else {
var statearr_27707_27784 = state_27689__$1;
(statearr_27707_27784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (15))){
var inst_27568 = (state_27689[(14)]);
var inst_27567 = (state_27689[(15)]);
var inst_27569 = (state_27689[(16)]);
var inst_27566 = (state_27689[(17)]);
var inst_27584 = (state_27689[(2)]);
var inst_27585 = (inst_27569 + (1));
var tmp27701 = inst_27568;
var tmp27702 = inst_27567;
var tmp27703 = inst_27566;
var inst_27566__$1 = tmp27703;
var inst_27567__$1 = tmp27702;
var inst_27568__$1 = tmp27701;
var inst_27569__$1 = inst_27585;
var state_27689__$1 = (function (){var statearr_27708 = state_27689;
(statearr_27708[(14)] = inst_27568__$1);

(statearr_27708[(15)] = inst_27567__$1);

(statearr_27708[(18)] = inst_27584);

(statearr_27708[(16)] = inst_27569__$1);

(statearr_27708[(17)] = inst_27566__$1);

return statearr_27708;
})();
var statearr_27709_27785 = state_27689__$1;
(statearr_27709_27785[(2)] = null);

(statearr_27709_27785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (21))){
var inst_27611 = (state_27689[(2)]);
var state_27689__$1 = state_27689;
var statearr_27713_27786 = state_27689__$1;
(statearr_27713_27786[(2)] = inst_27611);

(statearr_27713_27786[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (31))){
var inst_27637 = (state_27689[(12)]);
var inst_27641 = done.call(null,null);
var inst_27642 = cljs.core.async.untap_STAR_.call(null,m,inst_27637);
var state_27689__$1 = (function (){var statearr_27714 = state_27689;
(statearr_27714[(19)] = inst_27641);

return statearr_27714;
})();
var statearr_27715_27787 = state_27689__$1;
(statearr_27715_27787[(2)] = inst_27642);

(statearr_27715_27787[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (32))){
var inst_27632 = (state_27689[(9)]);
var inst_27631 = (state_27689[(20)]);
var inst_27630 = (state_27689[(11)]);
var inst_27629 = (state_27689[(21)]);
var inst_27644 = (state_27689[(2)]);
var inst_27645 = (inst_27632 + (1));
var tmp27710 = inst_27631;
var tmp27711 = inst_27630;
var tmp27712 = inst_27629;
var inst_27629__$1 = tmp27712;
var inst_27630__$1 = tmp27711;
var inst_27631__$1 = tmp27710;
var inst_27632__$1 = inst_27645;
var state_27689__$1 = (function (){var statearr_27716 = state_27689;
(statearr_27716[(9)] = inst_27632__$1);

(statearr_27716[(22)] = inst_27644);

(statearr_27716[(20)] = inst_27631__$1);

(statearr_27716[(11)] = inst_27630__$1);

(statearr_27716[(21)] = inst_27629__$1);

return statearr_27716;
})();
var statearr_27717_27788 = state_27689__$1;
(statearr_27717_27788[(2)] = null);

(statearr_27717_27788[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (40))){
var inst_27657 = (state_27689[(23)]);
var inst_27661 = done.call(null,null);
var inst_27662 = cljs.core.async.untap_STAR_.call(null,m,inst_27657);
var state_27689__$1 = (function (){var statearr_27718 = state_27689;
(statearr_27718[(24)] = inst_27661);

return statearr_27718;
})();
var statearr_27719_27789 = state_27689__$1;
(statearr_27719_27789[(2)] = inst_27662);

(statearr_27719_27789[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (33))){
var inst_27648 = (state_27689[(25)]);
var inst_27650 = cljs.core.chunked_seq_QMARK_.call(null,inst_27648);
var state_27689__$1 = state_27689;
if(inst_27650){
var statearr_27720_27790 = state_27689__$1;
(statearr_27720_27790[(1)] = (36));

} else {
var statearr_27721_27791 = state_27689__$1;
(statearr_27721_27791[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (13))){
var inst_27578 = (state_27689[(26)]);
var inst_27581 = cljs.core.async.close_BANG_.call(null,inst_27578);
var state_27689__$1 = state_27689;
var statearr_27722_27792 = state_27689__$1;
(statearr_27722_27792[(2)] = inst_27581);

(statearr_27722_27792[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (22))){
var inst_27601 = (state_27689[(8)]);
var inst_27604 = cljs.core.async.close_BANG_.call(null,inst_27601);
var state_27689__$1 = state_27689;
var statearr_27723_27793 = state_27689__$1;
(statearr_27723_27793[(2)] = inst_27604);

(statearr_27723_27793[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (36))){
var inst_27648 = (state_27689[(25)]);
var inst_27652 = cljs.core.chunk_first.call(null,inst_27648);
var inst_27653 = cljs.core.chunk_rest.call(null,inst_27648);
var inst_27654 = cljs.core.count.call(null,inst_27652);
var inst_27629 = inst_27653;
var inst_27630 = inst_27652;
var inst_27631 = inst_27654;
var inst_27632 = (0);
var state_27689__$1 = (function (){var statearr_27724 = state_27689;
(statearr_27724[(9)] = inst_27632);

(statearr_27724[(20)] = inst_27631);

(statearr_27724[(11)] = inst_27630);

(statearr_27724[(21)] = inst_27629);

return statearr_27724;
})();
var statearr_27725_27794 = state_27689__$1;
(statearr_27725_27794[(2)] = null);

(statearr_27725_27794[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (41))){
var inst_27648 = (state_27689[(25)]);
var inst_27664 = (state_27689[(2)]);
var inst_27665 = cljs.core.next.call(null,inst_27648);
var inst_27629 = inst_27665;
var inst_27630 = null;
var inst_27631 = (0);
var inst_27632 = (0);
var state_27689__$1 = (function (){var statearr_27726 = state_27689;
(statearr_27726[(27)] = inst_27664);

(statearr_27726[(9)] = inst_27632);

(statearr_27726[(20)] = inst_27631);

(statearr_27726[(11)] = inst_27630);

(statearr_27726[(21)] = inst_27629);

return statearr_27726;
})();
var statearr_27727_27795 = state_27689__$1;
(statearr_27727_27795[(2)] = null);

(statearr_27727_27795[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (43))){
var state_27689__$1 = state_27689;
var statearr_27728_27796 = state_27689__$1;
(statearr_27728_27796[(2)] = null);

(statearr_27728_27796[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (29))){
var inst_27673 = (state_27689[(2)]);
var state_27689__$1 = state_27689;
var statearr_27729_27797 = state_27689__$1;
(statearr_27729_27797[(2)] = inst_27673);

(statearr_27729_27797[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (44))){
var inst_27682 = (state_27689[(2)]);
var state_27689__$1 = (function (){var statearr_27730 = state_27689;
(statearr_27730[(28)] = inst_27682);

return statearr_27730;
})();
var statearr_27731_27798 = state_27689__$1;
(statearr_27731_27798[(2)] = null);

(statearr_27731_27798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (6))){
var inst_27621 = (state_27689[(29)]);
var inst_27620 = cljs.core.deref.call(null,cs);
var inst_27621__$1 = cljs.core.keys.call(null,inst_27620);
var inst_27622 = cljs.core.count.call(null,inst_27621__$1);
var inst_27623 = cljs.core.reset_BANG_.call(null,dctr,inst_27622);
var inst_27628 = cljs.core.seq.call(null,inst_27621__$1);
var inst_27629 = inst_27628;
var inst_27630 = null;
var inst_27631 = (0);
var inst_27632 = (0);
var state_27689__$1 = (function (){var statearr_27732 = state_27689;
(statearr_27732[(30)] = inst_27623);

(statearr_27732[(9)] = inst_27632);

(statearr_27732[(20)] = inst_27631);

(statearr_27732[(29)] = inst_27621__$1);

(statearr_27732[(11)] = inst_27630);

(statearr_27732[(21)] = inst_27629);

return statearr_27732;
})();
var statearr_27733_27799 = state_27689__$1;
(statearr_27733_27799[(2)] = null);

(statearr_27733_27799[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (28))){
var inst_27648 = (state_27689[(25)]);
var inst_27629 = (state_27689[(21)]);
var inst_27648__$1 = cljs.core.seq.call(null,inst_27629);
var state_27689__$1 = (function (){var statearr_27734 = state_27689;
(statearr_27734[(25)] = inst_27648__$1);

return statearr_27734;
})();
if(inst_27648__$1){
var statearr_27735_27800 = state_27689__$1;
(statearr_27735_27800[(1)] = (33));

} else {
var statearr_27736_27801 = state_27689__$1;
(statearr_27736_27801[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (25))){
var inst_27632 = (state_27689[(9)]);
var inst_27631 = (state_27689[(20)]);
var inst_27634 = (inst_27632 < inst_27631);
var inst_27635 = inst_27634;
var state_27689__$1 = state_27689;
if(cljs.core.truth_(inst_27635)){
var statearr_27737_27802 = state_27689__$1;
(statearr_27737_27802[(1)] = (27));

} else {
var statearr_27738_27803 = state_27689__$1;
(statearr_27738_27803[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (34))){
var state_27689__$1 = state_27689;
var statearr_27739_27804 = state_27689__$1;
(statearr_27739_27804[(2)] = null);

(statearr_27739_27804[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (17))){
var state_27689__$1 = state_27689;
var statearr_27740_27805 = state_27689__$1;
(statearr_27740_27805[(2)] = null);

(statearr_27740_27805[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (3))){
var inst_27687 = (state_27689[(2)]);
var state_27689__$1 = state_27689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27689__$1,inst_27687);
} else {
if((state_val_27690 === (12))){
var inst_27616 = (state_27689[(2)]);
var state_27689__$1 = state_27689;
var statearr_27741_27806 = state_27689__$1;
(statearr_27741_27806[(2)] = inst_27616);

(statearr_27741_27806[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (2))){
var state_27689__$1 = state_27689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27689__$1,(4),ch);
} else {
if((state_val_27690 === (23))){
var state_27689__$1 = state_27689;
var statearr_27742_27807 = state_27689__$1;
(statearr_27742_27807[(2)] = null);

(statearr_27742_27807[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (35))){
var inst_27671 = (state_27689[(2)]);
var state_27689__$1 = state_27689;
var statearr_27743_27808 = state_27689__$1;
(statearr_27743_27808[(2)] = inst_27671);

(statearr_27743_27808[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (19))){
var inst_27588 = (state_27689[(7)]);
var inst_27592 = cljs.core.chunk_first.call(null,inst_27588);
var inst_27593 = cljs.core.chunk_rest.call(null,inst_27588);
var inst_27594 = cljs.core.count.call(null,inst_27592);
var inst_27566 = inst_27593;
var inst_27567 = inst_27592;
var inst_27568 = inst_27594;
var inst_27569 = (0);
var state_27689__$1 = (function (){var statearr_27744 = state_27689;
(statearr_27744[(14)] = inst_27568);

(statearr_27744[(15)] = inst_27567);

(statearr_27744[(16)] = inst_27569);

(statearr_27744[(17)] = inst_27566);

return statearr_27744;
})();
var statearr_27745_27809 = state_27689__$1;
(statearr_27745_27809[(2)] = null);

(statearr_27745_27809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (11))){
var inst_27588 = (state_27689[(7)]);
var inst_27566 = (state_27689[(17)]);
var inst_27588__$1 = cljs.core.seq.call(null,inst_27566);
var state_27689__$1 = (function (){var statearr_27746 = state_27689;
(statearr_27746[(7)] = inst_27588__$1);

return statearr_27746;
})();
if(inst_27588__$1){
var statearr_27747_27810 = state_27689__$1;
(statearr_27747_27810[(1)] = (16));

} else {
var statearr_27748_27811 = state_27689__$1;
(statearr_27748_27811[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (9))){
var inst_27618 = (state_27689[(2)]);
var state_27689__$1 = state_27689;
var statearr_27749_27812 = state_27689__$1;
(statearr_27749_27812[(2)] = inst_27618);

(statearr_27749_27812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (5))){
var inst_27564 = cljs.core.deref.call(null,cs);
var inst_27565 = cljs.core.seq.call(null,inst_27564);
var inst_27566 = inst_27565;
var inst_27567 = null;
var inst_27568 = (0);
var inst_27569 = (0);
var state_27689__$1 = (function (){var statearr_27750 = state_27689;
(statearr_27750[(14)] = inst_27568);

(statearr_27750[(15)] = inst_27567);

(statearr_27750[(16)] = inst_27569);

(statearr_27750[(17)] = inst_27566);

return statearr_27750;
})();
var statearr_27751_27813 = state_27689__$1;
(statearr_27751_27813[(2)] = null);

(statearr_27751_27813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (14))){
var state_27689__$1 = state_27689;
var statearr_27752_27814 = state_27689__$1;
(statearr_27752_27814[(2)] = null);

(statearr_27752_27814[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (45))){
var inst_27679 = (state_27689[(2)]);
var state_27689__$1 = state_27689;
var statearr_27753_27815 = state_27689__$1;
(statearr_27753_27815[(2)] = inst_27679);

(statearr_27753_27815[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (26))){
var inst_27621 = (state_27689[(29)]);
var inst_27675 = (state_27689[(2)]);
var inst_27676 = cljs.core.seq.call(null,inst_27621);
var state_27689__$1 = (function (){var statearr_27754 = state_27689;
(statearr_27754[(31)] = inst_27675);

return statearr_27754;
})();
if(inst_27676){
var statearr_27755_27816 = state_27689__$1;
(statearr_27755_27816[(1)] = (42));

} else {
var statearr_27756_27817 = state_27689__$1;
(statearr_27756_27817[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (16))){
var inst_27588 = (state_27689[(7)]);
var inst_27590 = cljs.core.chunked_seq_QMARK_.call(null,inst_27588);
var state_27689__$1 = state_27689;
if(inst_27590){
var statearr_27757_27818 = state_27689__$1;
(statearr_27757_27818[(1)] = (19));

} else {
var statearr_27758_27819 = state_27689__$1;
(statearr_27758_27819[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (38))){
var inst_27668 = (state_27689[(2)]);
var state_27689__$1 = state_27689;
var statearr_27759_27820 = state_27689__$1;
(statearr_27759_27820[(2)] = inst_27668);

(statearr_27759_27820[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (30))){
var state_27689__$1 = state_27689;
var statearr_27760_27821 = state_27689__$1;
(statearr_27760_27821[(2)] = null);

(statearr_27760_27821[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (10))){
var inst_27567 = (state_27689[(15)]);
var inst_27569 = (state_27689[(16)]);
var inst_27577 = cljs.core._nth.call(null,inst_27567,inst_27569);
var inst_27578 = cljs.core.nth.call(null,inst_27577,(0),null);
var inst_27579 = cljs.core.nth.call(null,inst_27577,(1),null);
var state_27689__$1 = (function (){var statearr_27761 = state_27689;
(statearr_27761[(26)] = inst_27578);

return statearr_27761;
})();
if(cljs.core.truth_(inst_27579)){
var statearr_27762_27822 = state_27689__$1;
(statearr_27762_27822[(1)] = (13));

} else {
var statearr_27763_27823 = state_27689__$1;
(statearr_27763_27823[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (18))){
var inst_27614 = (state_27689[(2)]);
var state_27689__$1 = state_27689;
var statearr_27764_27824 = state_27689__$1;
(statearr_27764_27824[(2)] = inst_27614);

(statearr_27764_27824[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (42))){
var state_27689__$1 = state_27689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27689__$1,(45),dchan);
} else {
if((state_val_27690 === (37))){
var inst_27648 = (state_27689[(25)]);
var inst_27657 = (state_27689[(23)]);
var inst_27557 = (state_27689[(10)]);
var inst_27657__$1 = cljs.core.first.call(null,inst_27648);
var inst_27658 = cljs.core.async.put_BANG_.call(null,inst_27657__$1,inst_27557,done);
var state_27689__$1 = (function (){var statearr_27765 = state_27689;
(statearr_27765[(23)] = inst_27657__$1);

return statearr_27765;
})();
if(cljs.core.truth_(inst_27658)){
var statearr_27766_27825 = state_27689__$1;
(statearr_27766_27825[(1)] = (39));

} else {
var statearr_27767_27826 = state_27689__$1;
(statearr_27767_27826[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (8))){
var inst_27568 = (state_27689[(14)]);
var inst_27569 = (state_27689[(16)]);
var inst_27571 = (inst_27569 < inst_27568);
var inst_27572 = inst_27571;
var state_27689__$1 = state_27689;
if(cljs.core.truth_(inst_27572)){
var statearr_27768_27827 = state_27689__$1;
(statearr_27768_27827[(1)] = (10));

} else {
var statearr_27769_27828 = state_27689__$1;
(statearr_27769_27828[(1)] = (11));

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
});})(c__26955__auto___27774,cs,m,dchan,dctr,done))
;
return ((function (switch__26865__auto__,c__26955__auto___27774,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26866__auto__ = null;
var cljs$core$async$mult_$_state_machine__26866__auto____0 = (function (){
var statearr_27770 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27770[(0)] = cljs$core$async$mult_$_state_machine__26866__auto__);

(statearr_27770[(1)] = (1));

return statearr_27770;
});
var cljs$core$async$mult_$_state_machine__26866__auto____1 = (function (state_27689){
while(true){
var ret_value__26867__auto__ = (function (){try{while(true){
var result__26868__auto__ = switch__26865__auto__.call(null,state_27689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26868__auto__;
}
break;
}
}catch (e27771){if((e27771 instanceof Object)){
var ex__26869__auto__ = e27771;
var statearr_27772_27829 = state_27689;
(statearr_27772_27829[(5)] = ex__26869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27830 = state_27689;
state_27689 = G__27830;
continue;
} else {
return ret_value__26867__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26866__auto__ = function(state_27689){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26866__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26866__auto____1.call(this,state_27689);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26866__auto____0;
cljs$core$async$mult_$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26866__auto____1;
return cljs$core$async$mult_$_state_machine__26866__auto__;
})()
;})(switch__26865__auto__,c__26955__auto___27774,cs,m,dchan,dctr,done))
})();
var state__26957__auto__ = (function (){var statearr_27773 = f__26956__auto__.call(null);
(statearr_27773[(6)] = c__26955__auto___27774);

return statearr_27773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26957__auto__);
});})(c__26955__auto___27774,cs,m,dchan,dctr,done))
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
var G__27832 = arguments.length;
switch (G__27832) {
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
var len__4499__auto___27844 = arguments.length;
var i__4500__auto___27845 = (0);
while(true){
if((i__4500__auto___27845 < len__4499__auto___27844)){
args__4502__auto__.push((arguments[i__4500__auto___27845]));

var G__27846 = (i__4500__auto___27845 + (1));
i__4500__auto___27845 = G__27846;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27838){
var map__27839 = p__27838;
var map__27839__$1 = ((((!((map__27839 == null)))?(((((map__27839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27839):map__27839);
var opts = map__27839__$1;
var statearr_27841_27847 = state;
(statearr_27841_27847[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__27839,map__27839__$1,opts){
return (function (val){
var statearr_27842_27848 = state;
(statearr_27842_27848[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27839,map__27839__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_27843_27849 = state;
(statearr_27843_27849[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27834){
var G__27835 = cljs.core.first.call(null,seq27834);
var seq27834__$1 = cljs.core.next.call(null,seq27834);
var G__27836 = cljs.core.first.call(null,seq27834__$1);
var seq27834__$2 = cljs.core.next.call(null,seq27834__$1);
var G__27837 = cljs.core.first.call(null,seq27834__$2);
var seq27834__$3 = cljs.core.next.call(null,seq27834__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27835,G__27836,G__27837,seq27834__$3);
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
if(typeof cljs.core.async.t_cljs$core$async27850 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27850 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta27851){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta27851 = meta27851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27852,meta27851__$1){
var self__ = this;
var _27852__$1 = this;
return (new cljs.core.async.t_cljs$core$async27850(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta27851__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27850.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27852){
var self__ = this;
var _27852__$1 = this;
return self__.meta27851;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27850.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27850.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27850.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27850.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27850.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27850.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27850.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27850.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async27850.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta27851","meta27851",-2048180358,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27850.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27850.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27850";

cljs.core.async.t_cljs$core$async27850.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27850");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27850.
 */
cljs.core.async.__GT_t_cljs$core$async27850 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27850(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27851){
return (new cljs.core.async.t_cljs$core$async27850(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27851));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27850(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26955__auto___28014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26955__auto___28014,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26956__auto__ = (function (){var switch__26865__auto__ = ((function (c__26955__auto___28014,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27954){
var state_val_27955 = (state_27954[(1)]);
if((state_val_27955 === (7))){
var inst_27869 = (state_27954[(2)]);
var state_27954__$1 = state_27954;
var statearr_27956_28015 = state_27954__$1;
(statearr_27956_28015[(2)] = inst_27869);

(statearr_27956_28015[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (20))){
var inst_27881 = (state_27954[(7)]);
var state_27954__$1 = state_27954;
var statearr_27957_28016 = state_27954__$1;
(statearr_27957_28016[(2)] = inst_27881);

(statearr_27957_28016[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (27))){
var state_27954__$1 = state_27954;
var statearr_27958_28017 = state_27954__$1;
(statearr_27958_28017[(2)] = null);

(statearr_27958_28017[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (1))){
var inst_27856 = (state_27954[(8)]);
var inst_27856__$1 = calc_state.call(null);
var inst_27858 = (inst_27856__$1 == null);
var inst_27859 = cljs.core.not.call(null,inst_27858);
var state_27954__$1 = (function (){var statearr_27959 = state_27954;
(statearr_27959[(8)] = inst_27856__$1);

return statearr_27959;
})();
if(inst_27859){
var statearr_27960_28018 = state_27954__$1;
(statearr_27960_28018[(1)] = (2));

} else {
var statearr_27961_28019 = state_27954__$1;
(statearr_27961_28019[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (24))){
var inst_27905 = (state_27954[(9)]);
var inst_27928 = (state_27954[(10)]);
var inst_27914 = (state_27954[(11)]);
var inst_27928__$1 = inst_27905.call(null,inst_27914);
var state_27954__$1 = (function (){var statearr_27962 = state_27954;
(statearr_27962[(10)] = inst_27928__$1);

return statearr_27962;
})();
if(cljs.core.truth_(inst_27928__$1)){
var statearr_27963_28020 = state_27954__$1;
(statearr_27963_28020[(1)] = (29));

} else {
var statearr_27964_28021 = state_27954__$1;
(statearr_27964_28021[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (4))){
var inst_27872 = (state_27954[(2)]);
var state_27954__$1 = state_27954;
if(cljs.core.truth_(inst_27872)){
var statearr_27965_28022 = state_27954__$1;
(statearr_27965_28022[(1)] = (8));

} else {
var statearr_27966_28023 = state_27954__$1;
(statearr_27966_28023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (15))){
var inst_27899 = (state_27954[(2)]);
var state_27954__$1 = state_27954;
if(cljs.core.truth_(inst_27899)){
var statearr_27967_28024 = state_27954__$1;
(statearr_27967_28024[(1)] = (19));

} else {
var statearr_27968_28025 = state_27954__$1;
(statearr_27968_28025[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (21))){
var inst_27904 = (state_27954[(12)]);
var inst_27904__$1 = (state_27954[(2)]);
var inst_27905 = cljs.core.get.call(null,inst_27904__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27906 = cljs.core.get.call(null,inst_27904__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27907 = cljs.core.get.call(null,inst_27904__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27954__$1 = (function (){var statearr_27969 = state_27954;
(statearr_27969[(9)] = inst_27905);

(statearr_27969[(13)] = inst_27906);

(statearr_27969[(12)] = inst_27904__$1);

return statearr_27969;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27954__$1,(22),inst_27907);
} else {
if((state_val_27955 === (31))){
var inst_27936 = (state_27954[(2)]);
var state_27954__$1 = state_27954;
if(cljs.core.truth_(inst_27936)){
var statearr_27970_28026 = state_27954__$1;
(statearr_27970_28026[(1)] = (32));

} else {
var statearr_27971_28027 = state_27954__$1;
(statearr_27971_28027[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (32))){
var inst_27913 = (state_27954[(14)]);
var state_27954__$1 = state_27954;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27954__$1,(35),out,inst_27913);
} else {
if((state_val_27955 === (33))){
var inst_27904 = (state_27954[(12)]);
var inst_27881 = inst_27904;
var state_27954__$1 = (function (){var statearr_27972 = state_27954;
(statearr_27972[(7)] = inst_27881);

return statearr_27972;
})();
var statearr_27973_28028 = state_27954__$1;
(statearr_27973_28028[(2)] = null);

(statearr_27973_28028[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (13))){
var inst_27881 = (state_27954[(7)]);
var inst_27888 = inst_27881.cljs$lang$protocol_mask$partition0$;
var inst_27889 = (inst_27888 & (64));
var inst_27890 = inst_27881.cljs$core$ISeq$;
var inst_27891 = (cljs.core.PROTOCOL_SENTINEL === inst_27890);
var inst_27892 = ((inst_27889) || (inst_27891));
var state_27954__$1 = state_27954;
if(cljs.core.truth_(inst_27892)){
var statearr_27974_28029 = state_27954__$1;
(statearr_27974_28029[(1)] = (16));

} else {
var statearr_27975_28030 = state_27954__$1;
(statearr_27975_28030[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (22))){
var inst_27914 = (state_27954[(11)]);
var inst_27913 = (state_27954[(14)]);
var inst_27912 = (state_27954[(2)]);
var inst_27913__$1 = cljs.core.nth.call(null,inst_27912,(0),null);
var inst_27914__$1 = cljs.core.nth.call(null,inst_27912,(1),null);
var inst_27915 = (inst_27913__$1 == null);
var inst_27916 = cljs.core._EQ_.call(null,inst_27914__$1,change);
var inst_27917 = ((inst_27915) || (inst_27916));
var state_27954__$1 = (function (){var statearr_27976 = state_27954;
(statearr_27976[(11)] = inst_27914__$1);

(statearr_27976[(14)] = inst_27913__$1);

return statearr_27976;
})();
if(cljs.core.truth_(inst_27917)){
var statearr_27977_28031 = state_27954__$1;
(statearr_27977_28031[(1)] = (23));

} else {
var statearr_27978_28032 = state_27954__$1;
(statearr_27978_28032[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (36))){
var inst_27904 = (state_27954[(12)]);
var inst_27881 = inst_27904;
var state_27954__$1 = (function (){var statearr_27979 = state_27954;
(statearr_27979[(7)] = inst_27881);

return statearr_27979;
})();
var statearr_27980_28033 = state_27954__$1;
(statearr_27980_28033[(2)] = null);

(statearr_27980_28033[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (29))){
var inst_27928 = (state_27954[(10)]);
var state_27954__$1 = state_27954;
var statearr_27981_28034 = state_27954__$1;
(statearr_27981_28034[(2)] = inst_27928);

(statearr_27981_28034[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (6))){
var state_27954__$1 = state_27954;
var statearr_27982_28035 = state_27954__$1;
(statearr_27982_28035[(2)] = false);

(statearr_27982_28035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (28))){
var inst_27924 = (state_27954[(2)]);
var inst_27925 = calc_state.call(null);
var inst_27881 = inst_27925;
var state_27954__$1 = (function (){var statearr_27983 = state_27954;
(statearr_27983[(7)] = inst_27881);

(statearr_27983[(15)] = inst_27924);

return statearr_27983;
})();
var statearr_27984_28036 = state_27954__$1;
(statearr_27984_28036[(2)] = null);

(statearr_27984_28036[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (25))){
var inst_27950 = (state_27954[(2)]);
var state_27954__$1 = state_27954;
var statearr_27985_28037 = state_27954__$1;
(statearr_27985_28037[(2)] = inst_27950);

(statearr_27985_28037[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (34))){
var inst_27948 = (state_27954[(2)]);
var state_27954__$1 = state_27954;
var statearr_27986_28038 = state_27954__$1;
(statearr_27986_28038[(2)] = inst_27948);

(statearr_27986_28038[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (17))){
var state_27954__$1 = state_27954;
var statearr_27987_28039 = state_27954__$1;
(statearr_27987_28039[(2)] = false);

(statearr_27987_28039[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (3))){
var state_27954__$1 = state_27954;
var statearr_27988_28040 = state_27954__$1;
(statearr_27988_28040[(2)] = false);

(statearr_27988_28040[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (12))){
var inst_27952 = (state_27954[(2)]);
var state_27954__$1 = state_27954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27954__$1,inst_27952);
} else {
if((state_val_27955 === (2))){
var inst_27856 = (state_27954[(8)]);
var inst_27861 = inst_27856.cljs$lang$protocol_mask$partition0$;
var inst_27862 = (inst_27861 & (64));
var inst_27863 = inst_27856.cljs$core$ISeq$;
var inst_27864 = (cljs.core.PROTOCOL_SENTINEL === inst_27863);
var inst_27865 = ((inst_27862) || (inst_27864));
var state_27954__$1 = state_27954;
if(cljs.core.truth_(inst_27865)){
var statearr_27989_28041 = state_27954__$1;
(statearr_27989_28041[(1)] = (5));

} else {
var statearr_27990_28042 = state_27954__$1;
(statearr_27990_28042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (23))){
var inst_27913 = (state_27954[(14)]);
var inst_27919 = (inst_27913 == null);
var state_27954__$1 = state_27954;
if(cljs.core.truth_(inst_27919)){
var statearr_27991_28043 = state_27954__$1;
(statearr_27991_28043[(1)] = (26));

} else {
var statearr_27992_28044 = state_27954__$1;
(statearr_27992_28044[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (35))){
var inst_27939 = (state_27954[(2)]);
var state_27954__$1 = state_27954;
if(cljs.core.truth_(inst_27939)){
var statearr_27993_28045 = state_27954__$1;
(statearr_27993_28045[(1)] = (36));

} else {
var statearr_27994_28046 = state_27954__$1;
(statearr_27994_28046[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (19))){
var inst_27881 = (state_27954[(7)]);
var inst_27901 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27881);
var state_27954__$1 = state_27954;
var statearr_27995_28047 = state_27954__$1;
(statearr_27995_28047[(2)] = inst_27901);

(statearr_27995_28047[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (11))){
var inst_27881 = (state_27954[(7)]);
var inst_27885 = (inst_27881 == null);
var inst_27886 = cljs.core.not.call(null,inst_27885);
var state_27954__$1 = state_27954;
if(inst_27886){
var statearr_27996_28048 = state_27954__$1;
(statearr_27996_28048[(1)] = (13));

} else {
var statearr_27997_28049 = state_27954__$1;
(statearr_27997_28049[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (9))){
var inst_27856 = (state_27954[(8)]);
var state_27954__$1 = state_27954;
var statearr_27998_28050 = state_27954__$1;
(statearr_27998_28050[(2)] = inst_27856);

(statearr_27998_28050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (5))){
var state_27954__$1 = state_27954;
var statearr_27999_28051 = state_27954__$1;
(statearr_27999_28051[(2)] = true);

(statearr_27999_28051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (14))){
var state_27954__$1 = state_27954;
var statearr_28000_28052 = state_27954__$1;
(statearr_28000_28052[(2)] = false);

(statearr_28000_28052[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (26))){
var inst_27914 = (state_27954[(11)]);
var inst_27921 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27914);
var state_27954__$1 = state_27954;
var statearr_28001_28053 = state_27954__$1;
(statearr_28001_28053[(2)] = inst_27921);

(statearr_28001_28053[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (16))){
var state_27954__$1 = state_27954;
var statearr_28002_28054 = state_27954__$1;
(statearr_28002_28054[(2)] = true);

(statearr_28002_28054[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (38))){
var inst_27944 = (state_27954[(2)]);
var state_27954__$1 = state_27954;
var statearr_28003_28055 = state_27954__$1;
(statearr_28003_28055[(2)] = inst_27944);

(statearr_28003_28055[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (30))){
var inst_27905 = (state_27954[(9)]);
var inst_27914 = (state_27954[(11)]);
var inst_27906 = (state_27954[(13)]);
var inst_27931 = cljs.core.empty_QMARK_.call(null,inst_27905);
var inst_27932 = inst_27906.call(null,inst_27914);
var inst_27933 = cljs.core.not.call(null,inst_27932);
var inst_27934 = ((inst_27931) && (inst_27933));
var state_27954__$1 = state_27954;
var statearr_28004_28056 = state_27954__$1;
(statearr_28004_28056[(2)] = inst_27934);

(statearr_28004_28056[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (10))){
var inst_27856 = (state_27954[(8)]);
var inst_27877 = (state_27954[(2)]);
var inst_27878 = cljs.core.get.call(null,inst_27877,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27879 = cljs.core.get.call(null,inst_27877,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27880 = cljs.core.get.call(null,inst_27877,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27881 = inst_27856;
var state_27954__$1 = (function (){var statearr_28005 = state_27954;
(statearr_28005[(16)] = inst_27879);

(statearr_28005[(7)] = inst_27881);

(statearr_28005[(17)] = inst_27880);

(statearr_28005[(18)] = inst_27878);

return statearr_28005;
})();
var statearr_28006_28057 = state_27954__$1;
(statearr_28006_28057[(2)] = null);

(statearr_28006_28057[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (18))){
var inst_27896 = (state_27954[(2)]);
var state_27954__$1 = state_27954;
var statearr_28007_28058 = state_27954__$1;
(statearr_28007_28058[(2)] = inst_27896);

(statearr_28007_28058[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (37))){
var state_27954__$1 = state_27954;
var statearr_28008_28059 = state_27954__$1;
(statearr_28008_28059[(2)] = null);

(statearr_28008_28059[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (8))){
var inst_27856 = (state_27954[(8)]);
var inst_27874 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27856);
var state_27954__$1 = state_27954;
var statearr_28009_28060 = state_27954__$1;
(statearr_28009_28060[(2)] = inst_27874);

(statearr_28009_28060[(1)] = (10));


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
});})(c__26955__auto___28014,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26865__auto__,c__26955__auto___28014,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26866__auto__ = null;
var cljs$core$async$mix_$_state_machine__26866__auto____0 = (function (){
var statearr_28010 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28010[(0)] = cljs$core$async$mix_$_state_machine__26866__auto__);

(statearr_28010[(1)] = (1));

return statearr_28010;
});
var cljs$core$async$mix_$_state_machine__26866__auto____1 = (function (state_27954){
while(true){
var ret_value__26867__auto__ = (function (){try{while(true){
var result__26868__auto__ = switch__26865__auto__.call(null,state_27954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26868__auto__;
}
break;
}
}catch (e28011){if((e28011 instanceof Object)){
var ex__26869__auto__ = e28011;
var statearr_28012_28061 = state_27954;
(statearr_28012_28061[(5)] = ex__26869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28062 = state_27954;
state_27954 = G__28062;
continue;
} else {
return ret_value__26867__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26866__auto__ = function(state_27954){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26866__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26866__auto____1.call(this,state_27954);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26866__auto____0;
cljs$core$async$mix_$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26866__auto____1;
return cljs$core$async$mix_$_state_machine__26866__auto__;
})()
;})(switch__26865__auto__,c__26955__auto___28014,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26957__auto__ = (function (){var statearr_28013 = f__26956__auto__.call(null);
(statearr_28013[(6)] = c__26955__auto___28014);

return statearr_28013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26957__auto__);
});})(c__26955__auto___28014,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__28064 = arguments.length;
switch (G__28064) {
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
var G__28068 = arguments.length;
switch (G__28068) {
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
return (function (p1__28066_SHARP_){
if(cljs.core.truth_(p1__28066_SHARP_.call(null,topic))){
return p1__28066_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28066_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28069 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28069 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28070){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28070 = meta28070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28071,meta28070__$1){
var self__ = this;
var _28071__$1 = this;
return (new cljs.core.async.t_cljs$core$async28069(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28070__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28069.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28071){
var self__ = this;
var _28071__$1 = this;
return self__.meta28070;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28069.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28069.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28069.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28069.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28069.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async28069.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28069.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28069.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28070","meta28070",-2039422268,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28069.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28069.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28069";

cljs.core.async.t_cljs$core$async28069.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28069");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28069.
 */
cljs.core.async.__GT_t_cljs$core$async28069 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28069(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28070){
return (new cljs.core.async.t_cljs$core$async28069(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28070));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28069(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26955__auto___28189 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26955__auto___28189,mults,ensure_mult,p){
return (function (){
var f__26956__auto__ = (function (){var switch__26865__auto__ = ((function (c__26955__auto___28189,mults,ensure_mult,p){
return (function (state_28143){
var state_val_28144 = (state_28143[(1)]);
if((state_val_28144 === (7))){
var inst_28139 = (state_28143[(2)]);
var state_28143__$1 = state_28143;
var statearr_28145_28190 = state_28143__$1;
(statearr_28145_28190[(2)] = inst_28139);

(statearr_28145_28190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (20))){
var state_28143__$1 = state_28143;
var statearr_28146_28191 = state_28143__$1;
(statearr_28146_28191[(2)] = null);

(statearr_28146_28191[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (1))){
var state_28143__$1 = state_28143;
var statearr_28147_28192 = state_28143__$1;
(statearr_28147_28192[(2)] = null);

(statearr_28147_28192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (24))){
var inst_28122 = (state_28143[(7)]);
var inst_28131 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28122);
var state_28143__$1 = state_28143;
var statearr_28148_28193 = state_28143__$1;
(statearr_28148_28193[(2)] = inst_28131);

(statearr_28148_28193[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (4))){
var inst_28074 = (state_28143[(8)]);
var inst_28074__$1 = (state_28143[(2)]);
var inst_28075 = (inst_28074__$1 == null);
var state_28143__$1 = (function (){var statearr_28149 = state_28143;
(statearr_28149[(8)] = inst_28074__$1);

return statearr_28149;
})();
if(cljs.core.truth_(inst_28075)){
var statearr_28150_28194 = state_28143__$1;
(statearr_28150_28194[(1)] = (5));

} else {
var statearr_28151_28195 = state_28143__$1;
(statearr_28151_28195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (15))){
var inst_28116 = (state_28143[(2)]);
var state_28143__$1 = state_28143;
var statearr_28152_28196 = state_28143__$1;
(statearr_28152_28196[(2)] = inst_28116);

(statearr_28152_28196[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (21))){
var inst_28136 = (state_28143[(2)]);
var state_28143__$1 = (function (){var statearr_28153 = state_28143;
(statearr_28153[(9)] = inst_28136);

return statearr_28153;
})();
var statearr_28154_28197 = state_28143__$1;
(statearr_28154_28197[(2)] = null);

(statearr_28154_28197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (13))){
var inst_28098 = (state_28143[(10)]);
var inst_28100 = cljs.core.chunked_seq_QMARK_.call(null,inst_28098);
var state_28143__$1 = state_28143;
if(inst_28100){
var statearr_28155_28198 = state_28143__$1;
(statearr_28155_28198[(1)] = (16));

} else {
var statearr_28156_28199 = state_28143__$1;
(statearr_28156_28199[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (22))){
var inst_28128 = (state_28143[(2)]);
var state_28143__$1 = state_28143;
if(cljs.core.truth_(inst_28128)){
var statearr_28157_28200 = state_28143__$1;
(statearr_28157_28200[(1)] = (23));

} else {
var statearr_28158_28201 = state_28143__$1;
(statearr_28158_28201[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (6))){
var inst_28074 = (state_28143[(8)]);
var inst_28124 = (state_28143[(11)]);
var inst_28122 = (state_28143[(7)]);
var inst_28122__$1 = topic_fn.call(null,inst_28074);
var inst_28123 = cljs.core.deref.call(null,mults);
var inst_28124__$1 = cljs.core.get.call(null,inst_28123,inst_28122__$1);
var state_28143__$1 = (function (){var statearr_28159 = state_28143;
(statearr_28159[(11)] = inst_28124__$1);

(statearr_28159[(7)] = inst_28122__$1);

return statearr_28159;
})();
if(cljs.core.truth_(inst_28124__$1)){
var statearr_28160_28202 = state_28143__$1;
(statearr_28160_28202[(1)] = (19));

} else {
var statearr_28161_28203 = state_28143__$1;
(statearr_28161_28203[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (25))){
var inst_28133 = (state_28143[(2)]);
var state_28143__$1 = state_28143;
var statearr_28162_28204 = state_28143__$1;
(statearr_28162_28204[(2)] = inst_28133);

(statearr_28162_28204[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (17))){
var inst_28098 = (state_28143[(10)]);
var inst_28107 = cljs.core.first.call(null,inst_28098);
var inst_28108 = cljs.core.async.muxch_STAR_.call(null,inst_28107);
var inst_28109 = cljs.core.async.close_BANG_.call(null,inst_28108);
var inst_28110 = cljs.core.next.call(null,inst_28098);
var inst_28084 = inst_28110;
var inst_28085 = null;
var inst_28086 = (0);
var inst_28087 = (0);
var state_28143__$1 = (function (){var statearr_28163 = state_28143;
(statearr_28163[(12)] = inst_28084);

(statearr_28163[(13)] = inst_28085);

(statearr_28163[(14)] = inst_28086);

(statearr_28163[(15)] = inst_28087);

(statearr_28163[(16)] = inst_28109);

return statearr_28163;
})();
var statearr_28164_28205 = state_28143__$1;
(statearr_28164_28205[(2)] = null);

(statearr_28164_28205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (3))){
var inst_28141 = (state_28143[(2)]);
var state_28143__$1 = state_28143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28143__$1,inst_28141);
} else {
if((state_val_28144 === (12))){
var inst_28118 = (state_28143[(2)]);
var state_28143__$1 = state_28143;
var statearr_28165_28206 = state_28143__$1;
(statearr_28165_28206[(2)] = inst_28118);

(statearr_28165_28206[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (2))){
var state_28143__$1 = state_28143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28143__$1,(4),ch);
} else {
if((state_val_28144 === (23))){
var state_28143__$1 = state_28143;
var statearr_28166_28207 = state_28143__$1;
(statearr_28166_28207[(2)] = null);

(statearr_28166_28207[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (19))){
var inst_28074 = (state_28143[(8)]);
var inst_28124 = (state_28143[(11)]);
var inst_28126 = cljs.core.async.muxch_STAR_.call(null,inst_28124);
var state_28143__$1 = state_28143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28143__$1,(22),inst_28126,inst_28074);
} else {
if((state_val_28144 === (11))){
var inst_28084 = (state_28143[(12)]);
var inst_28098 = (state_28143[(10)]);
var inst_28098__$1 = cljs.core.seq.call(null,inst_28084);
var state_28143__$1 = (function (){var statearr_28167 = state_28143;
(statearr_28167[(10)] = inst_28098__$1);

return statearr_28167;
})();
if(inst_28098__$1){
var statearr_28168_28208 = state_28143__$1;
(statearr_28168_28208[(1)] = (13));

} else {
var statearr_28169_28209 = state_28143__$1;
(statearr_28169_28209[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (9))){
var inst_28120 = (state_28143[(2)]);
var state_28143__$1 = state_28143;
var statearr_28170_28210 = state_28143__$1;
(statearr_28170_28210[(2)] = inst_28120);

(statearr_28170_28210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (5))){
var inst_28081 = cljs.core.deref.call(null,mults);
var inst_28082 = cljs.core.vals.call(null,inst_28081);
var inst_28083 = cljs.core.seq.call(null,inst_28082);
var inst_28084 = inst_28083;
var inst_28085 = null;
var inst_28086 = (0);
var inst_28087 = (0);
var state_28143__$1 = (function (){var statearr_28171 = state_28143;
(statearr_28171[(12)] = inst_28084);

(statearr_28171[(13)] = inst_28085);

(statearr_28171[(14)] = inst_28086);

(statearr_28171[(15)] = inst_28087);

return statearr_28171;
})();
var statearr_28172_28211 = state_28143__$1;
(statearr_28172_28211[(2)] = null);

(statearr_28172_28211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (14))){
var state_28143__$1 = state_28143;
var statearr_28176_28212 = state_28143__$1;
(statearr_28176_28212[(2)] = null);

(statearr_28176_28212[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (16))){
var inst_28098 = (state_28143[(10)]);
var inst_28102 = cljs.core.chunk_first.call(null,inst_28098);
var inst_28103 = cljs.core.chunk_rest.call(null,inst_28098);
var inst_28104 = cljs.core.count.call(null,inst_28102);
var inst_28084 = inst_28103;
var inst_28085 = inst_28102;
var inst_28086 = inst_28104;
var inst_28087 = (0);
var state_28143__$1 = (function (){var statearr_28177 = state_28143;
(statearr_28177[(12)] = inst_28084);

(statearr_28177[(13)] = inst_28085);

(statearr_28177[(14)] = inst_28086);

(statearr_28177[(15)] = inst_28087);

return statearr_28177;
})();
var statearr_28178_28213 = state_28143__$1;
(statearr_28178_28213[(2)] = null);

(statearr_28178_28213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (10))){
var inst_28084 = (state_28143[(12)]);
var inst_28085 = (state_28143[(13)]);
var inst_28086 = (state_28143[(14)]);
var inst_28087 = (state_28143[(15)]);
var inst_28092 = cljs.core._nth.call(null,inst_28085,inst_28087);
var inst_28093 = cljs.core.async.muxch_STAR_.call(null,inst_28092);
var inst_28094 = cljs.core.async.close_BANG_.call(null,inst_28093);
var inst_28095 = (inst_28087 + (1));
var tmp28173 = inst_28084;
var tmp28174 = inst_28085;
var tmp28175 = inst_28086;
var inst_28084__$1 = tmp28173;
var inst_28085__$1 = tmp28174;
var inst_28086__$1 = tmp28175;
var inst_28087__$1 = inst_28095;
var state_28143__$1 = (function (){var statearr_28179 = state_28143;
(statearr_28179[(12)] = inst_28084__$1);

(statearr_28179[(13)] = inst_28085__$1);

(statearr_28179[(14)] = inst_28086__$1);

(statearr_28179[(17)] = inst_28094);

(statearr_28179[(15)] = inst_28087__$1);

return statearr_28179;
})();
var statearr_28180_28214 = state_28143__$1;
(statearr_28180_28214[(2)] = null);

(statearr_28180_28214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (18))){
var inst_28113 = (state_28143[(2)]);
var state_28143__$1 = state_28143;
var statearr_28181_28215 = state_28143__$1;
(statearr_28181_28215[(2)] = inst_28113);

(statearr_28181_28215[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (8))){
var inst_28086 = (state_28143[(14)]);
var inst_28087 = (state_28143[(15)]);
var inst_28089 = (inst_28087 < inst_28086);
var inst_28090 = inst_28089;
var state_28143__$1 = state_28143;
if(cljs.core.truth_(inst_28090)){
var statearr_28182_28216 = state_28143__$1;
(statearr_28182_28216[(1)] = (10));

} else {
var statearr_28183_28217 = state_28143__$1;
(statearr_28183_28217[(1)] = (11));

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
});})(c__26955__auto___28189,mults,ensure_mult,p))
;
return ((function (switch__26865__auto__,c__26955__auto___28189,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26866__auto__ = null;
var cljs$core$async$state_machine__26866__auto____0 = (function (){
var statearr_28184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28184[(0)] = cljs$core$async$state_machine__26866__auto__);

(statearr_28184[(1)] = (1));

return statearr_28184;
});
var cljs$core$async$state_machine__26866__auto____1 = (function (state_28143){
while(true){
var ret_value__26867__auto__ = (function (){try{while(true){
var result__26868__auto__ = switch__26865__auto__.call(null,state_28143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26868__auto__;
}
break;
}
}catch (e28185){if((e28185 instanceof Object)){
var ex__26869__auto__ = e28185;
var statearr_28186_28218 = state_28143;
(statearr_28186_28218[(5)] = ex__26869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28219 = state_28143;
state_28143 = G__28219;
continue;
} else {
return ret_value__26867__auto__;
}
break;
}
});
cljs$core$async$state_machine__26866__auto__ = function(state_28143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26866__auto____1.call(this,state_28143);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26866__auto____0;
cljs$core$async$state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26866__auto____1;
return cljs$core$async$state_machine__26866__auto__;
})()
;})(switch__26865__auto__,c__26955__auto___28189,mults,ensure_mult,p))
})();
var state__26957__auto__ = (function (){var statearr_28187 = f__26956__auto__.call(null);
(statearr_28187[(6)] = c__26955__auto___28189);

return statearr_28187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26957__auto__);
});})(c__26955__auto___28189,mults,ensure_mult,p))
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
var G__28221 = arguments.length;
switch (G__28221) {
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
var G__28224 = arguments.length;
switch (G__28224) {
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
var G__28227 = arguments.length;
switch (G__28227) {
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
var c__26955__auto___28294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26955__auto___28294,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26956__auto__ = (function (){var switch__26865__auto__ = ((function (c__26955__auto___28294,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28266){
var state_val_28267 = (state_28266[(1)]);
if((state_val_28267 === (7))){
var state_28266__$1 = state_28266;
var statearr_28268_28295 = state_28266__$1;
(statearr_28268_28295[(2)] = null);

(statearr_28268_28295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (1))){
var state_28266__$1 = state_28266;
var statearr_28269_28296 = state_28266__$1;
(statearr_28269_28296[(2)] = null);

(statearr_28269_28296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (4))){
var inst_28230 = (state_28266[(7)]);
var inst_28232 = (inst_28230 < cnt);
var state_28266__$1 = state_28266;
if(cljs.core.truth_(inst_28232)){
var statearr_28270_28297 = state_28266__$1;
(statearr_28270_28297[(1)] = (6));

} else {
var statearr_28271_28298 = state_28266__$1;
(statearr_28271_28298[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (15))){
var inst_28262 = (state_28266[(2)]);
var state_28266__$1 = state_28266;
var statearr_28272_28299 = state_28266__$1;
(statearr_28272_28299[(2)] = inst_28262);

(statearr_28272_28299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (13))){
var inst_28255 = cljs.core.async.close_BANG_.call(null,out);
var state_28266__$1 = state_28266;
var statearr_28273_28300 = state_28266__$1;
(statearr_28273_28300[(2)] = inst_28255);

(statearr_28273_28300[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (6))){
var state_28266__$1 = state_28266;
var statearr_28274_28301 = state_28266__$1;
(statearr_28274_28301[(2)] = null);

(statearr_28274_28301[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (3))){
var inst_28264 = (state_28266[(2)]);
var state_28266__$1 = state_28266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28266__$1,inst_28264);
} else {
if((state_val_28267 === (12))){
var inst_28252 = (state_28266[(8)]);
var inst_28252__$1 = (state_28266[(2)]);
var inst_28253 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28252__$1);
var state_28266__$1 = (function (){var statearr_28275 = state_28266;
(statearr_28275[(8)] = inst_28252__$1);

return statearr_28275;
})();
if(cljs.core.truth_(inst_28253)){
var statearr_28276_28302 = state_28266__$1;
(statearr_28276_28302[(1)] = (13));

} else {
var statearr_28277_28303 = state_28266__$1;
(statearr_28277_28303[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (2))){
var inst_28229 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28230 = (0);
var state_28266__$1 = (function (){var statearr_28278 = state_28266;
(statearr_28278[(7)] = inst_28230);

(statearr_28278[(9)] = inst_28229);

return statearr_28278;
})();
var statearr_28279_28304 = state_28266__$1;
(statearr_28279_28304[(2)] = null);

(statearr_28279_28304[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (11))){
var inst_28230 = (state_28266[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28266,(10),Object,null,(9));
var inst_28239 = chs__$1.call(null,inst_28230);
var inst_28240 = done.call(null,inst_28230);
var inst_28241 = cljs.core.async.take_BANG_.call(null,inst_28239,inst_28240);
var state_28266__$1 = state_28266;
var statearr_28280_28305 = state_28266__$1;
(statearr_28280_28305[(2)] = inst_28241);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28266__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (9))){
var inst_28230 = (state_28266[(7)]);
var inst_28243 = (state_28266[(2)]);
var inst_28244 = (inst_28230 + (1));
var inst_28230__$1 = inst_28244;
var state_28266__$1 = (function (){var statearr_28281 = state_28266;
(statearr_28281[(7)] = inst_28230__$1);

(statearr_28281[(10)] = inst_28243);

return statearr_28281;
})();
var statearr_28282_28306 = state_28266__$1;
(statearr_28282_28306[(2)] = null);

(statearr_28282_28306[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (5))){
var inst_28250 = (state_28266[(2)]);
var state_28266__$1 = (function (){var statearr_28283 = state_28266;
(statearr_28283[(11)] = inst_28250);

return statearr_28283;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28266__$1,(12),dchan);
} else {
if((state_val_28267 === (14))){
var inst_28252 = (state_28266[(8)]);
var inst_28257 = cljs.core.apply.call(null,f,inst_28252);
var state_28266__$1 = state_28266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28266__$1,(16),out,inst_28257);
} else {
if((state_val_28267 === (16))){
var inst_28259 = (state_28266[(2)]);
var state_28266__$1 = (function (){var statearr_28284 = state_28266;
(statearr_28284[(12)] = inst_28259);

return statearr_28284;
})();
var statearr_28285_28307 = state_28266__$1;
(statearr_28285_28307[(2)] = null);

(statearr_28285_28307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (10))){
var inst_28234 = (state_28266[(2)]);
var inst_28235 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28266__$1 = (function (){var statearr_28286 = state_28266;
(statearr_28286[(13)] = inst_28234);

return statearr_28286;
})();
var statearr_28287_28308 = state_28266__$1;
(statearr_28287_28308[(2)] = inst_28235);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28266__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (8))){
var inst_28248 = (state_28266[(2)]);
var state_28266__$1 = state_28266;
var statearr_28288_28309 = state_28266__$1;
(statearr_28288_28309[(2)] = inst_28248);

(statearr_28288_28309[(1)] = (5));


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
});})(c__26955__auto___28294,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26865__auto__,c__26955__auto___28294,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26866__auto__ = null;
var cljs$core$async$state_machine__26866__auto____0 = (function (){
var statearr_28289 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28289[(0)] = cljs$core$async$state_machine__26866__auto__);

(statearr_28289[(1)] = (1));

return statearr_28289;
});
var cljs$core$async$state_machine__26866__auto____1 = (function (state_28266){
while(true){
var ret_value__26867__auto__ = (function (){try{while(true){
var result__26868__auto__ = switch__26865__auto__.call(null,state_28266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26868__auto__;
}
break;
}
}catch (e28290){if((e28290 instanceof Object)){
var ex__26869__auto__ = e28290;
var statearr_28291_28310 = state_28266;
(statearr_28291_28310[(5)] = ex__26869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28311 = state_28266;
state_28266 = G__28311;
continue;
} else {
return ret_value__26867__auto__;
}
break;
}
});
cljs$core$async$state_machine__26866__auto__ = function(state_28266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26866__auto____1.call(this,state_28266);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26866__auto____0;
cljs$core$async$state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26866__auto____1;
return cljs$core$async$state_machine__26866__auto__;
})()
;})(switch__26865__auto__,c__26955__auto___28294,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26957__auto__ = (function (){var statearr_28292 = f__26956__auto__.call(null);
(statearr_28292[(6)] = c__26955__auto___28294);

return statearr_28292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26957__auto__);
});})(c__26955__auto___28294,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__28314 = arguments.length;
switch (G__28314) {
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
var c__26955__auto___28368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26955__auto___28368,out){
return (function (){
var f__26956__auto__ = (function (){var switch__26865__auto__ = ((function (c__26955__auto___28368,out){
return (function (state_28346){
var state_val_28347 = (state_28346[(1)]);
if((state_val_28347 === (7))){
var inst_28326 = (state_28346[(7)]);
var inst_28325 = (state_28346[(8)]);
var inst_28325__$1 = (state_28346[(2)]);
var inst_28326__$1 = cljs.core.nth.call(null,inst_28325__$1,(0),null);
var inst_28327 = cljs.core.nth.call(null,inst_28325__$1,(1),null);
var inst_28328 = (inst_28326__$1 == null);
var state_28346__$1 = (function (){var statearr_28348 = state_28346;
(statearr_28348[(9)] = inst_28327);

(statearr_28348[(7)] = inst_28326__$1);

(statearr_28348[(8)] = inst_28325__$1);

return statearr_28348;
})();
if(cljs.core.truth_(inst_28328)){
var statearr_28349_28369 = state_28346__$1;
(statearr_28349_28369[(1)] = (8));

} else {
var statearr_28350_28370 = state_28346__$1;
(statearr_28350_28370[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (1))){
var inst_28315 = cljs.core.vec.call(null,chs);
var inst_28316 = inst_28315;
var state_28346__$1 = (function (){var statearr_28351 = state_28346;
(statearr_28351[(10)] = inst_28316);

return statearr_28351;
})();
var statearr_28352_28371 = state_28346__$1;
(statearr_28352_28371[(2)] = null);

(statearr_28352_28371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (4))){
var inst_28316 = (state_28346[(10)]);
var state_28346__$1 = state_28346;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28346__$1,(7),inst_28316);
} else {
if((state_val_28347 === (6))){
var inst_28342 = (state_28346[(2)]);
var state_28346__$1 = state_28346;
var statearr_28353_28372 = state_28346__$1;
(statearr_28353_28372[(2)] = inst_28342);

(statearr_28353_28372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (3))){
var inst_28344 = (state_28346[(2)]);
var state_28346__$1 = state_28346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28346__$1,inst_28344);
} else {
if((state_val_28347 === (2))){
var inst_28316 = (state_28346[(10)]);
var inst_28318 = cljs.core.count.call(null,inst_28316);
var inst_28319 = (inst_28318 > (0));
var state_28346__$1 = state_28346;
if(cljs.core.truth_(inst_28319)){
var statearr_28355_28373 = state_28346__$1;
(statearr_28355_28373[(1)] = (4));

} else {
var statearr_28356_28374 = state_28346__$1;
(statearr_28356_28374[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (11))){
var inst_28316 = (state_28346[(10)]);
var inst_28335 = (state_28346[(2)]);
var tmp28354 = inst_28316;
var inst_28316__$1 = tmp28354;
var state_28346__$1 = (function (){var statearr_28357 = state_28346;
(statearr_28357[(11)] = inst_28335);

(statearr_28357[(10)] = inst_28316__$1);

return statearr_28357;
})();
var statearr_28358_28375 = state_28346__$1;
(statearr_28358_28375[(2)] = null);

(statearr_28358_28375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (9))){
var inst_28326 = (state_28346[(7)]);
var state_28346__$1 = state_28346;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28346__$1,(11),out,inst_28326);
} else {
if((state_val_28347 === (5))){
var inst_28340 = cljs.core.async.close_BANG_.call(null,out);
var state_28346__$1 = state_28346;
var statearr_28359_28376 = state_28346__$1;
(statearr_28359_28376[(2)] = inst_28340);

(statearr_28359_28376[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (10))){
var inst_28338 = (state_28346[(2)]);
var state_28346__$1 = state_28346;
var statearr_28360_28377 = state_28346__$1;
(statearr_28360_28377[(2)] = inst_28338);

(statearr_28360_28377[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (8))){
var inst_28327 = (state_28346[(9)]);
var inst_28326 = (state_28346[(7)]);
var inst_28316 = (state_28346[(10)]);
var inst_28325 = (state_28346[(8)]);
var inst_28330 = (function (){var cs = inst_28316;
var vec__28321 = inst_28325;
var v = inst_28326;
var c = inst_28327;
return ((function (cs,vec__28321,v,c,inst_28327,inst_28326,inst_28316,inst_28325,state_val_28347,c__26955__auto___28368,out){
return (function (p1__28312_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28312_SHARP_);
});
;})(cs,vec__28321,v,c,inst_28327,inst_28326,inst_28316,inst_28325,state_val_28347,c__26955__auto___28368,out))
})();
var inst_28331 = cljs.core.filterv.call(null,inst_28330,inst_28316);
var inst_28316__$1 = inst_28331;
var state_28346__$1 = (function (){var statearr_28361 = state_28346;
(statearr_28361[(10)] = inst_28316__$1);

return statearr_28361;
})();
var statearr_28362_28378 = state_28346__$1;
(statearr_28362_28378[(2)] = null);

(statearr_28362_28378[(1)] = (2));


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
});})(c__26955__auto___28368,out))
;
return ((function (switch__26865__auto__,c__26955__auto___28368,out){
return (function() {
var cljs$core$async$state_machine__26866__auto__ = null;
var cljs$core$async$state_machine__26866__auto____0 = (function (){
var statearr_28363 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28363[(0)] = cljs$core$async$state_machine__26866__auto__);

(statearr_28363[(1)] = (1));

return statearr_28363;
});
var cljs$core$async$state_machine__26866__auto____1 = (function (state_28346){
while(true){
var ret_value__26867__auto__ = (function (){try{while(true){
var result__26868__auto__ = switch__26865__auto__.call(null,state_28346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26868__auto__;
}
break;
}
}catch (e28364){if((e28364 instanceof Object)){
var ex__26869__auto__ = e28364;
var statearr_28365_28379 = state_28346;
(statearr_28365_28379[(5)] = ex__26869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28380 = state_28346;
state_28346 = G__28380;
continue;
} else {
return ret_value__26867__auto__;
}
break;
}
});
cljs$core$async$state_machine__26866__auto__ = function(state_28346){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26866__auto____1.call(this,state_28346);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26866__auto____0;
cljs$core$async$state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26866__auto____1;
return cljs$core$async$state_machine__26866__auto__;
})()
;})(switch__26865__auto__,c__26955__auto___28368,out))
})();
var state__26957__auto__ = (function (){var statearr_28366 = f__26956__auto__.call(null);
(statearr_28366[(6)] = c__26955__auto___28368);

return statearr_28366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26957__auto__);
});})(c__26955__auto___28368,out))
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
var G__28382 = arguments.length;
switch (G__28382) {
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
var c__26955__auto___28427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26955__auto___28427,out){
return (function (){
var f__26956__auto__ = (function (){var switch__26865__auto__ = ((function (c__26955__auto___28427,out){
return (function (state_28406){
var state_val_28407 = (state_28406[(1)]);
if((state_val_28407 === (7))){
var inst_28388 = (state_28406[(7)]);
var inst_28388__$1 = (state_28406[(2)]);
var inst_28389 = (inst_28388__$1 == null);
var inst_28390 = cljs.core.not.call(null,inst_28389);
var state_28406__$1 = (function (){var statearr_28408 = state_28406;
(statearr_28408[(7)] = inst_28388__$1);

return statearr_28408;
})();
if(inst_28390){
var statearr_28409_28428 = state_28406__$1;
(statearr_28409_28428[(1)] = (8));

} else {
var statearr_28410_28429 = state_28406__$1;
(statearr_28410_28429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (1))){
var inst_28383 = (0);
var state_28406__$1 = (function (){var statearr_28411 = state_28406;
(statearr_28411[(8)] = inst_28383);

return statearr_28411;
})();
var statearr_28412_28430 = state_28406__$1;
(statearr_28412_28430[(2)] = null);

(statearr_28412_28430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (4))){
var state_28406__$1 = state_28406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28406__$1,(7),ch);
} else {
if((state_val_28407 === (6))){
var inst_28401 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28413_28431 = state_28406__$1;
(statearr_28413_28431[(2)] = inst_28401);

(statearr_28413_28431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (3))){
var inst_28403 = (state_28406[(2)]);
var inst_28404 = cljs.core.async.close_BANG_.call(null,out);
var state_28406__$1 = (function (){var statearr_28414 = state_28406;
(statearr_28414[(9)] = inst_28403);

return statearr_28414;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28406__$1,inst_28404);
} else {
if((state_val_28407 === (2))){
var inst_28383 = (state_28406[(8)]);
var inst_28385 = (inst_28383 < n);
var state_28406__$1 = state_28406;
if(cljs.core.truth_(inst_28385)){
var statearr_28415_28432 = state_28406__$1;
(statearr_28415_28432[(1)] = (4));

} else {
var statearr_28416_28433 = state_28406__$1;
(statearr_28416_28433[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (11))){
var inst_28383 = (state_28406[(8)]);
var inst_28393 = (state_28406[(2)]);
var inst_28394 = (inst_28383 + (1));
var inst_28383__$1 = inst_28394;
var state_28406__$1 = (function (){var statearr_28417 = state_28406;
(statearr_28417[(8)] = inst_28383__$1);

(statearr_28417[(10)] = inst_28393);

return statearr_28417;
})();
var statearr_28418_28434 = state_28406__$1;
(statearr_28418_28434[(2)] = null);

(statearr_28418_28434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (9))){
var state_28406__$1 = state_28406;
var statearr_28419_28435 = state_28406__$1;
(statearr_28419_28435[(2)] = null);

(statearr_28419_28435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (5))){
var state_28406__$1 = state_28406;
var statearr_28420_28436 = state_28406__$1;
(statearr_28420_28436[(2)] = null);

(statearr_28420_28436[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (10))){
var inst_28398 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28421_28437 = state_28406__$1;
(statearr_28421_28437[(2)] = inst_28398);

(statearr_28421_28437[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (8))){
var inst_28388 = (state_28406[(7)]);
var state_28406__$1 = state_28406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28406__$1,(11),out,inst_28388);
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
});})(c__26955__auto___28427,out))
;
return ((function (switch__26865__auto__,c__26955__auto___28427,out){
return (function() {
var cljs$core$async$state_machine__26866__auto__ = null;
var cljs$core$async$state_machine__26866__auto____0 = (function (){
var statearr_28422 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28422[(0)] = cljs$core$async$state_machine__26866__auto__);

(statearr_28422[(1)] = (1));

return statearr_28422;
});
var cljs$core$async$state_machine__26866__auto____1 = (function (state_28406){
while(true){
var ret_value__26867__auto__ = (function (){try{while(true){
var result__26868__auto__ = switch__26865__auto__.call(null,state_28406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26868__auto__;
}
break;
}
}catch (e28423){if((e28423 instanceof Object)){
var ex__26869__auto__ = e28423;
var statearr_28424_28438 = state_28406;
(statearr_28424_28438[(5)] = ex__26869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28439 = state_28406;
state_28406 = G__28439;
continue;
} else {
return ret_value__26867__auto__;
}
break;
}
});
cljs$core$async$state_machine__26866__auto__ = function(state_28406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26866__auto____1.call(this,state_28406);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26866__auto____0;
cljs$core$async$state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26866__auto____1;
return cljs$core$async$state_machine__26866__auto__;
})()
;})(switch__26865__auto__,c__26955__auto___28427,out))
})();
var state__26957__auto__ = (function (){var statearr_28425 = f__26956__auto__.call(null);
(statearr_28425[(6)] = c__26955__auto___28427);

return statearr_28425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26957__auto__);
});})(c__26955__auto___28427,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28441 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28441 = (function (f,ch,meta28442){
this.f = f;
this.ch = ch;
this.meta28442 = meta28442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28443,meta28442__$1){
var self__ = this;
var _28443__$1 = this;
return (new cljs.core.async.t_cljs$core$async28441(self__.f,self__.ch,meta28442__$1));
});

cljs.core.async.t_cljs$core$async28441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28443){
var self__ = this;
var _28443__$1 = this;
return self__.meta28442;
});

cljs.core.async.t_cljs$core$async28441.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28441.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28441.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28441.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28441.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28444 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28444 = (function (f,ch,meta28442,_,fn1,meta28445){
this.f = f;
this.ch = ch;
this.meta28442 = meta28442;
this._ = _;
this.fn1 = fn1;
this.meta28445 = meta28445;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28446,meta28445__$1){
var self__ = this;
var _28446__$1 = this;
return (new cljs.core.async.t_cljs$core$async28444(self__.f,self__.ch,self__.meta28442,self__._,self__.fn1,meta28445__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28444.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28446){
var self__ = this;
var _28446__$1 = this;
return self__.meta28445;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28444.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28444.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28444.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28444.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28440_SHARP_){
return f1.call(null,(((p1__28440_SHARP_ == null))?null:self__.f.call(null,p1__28440_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28444.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28442","meta28442",421209000,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28441","cljs.core.async/t_cljs$core$async28441",371920140,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28445","meta28445",1912136690,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28444.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28444.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28444";

cljs.core.async.t_cljs$core$async28444.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28444");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28444.
 */
cljs.core.async.__GT_t_cljs$core$async28444 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28444(f__$1,ch__$1,meta28442__$1,___$2,fn1__$1,meta28445){
return (new cljs.core.async.t_cljs$core$async28444(f__$1,ch__$1,meta28442__$1,___$2,fn1__$1,meta28445));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28444(self__.f,self__.ch,self__.meta28442,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async28441.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28441.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28442","meta28442",421209000,null)], null);
});

cljs.core.async.t_cljs$core$async28441.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28441";

cljs.core.async.t_cljs$core$async28441.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28441");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28441.
 */
cljs.core.async.__GT_t_cljs$core$async28441 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28441(f__$1,ch__$1,meta28442){
return (new cljs.core.async.t_cljs$core$async28441(f__$1,ch__$1,meta28442));
});

}

return (new cljs.core.async.t_cljs$core$async28441(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28447 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28447 = (function (f,ch,meta28448){
this.f = f;
this.ch = ch;
this.meta28448 = meta28448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28449,meta28448__$1){
var self__ = this;
var _28449__$1 = this;
return (new cljs.core.async.t_cljs$core$async28447(self__.f,self__.ch,meta28448__$1));
});

cljs.core.async.t_cljs$core$async28447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28449){
var self__ = this;
var _28449__$1 = this;
return self__.meta28448;
});

cljs.core.async.t_cljs$core$async28447.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28447.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28447.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28447.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28447.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28447.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28447.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28448","meta28448",-1573796434,null)], null);
});

cljs.core.async.t_cljs$core$async28447.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28447.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28447";

cljs.core.async.t_cljs$core$async28447.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28447");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28447.
 */
cljs.core.async.__GT_t_cljs$core$async28447 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28447(f__$1,ch__$1,meta28448){
return (new cljs.core.async.t_cljs$core$async28447(f__$1,ch__$1,meta28448));
});

}

return (new cljs.core.async.t_cljs$core$async28447(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28450 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28450 = (function (p,ch,meta28451){
this.p = p;
this.ch = ch;
this.meta28451 = meta28451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28452,meta28451__$1){
var self__ = this;
var _28452__$1 = this;
return (new cljs.core.async.t_cljs$core$async28450(self__.p,self__.ch,meta28451__$1));
});

cljs.core.async.t_cljs$core$async28450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28452){
var self__ = this;
var _28452__$1 = this;
return self__.meta28451;
});

cljs.core.async.t_cljs$core$async28450.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28450.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28450.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28450.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28450.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28450.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28450.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28451","meta28451",-1644266784,null)], null);
});

cljs.core.async.t_cljs$core$async28450.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28450";

cljs.core.async.t_cljs$core$async28450.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28450");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28450.
 */
cljs.core.async.__GT_t_cljs$core$async28450 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28450(p__$1,ch__$1,meta28451){
return (new cljs.core.async.t_cljs$core$async28450(p__$1,ch__$1,meta28451));
});

}

return (new cljs.core.async.t_cljs$core$async28450(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28454 = arguments.length;
switch (G__28454) {
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
var c__26955__auto___28494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26955__auto___28494,out){
return (function (){
var f__26956__auto__ = (function (){var switch__26865__auto__ = ((function (c__26955__auto___28494,out){
return (function (state_28475){
var state_val_28476 = (state_28475[(1)]);
if((state_val_28476 === (7))){
var inst_28471 = (state_28475[(2)]);
var state_28475__$1 = state_28475;
var statearr_28477_28495 = state_28475__$1;
(statearr_28477_28495[(2)] = inst_28471);

(statearr_28477_28495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28476 === (1))){
var state_28475__$1 = state_28475;
var statearr_28478_28496 = state_28475__$1;
(statearr_28478_28496[(2)] = null);

(statearr_28478_28496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28476 === (4))){
var inst_28457 = (state_28475[(7)]);
var inst_28457__$1 = (state_28475[(2)]);
var inst_28458 = (inst_28457__$1 == null);
var state_28475__$1 = (function (){var statearr_28479 = state_28475;
(statearr_28479[(7)] = inst_28457__$1);

return statearr_28479;
})();
if(cljs.core.truth_(inst_28458)){
var statearr_28480_28497 = state_28475__$1;
(statearr_28480_28497[(1)] = (5));

} else {
var statearr_28481_28498 = state_28475__$1;
(statearr_28481_28498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28476 === (6))){
var inst_28457 = (state_28475[(7)]);
var inst_28462 = p.call(null,inst_28457);
var state_28475__$1 = state_28475;
if(cljs.core.truth_(inst_28462)){
var statearr_28482_28499 = state_28475__$1;
(statearr_28482_28499[(1)] = (8));

} else {
var statearr_28483_28500 = state_28475__$1;
(statearr_28483_28500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28476 === (3))){
var inst_28473 = (state_28475[(2)]);
var state_28475__$1 = state_28475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28475__$1,inst_28473);
} else {
if((state_val_28476 === (2))){
var state_28475__$1 = state_28475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28475__$1,(4),ch);
} else {
if((state_val_28476 === (11))){
var inst_28465 = (state_28475[(2)]);
var state_28475__$1 = state_28475;
var statearr_28484_28501 = state_28475__$1;
(statearr_28484_28501[(2)] = inst_28465);

(statearr_28484_28501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28476 === (9))){
var state_28475__$1 = state_28475;
var statearr_28485_28502 = state_28475__$1;
(statearr_28485_28502[(2)] = null);

(statearr_28485_28502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28476 === (5))){
var inst_28460 = cljs.core.async.close_BANG_.call(null,out);
var state_28475__$1 = state_28475;
var statearr_28486_28503 = state_28475__$1;
(statearr_28486_28503[(2)] = inst_28460);

(statearr_28486_28503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28476 === (10))){
var inst_28468 = (state_28475[(2)]);
var state_28475__$1 = (function (){var statearr_28487 = state_28475;
(statearr_28487[(8)] = inst_28468);

return statearr_28487;
})();
var statearr_28488_28504 = state_28475__$1;
(statearr_28488_28504[(2)] = null);

(statearr_28488_28504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28476 === (8))){
var inst_28457 = (state_28475[(7)]);
var state_28475__$1 = state_28475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28475__$1,(11),out,inst_28457);
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
});})(c__26955__auto___28494,out))
;
return ((function (switch__26865__auto__,c__26955__auto___28494,out){
return (function() {
var cljs$core$async$state_machine__26866__auto__ = null;
var cljs$core$async$state_machine__26866__auto____0 = (function (){
var statearr_28489 = [null,null,null,null,null,null,null,null,null];
(statearr_28489[(0)] = cljs$core$async$state_machine__26866__auto__);

(statearr_28489[(1)] = (1));

return statearr_28489;
});
var cljs$core$async$state_machine__26866__auto____1 = (function (state_28475){
while(true){
var ret_value__26867__auto__ = (function (){try{while(true){
var result__26868__auto__ = switch__26865__auto__.call(null,state_28475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26868__auto__;
}
break;
}
}catch (e28490){if((e28490 instanceof Object)){
var ex__26869__auto__ = e28490;
var statearr_28491_28505 = state_28475;
(statearr_28491_28505[(5)] = ex__26869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28506 = state_28475;
state_28475 = G__28506;
continue;
} else {
return ret_value__26867__auto__;
}
break;
}
});
cljs$core$async$state_machine__26866__auto__ = function(state_28475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26866__auto____1.call(this,state_28475);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26866__auto____0;
cljs$core$async$state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26866__auto____1;
return cljs$core$async$state_machine__26866__auto__;
})()
;})(switch__26865__auto__,c__26955__auto___28494,out))
})();
var state__26957__auto__ = (function (){var statearr_28492 = f__26956__auto__.call(null);
(statearr_28492[(6)] = c__26955__auto___28494);

return statearr_28492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26957__auto__);
});})(c__26955__auto___28494,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28508 = arguments.length;
switch (G__28508) {
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
var c__26955__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26955__auto__){
return (function (){
var f__26956__auto__ = (function (){var switch__26865__auto__ = ((function (c__26955__auto__){
return (function (state_28571){
var state_val_28572 = (state_28571[(1)]);
if((state_val_28572 === (7))){
var inst_28567 = (state_28571[(2)]);
var state_28571__$1 = state_28571;
var statearr_28573_28611 = state_28571__$1;
(statearr_28573_28611[(2)] = inst_28567);

(statearr_28573_28611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28572 === (20))){
var inst_28537 = (state_28571[(7)]);
var inst_28548 = (state_28571[(2)]);
var inst_28549 = cljs.core.next.call(null,inst_28537);
var inst_28523 = inst_28549;
var inst_28524 = null;
var inst_28525 = (0);
var inst_28526 = (0);
var state_28571__$1 = (function (){var statearr_28574 = state_28571;
(statearr_28574[(8)] = inst_28548);

(statearr_28574[(9)] = inst_28525);

(statearr_28574[(10)] = inst_28524);

(statearr_28574[(11)] = inst_28526);

(statearr_28574[(12)] = inst_28523);

return statearr_28574;
})();
var statearr_28575_28612 = state_28571__$1;
(statearr_28575_28612[(2)] = null);

(statearr_28575_28612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28572 === (1))){
var state_28571__$1 = state_28571;
var statearr_28576_28613 = state_28571__$1;
(statearr_28576_28613[(2)] = null);

(statearr_28576_28613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28572 === (4))){
var inst_28512 = (state_28571[(13)]);
var inst_28512__$1 = (state_28571[(2)]);
var inst_28513 = (inst_28512__$1 == null);
var state_28571__$1 = (function (){var statearr_28577 = state_28571;
(statearr_28577[(13)] = inst_28512__$1);

return statearr_28577;
})();
if(cljs.core.truth_(inst_28513)){
var statearr_28578_28614 = state_28571__$1;
(statearr_28578_28614[(1)] = (5));

} else {
var statearr_28579_28615 = state_28571__$1;
(statearr_28579_28615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28572 === (15))){
var state_28571__$1 = state_28571;
var statearr_28583_28616 = state_28571__$1;
(statearr_28583_28616[(2)] = null);

(statearr_28583_28616[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28572 === (21))){
var state_28571__$1 = state_28571;
var statearr_28584_28617 = state_28571__$1;
(statearr_28584_28617[(2)] = null);

(statearr_28584_28617[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28572 === (13))){
var inst_28525 = (state_28571[(9)]);
var inst_28524 = (state_28571[(10)]);
var inst_28526 = (state_28571[(11)]);
var inst_28523 = (state_28571[(12)]);
var inst_28533 = (state_28571[(2)]);
var inst_28534 = (inst_28526 + (1));
var tmp28580 = inst_28525;
var tmp28581 = inst_28524;
var tmp28582 = inst_28523;
var inst_28523__$1 = tmp28582;
var inst_28524__$1 = tmp28581;
var inst_28525__$1 = tmp28580;
var inst_28526__$1 = inst_28534;
var state_28571__$1 = (function (){var statearr_28585 = state_28571;
(statearr_28585[(9)] = inst_28525__$1);

(statearr_28585[(10)] = inst_28524__$1);

(statearr_28585[(11)] = inst_28526__$1);

(statearr_28585[(12)] = inst_28523__$1);

(statearr_28585[(14)] = inst_28533);

return statearr_28585;
})();
var statearr_28586_28618 = state_28571__$1;
(statearr_28586_28618[(2)] = null);

(statearr_28586_28618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28572 === (22))){
var state_28571__$1 = state_28571;
var statearr_28587_28619 = state_28571__$1;
(statearr_28587_28619[(2)] = null);

(statearr_28587_28619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28572 === (6))){
var inst_28512 = (state_28571[(13)]);
var inst_28521 = f.call(null,inst_28512);
var inst_28522 = cljs.core.seq.call(null,inst_28521);
var inst_28523 = inst_28522;
var inst_28524 = null;
var inst_28525 = (0);
var inst_28526 = (0);
var state_28571__$1 = (function (){var statearr_28588 = state_28571;
(statearr_28588[(9)] = inst_28525);

(statearr_28588[(10)] = inst_28524);

(statearr_28588[(11)] = inst_28526);

(statearr_28588[(12)] = inst_28523);

return statearr_28588;
})();
var statearr_28589_28620 = state_28571__$1;
(statearr_28589_28620[(2)] = null);

(statearr_28589_28620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28572 === (17))){
var inst_28537 = (state_28571[(7)]);
var inst_28541 = cljs.core.chunk_first.call(null,inst_28537);
var inst_28542 = cljs.core.chunk_rest.call(null,inst_28537);
var inst_28543 = cljs.core.count.call(null,inst_28541);
var inst_28523 = inst_28542;
var inst_28524 = inst_28541;
var inst_28525 = inst_28543;
var inst_28526 = (0);
var state_28571__$1 = (function (){var statearr_28590 = state_28571;
(statearr_28590[(9)] = inst_28525);

(statearr_28590[(10)] = inst_28524);

(statearr_28590[(11)] = inst_28526);

(statearr_28590[(12)] = inst_28523);

return statearr_28590;
})();
var statearr_28591_28621 = state_28571__$1;
(statearr_28591_28621[(2)] = null);

(statearr_28591_28621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28572 === (3))){
var inst_28569 = (state_28571[(2)]);
var state_28571__$1 = state_28571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28571__$1,inst_28569);
} else {
if((state_val_28572 === (12))){
var inst_28557 = (state_28571[(2)]);
var state_28571__$1 = state_28571;
var statearr_28592_28622 = state_28571__$1;
(statearr_28592_28622[(2)] = inst_28557);

(statearr_28592_28622[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28572 === (2))){
var state_28571__$1 = state_28571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28571__$1,(4),in$);
} else {
if((state_val_28572 === (23))){
var inst_28565 = (state_28571[(2)]);
var state_28571__$1 = state_28571;
var statearr_28593_28623 = state_28571__$1;
(statearr_28593_28623[(2)] = inst_28565);

(statearr_28593_28623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28572 === (19))){
var inst_28552 = (state_28571[(2)]);
var state_28571__$1 = state_28571;
var statearr_28594_28624 = state_28571__$1;
(statearr_28594_28624[(2)] = inst_28552);

(statearr_28594_28624[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28572 === (11))){
var inst_28537 = (state_28571[(7)]);
var inst_28523 = (state_28571[(12)]);
var inst_28537__$1 = cljs.core.seq.call(null,inst_28523);
var state_28571__$1 = (function (){var statearr_28595 = state_28571;
(statearr_28595[(7)] = inst_28537__$1);

return statearr_28595;
})();
if(inst_28537__$1){
var statearr_28596_28625 = state_28571__$1;
(statearr_28596_28625[(1)] = (14));

} else {
var statearr_28597_28626 = state_28571__$1;
(statearr_28597_28626[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28572 === (9))){
var inst_28559 = (state_28571[(2)]);
var inst_28560 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28571__$1 = (function (){var statearr_28598 = state_28571;
(statearr_28598[(15)] = inst_28559);

return statearr_28598;
})();
if(cljs.core.truth_(inst_28560)){
var statearr_28599_28627 = state_28571__$1;
(statearr_28599_28627[(1)] = (21));

} else {
var statearr_28600_28628 = state_28571__$1;
(statearr_28600_28628[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28572 === (5))){
var inst_28515 = cljs.core.async.close_BANG_.call(null,out);
var state_28571__$1 = state_28571;
var statearr_28601_28629 = state_28571__$1;
(statearr_28601_28629[(2)] = inst_28515);

(statearr_28601_28629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28572 === (14))){
var inst_28537 = (state_28571[(7)]);
var inst_28539 = cljs.core.chunked_seq_QMARK_.call(null,inst_28537);
var state_28571__$1 = state_28571;
if(inst_28539){
var statearr_28602_28630 = state_28571__$1;
(statearr_28602_28630[(1)] = (17));

} else {
var statearr_28603_28631 = state_28571__$1;
(statearr_28603_28631[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28572 === (16))){
var inst_28555 = (state_28571[(2)]);
var state_28571__$1 = state_28571;
var statearr_28604_28632 = state_28571__$1;
(statearr_28604_28632[(2)] = inst_28555);

(statearr_28604_28632[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28572 === (10))){
var inst_28524 = (state_28571[(10)]);
var inst_28526 = (state_28571[(11)]);
var inst_28531 = cljs.core._nth.call(null,inst_28524,inst_28526);
var state_28571__$1 = state_28571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28571__$1,(13),out,inst_28531);
} else {
if((state_val_28572 === (18))){
var inst_28537 = (state_28571[(7)]);
var inst_28546 = cljs.core.first.call(null,inst_28537);
var state_28571__$1 = state_28571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28571__$1,(20),out,inst_28546);
} else {
if((state_val_28572 === (8))){
var inst_28525 = (state_28571[(9)]);
var inst_28526 = (state_28571[(11)]);
var inst_28528 = (inst_28526 < inst_28525);
var inst_28529 = inst_28528;
var state_28571__$1 = state_28571;
if(cljs.core.truth_(inst_28529)){
var statearr_28605_28633 = state_28571__$1;
(statearr_28605_28633[(1)] = (10));

} else {
var statearr_28606_28634 = state_28571__$1;
(statearr_28606_28634[(1)] = (11));

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
});})(c__26955__auto__))
;
return ((function (switch__26865__auto__,c__26955__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26866__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26866__auto____0 = (function (){
var statearr_28607 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28607[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26866__auto__);

(statearr_28607[(1)] = (1));

return statearr_28607;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26866__auto____1 = (function (state_28571){
while(true){
var ret_value__26867__auto__ = (function (){try{while(true){
var result__26868__auto__ = switch__26865__auto__.call(null,state_28571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26868__auto__;
}
break;
}
}catch (e28608){if((e28608 instanceof Object)){
var ex__26869__auto__ = e28608;
var statearr_28609_28635 = state_28571;
(statearr_28609_28635[(5)] = ex__26869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28636 = state_28571;
state_28571 = G__28636;
continue;
} else {
return ret_value__26867__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26866__auto__ = function(state_28571){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26866__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26866__auto____1.call(this,state_28571);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26866__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26866__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26866__auto__;
})()
;})(switch__26865__auto__,c__26955__auto__))
})();
var state__26957__auto__ = (function (){var statearr_28610 = f__26956__auto__.call(null);
(statearr_28610[(6)] = c__26955__auto__);

return statearr_28610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26957__auto__);
});})(c__26955__auto__))
);

return c__26955__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28638 = arguments.length;
switch (G__28638) {
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
var G__28641 = arguments.length;
switch (G__28641) {
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
var G__28644 = arguments.length;
switch (G__28644) {
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
var c__26955__auto___28691 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26955__auto___28691,out){
return (function (){
var f__26956__auto__ = (function (){var switch__26865__auto__ = ((function (c__26955__auto___28691,out){
return (function (state_28668){
var state_val_28669 = (state_28668[(1)]);
if((state_val_28669 === (7))){
var inst_28663 = (state_28668[(2)]);
var state_28668__$1 = state_28668;
var statearr_28670_28692 = state_28668__$1;
(statearr_28670_28692[(2)] = inst_28663);

(statearr_28670_28692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28669 === (1))){
var inst_28645 = null;
var state_28668__$1 = (function (){var statearr_28671 = state_28668;
(statearr_28671[(7)] = inst_28645);

return statearr_28671;
})();
var statearr_28672_28693 = state_28668__$1;
(statearr_28672_28693[(2)] = null);

(statearr_28672_28693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28669 === (4))){
var inst_28648 = (state_28668[(8)]);
var inst_28648__$1 = (state_28668[(2)]);
var inst_28649 = (inst_28648__$1 == null);
var inst_28650 = cljs.core.not.call(null,inst_28649);
var state_28668__$1 = (function (){var statearr_28673 = state_28668;
(statearr_28673[(8)] = inst_28648__$1);

return statearr_28673;
})();
if(inst_28650){
var statearr_28674_28694 = state_28668__$1;
(statearr_28674_28694[(1)] = (5));

} else {
var statearr_28675_28695 = state_28668__$1;
(statearr_28675_28695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28669 === (6))){
var state_28668__$1 = state_28668;
var statearr_28676_28696 = state_28668__$1;
(statearr_28676_28696[(2)] = null);

(statearr_28676_28696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28669 === (3))){
var inst_28665 = (state_28668[(2)]);
var inst_28666 = cljs.core.async.close_BANG_.call(null,out);
var state_28668__$1 = (function (){var statearr_28677 = state_28668;
(statearr_28677[(9)] = inst_28665);

return statearr_28677;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28668__$1,inst_28666);
} else {
if((state_val_28669 === (2))){
var state_28668__$1 = state_28668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28668__$1,(4),ch);
} else {
if((state_val_28669 === (11))){
var inst_28648 = (state_28668[(8)]);
var inst_28657 = (state_28668[(2)]);
var inst_28645 = inst_28648;
var state_28668__$1 = (function (){var statearr_28678 = state_28668;
(statearr_28678[(10)] = inst_28657);

(statearr_28678[(7)] = inst_28645);

return statearr_28678;
})();
var statearr_28679_28697 = state_28668__$1;
(statearr_28679_28697[(2)] = null);

(statearr_28679_28697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28669 === (9))){
var inst_28648 = (state_28668[(8)]);
var state_28668__$1 = state_28668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28668__$1,(11),out,inst_28648);
} else {
if((state_val_28669 === (5))){
var inst_28648 = (state_28668[(8)]);
var inst_28645 = (state_28668[(7)]);
var inst_28652 = cljs.core._EQ_.call(null,inst_28648,inst_28645);
var state_28668__$1 = state_28668;
if(inst_28652){
var statearr_28681_28698 = state_28668__$1;
(statearr_28681_28698[(1)] = (8));

} else {
var statearr_28682_28699 = state_28668__$1;
(statearr_28682_28699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28669 === (10))){
var inst_28660 = (state_28668[(2)]);
var state_28668__$1 = state_28668;
var statearr_28683_28700 = state_28668__$1;
(statearr_28683_28700[(2)] = inst_28660);

(statearr_28683_28700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28669 === (8))){
var inst_28645 = (state_28668[(7)]);
var tmp28680 = inst_28645;
var inst_28645__$1 = tmp28680;
var state_28668__$1 = (function (){var statearr_28684 = state_28668;
(statearr_28684[(7)] = inst_28645__$1);

return statearr_28684;
})();
var statearr_28685_28701 = state_28668__$1;
(statearr_28685_28701[(2)] = null);

(statearr_28685_28701[(1)] = (2));


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
});})(c__26955__auto___28691,out))
;
return ((function (switch__26865__auto__,c__26955__auto___28691,out){
return (function() {
var cljs$core$async$state_machine__26866__auto__ = null;
var cljs$core$async$state_machine__26866__auto____0 = (function (){
var statearr_28686 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28686[(0)] = cljs$core$async$state_machine__26866__auto__);

(statearr_28686[(1)] = (1));

return statearr_28686;
});
var cljs$core$async$state_machine__26866__auto____1 = (function (state_28668){
while(true){
var ret_value__26867__auto__ = (function (){try{while(true){
var result__26868__auto__ = switch__26865__auto__.call(null,state_28668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26868__auto__;
}
break;
}
}catch (e28687){if((e28687 instanceof Object)){
var ex__26869__auto__ = e28687;
var statearr_28688_28702 = state_28668;
(statearr_28688_28702[(5)] = ex__26869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28703 = state_28668;
state_28668 = G__28703;
continue;
} else {
return ret_value__26867__auto__;
}
break;
}
});
cljs$core$async$state_machine__26866__auto__ = function(state_28668){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26866__auto____1.call(this,state_28668);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26866__auto____0;
cljs$core$async$state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26866__auto____1;
return cljs$core$async$state_machine__26866__auto__;
})()
;})(switch__26865__auto__,c__26955__auto___28691,out))
})();
var state__26957__auto__ = (function (){var statearr_28689 = f__26956__auto__.call(null);
(statearr_28689[(6)] = c__26955__auto___28691);

return statearr_28689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26957__auto__);
});})(c__26955__auto___28691,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28705 = arguments.length;
switch (G__28705) {
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
var c__26955__auto___28771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26955__auto___28771,out){
return (function (){
var f__26956__auto__ = (function (){var switch__26865__auto__ = ((function (c__26955__auto___28771,out){
return (function (state_28743){
var state_val_28744 = (state_28743[(1)]);
if((state_val_28744 === (7))){
var inst_28739 = (state_28743[(2)]);
var state_28743__$1 = state_28743;
var statearr_28745_28772 = state_28743__$1;
(statearr_28745_28772[(2)] = inst_28739);

(statearr_28745_28772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (1))){
var inst_28706 = (new Array(n));
var inst_28707 = inst_28706;
var inst_28708 = (0);
var state_28743__$1 = (function (){var statearr_28746 = state_28743;
(statearr_28746[(7)] = inst_28707);

(statearr_28746[(8)] = inst_28708);

return statearr_28746;
})();
var statearr_28747_28773 = state_28743__$1;
(statearr_28747_28773[(2)] = null);

(statearr_28747_28773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (4))){
var inst_28711 = (state_28743[(9)]);
var inst_28711__$1 = (state_28743[(2)]);
var inst_28712 = (inst_28711__$1 == null);
var inst_28713 = cljs.core.not.call(null,inst_28712);
var state_28743__$1 = (function (){var statearr_28748 = state_28743;
(statearr_28748[(9)] = inst_28711__$1);

return statearr_28748;
})();
if(inst_28713){
var statearr_28749_28774 = state_28743__$1;
(statearr_28749_28774[(1)] = (5));

} else {
var statearr_28750_28775 = state_28743__$1;
(statearr_28750_28775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (15))){
var inst_28733 = (state_28743[(2)]);
var state_28743__$1 = state_28743;
var statearr_28751_28776 = state_28743__$1;
(statearr_28751_28776[(2)] = inst_28733);

(statearr_28751_28776[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (13))){
var state_28743__$1 = state_28743;
var statearr_28752_28777 = state_28743__$1;
(statearr_28752_28777[(2)] = null);

(statearr_28752_28777[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (6))){
var inst_28708 = (state_28743[(8)]);
var inst_28729 = (inst_28708 > (0));
var state_28743__$1 = state_28743;
if(cljs.core.truth_(inst_28729)){
var statearr_28753_28778 = state_28743__$1;
(statearr_28753_28778[(1)] = (12));

} else {
var statearr_28754_28779 = state_28743__$1;
(statearr_28754_28779[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (3))){
var inst_28741 = (state_28743[(2)]);
var state_28743__$1 = state_28743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28743__$1,inst_28741);
} else {
if((state_val_28744 === (12))){
var inst_28707 = (state_28743[(7)]);
var inst_28731 = cljs.core.vec.call(null,inst_28707);
var state_28743__$1 = state_28743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28743__$1,(15),out,inst_28731);
} else {
if((state_val_28744 === (2))){
var state_28743__$1 = state_28743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28743__$1,(4),ch);
} else {
if((state_val_28744 === (11))){
var inst_28723 = (state_28743[(2)]);
var inst_28724 = (new Array(n));
var inst_28707 = inst_28724;
var inst_28708 = (0);
var state_28743__$1 = (function (){var statearr_28755 = state_28743;
(statearr_28755[(7)] = inst_28707);

(statearr_28755[(10)] = inst_28723);

(statearr_28755[(8)] = inst_28708);

return statearr_28755;
})();
var statearr_28756_28780 = state_28743__$1;
(statearr_28756_28780[(2)] = null);

(statearr_28756_28780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (9))){
var inst_28707 = (state_28743[(7)]);
var inst_28721 = cljs.core.vec.call(null,inst_28707);
var state_28743__$1 = state_28743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28743__$1,(11),out,inst_28721);
} else {
if((state_val_28744 === (5))){
var inst_28707 = (state_28743[(7)]);
var inst_28711 = (state_28743[(9)]);
var inst_28708 = (state_28743[(8)]);
var inst_28716 = (state_28743[(11)]);
var inst_28715 = (inst_28707[inst_28708] = inst_28711);
var inst_28716__$1 = (inst_28708 + (1));
var inst_28717 = (inst_28716__$1 < n);
var state_28743__$1 = (function (){var statearr_28757 = state_28743;
(statearr_28757[(12)] = inst_28715);

(statearr_28757[(11)] = inst_28716__$1);

return statearr_28757;
})();
if(cljs.core.truth_(inst_28717)){
var statearr_28758_28781 = state_28743__$1;
(statearr_28758_28781[(1)] = (8));

} else {
var statearr_28759_28782 = state_28743__$1;
(statearr_28759_28782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (14))){
var inst_28736 = (state_28743[(2)]);
var inst_28737 = cljs.core.async.close_BANG_.call(null,out);
var state_28743__$1 = (function (){var statearr_28761 = state_28743;
(statearr_28761[(13)] = inst_28736);

return statearr_28761;
})();
var statearr_28762_28783 = state_28743__$1;
(statearr_28762_28783[(2)] = inst_28737);

(statearr_28762_28783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (10))){
var inst_28727 = (state_28743[(2)]);
var state_28743__$1 = state_28743;
var statearr_28763_28784 = state_28743__$1;
(statearr_28763_28784[(2)] = inst_28727);

(statearr_28763_28784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (8))){
var inst_28707 = (state_28743[(7)]);
var inst_28716 = (state_28743[(11)]);
var tmp28760 = inst_28707;
var inst_28707__$1 = tmp28760;
var inst_28708 = inst_28716;
var state_28743__$1 = (function (){var statearr_28764 = state_28743;
(statearr_28764[(7)] = inst_28707__$1);

(statearr_28764[(8)] = inst_28708);

return statearr_28764;
})();
var statearr_28765_28785 = state_28743__$1;
(statearr_28765_28785[(2)] = null);

(statearr_28765_28785[(1)] = (2));


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
});})(c__26955__auto___28771,out))
;
return ((function (switch__26865__auto__,c__26955__auto___28771,out){
return (function() {
var cljs$core$async$state_machine__26866__auto__ = null;
var cljs$core$async$state_machine__26866__auto____0 = (function (){
var statearr_28766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28766[(0)] = cljs$core$async$state_machine__26866__auto__);

(statearr_28766[(1)] = (1));

return statearr_28766;
});
var cljs$core$async$state_machine__26866__auto____1 = (function (state_28743){
while(true){
var ret_value__26867__auto__ = (function (){try{while(true){
var result__26868__auto__ = switch__26865__auto__.call(null,state_28743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26868__auto__;
}
break;
}
}catch (e28767){if((e28767 instanceof Object)){
var ex__26869__auto__ = e28767;
var statearr_28768_28786 = state_28743;
(statearr_28768_28786[(5)] = ex__26869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28787 = state_28743;
state_28743 = G__28787;
continue;
} else {
return ret_value__26867__auto__;
}
break;
}
});
cljs$core$async$state_machine__26866__auto__ = function(state_28743){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26866__auto____1.call(this,state_28743);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26866__auto____0;
cljs$core$async$state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26866__auto____1;
return cljs$core$async$state_machine__26866__auto__;
})()
;})(switch__26865__auto__,c__26955__auto___28771,out))
})();
var state__26957__auto__ = (function (){var statearr_28769 = f__26956__auto__.call(null);
(statearr_28769[(6)] = c__26955__auto___28771);

return statearr_28769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26957__auto__);
});})(c__26955__auto___28771,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28789 = arguments.length;
switch (G__28789) {
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
var c__26955__auto___28859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26955__auto___28859,out){
return (function (){
var f__26956__auto__ = (function (){var switch__26865__auto__ = ((function (c__26955__auto___28859,out){
return (function (state_28831){
var state_val_28832 = (state_28831[(1)]);
if((state_val_28832 === (7))){
var inst_28827 = (state_28831[(2)]);
var state_28831__$1 = state_28831;
var statearr_28833_28860 = state_28831__$1;
(statearr_28833_28860[(2)] = inst_28827);

(statearr_28833_28860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (1))){
var inst_28790 = [];
var inst_28791 = inst_28790;
var inst_28792 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28831__$1 = (function (){var statearr_28834 = state_28831;
(statearr_28834[(7)] = inst_28791);

(statearr_28834[(8)] = inst_28792);

return statearr_28834;
})();
var statearr_28835_28861 = state_28831__$1;
(statearr_28835_28861[(2)] = null);

(statearr_28835_28861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (4))){
var inst_28795 = (state_28831[(9)]);
var inst_28795__$1 = (state_28831[(2)]);
var inst_28796 = (inst_28795__$1 == null);
var inst_28797 = cljs.core.not.call(null,inst_28796);
var state_28831__$1 = (function (){var statearr_28836 = state_28831;
(statearr_28836[(9)] = inst_28795__$1);

return statearr_28836;
})();
if(inst_28797){
var statearr_28837_28862 = state_28831__$1;
(statearr_28837_28862[(1)] = (5));

} else {
var statearr_28838_28863 = state_28831__$1;
(statearr_28838_28863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (15))){
var inst_28821 = (state_28831[(2)]);
var state_28831__$1 = state_28831;
var statearr_28839_28864 = state_28831__$1;
(statearr_28839_28864[(2)] = inst_28821);

(statearr_28839_28864[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (13))){
var state_28831__$1 = state_28831;
var statearr_28840_28865 = state_28831__$1;
(statearr_28840_28865[(2)] = null);

(statearr_28840_28865[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (6))){
var inst_28791 = (state_28831[(7)]);
var inst_28816 = inst_28791.length;
var inst_28817 = (inst_28816 > (0));
var state_28831__$1 = state_28831;
if(cljs.core.truth_(inst_28817)){
var statearr_28841_28866 = state_28831__$1;
(statearr_28841_28866[(1)] = (12));

} else {
var statearr_28842_28867 = state_28831__$1;
(statearr_28842_28867[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (3))){
var inst_28829 = (state_28831[(2)]);
var state_28831__$1 = state_28831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28831__$1,inst_28829);
} else {
if((state_val_28832 === (12))){
var inst_28791 = (state_28831[(7)]);
var inst_28819 = cljs.core.vec.call(null,inst_28791);
var state_28831__$1 = state_28831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28831__$1,(15),out,inst_28819);
} else {
if((state_val_28832 === (2))){
var state_28831__$1 = state_28831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28831__$1,(4),ch);
} else {
if((state_val_28832 === (11))){
var inst_28799 = (state_28831[(10)]);
var inst_28795 = (state_28831[(9)]);
var inst_28809 = (state_28831[(2)]);
var inst_28810 = [];
var inst_28811 = inst_28810.push(inst_28795);
var inst_28791 = inst_28810;
var inst_28792 = inst_28799;
var state_28831__$1 = (function (){var statearr_28843 = state_28831;
(statearr_28843[(11)] = inst_28809);

(statearr_28843[(7)] = inst_28791);

(statearr_28843[(12)] = inst_28811);

(statearr_28843[(8)] = inst_28792);

return statearr_28843;
})();
var statearr_28844_28868 = state_28831__$1;
(statearr_28844_28868[(2)] = null);

(statearr_28844_28868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (9))){
var inst_28791 = (state_28831[(7)]);
var inst_28807 = cljs.core.vec.call(null,inst_28791);
var state_28831__$1 = state_28831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28831__$1,(11),out,inst_28807);
} else {
if((state_val_28832 === (5))){
var inst_28799 = (state_28831[(10)]);
var inst_28795 = (state_28831[(9)]);
var inst_28792 = (state_28831[(8)]);
var inst_28799__$1 = f.call(null,inst_28795);
var inst_28800 = cljs.core._EQ_.call(null,inst_28799__$1,inst_28792);
var inst_28801 = cljs.core.keyword_identical_QMARK_.call(null,inst_28792,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28802 = ((inst_28800) || (inst_28801));
var state_28831__$1 = (function (){var statearr_28845 = state_28831;
(statearr_28845[(10)] = inst_28799__$1);

return statearr_28845;
})();
if(cljs.core.truth_(inst_28802)){
var statearr_28846_28869 = state_28831__$1;
(statearr_28846_28869[(1)] = (8));

} else {
var statearr_28847_28870 = state_28831__$1;
(statearr_28847_28870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (14))){
var inst_28824 = (state_28831[(2)]);
var inst_28825 = cljs.core.async.close_BANG_.call(null,out);
var state_28831__$1 = (function (){var statearr_28849 = state_28831;
(statearr_28849[(13)] = inst_28824);

return statearr_28849;
})();
var statearr_28850_28871 = state_28831__$1;
(statearr_28850_28871[(2)] = inst_28825);

(statearr_28850_28871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (10))){
var inst_28814 = (state_28831[(2)]);
var state_28831__$1 = state_28831;
var statearr_28851_28872 = state_28831__$1;
(statearr_28851_28872[(2)] = inst_28814);

(statearr_28851_28872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (8))){
var inst_28799 = (state_28831[(10)]);
var inst_28791 = (state_28831[(7)]);
var inst_28795 = (state_28831[(9)]);
var inst_28804 = inst_28791.push(inst_28795);
var tmp28848 = inst_28791;
var inst_28791__$1 = tmp28848;
var inst_28792 = inst_28799;
var state_28831__$1 = (function (){var statearr_28852 = state_28831;
(statearr_28852[(14)] = inst_28804);

(statearr_28852[(7)] = inst_28791__$1);

(statearr_28852[(8)] = inst_28792);

return statearr_28852;
})();
var statearr_28853_28873 = state_28831__$1;
(statearr_28853_28873[(2)] = null);

(statearr_28853_28873[(1)] = (2));


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
});})(c__26955__auto___28859,out))
;
return ((function (switch__26865__auto__,c__26955__auto___28859,out){
return (function() {
var cljs$core$async$state_machine__26866__auto__ = null;
var cljs$core$async$state_machine__26866__auto____0 = (function (){
var statearr_28854 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28854[(0)] = cljs$core$async$state_machine__26866__auto__);

(statearr_28854[(1)] = (1));

return statearr_28854;
});
var cljs$core$async$state_machine__26866__auto____1 = (function (state_28831){
while(true){
var ret_value__26867__auto__ = (function (){try{while(true){
var result__26868__auto__ = switch__26865__auto__.call(null,state_28831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26868__auto__;
}
break;
}
}catch (e28855){if((e28855 instanceof Object)){
var ex__26869__auto__ = e28855;
var statearr_28856_28874 = state_28831;
(statearr_28856_28874[(5)] = ex__26869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28875 = state_28831;
state_28831 = G__28875;
continue;
} else {
return ret_value__26867__auto__;
}
break;
}
});
cljs$core$async$state_machine__26866__auto__ = function(state_28831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26866__auto____1.call(this,state_28831);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26866__auto____0;
cljs$core$async$state_machine__26866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26866__auto____1;
return cljs$core$async$state_machine__26866__auto__;
})()
;})(switch__26865__auto__,c__26955__auto___28859,out))
})();
var state__26957__auto__ = (function (){var statearr_28857 = f__26956__auto__.call(null);
(statearr_28857[(6)] = c__26955__auto___28859);

return statearr_28857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26957__auto__);
});})(c__26955__auto___28859,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1542636590881
