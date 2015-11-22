;(ns cljs-base.core
;	(:require [clojure.browser.repl :as repl]))
(ns cljs-base.core)

;(defonce conn
;	(repl/connect "http://localhost:9000/repl"))/

(enable-console-print!)

(println "Hello world watchers!!!!")

(defn foo [a b]
	(* a b)) 

