<template>
  <v-row justify="center">
    <v-col cols="12" align="center">
      <youtube :video-id="videoId" ref="youtube"></youtube>
      <h1>{{ video.title }} - {{ video.name }}</h1>
      <div v-html="video.description"></div>
      <v-chip
        class="ma-2"
        color="green"
        text-color="white"
        label
        v-if="isPlayed"
      >
        Played
      </v-chip>
      <v-btn class="ma-2" @click="markPlayed" v-else> mark Palyed </v-btn>
    </v-col>
  </v-row>
</template>
<script>
import Vue from "vue";
import { mapState } from "vuex";
import VueYoutube from "vue-youtube";

Vue.use(VueYoutube);

export default {
  computed: {
    ...mapState(["videos", "playedVideos"]),
    video() {
      return this.videos.find((vid) => vid.id == this.$route.params.id);
    },
    videoId() {
      return this.$youtube.getIdFromUrl(this.video.url);
    },
    isPlayed() {
      return this.playedVideos.includes(this.video.id);
    },
  },
  methods: {
    markPlayed() {
      this.$store.dispatch("markPlayed", this.video.id);
    },
  },
};
</script>

<style scoped>
img {
  max-width: 50%;
}
</style>
