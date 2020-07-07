// Compiled by ClojureScript 1.10.764 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32098 = arguments.length;
switch (G__32098) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32099 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32099 = (function (f,blockable,meta32100){
this.f = f;
this.blockable = blockable;
this.meta32100 = meta32100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32101,meta32100__$1){
var self__ = this;
var _32101__$1 = this;
return (new cljs.core.async.t_cljs$core$async32099(self__.f,self__.blockable,meta32100__$1));
}));

(cljs.core.async.t_cljs$core$async32099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32101){
var self__ = this;
var _32101__$1 = this;
return self__.meta32100;
}));

(cljs.core.async.t_cljs$core$async32099.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32099.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32099.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32099.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32099.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32100","meta32100",-1391592515,null)], null);
}));

(cljs.core.async.t_cljs$core$async32099.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32099.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32099");

(cljs.core.async.t_cljs$core$async32099.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async32099");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32099.
 */
cljs.core.async.__GT_t_cljs$core$async32099 = (function cljs$core$async$__GT_t_cljs$core$async32099(f__$1,blockable__$1,meta32100){
return (new cljs.core.async.t_cljs$core$async32099(f__$1,blockable__$1,meta32100));
});

}

return (new cljs.core.async.t_cljs$core$async32099(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

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
if((!((buff == null)))){
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
var G__32105 = arguments.length;
switch (G__32105) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32108 = arguments.length;
switch (G__32108) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

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
var G__32111 = arguments.length;
switch (G__32111) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32113 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32113);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_32113);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

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
var G__32115 = arguments.length;
switch (G__32115) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___32117 = n;
var x_32118 = (0);
while(true){
if((x_32118 < n__4613__auto___32117)){
(a[x_32118] = (0));

var G__32119 = (x_32118 + (1));
x_32118 = G__32119;
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

var G__32120 = (i + (1));
i = G__32120;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32121 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32121 = (function (flag,meta32122){
this.flag = flag;
this.meta32122 = meta32122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32123,meta32122__$1){
var self__ = this;
var _32123__$1 = this;
return (new cljs.core.async.t_cljs$core$async32121(self__.flag,meta32122__$1));
}));

(cljs.core.async.t_cljs$core$async32121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32123){
var self__ = this;
var _32123__$1 = this;
return self__.meta32122;
}));

(cljs.core.async.t_cljs$core$async32121.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32121.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async32121.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32121.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32121.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32122","meta32122",-101084968,null)], null);
}));

(cljs.core.async.t_cljs$core$async32121.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32121.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32121");

(cljs.core.async.t_cljs$core$async32121.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async32121");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32121.
 */
cljs.core.async.__GT_t_cljs$core$async32121 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32121(flag__$1,meta32122){
return (new cljs.core.async.t_cljs$core$async32121(flag__$1,meta32122));
});

}

return (new cljs.core.async.t_cljs$core$async32121(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32124 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32124 = (function (flag,cb,meta32125){
this.flag = flag;
this.cb = cb;
this.meta32125 = meta32125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32126,meta32125__$1){
var self__ = this;
var _32126__$1 = this;
return (new cljs.core.async.t_cljs$core$async32124(self__.flag,self__.cb,meta32125__$1));
}));

(cljs.core.async.t_cljs$core$async32124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32126){
var self__ = this;
var _32126__$1 = this;
return self__.meta32125;
}));

(cljs.core.async.t_cljs$core$async32124.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32124.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async32124.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32124.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32125","meta32125",1628372137,null)], null);
}));

(cljs.core.async.t_cljs$core$async32124.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32124");

(cljs.core.async.t_cljs$core$async32124.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async32124");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32124.
 */
cljs.core.async.__GT_t_cljs$core$async32124 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32124(flag__$1,cb__$1,meta32125){
return (new cljs.core.async.t_cljs$core$async32124(flag__$1,cb__$1,meta32125));
});

}

return (new cljs.core.async.t_cljs$core$async32124(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32127_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32127_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32128_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32128_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32129 = (i + (1));
i = G__32129;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
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
var args__4742__auto__ = [];
var len__4736__auto___32135 = arguments.length;
var i__4737__auto___32136 = (0);
while(true){
if((i__4737__auto___32136 < len__4736__auto___32135)){
args__4742__auto__.push((arguments[i__4737__auto___32136]));

var G__32137 = (i__4737__auto___32136 + (1));
i__4737__auto___32136 = G__32137;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32132){
var map__32133 = p__32132;
var map__32133__$1 = (((((!((map__32133 == null))))?(((((map__32133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32133):map__32133);
var opts = map__32133__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32130){
var G__32131 = cljs.core.first.call(null,seq32130);
var seq32130__$1 = cljs.core.next.call(null,seq32130);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32131,seq32130__$1);
}));

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
var G__32139 = arguments.length;
switch (G__32139) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32038__auto___32185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32039__auto__ = (function (){var switch__31943__auto__ = (function (state_32163){
var state_val_32164 = (state_32163[(1)]);
if((state_val_32164 === (7))){
var inst_32159 = (state_32163[(2)]);
var state_32163__$1 = state_32163;
var statearr_32165_32186 = state_32163__$1;
(statearr_32165_32186[(2)] = inst_32159);

(statearr_32165_32186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32164 === (1))){
var state_32163__$1 = state_32163;
var statearr_32166_32187 = state_32163__$1;
(statearr_32166_32187[(2)] = null);

(statearr_32166_32187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32164 === (4))){
var inst_32142 = (state_32163[(7)]);
var inst_32142__$1 = (state_32163[(2)]);
var inst_32143 = (inst_32142__$1 == null);
var state_32163__$1 = (function (){var statearr_32167 = state_32163;
(statearr_32167[(7)] = inst_32142__$1);

return statearr_32167;
})();
if(cljs.core.truth_(inst_32143)){
var statearr_32168_32188 = state_32163__$1;
(statearr_32168_32188[(1)] = (5));

} else {
var statearr_32169_32189 = state_32163__$1;
(statearr_32169_32189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32164 === (13))){
var state_32163__$1 = state_32163;
var statearr_32170_32190 = state_32163__$1;
(statearr_32170_32190[(2)] = null);

(statearr_32170_32190[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32164 === (6))){
var inst_32142 = (state_32163[(7)]);
var state_32163__$1 = state_32163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32163__$1,(11),to,inst_32142);
} else {
if((state_val_32164 === (3))){
var inst_32161 = (state_32163[(2)]);
var state_32163__$1 = state_32163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32163__$1,inst_32161);
} else {
if((state_val_32164 === (12))){
var state_32163__$1 = state_32163;
var statearr_32171_32191 = state_32163__$1;
(statearr_32171_32191[(2)] = null);

(statearr_32171_32191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32164 === (2))){
var state_32163__$1 = state_32163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32163__$1,(4),from);
} else {
if((state_val_32164 === (11))){
var inst_32152 = (state_32163[(2)]);
var state_32163__$1 = state_32163;
if(cljs.core.truth_(inst_32152)){
var statearr_32172_32192 = state_32163__$1;
(statearr_32172_32192[(1)] = (12));

} else {
var statearr_32173_32193 = state_32163__$1;
(statearr_32173_32193[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32164 === (9))){
var state_32163__$1 = state_32163;
var statearr_32174_32194 = state_32163__$1;
(statearr_32174_32194[(2)] = null);

(statearr_32174_32194[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32164 === (5))){
var state_32163__$1 = state_32163;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32175_32195 = state_32163__$1;
(statearr_32175_32195[(1)] = (8));

} else {
var statearr_32176_32196 = state_32163__$1;
(statearr_32176_32196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32164 === (14))){
var inst_32157 = (state_32163[(2)]);
var state_32163__$1 = state_32163;
var statearr_32177_32197 = state_32163__$1;
(statearr_32177_32197[(2)] = inst_32157);

(statearr_32177_32197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32164 === (10))){
var inst_32149 = (state_32163[(2)]);
var state_32163__$1 = state_32163;
var statearr_32178_32198 = state_32163__$1;
(statearr_32178_32198[(2)] = inst_32149);

(statearr_32178_32198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32164 === (8))){
var inst_32146 = cljs.core.async.close_BANG_.call(null,to);
var state_32163__$1 = state_32163;
var statearr_32179_32199 = state_32163__$1;
(statearr_32179_32199[(2)] = inst_32146);

(statearr_32179_32199[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_32180 = [null,null,null,null,null,null,null,null];
(statearr_32180[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_32180[(1)] = (1));

return statearr_32180;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_32163){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_32163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e32181){if((e32181 instanceof Object)){
var ex__31947__auto__ = e32181;
var statearr_32182_32200 = state_32163;
(statearr_32182_32200[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32201 = state_32163;
state_32163 = G__32201;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_32163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_32163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
})();
var state__32040__auto__ = (function (){var statearr_32183 = f__32039__auto__.call(null);
(statearr_32183[(6)] = c__32038__auto___32185);

return statearr_32183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32040__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__32202){
var vec__32203 = p__32202;
var v = cljs.core.nth.call(null,vec__32203,(0),null);
var p = cljs.core.nth.call(null,vec__32203,(1),null);
var job = vec__32203;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32038__auto___32374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32039__auto__ = (function (){var switch__31943__auto__ = (function (state_32210){
var state_val_32211 = (state_32210[(1)]);
if((state_val_32211 === (1))){
var state_32210__$1 = state_32210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32210__$1,(2),res,v);
} else {
if((state_val_32211 === (2))){
var inst_32207 = (state_32210[(2)]);
var inst_32208 = cljs.core.async.close_BANG_.call(null,res);
var state_32210__$1 = (function (){var statearr_32212 = state_32210;
(statearr_32212[(7)] = inst_32207);

return statearr_32212;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32210__$1,inst_32208);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0 = (function (){
var statearr_32213 = [null,null,null,null,null,null,null,null];
(statearr_32213[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__);

(statearr_32213[(1)] = (1));

return statearr_32213;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1 = (function (state_32210){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_32210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e32214){if((e32214 instanceof Object)){
var ex__31947__auto__ = e32214;
var statearr_32215_32375 = state_32210;
(statearr_32215_32375[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32376 = state_32210;
state_32210 = G__32376;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = function(state_32210){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1.call(this,state_32210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__;
})()
})();
var state__32040__auto__ = (function (){var statearr_32216 = f__32039__auto__.call(null);
(statearr_32216[(6)] = c__32038__auto___32374);

return statearr_32216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32040__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__32217){
var vec__32218 = p__32217;
var v = cljs.core.nth.call(null,vec__32218,(0),null);
var p = cljs.core.nth.call(null,vec__32218,(1),null);
var job = vec__32218;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___32377 = n;
var __32378 = (0);
while(true){
if((__32378 < n__4613__auto___32377)){
var G__32221_32379 = type;
var G__32221_32380__$1 = (((G__32221_32379 instanceof cljs.core.Keyword))?G__32221_32379.fqn:null);
switch (G__32221_32380__$1) {
case "compute":
var c__32038__auto___32382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32378,c__32038__auto___32382,G__32221_32379,G__32221_32380__$1,n__4613__auto___32377,jobs,results,process,async){
return (function (){
var f__32039__auto__ = (function (){var switch__31943__auto__ = ((function (__32378,c__32038__auto___32382,G__32221_32379,G__32221_32380__$1,n__4613__auto___32377,jobs,results,process,async){
return (function (state_32234){
var state_val_32235 = (state_32234[(1)]);
if((state_val_32235 === (1))){
var state_32234__$1 = state_32234;
var statearr_32236_32383 = state_32234__$1;
(statearr_32236_32383[(2)] = null);

(statearr_32236_32383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (2))){
var state_32234__$1 = state_32234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32234__$1,(4),jobs);
} else {
if((state_val_32235 === (3))){
var inst_32232 = (state_32234[(2)]);
var state_32234__$1 = state_32234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32234__$1,inst_32232);
} else {
if((state_val_32235 === (4))){
var inst_32224 = (state_32234[(2)]);
var inst_32225 = process.call(null,inst_32224);
var state_32234__$1 = state_32234;
if(cljs.core.truth_(inst_32225)){
var statearr_32237_32384 = state_32234__$1;
(statearr_32237_32384[(1)] = (5));

} else {
var statearr_32238_32385 = state_32234__$1;
(statearr_32238_32385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (5))){
var state_32234__$1 = state_32234;
var statearr_32239_32386 = state_32234__$1;
(statearr_32239_32386[(2)] = null);

(statearr_32239_32386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (6))){
var state_32234__$1 = state_32234;
var statearr_32240_32387 = state_32234__$1;
(statearr_32240_32387[(2)] = null);

(statearr_32240_32387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (7))){
var inst_32230 = (state_32234[(2)]);
var state_32234__$1 = state_32234;
var statearr_32241_32388 = state_32234__$1;
(statearr_32241_32388[(2)] = inst_32230);

(statearr_32241_32388[(1)] = (3));


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
});})(__32378,c__32038__auto___32382,G__32221_32379,G__32221_32380__$1,n__4613__auto___32377,jobs,results,process,async))
;
return ((function (__32378,switch__31943__auto__,c__32038__auto___32382,G__32221_32379,G__32221_32380__$1,n__4613__auto___32377,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0 = (function (){
var statearr_32242 = [null,null,null,null,null,null,null];
(statearr_32242[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__);

(statearr_32242[(1)] = (1));

return statearr_32242;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1 = (function (state_32234){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_32234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e32243){if((e32243 instanceof Object)){
var ex__31947__auto__ = e32243;
var statearr_32244_32389 = state_32234;
(statearr_32244_32389[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32390 = state_32234;
state_32234 = G__32390;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = function(state_32234){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1.call(this,state_32234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__;
})()
;})(__32378,switch__31943__auto__,c__32038__auto___32382,G__32221_32379,G__32221_32380__$1,n__4613__auto___32377,jobs,results,process,async))
})();
var state__32040__auto__ = (function (){var statearr_32245 = f__32039__auto__.call(null);
(statearr_32245[(6)] = c__32038__auto___32382);

return statearr_32245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32040__auto__);
});})(__32378,c__32038__auto___32382,G__32221_32379,G__32221_32380__$1,n__4613__auto___32377,jobs,results,process,async))
);


break;
case "async":
var c__32038__auto___32391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32378,c__32038__auto___32391,G__32221_32379,G__32221_32380__$1,n__4613__auto___32377,jobs,results,process,async){
return (function (){
var f__32039__auto__ = (function (){var switch__31943__auto__ = ((function (__32378,c__32038__auto___32391,G__32221_32379,G__32221_32380__$1,n__4613__auto___32377,jobs,results,process,async){
return (function (state_32258){
var state_val_32259 = (state_32258[(1)]);
if((state_val_32259 === (1))){
var state_32258__$1 = state_32258;
var statearr_32260_32392 = state_32258__$1;
(statearr_32260_32392[(2)] = null);

(statearr_32260_32392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (2))){
var state_32258__$1 = state_32258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32258__$1,(4),jobs);
} else {
if((state_val_32259 === (3))){
var inst_32256 = (state_32258[(2)]);
var state_32258__$1 = state_32258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32258__$1,inst_32256);
} else {
if((state_val_32259 === (4))){
var inst_32248 = (state_32258[(2)]);
var inst_32249 = async.call(null,inst_32248);
var state_32258__$1 = state_32258;
if(cljs.core.truth_(inst_32249)){
var statearr_32261_32393 = state_32258__$1;
(statearr_32261_32393[(1)] = (5));

} else {
var statearr_32262_32394 = state_32258__$1;
(statearr_32262_32394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (5))){
var state_32258__$1 = state_32258;
var statearr_32263_32395 = state_32258__$1;
(statearr_32263_32395[(2)] = null);

(statearr_32263_32395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (6))){
var state_32258__$1 = state_32258;
var statearr_32264_32396 = state_32258__$1;
(statearr_32264_32396[(2)] = null);

(statearr_32264_32396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (7))){
var inst_32254 = (state_32258[(2)]);
var state_32258__$1 = state_32258;
var statearr_32265_32397 = state_32258__$1;
(statearr_32265_32397[(2)] = inst_32254);

(statearr_32265_32397[(1)] = (3));


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
});})(__32378,c__32038__auto___32391,G__32221_32379,G__32221_32380__$1,n__4613__auto___32377,jobs,results,process,async))
;
return ((function (__32378,switch__31943__auto__,c__32038__auto___32391,G__32221_32379,G__32221_32380__$1,n__4613__auto___32377,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0 = (function (){
var statearr_32266 = [null,null,null,null,null,null,null];
(statearr_32266[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__);

(statearr_32266[(1)] = (1));

return statearr_32266;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1 = (function (state_32258){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_32258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e32267){if((e32267 instanceof Object)){
var ex__31947__auto__ = e32267;
var statearr_32268_32398 = state_32258;
(statearr_32268_32398[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32399 = state_32258;
state_32258 = G__32399;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = function(state_32258){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1.call(this,state_32258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__;
})()
;})(__32378,switch__31943__auto__,c__32038__auto___32391,G__32221_32379,G__32221_32380__$1,n__4613__auto___32377,jobs,results,process,async))
})();
var state__32040__auto__ = (function (){var statearr_32269 = f__32039__auto__.call(null);
(statearr_32269[(6)] = c__32038__auto___32391);

return statearr_32269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32040__auto__);
});})(__32378,c__32038__auto___32391,G__32221_32379,G__32221_32380__$1,n__4613__auto___32377,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32221_32380__$1)].join('')));

}

var G__32400 = (__32378 + (1));
__32378 = G__32400;
continue;
} else {
}
break;
}

var c__32038__auto___32401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32039__auto__ = (function (){var switch__31943__auto__ = (function (state_32291){
var state_val_32292 = (state_32291[(1)]);
if((state_val_32292 === (7))){
var inst_32287 = (state_32291[(2)]);
var state_32291__$1 = state_32291;
var statearr_32293_32402 = state_32291__$1;
(statearr_32293_32402[(2)] = inst_32287);

(statearr_32293_32402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32292 === (1))){
var state_32291__$1 = state_32291;
var statearr_32294_32403 = state_32291__$1;
(statearr_32294_32403[(2)] = null);

(statearr_32294_32403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32292 === (4))){
var inst_32272 = (state_32291[(7)]);
var inst_32272__$1 = (state_32291[(2)]);
var inst_32273 = (inst_32272__$1 == null);
var state_32291__$1 = (function (){var statearr_32295 = state_32291;
(statearr_32295[(7)] = inst_32272__$1);

return statearr_32295;
})();
if(cljs.core.truth_(inst_32273)){
var statearr_32296_32404 = state_32291__$1;
(statearr_32296_32404[(1)] = (5));

} else {
var statearr_32297_32405 = state_32291__$1;
(statearr_32297_32405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32292 === (6))){
var inst_32277 = (state_32291[(8)]);
var inst_32272 = (state_32291[(7)]);
var inst_32277__$1 = cljs.core.async.chan.call(null,(1));
var inst_32278 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32279 = [inst_32272,inst_32277__$1];
var inst_32280 = (new cljs.core.PersistentVector(null,2,(5),inst_32278,inst_32279,null));
var state_32291__$1 = (function (){var statearr_32298 = state_32291;
(statearr_32298[(8)] = inst_32277__$1);

return statearr_32298;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32291__$1,(8),jobs,inst_32280);
} else {
if((state_val_32292 === (3))){
var inst_32289 = (state_32291[(2)]);
var state_32291__$1 = state_32291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32291__$1,inst_32289);
} else {
if((state_val_32292 === (2))){
var state_32291__$1 = state_32291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32291__$1,(4),from);
} else {
if((state_val_32292 === (9))){
var inst_32284 = (state_32291[(2)]);
var state_32291__$1 = (function (){var statearr_32299 = state_32291;
(statearr_32299[(9)] = inst_32284);

return statearr_32299;
})();
var statearr_32300_32406 = state_32291__$1;
(statearr_32300_32406[(2)] = null);

(statearr_32300_32406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32292 === (5))){
var inst_32275 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32291__$1 = state_32291;
var statearr_32301_32407 = state_32291__$1;
(statearr_32301_32407[(2)] = inst_32275);

(statearr_32301_32407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32292 === (8))){
var inst_32277 = (state_32291[(8)]);
var inst_32282 = (state_32291[(2)]);
var state_32291__$1 = (function (){var statearr_32302 = state_32291;
(statearr_32302[(10)] = inst_32282);

return statearr_32302;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32291__$1,(9),results,inst_32277);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0 = (function (){
var statearr_32303 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32303[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__);

(statearr_32303[(1)] = (1));

return statearr_32303;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1 = (function (state_32291){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_32291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e32304){if((e32304 instanceof Object)){
var ex__31947__auto__ = e32304;
var statearr_32305_32408 = state_32291;
(statearr_32305_32408[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32409 = state_32291;
state_32291 = G__32409;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = function(state_32291){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1.call(this,state_32291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__;
})()
})();
var state__32040__auto__ = (function (){var statearr_32306 = f__32039__auto__.call(null);
(statearr_32306[(6)] = c__32038__auto___32401);

return statearr_32306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32040__auto__);
}));


var c__32038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32039__auto__ = (function (){var switch__31943__auto__ = (function (state_32344){
var state_val_32345 = (state_32344[(1)]);
if((state_val_32345 === (7))){
var inst_32340 = (state_32344[(2)]);
var state_32344__$1 = state_32344;
var statearr_32346_32410 = state_32344__$1;
(statearr_32346_32410[(2)] = inst_32340);

(statearr_32346_32410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (20))){
var state_32344__$1 = state_32344;
var statearr_32347_32411 = state_32344__$1;
(statearr_32347_32411[(2)] = null);

(statearr_32347_32411[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (1))){
var state_32344__$1 = state_32344;
var statearr_32348_32412 = state_32344__$1;
(statearr_32348_32412[(2)] = null);

(statearr_32348_32412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (4))){
var inst_32309 = (state_32344[(7)]);
var inst_32309__$1 = (state_32344[(2)]);
var inst_32310 = (inst_32309__$1 == null);
var state_32344__$1 = (function (){var statearr_32349 = state_32344;
(statearr_32349[(7)] = inst_32309__$1);

return statearr_32349;
})();
if(cljs.core.truth_(inst_32310)){
var statearr_32350_32413 = state_32344__$1;
(statearr_32350_32413[(1)] = (5));

} else {
var statearr_32351_32414 = state_32344__$1;
(statearr_32351_32414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (15))){
var inst_32322 = (state_32344[(8)]);
var state_32344__$1 = state_32344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32344__$1,(18),to,inst_32322);
} else {
if((state_val_32345 === (21))){
var inst_32335 = (state_32344[(2)]);
var state_32344__$1 = state_32344;
var statearr_32352_32415 = state_32344__$1;
(statearr_32352_32415[(2)] = inst_32335);

(statearr_32352_32415[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (13))){
var inst_32337 = (state_32344[(2)]);
var state_32344__$1 = (function (){var statearr_32353 = state_32344;
(statearr_32353[(9)] = inst_32337);

return statearr_32353;
})();
var statearr_32354_32416 = state_32344__$1;
(statearr_32354_32416[(2)] = null);

(statearr_32354_32416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (6))){
var inst_32309 = (state_32344[(7)]);
var state_32344__$1 = state_32344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32344__$1,(11),inst_32309);
} else {
if((state_val_32345 === (17))){
var inst_32330 = (state_32344[(2)]);
var state_32344__$1 = state_32344;
if(cljs.core.truth_(inst_32330)){
var statearr_32355_32417 = state_32344__$1;
(statearr_32355_32417[(1)] = (19));

} else {
var statearr_32356_32418 = state_32344__$1;
(statearr_32356_32418[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (3))){
var inst_32342 = (state_32344[(2)]);
var state_32344__$1 = state_32344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32344__$1,inst_32342);
} else {
if((state_val_32345 === (12))){
var inst_32319 = (state_32344[(10)]);
var state_32344__$1 = state_32344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32344__$1,(14),inst_32319);
} else {
if((state_val_32345 === (2))){
var state_32344__$1 = state_32344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32344__$1,(4),results);
} else {
if((state_val_32345 === (19))){
var state_32344__$1 = state_32344;
var statearr_32357_32419 = state_32344__$1;
(statearr_32357_32419[(2)] = null);

(statearr_32357_32419[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (11))){
var inst_32319 = (state_32344[(2)]);
var state_32344__$1 = (function (){var statearr_32358 = state_32344;
(statearr_32358[(10)] = inst_32319);

return statearr_32358;
})();
var statearr_32359_32420 = state_32344__$1;
(statearr_32359_32420[(2)] = null);

(statearr_32359_32420[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (9))){
var state_32344__$1 = state_32344;
var statearr_32360_32421 = state_32344__$1;
(statearr_32360_32421[(2)] = null);

(statearr_32360_32421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (5))){
var state_32344__$1 = state_32344;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32361_32422 = state_32344__$1;
(statearr_32361_32422[(1)] = (8));

} else {
var statearr_32362_32423 = state_32344__$1;
(statearr_32362_32423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (14))){
var inst_32322 = (state_32344[(8)]);
var inst_32322__$1 = (state_32344[(2)]);
var inst_32323 = (inst_32322__$1 == null);
var inst_32324 = cljs.core.not.call(null,inst_32323);
var state_32344__$1 = (function (){var statearr_32363 = state_32344;
(statearr_32363[(8)] = inst_32322__$1);

return statearr_32363;
})();
if(inst_32324){
var statearr_32364_32424 = state_32344__$1;
(statearr_32364_32424[(1)] = (15));

} else {
var statearr_32365_32425 = state_32344__$1;
(statearr_32365_32425[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (16))){
var state_32344__$1 = state_32344;
var statearr_32366_32426 = state_32344__$1;
(statearr_32366_32426[(2)] = false);

(statearr_32366_32426[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (10))){
var inst_32316 = (state_32344[(2)]);
var state_32344__$1 = state_32344;
var statearr_32367_32427 = state_32344__$1;
(statearr_32367_32427[(2)] = inst_32316);

(statearr_32367_32427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (18))){
var inst_32327 = (state_32344[(2)]);
var state_32344__$1 = state_32344;
var statearr_32368_32428 = state_32344__$1;
(statearr_32368_32428[(2)] = inst_32327);

(statearr_32368_32428[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (8))){
var inst_32313 = cljs.core.async.close_BANG_.call(null,to);
var state_32344__$1 = state_32344;
var statearr_32369_32429 = state_32344__$1;
(statearr_32369_32429[(2)] = inst_32313);

(statearr_32369_32429[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0 = (function (){
var statearr_32370 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32370[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__);

(statearr_32370[(1)] = (1));

return statearr_32370;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1 = (function (state_32344){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_32344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e32371){if((e32371 instanceof Object)){
var ex__31947__auto__ = e32371;
var statearr_32372_32430 = state_32344;
(statearr_32372_32430[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32431 = state_32344;
state_32344 = G__32431;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = function(state_32344){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1.call(this,state_32344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__;
})()
})();
var state__32040__auto__ = (function (){var statearr_32373 = f__32039__auto__.call(null);
(statearr_32373[(6)] = c__32038__auto__);

return statearr_32373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32040__auto__);
}));

return c__32038__auto__;
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
var G__32433 = arguments.length;
switch (G__32433) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__32436 = arguments.length;
switch (G__32436) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__32439 = arguments.length;
switch (G__32439) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__32038__auto___32488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32039__auto__ = (function (){var switch__31943__auto__ = (function (state_32465){
var state_val_32466 = (state_32465[(1)]);
if((state_val_32466 === (7))){
var inst_32461 = (state_32465[(2)]);
var state_32465__$1 = state_32465;
var statearr_32467_32489 = state_32465__$1;
(statearr_32467_32489[(2)] = inst_32461);

(statearr_32467_32489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (1))){
var state_32465__$1 = state_32465;
var statearr_32468_32490 = state_32465__$1;
(statearr_32468_32490[(2)] = null);

(statearr_32468_32490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (4))){
var inst_32442 = (state_32465[(7)]);
var inst_32442__$1 = (state_32465[(2)]);
var inst_32443 = (inst_32442__$1 == null);
var state_32465__$1 = (function (){var statearr_32469 = state_32465;
(statearr_32469[(7)] = inst_32442__$1);

return statearr_32469;
})();
if(cljs.core.truth_(inst_32443)){
var statearr_32470_32491 = state_32465__$1;
(statearr_32470_32491[(1)] = (5));

} else {
var statearr_32471_32492 = state_32465__$1;
(statearr_32471_32492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (13))){
var state_32465__$1 = state_32465;
var statearr_32472_32493 = state_32465__$1;
(statearr_32472_32493[(2)] = null);

(statearr_32472_32493[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (6))){
var inst_32442 = (state_32465[(7)]);
var inst_32448 = p.call(null,inst_32442);
var state_32465__$1 = state_32465;
if(cljs.core.truth_(inst_32448)){
var statearr_32473_32494 = state_32465__$1;
(statearr_32473_32494[(1)] = (9));

} else {
var statearr_32474_32495 = state_32465__$1;
(statearr_32474_32495[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (3))){
var inst_32463 = (state_32465[(2)]);
var state_32465__$1 = state_32465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32465__$1,inst_32463);
} else {
if((state_val_32466 === (12))){
var state_32465__$1 = state_32465;
var statearr_32475_32496 = state_32465__$1;
(statearr_32475_32496[(2)] = null);

(statearr_32475_32496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (2))){
var state_32465__$1 = state_32465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32465__$1,(4),ch);
} else {
if((state_val_32466 === (11))){
var inst_32442 = (state_32465[(7)]);
var inst_32452 = (state_32465[(2)]);
var state_32465__$1 = state_32465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32465__$1,(8),inst_32452,inst_32442);
} else {
if((state_val_32466 === (9))){
var state_32465__$1 = state_32465;
var statearr_32476_32497 = state_32465__$1;
(statearr_32476_32497[(2)] = tc);

(statearr_32476_32497[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (5))){
var inst_32445 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32446 = cljs.core.async.close_BANG_.call(null,fc);
var state_32465__$1 = (function (){var statearr_32477 = state_32465;
(statearr_32477[(8)] = inst_32445);

return statearr_32477;
})();
var statearr_32478_32498 = state_32465__$1;
(statearr_32478_32498[(2)] = inst_32446);

(statearr_32478_32498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (14))){
var inst_32459 = (state_32465[(2)]);
var state_32465__$1 = state_32465;
var statearr_32479_32499 = state_32465__$1;
(statearr_32479_32499[(2)] = inst_32459);

(statearr_32479_32499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (10))){
var state_32465__$1 = state_32465;
var statearr_32480_32500 = state_32465__$1;
(statearr_32480_32500[(2)] = fc);

(statearr_32480_32500[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (8))){
var inst_32454 = (state_32465[(2)]);
var state_32465__$1 = state_32465;
if(cljs.core.truth_(inst_32454)){
var statearr_32481_32501 = state_32465__$1;
(statearr_32481_32501[(1)] = (12));

} else {
var statearr_32482_32502 = state_32465__$1;
(statearr_32482_32502[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_32483 = [null,null,null,null,null,null,null,null,null];
(statearr_32483[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_32483[(1)] = (1));

return statearr_32483;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_32465){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_32465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e32484){if((e32484 instanceof Object)){
var ex__31947__auto__ = e32484;
var statearr_32485_32503 = state_32465;
(statearr_32485_32503[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32504 = state_32465;
state_32465 = G__32504;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_32465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_32465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
})();
var state__32040__auto__ = (function (){var statearr_32486 = f__32039__auto__.call(null);
(statearr_32486[(6)] = c__32038__auto___32488);

return statearr_32486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32040__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32039__auto__ = (function (){var switch__31943__auto__ = (function (state_32525){
var state_val_32526 = (state_32525[(1)]);
if((state_val_32526 === (7))){
var inst_32521 = (state_32525[(2)]);
var state_32525__$1 = state_32525;
var statearr_32527_32545 = state_32525__$1;
(statearr_32527_32545[(2)] = inst_32521);

(statearr_32527_32545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (1))){
var inst_32505 = init;
var state_32525__$1 = (function (){var statearr_32528 = state_32525;
(statearr_32528[(7)] = inst_32505);

return statearr_32528;
})();
var statearr_32529_32546 = state_32525__$1;
(statearr_32529_32546[(2)] = null);

(statearr_32529_32546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (4))){
var inst_32508 = (state_32525[(8)]);
var inst_32508__$1 = (state_32525[(2)]);
var inst_32509 = (inst_32508__$1 == null);
var state_32525__$1 = (function (){var statearr_32530 = state_32525;
(statearr_32530[(8)] = inst_32508__$1);

return statearr_32530;
})();
if(cljs.core.truth_(inst_32509)){
var statearr_32531_32547 = state_32525__$1;
(statearr_32531_32547[(1)] = (5));

} else {
var statearr_32532_32548 = state_32525__$1;
(statearr_32532_32548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (6))){
var inst_32508 = (state_32525[(8)]);
var inst_32512 = (state_32525[(9)]);
var inst_32505 = (state_32525[(7)]);
var inst_32512__$1 = f.call(null,inst_32505,inst_32508);
var inst_32513 = cljs.core.reduced_QMARK_.call(null,inst_32512__$1);
var state_32525__$1 = (function (){var statearr_32533 = state_32525;
(statearr_32533[(9)] = inst_32512__$1);

return statearr_32533;
})();
if(inst_32513){
var statearr_32534_32549 = state_32525__$1;
(statearr_32534_32549[(1)] = (8));

} else {
var statearr_32535_32550 = state_32525__$1;
(statearr_32535_32550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (3))){
var inst_32523 = (state_32525[(2)]);
var state_32525__$1 = state_32525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32525__$1,inst_32523);
} else {
if((state_val_32526 === (2))){
var state_32525__$1 = state_32525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32525__$1,(4),ch);
} else {
if((state_val_32526 === (9))){
var inst_32512 = (state_32525[(9)]);
var inst_32505 = inst_32512;
var state_32525__$1 = (function (){var statearr_32536 = state_32525;
(statearr_32536[(7)] = inst_32505);

return statearr_32536;
})();
var statearr_32537_32551 = state_32525__$1;
(statearr_32537_32551[(2)] = null);

(statearr_32537_32551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (5))){
var inst_32505 = (state_32525[(7)]);
var state_32525__$1 = state_32525;
var statearr_32538_32552 = state_32525__$1;
(statearr_32538_32552[(2)] = inst_32505);

(statearr_32538_32552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (10))){
var inst_32519 = (state_32525[(2)]);
var state_32525__$1 = state_32525;
var statearr_32539_32553 = state_32525__$1;
(statearr_32539_32553[(2)] = inst_32519);

(statearr_32539_32553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (8))){
var inst_32512 = (state_32525[(9)]);
var inst_32515 = cljs.core.deref.call(null,inst_32512);
var state_32525__$1 = state_32525;
var statearr_32540_32554 = state_32525__$1;
(statearr_32540_32554[(2)] = inst_32515);

(statearr_32540_32554[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__31944__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31944__auto____0 = (function (){
var statearr_32541 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32541[(0)] = cljs$core$async$reduce_$_state_machine__31944__auto__);

(statearr_32541[(1)] = (1));

return statearr_32541;
});
var cljs$core$async$reduce_$_state_machine__31944__auto____1 = (function (state_32525){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_32525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e32542){if((e32542 instanceof Object)){
var ex__31947__auto__ = e32542;
var statearr_32543_32555 = state_32525;
(statearr_32543_32555[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32556 = state_32525;
state_32525 = G__32556;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31944__auto__ = function(state_32525){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31944__auto____1.call(this,state_32525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31944__auto____0;
cljs$core$async$reduce_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31944__auto____1;
return cljs$core$async$reduce_$_state_machine__31944__auto__;
})()
})();
var state__32040__auto__ = (function (){var statearr_32544 = f__32039__auto__.call(null);
(statearr_32544[(6)] = c__32038__auto__);

return statearr_32544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32040__auto__);
}));

return c__32038__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32039__auto__ = (function (){var switch__31943__auto__ = (function (state_32562){
var state_val_32563 = (state_32562[(1)]);
if((state_val_32563 === (1))){
var inst_32557 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_32562__$1 = state_32562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32562__$1,(2),inst_32557);
} else {
if((state_val_32563 === (2))){
var inst_32559 = (state_32562[(2)]);
var inst_32560 = f__$1.call(null,inst_32559);
var state_32562__$1 = state_32562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32562__$1,inst_32560);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__31944__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31944__auto____0 = (function (){
var statearr_32564 = [null,null,null,null,null,null,null];
(statearr_32564[(0)] = cljs$core$async$transduce_$_state_machine__31944__auto__);

(statearr_32564[(1)] = (1));

return statearr_32564;
});
var cljs$core$async$transduce_$_state_machine__31944__auto____1 = (function (state_32562){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_32562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e32565){if((e32565 instanceof Object)){
var ex__31947__auto__ = e32565;
var statearr_32566_32568 = state_32562;
(statearr_32566_32568[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32569 = state_32562;
state_32562 = G__32569;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31944__auto__ = function(state_32562){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31944__auto____1.call(this,state_32562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31944__auto____0;
cljs$core$async$transduce_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31944__auto____1;
return cljs$core$async$transduce_$_state_machine__31944__auto__;
})()
})();
var state__32040__auto__ = (function (){var statearr_32567 = f__32039__auto__.call(null);
(statearr_32567[(6)] = c__32038__auto__);

return statearr_32567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32040__auto__);
}));

return c__32038__auto__;
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
var G__32571 = arguments.length;
switch (G__32571) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32039__auto__ = (function (){var switch__31943__auto__ = (function (state_32596){
var state_val_32597 = (state_32596[(1)]);
if((state_val_32597 === (7))){
var inst_32578 = (state_32596[(2)]);
var state_32596__$1 = state_32596;
var statearr_32598_32619 = state_32596__$1;
(statearr_32598_32619[(2)] = inst_32578);

(statearr_32598_32619[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (1))){
var inst_32572 = cljs.core.seq.call(null,coll);
var inst_32573 = inst_32572;
var state_32596__$1 = (function (){var statearr_32599 = state_32596;
(statearr_32599[(7)] = inst_32573);

return statearr_32599;
})();
var statearr_32600_32620 = state_32596__$1;
(statearr_32600_32620[(2)] = null);

(statearr_32600_32620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (4))){
var inst_32573 = (state_32596[(7)]);
var inst_32576 = cljs.core.first.call(null,inst_32573);
var state_32596__$1 = state_32596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32596__$1,(7),ch,inst_32576);
} else {
if((state_val_32597 === (13))){
var inst_32590 = (state_32596[(2)]);
var state_32596__$1 = state_32596;
var statearr_32601_32621 = state_32596__$1;
(statearr_32601_32621[(2)] = inst_32590);

(statearr_32601_32621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (6))){
var inst_32581 = (state_32596[(2)]);
var state_32596__$1 = state_32596;
if(cljs.core.truth_(inst_32581)){
var statearr_32602_32622 = state_32596__$1;
(statearr_32602_32622[(1)] = (8));

} else {
var statearr_32603_32623 = state_32596__$1;
(statearr_32603_32623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (3))){
var inst_32594 = (state_32596[(2)]);
var state_32596__$1 = state_32596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32596__$1,inst_32594);
} else {
if((state_val_32597 === (12))){
var state_32596__$1 = state_32596;
var statearr_32604_32624 = state_32596__$1;
(statearr_32604_32624[(2)] = null);

(statearr_32604_32624[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (2))){
var inst_32573 = (state_32596[(7)]);
var state_32596__$1 = state_32596;
if(cljs.core.truth_(inst_32573)){
var statearr_32605_32625 = state_32596__$1;
(statearr_32605_32625[(1)] = (4));

} else {
var statearr_32606_32626 = state_32596__$1;
(statearr_32606_32626[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (11))){
var inst_32587 = cljs.core.async.close_BANG_.call(null,ch);
var state_32596__$1 = state_32596;
var statearr_32607_32627 = state_32596__$1;
(statearr_32607_32627[(2)] = inst_32587);

(statearr_32607_32627[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (9))){
var state_32596__$1 = state_32596;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32608_32628 = state_32596__$1;
(statearr_32608_32628[(1)] = (11));

} else {
var statearr_32609_32629 = state_32596__$1;
(statearr_32609_32629[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (5))){
var inst_32573 = (state_32596[(7)]);
var state_32596__$1 = state_32596;
var statearr_32610_32630 = state_32596__$1;
(statearr_32610_32630[(2)] = inst_32573);

(statearr_32610_32630[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (10))){
var inst_32592 = (state_32596[(2)]);
var state_32596__$1 = state_32596;
var statearr_32611_32631 = state_32596__$1;
(statearr_32611_32631[(2)] = inst_32592);

(statearr_32611_32631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (8))){
var inst_32573 = (state_32596[(7)]);
var inst_32583 = cljs.core.next.call(null,inst_32573);
var inst_32573__$1 = inst_32583;
var state_32596__$1 = (function (){var statearr_32612 = state_32596;
(statearr_32612[(7)] = inst_32573__$1);

return statearr_32612;
})();
var statearr_32613_32632 = state_32596__$1;
(statearr_32613_32632[(2)] = null);

(statearr_32613_32632[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_32614 = [null,null,null,null,null,null,null,null];
(statearr_32614[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_32614[(1)] = (1));

return statearr_32614;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_32596){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_32596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e32615){if((e32615 instanceof Object)){
var ex__31947__auto__ = e32615;
var statearr_32616_32633 = state_32596;
(statearr_32616_32633[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32634 = state_32596;
state_32596 = G__32634;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_32596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_32596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
})();
var state__32040__auto__ = (function (){var statearr_32617 = f__32039__auto__.call(null);
(statearr_32617[(6)] = c__32038__auto__);

return statearr_32617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32040__auto__);
}));

return c__32038__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

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

var cljs$core$async$Mux$muxch_STAR_$dyn_32635 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32635.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32636 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32636.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32637 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32637.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32638 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32638.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32639 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32639 = (function (ch,cs,meta32640){
this.ch = ch;
this.cs = cs;
this.meta32640 = meta32640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32641,meta32640__$1){
var self__ = this;
var _32641__$1 = this;
return (new cljs.core.async.t_cljs$core$async32639(self__.ch,self__.cs,meta32640__$1));
}));

(cljs.core.async.t_cljs$core$async32639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32641){
var self__ = this;
var _32641__$1 = this;
return self__.meta32640;
}));

(cljs.core.async.t_cljs$core$async32639.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32639.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32639.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32639.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32639.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32639.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32639.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32640","meta32640",384969228,null)], null);
}));

(cljs.core.async.t_cljs$core$async32639.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32639.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32639");

(cljs.core.async.t_cljs$core$async32639.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async32639");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32639.
 */
cljs.core.async.__GT_t_cljs$core$async32639 = (function cljs$core$async$mult_$___GT_t_cljs$core$async32639(ch__$1,cs__$1,meta32640){
return (new cljs.core.async.t_cljs$core$async32639(ch__$1,cs__$1,meta32640));
});

}

return (new cljs.core.async.t_cljs$core$async32639(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__32038__auto___32861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32039__auto__ = (function (){var switch__31943__auto__ = (function (state_32776){
var state_val_32777 = (state_32776[(1)]);
if((state_val_32777 === (7))){
var inst_32772 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32778_32862 = state_32776__$1;
(statearr_32778_32862[(2)] = inst_32772);

(statearr_32778_32862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (20))){
var inst_32675 = (state_32776[(7)]);
var inst_32687 = cljs.core.first.call(null,inst_32675);
var inst_32688 = cljs.core.nth.call(null,inst_32687,(0),null);
var inst_32689 = cljs.core.nth.call(null,inst_32687,(1),null);
var state_32776__$1 = (function (){var statearr_32779 = state_32776;
(statearr_32779[(8)] = inst_32688);

return statearr_32779;
})();
if(cljs.core.truth_(inst_32689)){
var statearr_32780_32863 = state_32776__$1;
(statearr_32780_32863[(1)] = (22));

} else {
var statearr_32781_32864 = state_32776__$1;
(statearr_32781_32864[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (27))){
var inst_32719 = (state_32776[(9)]);
var inst_32644 = (state_32776[(10)]);
var inst_32724 = (state_32776[(11)]);
var inst_32717 = (state_32776[(12)]);
var inst_32724__$1 = cljs.core._nth.call(null,inst_32717,inst_32719);
var inst_32725 = cljs.core.async.put_BANG_.call(null,inst_32724__$1,inst_32644,done);
var state_32776__$1 = (function (){var statearr_32782 = state_32776;
(statearr_32782[(11)] = inst_32724__$1);

return statearr_32782;
})();
if(cljs.core.truth_(inst_32725)){
var statearr_32783_32865 = state_32776__$1;
(statearr_32783_32865[(1)] = (30));

} else {
var statearr_32784_32866 = state_32776__$1;
(statearr_32784_32866[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (1))){
var state_32776__$1 = state_32776;
var statearr_32785_32867 = state_32776__$1;
(statearr_32785_32867[(2)] = null);

(statearr_32785_32867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (24))){
var inst_32675 = (state_32776[(7)]);
var inst_32694 = (state_32776[(2)]);
var inst_32695 = cljs.core.next.call(null,inst_32675);
var inst_32653 = inst_32695;
var inst_32654 = null;
var inst_32655 = (0);
var inst_32656 = (0);
var state_32776__$1 = (function (){var statearr_32786 = state_32776;
(statearr_32786[(13)] = inst_32655);

(statearr_32786[(14)] = inst_32694);

(statearr_32786[(15)] = inst_32656);

(statearr_32786[(16)] = inst_32654);

(statearr_32786[(17)] = inst_32653);

return statearr_32786;
})();
var statearr_32787_32868 = state_32776__$1;
(statearr_32787_32868[(2)] = null);

(statearr_32787_32868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (39))){
var state_32776__$1 = state_32776;
var statearr_32791_32869 = state_32776__$1;
(statearr_32791_32869[(2)] = null);

(statearr_32791_32869[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (4))){
var inst_32644 = (state_32776[(10)]);
var inst_32644__$1 = (state_32776[(2)]);
var inst_32645 = (inst_32644__$1 == null);
var state_32776__$1 = (function (){var statearr_32792 = state_32776;
(statearr_32792[(10)] = inst_32644__$1);

return statearr_32792;
})();
if(cljs.core.truth_(inst_32645)){
var statearr_32793_32870 = state_32776__$1;
(statearr_32793_32870[(1)] = (5));

} else {
var statearr_32794_32871 = state_32776__$1;
(statearr_32794_32871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (15))){
var inst_32655 = (state_32776[(13)]);
var inst_32656 = (state_32776[(15)]);
var inst_32654 = (state_32776[(16)]);
var inst_32653 = (state_32776[(17)]);
var inst_32671 = (state_32776[(2)]);
var inst_32672 = (inst_32656 + (1));
var tmp32788 = inst_32655;
var tmp32789 = inst_32654;
var tmp32790 = inst_32653;
var inst_32653__$1 = tmp32790;
var inst_32654__$1 = tmp32789;
var inst_32655__$1 = tmp32788;
var inst_32656__$1 = inst_32672;
var state_32776__$1 = (function (){var statearr_32795 = state_32776;
(statearr_32795[(13)] = inst_32655__$1);

(statearr_32795[(18)] = inst_32671);

(statearr_32795[(15)] = inst_32656__$1);

(statearr_32795[(16)] = inst_32654__$1);

(statearr_32795[(17)] = inst_32653__$1);

return statearr_32795;
})();
var statearr_32796_32872 = state_32776__$1;
(statearr_32796_32872[(2)] = null);

(statearr_32796_32872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (21))){
var inst_32698 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32800_32873 = state_32776__$1;
(statearr_32800_32873[(2)] = inst_32698);

(statearr_32800_32873[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (31))){
var inst_32724 = (state_32776[(11)]);
var inst_32728 = done.call(null,null);
var inst_32729 = cljs.core.async.untap_STAR_.call(null,m,inst_32724);
var state_32776__$1 = (function (){var statearr_32801 = state_32776;
(statearr_32801[(19)] = inst_32728);

return statearr_32801;
})();
var statearr_32802_32874 = state_32776__$1;
(statearr_32802_32874[(2)] = inst_32729);

(statearr_32802_32874[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (32))){
var inst_32719 = (state_32776[(9)]);
var inst_32716 = (state_32776[(20)]);
var inst_32718 = (state_32776[(21)]);
var inst_32717 = (state_32776[(12)]);
var inst_32731 = (state_32776[(2)]);
var inst_32732 = (inst_32719 + (1));
var tmp32797 = inst_32716;
var tmp32798 = inst_32718;
var tmp32799 = inst_32717;
var inst_32716__$1 = tmp32797;
var inst_32717__$1 = tmp32799;
var inst_32718__$1 = tmp32798;
var inst_32719__$1 = inst_32732;
var state_32776__$1 = (function (){var statearr_32803 = state_32776;
(statearr_32803[(9)] = inst_32719__$1);

(statearr_32803[(22)] = inst_32731);

(statearr_32803[(20)] = inst_32716__$1);

(statearr_32803[(21)] = inst_32718__$1);

(statearr_32803[(12)] = inst_32717__$1);

return statearr_32803;
})();
var statearr_32804_32875 = state_32776__$1;
(statearr_32804_32875[(2)] = null);

(statearr_32804_32875[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (40))){
var inst_32744 = (state_32776[(23)]);
var inst_32748 = done.call(null,null);
var inst_32749 = cljs.core.async.untap_STAR_.call(null,m,inst_32744);
var state_32776__$1 = (function (){var statearr_32805 = state_32776;
(statearr_32805[(24)] = inst_32748);

return statearr_32805;
})();
var statearr_32806_32876 = state_32776__$1;
(statearr_32806_32876[(2)] = inst_32749);

(statearr_32806_32876[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (33))){
var inst_32735 = (state_32776[(25)]);
var inst_32737 = cljs.core.chunked_seq_QMARK_.call(null,inst_32735);
var state_32776__$1 = state_32776;
if(inst_32737){
var statearr_32807_32877 = state_32776__$1;
(statearr_32807_32877[(1)] = (36));

} else {
var statearr_32808_32878 = state_32776__$1;
(statearr_32808_32878[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (13))){
var inst_32665 = (state_32776[(26)]);
var inst_32668 = cljs.core.async.close_BANG_.call(null,inst_32665);
var state_32776__$1 = state_32776;
var statearr_32809_32879 = state_32776__$1;
(statearr_32809_32879[(2)] = inst_32668);

(statearr_32809_32879[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (22))){
var inst_32688 = (state_32776[(8)]);
var inst_32691 = cljs.core.async.close_BANG_.call(null,inst_32688);
var state_32776__$1 = state_32776;
var statearr_32810_32880 = state_32776__$1;
(statearr_32810_32880[(2)] = inst_32691);

(statearr_32810_32880[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (36))){
var inst_32735 = (state_32776[(25)]);
var inst_32739 = cljs.core.chunk_first.call(null,inst_32735);
var inst_32740 = cljs.core.chunk_rest.call(null,inst_32735);
var inst_32741 = cljs.core.count.call(null,inst_32739);
var inst_32716 = inst_32740;
var inst_32717 = inst_32739;
var inst_32718 = inst_32741;
var inst_32719 = (0);
var state_32776__$1 = (function (){var statearr_32811 = state_32776;
(statearr_32811[(9)] = inst_32719);

(statearr_32811[(20)] = inst_32716);

(statearr_32811[(21)] = inst_32718);

(statearr_32811[(12)] = inst_32717);

return statearr_32811;
})();
var statearr_32812_32881 = state_32776__$1;
(statearr_32812_32881[(2)] = null);

(statearr_32812_32881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (41))){
var inst_32735 = (state_32776[(25)]);
var inst_32751 = (state_32776[(2)]);
var inst_32752 = cljs.core.next.call(null,inst_32735);
var inst_32716 = inst_32752;
var inst_32717 = null;
var inst_32718 = (0);
var inst_32719 = (0);
var state_32776__$1 = (function (){var statearr_32813 = state_32776;
(statearr_32813[(9)] = inst_32719);

(statearr_32813[(27)] = inst_32751);

(statearr_32813[(20)] = inst_32716);

(statearr_32813[(21)] = inst_32718);

(statearr_32813[(12)] = inst_32717);

return statearr_32813;
})();
var statearr_32814_32882 = state_32776__$1;
(statearr_32814_32882[(2)] = null);

(statearr_32814_32882[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (43))){
var state_32776__$1 = state_32776;
var statearr_32815_32883 = state_32776__$1;
(statearr_32815_32883[(2)] = null);

(statearr_32815_32883[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (29))){
var inst_32760 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32816_32884 = state_32776__$1;
(statearr_32816_32884[(2)] = inst_32760);

(statearr_32816_32884[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (44))){
var inst_32769 = (state_32776[(2)]);
var state_32776__$1 = (function (){var statearr_32817 = state_32776;
(statearr_32817[(28)] = inst_32769);

return statearr_32817;
})();
var statearr_32818_32885 = state_32776__$1;
(statearr_32818_32885[(2)] = null);

(statearr_32818_32885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (6))){
var inst_32708 = (state_32776[(29)]);
var inst_32707 = cljs.core.deref.call(null,cs);
var inst_32708__$1 = cljs.core.keys.call(null,inst_32707);
var inst_32709 = cljs.core.count.call(null,inst_32708__$1);
var inst_32710 = cljs.core.reset_BANG_.call(null,dctr,inst_32709);
var inst_32715 = cljs.core.seq.call(null,inst_32708__$1);
var inst_32716 = inst_32715;
var inst_32717 = null;
var inst_32718 = (0);
var inst_32719 = (0);
var state_32776__$1 = (function (){var statearr_32819 = state_32776;
(statearr_32819[(9)] = inst_32719);

(statearr_32819[(29)] = inst_32708__$1);

(statearr_32819[(20)] = inst_32716);

(statearr_32819[(21)] = inst_32718);

(statearr_32819[(30)] = inst_32710);

(statearr_32819[(12)] = inst_32717);

return statearr_32819;
})();
var statearr_32820_32886 = state_32776__$1;
(statearr_32820_32886[(2)] = null);

(statearr_32820_32886[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (28))){
var inst_32716 = (state_32776[(20)]);
var inst_32735 = (state_32776[(25)]);
var inst_32735__$1 = cljs.core.seq.call(null,inst_32716);
var state_32776__$1 = (function (){var statearr_32821 = state_32776;
(statearr_32821[(25)] = inst_32735__$1);

return statearr_32821;
})();
if(inst_32735__$1){
var statearr_32822_32887 = state_32776__$1;
(statearr_32822_32887[(1)] = (33));

} else {
var statearr_32823_32888 = state_32776__$1;
(statearr_32823_32888[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (25))){
var inst_32719 = (state_32776[(9)]);
var inst_32718 = (state_32776[(21)]);
var inst_32721 = (inst_32719 < inst_32718);
var inst_32722 = inst_32721;
var state_32776__$1 = state_32776;
if(cljs.core.truth_(inst_32722)){
var statearr_32824_32889 = state_32776__$1;
(statearr_32824_32889[(1)] = (27));

} else {
var statearr_32825_32890 = state_32776__$1;
(statearr_32825_32890[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (34))){
var state_32776__$1 = state_32776;
var statearr_32826_32891 = state_32776__$1;
(statearr_32826_32891[(2)] = null);

(statearr_32826_32891[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (17))){
var state_32776__$1 = state_32776;
var statearr_32827_32892 = state_32776__$1;
(statearr_32827_32892[(2)] = null);

(statearr_32827_32892[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (3))){
var inst_32774 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32776__$1,inst_32774);
} else {
if((state_val_32777 === (12))){
var inst_32703 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32828_32893 = state_32776__$1;
(statearr_32828_32893[(2)] = inst_32703);

(statearr_32828_32893[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (2))){
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32776__$1,(4),ch);
} else {
if((state_val_32777 === (23))){
var state_32776__$1 = state_32776;
var statearr_32829_32894 = state_32776__$1;
(statearr_32829_32894[(2)] = null);

(statearr_32829_32894[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (35))){
var inst_32758 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32830_32895 = state_32776__$1;
(statearr_32830_32895[(2)] = inst_32758);

(statearr_32830_32895[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (19))){
var inst_32675 = (state_32776[(7)]);
var inst_32679 = cljs.core.chunk_first.call(null,inst_32675);
var inst_32680 = cljs.core.chunk_rest.call(null,inst_32675);
var inst_32681 = cljs.core.count.call(null,inst_32679);
var inst_32653 = inst_32680;
var inst_32654 = inst_32679;
var inst_32655 = inst_32681;
var inst_32656 = (0);
var state_32776__$1 = (function (){var statearr_32831 = state_32776;
(statearr_32831[(13)] = inst_32655);

(statearr_32831[(15)] = inst_32656);

(statearr_32831[(16)] = inst_32654);

(statearr_32831[(17)] = inst_32653);

return statearr_32831;
})();
var statearr_32832_32896 = state_32776__$1;
(statearr_32832_32896[(2)] = null);

(statearr_32832_32896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (11))){
var inst_32675 = (state_32776[(7)]);
var inst_32653 = (state_32776[(17)]);
var inst_32675__$1 = cljs.core.seq.call(null,inst_32653);
var state_32776__$1 = (function (){var statearr_32833 = state_32776;
(statearr_32833[(7)] = inst_32675__$1);

return statearr_32833;
})();
if(inst_32675__$1){
var statearr_32834_32897 = state_32776__$1;
(statearr_32834_32897[(1)] = (16));

} else {
var statearr_32835_32898 = state_32776__$1;
(statearr_32835_32898[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (9))){
var inst_32705 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32836_32899 = state_32776__$1;
(statearr_32836_32899[(2)] = inst_32705);

(statearr_32836_32899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (5))){
var inst_32651 = cljs.core.deref.call(null,cs);
var inst_32652 = cljs.core.seq.call(null,inst_32651);
var inst_32653 = inst_32652;
var inst_32654 = null;
var inst_32655 = (0);
var inst_32656 = (0);
var state_32776__$1 = (function (){var statearr_32837 = state_32776;
(statearr_32837[(13)] = inst_32655);

(statearr_32837[(15)] = inst_32656);

(statearr_32837[(16)] = inst_32654);

(statearr_32837[(17)] = inst_32653);

return statearr_32837;
})();
var statearr_32838_32900 = state_32776__$1;
(statearr_32838_32900[(2)] = null);

(statearr_32838_32900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (14))){
var state_32776__$1 = state_32776;
var statearr_32839_32901 = state_32776__$1;
(statearr_32839_32901[(2)] = null);

(statearr_32839_32901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (45))){
var inst_32766 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32840_32902 = state_32776__$1;
(statearr_32840_32902[(2)] = inst_32766);

(statearr_32840_32902[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (26))){
var inst_32708 = (state_32776[(29)]);
var inst_32762 = (state_32776[(2)]);
var inst_32763 = cljs.core.seq.call(null,inst_32708);
var state_32776__$1 = (function (){var statearr_32841 = state_32776;
(statearr_32841[(31)] = inst_32762);

return statearr_32841;
})();
if(inst_32763){
var statearr_32842_32903 = state_32776__$1;
(statearr_32842_32903[(1)] = (42));

} else {
var statearr_32843_32904 = state_32776__$1;
(statearr_32843_32904[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (16))){
var inst_32675 = (state_32776[(7)]);
var inst_32677 = cljs.core.chunked_seq_QMARK_.call(null,inst_32675);
var state_32776__$1 = state_32776;
if(inst_32677){
var statearr_32844_32905 = state_32776__$1;
(statearr_32844_32905[(1)] = (19));

} else {
var statearr_32845_32906 = state_32776__$1;
(statearr_32845_32906[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (38))){
var inst_32755 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32846_32907 = state_32776__$1;
(statearr_32846_32907[(2)] = inst_32755);

(statearr_32846_32907[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (30))){
var state_32776__$1 = state_32776;
var statearr_32847_32908 = state_32776__$1;
(statearr_32847_32908[(2)] = null);

(statearr_32847_32908[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (10))){
var inst_32656 = (state_32776[(15)]);
var inst_32654 = (state_32776[(16)]);
var inst_32664 = cljs.core._nth.call(null,inst_32654,inst_32656);
var inst_32665 = cljs.core.nth.call(null,inst_32664,(0),null);
var inst_32666 = cljs.core.nth.call(null,inst_32664,(1),null);
var state_32776__$1 = (function (){var statearr_32848 = state_32776;
(statearr_32848[(26)] = inst_32665);

return statearr_32848;
})();
if(cljs.core.truth_(inst_32666)){
var statearr_32849_32909 = state_32776__$1;
(statearr_32849_32909[(1)] = (13));

} else {
var statearr_32850_32910 = state_32776__$1;
(statearr_32850_32910[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (18))){
var inst_32701 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32851_32911 = state_32776__$1;
(statearr_32851_32911[(2)] = inst_32701);

(statearr_32851_32911[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (42))){
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32776__$1,(45),dchan);
} else {
if((state_val_32777 === (37))){
var inst_32644 = (state_32776[(10)]);
var inst_32735 = (state_32776[(25)]);
var inst_32744 = (state_32776[(23)]);
var inst_32744__$1 = cljs.core.first.call(null,inst_32735);
var inst_32745 = cljs.core.async.put_BANG_.call(null,inst_32744__$1,inst_32644,done);
var state_32776__$1 = (function (){var statearr_32852 = state_32776;
(statearr_32852[(23)] = inst_32744__$1);

return statearr_32852;
})();
if(cljs.core.truth_(inst_32745)){
var statearr_32853_32912 = state_32776__$1;
(statearr_32853_32912[(1)] = (39));

} else {
var statearr_32854_32913 = state_32776__$1;
(statearr_32854_32913[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (8))){
var inst_32655 = (state_32776[(13)]);
var inst_32656 = (state_32776[(15)]);
var inst_32658 = (inst_32656 < inst_32655);
var inst_32659 = inst_32658;
var state_32776__$1 = state_32776;
if(cljs.core.truth_(inst_32659)){
var statearr_32855_32914 = state_32776__$1;
(statearr_32855_32914[(1)] = (10));

} else {
var statearr_32856_32915 = state_32776__$1;
(statearr_32856_32915[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__31944__auto__ = null;
var cljs$core$async$mult_$_state_machine__31944__auto____0 = (function (){
var statearr_32857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32857[(0)] = cljs$core$async$mult_$_state_machine__31944__auto__);

(statearr_32857[(1)] = (1));

return statearr_32857;
});
var cljs$core$async$mult_$_state_machine__31944__auto____1 = (function (state_32776){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_32776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e32858){if((e32858 instanceof Object)){
var ex__31947__auto__ = e32858;
var statearr_32859_32916 = state_32776;
(statearr_32859_32916[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32917 = state_32776;
state_32776 = G__32917;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31944__auto__ = function(state_32776){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31944__auto____1.call(this,state_32776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31944__auto____0;
cljs$core$async$mult_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31944__auto____1;
return cljs$core$async$mult_$_state_machine__31944__auto__;
})()
})();
var state__32040__auto__ = (function (){var statearr_32860 = f__32039__auto__.call(null);
(statearr_32860[(6)] = c__32038__auto___32861);

return statearr_32860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32040__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32919 = arguments.length;
switch (G__32919) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

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

var cljs$core$async$Mix$admix_STAR_$dyn_32921 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_32921.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32922 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_32922.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32923 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32923.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32924 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_32924.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32925 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32925.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32936 = arguments.length;
var i__4737__auto___32937 = (0);
while(true){
if((i__4737__auto___32937 < len__4736__auto___32936)){
args__4742__auto__.push((arguments[i__4737__auto___32937]));

var G__32938 = (i__4737__auto___32937 + (1));
i__4737__auto___32937 = G__32938;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32930){
var map__32931 = p__32930;
var map__32931__$1 = (((((!((map__32931 == null))))?(((((map__32931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32931):map__32931);
var opts = map__32931__$1;
var statearr_32933_32939 = state;
(statearr_32933_32939[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_32934_32940 = state;
(statearr_32934_32940[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_32935_32941 = state;
(statearr_32935_32941[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32926){
var G__32927 = cljs.core.first.call(null,seq32926);
var seq32926__$1 = cljs.core.next.call(null,seq32926);
var G__32928 = cljs.core.first.call(null,seq32926__$1);
var seq32926__$2 = cljs.core.next.call(null,seq32926__$1);
var G__32929 = cljs.core.first.call(null,seq32926__$2);
var seq32926__$3 = cljs.core.next.call(null,seq32926__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32927,G__32928,G__32929,seq32926__$3);
}));

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
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32942 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32942 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32943){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32943 = meta32943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32944,meta32943__$1){
var self__ = this;
var _32944__$1 = this;
return (new cljs.core.async.t_cljs$core$async32942(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32943__$1));
}));

(cljs.core.async.t_cljs$core$async32942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32944){
var self__ = this;
var _32944__$1 = this;
return self__.meta32943;
}));

(cljs.core.async.t_cljs$core$async32942.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32942.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32942.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32942.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async32942.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async32942.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async32942.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async32942.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async32942.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32943","meta32943",-430825744,null)], null);
}));

(cljs.core.async.t_cljs$core$async32942.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32942.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32942");

(cljs.core.async.t_cljs$core$async32942.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async32942");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32942.
 */
cljs.core.async.__GT_t_cljs$core$async32942 = (function cljs$core$async$mix_$___GT_t_cljs$core$async32942(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32943){
return (new cljs.core.async.t_cljs$core$async32942(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32943));
});

}

return (new cljs.core.async.t_cljs$core$async32942(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32038__auto___33106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32039__auto__ = (function (){var switch__31943__auto__ = (function (state_33046){
var state_val_33047 = (state_33046[(1)]);
if((state_val_33047 === (7))){
var inst_32961 = (state_33046[(2)]);
var state_33046__$1 = state_33046;
var statearr_33048_33107 = state_33046__$1;
(statearr_33048_33107[(2)] = inst_32961);

(statearr_33048_33107[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (20))){
var inst_32973 = (state_33046[(7)]);
var state_33046__$1 = state_33046;
var statearr_33049_33108 = state_33046__$1;
(statearr_33049_33108[(2)] = inst_32973);

(statearr_33049_33108[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (27))){
var state_33046__$1 = state_33046;
var statearr_33050_33109 = state_33046__$1;
(statearr_33050_33109[(2)] = null);

(statearr_33050_33109[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (1))){
var inst_32948 = (state_33046[(8)]);
var inst_32948__$1 = calc_state.call(null);
var inst_32950 = (inst_32948__$1 == null);
var inst_32951 = cljs.core.not.call(null,inst_32950);
var state_33046__$1 = (function (){var statearr_33051 = state_33046;
(statearr_33051[(8)] = inst_32948__$1);

return statearr_33051;
})();
if(inst_32951){
var statearr_33052_33110 = state_33046__$1;
(statearr_33052_33110[(1)] = (2));

} else {
var statearr_33053_33111 = state_33046__$1;
(statearr_33053_33111[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (24))){
var inst_33006 = (state_33046[(9)]);
var inst_33020 = (state_33046[(10)]);
var inst_32997 = (state_33046[(11)]);
var inst_33020__$1 = inst_32997.call(null,inst_33006);
var state_33046__$1 = (function (){var statearr_33054 = state_33046;
(statearr_33054[(10)] = inst_33020__$1);

return statearr_33054;
})();
if(cljs.core.truth_(inst_33020__$1)){
var statearr_33055_33112 = state_33046__$1;
(statearr_33055_33112[(1)] = (29));

} else {
var statearr_33056_33113 = state_33046__$1;
(statearr_33056_33113[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (4))){
var inst_32964 = (state_33046[(2)]);
var state_33046__$1 = state_33046;
if(cljs.core.truth_(inst_32964)){
var statearr_33057_33114 = state_33046__$1;
(statearr_33057_33114[(1)] = (8));

} else {
var statearr_33058_33115 = state_33046__$1;
(statearr_33058_33115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (15))){
var inst_32991 = (state_33046[(2)]);
var state_33046__$1 = state_33046;
if(cljs.core.truth_(inst_32991)){
var statearr_33059_33116 = state_33046__$1;
(statearr_33059_33116[(1)] = (19));

} else {
var statearr_33060_33117 = state_33046__$1;
(statearr_33060_33117[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (21))){
var inst_32996 = (state_33046[(12)]);
var inst_32996__$1 = (state_33046[(2)]);
var inst_32997 = cljs.core.get.call(null,inst_32996__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32998 = cljs.core.get.call(null,inst_32996__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32999 = cljs.core.get.call(null,inst_32996__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33046__$1 = (function (){var statearr_33061 = state_33046;
(statearr_33061[(12)] = inst_32996__$1);

(statearr_33061[(11)] = inst_32997);

(statearr_33061[(13)] = inst_32998);

return statearr_33061;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33046__$1,(22),inst_32999);
} else {
if((state_val_33047 === (31))){
var inst_33028 = (state_33046[(2)]);
var state_33046__$1 = state_33046;
if(cljs.core.truth_(inst_33028)){
var statearr_33062_33118 = state_33046__$1;
(statearr_33062_33118[(1)] = (32));

} else {
var statearr_33063_33119 = state_33046__$1;
(statearr_33063_33119[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (32))){
var inst_33005 = (state_33046[(14)]);
var state_33046__$1 = state_33046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33046__$1,(35),out,inst_33005);
} else {
if((state_val_33047 === (33))){
var inst_32996 = (state_33046[(12)]);
var inst_32973 = inst_32996;
var state_33046__$1 = (function (){var statearr_33064 = state_33046;
(statearr_33064[(7)] = inst_32973);

return statearr_33064;
})();
var statearr_33065_33120 = state_33046__$1;
(statearr_33065_33120[(2)] = null);

(statearr_33065_33120[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (13))){
var inst_32973 = (state_33046[(7)]);
var inst_32980 = inst_32973.cljs$lang$protocol_mask$partition0$;
var inst_32981 = (inst_32980 & (64));
var inst_32982 = inst_32973.cljs$core$ISeq$;
var inst_32983 = (cljs.core.PROTOCOL_SENTINEL === inst_32982);
var inst_32984 = ((inst_32981) || (inst_32983));
var state_33046__$1 = state_33046;
if(cljs.core.truth_(inst_32984)){
var statearr_33066_33121 = state_33046__$1;
(statearr_33066_33121[(1)] = (16));

} else {
var statearr_33067_33122 = state_33046__$1;
(statearr_33067_33122[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (22))){
var inst_33006 = (state_33046[(9)]);
var inst_33005 = (state_33046[(14)]);
var inst_33004 = (state_33046[(2)]);
var inst_33005__$1 = cljs.core.nth.call(null,inst_33004,(0),null);
var inst_33006__$1 = cljs.core.nth.call(null,inst_33004,(1),null);
var inst_33007 = (inst_33005__$1 == null);
var inst_33008 = cljs.core._EQ_.call(null,inst_33006__$1,change);
var inst_33009 = ((inst_33007) || (inst_33008));
var state_33046__$1 = (function (){var statearr_33068 = state_33046;
(statearr_33068[(9)] = inst_33006__$1);

(statearr_33068[(14)] = inst_33005__$1);

return statearr_33068;
})();
if(cljs.core.truth_(inst_33009)){
var statearr_33069_33123 = state_33046__$1;
(statearr_33069_33123[(1)] = (23));

} else {
var statearr_33070_33124 = state_33046__$1;
(statearr_33070_33124[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (36))){
var inst_32996 = (state_33046[(12)]);
var inst_32973 = inst_32996;
var state_33046__$1 = (function (){var statearr_33071 = state_33046;
(statearr_33071[(7)] = inst_32973);

return statearr_33071;
})();
var statearr_33072_33125 = state_33046__$1;
(statearr_33072_33125[(2)] = null);

(statearr_33072_33125[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (29))){
var inst_33020 = (state_33046[(10)]);
var state_33046__$1 = state_33046;
var statearr_33073_33126 = state_33046__$1;
(statearr_33073_33126[(2)] = inst_33020);

(statearr_33073_33126[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (6))){
var state_33046__$1 = state_33046;
var statearr_33074_33127 = state_33046__$1;
(statearr_33074_33127[(2)] = false);

(statearr_33074_33127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (28))){
var inst_33016 = (state_33046[(2)]);
var inst_33017 = calc_state.call(null);
var inst_32973 = inst_33017;
var state_33046__$1 = (function (){var statearr_33075 = state_33046;
(statearr_33075[(7)] = inst_32973);

(statearr_33075[(15)] = inst_33016);

return statearr_33075;
})();
var statearr_33076_33128 = state_33046__$1;
(statearr_33076_33128[(2)] = null);

(statearr_33076_33128[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (25))){
var inst_33042 = (state_33046[(2)]);
var state_33046__$1 = state_33046;
var statearr_33077_33129 = state_33046__$1;
(statearr_33077_33129[(2)] = inst_33042);

(statearr_33077_33129[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (34))){
var inst_33040 = (state_33046[(2)]);
var state_33046__$1 = state_33046;
var statearr_33078_33130 = state_33046__$1;
(statearr_33078_33130[(2)] = inst_33040);

(statearr_33078_33130[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (17))){
var state_33046__$1 = state_33046;
var statearr_33079_33131 = state_33046__$1;
(statearr_33079_33131[(2)] = false);

(statearr_33079_33131[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (3))){
var state_33046__$1 = state_33046;
var statearr_33080_33132 = state_33046__$1;
(statearr_33080_33132[(2)] = false);

(statearr_33080_33132[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (12))){
var inst_33044 = (state_33046[(2)]);
var state_33046__$1 = state_33046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33046__$1,inst_33044);
} else {
if((state_val_33047 === (2))){
var inst_32948 = (state_33046[(8)]);
var inst_32953 = inst_32948.cljs$lang$protocol_mask$partition0$;
var inst_32954 = (inst_32953 & (64));
var inst_32955 = inst_32948.cljs$core$ISeq$;
var inst_32956 = (cljs.core.PROTOCOL_SENTINEL === inst_32955);
var inst_32957 = ((inst_32954) || (inst_32956));
var state_33046__$1 = state_33046;
if(cljs.core.truth_(inst_32957)){
var statearr_33081_33133 = state_33046__$1;
(statearr_33081_33133[(1)] = (5));

} else {
var statearr_33082_33134 = state_33046__$1;
(statearr_33082_33134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (23))){
var inst_33005 = (state_33046[(14)]);
var inst_33011 = (inst_33005 == null);
var state_33046__$1 = state_33046;
if(cljs.core.truth_(inst_33011)){
var statearr_33083_33135 = state_33046__$1;
(statearr_33083_33135[(1)] = (26));

} else {
var statearr_33084_33136 = state_33046__$1;
(statearr_33084_33136[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (35))){
var inst_33031 = (state_33046[(2)]);
var state_33046__$1 = state_33046;
if(cljs.core.truth_(inst_33031)){
var statearr_33085_33137 = state_33046__$1;
(statearr_33085_33137[(1)] = (36));

} else {
var statearr_33086_33138 = state_33046__$1;
(statearr_33086_33138[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (19))){
var inst_32973 = (state_33046[(7)]);
var inst_32993 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32973);
var state_33046__$1 = state_33046;
var statearr_33087_33139 = state_33046__$1;
(statearr_33087_33139[(2)] = inst_32993);

(statearr_33087_33139[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (11))){
var inst_32973 = (state_33046[(7)]);
var inst_32977 = (inst_32973 == null);
var inst_32978 = cljs.core.not.call(null,inst_32977);
var state_33046__$1 = state_33046;
if(inst_32978){
var statearr_33088_33140 = state_33046__$1;
(statearr_33088_33140[(1)] = (13));

} else {
var statearr_33089_33141 = state_33046__$1;
(statearr_33089_33141[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (9))){
var inst_32948 = (state_33046[(8)]);
var state_33046__$1 = state_33046;
var statearr_33090_33142 = state_33046__$1;
(statearr_33090_33142[(2)] = inst_32948);

(statearr_33090_33142[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (5))){
var state_33046__$1 = state_33046;
var statearr_33091_33143 = state_33046__$1;
(statearr_33091_33143[(2)] = true);

(statearr_33091_33143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (14))){
var state_33046__$1 = state_33046;
var statearr_33092_33144 = state_33046__$1;
(statearr_33092_33144[(2)] = false);

(statearr_33092_33144[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (26))){
var inst_33006 = (state_33046[(9)]);
var inst_33013 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33006);
var state_33046__$1 = state_33046;
var statearr_33093_33145 = state_33046__$1;
(statearr_33093_33145[(2)] = inst_33013);

(statearr_33093_33145[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (16))){
var state_33046__$1 = state_33046;
var statearr_33094_33146 = state_33046__$1;
(statearr_33094_33146[(2)] = true);

(statearr_33094_33146[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (38))){
var inst_33036 = (state_33046[(2)]);
var state_33046__$1 = state_33046;
var statearr_33095_33147 = state_33046__$1;
(statearr_33095_33147[(2)] = inst_33036);

(statearr_33095_33147[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (30))){
var inst_33006 = (state_33046[(9)]);
var inst_32997 = (state_33046[(11)]);
var inst_32998 = (state_33046[(13)]);
var inst_33023 = cljs.core.empty_QMARK_.call(null,inst_32997);
var inst_33024 = inst_32998.call(null,inst_33006);
var inst_33025 = cljs.core.not.call(null,inst_33024);
var inst_33026 = ((inst_33023) && (inst_33025));
var state_33046__$1 = state_33046;
var statearr_33096_33148 = state_33046__$1;
(statearr_33096_33148[(2)] = inst_33026);

(statearr_33096_33148[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (10))){
var inst_32948 = (state_33046[(8)]);
var inst_32969 = (state_33046[(2)]);
var inst_32970 = cljs.core.get.call(null,inst_32969,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32971 = cljs.core.get.call(null,inst_32969,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32972 = cljs.core.get.call(null,inst_32969,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32973 = inst_32948;
var state_33046__$1 = (function (){var statearr_33097 = state_33046;
(statearr_33097[(16)] = inst_32970);

(statearr_33097[(7)] = inst_32973);

(statearr_33097[(17)] = inst_32971);

(statearr_33097[(18)] = inst_32972);

return statearr_33097;
})();
var statearr_33098_33149 = state_33046__$1;
(statearr_33098_33149[(2)] = null);

(statearr_33098_33149[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (18))){
var inst_32988 = (state_33046[(2)]);
var state_33046__$1 = state_33046;
var statearr_33099_33150 = state_33046__$1;
(statearr_33099_33150[(2)] = inst_32988);

(statearr_33099_33150[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (37))){
var state_33046__$1 = state_33046;
var statearr_33100_33151 = state_33046__$1;
(statearr_33100_33151[(2)] = null);

(statearr_33100_33151[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33047 === (8))){
var inst_32948 = (state_33046[(8)]);
var inst_32966 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32948);
var state_33046__$1 = state_33046;
var statearr_33101_33152 = state_33046__$1;
(statearr_33101_33152[(2)] = inst_32966);

(statearr_33101_33152[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__31944__auto__ = null;
var cljs$core$async$mix_$_state_machine__31944__auto____0 = (function (){
var statearr_33102 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33102[(0)] = cljs$core$async$mix_$_state_machine__31944__auto__);

(statearr_33102[(1)] = (1));

return statearr_33102;
});
var cljs$core$async$mix_$_state_machine__31944__auto____1 = (function (state_33046){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_33046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e33103){if((e33103 instanceof Object)){
var ex__31947__auto__ = e33103;
var statearr_33104_33153 = state_33046;
(statearr_33104_33153[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33154 = state_33046;
state_33046 = G__33154;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31944__auto__ = function(state_33046){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31944__auto____1.call(this,state_33046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31944__auto____0;
cljs$core$async$mix_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31944__auto____1;
return cljs$core$async$mix_$_state_machine__31944__auto__;
})()
})();
var state__32040__auto__ = (function (){var statearr_33105 = f__32039__auto__.call(null);
(statearr_33105[(6)] = c__32038__auto___33106);

return statearr_33105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32040__auto__);
}));


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

var cljs$core$async$Pub$sub_STAR_$dyn_33157 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33157.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33158 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33158.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33159 = (function() {
var G__33160 = null;
var G__33160__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__33160__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__33160 = function(p,v){
switch(arguments.length){
case 1:
return G__33160__1.call(this,p);
case 2:
return G__33160__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33160.cljs$core$IFn$_invoke$arity$1 = G__33160__1;
G__33160.cljs$core$IFn$_invoke$arity$2 = G__33160__2;
return G__33160;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33156 = arguments.length;
switch (G__33156) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33159.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33159.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__33164 = arguments.length;
switch (G__33164) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__33162_SHARP_){
if(cljs.core.truth_(p1__33162_SHARP_.call(null,topic))){
return p1__33162_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33162_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33165 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33165 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33166){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33166 = meta33166;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33167,meta33166__$1){
var self__ = this;
var _33167__$1 = this;
return (new cljs.core.async.t_cljs$core$async33165(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33166__$1));
}));

(cljs.core.async.t_cljs$core$async33165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33167){
var self__ = this;
var _33167__$1 = this;
return self__.meta33166;
}));

(cljs.core.async.t_cljs$core$async33165.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33165.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33165.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33165.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33165.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33165.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33165.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33165.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33166","meta33166",-1213562609,null)], null);
}));

(cljs.core.async.t_cljs$core$async33165.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33165.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33165");

(cljs.core.async.t_cljs$core$async33165.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async33165");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33165.
 */
cljs.core.async.__GT_t_cljs$core$async33165 = (function cljs$core$async$__GT_t_cljs$core$async33165(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33166){
return (new cljs.core.async.t_cljs$core$async33165(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33166));
});

}

return (new cljs.core.async.t_cljs$core$async33165(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32038__auto___33285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32039__auto__ = (function (){var switch__31943__auto__ = (function (state_33239){
var state_val_33240 = (state_33239[(1)]);
if((state_val_33240 === (7))){
var inst_33235 = (state_33239[(2)]);
var state_33239__$1 = state_33239;
var statearr_33241_33286 = state_33239__$1;
(statearr_33241_33286[(2)] = inst_33235);

(statearr_33241_33286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (20))){
var state_33239__$1 = state_33239;
var statearr_33242_33287 = state_33239__$1;
(statearr_33242_33287[(2)] = null);

(statearr_33242_33287[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (1))){
var state_33239__$1 = state_33239;
var statearr_33243_33288 = state_33239__$1;
(statearr_33243_33288[(2)] = null);

(statearr_33243_33288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (24))){
var inst_33218 = (state_33239[(7)]);
var inst_33227 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33218);
var state_33239__$1 = state_33239;
var statearr_33244_33289 = state_33239__$1;
(statearr_33244_33289[(2)] = inst_33227);

(statearr_33244_33289[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (4))){
var inst_33170 = (state_33239[(8)]);
var inst_33170__$1 = (state_33239[(2)]);
var inst_33171 = (inst_33170__$1 == null);
var state_33239__$1 = (function (){var statearr_33245 = state_33239;
(statearr_33245[(8)] = inst_33170__$1);

return statearr_33245;
})();
if(cljs.core.truth_(inst_33171)){
var statearr_33246_33290 = state_33239__$1;
(statearr_33246_33290[(1)] = (5));

} else {
var statearr_33247_33291 = state_33239__$1;
(statearr_33247_33291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (15))){
var inst_33212 = (state_33239[(2)]);
var state_33239__$1 = state_33239;
var statearr_33248_33292 = state_33239__$1;
(statearr_33248_33292[(2)] = inst_33212);

(statearr_33248_33292[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (21))){
var inst_33232 = (state_33239[(2)]);
var state_33239__$1 = (function (){var statearr_33249 = state_33239;
(statearr_33249[(9)] = inst_33232);

return statearr_33249;
})();
var statearr_33250_33293 = state_33239__$1;
(statearr_33250_33293[(2)] = null);

(statearr_33250_33293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (13))){
var inst_33194 = (state_33239[(10)]);
var inst_33196 = cljs.core.chunked_seq_QMARK_.call(null,inst_33194);
var state_33239__$1 = state_33239;
if(inst_33196){
var statearr_33251_33294 = state_33239__$1;
(statearr_33251_33294[(1)] = (16));

} else {
var statearr_33252_33295 = state_33239__$1;
(statearr_33252_33295[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (22))){
var inst_33224 = (state_33239[(2)]);
var state_33239__$1 = state_33239;
if(cljs.core.truth_(inst_33224)){
var statearr_33253_33296 = state_33239__$1;
(statearr_33253_33296[(1)] = (23));

} else {
var statearr_33254_33297 = state_33239__$1;
(statearr_33254_33297[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (6))){
var inst_33218 = (state_33239[(7)]);
var inst_33170 = (state_33239[(8)]);
var inst_33220 = (state_33239[(11)]);
var inst_33218__$1 = topic_fn.call(null,inst_33170);
var inst_33219 = cljs.core.deref.call(null,mults);
var inst_33220__$1 = cljs.core.get.call(null,inst_33219,inst_33218__$1);
var state_33239__$1 = (function (){var statearr_33255 = state_33239;
(statearr_33255[(7)] = inst_33218__$1);

(statearr_33255[(11)] = inst_33220__$1);

return statearr_33255;
})();
if(cljs.core.truth_(inst_33220__$1)){
var statearr_33256_33298 = state_33239__$1;
(statearr_33256_33298[(1)] = (19));

} else {
var statearr_33257_33299 = state_33239__$1;
(statearr_33257_33299[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (25))){
var inst_33229 = (state_33239[(2)]);
var state_33239__$1 = state_33239;
var statearr_33258_33300 = state_33239__$1;
(statearr_33258_33300[(2)] = inst_33229);

(statearr_33258_33300[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (17))){
var inst_33194 = (state_33239[(10)]);
var inst_33203 = cljs.core.first.call(null,inst_33194);
var inst_33204 = cljs.core.async.muxch_STAR_.call(null,inst_33203);
var inst_33205 = cljs.core.async.close_BANG_.call(null,inst_33204);
var inst_33206 = cljs.core.next.call(null,inst_33194);
var inst_33180 = inst_33206;
var inst_33181 = null;
var inst_33182 = (0);
var inst_33183 = (0);
var state_33239__$1 = (function (){var statearr_33259 = state_33239;
(statearr_33259[(12)] = inst_33183);

(statearr_33259[(13)] = inst_33205);

(statearr_33259[(14)] = inst_33182);

(statearr_33259[(15)] = inst_33181);

(statearr_33259[(16)] = inst_33180);

return statearr_33259;
})();
var statearr_33260_33301 = state_33239__$1;
(statearr_33260_33301[(2)] = null);

(statearr_33260_33301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (3))){
var inst_33237 = (state_33239[(2)]);
var state_33239__$1 = state_33239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33239__$1,inst_33237);
} else {
if((state_val_33240 === (12))){
var inst_33214 = (state_33239[(2)]);
var state_33239__$1 = state_33239;
var statearr_33261_33302 = state_33239__$1;
(statearr_33261_33302[(2)] = inst_33214);

(statearr_33261_33302[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (2))){
var state_33239__$1 = state_33239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33239__$1,(4),ch);
} else {
if((state_val_33240 === (23))){
var state_33239__$1 = state_33239;
var statearr_33262_33303 = state_33239__$1;
(statearr_33262_33303[(2)] = null);

(statearr_33262_33303[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (19))){
var inst_33170 = (state_33239[(8)]);
var inst_33220 = (state_33239[(11)]);
var inst_33222 = cljs.core.async.muxch_STAR_.call(null,inst_33220);
var state_33239__$1 = state_33239;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33239__$1,(22),inst_33222,inst_33170);
} else {
if((state_val_33240 === (11))){
var inst_33180 = (state_33239[(16)]);
var inst_33194 = (state_33239[(10)]);
var inst_33194__$1 = cljs.core.seq.call(null,inst_33180);
var state_33239__$1 = (function (){var statearr_33263 = state_33239;
(statearr_33263[(10)] = inst_33194__$1);

return statearr_33263;
})();
if(inst_33194__$1){
var statearr_33264_33304 = state_33239__$1;
(statearr_33264_33304[(1)] = (13));

} else {
var statearr_33265_33305 = state_33239__$1;
(statearr_33265_33305[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (9))){
var inst_33216 = (state_33239[(2)]);
var state_33239__$1 = state_33239;
var statearr_33266_33306 = state_33239__$1;
(statearr_33266_33306[(2)] = inst_33216);

(statearr_33266_33306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (5))){
var inst_33177 = cljs.core.deref.call(null,mults);
var inst_33178 = cljs.core.vals.call(null,inst_33177);
var inst_33179 = cljs.core.seq.call(null,inst_33178);
var inst_33180 = inst_33179;
var inst_33181 = null;
var inst_33182 = (0);
var inst_33183 = (0);
var state_33239__$1 = (function (){var statearr_33267 = state_33239;
(statearr_33267[(12)] = inst_33183);

(statearr_33267[(14)] = inst_33182);

(statearr_33267[(15)] = inst_33181);

(statearr_33267[(16)] = inst_33180);

return statearr_33267;
})();
var statearr_33268_33307 = state_33239__$1;
(statearr_33268_33307[(2)] = null);

(statearr_33268_33307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (14))){
var state_33239__$1 = state_33239;
var statearr_33272_33308 = state_33239__$1;
(statearr_33272_33308[(2)] = null);

(statearr_33272_33308[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (16))){
var inst_33194 = (state_33239[(10)]);
var inst_33198 = cljs.core.chunk_first.call(null,inst_33194);
var inst_33199 = cljs.core.chunk_rest.call(null,inst_33194);
var inst_33200 = cljs.core.count.call(null,inst_33198);
var inst_33180 = inst_33199;
var inst_33181 = inst_33198;
var inst_33182 = inst_33200;
var inst_33183 = (0);
var state_33239__$1 = (function (){var statearr_33273 = state_33239;
(statearr_33273[(12)] = inst_33183);

(statearr_33273[(14)] = inst_33182);

(statearr_33273[(15)] = inst_33181);

(statearr_33273[(16)] = inst_33180);

return statearr_33273;
})();
var statearr_33274_33309 = state_33239__$1;
(statearr_33274_33309[(2)] = null);

(statearr_33274_33309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (10))){
var inst_33183 = (state_33239[(12)]);
var inst_33182 = (state_33239[(14)]);
var inst_33181 = (state_33239[(15)]);
var inst_33180 = (state_33239[(16)]);
var inst_33188 = cljs.core._nth.call(null,inst_33181,inst_33183);
var inst_33189 = cljs.core.async.muxch_STAR_.call(null,inst_33188);
var inst_33190 = cljs.core.async.close_BANG_.call(null,inst_33189);
var inst_33191 = (inst_33183 + (1));
var tmp33269 = inst_33182;
var tmp33270 = inst_33181;
var tmp33271 = inst_33180;
var inst_33180__$1 = tmp33271;
var inst_33181__$1 = tmp33270;
var inst_33182__$1 = tmp33269;
var inst_33183__$1 = inst_33191;
var state_33239__$1 = (function (){var statearr_33275 = state_33239;
(statearr_33275[(12)] = inst_33183__$1);

(statearr_33275[(14)] = inst_33182__$1);

(statearr_33275[(15)] = inst_33181__$1);

(statearr_33275[(16)] = inst_33180__$1);

(statearr_33275[(17)] = inst_33190);

return statearr_33275;
})();
var statearr_33276_33310 = state_33239__$1;
(statearr_33276_33310[(2)] = null);

(statearr_33276_33310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (18))){
var inst_33209 = (state_33239[(2)]);
var state_33239__$1 = state_33239;
var statearr_33277_33311 = state_33239__$1;
(statearr_33277_33311[(2)] = inst_33209);

(statearr_33277_33311[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (8))){
var inst_33183 = (state_33239[(12)]);
var inst_33182 = (state_33239[(14)]);
var inst_33185 = (inst_33183 < inst_33182);
var inst_33186 = inst_33185;
var state_33239__$1 = state_33239;
if(cljs.core.truth_(inst_33186)){
var statearr_33278_33312 = state_33239__$1;
(statearr_33278_33312[(1)] = (10));

} else {
var statearr_33279_33313 = state_33239__$1;
(statearr_33279_33313[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_33280 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33280[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_33280[(1)] = (1));

return statearr_33280;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_33239){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_33239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e33281){if((e33281 instanceof Object)){
var ex__31947__auto__ = e33281;
var statearr_33282_33314 = state_33239;
(statearr_33282_33314[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33315 = state_33239;
state_33239 = G__33315;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_33239){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_33239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
})();
var state__32040__auto__ = (function (){var statearr_33283 = f__32039__auto__.call(null);
(statearr_33283[(6)] = c__32038__auto___33285);

return statearr_33283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32040__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33317 = arguments.length;
switch (G__33317) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

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
var G__33320 = arguments.length;
switch (G__33320) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__33323 = arguments.length;
switch (G__33323) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__32038__auto___33390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32039__auto__ = (function (){var switch__31943__auto__ = (function (state_33362){
var state_val_33363 = (state_33362[(1)]);
if((state_val_33363 === (7))){
var state_33362__$1 = state_33362;
var statearr_33364_33391 = state_33362__$1;
(statearr_33364_33391[(2)] = null);

(statearr_33364_33391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33363 === (1))){
var state_33362__$1 = state_33362;
var statearr_33365_33392 = state_33362__$1;
(statearr_33365_33392[(2)] = null);

(statearr_33365_33392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33363 === (4))){
var inst_33326 = (state_33362[(7)]);
var inst_33328 = (inst_33326 < cnt);
var state_33362__$1 = state_33362;
if(cljs.core.truth_(inst_33328)){
var statearr_33366_33393 = state_33362__$1;
(statearr_33366_33393[(1)] = (6));

} else {
var statearr_33367_33394 = state_33362__$1;
(statearr_33367_33394[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33363 === (15))){
var inst_33358 = (state_33362[(2)]);
var state_33362__$1 = state_33362;
var statearr_33368_33395 = state_33362__$1;
(statearr_33368_33395[(2)] = inst_33358);

(statearr_33368_33395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33363 === (13))){
var inst_33351 = cljs.core.async.close_BANG_.call(null,out);
var state_33362__$1 = state_33362;
var statearr_33369_33396 = state_33362__$1;
(statearr_33369_33396[(2)] = inst_33351);

(statearr_33369_33396[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33363 === (6))){
var state_33362__$1 = state_33362;
var statearr_33370_33397 = state_33362__$1;
(statearr_33370_33397[(2)] = null);

(statearr_33370_33397[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33363 === (3))){
var inst_33360 = (state_33362[(2)]);
var state_33362__$1 = state_33362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33362__$1,inst_33360);
} else {
if((state_val_33363 === (12))){
var inst_33348 = (state_33362[(8)]);
var inst_33348__$1 = (state_33362[(2)]);
var inst_33349 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33348__$1);
var state_33362__$1 = (function (){var statearr_33371 = state_33362;
(statearr_33371[(8)] = inst_33348__$1);

return statearr_33371;
})();
if(cljs.core.truth_(inst_33349)){
var statearr_33372_33398 = state_33362__$1;
(statearr_33372_33398[(1)] = (13));

} else {
var statearr_33373_33399 = state_33362__$1;
(statearr_33373_33399[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33363 === (2))){
var inst_33325 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33326 = (0);
var state_33362__$1 = (function (){var statearr_33374 = state_33362;
(statearr_33374[(9)] = inst_33325);

(statearr_33374[(7)] = inst_33326);

return statearr_33374;
})();
var statearr_33375_33400 = state_33362__$1;
(statearr_33375_33400[(2)] = null);

(statearr_33375_33400[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33363 === (11))){
var inst_33326 = (state_33362[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33362,(10),Object,null,(9));
var inst_33335 = chs__$1.call(null,inst_33326);
var inst_33336 = done.call(null,inst_33326);
var inst_33337 = cljs.core.async.take_BANG_.call(null,inst_33335,inst_33336);
var state_33362__$1 = state_33362;
var statearr_33376_33401 = state_33362__$1;
(statearr_33376_33401[(2)] = inst_33337);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33362__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33363 === (9))){
var inst_33326 = (state_33362[(7)]);
var inst_33339 = (state_33362[(2)]);
var inst_33340 = (inst_33326 + (1));
var inst_33326__$1 = inst_33340;
var state_33362__$1 = (function (){var statearr_33377 = state_33362;
(statearr_33377[(7)] = inst_33326__$1);

(statearr_33377[(10)] = inst_33339);

return statearr_33377;
})();
var statearr_33378_33402 = state_33362__$1;
(statearr_33378_33402[(2)] = null);

(statearr_33378_33402[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33363 === (5))){
var inst_33346 = (state_33362[(2)]);
var state_33362__$1 = (function (){var statearr_33379 = state_33362;
(statearr_33379[(11)] = inst_33346);

return statearr_33379;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33362__$1,(12),dchan);
} else {
if((state_val_33363 === (14))){
var inst_33348 = (state_33362[(8)]);
var inst_33353 = cljs.core.apply.call(null,f,inst_33348);
var state_33362__$1 = state_33362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33362__$1,(16),out,inst_33353);
} else {
if((state_val_33363 === (16))){
var inst_33355 = (state_33362[(2)]);
var state_33362__$1 = (function (){var statearr_33380 = state_33362;
(statearr_33380[(12)] = inst_33355);

return statearr_33380;
})();
var statearr_33381_33403 = state_33362__$1;
(statearr_33381_33403[(2)] = null);

(statearr_33381_33403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33363 === (10))){
var inst_33330 = (state_33362[(2)]);
var inst_33331 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33362__$1 = (function (){var statearr_33382 = state_33362;
(statearr_33382[(13)] = inst_33330);

return statearr_33382;
})();
var statearr_33383_33404 = state_33362__$1;
(statearr_33383_33404[(2)] = inst_33331);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33362__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33363 === (8))){
var inst_33344 = (state_33362[(2)]);
var state_33362__$1 = state_33362;
var statearr_33384_33405 = state_33362__$1;
(statearr_33384_33405[(2)] = inst_33344);

(statearr_33384_33405[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_33385 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33385[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_33385[(1)] = (1));

return statearr_33385;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_33362){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_33362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e33386){if((e33386 instanceof Object)){
var ex__31947__auto__ = e33386;
var statearr_33387_33406 = state_33362;
(statearr_33387_33406[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33407 = state_33362;
state_33362 = G__33407;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_33362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_33362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
})();
var state__32040__auto__ = (function (){var statearr_33388 = f__32039__auto__.call(null);
(statearr_33388[(6)] = c__32038__auto___33390);

return statearr_33388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32040__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33410 = arguments.length;
switch (G__33410) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32038__auto___33464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32039__auto__ = (function (){var switch__31943__auto__ = (function (state_33442){
var state_val_33443 = (state_33442[(1)]);
if((state_val_33443 === (7))){
var inst_33422 = (state_33442[(7)]);
var inst_33421 = (state_33442[(8)]);
var inst_33421__$1 = (state_33442[(2)]);
var inst_33422__$1 = cljs.core.nth.call(null,inst_33421__$1,(0),null);
var inst_33423 = cljs.core.nth.call(null,inst_33421__$1,(1),null);
var inst_33424 = (inst_33422__$1 == null);
var state_33442__$1 = (function (){var statearr_33444 = state_33442;
(statearr_33444[(7)] = inst_33422__$1);

(statearr_33444[(8)] = inst_33421__$1);

(statearr_33444[(9)] = inst_33423);

return statearr_33444;
})();
if(cljs.core.truth_(inst_33424)){
var statearr_33445_33465 = state_33442__$1;
(statearr_33445_33465[(1)] = (8));

} else {
var statearr_33446_33466 = state_33442__$1;
(statearr_33446_33466[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33443 === (1))){
var inst_33411 = cljs.core.vec.call(null,chs);
var inst_33412 = inst_33411;
var state_33442__$1 = (function (){var statearr_33447 = state_33442;
(statearr_33447[(10)] = inst_33412);

return statearr_33447;
})();
var statearr_33448_33467 = state_33442__$1;
(statearr_33448_33467[(2)] = null);

(statearr_33448_33467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33443 === (4))){
var inst_33412 = (state_33442[(10)]);
var state_33442__$1 = state_33442;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33442__$1,(7),inst_33412);
} else {
if((state_val_33443 === (6))){
var inst_33438 = (state_33442[(2)]);
var state_33442__$1 = state_33442;
var statearr_33449_33468 = state_33442__$1;
(statearr_33449_33468[(2)] = inst_33438);

(statearr_33449_33468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33443 === (3))){
var inst_33440 = (state_33442[(2)]);
var state_33442__$1 = state_33442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33442__$1,inst_33440);
} else {
if((state_val_33443 === (2))){
var inst_33412 = (state_33442[(10)]);
var inst_33414 = cljs.core.count.call(null,inst_33412);
var inst_33415 = (inst_33414 > (0));
var state_33442__$1 = state_33442;
if(cljs.core.truth_(inst_33415)){
var statearr_33451_33469 = state_33442__$1;
(statearr_33451_33469[(1)] = (4));

} else {
var statearr_33452_33470 = state_33442__$1;
(statearr_33452_33470[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33443 === (11))){
var inst_33412 = (state_33442[(10)]);
var inst_33431 = (state_33442[(2)]);
var tmp33450 = inst_33412;
var inst_33412__$1 = tmp33450;
var state_33442__$1 = (function (){var statearr_33453 = state_33442;
(statearr_33453[(10)] = inst_33412__$1);

(statearr_33453[(11)] = inst_33431);

return statearr_33453;
})();
var statearr_33454_33471 = state_33442__$1;
(statearr_33454_33471[(2)] = null);

(statearr_33454_33471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33443 === (9))){
var inst_33422 = (state_33442[(7)]);
var state_33442__$1 = state_33442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33442__$1,(11),out,inst_33422);
} else {
if((state_val_33443 === (5))){
var inst_33436 = cljs.core.async.close_BANG_.call(null,out);
var state_33442__$1 = state_33442;
var statearr_33455_33472 = state_33442__$1;
(statearr_33455_33472[(2)] = inst_33436);

(statearr_33455_33472[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33443 === (10))){
var inst_33434 = (state_33442[(2)]);
var state_33442__$1 = state_33442;
var statearr_33456_33473 = state_33442__$1;
(statearr_33456_33473[(2)] = inst_33434);

(statearr_33456_33473[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33443 === (8))){
var inst_33422 = (state_33442[(7)]);
var inst_33421 = (state_33442[(8)]);
var inst_33412 = (state_33442[(10)]);
var inst_33423 = (state_33442[(9)]);
var inst_33426 = (function (){var cs = inst_33412;
var vec__33417 = inst_33421;
var v = inst_33422;
var c = inst_33423;
return (function (p1__33408_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33408_SHARP_);
});
})();
var inst_33427 = cljs.core.filterv.call(null,inst_33426,inst_33412);
var inst_33412__$1 = inst_33427;
var state_33442__$1 = (function (){var statearr_33457 = state_33442;
(statearr_33457[(10)] = inst_33412__$1);

return statearr_33457;
})();
var statearr_33458_33474 = state_33442__$1;
(statearr_33458_33474[(2)] = null);

(statearr_33458_33474[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_33459 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33459[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_33459[(1)] = (1));

return statearr_33459;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_33442){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_33442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e33460){if((e33460 instanceof Object)){
var ex__31947__auto__ = e33460;
var statearr_33461_33475 = state_33442;
(statearr_33461_33475[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33476 = state_33442;
state_33442 = G__33476;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_33442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_33442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
})();
var state__32040__auto__ = (function (){var statearr_33462 = f__32039__auto__.call(null);
(statearr_33462[(6)] = c__32038__auto___33464);

return statearr_33462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32040__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

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
var G__33478 = arguments.length;
switch (G__33478) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32038__auto___33523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32039__auto__ = (function (){var switch__31943__auto__ = (function (state_33502){
var state_val_33503 = (state_33502[(1)]);
if((state_val_33503 === (7))){
var inst_33484 = (state_33502[(7)]);
var inst_33484__$1 = (state_33502[(2)]);
var inst_33485 = (inst_33484__$1 == null);
var inst_33486 = cljs.core.not.call(null,inst_33485);
var state_33502__$1 = (function (){var statearr_33504 = state_33502;
(statearr_33504[(7)] = inst_33484__$1);

return statearr_33504;
})();
if(inst_33486){
var statearr_33505_33524 = state_33502__$1;
(statearr_33505_33524[(1)] = (8));

} else {
var statearr_33506_33525 = state_33502__$1;
(statearr_33506_33525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (1))){
var inst_33479 = (0);
var state_33502__$1 = (function (){var statearr_33507 = state_33502;
(statearr_33507[(8)] = inst_33479);

return statearr_33507;
})();
var statearr_33508_33526 = state_33502__$1;
(statearr_33508_33526[(2)] = null);

(statearr_33508_33526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (4))){
var state_33502__$1 = state_33502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33502__$1,(7),ch);
} else {
if((state_val_33503 === (6))){
var inst_33497 = (state_33502[(2)]);
var state_33502__$1 = state_33502;
var statearr_33509_33527 = state_33502__$1;
(statearr_33509_33527[(2)] = inst_33497);

(statearr_33509_33527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (3))){
var inst_33499 = (state_33502[(2)]);
var inst_33500 = cljs.core.async.close_BANG_.call(null,out);
var state_33502__$1 = (function (){var statearr_33510 = state_33502;
(statearr_33510[(9)] = inst_33499);

return statearr_33510;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33502__$1,inst_33500);
} else {
if((state_val_33503 === (2))){
var inst_33479 = (state_33502[(8)]);
var inst_33481 = (inst_33479 < n);
var state_33502__$1 = state_33502;
if(cljs.core.truth_(inst_33481)){
var statearr_33511_33528 = state_33502__$1;
(statearr_33511_33528[(1)] = (4));

} else {
var statearr_33512_33529 = state_33502__$1;
(statearr_33512_33529[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (11))){
var inst_33479 = (state_33502[(8)]);
var inst_33489 = (state_33502[(2)]);
var inst_33490 = (inst_33479 + (1));
var inst_33479__$1 = inst_33490;
var state_33502__$1 = (function (){var statearr_33513 = state_33502;
(statearr_33513[(8)] = inst_33479__$1);

(statearr_33513[(10)] = inst_33489);

return statearr_33513;
})();
var statearr_33514_33530 = state_33502__$1;
(statearr_33514_33530[(2)] = null);

(statearr_33514_33530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (9))){
var state_33502__$1 = state_33502;
var statearr_33515_33531 = state_33502__$1;
(statearr_33515_33531[(2)] = null);

(statearr_33515_33531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (5))){
var state_33502__$1 = state_33502;
var statearr_33516_33532 = state_33502__$1;
(statearr_33516_33532[(2)] = null);

(statearr_33516_33532[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (10))){
var inst_33494 = (state_33502[(2)]);
var state_33502__$1 = state_33502;
var statearr_33517_33533 = state_33502__$1;
(statearr_33517_33533[(2)] = inst_33494);

(statearr_33517_33533[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (8))){
var inst_33484 = (state_33502[(7)]);
var state_33502__$1 = state_33502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33502__$1,(11),out,inst_33484);
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
});
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_33518 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33518[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_33518[(1)] = (1));

return statearr_33518;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_33502){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_33502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e33519){if((e33519 instanceof Object)){
var ex__31947__auto__ = e33519;
var statearr_33520_33534 = state_33502;
(statearr_33520_33534[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33535 = state_33502;
state_33502 = G__33535;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_33502){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_33502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
})();
var state__32040__auto__ = (function (){var statearr_33521 = f__32039__auto__.call(null);
(statearr_33521[(6)] = c__32038__auto___33523);

return statearr_33521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32040__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33537 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33537 = (function (f,ch,meta33538){
this.f = f;
this.ch = ch;
this.meta33538 = meta33538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33539,meta33538__$1){
var self__ = this;
var _33539__$1 = this;
return (new cljs.core.async.t_cljs$core$async33537(self__.f,self__.ch,meta33538__$1));
}));

(cljs.core.async.t_cljs$core$async33537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33539){
var self__ = this;
var _33539__$1 = this;
return self__.meta33538;
}));

(cljs.core.async.t_cljs$core$async33537.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33537.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async33537.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async33537.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33537.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33540 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33540 = (function (f,ch,meta33538,_,fn1,meta33541){
this.f = f;
this.ch = ch;
this.meta33538 = meta33538;
this._ = _;
this.fn1 = fn1;
this.meta33541 = meta33541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33542,meta33541__$1){
var self__ = this;
var _33542__$1 = this;
return (new cljs.core.async.t_cljs$core$async33540(self__.f,self__.ch,self__.meta33538,self__._,self__.fn1,meta33541__$1));
}));

(cljs.core.async.t_cljs$core$async33540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33542){
var self__ = this;
var _33542__$1 = this;
return self__.meta33541;
}));

(cljs.core.async.t_cljs$core$async33540.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33540.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33540.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33540.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__33536_SHARP_){
return f1.call(null,(((p1__33536_SHARP_ == null))?null:self__.f.call(null,p1__33536_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async33540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33538","meta33538",1358891639,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33537","cljs.core.async/t_cljs$core$async33537",-2079306117,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33541","meta33541",-1478113748,null)], null);
}));

(cljs.core.async.t_cljs$core$async33540.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33540");

(cljs.core.async.t_cljs$core$async33540.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async33540");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33540.
 */
cljs.core.async.__GT_t_cljs$core$async33540 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33540(f__$1,ch__$1,meta33538__$1,___$2,fn1__$1,meta33541){
return (new cljs.core.async.t_cljs$core$async33540(f__$1,ch__$1,meta33538__$1,___$2,fn1__$1,meta33541));
});

}

return (new cljs.core.async.t_cljs$core$async33540(self__.f,self__.ch,self__.meta33538,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33537.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33537.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33538","meta33538",1358891639,null)], null);
}));

(cljs.core.async.t_cljs$core$async33537.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33537");

(cljs.core.async.t_cljs$core$async33537.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async33537");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33537.
 */
cljs.core.async.__GT_t_cljs$core$async33537 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33537(f__$1,ch__$1,meta33538){
return (new cljs.core.async.t_cljs$core$async33537(f__$1,ch__$1,meta33538));
});

}

return (new cljs.core.async.t_cljs$core$async33537(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33543 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33543 = (function (f,ch,meta33544){
this.f = f;
this.ch = ch;
this.meta33544 = meta33544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33545,meta33544__$1){
var self__ = this;
var _33545__$1 = this;
return (new cljs.core.async.t_cljs$core$async33543(self__.f,self__.ch,meta33544__$1));
}));

(cljs.core.async.t_cljs$core$async33543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33545){
var self__ = this;
var _33545__$1 = this;
return self__.meta33544;
}));

(cljs.core.async.t_cljs$core$async33543.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33543.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async33543.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33543.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33543.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33543.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async33543.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33544","meta33544",-1716153553,null)], null);
}));

(cljs.core.async.t_cljs$core$async33543.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33543.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33543");

(cljs.core.async.t_cljs$core$async33543.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async33543");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33543.
 */
cljs.core.async.__GT_t_cljs$core$async33543 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33543(f__$1,ch__$1,meta33544){
return (new cljs.core.async.t_cljs$core$async33543(f__$1,ch__$1,meta33544));
});

}

return (new cljs.core.async.t_cljs$core$async33543(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33546 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33546 = (function (p,ch,meta33547){
this.p = p;
this.ch = ch;
this.meta33547 = meta33547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33548,meta33547__$1){
var self__ = this;
var _33548__$1 = this;
return (new cljs.core.async.t_cljs$core$async33546(self__.p,self__.ch,meta33547__$1));
}));

(cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33548){
var self__ = this;
var _33548__$1 = this;
return self__.meta33547;
}));

(cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33546.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33547","meta33547",-695311653,null)], null);
}));

(cljs.core.async.t_cljs$core$async33546.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33546.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33546");

(cljs.core.async.t_cljs$core$async33546.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async33546");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33546.
 */
cljs.core.async.__GT_t_cljs$core$async33546 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33546(p__$1,ch__$1,meta33547){
return (new cljs.core.async.t_cljs$core$async33546(p__$1,ch__$1,meta33547));
});

}

return (new cljs.core.async.t_cljs$core$async33546(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33550 = arguments.length;
switch (G__33550) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32038__auto___33590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32039__auto__ = (function (){var switch__31943__auto__ = (function (state_33571){
var state_val_33572 = (state_33571[(1)]);
if((state_val_33572 === (7))){
var inst_33567 = (state_33571[(2)]);
var state_33571__$1 = state_33571;
var statearr_33573_33591 = state_33571__$1;
(statearr_33573_33591[(2)] = inst_33567);

(statearr_33573_33591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33572 === (1))){
var state_33571__$1 = state_33571;
var statearr_33574_33592 = state_33571__$1;
(statearr_33574_33592[(2)] = null);

(statearr_33574_33592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33572 === (4))){
var inst_33553 = (state_33571[(7)]);
var inst_33553__$1 = (state_33571[(2)]);
var inst_33554 = (inst_33553__$1 == null);
var state_33571__$1 = (function (){var statearr_33575 = state_33571;
(statearr_33575[(7)] = inst_33553__$1);

return statearr_33575;
})();
if(cljs.core.truth_(inst_33554)){
var statearr_33576_33593 = state_33571__$1;
(statearr_33576_33593[(1)] = (5));

} else {
var statearr_33577_33594 = state_33571__$1;
(statearr_33577_33594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33572 === (6))){
var inst_33553 = (state_33571[(7)]);
var inst_33558 = p.call(null,inst_33553);
var state_33571__$1 = state_33571;
if(cljs.core.truth_(inst_33558)){
var statearr_33578_33595 = state_33571__$1;
(statearr_33578_33595[(1)] = (8));

} else {
var statearr_33579_33596 = state_33571__$1;
(statearr_33579_33596[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33572 === (3))){
var inst_33569 = (state_33571[(2)]);
var state_33571__$1 = state_33571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33571__$1,inst_33569);
} else {
if((state_val_33572 === (2))){
var state_33571__$1 = state_33571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33571__$1,(4),ch);
} else {
if((state_val_33572 === (11))){
var inst_33561 = (state_33571[(2)]);
var state_33571__$1 = state_33571;
var statearr_33580_33597 = state_33571__$1;
(statearr_33580_33597[(2)] = inst_33561);

(statearr_33580_33597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33572 === (9))){
var state_33571__$1 = state_33571;
var statearr_33581_33598 = state_33571__$1;
(statearr_33581_33598[(2)] = null);

(statearr_33581_33598[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33572 === (5))){
var inst_33556 = cljs.core.async.close_BANG_.call(null,out);
var state_33571__$1 = state_33571;
var statearr_33582_33599 = state_33571__$1;
(statearr_33582_33599[(2)] = inst_33556);

(statearr_33582_33599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33572 === (10))){
var inst_33564 = (state_33571[(2)]);
var state_33571__$1 = (function (){var statearr_33583 = state_33571;
(statearr_33583[(8)] = inst_33564);

return statearr_33583;
})();
var statearr_33584_33600 = state_33571__$1;
(statearr_33584_33600[(2)] = null);

(statearr_33584_33600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33572 === (8))){
var inst_33553 = (state_33571[(7)]);
var state_33571__$1 = state_33571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33571__$1,(11),out,inst_33553);
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
});
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_33585 = [null,null,null,null,null,null,null,null,null];
(statearr_33585[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_33585[(1)] = (1));

return statearr_33585;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_33571){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_33571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e33586){if((e33586 instanceof Object)){
var ex__31947__auto__ = e33586;
var statearr_33587_33601 = state_33571;
(statearr_33587_33601[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33602 = state_33571;
state_33571 = G__33602;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_33571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_33571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
})();
var state__32040__auto__ = (function (){var statearr_33588 = f__32039__auto__.call(null);
(statearr_33588[(6)] = c__32038__auto___33590);

return statearr_33588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32040__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33604 = arguments.length;
switch (G__33604) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32039__auto__ = (function (){var switch__31943__auto__ = (function (state_33667){
var state_val_33668 = (state_33667[(1)]);
if((state_val_33668 === (7))){
var inst_33663 = (state_33667[(2)]);
var state_33667__$1 = state_33667;
var statearr_33669_33707 = state_33667__$1;
(statearr_33669_33707[(2)] = inst_33663);

(statearr_33669_33707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33668 === (20))){
var inst_33633 = (state_33667[(7)]);
var inst_33644 = (state_33667[(2)]);
var inst_33645 = cljs.core.next.call(null,inst_33633);
var inst_33619 = inst_33645;
var inst_33620 = null;
var inst_33621 = (0);
var inst_33622 = (0);
var state_33667__$1 = (function (){var statearr_33670 = state_33667;
(statearr_33670[(8)] = inst_33619);

(statearr_33670[(9)] = inst_33622);

(statearr_33670[(10)] = inst_33644);

(statearr_33670[(11)] = inst_33620);

(statearr_33670[(12)] = inst_33621);

return statearr_33670;
})();
var statearr_33671_33708 = state_33667__$1;
(statearr_33671_33708[(2)] = null);

(statearr_33671_33708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33668 === (1))){
var state_33667__$1 = state_33667;
var statearr_33672_33709 = state_33667__$1;
(statearr_33672_33709[(2)] = null);

(statearr_33672_33709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33668 === (4))){
var inst_33608 = (state_33667[(13)]);
var inst_33608__$1 = (state_33667[(2)]);
var inst_33609 = (inst_33608__$1 == null);
var state_33667__$1 = (function (){var statearr_33673 = state_33667;
(statearr_33673[(13)] = inst_33608__$1);

return statearr_33673;
})();
if(cljs.core.truth_(inst_33609)){
var statearr_33674_33710 = state_33667__$1;
(statearr_33674_33710[(1)] = (5));

} else {
var statearr_33675_33711 = state_33667__$1;
(statearr_33675_33711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33668 === (15))){
var state_33667__$1 = state_33667;
var statearr_33679_33712 = state_33667__$1;
(statearr_33679_33712[(2)] = null);

(statearr_33679_33712[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33668 === (21))){
var state_33667__$1 = state_33667;
var statearr_33680_33713 = state_33667__$1;
(statearr_33680_33713[(2)] = null);

(statearr_33680_33713[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33668 === (13))){
var inst_33619 = (state_33667[(8)]);
var inst_33622 = (state_33667[(9)]);
var inst_33620 = (state_33667[(11)]);
var inst_33621 = (state_33667[(12)]);
var inst_33629 = (state_33667[(2)]);
var inst_33630 = (inst_33622 + (1));
var tmp33676 = inst_33619;
var tmp33677 = inst_33620;
var tmp33678 = inst_33621;
var inst_33619__$1 = tmp33676;
var inst_33620__$1 = tmp33677;
var inst_33621__$1 = tmp33678;
var inst_33622__$1 = inst_33630;
var state_33667__$1 = (function (){var statearr_33681 = state_33667;
(statearr_33681[(8)] = inst_33619__$1);

(statearr_33681[(9)] = inst_33622__$1);

(statearr_33681[(14)] = inst_33629);

(statearr_33681[(11)] = inst_33620__$1);

(statearr_33681[(12)] = inst_33621__$1);

return statearr_33681;
})();
var statearr_33682_33714 = state_33667__$1;
(statearr_33682_33714[(2)] = null);

(statearr_33682_33714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33668 === (22))){
var state_33667__$1 = state_33667;
var statearr_33683_33715 = state_33667__$1;
(statearr_33683_33715[(2)] = null);

(statearr_33683_33715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33668 === (6))){
var inst_33608 = (state_33667[(13)]);
var inst_33617 = f.call(null,inst_33608);
var inst_33618 = cljs.core.seq.call(null,inst_33617);
var inst_33619 = inst_33618;
var inst_33620 = null;
var inst_33621 = (0);
var inst_33622 = (0);
var state_33667__$1 = (function (){var statearr_33684 = state_33667;
(statearr_33684[(8)] = inst_33619);

(statearr_33684[(9)] = inst_33622);

(statearr_33684[(11)] = inst_33620);

(statearr_33684[(12)] = inst_33621);

return statearr_33684;
})();
var statearr_33685_33716 = state_33667__$1;
(statearr_33685_33716[(2)] = null);

(statearr_33685_33716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33668 === (17))){
var inst_33633 = (state_33667[(7)]);
var inst_33637 = cljs.core.chunk_first.call(null,inst_33633);
var inst_33638 = cljs.core.chunk_rest.call(null,inst_33633);
var inst_33639 = cljs.core.count.call(null,inst_33637);
var inst_33619 = inst_33638;
var inst_33620 = inst_33637;
var inst_33621 = inst_33639;
var inst_33622 = (0);
var state_33667__$1 = (function (){var statearr_33686 = state_33667;
(statearr_33686[(8)] = inst_33619);

(statearr_33686[(9)] = inst_33622);

(statearr_33686[(11)] = inst_33620);

(statearr_33686[(12)] = inst_33621);

return statearr_33686;
})();
var statearr_33687_33717 = state_33667__$1;
(statearr_33687_33717[(2)] = null);

(statearr_33687_33717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33668 === (3))){
var inst_33665 = (state_33667[(2)]);
var state_33667__$1 = state_33667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33667__$1,inst_33665);
} else {
if((state_val_33668 === (12))){
var inst_33653 = (state_33667[(2)]);
var state_33667__$1 = state_33667;
var statearr_33688_33718 = state_33667__$1;
(statearr_33688_33718[(2)] = inst_33653);

(statearr_33688_33718[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33668 === (2))){
var state_33667__$1 = state_33667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33667__$1,(4),in$);
} else {
if((state_val_33668 === (23))){
var inst_33661 = (state_33667[(2)]);
var state_33667__$1 = state_33667;
var statearr_33689_33719 = state_33667__$1;
(statearr_33689_33719[(2)] = inst_33661);

(statearr_33689_33719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33668 === (19))){
var inst_33648 = (state_33667[(2)]);
var state_33667__$1 = state_33667;
var statearr_33690_33720 = state_33667__$1;
(statearr_33690_33720[(2)] = inst_33648);

(statearr_33690_33720[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33668 === (11))){
var inst_33619 = (state_33667[(8)]);
var inst_33633 = (state_33667[(7)]);
var inst_33633__$1 = cljs.core.seq.call(null,inst_33619);
var state_33667__$1 = (function (){var statearr_33691 = state_33667;
(statearr_33691[(7)] = inst_33633__$1);

return statearr_33691;
})();
if(inst_33633__$1){
var statearr_33692_33721 = state_33667__$1;
(statearr_33692_33721[(1)] = (14));

} else {
var statearr_33693_33722 = state_33667__$1;
(statearr_33693_33722[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33668 === (9))){
var inst_33655 = (state_33667[(2)]);
var inst_33656 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33667__$1 = (function (){var statearr_33694 = state_33667;
(statearr_33694[(15)] = inst_33655);

return statearr_33694;
})();
if(cljs.core.truth_(inst_33656)){
var statearr_33695_33723 = state_33667__$1;
(statearr_33695_33723[(1)] = (21));

} else {
var statearr_33696_33724 = state_33667__$1;
(statearr_33696_33724[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33668 === (5))){
var inst_33611 = cljs.core.async.close_BANG_.call(null,out);
var state_33667__$1 = state_33667;
var statearr_33697_33725 = state_33667__$1;
(statearr_33697_33725[(2)] = inst_33611);

(statearr_33697_33725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33668 === (14))){
var inst_33633 = (state_33667[(7)]);
var inst_33635 = cljs.core.chunked_seq_QMARK_.call(null,inst_33633);
var state_33667__$1 = state_33667;
if(inst_33635){
var statearr_33698_33726 = state_33667__$1;
(statearr_33698_33726[(1)] = (17));

} else {
var statearr_33699_33727 = state_33667__$1;
(statearr_33699_33727[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33668 === (16))){
var inst_33651 = (state_33667[(2)]);
var state_33667__$1 = state_33667;
var statearr_33700_33728 = state_33667__$1;
(statearr_33700_33728[(2)] = inst_33651);

(statearr_33700_33728[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33668 === (10))){
var inst_33622 = (state_33667[(9)]);
var inst_33620 = (state_33667[(11)]);
var inst_33627 = cljs.core._nth.call(null,inst_33620,inst_33622);
var state_33667__$1 = state_33667;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33667__$1,(13),out,inst_33627);
} else {
if((state_val_33668 === (18))){
var inst_33633 = (state_33667[(7)]);
var inst_33642 = cljs.core.first.call(null,inst_33633);
var state_33667__$1 = state_33667;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33667__$1,(20),out,inst_33642);
} else {
if((state_val_33668 === (8))){
var inst_33622 = (state_33667[(9)]);
var inst_33621 = (state_33667[(12)]);
var inst_33624 = (inst_33622 < inst_33621);
var inst_33625 = inst_33624;
var state_33667__$1 = state_33667;
if(cljs.core.truth_(inst_33625)){
var statearr_33701_33729 = state_33667__$1;
(statearr_33701_33729[(1)] = (10));

} else {
var statearr_33702_33730 = state_33667__$1;
(statearr_33702_33730[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31944__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31944__auto____0 = (function (){
var statearr_33703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33703[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31944__auto__);

(statearr_33703[(1)] = (1));

return statearr_33703;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31944__auto____1 = (function (state_33667){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_33667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e33704){if((e33704 instanceof Object)){
var ex__31947__auto__ = e33704;
var statearr_33705_33731 = state_33667;
(statearr_33705_33731[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33732 = state_33667;
state_33667 = G__33732;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31944__auto__ = function(state_33667){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31944__auto____1.call(this,state_33667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31944__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31944__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31944__auto__;
})()
})();
var state__32040__auto__ = (function (){var statearr_33706 = f__32039__auto__.call(null);
(statearr_33706[(6)] = c__32038__auto__);

return statearr_33706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32040__auto__);
}));

return c__32038__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33734 = arguments.length;
switch (G__33734) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33737 = arguments.length;
switch (G__33737) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33740 = arguments.length;
switch (G__33740) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32038__auto___33787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32039__auto__ = (function (){var switch__31943__auto__ = (function (state_33764){
var state_val_33765 = (state_33764[(1)]);
if((state_val_33765 === (7))){
var inst_33759 = (state_33764[(2)]);
var state_33764__$1 = state_33764;
var statearr_33766_33788 = state_33764__$1;
(statearr_33766_33788[(2)] = inst_33759);

(statearr_33766_33788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33765 === (1))){
var inst_33741 = null;
var state_33764__$1 = (function (){var statearr_33767 = state_33764;
(statearr_33767[(7)] = inst_33741);

return statearr_33767;
})();
var statearr_33768_33789 = state_33764__$1;
(statearr_33768_33789[(2)] = null);

(statearr_33768_33789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33765 === (4))){
var inst_33744 = (state_33764[(8)]);
var inst_33744__$1 = (state_33764[(2)]);
var inst_33745 = (inst_33744__$1 == null);
var inst_33746 = cljs.core.not.call(null,inst_33745);
var state_33764__$1 = (function (){var statearr_33769 = state_33764;
(statearr_33769[(8)] = inst_33744__$1);

return statearr_33769;
})();
if(inst_33746){
var statearr_33770_33790 = state_33764__$1;
(statearr_33770_33790[(1)] = (5));

} else {
var statearr_33771_33791 = state_33764__$1;
(statearr_33771_33791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33765 === (6))){
var state_33764__$1 = state_33764;
var statearr_33772_33792 = state_33764__$1;
(statearr_33772_33792[(2)] = null);

(statearr_33772_33792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33765 === (3))){
var inst_33761 = (state_33764[(2)]);
var inst_33762 = cljs.core.async.close_BANG_.call(null,out);
var state_33764__$1 = (function (){var statearr_33773 = state_33764;
(statearr_33773[(9)] = inst_33761);

return statearr_33773;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33764__$1,inst_33762);
} else {
if((state_val_33765 === (2))){
var state_33764__$1 = state_33764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33764__$1,(4),ch);
} else {
if((state_val_33765 === (11))){
var inst_33744 = (state_33764[(8)]);
var inst_33753 = (state_33764[(2)]);
var inst_33741 = inst_33744;
var state_33764__$1 = (function (){var statearr_33774 = state_33764;
(statearr_33774[(7)] = inst_33741);

(statearr_33774[(10)] = inst_33753);

return statearr_33774;
})();
var statearr_33775_33793 = state_33764__$1;
(statearr_33775_33793[(2)] = null);

(statearr_33775_33793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33765 === (9))){
var inst_33744 = (state_33764[(8)]);
var state_33764__$1 = state_33764;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33764__$1,(11),out,inst_33744);
} else {
if((state_val_33765 === (5))){
var inst_33741 = (state_33764[(7)]);
var inst_33744 = (state_33764[(8)]);
var inst_33748 = cljs.core._EQ_.call(null,inst_33744,inst_33741);
var state_33764__$1 = state_33764;
if(inst_33748){
var statearr_33777_33794 = state_33764__$1;
(statearr_33777_33794[(1)] = (8));

} else {
var statearr_33778_33795 = state_33764__$1;
(statearr_33778_33795[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33765 === (10))){
var inst_33756 = (state_33764[(2)]);
var state_33764__$1 = state_33764;
var statearr_33779_33796 = state_33764__$1;
(statearr_33779_33796[(2)] = inst_33756);

(statearr_33779_33796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33765 === (8))){
var inst_33741 = (state_33764[(7)]);
var tmp33776 = inst_33741;
var inst_33741__$1 = tmp33776;
var state_33764__$1 = (function (){var statearr_33780 = state_33764;
(statearr_33780[(7)] = inst_33741__$1);

return statearr_33780;
})();
var statearr_33781_33797 = state_33764__$1;
(statearr_33781_33797[(2)] = null);

(statearr_33781_33797[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_33782 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33782[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_33782[(1)] = (1));

return statearr_33782;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_33764){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_33764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e33783){if((e33783 instanceof Object)){
var ex__31947__auto__ = e33783;
var statearr_33784_33798 = state_33764;
(statearr_33784_33798[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33799 = state_33764;
state_33764 = G__33799;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_33764){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_33764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
})();
var state__32040__auto__ = (function (){var statearr_33785 = f__32039__auto__.call(null);
(statearr_33785[(6)] = c__32038__auto___33787);

return statearr_33785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32040__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33801 = arguments.length;
switch (G__33801) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32038__auto___33867 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32039__auto__ = (function (){var switch__31943__auto__ = (function (state_33839){
var state_val_33840 = (state_33839[(1)]);
if((state_val_33840 === (7))){
var inst_33835 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
var statearr_33841_33868 = state_33839__$1;
(statearr_33841_33868[(2)] = inst_33835);

(statearr_33841_33868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (1))){
var inst_33802 = (new Array(n));
var inst_33803 = inst_33802;
var inst_33804 = (0);
var state_33839__$1 = (function (){var statearr_33842 = state_33839;
(statearr_33842[(7)] = inst_33803);

(statearr_33842[(8)] = inst_33804);

return statearr_33842;
})();
var statearr_33843_33869 = state_33839__$1;
(statearr_33843_33869[(2)] = null);

(statearr_33843_33869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (4))){
var inst_33807 = (state_33839[(9)]);
var inst_33807__$1 = (state_33839[(2)]);
var inst_33808 = (inst_33807__$1 == null);
var inst_33809 = cljs.core.not.call(null,inst_33808);
var state_33839__$1 = (function (){var statearr_33844 = state_33839;
(statearr_33844[(9)] = inst_33807__$1);

return statearr_33844;
})();
if(inst_33809){
var statearr_33845_33870 = state_33839__$1;
(statearr_33845_33870[(1)] = (5));

} else {
var statearr_33846_33871 = state_33839__$1;
(statearr_33846_33871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (15))){
var inst_33829 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
var statearr_33847_33872 = state_33839__$1;
(statearr_33847_33872[(2)] = inst_33829);

(statearr_33847_33872[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (13))){
var state_33839__$1 = state_33839;
var statearr_33848_33873 = state_33839__$1;
(statearr_33848_33873[(2)] = null);

(statearr_33848_33873[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (6))){
var inst_33804 = (state_33839[(8)]);
var inst_33825 = (inst_33804 > (0));
var state_33839__$1 = state_33839;
if(cljs.core.truth_(inst_33825)){
var statearr_33849_33874 = state_33839__$1;
(statearr_33849_33874[(1)] = (12));

} else {
var statearr_33850_33875 = state_33839__$1;
(statearr_33850_33875[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (3))){
var inst_33837 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33839__$1,inst_33837);
} else {
if((state_val_33840 === (12))){
var inst_33803 = (state_33839[(7)]);
var inst_33827 = cljs.core.vec.call(null,inst_33803);
var state_33839__$1 = state_33839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33839__$1,(15),out,inst_33827);
} else {
if((state_val_33840 === (2))){
var state_33839__$1 = state_33839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33839__$1,(4),ch);
} else {
if((state_val_33840 === (11))){
var inst_33819 = (state_33839[(2)]);
var inst_33820 = (new Array(n));
var inst_33803 = inst_33820;
var inst_33804 = (0);
var state_33839__$1 = (function (){var statearr_33851 = state_33839;
(statearr_33851[(7)] = inst_33803);

(statearr_33851[(10)] = inst_33819);

(statearr_33851[(8)] = inst_33804);

return statearr_33851;
})();
var statearr_33852_33876 = state_33839__$1;
(statearr_33852_33876[(2)] = null);

(statearr_33852_33876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (9))){
var inst_33803 = (state_33839[(7)]);
var inst_33817 = cljs.core.vec.call(null,inst_33803);
var state_33839__$1 = state_33839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33839__$1,(11),out,inst_33817);
} else {
if((state_val_33840 === (5))){
var inst_33807 = (state_33839[(9)]);
var inst_33812 = (state_33839[(11)]);
var inst_33803 = (state_33839[(7)]);
var inst_33804 = (state_33839[(8)]);
var inst_33811 = (inst_33803[inst_33804] = inst_33807);
var inst_33812__$1 = (inst_33804 + (1));
var inst_33813 = (inst_33812__$1 < n);
var state_33839__$1 = (function (){var statearr_33853 = state_33839;
(statearr_33853[(12)] = inst_33811);

(statearr_33853[(11)] = inst_33812__$1);

return statearr_33853;
})();
if(cljs.core.truth_(inst_33813)){
var statearr_33854_33877 = state_33839__$1;
(statearr_33854_33877[(1)] = (8));

} else {
var statearr_33855_33878 = state_33839__$1;
(statearr_33855_33878[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (14))){
var inst_33832 = (state_33839[(2)]);
var inst_33833 = cljs.core.async.close_BANG_.call(null,out);
var state_33839__$1 = (function (){var statearr_33857 = state_33839;
(statearr_33857[(13)] = inst_33832);

return statearr_33857;
})();
var statearr_33858_33879 = state_33839__$1;
(statearr_33858_33879[(2)] = inst_33833);

(statearr_33858_33879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (10))){
var inst_33823 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
var statearr_33859_33880 = state_33839__$1;
(statearr_33859_33880[(2)] = inst_33823);

(statearr_33859_33880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (8))){
var inst_33812 = (state_33839[(11)]);
var inst_33803 = (state_33839[(7)]);
var tmp33856 = inst_33803;
var inst_33803__$1 = tmp33856;
var inst_33804 = inst_33812;
var state_33839__$1 = (function (){var statearr_33860 = state_33839;
(statearr_33860[(7)] = inst_33803__$1);

(statearr_33860[(8)] = inst_33804);

return statearr_33860;
})();
var statearr_33861_33881 = state_33839__$1;
(statearr_33861_33881[(2)] = null);

(statearr_33861_33881[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_33862 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33862[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_33862[(1)] = (1));

return statearr_33862;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_33839){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_33839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e33863){if((e33863 instanceof Object)){
var ex__31947__auto__ = e33863;
var statearr_33864_33882 = state_33839;
(statearr_33864_33882[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33883 = state_33839;
state_33839 = G__33883;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_33839){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_33839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
})();
var state__32040__auto__ = (function (){var statearr_33865 = f__32039__auto__.call(null);
(statearr_33865[(6)] = c__32038__auto___33867);

return statearr_33865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32040__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33885 = arguments.length;
switch (G__33885) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32038__auto___33955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32039__auto__ = (function (){var switch__31943__auto__ = (function (state_33927){
var state_val_33928 = (state_33927[(1)]);
if((state_val_33928 === (7))){
var inst_33923 = (state_33927[(2)]);
var state_33927__$1 = state_33927;
var statearr_33929_33956 = state_33927__$1;
(statearr_33929_33956[(2)] = inst_33923);

(statearr_33929_33956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (1))){
var inst_33886 = [];
var inst_33887 = inst_33886;
var inst_33888 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33927__$1 = (function (){var statearr_33930 = state_33927;
(statearr_33930[(7)] = inst_33887);

(statearr_33930[(8)] = inst_33888);

return statearr_33930;
})();
var statearr_33931_33957 = state_33927__$1;
(statearr_33931_33957[(2)] = null);

(statearr_33931_33957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (4))){
var inst_33891 = (state_33927[(9)]);
var inst_33891__$1 = (state_33927[(2)]);
var inst_33892 = (inst_33891__$1 == null);
var inst_33893 = cljs.core.not.call(null,inst_33892);
var state_33927__$1 = (function (){var statearr_33932 = state_33927;
(statearr_33932[(9)] = inst_33891__$1);

return statearr_33932;
})();
if(inst_33893){
var statearr_33933_33958 = state_33927__$1;
(statearr_33933_33958[(1)] = (5));

} else {
var statearr_33934_33959 = state_33927__$1;
(statearr_33934_33959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (15))){
var inst_33917 = (state_33927[(2)]);
var state_33927__$1 = state_33927;
var statearr_33935_33960 = state_33927__$1;
(statearr_33935_33960[(2)] = inst_33917);

(statearr_33935_33960[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (13))){
var state_33927__$1 = state_33927;
var statearr_33936_33961 = state_33927__$1;
(statearr_33936_33961[(2)] = null);

(statearr_33936_33961[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (6))){
var inst_33887 = (state_33927[(7)]);
var inst_33912 = inst_33887.length;
var inst_33913 = (inst_33912 > (0));
var state_33927__$1 = state_33927;
if(cljs.core.truth_(inst_33913)){
var statearr_33937_33962 = state_33927__$1;
(statearr_33937_33962[(1)] = (12));

} else {
var statearr_33938_33963 = state_33927__$1;
(statearr_33938_33963[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (3))){
var inst_33925 = (state_33927[(2)]);
var state_33927__$1 = state_33927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33927__$1,inst_33925);
} else {
if((state_val_33928 === (12))){
var inst_33887 = (state_33927[(7)]);
var inst_33915 = cljs.core.vec.call(null,inst_33887);
var state_33927__$1 = state_33927;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33927__$1,(15),out,inst_33915);
} else {
if((state_val_33928 === (2))){
var state_33927__$1 = state_33927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33927__$1,(4),ch);
} else {
if((state_val_33928 === (11))){
var inst_33891 = (state_33927[(9)]);
var inst_33895 = (state_33927[(10)]);
var inst_33905 = (state_33927[(2)]);
var inst_33906 = [];
var inst_33907 = inst_33906.push(inst_33891);
var inst_33887 = inst_33906;
var inst_33888 = inst_33895;
var state_33927__$1 = (function (){var statearr_33939 = state_33927;
(statearr_33939[(7)] = inst_33887);

(statearr_33939[(8)] = inst_33888);

(statearr_33939[(11)] = inst_33907);

(statearr_33939[(12)] = inst_33905);

return statearr_33939;
})();
var statearr_33940_33964 = state_33927__$1;
(statearr_33940_33964[(2)] = null);

(statearr_33940_33964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (9))){
var inst_33887 = (state_33927[(7)]);
var inst_33903 = cljs.core.vec.call(null,inst_33887);
var state_33927__$1 = state_33927;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33927__$1,(11),out,inst_33903);
} else {
if((state_val_33928 === (5))){
var inst_33888 = (state_33927[(8)]);
var inst_33891 = (state_33927[(9)]);
var inst_33895 = (state_33927[(10)]);
var inst_33895__$1 = f.call(null,inst_33891);
var inst_33896 = cljs.core._EQ_.call(null,inst_33895__$1,inst_33888);
var inst_33897 = cljs.core.keyword_identical_QMARK_.call(null,inst_33888,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33898 = ((inst_33896) || (inst_33897));
var state_33927__$1 = (function (){var statearr_33941 = state_33927;
(statearr_33941[(10)] = inst_33895__$1);

return statearr_33941;
})();
if(cljs.core.truth_(inst_33898)){
var statearr_33942_33965 = state_33927__$1;
(statearr_33942_33965[(1)] = (8));

} else {
var statearr_33943_33966 = state_33927__$1;
(statearr_33943_33966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (14))){
var inst_33920 = (state_33927[(2)]);
var inst_33921 = cljs.core.async.close_BANG_.call(null,out);
var state_33927__$1 = (function (){var statearr_33945 = state_33927;
(statearr_33945[(13)] = inst_33920);

return statearr_33945;
})();
var statearr_33946_33967 = state_33927__$1;
(statearr_33946_33967[(2)] = inst_33921);

(statearr_33946_33967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (10))){
var inst_33910 = (state_33927[(2)]);
var state_33927__$1 = state_33927;
var statearr_33947_33968 = state_33927__$1;
(statearr_33947_33968[(2)] = inst_33910);

(statearr_33947_33968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (8))){
var inst_33887 = (state_33927[(7)]);
var inst_33891 = (state_33927[(9)]);
var inst_33895 = (state_33927[(10)]);
var inst_33900 = inst_33887.push(inst_33891);
var tmp33944 = inst_33887;
var inst_33887__$1 = tmp33944;
var inst_33888 = inst_33895;
var state_33927__$1 = (function (){var statearr_33948 = state_33927;
(statearr_33948[(7)] = inst_33887__$1);

(statearr_33948[(8)] = inst_33888);

(statearr_33948[(14)] = inst_33900);

return statearr_33948;
})();
var statearr_33949_33969 = state_33927__$1;
(statearr_33949_33969[(2)] = null);

(statearr_33949_33969[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_33950 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33950[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_33950[(1)] = (1));

return statearr_33950;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_33927){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_33927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e33951){if((e33951 instanceof Object)){
var ex__31947__auto__ = e33951;
var statearr_33952_33970 = state_33927;
(statearr_33952_33970[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33971 = state_33927;
state_33927 = G__33971;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_33927){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_33927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
})();
var state__32040__auto__ = (function (){var statearr_33953 = f__32039__auto__.call(null);
(statearr_33953[(6)] = c__32038__auto___33955);

return statearr_33953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32040__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1590594098021
