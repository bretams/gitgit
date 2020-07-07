// Compiled by ClojureScript 1.10.764 {}
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
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e37486){if((e37486 instanceof Error)){
var e = e37486;
return "Error: Unable to stringify";
} else {
throw e37486;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37489 = arguments.length;
switch (G__37489) {
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

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37487_SHARP_){
if(typeof p1__37487_SHARP_ === 'string'){
return p1__37487_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37487_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37492 = arguments.length;
var i__4737__auto___37493 = (0);
while(true){
if((i__4737__auto___37493 < len__4736__auto___37492)){
args__4742__auto__.push((arguments[i__4737__auto___37493]));

var G__37494 = (i__4737__auto___37493 + (1));
i__4737__auto___37493 = G__37494;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37491){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37491));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37496 = arguments.length;
var i__4737__auto___37497 = (0);
while(true){
if((i__4737__auto___37497 < len__4736__auto___37496)){
args__4742__auto__.push((arguments[i__4737__auto___37497]));

var G__37498 = (i__4737__auto___37497 + (1));
i__4737__auto___37497 = G__37498;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37495){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37495));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37499){
var map__37500 = p__37499;
var map__37500__$1 = (((((!((map__37500 == null))))?(((((map__37500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37500):map__37500);
var message = cljs.core.get.call(null,map__37500__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37500__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4126__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
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
var c__32038__auto___37579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32039__auto__ = (function (){var switch__31943__auto__ = (function (state_37551){
var state_val_37552 = (state_37551[(1)]);
if((state_val_37552 === (7))){
var inst_37547 = (state_37551[(2)]);
var state_37551__$1 = state_37551;
var statearr_37553_37580 = state_37551__$1;
(statearr_37553_37580[(2)] = inst_37547);

(statearr_37553_37580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37552 === (1))){
var state_37551__$1 = state_37551;
var statearr_37554_37581 = state_37551__$1;
(statearr_37554_37581[(2)] = null);

(statearr_37554_37581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37552 === (4))){
var inst_37504 = (state_37551[(7)]);
var inst_37504__$1 = (state_37551[(2)]);
var state_37551__$1 = (function (){var statearr_37555 = state_37551;
(statearr_37555[(7)] = inst_37504__$1);

return statearr_37555;
})();
if(cljs.core.truth_(inst_37504__$1)){
var statearr_37556_37582 = state_37551__$1;
(statearr_37556_37582[(1)] = (5));

} else {
var statearr_37557_37583 = state_37551__$1;
(statearr_37557_37583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37552 === (15))){
var inst_37511 = (state_37551[(8)]);
var inst_37526 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37511);
var inst_37527 = cljs.core.first.call(null,inst_37526);
var inst_37528 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37527);
var inst_37529 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37528)].join('');
var inst_37530 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37529);
var state_37551__$1 = state_37551;
var statearr_37558_37584 = state_37551__$1;
(statearr_37558_37584[(2)] = inst_37530);

(statearr_37558_37584[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37552 === (13))){
var inst_37535 = (state_37551[(2)]);
var state_37551__$1 = state_37551;
var statearr_37559_37585 = state_37551__$1;
(statearr_37559_37585[(2)] = inst_37535);

(statearr_37559_37585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37552 === (6))){
var state_37551__$1 = state_37551;
var statearr_37560_37586 = state_37551__$1;
(statearr_37560_37586[(2)] = null);

(statearr_37560_37586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37552 === (17))){
var inst_37533 = (state_37551[(2)]);
var state_37551__$1 = state_37551;
var statearr_37561_37587 = state_37551__$1;
(statearr_37561_37587[(2)] = inst_37533);

(statearr_37561_37587[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37552 === (3))){
var inst_37549 = (state_37551[(2)]);
var state_37551__$1 = state_37551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37551__$1,inst_37549);
} else {
if((state_val_37552 === (12))){
var inst_37510 = (state_37551[(9)]);
var inst_37524 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37510,opts);
var state_37551__$1 = state_37551;
if(inst_37524){
var statearr_37562_37588 = state_37551__$1;
(statearr_37562_37588[(1)] = (15));

} else {
var statearr_37563_37589 = state_37551__$1;
(statearr_37563_37589[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37552 === (2))){
var state_37551__$1 = state_37551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37551__$1,(4),ch);
} else {
if((state_val_37552 === (11))){
var inst_37511 = (state_37551[(8)]);
var inst_37516 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37517 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37511);
var inst_37518 = cljs.core.async.timeout.call(null,(1000));
var inst_37519 = [inst_37517,inst_37518];
var inst_37520 = (new cljs.core.PersistentVector(null,2,(5),inst_37516,inst_37519,null));
var state_37551__$1 = state_37551;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37551__$1,(14),inst_37520);
} else {
if((state_val_37552 === (9))){
var inst_37511 = (state_37551[(8)]);
var inst_37537 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37538 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37511);
var inst_37539 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37538);
var inst_37540 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37539)].join('');
var inst_37541 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37540);
var state_37551__$1 = (function (){var statearr_37564 = state_37551;
(statearr_37564[(10)] = inst_37537);

return statearr_37564;
})();
var statearr_37565_37590 = state_37551__$1;
(statearr_37565_37590[(2)] = inst_37541);

(statearr_37565_37590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37552 === (5))){
var inst_37504 = (state_37551[(7)]);
var inst_37506 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37507 = (new cljs.core.PersistentArrayMap(null,2,inst_37506,null));
var inst_37508 = (new cljs.core.PersistentHashSet(null,inst_37507,null));
var inst_37509 = figwheel.client.focus_msgs.call(null,inst_37508,inst_37504);
var inst_37510 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37509);
var inst_37511 = cljs.core.first.call(null,inst_37509);
var inst_37512 = figwheel.client.autoload_QMARK_.call(null);
var state_37551__$1 = (function (){var statearr_37566 = state_37551;
(statearr_37566[(8)] = inst_37511);

(statearr_37566[(9)] = inst_37510);

return statearr_37566;
})();
if(cljs.core.truth_(inst_37512)){
var statearr_37567_37591 = state_37551__$1;
(statearr_37567_37591[(1)] = (8));

} else {
var statearr_37568_37592 = state_37551__$1;
(statearr_37568_37592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37552 === (14))){
var inst_37522 = (state_37551[(2)]);
var state_37551__$1 = state_37551;
var statearr_37569_37593 = state_37551__$1;
(statearr_37569_37593[(2)] = inst_37522);

(statearr_37569_37593[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37552 === (16))){
var state_37551__$1 = state_37551;
var statearr_37570_37594 = state_37551__$1;
(statearr_37570_37594[(2)] = null);

(statearr_37570_37594[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37552 === (10))){
var inst_37543 = (state_37551[(2)]);
var state_37551__$1 = (function (){var statearr_37571 = state_37551;
(statearr_37571[(11)] = inst_37543);

return statearr_37571;
})();
var statearr_37572_37595 = state_37551__$1;
(statearr_37572_37595[(2)] = null);

(statearr_37572_37595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37552 === (8))){
var inst_37510 = (state_37551[(9)]);
var inst_37514 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37510,opts);
var state_37551__$1 = state_37551;
if(cljs.core.truth_(inst_37514)){
var statearr_37573_37596 = state_37551__$1;
(statearr_37573_37596[(1)] = (11));

} else {
var statearr_37574_37597 = state_37551__$1;
(statearr_37574_37597[(1)] = (12));

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
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31944__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31944__auto____0 = (function (){
var statearr_37575 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37575[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31944__auto__);

(statearr_37575[(1)] = (1));

return statearr_37575;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31944__auto____1 = (function (state_37551){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_37551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e37576){if((e37576 instanceof Object)){
var ex__31947__auto__ = e37576;
var statearr_37577_37598 = state_37551;
(statearr_37577_37598[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37599 = state_37551;
state_37551 = G__37599;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31944__auto__ = function(state_37551){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31944__auto____1.call(this,state_37551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31944__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31944__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31944__auto__;
})()
})();
var state__32040__auto__ = (function (){var statearr_37578 = f__32039__auto__.call(null);
(statearr_37578[(6)] = c__32038__auto___37579);

return statearr_37578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32040__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37600_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37600_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37606 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37602 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37603 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37604 = true;
var _STAR_print_fn_STAR__temp_val__37605 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37604);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37605);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37603);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37602);
}}catch (e37601){if((e37601 instanceof Error)){
var e = e37601;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37606], null));
} else {
var e = e37601;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37607){
var map__37608 = p__37607;
var map__37608__$1 = (((((!((map__37608 == null))))?(((((map__37608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37608):map__37608);
var opts = map__37608__$1;
var build_id = cljs.core.get.call(null,map__37608__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__37610){
var vec__37611 = p__37610;
var seq__37612 = cljs.core.seq.call(null,vec__37611);
var first__37613 = cljs.core.first.call(null,seq__37612);
var seq__37612__$1 = cljs.core.next.call(null,seq__37612);
var map__37614 = first__37613;
var map__37614__$1 = (((((!((map__37614 == null))))?(((((map__37614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37614):map__37614);
var msg = map__37614__$1;
var msg_name = cljs.core.get.call(null,map__37614__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37612__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37616){
var vec__37617 = p__37616;
var seq__37618 = cljs.core.seq.call(null,vec__37617);
var first__37619 = cljs.core.first.call(null,seq__37618);
var seq__37618__$1 = cljs.core.next.call(null,seq__37618);
var map__37620 = first__37619;
var map__37620__$1 = (((((!((map__37620 == null))))?(((((map__37620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37620):map__37620);
var msg = map__37620__$1;
var msg_name = cljs.core.get.call(null,map__37620__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37618__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37622){
var map__37623 = p__37622;
var map__37623__$1 = (((((!((map__37623 == null))))?(((((map__37623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37623):map__37623);
var on_compile_warning = cljs.core.get.call(null,map__37623__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37623__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__37625){
var vec__37626 = p__37625;
var seq__37627 = cljs.core.seq.call(null,vec__37626);
var first__37628 = cljs.core.first.call(null,seq__37627);
var seq__37627__$1 = cljs.core.next.call(null,seq__37627);
var map__37629 = first__37628;
var map__37629__$1 = (((((!((map__37629 == null))))?(((((map__37629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37629):map__37629);
var msg = map__37629__$1;
var msg_name = cljs.core.get.call(null,map__37629__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37627__$1;
var pred__37631 = cljs.core._EQ_;
var expr__37632 = msg_name;
if(cljs.core.truth_(pred__37631.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37632))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37631.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37632))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
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
var c__32038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32039__auto__ = (function (){var switch__31943__auto__ = (function (state_37721){
var state_val_37722 = (state_37721[(1)]);
if((state_val_37722 === (7))){
var inst_37641 = (state_37721[(2)]);
var state_37721__$1 = state_37721;
if(cljs.core.truth_(inst_37641)){
var statearr_37723_37770 = state_37721__$1;
(statearr_37723_37770[(1)] = (8));

} else {
var statearr_37724_37771 = state_37721__$1;
(statearr_37724_37771[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (20))){
var inst_37715 = (state_37721[(2)]);
var state_37721__$1 = state_37721;
var statearr_37725_37772 = state_37721__$1;
(statearr_37725_37772[(2)] = inst_37715);

(statearr_37725_37772[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (27))){
var inst_37711 = (state_37721[(2)]);
var state_37721__$1 = state_37721;
var statearr_37726_37773 = state_37721__$1;
(statearr_37726_37773[(2)] = inst_37711);

(statearr_37726_37773[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (1))){
var inst_37634 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37721__$1 = state_37721;
if(cljs.core.truth_(inst_37634)){
var statearr_37727_37774 = state_37721__$1;
(statearr_37727_37774[(1)] = (2));

} else {
var statearr_37728_37775 = state_37721__$1;
(statearr_37728_37775[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (24))){
var inst_37713 = (state_37721[(2)]);
var state_37721__$1 = state_37721;
var statearr_37729_37776 = state_37721__$1;
(statearr_37729_37776[(2)] = inst_37713);

(statearr_37729_37776[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (4))){
var inst_37719 = (state_37721[(2)]);
var state_37721__$1 = state_37721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37721__$1,inst_37719);
} else {
if((state_val_37722 === (15))){
var inst_37717 = (state_37721[(2)]);
var state_37721__$1 = state_37721;
var statearr_37730_37777 = state_37721__$1;
(statearr_37730_37777[(2)] = inst_37717);

(statearr_37730_37777[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (21))){
var inst_37670 = (state_37721[(2)]);
var inst_37671 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37672 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37671);
var state_37721__$1 = (function (){var statearr_37731 = state_37721;
(statearr_37731[(7)] = inst_37670);

return statearr_37731;
})();
var statearr_37732_37778 = state_37721__$1;
(statearr_37732_37778[(2)] = inst_37672);

(statearr_37732_37778[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (31))){
var inst_37700 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37721__$1 = state_37721;
if(inst_37700){
var statearr_37733_37779 = state_37721__$1;
(statearr_37733_37779[(1)] = (34));

} else {
var statearr_37734_37780 = state_37721__$1;
(statearr_37734_37780[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (32))){
var inst_37709 = (state_37721[(2)]);
var state_37721__$1 = state_37721;
var statearr_37735_37781 = state_37721__$1;
(statearr_37735_37781[(2)] = inst_37709);

(statearr_37735_37781[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (33))){
var inst_37696 = (state_37721[(2)]);
var inst_37697 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37698 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37697);
var state_37721__$1 = (function (){var statearr_37736 = state_37721;
(statearr_37736[(8)] = inst_37696);

return statearr_37736;
})();
var statearr_37737_37782 = state_37721__$1;
(statearr_37737_37782[(2)] = inst_37698);

(statearr_37737_37782[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (13))){
var inst_37655 = figwheel.client.heads_up.clear.call(null);
var state_37721__$1 = state_37721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37721__$1,(16),inst_37655);
} else {
if((state_val_37722 === (22))){
var inst_37676 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37677 = figwheel.client.heads_up.append_warning_message.call(null,inst_37676);
var state_37721__$1 = state_37721;
var statearr_37738_37783 = state_37721__$1;
(statearr_37738_37783[(2)] = inst_37677);

(statearr_37738_37783[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (36))){
var inst_37707 = (state_37721[(2)]);
var state_37721__$1 = state_37721;
var statearr_37739_37784 = state_37721__$1;
(statearr_37739_37784[(2)] = inst_37707);

(statearr_37739_37784[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (29))){
var inst_37687 = (state_37721[(2)]);
var inst_37688 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37689 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37688);
var state_37721__$1 = (function (){var statearr_37740 = state_37721;
(statearr_37740[(9)] = inst_37687);

return statearr_37740;
})();
var statearr_37741_37785 = state_37721__$1;
(statearr_37741_37785[(2)] = inst_37689);

(statearr_37741_37785[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (6))){
var inst_37636 = (state_37721[(10)]);
var state_37721__$1 = state_37721;
var statearr_37742_37786 = state_37721__$1;
(statearr_37742_37786[(2)] = inst_37636);

(statearr_37742_37786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (28))){
var inst_37683 = (state_37721[(2)]);
var inst_37684 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37685 = figwheel.client.heads_up.display_warning.call(null,inst_37684);
var state_37721__$1 = (function (){var statearr_37743 = state_37721;
(statearr_37743[(11)] = inst_37683);

return statearr_37743;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37721__$1,(29),inst_37685);
} else {
if((state_val_37722 === (25))){
var inst_37681 = figwheel.client.heads_up.clear.call(null);
var state_37721__$1 = state_37721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37721__$1,(28),inst_37681);
} else {
if((state_val_37722 === (34))){
var inst_37702 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37721__$1 = state_37721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37721__$1,(37),inst_37702);
} else {
if((state_val_37722 === (17))){
var inst_37661 = (state_37721[(2)]);
var inst_37662 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37663 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37662);
var state_37721__$1 = (function (){var statearr_37744 = state_37721;
(statearr_37744[(12)] = inst_37661);

return statearr_37744;
})();
var statearr_37745_37787 = state_37721__$1;
(statearr_37745_37787[(2)] = inst_37663);

(statearr_37745_37787[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (3))){
var inst_37653 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37721__$1 = state_37721;
if(inst_37653){
var statearr_37746_37788 = state_37721__$1;
(statearr_37746_37788[(1)] = (13));

} else {
var statearr_37747_37789 = state_37721__$1;
(statearr_37747_37789[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (12))){
var inst_37649 = (state_37721[(2)]);
var state_37721__$1 = state_37721;
var statearr_37748_37790 = state_37721__$1;
(statearr_37748_37790[(2)] = inst_37649);

(statearr_37748_37790[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (2))){
var inst_37636 = (state_37721[(10)]);
var inst_37636__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37721__$1 = (function (){var statearr_37749 = state_37721;
(statearr_37749[(10)] = inst_37636__$1);

return statearr_37749;
})();
if(cljs.core.truth_(inst_37636__$1)){
var statearr_37750_37791 = state_37721__$1;
(statearr_37750_37791[(1)] = (5));

} else {
var statearr_37751_37792 = state_37721__$1;
(statearr_37751_37792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (23))){
var inst_37679 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37721__$1 = state_37721;
if(inst_37679){
var statearr_37752_37793 = state_37721__$1;
(statearr_37752_37793[(1)] = (25));

} else {
var statearr_37753_37794 = state_37721__$1;
(statearr_37753_37794[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (35))){
var state_37721__$1 = state_37721;
var statearr_37754_37795 = state_37721__$1;
(statearr_37754_37795[(2)] = null);

(statearr_37754_37795[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (19))){
var inst_37674 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37721__$1 = state_37721;
if(inst_37674){
var statearr_37755_37796 = state_37721__$1;
(statearr_37755_37796[(1)] = (22));

} else {
var statearr_37756_37797 = state_37721__$1;
(statearr_37756_37797[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (11))){
var inst_37645 = (state_37721[(2)]);
var state_37721__$1 = state_37721;
var statearr_37757_37798 = state_37721__$1;
(statearr_37757_37798[(2)] = inst_37645);

(statearr_37757_37798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (9))){
var inst_37647 = figwheel.client.heads_up.clear.call(null);
var state_37721__$1 = state_37721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37721__$1,(12),inst_37647);
} else {
if((state_val_37722 === (5))){
var inst_37638 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37721__$1 = state_37721;
var statearr_37758_37799 = state_37721__$1;
(statearr_37758_37799[(2)] = inst_37638);

(statearr_37758_37799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (14))){
var inst_37665 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37721__$1 = state_37721;
if(inst_37665){
var statearr_37759_37800 = state_37721__$1;
(statearr_37759_37800[(1)] = (18));

} else {
var statearr_37760_37801 = state_37721__$1;
(statearr_37760_37801[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (26))){
var inst_37691 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37721__$1 = state_37721;
if(inst_37691){
var statearr_37761_37802 = state_37721__$1;
(statearr_37761_37802[(1)] = (30));

} else {
var statearr_37762_37803 = state_37721__$1;
(statearr_37762_37803[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (16))){
var inst_37657 = (state_37721[(2)]);
var inst_37658 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37659 = figwheel.client.heads_up.display_exception.call(null,inst_37658);
var state_37721__$1 = (function (){var statearr_37763 = state_37721;
(statearr_37763[(13)] = inst_37657);

return statearr_37763;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37721__$1,(17),inst_37659);
} else {
if((state_val_37722 === (30))){
var inst_37693 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37694 = figwheel.client.heads_up.display_warning.call(null,inst_37693);
var state_37721__$1 = state_37721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37721__$1,(33),inst_37694);
} else {
if((state_val_37722 === (10))){
var inst_37651 = (state_37721[(2)]);
var state_37721__$1 = state_37721;
var statearr_37764_37804 = state_37721__$1;
(statearr_37764_37804[(2)] = inst_37651);

(statearr_37764_37804[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (18))){
var inst_37667 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37668 = figwheel.client.heads_up.display_exception.call(null,inst_37667);
var state_37721__$1 = state_37721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37721__$1,(21),inst_37668);
} else {
if((state_val_37722 === (37))){
var inst_37704 = (state_37721[(2)]);
var state_37721__$1 = state_37721;
var statearr_37765_37805 = state_37721__$1;
(statearr_37765_37805[(2)] = inst_37704);

(statearr_37765_37805[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (8))){
var inst_37643 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37721__$1 = state_37721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37721__$1,(11),inst_37643);
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
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto____0 = (function (){
var statearr_37766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37766[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto__);

(statearr_37766[(1)] = (1));

return statearr_37766;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto____1 = (function (state_37721){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_37721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e37767){if((e37767 instanceof Object)){
var ex__31947__auto__ = e37767;
var statearr_37768_37806 = state_37721;
(statearr_37768_37806[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37807 = state_37721;
state_37721 = G__37807;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto__ = function(state_37721){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto____1.call(this,state_37721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto__;
})()
})();
var state__32040__auto__ = (function (){var statearr_37769 = f__32039__auto__.call(null);
(statearr_37769[(6)] = c__32038__auto__);

return statearr_37769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32040__auto__);
}));

return c__32038__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32038__auto___37836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32039__auto__ = (function (){var switch__31943__auto__ = (function (state_37822){
var state_val_37823 = (state_37822[(1)]);
if((state_val_37823 === (1))){
var state_37822__$1 = state_37822;
var statearr_37824_37837 = state_37822__$1;
(statearr_37824_37837[(2)] = null);

(statearr_37824_37837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37823 === (2))){
var state_37822__$1 = state_37822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37822__$1,(4),ch);
} else {
if((state_val_37823 === (3))){
var inst_37820 = (state_37822[(2)]);
var state_37822__$1 = state_37822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37822__$1,inst_37820);
} else {
if((state_val_37823 === (4))){
var inst_37810 = (state_37822[(7)]);
var inst_37810__$1 = (state_37822[(2)]);
var state_37822__$1 = (function (){var statearr_37825 = state_37822;
(statearr_37825[(7)] = inst_37810__$1);

return statearr_37825;
})();
if(cljs.core.truth_(inst_37810__$1)){
var statearr_37826_37838 = state_37822__$1;
(statearr_37826_37838[(1)] = (5));

} else {
var statearr_37827_37839 = state_37822__$1;
(statearr_37827_37839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37823 === (5))){
var inst_37810 = (state_37822[(7)]);
var inst_37812 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37810);
var state_37822__$1 = state_37822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37822__$1,(8),inst_37812);
} else {
if((state_val_37823 === (6))){
var state_37822__$1 = state_37822;
var statearr_37828_37840 = state_37822__$1;
(statearr_37828_37840[(2)] = null);

(statearr_37828_37840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37823 === (7))){
var inst_37818 = (state_37822[(2)]);
var state_37822__$1 = state_37822;
var statearr_37829_37841 = state_37822__$1;
(statearr_37829_37841[(2)] = inst_37818);

(statearr_37829_37841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37823 === (8))){
var inst_37814 = (state_37822[(2)]);
var state_37822__$1 = (function (){var statearr_37830 = state_37822;
(statearr_37830[(8)] = inst_37814);

return statearr_37830;
})();
var statearr_37831_37842 = state_37822__$1;
(statearr_37831_37842[(2)] = null);

(statearr_37831_37842[(1)] = (2));


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
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31944__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31944__auto____0 = (function (){
var statearr_37832 = [null,null,null,null,null,null,null,null,null];
(statearr_37832[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31944__auto__);

(statearr_37832[(1)] = (1));

return statearr_37832;
});
var figwheel$client$heads_up_plugin_$_state_machine__31944__auto____1 = (function (state_37822){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_37822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e37833){if((e37833 instanceof Object)){
var ex__31947__auto__ = e37833;
var statearr_37834_37843 = state_37822;
(statearr_37834_37843[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37844 = state_37822;
state_37822 = G__37844;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31944__auto__ = function(state_37822){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31944__auto____1.call(this,state_37822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31944__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31944__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31944__auto__;
})()
})();
var state__32040__auto__ = (function (){var statearr_37835 = f__32039__auto__.call(null);
(statearr_37835[(6)] = c__32038__auto___37836);

return statearr_37835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32040__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32039__auto__ = (function (){var switch__31943__auto__ = (function (state_37850){
var state_val_37851 = (state_37850[(1)]);
if((state_val_37851 === (1))){
var inst_37845 = cljs.core.async.timeout.call(null,(3000));
var state_37850__$1 = state_37850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37850__$1,(2),inst_37845);
} else {
if((state_val_37851 === (2))){
var inst_37847 = (state_37850[(2)]);
var inst_37848 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37850__$1 = (function (){var statearr_37852 = state_37850;
(statearr_37852[(7)] = inst_37847);

return statearr_37852;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37850__$1,inst_37848);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31944__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31944__auto____0 = (function (){
var statearr_37853 = [null,null,null,null,null,null,null,null];
(statearr_37853[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31944__auto__);

(statearr_37853[(1)] = (1));

return statearr_37853;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31944__auto____1 = (function (state_37850){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_37850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e37854){if((e37854 instanceof Object)){
var ex__31947__auto__ = e37854;
var statearr_37855_37857 = state_37850;
(statearr_37855_37857[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37858 = state_37850;
state_37850 = G__37858;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31944__auto__ = function(state_37850){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31944__auto____1.call(this,state_37850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31944__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31944__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31944__auto__;
})()
})();
var state__32040__auto__ = (function (){var statearr_37856 = f__32039__auto__.call(null);
(statearr_37856[(6)] = c__32038__auto__);

return statearr_37856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32040__auto__);
}));

return c__32038__auto__;
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
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32039__auto__ = (function (){var switch__31943__auto__ = (function (state_37865){
var state_val_37866 = (state_37865[(1)]);
if((state_val_37866 === (1))){
var inst_37859 = cljs.core.async.timeout.call(null,(2000));
var state_37865__$1 = state_37865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37865__$1,(2),inst_37859);
} else {
if((state_val_37866 === (2))){
var inst_37861 = (state_37865[(2)]);
var inst_37862 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37863 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37862);
var state_37865__$1 = (function (){var statearr_37867 = state_37865;
(statearr_37867[(7)] = inst_37861);

return statearr_37867;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37865__$1,inst_37863);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto____0 = (function (){
var statearr_37868 = [null,null,null,null,null,null,null,null];
(statearr_37868[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto__);

(statearr_37868[(1)] = (1));

return statearr_37868;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto____1 = (function (state_37865){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_37865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e37869){if((e37869 instanceof Object)){
var ex__31947__auto__ = e37869;
var statearr_37870_37872 = state_37865;
(statearr_37870_37872[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37873 = state_37865;
state_37865 = G__37873;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto__ = function(state_37865){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto____1.call(this,state_37865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto__;
})()
})();
var state__32040__auto__ = (function (){var statearr_37871 = f__32039__auto__.call(null);
(statearr_37871[(6)] = c__32038__auto__);

return statearr_37871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32040__auto__);
}));

return c__32038__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37874){
var map__37875 = p__37874;
var map__37875__$1 = (((((!((map__37875 == null))))?(((((map__37875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37875):map__37875);
var file = cljs.core.get.call(null,map__37875__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37875__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37875__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37877 = "";
var G__37877__$1 = (cljs.core.truth_(file)?[G__37877,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37877);
var G__37877__$2 = (cljs.core.truth_(line)?[G__37877__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37877__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__37877__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37877__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37878){
var map__37879 = p__37878;
var map__37879__$1 = (((((!((map__37879 == null))))?(((((map__37879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37879):map__37879);
var ed = map__37879__$1;
var exception_data = cljs.core.get.call(null,map__37879__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37879__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_37882 = (function (){var G__37881 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37881)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__37881;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_37882);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37883){
var map__37884 = p__37883;
var map__37884__$1 = (((((!((map__37884 == null))))?(((((map__37884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37884):map__37884);
var w = map__37884__$1;
var message = cljs.core.get.call(null,map__37884__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

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
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4115__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4115__auto__;
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
var seq__37886 = cljs.core.seq.call(null,plugins);
var chunk__37887 = null;
var count__37888 = (0);
var i__37889 = (0);
while(true){
if((i__37889 < count__37888)){
var vec__37896 = cljs.core._nth.call(null,chunk__37887,i__37889);
var k = cljs.core.nth.call(null,vec__37896,(0),null);
var plugin = cljs.core.nth.call(null,vec__37896,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37902 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37886,chunk__37887,count__37888,i__37889,pl_37902,vec__37896,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37902.call(null,msg_hist);
});})(seq__37886,chunk__37887,count__37888,i__37889,pl_37902,vec__37896,k,plugin))
);
} else {
}


var G__37903 = seq__37886;
var G__37904 = chunk__37887;
var G__37905 = count__37888;
var G__37906 = (i__37889 + (1));
seq__37886 = G__37903;
chunk__37887 = G__37904;
count__37888 = G__37905;
i__37889 = G__37906;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__37886);
if(temp__5735__auto__){
var seq__37886__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37886__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__37886__$1);
var G__37907 = cljs.core.chunk_rest.call(null,seq__37886__$1);
var G__37908 = c__4556__auto__;
var G__37909 = cljs.core.count.call(null,c__4556__auto__);
var G__37910 = (0);
seq__37886 = G__37907;
chunk__37887 = G__37908;
count__37888 = G__37909;
i__37889 = G__37910;
continue;
} else {
var vec__37899 = cljs.core.first.call(null,seq__37886__$1);
var k = cljs.core.nth.call(null,vec__37899,(0),null);
var plugin = cljs.core.nth.call(null,vec__37899,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37911 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37886,chunk__37887,count__37888,i__37889,pl_37911,vec__37899,k,plugin,seq__37886__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37911.call(null,msg_hist);
});})(seq__37886,chunk__37887,count__37888,i__37889,pl_37911,vec__37899,k,plugin,seq__37886__$1,temp__5735__auto__))
);
} else {
}


var G__37912 = cljs.core.next.call(null,seq__37886__$1);
var G__37913 = null;
var G__37914 = (0);
var G__37915 = (0);
seq__37886 = G__37912;
chunk__37887 = G__37913;
count__37888 = G__37914;
i__37889 = G__37915;
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
var G__37917 = arguments.length;
switch (G__37917) {
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

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37918_37923 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37919_37924 = null;
var count__37920_37925 = (0);
var i__37921_37926 = (0);
while(true){
if((i__37921_37926 < count__37920_37925)){
var msg_37927 = cljs.core._nth.call(null,chunk__37919_37924,i__37921_37926);
figwheel.client.socket.handle_incoming_message.call(null,msg_37927);


var G__37928 = seq__37918_37923;
var G__37929 = chunk__37919_37924;
var G__37930 = count__37920_37925;
var G__37931 = (i__37921_37926 + (1));
seq__37918_37923 = G__37928;
chunk__37919_37924 = G__37929;
count__37920_37925 = G__37930;
i__37921_37926 = G__37931;
continue;
} else {
var temp__5735__auto___37932 = cljs.core.seq.call(null,seq__37918_37923);
if(temp__5735__auto___37932){
var seq__37918_37933__$1 = temp__5735__auto___37932;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37918_37933__$1)){
var c__4556__auto___37934 = cljs.core.chunk_first.call(null,seq__37918_37933__$1);
var G__37935 = cljs.core.chunk_rest.call(null,seq__37918_37933__$1);
var G__37936 = c__4556__auto___37934;
var G__37937 = cljs.core.count.call(null,c__4556__auto___37934);
var G__37938 = (0);
seq__37918_37923 = G__37935;
chunk__37919_37924 = G__37936;
count__37920_37925 = G__37937;
i__37921_37926 = G__37938;
continue;
} else {
var msg_37939 = cljs.core.first.call(null,seq__37918_37933__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37939);


var G__37940 = cljs.core.next.call(null,seq__37918_37933__$1);
var G__37941 = null;
var G__37942 = (0);
var G__37943 = (0);
seq__37918_37923 = G__37940;
chunk__37919_37924 = G__37941;
count__37920_37925 = G__37942;
i__37921_37926 = G__37943;
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
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37948 = arguments.length;
var i__4737__auto___37949 = (0);
while(true){
if((i__4737__auto___37949 < len__4736__auto___37948)){
args__4742__auto__.push((arguments[i__4737__auto___37949]));

var G__37950 = (i__4737__auto___37949 + (1));
i__4737__auto___37949 = G__37950;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37945){
var map__37946 = p__37945;
var map__37946__$1 = (((((!((map__37946 == null))))?(((((map__37946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37946):map__37946);
var opts = map__37946__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37944){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37944));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37951){if((e37951 instanceof Error)){
var e = e37951;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37951;

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
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__37952){
var map__37953 = p__37952;
var map__37953__$1 = (((((!((map__37953 == null))))?(((((map__37953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37953):map__37953);
var msg_name = cljs.core.get.call(null,map__37953__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1590594105285
