
build:
	java -cp cljs.jar:react-0.12.2-8.jar:src clojure.main build.clj

nbuild:
	java -cp cljs.jar:src clojure.main node.clj

watch:
	java -cp cljs.jar:src:react-0.12.2.8.jar clojure.main watch.clj

repl:
	rlwrap java -cp cljs.jar:src clojure.main repl.clj

nrepl:
	rlwrap java -cp cljs.jar:src clojure.main node_repl.clj

release:
	java -cp cljs.jar:src clojure.main release.clj

set-up:
	brew install wget
	wget https://github.com/clojure/clojurescript/releases/download/r1.7.170/cljs.jar
	wget https://clojars.org/repo/cljsjs/react/0.12.2-8/react-0.12.2-8.jar


