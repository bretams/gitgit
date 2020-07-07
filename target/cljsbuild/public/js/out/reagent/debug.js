// Compiled by ClojureScript 1.10.764 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__34077__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__34077 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34078__i = 0, G__34078__a = new Array(arguments.length -  0);
while (G__34078__i < G__34078__a.length) {G__34078__a[G__34078__i] = arguments[G__34078__i + 0]; ++G__34078__i;}
  args = new cljs.core.IndexedSeq(G__34078__a,0,null);
} 
return G__34077__delegate.call(this,args);};
G__34077.cljs$lang$maxFixedArity = 0;
G__34077.cljs$lang$applyTo = (function (arglist__34079){
var args = cljs.core.seq(arglist__34079);
return G__34077__delegate(args);
});
G__34077.cljs$core$IFn$_invoke$arity$variadic = G__34077__delegate;
return G__34077;
})()
);

(o.error = (function() { 
var G__34080__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__34080 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34081__i = 0, G__34081__a = new Array(arguments.length -  0);
while (G__34081__i < G__34081__a.length) {G__34081__a[G__34081__i] = arguments[G__34081__i + 0]; ++G__34081__i;}
  args = new cljs.core.IndexedSeq(G__34081__a,0,null);
} 
return G__34080__delegate.call(this,args);};
G__34080.cljs$lang$maxFixedArity = 0;
G__34080.cljs$lang$applyTo = (function (arglist__34082){
var args = cljs.core.seq(arglist__34082);
return G__34080__delegate(args);
});
G__34080.cljs$core$IFn$_invoke$arity$variadic = G__34080__delegate;
return G__34080;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1590594098547
