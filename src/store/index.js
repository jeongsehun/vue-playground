import Vue from "vue";
import Vuex from "vuex";
import dummyData from "@/services/dummy.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    videos: []
  },
  mutations: {
    SET_VIDEOS(state, videos) {
      state.videos = videos;
    }
  },
  actions: {
    loadVideos({ commit }) {
      const { videos } = dummyData;
      commit("SET_VIDEOS", videos);
    }
  },
  modules: {}
});
