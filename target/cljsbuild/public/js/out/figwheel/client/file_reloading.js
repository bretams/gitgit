// Compiled by ClojureScript 1.10.764 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4126__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (cljs.core._EQ_.call(null,"cljs.core",ns)) || (cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__35523 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__35523 == null)){
return null;
} else {
return goog.object.get(G__35523,"requires");
}
}):(function (path){
var G__35524 = goog.object.get(goog.dependencies_.requires,path);
if((G__35524 == null)){
return null;
} else {
return goog.object.getKeys(G__35524);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35525_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35525_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__35526 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__35526__$1 = (((G__35526 == null))?null:goog.object.get(G__35526,"provides"));
if((G__35526__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__35526__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return goog.object.forEach(goog.object.filter(goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,goog.object.get(dep,"provides")));
})),(function (dep,path,_){
var provides = goog.object.get(dep,"provides");
var requires = goog.object.get(dep,"requires");
var seq__35527 = cljs.core.seq.call(null,provides);
var chunk__35528 = null;
var count__35529 = (0);
var i__35530 = (0);
while(true){
if((i__35530 < count__35529)){
var prov = cljs.core._nth.call(null,chunk__35528,i__35530);
var seq__35539_35551 = cljs.core.seq.call(null,requires);
var chunk__35540_35552 = null;
var count__35541_35553 = (0);
var i__35542_35554 = (0);
while(true){
if((i__35542_35554 < count__35541_35553)){
var req_35555 = cljs.core._nth.call(null,chunk__35540_35552,i__35542_35554);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35555,prov);


var G__35556 = seq__35539_35551;
var G__35557 = chunk__35540_35552;
var G__35558 = count__35541_35553;
var G__35559 = (i__35542_35554 + (1));
seq__35539_35551 = G__35556;
chunk__35540_35552 = G__35557;
count__35541_35553 = G__35558;
i__35542_35554 = G__35559;
continue;
} else {
var temp__5735__auto___35560 = cljs.core.seq.call(null,seq__35539_35551);
if(temp__5735__auto___35560){
var seq__35539_35561__$1 = temp__5735__auto___35560;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35539_35561__$1)){
var c__4556__auto___35562 = cljs.core.chunk_first.call(null,seq__35539_35561__$1);
var G__35563 = cljs.core.chunk_rest.call(null,seq__35539_35561__$1);
var G__35564 = c__4556__auto___35562;
var G__35565 = cljs.core.count.call(null,c__4556__auto___35562);
var G__35566 = (0);
seq__35539_35551 = G__35563;
chunk__35540_35552 = G__35564;
count__35541_35553 = G__35565;
i__35542_35554 = G__35566;
continue;
} else {
var req_35567 = cljs.core.first.call(null,seq__35539_35561__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35567,prov);


var G__35568 = cljs.core.next.call(null,seq__35539_35561__$1);
var G__35569 = null;
var G__35570 = (0);
var G__35571 = (0);
seq__35539_35551 = G__35568;
chunk__35540_35552 = G__35569;
count__35541_35553 = G__35570;
i__35542_35554 = G__35571;
continue;
}
} else {
}
}
break;
}


var G__35572 = seq__35527;
var G__35573 = chunk__35528;
var G__35574 = count__35529;
var G__35575 = (i__35530 + (1));
seq__35527 = G__35572;
chunk__35528 = G__35573;
count__35529 = G__35574;
i__35530 = G__35575;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__35527);
if(temp__5735__auto__){
var seq__35527__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35527__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__35527__$1);
var G__35576 = cljs.core.chunk_rest.call(null,seq__35527__$1);
var G__35577 = c__4556__auto__;
var G__35578 = cljs.core.count.call(null,c__4556__auto__);
var G__35579 = (0);
seq__35527 = G__35576;
chunk__35528 = G__35577;
count__35529 = G__35578;
i__35530 = G__35579;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35527__$1);
var seq__35543_35580 = cljs.core.seq.call(null,requires);
var chunk__35544_35581 = null;
var count__35545_35582 = (0);
var i__35546_35583 = (0);
while(true){
if((i__35546_35583 < count__35545_35582)){
var req_35584 = cljs.core._nth.call(null,chunk__35544_35581,i__35546_35583);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35584,prov);


var G__35585 = seq__35543_35580;
var G__35586 = chunk__35544_35581;
var G__35587 = count__35545_35582;
var G__35588 = (i__35546_35583 + (1));
seq__35543_35580 = G__35585;
chunk__35544_35581 = G__35586;
count__35545_35582 = G__35587;
i__35546_35583 = G__35588;
continue;
} else {
var temp__5735__auto___35589__$1 = cljs.core.seq.call(null,seq__35543_35580);
if(temp__5735__auto___35589__$1){
var seq__35543_35590__$1 = temp__5735__auto___35589__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35543_35590__$1)){
var c__4556__auto___35591 = cljs.core.chunk_first.call(null,seq__35543_35590__$1);
var G__35592 = cljs.core.chunk_rest.call(null,seq__35543_35590__$1);
var G__35593 = c__4556__auto___35591;
var G__35594 = cljs.core.count.call(null,c__4556__auto___35591);
var G__35595 = (0);
seq__35543_35580 = G__35592;
chunk__35544_35581 = G__35593;
count__35545_35582 = G__35594;
i__35546_35583 = G__35595;
continue;
} else {
var req_35596 = cljs.core.first.call(null,seq__35543_35590__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35596,prov);


var G__35597 = cljs.core.next.call(null,seq__35543_35590__$1);
var G__35598 = null;
var G__35599 = (0);
var G__35600 = (0);
seq__35543_35580 = G__35597;
chunk__35544_35581 = G__35598;
count__35545_35582 = G__35599;
i__35546_35583 = G__35600;
continue;
}
} else {
}
}
break;
}


var G__35601 = cljs.core.next.call(null,seq__35527__$1);
var G__35602 = null;
var G__35603 = (0);
var G__35604 = (0);
seq__35527 = G__35601;
chunk__35528 = G__35602;
count__35529 = G__35603;
i__35530 = G__35604;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (deps,path,_){
var seq__35547 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__35548 = null;
var count__35549 = (0);
var i__35550 = (0);
while(true){
if((i__35550 < count__35549)){
var prov = cljs.core._nth.call(null,chunk__35548,i__35550);
goog.object.forEach(deps,((function (seq__35547,chunk__35548,count__35549,i__35550,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__35547,chunk__35548,count__35549,i__35550,prov,requires))
);


var G__35605 = seq__35547;
var G__35606 = chunk__35548;
var G__35607 = count__35549;
var G__35608 = (i__35550 + (1));
seq__35547 = G__35605;
chunk__35548 = G__35606;
count__35549 = G__35607;
i__35550 = G__35608;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__35547);
if(temp__5735__auto__){
var seq__35547__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35547__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__35547__$1);
var G__35609 = cljs.core.chunk_rest.call(null,seq__35547__$1);
var G__35610 = c__4556__auto__;
var G__35611 = cljs.core.count.call(null,c__4556__auto__);
var G__35612 = (0);
seq__35547 = G__35609;
chunk__35548 = G__35610;
count__35549 = G__35611;
i__35550 = G__35612;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35547__$1);
goog.object.forEach(deps,((function (seq__35547,chunk__35548,count__35549,i__35550,prov,seq__35547__$1,temp__5735__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__35547,chunk__35548,count__35549,i__35550,prov,seq__35547__$1,temp__5735__auto__,requires))
);


var G__35613 = cljs.core.next.call(null,seq__35547__$1);
var G__35614 = null;
var G__35615 = (0);
var G__35616 = (0);
seq__35547 = G__35613;
chunk__35548 = G__35614;
count__35549 = G__35615;
i__35550 = G__35616;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__35617){
var vec__35618 = p__35617;
var _ = cljs.core.nth.call(null,vec__35618,(0),null);
var v = cljs.core.nth.call(null,vec__35618,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__35621){
var vec__35622 = p__35621;
var k = cljs.core.nth.call(null,vec__35622,(0),null);
var v = cljs.core.nth.call(null,vec__35622,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__35634_35642 = cljs.core.seq.call(null,deps);
var chunk__35635_35643 = null;
var count__35636_35644 = (0);
var i__35637_35645 = (0);
while(true){
if((i__35637_35645 < count__35636_35644)){
var dep_35646 = cljs.core._nth.call(null,chunk__35635_35643,i__35637_35645);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_35646;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_35646));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_35646,(depth + (1)),state);
} else {
}


var G__35647 = seq__35634_35642;
var G__35648 = chunk__35635_35643;
var G__35649 = count__35636_35644;
var G__35650 = (i__35637_35645 + (1));
seq__35634_35642 = G__35647;
chunk__35635_35643 = G__35648;
count__35636_35644 = G__35649;
i__35637_35645 = G__35650;
continue;
} else {
var temp__5735__auto___35651 = cljs.core.seq.call(null,seq__35634_35642);
if(temp__5735__auto___35651){
var seq__35634_35652__$1 = temp__5735__auto___35651;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35634_35652__$1)){
var c__4556__auto___35653 = cljs.core.chunk_first.call(null,seq__35634_35652__$1);
var G__35654 = cljs.core.chunk_rest.call(null,seq__35634_35652__$1);
var G__35655 = c__4556__auto___35653;
var G__35656 = cljs.core.count.call(null,c__4556__auto___35653);
var G__35657 = (0);
seq__35634_35642 = G__35654;
chunk__35635_35643 = G__35655;
count__35636_35644 = G__35656;
i__35637_35645 = G__35657;
continue;
} else {
var dep_35658 = cljs.core.first.call(null,seq__35634_35652__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_35658;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_35658));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_35658,(depth + (1)),state);
} else {
}


var G__35659 = cljs.core.next.call(null,seq__35634_35652__$1);
var G__35660 = null;
var G__35661 = (0);
var G__35662 = (0);
seq__35634_35642 = G__35659;
chunk__35635_35643 = G__35660;
count__35636_35644 = G__35661;
i__35637_35645 = G__35662;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35638){
var vec__35639 = p__35638;
var seq__35640 = cljs.core.seq.call(null,vec__35639);
var first__35641 = cljs.core.first.call(null,seq__35640);
var seq__35640__$1 = cljs.core.next.call(null,seq__35640);
var x = first__35641;
var xs = seq__35640__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__35625_SHARP_){
return clojure.set.difference.call(null,p1__35625_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__35663_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__35663_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__35664 = cljs.core.seq.call(null,provides);
var chunk__35665 = null;
var count__35666 = (0);
var i__35667 = (0);
while(true){
if((i__35667 < count__35666)){
var prov = cljs.core._nth.call(null,chunk__35665,i__35667);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35676_35684 = cljs.core.seq.call(null,requires);
var chunk__35677_35685 = null;
var count__35678_35686 = (0);
var i__35679_35687 = (0);
while(true){
if((i__35679_35687 < count__35678_35686)){
var req_35688 = cljs.core._nth.call(null,chunk__35677_35685,i__35679_35687);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35688,prov);


var G__35689 = seq__35676_35684;
var G__35690 = chunk__35677_35685;
var G__35691 = count__35678_35686;
var G__35692 = (i__35679_35687 + (1));
seq__35676_35684 = G__35689;
chunk__35677_35685 = G__35690;
count__35678_35686 = G__35691;
i__35679_35687 = G__35692;
continue;
} else {
var temp__5735__auto___35693 = cljs.core.seq.call(null,seq__35676_35684);
if(temp__5735__auto___35693){
var seq__35676_35694__$1 = temp__5735__auto___35693;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35676_35694__$1)){
var c__4556__auto___35695 = cljs.core.chunk_first.call(null,seq__35676_35694__$1);
var G__35696 = cljs.core.chunk_rest.call(null,seq__35676_35694__$1);
var G__35697 = c__4556__auto___35695;
var G__35698 = cljs.core.count.call(null,c__4556__auto___35695);
var G__35699 = (0);
seq__35676_35684 = G__35696;
chunk__35677_35685 = G__35697;
count__35678_35686 = G__35698;
i__35679_35687 = G__35699;
continue;
} else {
var req_35700 = cljs.core.first.call(null,seq__35676_35694__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35700,prov);


var G__35701 = cljs.core.next.call(null,seq__35676_35694__$1);
var G__35702 = null;
var G__35703 = (0);
var G__35704 = (0);
seq__35676_35684 = G__35701;
chunk__35677_35685 = G__35702;
count__35678_35686 = G__35703;
i__35679_35687 = G__35704;
continue;
}
} else {
}
}
break;
}


var G__35705 = seq__35664;
var G__35706 = chunk__35665;
var G__35707 = count__35666;
var G__35708 = (i__35667 + (1));
seq__35664 = G__35705;
chunk__35665 = G__35706;
count__35666 = G__35707;
i__35667 = G__35708;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__35664);
if(temp__5735__auto__){
var seq__35664__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35664__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__35664__$1);
var G__35709 = cljs.core.chunk_rest.call(null,seq__35664__$1);
var G__35710 = c__4556__auto__;
var G__35711 = cljs.core.count.call(null,c__4556__auto__);
var G__35712 = (0);
seq__35664 = G__35709;
chunk__35665 = G__35710;
count__35666 = G__35711;
i__35667 = G__35712;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35664__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35680_35713 = cljs.core.seq.call(null,requires);
var chunk__35681_35714 = null;
var count__35682_35715 = (0);
var i__35683_35716 = (0);
while(true){
if((i__35683_35716 < count__35682_35715)){
var req_35717 = cljs.core._nth.call(null,chunk__35681_35714,i__35683_35716);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35717,prov);


var G__35718 = seq__35680_35713;
var G__35719 = chunk__35681_35714;
var G__35720 = count__35682_35715;
var G__35721 = (i__35683_35716 + (1));
seq__35680_35713 = G__35718;
chunk__35681_35714 = G__35719;
count__35682_35715 = G__35720;
i__35683_35716 = G__35721;
continue;
} else {
var temp__5735__auto___35722__$1 = cljs.core.seq.call(null,seq__35680_35713);
if(temp__5735__auto___35722__$1){
var seq__35680_35723__$1 = temp__5735__auto___35722__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35680_35723__$1)){
var c__4556__auto___35724 = cljs.core.chunk_first.call(null,seq__35680_35723__$1);
var G__35725 = cljs.core.chunk_rest.call(null,seq__35680_35723__$1);
var G__35726 = c__4556__auto___35724;
var G__35727 = cljs.core.count.call(null,c__4556__auto___35724);
var G__35728 = (0);
seq__35680_35713 = G__35725;
chunk__35681_35714 = G__35726;
count__35682_35715 = G__35727;
i__35683_35716 = G__35728;
continue;
} else {
var req_35729 = cljs.core.first.call(null,seq__35680_35723__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35729,prov);


var G__35730 = cljs.core.next.call(null,seq__35680_35723__$1);
var G__35731 = null;
var G__35732 = (0);
var G__35733 = (0);
seq__35680_35713 = G__35730;
chunk__35681_35714 = G__35731;
count__35682_35715 = G__35732;
i__35683_35716 = G__35733;
continue;
}
} else {
}
}
break;
}


var G__35734 = cljs.core.next.call(null,seq__35664__$1);
var G__35735 = null;
var G__35736 = (0);
var G__35737 = (0);
seq__35664 = G__35734;
chunk__35665 = G__35735;
count__35666 = G__35736;
i__35667 = G__35737;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__35738_35742 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35739_35743 = null;
var count__35740_35744 = (0);
var i__35741_35745 = (0);
while(true){
if((i__35741_35745 < count__35740_35744)){
var ns_35746 = cljs.core._nth.call(null,chunk__35739_35743,i__35741_35745);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35746);


var G__35747 = seq__35738_35742;
var G__35748 = chunk__35739_35743;
var G__35749 = count__35740_35744;
var G__35750 = (i__35741_35745 + (1));
seq__35738_35742 = G__35747;
chunk__35739_35743 = G__35748;
count__35740_35744 = G__35749;
i__35741_35745 = G__35750;
continue;
} else {
var temp__5735__auto___35751 = cljs.core.seq.call(null,seq__35738_35742);
if(temp__5735__auto___35751){
var seq__35738_35752__$1 = temp__5735__auto___35751;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35738_35752__$1)){
var c__4556__auto___35753 = cljs.core.chunk_first.call(null,seq__35738_35752__$1);
var G__35754 = cljs.core.chunk_rest.call(null,seq__35738_35752__$1);
var G__35755 = c__4556__auto___35753;
var G__35756 = cljs.core.count.call(null,c__4556__auto___35753);
var G__35757 = (0);
seq__35738_35742 = G__35754;
chunk__35739_35743 = G__35755;
count__35740_35744 = G__35756;
i__35741_35745 = G__35757;
continue;
} else {
var ns_35758 = cljs.core.first.call(null,seq__35738_35752__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35758);


var G__35759 = cljs.core.next.call(null,seq__35738_35752__$1);
var G__35760 = null;
var G__35761 = (0);
var G__35762 = (0);
seq__35738_35742 = G__35759;
chunk__35739_35743 = G__35760;
count__35740_35744 = G__35761;
i__35741_35745 = G__35762;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4126__auto__ = goog.require__;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__35763__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35763 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35764__i = 0, G__35764__a = new Array(arguments.length -  0);
while (G__35764__i < G__35764__a.length) {G__35764__a[G__35764__i] = arguments[G__35764__i + 0]; ++G__35764__i;}
  args = new cljs.core.IndexedSeq(G__35764__a,0,null);
} 
return G__35763__delegate.call(this,args);};
G__35763.cljs$lang$maxFixedArity = 0;
G__35763.cljs$lang$applyTo = (function (arglist__35765){
var args = cljs.core.seq(arglist__35765);
return G__35763__delegate(args);
});
G__35763.cljs$core$IFn$_invoke$arity$variadic = G__35763__delegate;
return G__35763;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__35766_SHARP_,p2__35767_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35766_SHARP_)),p2__35767_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__35768_SHARP_,p2__35769_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35768_SHARP_),p2__35769_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__35770 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__35770.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__35770.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__35770;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35771){if((e35771 instanceof Error)){
var e = e35771;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35771;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35772){if((e35772 instanceof Error)){
var e = e35772;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35772;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35773 = cljs.core._EQ_;
var expr__35774 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35773.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35774))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__35773.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35774))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__35773.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35774))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35776,callback){
var map__35777 = p__35776;
var map__35777__$1 = (((((!((map__35777 == null))))?(((((map__35777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35777):map__35777);
var file_msg = map__35777__$1;
var request_url = cljs.core.get.call(null,map__35777__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4126__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__32038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32039__auto__ = (function (){var switch__31943__auto__ = (function (state_35815){
var state_val_35816 = (state_35815[(1)]);
if((state_val_35816 === (7))){
var inst_35811 = (state_35815[(2)]);
var state_35815__$1 = state_35815;
var statearr_35817_35843 = state_35815__$1;
(statearr_35817_35843[(2)] = inst_35811);

(statearr_35817_35843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (1))){
var state_35815__$1 = state_35815;
var statearr_35818_35844 = state_35815__$1;
(statearr_35818_35844[(2)] = null);

(statearr_35818_35844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (4))){
var inst_35781 = (state_35815[(7)]);
var inst_35781__$1 = (state_35815[(2)]);
var state_35815__$1 = (function (){var statearr_35819 = state_35815;
(statearr_35819[(7)] = inst_35781__$1);

return statearr_35819;
})();
if(cljs.core.truth_(inst_35781__$1)){
var statearr_35820_35845 = state_35815__$1;
(statearr_35820_35845[(1)] = (5));

} else {
var statearr_35821_35846 = state_35815__$1;
(statearr_35821_35846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (15))){
var inst_35794 = (state_35815[(8)]);
var inst_35796 = (state_35815[(9)]);
var inst_35798 = inst_35796.call(null,inst_35794);
var state_35815__$1 = state_35815;
var statearr_35822_35847 = state_35815__$1;
(statearr_35822_35847[(2)] = inst_35798);

(statearr_35822_35847[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (13))){
var inst_35805 = (state_35815[(2)]);
var state_35815__$1 = state_35815;
var statearr_35823_35848 = state_35815__$1;
(statearr_35823_35848[(2)] = inst_35805);

(statearr_35823_35848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (6))){
var state_35815__$1 = state_35815;
var statearr_35824_35849 = state_35815__$1;
(statearr_35824_35849[(2)] = null);

(statearr_35824_35849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (17))){
var inst_35802 = (state_35815[(2)]);
var state_35815__$1 = state_35815;
var statearr_35825_35850 = state_35815__$1;
(statearr_35825_35850[(2)] = inst_35802);

(statearr_35825_35850[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (3))){
var inst_35813 = (state_35815[(2)]);
var state_35815__$1 = state_35815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35815__$1,inst_35813);
} else {
if((state_val_35816 === (12))){
var state_35815__$1 = state_35815;
var statearr_35826_35851 = state_35815__$1;
(statearr_35826_35851[(2)] = null);

(statearr_35826_35851[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (2))){
var state_35815__$1 = state_35815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35815__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35816 === (11))){
var inst_35786 = (state_35815[(10)]);
var inst_35792 = figwheel.client.file_reloading.blocking_load.call(null,inst_35786);
var state_35815__$1 = state_35815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35815__$1,(14),inst_35792);
} else {
if((state_val_35816 === (9))){
var inst_35786 = (state_35815[(10)]);
var state_35815__$1 = state_35815;
if(cljs.core.truth_(inst_35786)){
var statearr_35827_35852 = state_35815__$1;
(statearr_35827_35852[(1)] = (11));

} else {
var statearr_35828_35853 = state_35815__$1;
(statearr_35828_35853[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (5))){
var inst_35781 = (state_35815[(7)]);
var inst_35787 = (state_35815[(11)]);
var inst_35786 = cljs.core.nth.call(null,inst_35781,(0),null);
var inst_35787__$1 = cljs.core.nth.call(null,inst_35781,(1),null);
var state_35815__$1 = (function (){var statearr_35829 = state_35815;
(statearr_35829[(11)] = inst_35787__$1);

(statearr_35829[(10)] = inst_35786);

return statearr_35829;
})();
if(cljs.core.truth_(inst_35787__$1)){
var statearr_35830_35854 = state_35815__$1;
(statearr_35830_35854[(1)] = (8));

} else {
var statearr_35831_35855 = state_35815__$1;
(statearr_35831_35855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (14))){
var inst_35786 = (state_35815[(10)]);
var inst_35796 = (state_35815[(9)]);
var inst_35794 = (state_35815[(2)]);
var inst_35795 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35796__$1 = cljs.core.get.call(null,inst_35795,inst_35786);
var state_35815__$1 = (function (){var statearr_35832 = state_35815;
(statearr_35832[(8)] = inst_35794);

(statearr_35832[(9)] = inst_35796__$1);

return statearr_35832;
})();
if(cljs.core.truth_(inst_35796__$1)){
var statearr_35833_35856 = state_35815__$1;
(statearr_35833_35856[(1)] = (15));

} else {
var statearr_35834_35857 = state_35815__$1;
(statearr_35834_35857[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (16))){
var inst_35794 = (state_35815[(8)]);
var inst_35800 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35794);
var state_35815__$1 = state_35815;
var statearr_35835_35858 = state_35815__$1;
(statearr_35835_35858[(2)] = inst_35800);

(statearr_35835_35858[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (10))){
var inst_35807 = (state_35815[(2)]);
var state_35815__$1 = (function (){var statearr_35836 = state_35815;
(statearr_35836[(12)] = inst_35807);

return statearr_35836;
})();
var statearr_35837_35859 = state_35815__$1;
(statearr_35837_35859[(2)] = null);

(statearr_35837_35859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (8))){
var inst_35787 = (state_35815[(11)]);
var inst_35789 = eval(inst_35787);
var state_35815__$1 = state_35815;
var statearr_35838_35860 = state_35815__$1;
(statearr_35838_35860[(2)] = inst_35789);

(statearr_35838_35860[(1)] = (10));


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
});
return (function() {
var figwheel$client$file_reloading$state_machine__31944__auto__ = null;
var figwheel$client$file_reloading$state_machine__31944__auto____0 = (function (){
var statearr_35839 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35839[(0)] = figwheel$client$file_reloading$state_machine__31944__auto__);

(statearr_35839[(1)] = (1));

return statearr_35839;
});
var figwheel$client$file_reloading$state_machine__31944__auto____1 = (function (state_35815){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_35815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e35840){if((e35840 instanceof Object)){
var ex__31947__auto__ = e35840;
var statearr_35841_35861 = state_35815;
(statearr_35841_35861[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35862 = state_35815;
state_35815 = G__35862;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31944__auto__ = function(state_35815){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31944__auto____1.call(this,state_35815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31944__auto____0;
figwheel$client$file_reloading$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31944__auto____1;
return figwheel$client$file_reloading$state_machine__31944__auto__;
})()
})();
var state__32040__auto__ = (function (){var statearr_35842 = f__32039__auto__.call(null);
(statearr_35842[(6)] = c__32038__auto__);

return statearr_35842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32040__auto__);
}));

return c__32038__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__35864 = arguments.length;
switch (G__35864) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35866,callback){
var map__35867 = p__35866;
var map__35867__$1 = (((((!((map__35867 == null))))?(((((map__35867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35867):map__35867);
var file_msg = map__35867__$1;
var namespace = cljs.core.get.call(null,map__35867__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35869){
var map__35870 = p__35869;
var map__35870__$1 = (((((!((map__35870 == null))))?(((((map__35870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35870):map__35870);
var file_msg = map__35870__$1;
var namespace = cljs.core.get.call(null,map__35870__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35872){
var map__35873 = p__35872;
var map__35873__$1 = (((((!((map__35873 == null))))?(((((map__35873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35873):map__35873);
var file_msg = map__35873__$1;
var namespace = cljs.core.get.call(null,map__35873__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35875,callback){
var map__35876 = p__35875;
var map__35876__$1 = (((((!((map__35876 == null))))?(((((map__35876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35876):map__35876);
var file_msg = map__35876__$1;
var request_url = cljs.core.get.call(null,map__35876__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35876__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__32038__auto___35926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32039__auto__ = (function (){var switch__31943__auto__ = (function (state_35911){
var state_val_35912 = (state_35911[(1)]);
if((state_val_35912 === (1))){
var inst_35885 = cljs.core.seq.call(null,files);
var inst_35886 = cljs.core.first.call(null,inst_35885);
var inst_35887 = cljs.core.next.call(null,inst_35885);
var inst_35888 = files;
var state_35911__$1 = (function (){var statearr_35913 = state_35911;
(statearr_35913[(7)] = inst_35888);

(statearr_35913[(8)] = inst_35886);

(statearr_35913[(9)] = inst_35887);

return statearr_35913;
})();
var statearr_35914_35927 = state_35911__$1;
(statearr_35914_35927[(2)] = null);

(statearr_35914_35927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35912 === (2))){
var inst_35888 = (state_35911[(7)]);
var inst_35894 = (state_35911[(10)]);
var inst_35893 = cljs.core.seq.call(null,inst_35888);
var inst_35894__$1 = cljs.core.first.call(null,inst_35893);
var inst_35895 = cljs.core.next.call(null,inst_35893);
var inst_35896 = (inst_35894__$1 == null);
var inst_35897 = cljs.core.not.call(null,inst_35896);
var state_35911__$1 = (function (){var statearr_35915 = state_35911;
(statearr_35915[(11)] = inst_35895);

(statearr_35915[(10)] = inst_35894__$1);

return statearr_35915;
})();
if(inst_35897){
var statearr_35916_35928 = state_35911__$1;
(statearr_35916_35928[(1)] = (4));

} else {
var statearr_35917_35929 = state_35911__$1;
(statearr_35917_35929[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35912 === (3))){
var inst_35909 = (state_35911[(2)]);
var state_35911__$1 = state_35911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35911__$1,inst_35909);
} else {
if((state_val_35912 === (4))){
var inst_35894 = (state_35911[(10)]);
var inst_35899 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35894);
var state_35911__$1 = state_35911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35911__$1,(7),inst_35899);
} else {
if((state_val_35912 === (5))){
var inst_35905 = cljs.core.async.close_BANG_.call(null,out);
var state_35911__$1 = state_35911;
var statearr_35918_35930 = state_35911__$1;
(statearr_35918_35930[(2)] = inst_35905);

(statearr_35918_35930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35912 === (6))){
var inst_35907 = (state_35911[(2)]);
var state_35911__$1 = state_35911;
var statearr_35919_35931 = state_35911__$1;
(statearr_35919_35931[(2)] = inst_35907);

(statearr_35919_35931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35912 === (7))){
var inst_35895 = (state_35911[(11)]);
var inst_35901 = (state_35911[(2)]);
var inst_35902 = cljs.core.async.put_BANG_.call(null,out,inst_35901);
var inst_35888 = inst_35895;
var state_35911__$1 = (function (){var statearr_35920 = state_35911;
(statearr_35920[(7)] = inst_35888);

(statearr_35920[(12)] = inst_35902);

return statearr_35920;
})();
var statearr_35921_35932 = state_35911__$1;
(statearr_35921_35932[(2)] = null);

(statearr_35921_35932[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto____0 = (function (){
var statearr_35922 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35922[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto__);

(statearr_35922[(1)] = (1));

return statearr_35922;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto____1 = (function (state_35911){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_35911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e35923){if((e35923 instanceof Object)){
var ex__31947__auto__ = e35923;
var statearr_35924_35933 = state_35911;
(statearr_35924_35933[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35934 = state_35911;
state_35911 = G__35934;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto__ = function(state_35911){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto____1.call(this,state_35911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto__;
})()
})();
var state__32040__auto__ = (function (){var statearr_35925 = f__32039__auto__.call(null);
(statearr_35925[(6)] = c__32038__auto___35926);

return statearr_35925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32040__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35935,opts){
var map__35936 = p__35935;
var map__35936__$1 = (((((!((map__35936 == null))))?(((((map__35936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35936):map__35936);
var eval_body = cljs.core.get.call(null,map__35936__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35936__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4115__auto__ = eval_body;
if(cljs.core.truth_(and__4115__auto__)){
return typeof eval_body === 'string';
} else {
return and__4115__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35938){var e = e35938;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__35939_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35939_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__35940){
var vec__35941 = p__35940;
var k = cljs.core.nth.call(null,vec__35941,(0),null);
var v = cljs.core.nth.call(null,vec__35941,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35944){
var vec__35945 = p__35944;
var k = cljs.core.nth.call(null,vec__35945,(0),null);
var v = cljs.core.nth.call(null,vec__35945,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35951,p__35952){
var map__35953 = p__35951;
var map__35953__$1 = (((((!((map__35953 == null))))?(((((map__35953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35953):map__35953);
var opts = map__35953__$1;
var before_jsload = cljs.core.get.call(null,map__35953__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35953__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35953__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35954 = p__35952;
var map__35954__$1 = (((((!((map__35954 == null))))?(((((map__35954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35954):map__35954);
var msg = map__35954__$1;
var files = cljs.core.get.call(null,map__35954__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35954__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35954__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32039__auto__ = (function (){var switch__31943__auto__ = (function (state_36108){
var state_val_36109 = (state_36108[(1)]);
if((state_val_36109 === (7))){
var inst_35969 = (state_36108[(7)]);
var inst_35968 = (state_36108[(8)]);
var inst_35970 = (state_36108[(9)]);
var inst_35971 = (state_36108[(10)]);
var inst_35976 = cljs.core._nth.call(null,inst_35969,inst_35971);
var inst_35977 = figwheel.client.file_reloading.eval_body.call(null,inst_35976,opts);
var inst_35978 = (inst_35971 + (1));
var tmp36110 = inst_35969;
var tmp36111 = inst_35968;
var tmp36112 = inst_35970;
var inst_35968__$1 = tmp36111;
var inst_35969__$1 = tmp36110;
var inst_35970__$1 = tmp36112;
var inst_35971__$1 = inst_35978;
var state_36108__$1 = (function (){var statearr_36113 = state_36108;
(statearr_36113[(7)] = inst_35969__$1);

(statearr_36113[(8)] = inst_35968__$1);

(statearr_36113[(9)] = inst_35970__$1);

(statearr_36113[(11)] = inst_35977);

(statearr_36113[(10)] = inst_35971__$1);

return statearr_36113;
})();
var statearr_36114_36197 = state_36108__$1;
(statearr_36114_36197[(2)] = null);

(statearr_36114_36197[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (20))){
var inst_36011 = (state_36108[(12)]);
var inst_36019 = figwheel.client.file_reloading.sort_files.call(null,inst_36011);
var state_36108__$1 = state_36108;
var statearr_36115_36198 = state_36108__$1;
(statearr_36115_36198[(2)] = inst_36019);

(statearr_36115_36198[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (27))){
var state_36108__$1 = state_36108;
var statearr_36116_36199 = state_36108__$1;
(statearr_36116_36199[(2)] = null);

(statearr_36116_36199[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (1))){
var inst_35960 = (state_36108[(13)]);
var inst_35957 = before_jsload.call(null,files);
var inst_35958 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35959 = (function (){return (function (p1__35948_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35948_SHARP_);
});
})();
var inst_35960__$1 = cljs.core.filter.call(null,inst_35959,files);
var inst_35961 = cljs.core.not_empty.call(null,inst_35960__$1);
var state_36108__$1 = (function (){var statearr_36117 = state_36108;
(statearr_36117[(14)] = inst_35958);

(statearr_36117[(13)] = inst_35960__$1);

(statearr_36117[(15)] = inst_35957);

return statearr_36117;
})();
if(cljs.core.truth_(inst_35961)){
var statearr_36118_36200 = state_36108__$1;
(statearr_36118_36200[(1)] = (2));

} else {
var statearr_36119_36201 = state_36108__$1;
(statearr_36119_36201[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (24))){
var state_36108__$1 = state_36108;
var statearr_36120_36202 = state_36108__$1;
(statearr_36120_36202[(2)] = null);

(statearr_36120_36202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (39))){
var inst_36061 = (state_36108[(16)]);
var state_36108__$1 = state_36108;
var statearr_36121_36203 = state_36108__$1;
(statearr_36121_36203[(2)] = inst_36061);

(statearr_36121_36203[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (46))){
var inst_36103 = (state_36108[(2)]);
var state_36108__$1 = state_36108;
var statearr_36122_36204 = state_36108__$1;
(statearr_36122_36204[(2)] = inst_36103);

(statearr_36122_36204[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (4))){
var inst_36005 = (state_36108[(2)]);
var inst_36006 = cljs.core.List.EMPTY;
var inst_36007 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36006);
var inst_36008 = (function (){return (function (p1__35949_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35949_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35949_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35949_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_36009 = cljs.core.filter.call(null,inst_36008,files);
var inst_36010 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36011 = cljs.core.concat.call(null,inst_36009,inst_36010);
var state_36108__$1 = (function (){var statearr_36123 = state_36108;
(statearr_36123[(17)] = inst_36007);

(statearr_36123[(18)] = inst_36005);

(statearr_36123[(12)] = inst_36011);

return statearr_36123;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36124_36205 = state_36108__$1;
(statearr_36124_36205[(1)] = (16));

} else {
var statearr_36125_36206 = state_36108__$1;
(statearr_36125_36206[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (15))){
var inst_35995 = (state_36108[(2)]);
var state_36108__$1 = state_36108;
var statearr_36126_36207 = state_36108__$1;
(statearr_36126_36207[(2)] = inst_35995);

(statearr_36126_36207[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (21))){
var inst_36021 = (state_36108[(19)]);
var inst_36021__$1 = (state_36108[(2)]);
var inst_36022 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36021__$1);
var state_36108__$1 = (function (){var statearr_36127 = state_36108;
(statearr_36127[(19)] = inst_36021__$1);

return statearr_36127;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36108__$1,(22),inst_36022);
} else {
if((state_val_36109 === (31))){
var inst_36106 = (state_36108[(2)]);
var state_36108__$1 = state_36108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36108__$1,inst_36106);
} else {
if((state_val_36109 === (32))){
var inst_36061 = (state_36108[(16)]);
var inst_36066 = inst_36061.cljs$lang$protocol_mask$partition0$;
var inst_36067 = (inst_36066 & (64));
var inst_36068 = inst_36061.cljs$core$ISeq$;
var inst_36069 = (cljs.core.PROTOCOL_SENTINEL === inst_36068);
var inst_36070 = ((inst_36067) || (inst_36069));
var state_36108__$1 = state_36108;
if(cljs.core.truth_(inst_36070)){
var statearr_36128_36208 = state_36108__$1;
(statearr_36128_36208[(1)] = (35));

} else {
var statearr_36129_36209 = state_36108__$1;
(statearr_36129_36209[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (40))){
var inst_36083 = (state_36108[(20)]);
var inst_36082 = (state_36108[(2)]);
var inst_36083__$1 = cljs.core.get.call(null,inst_36082,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36084 = cljs.core.get.call(null,inst_36082,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36085 = cljs.core.not_empty.call(null,inst_36083__$1);
var state_36108__$1 = (function (){var statearr_36130 = state_36108;
(statearr_36130[(20)] = inst_36083__$1);

(statearr_36130[(21)] = inst_36084);

return statearr_36130;
})();
if(cljs.core.truth_(inst_36085)){
var statearr_36131_36210 = state_36108__$1;
(statearr_36131_36210[(1)] = (41));

} else {
var statearr_36132_36211 = state_36108__$1;
(statearr_36132_36211[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (33))){
var state_36108__$1 = state_36108;
var statearr_36133_36212 = state_36108__$1;
(statearr_36133_36212[(2)] = false);

(statearr_36133_36212[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (13))){
var inst_35981 = (state_36108[(22)]);
var inst_35985 = cljs.core.chunk_first.call(null,inst_35981);
var inst_35986 = cljs.core.chunk_rest.call(null,inst_35981);
var inst_35987 = cljs.core.count.call(null,inst_35985);
var inst_35968 = inst_35986;
var inst_35969 = inst_35985;
var inst_35970 = inst_35987;
var inst_35971 = (0);
var state_36108__$1 = (function (){var statearr_36134 = state_36108;
(statearr_36134[(7)] = inst_35969);

(statearr_36134[(8)] = inst_35968);

(statearr_36134[(9)] = inst_35970);

(statearr_36134[(10)] = inst_35971);

return statearr_36134;
})();
var statearr_36135_36213 = state_36108__$1;
(statearr_36135_36213[(2)] = null);

(statearr_36135_36213[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (22))){
var inst_36025 = (state_36108[(23)]);
var inst_36029 = (state_36108[(24)]);
var inst_36021 = (state_36108[(19)]);
var inst_36024 = (state_36108[(25)]);
var inst_36024__$1 = (state_36108[(2)]);
var inst_36025__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36024__$1);
var inst_36026 = (function (){var all_files = inst_36021;
var res_SINGLEQUOTE_ = inst_36024__$1;
var res = inst_36025__$1;
return (function (p1__35950_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35950_SHARP_));
});
})();
var inst_36027 = cljs.core.filter.call(null,inst_36026,inst_36024__$1);
var inst_36028 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36029__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36028);
var inst_36030 = cljs.core.not_empty.call(null,inst_36029__$1);
var state_36108__$1 = (function (){var statearr_36136 = state_36108;
(statearr_36136[(23)] = inst_36025__$1);

(statearr_36136[(24)] = inst_36029__$1);

(statearr_36136[(26)] = inst_36027);

(statearr_36136[(25)] = inst_36024__$1);

return statearr_36136;
})();
if(cljs.core.truth_(inst_36030)){
var statearr_36137_36214 = state_36108__$1;
(statearr_36137_36214[(1)] = (23));

} else {
var statearr_36138_36215 = state_36108__$1;
(statearr_36138_36215[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (36))){
var state_36108__$1 = state_36108;
var statearr_36139_36216 = state_36108__$1;
(statearr_36139_36216[(2)] = false);

(statearr_36139_36216[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (41))){
var inst_36083 = (state_36108[(20)]);
var inst_36087 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36088 = cljs.core.map.call(null,inst_36087,inst_36083);
var inst_36089 = cljs.core.pr_str.call(null,inst_36088);
var inst_36090 = ["figwheel-no-load meta-data: ",inst_36089].join('');
var inst_36091 = figwheel.client.utils.log.call(null,inst_36090);
var state_36108__$1 = state_36108;
var statearr_36140_36217 = state_36108__$1;
(statearr_36140_36217[(2)] = inst_36091);

(statearr_36140_36217[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (43))){
var inst_36084 = (state_36108[(21)]);
var inst_36094 = (state_36108[(2)]);
var inst_36095 = cljs.core.not_empty.call(null,inst_36084);
var state_36108__$1 = (function (){var statearr_36141 = state_36108;
(statearr_36141[(27)] = inst_36094);

return statearr_36141;
})();
if(cljs.core.truth_(inst_36095)){
var statearr_36142_36218 = state_36108__$1;
(statearr_36142_36218[(1)] = (44));

} else {
var statearr_36143_36219 = state_36108__$1;
(statearr_36143_36219[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (29))){
var inst_36025 = (state_36108[(23)]);
var inst_36061 = (state_36108[(16)]);
var inst_36029 = (state_36108[(24)]);
var inst_36021 = (state_36108[(19)]);
var inst_36027 = (state_36108[(26)]);
var inst_36024 = (state_36108[(25)]);
var inst_36057 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36060 = (function (){var all_files = inst_36021;
var res_SINGLEQUOTE_ = inst_36024;
var res = inst_36025;
var files_not_loaded = inst_36027;
var dependencies_that_loaded = inst_36029;
return (function (p__36059){
var map__36144 = p__36059;
var map__36144__$1 = (((((!((map__36144 == null))))?(((((map__36144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36144):map__36144);
var namespace = cljs.core.get.call(null,map__36144__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_36061__$1 = cljs.core.group_by.call(null,inst_36060,inst_36027);
var inst_36063 = (inst_36061__$1 == null);
var inst_36064 = cljs.core.not.call(null,inst_36063);
var state_36108__$1 = (function (){var statearr_36146 = state_36108;
(statearr_36146[(16)] = inst_36061__$1);

(statearr_36146[(28)] = inst_36057);

return statearr_36146;
})();
if(inst_36064){
var statearr_36147_36220 = state_36108__$1;
(statearr_36147_36220[(1)] = (32));

} else {
var statearr_36148_36221 = state_36108__$1;
(statearr_36148_36221[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (44))){
var inst_36084 = (state_36108[(21)]);
var inst_36097 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36084);
var inst_36098 = cljs.core.pr_str.call(null,inst_36097);
var inst_36099 = ["not required: ",inst_36098].join('');
var inst_36100 = figwheel.client.utils.log.call(null,inst_36099);
var state_36108__$1 = state_36108;
var statearr_36149_36222 = state_36108__$1;
(statearr_36149_36222[(2)] = inst_36100);

(statearr_36149_36222[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (6))){
var inst_36002 = (state_36108[(2)]);
var state_36108__$1 = state_36108;
var statearr_36150_36223 = state_36108__$1;
(statearr_36150_36223[(2)] = inst_36002);

(statearr_36150_36223[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (28))){
var inst_36027 = (state_36108[(26)]);
var inst_36054 = (state_36108[(2)]);
var inst_36055 = cljs.core.not_empty.call(null,inst_36027);
var state_36108__$1 = (function (){var statearr_36151 = state_36108;
(statearr_36151[(29)] = inst_36054);

return statearr_36151;
})();
if(cljs.core.truth_(inst_36055)){
var statearr_36152_36224 = state_36108__$1;
(statearr_36152_36224[(1)] = (29));

} else {
var statearr_36153_36225 = state_36108__$1;
(statearr_36153_36225[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (25))){
var inst_36025 = (state_36108[(23)]);
var inst_36041 = (state_36108[(2)]);
var inst_36042 = cljs.core.not_empty.call(null,inst_36025);
var state_36108__$1 = (function (){var statearr_36154 = state_36108;
(statearr_36154[(30)] = inst_36041);

return statearr_36154;
})();
if(cljs.core.truth_(inst_36042)){
var statearr_36155_36226 = state_36108__$1;
(statearr_36155_36226[(1)] = (26));

} else {
var statearr_36156_36227 = state_36108__$1;
(statearr_36156_36227[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (34))){
var inst_36077 = (state_36108[(2)]);
var state_36108__$1 = state_36108;
if(cljs.core.truth_(inst_36077)){
var statearr_36157_36228 = state_36108__$1;
(statearr_36157_36228[(1)] = (38));

} else {
var statearr_36158_36229 = state_36108__$1;
(statearr_36158_36229[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (17))){
var state_36108__$1 = state_36108;
var statearr_36159_36230 = state_36108__$1;
(statearr_36159_36230[(2)] = recompile_dependents);

(statearr_36159_36230[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (3))){
var state_36108__$1 = state_36108;
var statearr_36160_36231 = state_36108__$1;
(statearr_36160_36231[(2)] = null);

(statearr_36160_36231[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (12))){
var inst_35998 = (state_36108[(2)]);
var state_36108__$1 = state_36108;
var statearr_36161_36232 = state_36108__$1;
(statearr_36161_36232[(2)] = inst_35998);

(statearr_36161_36232[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (2))){
var inst_35960 = (state_36108[(13)]);
var inst_35967 = cljs.core.seq.call(null,inst_35960);
var inst_35968 = inst_35967;
var inst_35969 = null;
var inst_35970 = (0);
var inst_35971 = (0);
var state_36108__$1 = (function (){var statearr_36162 = state_36108;
(statearr_36162[(7)] = inst_35969);

(statearr_36162[(8)] = inst_35968);

(statearr_36162[(9)] = inst_35970);

(statearr_36162[(10)] = inst_35971);

return statearr_36162;
})();
var statearr_36163_36233 = state_36108__$1;
(statearr_36163_36233[(2)] = null);

(statearr_36163_36233[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (23))){
var inst_36025 = (state_36108[(23)]);
var inst_36029 = (state_36108[(24)]);
var inst_36021 = (state_36108[(19)]);
var inst_36027 = (state_36108[(26)]);
var inst_36024 = (state_36108[(25)]);
var inst_36032 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36034 = (function (){var all_files = inst_36021;
var res_SINGLEQUOTE_ = inst_36024;
var res = inst_36025;
var files_not_loaded = inst_36027;
var dependencies_that_loaded = inst_36029;
return (function (p__36033){
var map__36164 = p__36033;
var map__36164__$1 = (((((!((map__36164 == null))))?(((((map__36164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36164):map__36164);
var request_url = cljs.core.get.call(null,map__36164__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_36035 = cljs.core.reverse.call(null,inst_36029);
var inst_36036 = cljs.core.map.call(null,inst_36034,inst_36035);
var inst_36037 = cljs.core.pr_str.call(null,inst_36036);
var inst_36038 = figwheel.client.utils.log.call(null,inst_36037);
var state_36108__$1 = (function (){var statearr_36166 = state_36108;
(statearr_36166[(31)] = inst_36032);

return statearr_36166;
})();
var statearr_36167_36234 = state_36108__$1;
(statearr_36167_36234[(2)] = inst_36038);

(statearr_36167_36234[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (35))){
var state_36108__$1 = state_36108;
var statearr_36168_36235 = state_36108__$1;
(statearr_36168_36235[(2)] = true);

(statearr_36168_36235[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (19))){
var inst_36011 = (state_36108[(12)]);
var inst_36017 = figwheel.client.file_reloading.expand_files.call(null,inst_36011);
var state_36108__$1 = state_36108;
var statearr_36169_36236 = state_36108__$1;
(statearr_36169_36236[(2)] = inst_36017);

(statearr_36169_36236[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (11))){
var state_36108__$1 = state_36108;
var statearr_36170_36237 = state_36108__$1;
(statearr_36170_36237[(2)] = null);

(statearr_36170_36237[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (9))){
var inst_36000 = (state_36108[(2)]);
var state_36108__$1 = state_36108;
var statearr_36171_36238 = state_36108__$1;
(statearr_36171_36238[(2)] = inst_36000);

(statearr_36171_36238[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (5))){
var inst_35970 = (state_36108[(9)]);
var inst_35971 = (state_36108[(10)]);
var inst_35973 = (inst_35971 < inst_35970);
var inst_35974 = inst_35973;
var state_36108__$1 = state_36108;
if(cljs.core.truth_(inst_35974)){
var statearr_36172_36239 = state_36108__$1;
(statearr_36172_36239[(1)] = (7));

} else {
var statearr_36173_36240 = state_36108__$1;
(statearr_36173_36240[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (14))){
var inst_35981 = (state_36108[(22)]);
var inst_35990 = cljs.core.first.call(null,inst_35981);
var inst_35991 = figwheel.client.file_reloading.eval_body.call(null,inst_35990,opts);
var inst_35992 = cljs.core.next.call(null,inst_35981);
var inst_35968 = inst_35992;
var inst_35969 = null;
var inst_35970 = (0);
var inst_35971 = (0);
var state_36108__$1 = (function (){var statearr_36174 = state_36108;
(statearr_36174[(7)] = inst_35969);

(statearr_36174[(8)] = inst_35968);

(statearr_36174[(9)] = inst_35970);

(statearr_36174[(32)] = inst_35991);

(statearr_36174[(10)] = inst_35971);

return statearr_36174;
})();
var statearr_36175_36241 = state_36108__$1;
(statearr_36175_36241[(2)] = null);

(statearr_36175_36241[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (45))){
var state_36108__$1 = state_36108;
var statearr_36176_36242 = state_36108__$1;
(statearr_36176_36242[(2)] = null);

(statearr_36176_36242[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (26))){
var inst_36025 = (state_36108[(23)]);
var inst_36029 = (state_36108[(24)]);
var inst_36021 = (state_36108[(19)]);
var inst_36027 = (state_36108[(26)]);
var inst_36024 = (state_36108[(25)]);
var inst_36044 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36046 = (function (){var all_files = inst_36021;
var res_SINGLEQUOTE_ = inst_36024;
var res = inst_36025;
var files_not_loaded = inst_36027;
var dependencies_that_loaded = inst_36029;
return (function (p__36045){
var map__36177 = p__36045;
var map__36177__$1 = (((((!((map__36177 == null))))?(((((map__36177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36177):map__36177);
var namespace = cljs.core.get.call(null,map__36177__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36177__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_36047 = cljs.core.map.call(null,inst_36046,inst_36025);
var inst_36048 = cljs.core.pr_str.call(null,inst_36047);
var inst_36049 = figwheel.client.utils.log.call(null,inst_36048);
var inst_36050 = (function (){var all_files = inst_36021;
var res_SINGLEQUOTE_ = inst_36024;
var res = inst_36025;
var files_not_loaded = inst_36027;
var dependencies_that_loaded = inst_36029;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_36051 = setTimeout(inst_36050,(10));
var state_36108__$1 = (function (){var statearr_36179 = state_36108;
(statearr_36179[(33)] = inst_36044);

(statearr_36179[(34)] = inst_36049);

return statearr_36179;
})();
var statearr_36180_36243 = state_36108__$1;
(statearr_36180_36243[(2)] = inst_36051);

(statearr_36180_36243[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (16))){
var state_36108__$1 = state_36108;
var statearr_36181_36244 = state_36108__$1;
(statearr_36181_36244[(2)] = reload_dependents);

(statearr_36181_36244[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (38))){
var inst_36061 = (state_36108[(16)]);
var inst_36079 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36061);
var state_36108__$1 = state_36108;
var statearr_36182_36245 = state_36108__$1;
(statearr_36182_36245[(2)] = inst_36079);

(statearr_36182_36245[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (30))){
var state_36108__$1 = state_36108;
var statearr_36183_36246 = state_36108__$1;
(statearr_36183_36246[(2)] = null);

(statearr_36183_36246[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (10))){
var inst_35981 = (state_36108[(22)]);
var inst_35983 = cljs.core.chunked_seq_QMARK_.call(null,inst_35981);
var state_36108__$1 = state_36108;
if(inst_35983){
var statearr_36184_36247 = state_36108__$1;
(statearr_36184_36247[(1)] = (13));

} else {
var statearr_36185_36248 = state_36108__$1;
(statearr_36185_36248[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (18))){
var inst_36015 = (state_36108[(2)]);
var state_36108__$1 = state_36108;
if(cljs.core.truth_(inst_36015)){
var statearr_36186_36249 = state_36108__$1;
(statearr_36186_36249[(1)] = (19));

} else {
var statearr_36187_36250 = state_36108__$1;
(statearr_36187_36250[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (42))){
var state_36108__$1 = state_36108;
var statearr_36188_36251 = state_36108__$1;
(statearr_36188_36251[(2)] = null);

(statearr_36188_36251[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (37))){
var inst_36074 = (state_36108[(2)]);
var state_36108__$1 = state_36108;
var statearr_36189_36252 = state_36108__$1;
(statearr_36189_36252[(2)] = inst_36074);

(statearr_36189_36252[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (8))){
var inst_35968 = (state_36108[(8)]);
var inst_35981 = (state_36108[(22)]);
var inst_35981__$1 = cljs.core.seq.call(null,inst_35968);
var state_36108__$1 = (function (){var statearr_36190 = state_36108;
(statearr_36190[(22)] = inst_35981__$1);

return statearr_36190;
})();
if(inst_35981__$1){
var statearr_36191_36253 = state_36108__$1;
(statearr_36191_36253[(1)] = (10));

} else {
var statearr_36192_36254 = state_36108__$1;
(statearr_36192_36254[(1)] = (11));

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
}
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto____0 = (function (){
var statearr_36193 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36193[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto__);

(statearr_36193[(1)] = (1));

return statearr_36193;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto____1 = (function (state_36108){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_36108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e36194){if((e36194 instanceof Object)){
var ex__31947__auto__ = e36194;
var statearr_36195_36255 = state_36108;
(statearr_36195_36255[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36256 = state_36108;
state_36108 = G__36256;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto__ = function(state_36108){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto____1.call(this,state_36108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto__;
})()
})();
var state__32040__auto__ = (function (){var statearr_36196 = f__32039__auto__.call(null);
(statearr_36196[(6)] = c__32038__auto__);

return statearr_36196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32040__auto__);
}));

return c__32038__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36259,link){
var map__36260 = p__36259;
var map__36260__$1 = (((((!((map__36260 == null))))?(((((map__36260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36260):map__36260);
var file = cljs.core.get.call(null,map__36260__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__36257_SHARP_,p2__36258_SHARP_){
if(cljs.core._EQ_.call(null,p1__36257_SHARP_,p2__36258_SHARP_)){
return p1__36257_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36263){
var map__36264 = p__36263;
var map__36264__$1 = (((((!((map__36264 == null))))?(((((map__36264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36264):map__36264);
var match_length = cljs.core.get.call(null,map__36264__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36264__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36262_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36262_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36266_SHARP_,p2__36267_SHARP_){
return cljs.core.assoc.call(null,p1__36266_SHARP_,cljs.core.get.call(null,p2__36267_SHARP_,key),p2__36267_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_36268 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36268);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36268);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36269,p__36270){
var map__36271 = p__36269;
var map__36271__$1 = (((((!((map__36271 == null))))?(((((map__36271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36271):map__36271);
var on_cssload = cljs.core.get.call(null,map__36271__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36272 = p__36270;
var map__36272__$1 = (((((!((map__36272 == null))))?(((((map__36272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36272):map__36272);
var files_msg = map__36272__$1;
var files = cljs.core.get.call(null,map__36272__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1590594102775
