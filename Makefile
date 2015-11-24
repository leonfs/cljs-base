
build:
	java -cp lib/*:src clojure.main build.clj

nbuild:
	java -cp lib/*:src clojure.main node.clj

watch:
	java -cp lib/*:src clojure.main watch.clj

repl:
	rlwrap java -cp lib/*:src clojure.main repl.clj

nrepl:
	rlwrap java -cp lib/*:src clojure.main node_repl.clj

release:
	java -cp lib/*:src clojure.main release.clj

dev-tools:
	npm install
	brew install wget

lib-deps:
	rm -rf lib
	mkdir lib
	wget https://github.com/clojure/clojurescript/releases/download/r1.7.170/cljs.jar -O lib/cljs.jar
	wget https://clojars.org/repo/cljsjs/react/0.14.3-0/react-0.14.3-0.jar -O lib/react-0.14.3-0.jar

clean-all: clean-deps
	rm -rf out
	rm -rf node_modules
	

clean-deps:
	rm -rf lib

.PHONY: clean-deps



