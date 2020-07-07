// Compiled by ClojureScript 1.10.764 {}
goog.provide('mmbse.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('reagent.session');
goog.require('reitit.frontend');
goog.require('clerk.core');
goog.require('accountant.core');
mmbse.core.router = reitit.frontend.router.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"index","index",-1531685915)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/index",new cljs.core.Keyword(null,"index2","index2",159102642)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/rolunk",new cljs.core.Keyword(null,"rolunk","rolunk",-612639667)], null)], null));
mmbse.core.path_for = (function mmbse$core$path_for(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36042 = arguments.length;
var i__4737__auto___36043 = (0);
while(true){
if((i__4737__auto___36043 < len__4736__auto___36042)){
args__4742__auto__.push((arguments[i__4737__auto___36043]));

var G__36044 = (i__4737__auto___36043 + (1));
i__4737__auto___36043 = G__36044;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return mmbse.core.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(mmbse.core.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,p__36038){
var vec__36039 = p__36038;
var params = cljs.core.nth.call(null,vec__36039,(0),null);
if(cljs.core.truth_(params)){
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.call(null,mmbse.core.router,route,params));
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.call(null,mmbse.core.router,route));
}
}));

(mmbse.core.path_for.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(mmbse.core.path_for.cljs$lang$applyTo = (function (seq36036){
var G__36037 = cljs.core.first.call(null,seq36036);
var seq36036__$1 = cljs.core.next.call(null,seq36036);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36037,seq36036__$1);
}));

mmbse.core.slideshow = (function mmbse$core$slideshow(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-position-relative.uk-visible-toggle.uk-light.slideshow","div.uk-position-relative.uk-visible-toggle.uk-light.slideshow",391646022),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),"-1",new cljs.core.Keyword(null,"data-uk-slideshow","data-uk-slideshow",-312643639),"true"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.uk-slideshow-items","ul.uk-slideshow-items",455177512),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://www.pcshop.in/wp-content/uploads/2019/04/COOLER-MASTER-590-III-BLACK-WINDOW.jpg",new cljs.core.Keyword(null,"alt","alt",-3214426),"",new cljs.core.Keyword(null,"data-uk-cover","data-uk-cover",1953460165),true], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://www.pcland.hu/images/termekek/termekek_345000-350000/347906/cooler-master-master-mastercase-h500m-mcm-h500m-ihnn-s00.jpg",new cljs.core.Keyword(null,"alt","alt",-3214426),"",new cljs.core.Keyword(null,"data-uk-cover","data-uk-cover",1953460165),true], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://i1.wp.com/huracanpcs.com/wp-content/uploads/2019/11/mb520-1200x1200.jpg",new cljs.core.Keyword(null,"alt","alt",-3214426),"",new cljs.core.Keyword(null,"data-uk-cover","data-uk-cover",1953460165),true], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.uk-position-center-left.uk-position-small.uk-hidden-hover","a.uk-position-center-left.uk-position-small.uk-hidden-hover",663055825),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-uk-slidenav-previous","data-uk-slidenav-previous",891656201),"true",new cljs.core.Keyword(null,"data-uk-slideshow-item","data-uk-slideshow-item",870151337),"previous"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.uk-position-center-right.uk-position-small.uk-hidden-hover","a.uk-position-center-right.uk-position-small.uk-hidden-hover",339805047),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-uk-slidenav-next","data-uk-slidenav-next",-1290637981),"true",new cljs.core.Keyword(null,"data-uk-slideshow-item","data-uk-slideshow-item",870151337),"next"], null)], null)], null);
});
});
mmbse.core.korte = (function mmbse$core$korte(){
var vilagit_QMARK_ = reagent.core.atom.call(null,false);
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
return cljs.core.reset_BANG_.call(null,vilagit_QMARK_,false);
})], null),"Turn on the light"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img#myImage","img#myImage",170112187),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),(cljs.core.truth_(cljs.core.deref.call(null,vilagit_QMARK_))?"https://www.w3schools.com/js/pic_bulbon.gif":"https://www.w3schools.com/js/pic_bulboff.gif"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
return cljs.core.reset_BANG_.call(null,vilagit_QMARK_,true);
})], null),"Turn off the light"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
return cljs.core.reset_BANG_.call(null,vilagit_QMARK_,cljs.core.not.call(null,cljs.core.deref.call(null,vilagit_QMARK_)));
})], null),"Turn on/off the light"], null)], null);
});
});
mmbse.core.home_page = (function mmbse$core$home_page(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mmbse.core.slideshow], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mmbse.core.korte], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/broken/link"], null),"Broken link"], null)], null)], null)], null);
});
});
mmbse.core.kepek_page = (function mmbse$core$kepek_page(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Kepek mmbse"], null)], null);
});
});
mmbse.core.rolunk_page = (function mmbse$core$rolunk_page(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Rolunk mmbse"], null)], null);
});
});
mmbse.core.four_o_four = (function mmbse$core$four_o_four(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"404"], null)], null);
});
});
mmbse.core.page_for = (function mmbse$core$page_for(route){
var G__36045 = route;
var G__36045__$1 = (((G__36045 instanceof cljs.core.Keyword))?G__36045.fqn:null);
switch (G__36045__$1) {
case "index":
return new cljs.core.Var(function(){return mmbse.core.home_page;},new cljs.core.Symbol("mmbse.core","home-page","mmbse.core/home-page",1719052962,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mmbse.core","mmbse.core",1706737624,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/mmbse/core.cljs",16,1,64,64,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(mmbse.core.home_page)?mmbse.core.home_page.cljs$lang$test:null)]));

break;
case "index2":
return new cljs.core.Var(function(){return mmbse.core.home_page;},new cljs.core.Symbol("mmbse.core","home-page","mmbse.core/home-page",1719052962,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mmbse.core","mmbse.core",1706737624,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/mmbse/core.cljs",16,1,64,64,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(mmbse.core.home_page)?mmbse.core.home_page.cljs$lang$test:null)]));

break;
case "kepek":
return new cljs.core.Var(function(){return mmbse.core.kepek_page;},new cljs.core.Symbol("mmbse.core","kepek-page","mmbse.core/kepek-page",602692592,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mmbse.core","mmbse.core",1706737624,null),new cljs.core.Symbol(null,"kepek-page","kepek-page",-16272887,null),"src/cljs/mmbse/core.cljs",17,1,74,74,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(mmbse.core.kepek_page)?mmbse.core.kepek_page.cljs$lang$test:null)]));

break;
case "rolunk":
return new cljs.core.Var(function(){return mmbse.core.rolunk_page;},new cljs.core.Symbol("mmbse.core","rolunk-page","mmbse.core/rolunk-page",-16725736,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mmbse.core","mmbse.core",1706737624,null),new cljs.core.Symbol(null,"rolunk-page","rolunk-page",-1679051101,null),"src/cljs/mmbse/core.cljs",18,1,78,78,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(mmbse.core.rolunk_page)?mmbse.core.rolunk_page.cljs$lang$test:null)]));

break;
default:
return new cljs.core.Var(function(){return mmbse.core.four_o_four;},new cljs.core.Symbol("mmbse.core","four-o-four","mmbse.core/four-o-four",-281133762,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mmbse.core","mmbse.core",1706737624,null),new cljs.core.Symbol(null,"four-o-four","four-o-four",-2012752313,null),"src/cljs/mmbse/core.cljs",18,1,82,82,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(mmbse.core.four_o_four)?mmbse.core.four_o_four.cljs$lang$test:null)]));

}
});
mmbse.core.search = (function mmbse$core$search(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-margin","div.uk-margin",1820567476),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.uk-search.uk-search-default","form.uk-search.uk-search-default",1057681005),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.uk-search-icon-flip","span.uk-search-icon-flip",1138705384),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-search-icon","data-uk-search-icon",-1372310794),"true"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.uk-search-input.uk-text-center","input.uk-search-input.uk-text-center",1067388939),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"search",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search..."], null)], null)], null)], null);
});
});
mmbse.core.menu = (function mmbse$core$menu(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-cover-container.uk-position-relative.headercss","div.uk-cover-container.uk-position-relative.headercss",-1759040194),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-text-center","div.uk-text-center",-1334382774),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mmbse.core.search], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.uk-position-center-left","a.uk-position-center-left",-118220180),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),mmbse.core.path_for.call(null,new cljs.core.Keyword(null,"index","index",-1531685915))], null),"Home"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.uk-position-center-right","a.uk-position-center-right",789843914),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),mmbse.core.path_for.call(null,new cljs.core.Keyword(null,"rolunk","rolunk",-612639667))], null),"About mmbse"], null)], null);
});
});
mmbse.core.footer = (function mmbse$core$footer(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"mmbse was generated by the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/reagent-project/reagent-template"], null),"Reagent Template"], null),"."], null);
});
});
mmbse.core.current_page = (function mmbse$core$current_page(){
return (function (){
var page = new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(reagent.session.get.call(null,new cljs.core.Keyword(null,"route","route",329891309)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mmbse.core.menu], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(page)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mmbse.core.footer], null)], null);
});
});
mmbse.core.mount_root = (function mmbse$core$mount_root(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mmbse.core.current_page], null),document.getElementById("app"));
});
mmbse.core.init_BANG_ = (function mmbse$core$init_BANG_(){
clerk.core.initialize_BANG_.call(null);

accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
var match = reitit.frontend.match_by_path.call(null,mmbse.core.router,path);
var current_page = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
var route_params = new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match);
reagent.core.after_render.call(null,clerk.core.after_render_BANG_);

reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),mmbse.core.page_for.call(null,current_page),new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params], null));

return clerk.core.navigate_page_BANG_.call(null,path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return cljs.core.boolean$.call(null,reitit.frontend.match_by_path.call(null,mmbse.core.router,path));
})], null));

accountant.core.dispatch_current_BANG_.call(null);

return mmbse.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1594145273106
