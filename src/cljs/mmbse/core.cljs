(ns mmbse.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]
   [reagent.session :as session]
   [reitit.frontend :as reitit]
   [clerk.core :as clerk]
   [accountant.core :as accountant]))



    ;; -------------------------
    ;; Routes

(def router
  (reitit/router
   [["/" :index]
    ["/index" :index2]
    ["/rolunk" :rolunk]]))


(defn path-for [route & [params]]
  (if params
    (:path (reitit/match-by-name router route params))
    (:path (reitit/match-by-name router route))))

;; -------------------------
;; Page elements


(defn slideshow []
  (fn []
    [:div.uk-position-relative.uk-visible-toggle.uk-light.slideshow {:tab-index "-1" :data-uk-slideshow "true"}
      [:ul.uk-slideshow-items
       [:li
         [:img {:src "https://www.pcshop.in/wp-content/uploads/2019/04/COOLER-MASTER-590-III-BLACK-WINDOW.jpg" :alt "" :data-uk-cover true}]]
       [:li
         [:img {:src "https://www.pcland.hu/images/termekek/termekek_345000-350000/347906/cooler-master-master-mastercase-h500m-mcm-h500m-ihnn-s00.jpg" :alt "" :data-uk-cover true}]]
       [:li
         [:img {:src "https://i1.wp.com/huracanpcs.com/wp-content/uploads/2019/11/mb520-1200x1200.jpg" :alt "" :data-uk-cover true}]]]
      [:a.uk-position-center-left.uk-position-small.uk-hidden-hover {:href "#" :data-uk-slidenav-previous "true" :data-uk-slideshow-item "previous"}]
      [:a.uk-position-center-right.uk-position-small.uk-hidden-hover {:href "#" :data-uk-slidenav-next "true" :data-uk-slideshow-item "next"}]]))



(defn korte []
 (let [vilagit? (atom false)]
  (fn []
    [:div
     [:button {:on-click (fn [event] (reset! vilagit? false))}
       "Turn on the light"]
     [:img#myImage {:src (if @vilagit? "https://www.w3schools.com/js/pic_bulbon.gif" "https://www.w3schools.com/js/pic_bulboff.gif")
                        :style {:width "100px"}}]
     [:button {:on-click (fn [event] (reset! vilagit? true))}
       "Turn off the light"]
     [:button {:on-click (fn [event] (reset! vilagit? (not @vilagit?)))}
         "Turn on/off the light"]])))



;; -------------------------
;; Page components

(defn home-page []
  (fn []
    [:div
      [slideshow]
      [korte]
      [:div
       [:ul]
       [:li [:a {:href "/broken/link"} "Broken link"]]]]))


(defn kepek-page[]
  (fn [] [:span.main
          [:h2 "Kepek mmbse"]]))

(defn rolunk-page []
  (fn [] [:span.main
          [:h1 "Rolunk mmbse"]]))

(defn four-o-four []
  (fn [] [:div
          [:p "404"]]))




;; -------------------------
;; Translate routes -> page components

(defn page-for [route]
  (case route
    :index #'home-page
    :index2 #'home-page
    :kepek #'kepek-page
    :rolunk #'rolunk-page
          #'four-o-four))


(defn search []
  (fn []

     [:div.uk-margin
      [:form.uk-search.uk-search-default
       [:span.uk-search-icon-flip {:data-uk-search-icon "true"}]
       [:input.uk-search-input.uk-text-center {:type "search" :placeholder "Search..."}]]]))




(defn menu []
  (fn []
    [:div.uk-cover-container.uk-position-relative.headercss
      [:div.uk-text-center
        [search]]
      [:a.uk-position-center-left {:href (path-for :index)} "Home"]
      [:a.uk-position-center-right {:href (path-for :rolunk)} "About mmbse"]]))

(defn footer []
  (fn []
    [:p "mmbse was generated by the "
     [:a {:href "https://github.com/reagent-project/reagent-template"} "Reagent Template"] "."]))

;; -------------------------
;; Page mounting component

(defn current-page []
  (fn []
    (let [page (:current-page (session/get :route))]
      [:div
       [menu]
       [page]
       [:p (str page)]
       [footer]])))







;; -------------------------
;; Initialize app

(defn mount-root []
  (rdom/render [current-page] (.getElementById js/document "app")))


(defn init! []
  (clerk/initialize!)
  (accountant/configure-navigation!
   {:nav-handler
    (fn [path]
      (let [match (reitit/match-by-path router path)
            current-page (:name (:data  match))
            route-params (:path-params match)]
        (reagent/after-render clerk/after-render!)
        (session/put! :route {:current-page (page-for current-page)
                              :route-params route-params})
        (clerk/navigate-page! path)))

    :path-exists?
    (fn [path]
      (boolean (reitit/match-by-path router path)))})
  (accountant/dispatch-current!)
  (mount-root))