// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__4224_4238 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__4225_4239 = null;
var count__4226_4240 = (0);
var i__4227_4241 = (0);
while(true){
if((i__4227_4241 < count__4226_4240)){
var f_4242 = cljs.core._nth.call(null,chunk__4225_4239,i__4227_4241);
cljs.core.println.call(null,"  ",f_4242);

var G__4243 = seq__4224_4238;
var G__4244 = chunk__4225_4239;
var G__4245 = count__4226_4240;
var G__4246 = (i__4227_4241 + (1));
seq__4224_4238 = G__4243;
chunk__4225_4239 = G__4244;
count__4226_4240 = G__4245;
i__4227_4241 = G__4246;
continue;
} else {
var temp__4425__auto___4247 = cljs.core.seq.call(null,seq__4224_4238);
if(temp__4425__auto___4247){
var seq__4224_4248__$1 = temp__4425__auto___4247;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4224_4248__$1)){
var c__3197__auto___4249 = cljs.core.chunk_first.call(null,seq__4224_4248__$1);
var G__4250 = cljs.core.chunk_rest.call(null,seq__4224_4248__$1);
var G__4251 = c__3197__auto___4249;
var G__4252 = cljs.core.count.call(null,c__3197__auto___4249);
var G__4253 = (0);
seq__4224_4238 = G__4250;
chunk__4225_4239 = G__4251;
count__4226_4240 = G__4252;
i__4227_4241 = G__4253;
continue;
} else {
var f_4254 = cljs.core.first.call(null,seq__4224_4248__$1);
cljs.core.println.call(null,"  ",f_4254);

var G__4255 = cljs.core.next.call(null,seq__4224_4248__$1);
var G__4256 = null;
var G__4257 = (0);
var G__4258 = (0);
seq__4224_4238 = G__4255;
chunk__4225_4239 = G__4256;
count__4226_4240 = G__4257;
i__4227_4241 = G__4258;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_4259 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__2822__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__2822__auto__)){
return or__2822__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_4259);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_4259)))?cljs.core.second.call(null,arglists_4259):arglists_4259));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__4228 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__4229 = null;
var count__4230 = (0);
var i__4231 = (0);
while(true){
if((i__4231 < count__4230)){
var vec__4232 = cljs.core._nth.call(null,chunk__4229,i__4231);
var name = cljs.core.nth.call(null,vec__4232,(0),null);
var map__4233 = cljs.core.nth.call(null,vec__4232,(1),null);
var map__4233__$1 = ((((!((map__4233 == null)))?((((map__4233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4233):map__4233);
var doc = cljs.core.get.call(null,map__4233__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__4233__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__4260 = seq__4228;
var G__4261 = chunk__4229;
var G__4262 = count__4230;
var G__4263 = (i__4231 + (1));
seq__4228 = G__4260;
chunk__4229 = G__4261;
count__4230 = G__4262;
i__4231 = G__4263;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__4228);
if(temp__4425__auto__){
var seq__4228__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4228__$1)){
var c__3197__auto__ = cljs.core.chunk_first.call(null,seq__4228__$1);
var G__4264 = cljs.core.chunk_rest.call(null,seq__4228__$1);
var G__4265 = c__3197__auto__;
var G__4266 = cljs.core.count.call(null,c__3197__auto__);
var G__4267 = (0);
seq__4228 = G__4264;
chunk__4229 = G__4265;
count__4230 = G__4266;
i__4231 = G__4267;
continue;
} else {
var vec__4235 = cljs.core.first.call(null,seq__4228__$1);
var name = cljs.core.nth.call(null,vec__4235,(0),null);
var map__4236 = cljs.core.nth.call(null,vec__4235,(1),null);
var map__4236__$1 = ((((!((map__4236 == null)))?((((map__4236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4236):map__4236);
var doc = cljs.core.get.call(null,map__4236__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__4236__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__4268 = cljs.core.next.call(null,seq__4228__$1);
var G__4269 = null;
var G__4270 = (0);
var G__4271 = (0);
seq__4228 = G__4268;
chunk__4229 = G__4269;
count__4230 = G__4270;
i__4231 = G__4271;
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
}
});
