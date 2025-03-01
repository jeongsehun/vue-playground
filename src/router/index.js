import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import AdminVideoList from '@/views/AdminVideoList'
import VideoCreate from "@/views/VideoCreate"
import AdminVideoEdit from '@/views/AdminVideoEdit'
import VideoWatch from "@/views/VideoWatch";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/admin/video',
    name: 'AdminVideoList',
    component: AdminVideoList
  },
  {
    path: "/video/new",
    name: 'VideoCreate',
    component: VideoCreate
  },
  {
    path: "/video/edit/:id",
    name: 'AdminVideoEdit',
    component: AdminVideoEdit
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
