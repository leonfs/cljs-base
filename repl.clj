(require 'cljs.repl)
(require 'cljs.build.api)
(require 'cljs.repl.browser)

(cljs.build.api/build "src"
	{:main 'cljs-base.core
	 :output-to "out/main.js"
	 :verbose true})

(cljs.repl/repl (cljs.repl.browser/repl-env)
	:watch "src"
	:output-dir "out")


(require '[cljs-base.core :as base])

	