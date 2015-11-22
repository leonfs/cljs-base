// Compiled by ClojureScript 1.7.170 {}
goog.provide('clojure.browser.event');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events.EventTarget');
goog.require('goog.events.EventType');

/**
 * @interface
 */
clojure.browser.event.IEventType = function(){};

clojure.browser.event.event_types = (function clojure$browser$event$event_types(this$){
if((!((this$ == null))) && (!((this$.clojure$browser$event$IEventType$event_types$arity$1 == null)))){
return this$.clojure$browser$event$IEventType$event_types$arity$1(this$);
} else {
var x__3093__auto__ = (((this$ == null))?null:this$);
var m__3094__auto__ = (clojure.browser.event.event_types[goog.typeOf(x__3093__auto__)]);
if(!((m__3094__auto__ == null))){
return m__3094__auto__.call(null,this$);
} else {
var m__3094__auto____$1 = (clojure.browser.event.event_types["_"]);
if(!((m__3094__auto____$1 == null))){
return m__3094__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventType.event-types",this$);
}
}
}
});

goog.events.EventTarget.prototype.clojure$browser$event$IEventType$ = true;

goog.events.EventTarget.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (this$__$1){
return (function (p__4133){
var vec__4134 = p__4133;
var k = cljs.core.nth.call(null,vec__4134,(0),null);
var v = cljs.core.nth.call(null,vec__4134,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.events.EventType))));
});
if(typeof Element !== 'undefined'){
Element.prototype.clojure$browser$event$IEventType$ = true;

Element.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (this$__$1){
return (function (p__4135){
var vec__4136 = p__4135;
var k = cljs.core.nth.call(null,vec__4136,(0),null);
var v = cljs.core.nth.call(null,vec__4136,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.events.EventType))));
});
} else {
}
clojure.browser.event.listen = (function clojure$browser$event$listen(var_args){
var args4137 = [];
var len__3340__auto___4140 = arguments.length;
var i__3341__auto___4141 = (0);
while(true){
if((i__3341__auto___4141 < len__3340__auto___4140)){
args4137.push((arguments[i__3341__auto___4141]));

var G__4142 = (i__3341__auto___4141 + (1));
i__3341__auto___4141 = G__4142;
continue;
} else {
}
break;
}

var G__4139 = args4137.length;
switch (G__4139) {
case 3:
return clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4137.length)].join('')));

}
});

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3 = (function (src,type,fn){
return clojure.browser.event.listen.call(null,src,type,fn,false);
});

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$4 = (function (src,type,fn,capture_QMARK_){
return goog.events.listen(src,cljs.core.get.call(null,clojure.browser.event.event_types.call(null,src),type,type),fn,capture_QMARK_);
});

clojure.browser.event.listen.cljs$lang$maxFixedArity = 4;
clojure.browser.event.listen_once = (function clojure$browser$event$listen_once(var_args){
var args4144 = [];
var len__3340__auto___4147 = arguments.length;
var i__3341__auto___4148 = (0);
while(true){
if((i__3341__auto___4148 < len__3340__auto___4147)){
args4144.push((arguments[i__3341__auto___4148]));

var G__4149 = (i__3341__auto___4148 + (1));
i__3341__auto___4148 = G__4149;
continue;
} else {
}
break;
}

var G__4146 = args4144.length;
switch (G__4146) {
case 3:
return clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4144.length)].join('')));

}
});

clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$3 = (function (src,type,fn){
return clojure.browser.event.listen_once.call(null,src,type,fn,false);
});

clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$4 = (function (src,type,fn,capture_QMARK_){
return goog.events.listenOnce(src,cljs.core.get.call(null,clojure.browser.event.event_types.call(null,src),type,type),fn,capture_QMARK_);
});

clojure.browser.event.listen_once.cljs$lang$maxFixedArity = 4;
clojure.browser.event.unlisten = (function clojure$browser$event$unlisten(var_args){
var args4151 = [];
var len__3340__auto___4154 = arguments.length;
var i__3341__auto___4155 = (0);
while(true){
if((i__3341__auto___4155 < len__3340__auto___4154)){
args4151.push((arguments[i__3341__auto___4155]));

var G__4156 = (i__3341__auto___4155 + (1));
i__3341__auto___4155 = G__4156;
continue;
} else {
}
break;
}

var G__4153 = args4151.length;
switch (G__4153) {
case 3:
return clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4151.length)].join('')));

}
});

clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$3 = (function (src,type,fn){
return clojure.browser.event.unlisten.call(null,src,type,fn,false);
});

clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$4 = (function (src,type,fn,capture_QMARK_){
return goog.events.unlisten(src,cljs.core.get.call(null,clojure.browser.event.event_types.call(null,src),type,type),fn,capture_QMARK_);
});

clojure.browser.event.unlisten.cljs$lang$maxFixedArity = 4;
clojure.browser.event.unlisten_by_key = (function clojure$browser$event$unlisten_by_key(key){
return goog.events.unlistenByKey(key);
});
clojure.browser.event.dispatch_event = (function clojure$browser$event$dispatch_event(src,event){
return goog.events.dispatchEvent(src,event);
});
clojure.browser.event.expose = (function clojure$browser$event$expose(e){
return goog.events.expose(e);
});
clojure.browser.event.fire_listeners = (function clojure$browser$event$fire_listeners(obj,type,capture,event){
return null;
});
clojure.browser.event.total_listener_count = (function clojure$browser$event$total_listener_count(){
return goog.events.getTotalListenerCount();
});
clojure.browser.event.get_listener = (function clojure$browser$event$get_listener(src,type,listener,opt_capt,opt_handler){
return null;
});
clojure.browser.event.all_listeners = (function clojure$browser$event$all_listeners(obj,type,capture){
return null;
});
clojure.browser.event.unique_event_id = (function clojure$browser$event$unique_event_id(event_type){
return null;
});
clojure.browser.event.has_listener = (function clojure$browser$event$has_listener(obj,opt_type,opt_capture){
return null;
});
clojure.browser.event.remove_all = (function clojure$browser$event$remove_all(opt_obj,opt_type,opt_capt){
return null;
});
