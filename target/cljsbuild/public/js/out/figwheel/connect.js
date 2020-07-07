// Compiled by ClojureScript 1.10.764 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__37984__delegate = function (x__37968__auto__){
if(cljs.core.truth_(mmbse.core.mount_root)){
return cljs.core.apply.call(null,mmbse.core.mount_root,x__37968__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '","mmbse.core/mount-root","' is missing"].join(''));
}
};
var G__37984 = function (var_args){
var x__37968__auto__ = null;
if (arguments.length > 0) {
var G__37985__i = 0, G__37985__a = new Array(arguments.length -  0);
while (G__37985__i < G__37985__a.length) {G__37985__a[G__37985__i] = arguments[G__37985__i + 0]; ++G__37985__i;}
  x__37968__auto__ = new cljs.core.IndexedSeq(G__37985__a,0,null);
} 
return G__37984__delegate.call(this,x__37968__auto__);};
G__37984.cljs$lang$maxFixedArity = 0;
G__37984.cljs$lang$applyTo = (function (arglist__37986){
var x__37968__auto__ = cljs.core.seq(arglist__37986);
return G__37984__delegate(x__37968__auto__);
});
G__37984.cljs$core$IFn$_invoke$arity$variadic = G__37984__delegate;
return G__37984;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1590594105381
