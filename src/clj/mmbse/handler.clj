(ns mmbse.handler
  (:require
   [reitit.ring :as reitit-ring]
   [mmbse.middleware :refer [middleware]]
   [hiccup.page :refer [include-js include-css html5]]
   [config.core :refer [env]]))

(def mount-target
  [:div#app
   [:div.loader]])




(defn head []
  [:head
   [:meta {:charset "utf-8"}]
   [:meta {:name "viewport"
           :content "width=device-width, initial-scale=1"}]
   (include-css "https://cdn.jsdelivr.net/npm/uikit@3.5.4/dist/css/uikit.min.css")
   (include-css (if (env :dev) "/css/site.css" "/css/site.min.css"))])

(defn loading-page []
  (html5
   (head)
   [:body.body-container ;; <--- vagy igy, vagy igy ---> {:class "body-container"}
    mount-target
    (include-js "https://cdn.jsdelivr.net/npm/uikit@3.5.4/dist/js/uikit.min.js")
    (include-js "https://cdn.jsdelivr.net/npm/uikit@3.5.4/dist/js/uikit-icons.min.js")
    (include-js "/js/app.js")]))



(defn index-handler
  [_request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (loading-page)})

(def app
  (reitit-ring/ring-handler
   (reitit-ring/router
    [["/" {:get {:handler index-handler}}]
     ["/:valami" {:get {:handler index-handler}}]])
   (reitit-ring/routes
    (reitit-ring/create-resource-handler {:path "/" :root "/public"})
    (reitit-ring/create-default-handler))
   {:middleware middleware}))
