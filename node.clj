(require 'cljs.build.api)

(cljs.build.api/build "src"
	{:main 'cljs-node.core
	:output-to "main.js"
	:target :nodejs})