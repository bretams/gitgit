// Compiled by ClojureScript 1.10.764 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37139){
var map__37140 = p__37139;
var map__37140__$1 = (((((!((map__37140 == null))))?(((((map__37140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37140):map__37140);
var m = map__37140__$1;
var n = cljs.core.get.call(null,map__37140__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37140__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37142_37174 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37143_37175 = null;
var count__37144_37176 = (0);
var i__37145_37177 = (0);
while(true){
if((i__37145_37177 < count__37144_37176)){
var f_37178 = cljs.core._nth.call(null,chunk__37143_37175,i__37145_37177);
cljs.core.println.call(null,"  ",f_37178);


var G__37179 = seq__37142_37174;
var G__37180 = chunk__37143_37175;
var G__37181 = count__37144_37176;
var G__37182 = (i__37145_37177 + (1));
seq__37142_37174 = G__37179;
chunk__37143_37175 = G__37180;
count__37144_37176 = G__37181;
i__37145_37177 = G__37182;
continue;
} else {
var temp__5735__auto___37183 = cljs.core.seq.call(null,seq__37142_37174);
if(temp__5735__auto___37183){
var seq__37142_37184__$1 = temp__5735__auto___37183;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37142_37184__$1)){
var c__4556__auto___37185 = cljs.core.chunk_first.call(null,seq__37142_37184__$1);
var G__37186 = cljs.core.chunk_rest.call(null,seq__37142_37184__$1);
var G__37187 = c__4556__auto___37185;
var G__37188 = cljs.core.count.call(null,c__4556__auto___37185);
var G__37189 = (0);
seq__37142_37174 = G__37186;
chunk__37143_37175 = G__37187;
count__37144_37176 = G__37188;
i__37145_37177 = G__37189;
continue;
} else {
var f_37190 = cljs.core.first.call(null,seq__37142_37184__$1);
cljs.core.println.call(null,"  ",f_37190);


var G__37191 = cljs.core.next.call(null,seq__37142_37184__$1);
var G__37192 = null;
var G__37193 = (0);
var G__37194 = (0);
seq__37142_37174 = G__37191;
chunk__37143_37175 = G__37192;
count__37144_37176 = G__37193;
i__37145_37177 = G__37194;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37195 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37195);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37195)))?cljs.core.second.call(null,arglists_37195):arglists_37195));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37146_37196 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37147_37197 = null;
var count__37148_37198 = (0);
var i__37149_37199 = (0);
while(true){
if((i__37149_37199 < count__37148_37198)){
var vec__37160_37200 = cljs.core._nth.call(null,chunk__37147_37197,i__37149_37199);
var name_37201 = cljs.core.nth.call(null,vec__37160_37200,(0),null);
var map__37163_37202 = cljs.core.nth.call(null,vec__37160_37200,(1),null);
var map__37163_37203__$1 = (((((!((map__37163_37202 == null))))?(((((map__37163_37202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37163_37202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37163_37202):map__37163_37202);
var doc_37204 = cljs.core.get.call(null,map__37163_37203__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37205 = cljs.core.get.call(null,map__37163_37203__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37201);

cljs.core.println.call(null," ",arglists_37205);

if(cljs.core.truth_(doc_37204)){
cljs.core.println.call(null," ",doc_37204);
} else {
}


var G__37206 = seq__37146_37196;
var G__37207 = chunk__37147_37197;
var G__37208 = count__37148_37198;
var G__37209 = (i__37149_37199 + (1));
seq__37146_37196 = G__37206;
chunk__37147_37197 = G__37207;
count__37148_37198 = G__37208;
i__37149_37199 = G__37209;
continue;
} else {
var temp__5735__auto___37210 = cljs.core.seq.call(null,seq__37146_37196);
if(temp__5735__auto___37210){
var seq__37146_37211__$1 = temp__5735__auto___37210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37146_37211__$1)){
var c__4556__auto___37212 = cljs.core.chunk_first.call(null,seq__37146_37211__$1);
var G__37213 = cljs.core.chunk_rest.call(null,seq__37146_37211__$1);
var G__37214 = c__4556__auto___37212;
var G__37215 = cljs.core.count.call(null,c__4556__auto___37212);
var G__37216 = (0);
seq__37146_37196 = G__37213;
chunk__37147_37197 = G__37214;
count__37148_37198 = G__37215;
i__37149_37199 = G__37216;
continue;
} else {
var vec__37165_37217 = cljs.core.first.call(null,seq__37146_37211__$1);
var name_37218 = cljs.core.nth.call(null,vec__37165_37217,(0),null);
var map__37168_37219 = cljs.core.nth.call(null,vec__37165_37217,(1),null);
var map__37168_37220__$1 = (((((!((map__37168_37219 == null))))?(((((map__37168_37219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37168_37219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37168_37219):map__37168_37219);
var doc_37221 = cljs.core.get.call(null,map__37168_37220__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37222 = cljs.core.get.call(null,map__37168_37220__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37218);

cljs.core.println.call(null," ",arglists_37222);

if(cljs.core.truth_(doc_37221)){
cljs.core.println.call(null," ",doc_37221);
} else {
}


var G__37223 = cljs.core.next.call(null,seq__37146_37211__$1);
var G__37224 = null;
var G__37225 = (0);
var G__37226 = (0);
seq__37146_37196 = G__37223;
chunk__37147_37197 = G__37224;
count__37148_37198 = G__37225;
i__37149_37199 = G__37226;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__37170 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37171 = null;
var count__37172 = (0);
var i__37173 = (0);
while(true){
if((i__37173 < count__37172)){
var role = cljs.core._nth.call(null,chunk__37171,i__37173);
var temp__5735__auto___37227__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___37227__$1)){
var spec_37228 = temp__5735__auto___37227__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37228));
} else {
}


var G__37229 = seq__37170;
var G__37230 = chunk__37171;
var G__37231 = count__37172;
var G__37232 = (i__37173 + (1));
seq__37170 = G__37229;
chunk__37171 = G__37230;
count__37172 = G__37231;
i__37173 = G__37232;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__37170);
if(temp__5735__auto____$1){
var seq__37170__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37170__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__37170__$1);
var G__37233 = cljs.core.chunk_rest.call(null,seq__37170__$1);
var G__37234 = c__4556__auto__;
var G__37235 = cljs.core.count.call(null,c__4556__auto__);
var G__37236 = (0);
seq__37170 = G__37233;
chunk__37171 = G__37234;
count__37172 = G__37235;
i__37173 = G__37236;
continue;
} else {
var role = cljs.core.first.call(null,seq__37170__$1);
var temp__5735__auto___37237__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___37237__$2)){
var spec_37238 = temp__5735__auto___37237__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37238));
} else {
}


var G__37239 = cljs.core.next.call(null,seq__37170__$1);
var G__37240 = null;
var G__37241 = (0);
var G__37242 = (0);
seq__37170 = G__37239;
chunk__37171 = G__37240;
count__37172 = G__37241;
i__37173 = G__37242;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__37243 = cljs.core.conj.call(null,via,t);
var G__37244 = cljs.core.ex_cause.call(null,t);
via = G__37243;
t = G__37244;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__37247 = datafied_throwable;
var map__37247__$1 = (((((!((map__37247 == null))))?(((((map__37247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37247):map__37247);
var via = cljs.core.get.call(null,map__37247__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__37247__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__37247__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__37248 = cljs.core.last.call(null,via);
var map__37248__$1 = (((((!((map__37248 == null))))?(((((map__37248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37248):map__37248);
var type = cljs.core.get.call(null,map__37248__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__37248__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__37248__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__37249 = data;
var map__37249__$1 = (((((!((map__37249 == null))))?(((((map__37249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37249):map__37249);
var problems = cljs.core.get.call(null,map__37249__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__37249__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__37249__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__37250 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__37250__$1 = (((((!((map__37250 == null))))?(((((map__37250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37250):map__37250);
var top_data = map__37250__$1;
var source = cljs.core.get.call(null,map__37250__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__37255 = phase;
var G__37255__$1 = (((G__37255 instanceof cljs.core.Keyword))?G__37255.fqn:null);
switch (G__37255__$1) {
case "read-source":
var map__37256 = data;
var map__37256__$1 = (((((!((map__37256 == null))))?(((((map__37256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37256):map__37256);
var line = cljs.core.get.call(null,map__37256__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__37256__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__37258 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__37258__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__37258,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37258);
var G__37258__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__37258__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37258__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__37258__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37258__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__37259 = top_data;
var G__37259__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__37259,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37259);
var G__37259__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__37259__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37259__$1);
var G__37259__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__37259__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37259__$2);
var G__37259__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__37259__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37259__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__37259__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37259__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__37260 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__37260,(0),null);
var method = cljs.core.nth.call(null,vec__37260,(1),null);
var file = cljs.core.nth.call(null,vec__37260,(2),null);
var line = cljs.core.nth.call(null,vec__37260,(3),null);
var G__37263 = top_data;
var G__37263__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__37263,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__37263);
var G__37263__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__37263__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__37263__$1);
var G__37263__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__37263__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__37263__$2);
var G__37263__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__37263__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37263__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__37263__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37263__$4;
}

break;
case "execution":
var vec__37264 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__37264,(0),null);
var method = cljs.core.nth.call(null,vec__37264,(1),null);
var file = cljs.core.nth.call(null,vec__37264,(2),null);
var line = cljs.core.nth.call(null,vec__37264,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__37246_SHARP_){
var or__4126__auto__ = (p1__37246_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__37246_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__37267 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__37267__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__37267,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__37267);
var G__37267__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__37267__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37267__$1);
var G__37267__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__37267__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__37267__$2);
var G__37267__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__37267__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__37267__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__37267__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37267__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37255__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__37271){
var map__37272 = p__37271;
var map__37272__$1 = (((((!((map__37272 == null))))?(((((map__37272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37272):map__37272);
var triage_data = map__37272__$1;
var phase = cljs.core.get.call(null,map__37272__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__37272__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__37272__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__37272__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__37272__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__37272__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__37272__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__37272__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__37274 = phase;
var G__37274__$1 = (((G__37274 instanceof cljs.core.Keyword))?G__37274.fqn:null);
switch (G__37274__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37275_37284 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37276_37285 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37277_37286 = true;
var _STAR_print_fn_STAR__temp_val__37278_37287 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37277_37286);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37278_37287);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__37269_SHARP_){
return cljs.core.dissoc.call(null,p1__37269_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37276_37285);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37275_37284);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37279_37288 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37280_37289 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37281_37290 = true;
var _STAR_print_fn_STAR__temp_val__37282_37291 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37281_37290);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37282_37291);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__37270_SHARP_){
return cljs.core.dissoc.call(null,p1__37270_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37280_37289);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37279_37288);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37274__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1590594104650
