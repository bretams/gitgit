// Compiled by ClojureScript 1.10.764 {}
goog.provide('reitit.coercion');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('reitit.impl');

/**
 * Pluggable coercion protocol
 * @interface
 */
reitit.coercion.Coercion = function(){};

var reitit$coercion$Coercion$_get_name$dyn_34842 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.coercion._get_name[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (reitit.coercion._get_name["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-get-name",this$);
}
}
});
/**
 * Keyword name for the coercion
 */
reitit.coercion._get_name = (function reitit$coercion$_get_name(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_get_name$arity$1 == null)))))){
return this$.reitit$coercion$Coercion$_get_name$arity$1(this$);
} else {
return reitit$coercion$Coercion$_get_name$dyn_34842.call(null,this$);
}
});

var reitit$coercion$Coercion$_get_options$dyn_34843 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.coercion._get_options[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (reitit.coercion._get_options["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-get-options",this$);
}
}
});
/**
 * Coercion options
 */
reitit.coercion._get_options = (function reitit$coercion$_get_options(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_get_options$arity$1 == null)))))){
return this$.reitit$coercion$Coercion$_get_options$arity$1(this$);
} else {
return reitit$coercion$Coercion$_get_options$dyn_34843.call(null,this$);
}
});

var reitit$coercion$Coercion$_get_apidocs$dyn_34844 = (function (this$,specification,data){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.coercion._get_apidocs[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,specification,data);
} else {
var m__4426__auto__ = (reitit.coercion._get_apidocs["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,specification,data);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-get-apidocs",this$);
}
}
});
/**
 * Returns api documentation
 */
reitit.coercion._get_apidocs = (function reitit$coercion$_get_apidocs(this$,specification,data){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_get_apidocs$arity$3 == null)))))){
return this$.reitit$coercion$Coercion$_get_apidocs$arity$3(this$,specification,data);
} else {
return reitit$coercion$Coercion$_get_apidocs$dyn_34844.call(null,this$,specification,data);
}
});

var reitit$coercion$Coercion$_compile_model$dyn_34845 = (function (this$,model,name){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.coercion._compile_model[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,model,name);
} else {
var m__4426__auto__ = (reitit.coercion._compile_model["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,model,name);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-compile-model",this$);
}
}
});
/**
 * Compiles a model
 */
reitit.coercion._compile_model = (function reitit$coercion$_compile_model(this$,model,name){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_compile_model$arity$3 == null)))))){
return this$.reitit$coercion$Coercion$_compile_model$arity$3(this$,model,name);
} else {
return reitit$coercion$Coercion$_compile_model$dyn_34845.call(null,this$,model,name);
}
});

var reitit$coercion$Coercion$_open_model$dyn_34846 = (function (this$,model){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.coercion._open_model[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,model);
} else {
var m__4426__auto__ = (reitit.coercion._open_model["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,model);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-open-model",this$);
}
}
});
/**
 * Returns a new model which allows extra keys in maps
 */
reitit.coercion._open_model = (function reitit$coercion$_open_model(this$,model){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_open_model$arity$2 == null)))))){
return this$.reitit$coercion$Coercion$_open_model$arity$2(this$,model);
} else {
return reitit$coercion$Coercion$_open_model$dyn_34846.call(null,this$,model);
}
});

var reitit$coercion$Coercion$_encode_error$dyn_34847 = (function (this$,error){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.coercion._encode_error[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,error);
} else {
var m__4426__auto__ = (reitit.coercion._encode_error["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,error);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-encode-error",this$);
}
}
});
/**
 * Converts error in to a serializable format
 */
reitit.coercion._encode_error = (function reitit$coercion$_encode_error(this$,error){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_encode_error$arity$2 == null)))))){
return this$.reitit$coercion$Coercion$_encode_error$arity$2(this$,error);
} else {
return reitit$coercion$Coercion$_encode_error$dyn_34847.call(null,this$,error);
}
});

var reitit$coercion$Coercion$_request_coercer$dyn_34848 = (function (this$,type,model){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.coercion._request_coercer[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,type,model);
} else {
var m__4426__auto__ = (reitit.coercion._request_coercer["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,type,model);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-request-coercer",this$);
}
}
});
/**
 * Returns a `value format => value` request coercion function
 */
reitit.coercion._request_coercer = (function reitit$coercion$_request_coercer(this$,type,model){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_request_coercer$arity$3 == null)))))){
return this$.reitit$coercion$Coercion$_request_coercer$arity$3(this$,type,model);
} else {
return reitit$coercion$Coercion$_request_coercer$dyn_34848.call(null,this$,type,model);
}
});

var reitit$coercion$Coercion$_response_coercer$dyn_34849 = (function (this$,model){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.coercion._response_coercer[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,model);
} else {
var m__4426__auto__ = (reitit.coercion._response_coercer["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,model);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-response-coercer",this$);
}
}
});
/**
 * Returns a `value format => value` response coercion function
 */
reitit.coercion._response_coercer = (function reitit$coercion$_response_coercer(this$,model){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_response_coercer$arity$2 == null)))))){
return this$.reitit$coercion$Coercion$_response_coercer$arity$2(this$,model);
} else {
return reitit$coercion$Coercion$_response_coercer$dyn_34849.call(null,this$,model);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.coercion.CoercionError = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.coercion.CoercionError.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k34851,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__34855 = k34851;
switch (G__34855) {
default:
return cljs.core.get.call(null,self__.__extmap,k34851,else__4383__auto__);

}
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__34856){
var vec__34857 = p__34856;
var k__4403__auto__ = cljs.core.nth.call(null,vec__34857,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__34857,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#reitit.coercion.CoercionError{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34850){
var self__ = this;
var G__34850__$1 = this;
return (new cljs.core.RecordIter((0),G__34850__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new reitit.coercion.CoercionError(self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-537525465 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34852,other34853){
var self__ = this;
var this34852__$1 = this;
return (((!((other34853 == null)))) && ((this34852__$1.constructor === other34853.constructor)) && (cljs.core._EQ_.call(null,this34852__$1.__extmap,other34853.__extmap)));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new reitit.coercion.CoercionError(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__34850){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__34860 = cljs.core.keyword_identical_QMARK_;
var expr__34861 = k__4388__auto__;
return (new reitit.coercion.CoercionError(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__34850),null));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__34850){
var self__ = this;
var this__4379__auto____$1 = this;
return (new reitit.coercion.CoercionError(G__34850,self__.__extmap,self__.__hash));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(reitit.coercion.CoercionError.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(reitit.coercion.CoercionError.cljs$lang$type = true);

(reitit.coercion.CoercionError.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"reitit.coercion/CoercionError",null,(1),null));
}));

(reitit.coercion.CoercionError.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"reitit.coercion/CoercionError");
}));

/**
 * Positional factory function for reitit.coercion/CoercionError.
 */
reitit.coercion.__GT_CoercionError = (function reitit$coercion$__GT_CoercionError(){
return (new reitit.coercion.CoercionError(null,null,null));
});

/**
 * Factory function for reitit.coercion/CoercionError, taking a map of keywords to field values.
 */
reitit.coercion.map__GT_CoercionError = (function reitit$coercion$map__GT_CoercionError(G__34854){
var extmap__4419__auto__ = (function (){var G__34863 = cljs.core.dissoc.call(null,G__34854);
if(cljs.core.record_QMARK_.call(null,G__34854)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__34863);
} else {
return G__34863;
}
})();
return (new reitit.coercion.CoercionError(null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

reitit.coercion.error_QMARK_ = (function reitit$coercion$error_QMARK_(x){
return (x instanceof reitit.coercion.CoercionError);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.coercion.ParameterCoercion = (function (in$,style,keywordize_QMARK_,open_QMARK_,__meta,__extmap,__hash){
this.in$ = in$;
this.style = style;
this.keywordize_QMARK_ = keywordize_QMARK_;
this.open_QMARK_ = open_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.coercion.ParameterCoercion.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k34866,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__34870 = k34866;
var G__34870__$1 = (((G__34870 instanceof cljs.core.Keyword))?G__34870.fqn:null);
switch (G__34870__$1) {
case "in":
return self__.in$;

break;
case "style":
return self__.style;

break;
case "keywordize?":
return self__.keywordize_QMARK_;

break;
case "open?":
return self__.open_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34866,else__4383__auto__);

}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__34871){
var vec__34872 = p__34871;
var k__4403__auto__ = cljs.core.nth.call(null,vec__34872,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__34872,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#reitit.coercion.ParameterCoercion{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",-496642736),self__.style],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),self__.keywordize_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"open?","open?",1238443125),self__.open_QMARK_],null))], null),self__.__extmap));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34865){
var self__ = this;
var G__34865__$1 = this;
return (new cljs.core.RecordIter((0),G__34865__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),new cljs.core.Keyword(null,"open?","open?",1238443125)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1253949273 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34867,other34868){
var self__ = this;
var this34867__$1 = this;
return (((!((other34868 == null)))) && ((this34867__$1.constructor === other34868.constructor)) && (cljs.core._EQ_.call(null,this34867__$1.in,other34868.in)) && (cljs.core._EQ_.call(null,this34867__$1.style,other34868.style)) && (cljs.core._EQ_.call(null,this34867__$1.keywordize_QMARK_,other34868.keywordize_QMARK_)) && (cljs.core._EQ_.call(null,this34867__$1.open_QMARK_,other34868.open_QMARK_)) && (cljs.core._EQ_.call(null,this34867__$1.__extmap,other34868.__extmap)));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),null,new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"open?","open?",1238443125),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__34865){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__34875 = cljs.core.keyword_identical_QMARK_;
var expr__34876 = k__4388__auto__;
if(cljs.core.truth_(pred__34875.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__34876))){
return (new reitit.coercion.ParameterCoercion(G__34865,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34875.call(null,new cljs.core.Keyword(null,"style","style",-496642736),expr__34876))){
return (new reitit.coercion.ParameterCoercion(self__.in$,G__34865,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34875.call(null,new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),expr__34876))){
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,G__34865,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34875.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125),expr__34876))){
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,G__34865,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__34865),null));
}
}
}
}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"style","style",-496642736),self__.style,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),self__.keywordize_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"open?","open?",1238443125),self__.open_QMARK_,null))], null),self__.__extmap));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__34865){
var self__ = this;
var this__4379__auto____$1 = this;
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,G__34865,self__.__extmap,self__.__hash));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(reitit.coercion.ParameterCoercion.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"in","in",109346662,null),new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.Symbol(null,"keywordize?","keywordize?",1406224615,null),new cljs.core.Symbol(null,"open?","open?",-1415992644,null)], null);
}));

(reitit.coercion.ParameterCoercion.cljs$lang$type = true);

(reitit.coercion.ParameterCoercion.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"reitit.coercion/ParameterCoercion",null,(1),null));
}));

(reitit.coercion.ParameterCoercion.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"reitit.coercion/ParameterCoercion");
}));

/**
 * Positional factory function for reitit.coercion/ParameterCoercion.
 */
reitit.coercion.__GT_ParameterCoercion = (function reitit$coercion$__GT_ParameterCoercion(in$,style,keywordize_QMARK_,open_QMARK_){
return (new reitit.coercion.ParameterCoercion(in$,style,keywordize_QMARK_,open_QMARK_,null,null,null));
});

/**
 * Factory function for reitit.coercion/ParameterCoercion, taking a map of keywords to field values.
 */
reitit.coercion.map__GT_ParameterCoercion = (function reitit$coercion$map__GT_ParameterCoercion(G__34869){
var extmap__4419__auto__ = (function (){var G__34878 = cljs.core.dissoc.call(null,G__34869,new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),new cljs.core.Keyword(null,"open?","open?",1238443125));
if(cljs.core.record_QMARK_.call(null,G__34869)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__34878);
} else {
return G__34878;
}
})();
return (new reitit.coercion.ParameterCoercion(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__34869),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(G__34869),new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912).cljs$core$IFn$_invoke$arity$1(G__34869),new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(G__34869),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

reitit.coercion.default_parameter_coercion = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"query","query",-1288509510),reitit.coercion.__GT_ParameterCoercion.call(null,new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"string","string",-1989541586),true,true),new cljs.core.Keyword(null,"body","body",-2049205669),reitit.coercion.__GT_ParameterCoercion.call(null,new cljs.core.Keyword(null,"body-params","body-params",-369749490),new cljs.core.Keyword(null,"body","body",-2049205669),false,false),new cljs.core.Keyword(null,"form","form",-1624062471),reitit.coercion.__GT_ParameterCoercion.call(null,new cljs.core.Keyword(null,"form-params","form-params",1884296467),new cljs.core.Keyword(null,"string","string",-1989541586),true,true),new cljs.core.Keyword(null,"header","header",119441134),reitit.coercion.__GT_ParameterCoercion.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"string","string",-1989541586),true,true),new cljs.core.Keyword(null,"path","path",-188191168),reitit.coercion.__GT_ParameterCoercion.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"string","string",-1989541586),true,true)], null);
reitit.coercion.request_coercion_failed_BANG_ = (function reitit$coercion$request_coercion_failed_BANG_(result,coercion,value,in$,request){
throw cljs.core.ex_info.call(null,["Request coercion failed: ",cljs.core.pr_str.call(null,result)].join(''),cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,result),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.coercion","request-coercion","reitit.coercion/request-coercion",47377205),new cljs.core.Keyword(null,"coercion","coercion",904067157),coercion,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request","request",1772954723),in$], null),new cljs.core.Keyword(null,"request","request",1772954723),request], null)));
});
reitit.coercion.response_coercion_failed_BANG_ = (function reitit$coercion$response_coercion_failed_BANG_(result,coercion,value,request,response){
throw cljs.core.ex_info.call(null,["Response coercion failed: ",cljs.core.pr_str.call(null,result)].join(''),cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,result),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.coercion","response-coercion","reitit.coercion/response-coercion",-1532049609),new cljs.core.Keyword(null,"coercion","coercion",904067157),coercion,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.Keyword(null,"request","request",1772954723),request,new cljs.core.Keyword(null,"response","response",-1068424192),response], null)));
});
reitit.coercion.extract_request_format_default = (function reitit$coercion$extract_request_format_default(request){
return new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("muuntaja","request","muuntaja/request",-1616403792).cljs$core$IFn$_invoke$arity$1(request));
});
reitit.coercion.request_coercer = (function reitit$coercion$request_coercer(coercion,type,model,p__34880){
var map__34881 = p__34880;
var map__34881__$1 = (((((!((map__34881 == null))))?(((((map__34881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34881):map__34881);
var extract_request_format = cljs.core.get.call(null,map__34881__$1,new cljs.core.Keyword("reitit.coercion","extract-request-format","reitit.coercion/extract-request-format",-1687953607),reitit.coercion.extract_request_format_default);
var parameter_coercion = cljs.core.get.call(null,map__34881__$1,new cljs.core.Keyword("reitit.coercion","parameter-coercion","reitit.coercion/parameter-coercion",-1825124100),reitit.coercion.default_parameter_coercion);
if(cljs.core.truth_(coercion)){
var temp__5733__auto__ = parameter_coercion.call(null,type);
if(cljs.core.truth_(temp__5733__auto__)){
var map__34883 = temp__5733__auto__;
var map__34883__$1 = (((((!((map__34883 == null))))?(((((map__34883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34883):map__34883);
var keywordize_QMARK_ = cljs.core.get.call(null,map__34883__$1,new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912));
var open_QMARK_ = cljs.core.get.call(null,map__34883__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var in$ = cljs.core.get.call(null,map__34883__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var style = cljs.core.get.call(null,map__34883__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var transform = cljs.core.comp.call(null,(cljs.core.truth_(keywordize_QMARK_)?clojure.walk.keywordize_keys:cljs.core.identity),in$);
var model__$1 = (cljs.core.truth_(open_QMARK_)?reitit.coercion._open_model.call(null,coercion,model):model);
var coercer = reitit.coercion._request_coercer.call(null,coercion,style,model__$1);
return (function (request){
var value = transform.call(null,request);
var format = extract_request_format.call(null,request);
var result = coercer.call(null,value,format);
if(reitit.coercion.error_QMARK_.call(null,result)){
return reitit.coercion.request_coercion_failed_BANG_.call(null,result,coercion,value,in$,request);
} else {
return result;
}
});
} else {
return null;
}
} else {
return null;
}
});
reitit.coercion.extract_response_format_default = (function reitit$coercion$extract_response_format_default(request,_){
return new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("muuntaja","response","muuntaja/response",-1772248613).cljs$core$IFn$_invoke$arity$1(request));
});
reitit.coercion.response_coercer = (function reitit$coercion$response_coercer(coercion,body,p__34885){
var map__34886 = p__34885;
var map__34886__$1 = (((((!((map__34886 == null))))?(((((map__34886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34886):map__34886);
var extract_response_format = cljs.core.get.call(null,map__34886__$1,new cljs.core.Keyword(null,"extract-response-format","extract-response-format",-303544140),reitit.coercion.extract_response_format_default);
if(cljs.core.truth_(coercion)){
var temp__5733__auto__ = reitit.coercion._response_coercer.call(null,coercion,body);
if(cljs.core.truth_(temp__5733__auto__)){
var coercer = temp__5733__auto__;
return (function (request,response){
var format = extract_response_format.call(null,request,response);
var value = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response);
var result = coercer.call(null,value,format);
if(reitit.coercion.error_QMARK_.call(null,result)){
return reitit.coercion.response_coercion_failed_BANG_.call(null,result,coercion,value,request,response);
} else {
return result;
}
});
} else {
return null;
}
} else {
return null;
}
});
reitit.coercion.encode_error = (function reitit$coercion$encode_error(data){
return reitit.coercion._encode_error.call(null,new cljs.core.Keyword(null,"coercion","coercion",904067157).cljs$core$IFn$_invoke$arity$1(data),cljs.core.update.call(null,cljs.core.dissoc.call(null,data,new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)),new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion._get_name));
});
reitit.coercion.coerce_request = (function reitit$coercion$coerce_request(coercers,request){
return cljs.core.reduce_kv.call(null,(function (acc,k,coercer){
return reitit.impl.fast_assoc.call(null,acc,k,coercer.call(null,request));
}),cljs.core.PersistentArrayMap.EMPTY,coercers);
});
reitit.coercion.coerce_response = (function reitit$coercion$coerce_response(coercers,request,response){
if(cljs.core.truth_(response)){
var temp__5733__auto__ = (function (){var or__4126__auto__ = coercers.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return coercers.call(null,new cljs.core.Keyword(null,"default","default",-1987822328));
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var coercer = temp__5733__auto__;
return reitit.impl.fast_assoc.call(null,response,new cljs.core.Keyword(null,"body","body",-2049205669),coercer.call(null,request,response));
} else {
return response;
}
} else {
return null;
}
});
reitit.coercion.request_coercers = (function reitit$coercion$request_coercers(coercion,parameters,opts){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.second,(function (){var iter__4529__auto__ = (function reitit$coercion$request_coercers_$_iter__34888(s__34889){
return (new cljs.core.LazySeq(null,(function (){
var s__34889__$1 = s__34889;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__34889__$1);
if(temp__5735__auto__){
var s__34889__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34889__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__34889__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__34891 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__34890 = (0);
while(true){
if((i__34890 < size__4528__auto__)){
var vec__34892 = cljs.core._nth.call(null,c__4527__auto__,i__34890);
var k = cljs.core.nth.call(null,vec__34892,(0),null);
var v = cljs.core.nth.call(null,vec__34892,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__34891,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reitit.coercion.request_coercer.call(null,coercion,k,v,opts)], null));

var G__34898 = (i__34890 + (1));
i__34890 = G__34898;
continue;
} else {
var G__34899 = (i__34890 + (1));
i__34890 = G__34899;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34891),reitit$coercion$request_coercers_$_iter__34888.call(null,cljs.core.chunk_rest.call(null,s__34889__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34891),null);
}
} else {
var vec__34895 = cljs.core.first.call(null,s__34889__$2);
var k = cljs.core.nth.call(null,vec__34895,(0),null);
var v = cljs.core.nth.call(null,vec__34895,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reitit.coercion.request_coercer.call(null,coercion,k,v,opts)], null),reitit$coercion$request_coercers_$_iter__34888.call(null,cljs.core.rest.call(null,s__34889__$2)));
} else {
var G__34900 = cljs.core.rest.call(null,s__34889__$2);
s__34889__$1 = G__34900;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,parameters);
})()));
});
reitit.coercion.response_coercers = (function reitit$coercion$response_coercers(coercion,responses,opts){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.second,(function (){var iter__4529__auto__ = (function reitit$coercion$response_coercers_$_iter__34901(s__34902){
return (new cljs.core.LazySeq(null,(function (){
var s__34902__$1 = s__34902;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__34902__$1);
if(temp__5735__auto__){
var s__34902__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34902__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__34902__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__34904 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__34903 = (0);
while(true){
if((i__34903 < size__4528__auto__)){
var vec__34905 = cljs.core._nth.call(null,c__4527__auto__,i__34903);
var status = cljs.core.nth.call(null,vec__34905,(0),null);
var map__34908 = cljs.core.nth.call(null,vec__34905,(1),null);
var map__34908__$1 = (((((!((map__34908 == null))))?(((((map__34908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34908):map__34908);
var body = cljs.core.get.call(null,map__34908__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core.truth_(body)){
cljs.core.chunk_append.call(null,b__34904,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,reitit.coercion.response_coercer.call(null,coercion,body,opts)], null));

var G__34915 = (i__34903 + (1));
i__34903 = G__34915;
continue;
} else {
var G__34916 = (i__34903 + (1));
i__34903 = G__34916;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34904),reitit$coercion$response_coercers_$_iter__34901.call(null,cljs.core.chunk_rest.call(null,s__34902__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34904),null);
}
} else {
var vec__34910 = cljs.core.first.call(null,s__34902__$2);
var status = cljs.core.nth.call(null,vec__34910,(0),null);
var map__34913 = cljs.core.nth.call(null,vec__34910,(1),null);
var map__34913__$1 = (((((!((map__34913 == null))))?(((((map__34913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34913):map__34913);
var body = cljs.core.get.call(null,map__34913__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core.truth_(body)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,reitit.coercion.response_coercer.call(null,coercion,body,opts)], null),reitit$coercion$response_coercers_$_iter__34901.call(null,cljs.core.rest.call(null,s__34902__$2)));
} else {
var G__34917 = cljs.core.rest.call(null,s__34902__$2);
s__34902__$1 = G__34917;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,responses);
})()));
});
reitit.coercion.get_apidocs = (function reitit$coercion$get_apidocs(coercion,specification,data){
var swagger_parameter = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"formData","formData",-1155796695),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"multipart","multipart",1158197946),new cljs.core.Keyword(null,"formData","formData",-1155796695)], null);
var G__34918 = specification;
var G__34918__$1 = (((G__34918 instanceof cljs.core.Keyword))?G__34918.fqn:null);
switch (G__34918__$1) {
case "swagger":
return reitit.coercion._get_apidocs.call(null,coercion,specification,cljs.core.update.call(null,data,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),(function (parameters){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,(function (p__34919){
var vec__34920 = p__34919;
var k = cljs.core.nth.call(null,vec__34920,(0),null);
var v = cljs.core.nth.call(null,vec__34920,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [swagger_parameter.call(null,k),v], null);
}),parameters)));
})));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34918__$1)].join('')));

}
});
/**
 * A router :compile implementation which reads the `:parameters`
 *   and `:coercion` data to create compiled coercers into Match under
 *   `:result. A pre-requisite to use [[coerce!]].
 */
reitit.coercion.compile_request_coercers = (function reitit$coercion$compile_request_coercers(p__34924,opts){
var vec__34925 = p__34924;
var _ = cljs.core.nth.call(null,vec__34925,(0),null);
var map__34928 = cljs.core.nth.call(null,vec__34925,(1),null);
var map__34928__$1 = (((((!((map__34928 == null))))?(((((map__34928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34928):map__34928);
var parameters = cljs.core.get.call(null,map__34928__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var coercion = cljs.core.get.call(null,map__34928__$1,new cljs.core.Keyword(null,"coercion","coercion",904067157));
if(cljs.core.truth_((function (){var and__4115__auto__ = parameters;
if(cljs.core.truth_(and__4115__auto__)){
return coercion;
} else {
return and__4115__auto__;
}
})())){
return reitit.coercion.request_coercers.call(null,coercion,parameters,opts);
} else {
return null;
}
});
/**
 * Returns a map of coerced input parameters using pre-compiled
 *   coercers under `:result` (provided by [[compile-request-coercers]].
 *   Throws `ex-info` if parameters can't be coerced
 *   If coercion or parameters are not defined, return `nil`
 */
reitit.coercion.coerce_BANG_ = (function reitit$coercion$coerce_BANG_(match){
var temp__5733__auto__ = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(match);
if(cljs.core.truth_(temp__5733__auto__)){
var coercers = temp__5733__auto__;
return reitit.coercion.coerce_request.call(null,coercers,match);
} else {
return null;
}
});

//# sourceMappingURL=coercion.js.map?rel=1590594100270
