import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import VideoCreate from "@/views/VideoCreate"
import VideoWatch from "@/views/VideoWatch";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/video/new",
    name: 'VideoCreate',
    component: VideoCreate
  },
  {
    path: "/video/:id",
    name: "VideoWatch",
    component: VideoWatch,
    params: true
  }
];

const router = new VueRouter({
  // mode: "history",
  // base: process.env.BASE_URL,
  routes
});

export default router;
