;(ns cljs-base.core
;	(:require [clojure.browser.repl :as repl]))
(ns cljs-base.core
	(:require [goog.dom :as dom]
			  [goog.dom.classes :as classes]
			  [goog.events :as events])
	(:import  [goog Timer]))

;(defonce conn
	;(repl/connect "http://localhost:9000/repl"))/

(let [element (dom/createDom "div" "some-class" "Hello, World!")]
	(classes/enable element "another class" true)
	(-> (dom/getDocument)
		.-body
		(dom/appendChild element))
	(doto (Timer. 1000)
		(events/listen "tick" #(.warn js/console "still here!"))
		(.start)))

