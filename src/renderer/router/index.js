import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "landing",
      component: () => import("@/components/Landing")
    },
    {
      path: "/TilemapEditor",
      name: "TilemapEditor",
      component: () => import("@/components/TilemapEditor")
    },
    {
      path: "/EventEditor",
      name: "EventEditor",
      component: () => import("@/components/Events/EventEditor")
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
