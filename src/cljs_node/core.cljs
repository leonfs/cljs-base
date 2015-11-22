(ns cljs-node.core
	(:require [cljs.nodejs :as nodejs]))

(nodejs/enable-util-print!)

(defn -main [& argss]
	(println "Hello world!"))

(set! *main-cli-fn* -main)