(defproject cljs-base "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :plugins [[lein-cljsbuild "1.1.1"]
            [lein-figwheel "0.5.0-1"]]

  :clean-targets ^{:protect false} ["out"
                                    :target-path]  
  
  :dependencies [[org.clojure/clojure "1.7.0"]
  				 [org.clojure/clojurescript "1.7.170"]
  				 [cljsjs/react "0.14.3-0"]]
  
  :source-paths ["src"]

  :cljsbuild { 
    :builds [{:id "cljs-base"
              :source-paths ["src"]
              :compiler {
                         :main 'cljs-base.core
                         :asset-path "out"
                         :output-to "out/main.js"
                         :output-dir "out"
                         :source-map-timestamp true}}]}


  )