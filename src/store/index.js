import Vue from "vue";
import Vuex from "vuex";
import dummyData from "@/services/dummy.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    videos: [],
    playedVideos: []
  },
  mutations: {
    ADD_VIDEO(state, video) {
      let videos = state.videos.concat(video);
      state.videos = videos;
    },
    SET_VIDEOS(state, videos) {
      state.videos = videos;
    },
    SET_PLAYED_VIDEOS(state, playedVideos) {
      state.playedVideos = playedVideos;
    },
    MARK_VIDEO_PLAYED(state, videoId) {
      let playedVideos = state.playedVideos.concat(videoId);
      state.playedVideos = playedVideos;
      window.localStorage.playedVideos = JSON.stringify(playedVideos);
    }
  },
  actions: {
    createVideo({ commit }, video) {
      commit('ADD_VIDEO', video);
    },
    loadVideos({ commit }) {
      const { videos } = dummyData;
      commit("SET_VIDEOS", videos);

      let playedVideos = window.localStorage.playedVideos;
      if (typeof playedVideos === 'undefined') {
        window.localStorage.setItem('playedVideos', []);
      } else {
        commit('SET_PLAYED_VIDEOS', JSON.parse(playedVideos));
      }
    },
    markPlayed({ commit }, videoId) {
      commit('MARK_VIDEO_PLAYED', videoId);
    }
  },
  modules: {}
});
