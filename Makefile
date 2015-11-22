
build:
	java -cp cljs.jar:src clojure.main build.clj

nbuild:
	java -cp cljs.jar:src clojure.main node.clj

watch:
	java -cp cljs.jar:src clojure.main watch.clj

repl:
	rlwrap java -cp cljs.jar:src clojure.main repl.clj

nrepl:
	rlwrap java -cp cljs.jar:src clojure.main node_repl.clj

release:
	java -cp cljs.jar:src clojure.main release.clj


