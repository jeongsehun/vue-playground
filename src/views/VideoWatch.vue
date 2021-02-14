<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <youtube :video-id="videoId" ref="youtube"></youtube>
      <h1>{{ video.title }} - {{ video.name }}</h1>
      <div v-html="video.description"></div>
    </v-col>
  </v-row>
</template>
<script>
import Vue from "vue";
import VueYoutube from "vue-youtube";

Vue.use(VueYoutube);

export default {
  computed: {
    video() {
      return this.$store.state.videos.find(
        (vid) => vid.id == this.$route.params.id
      );
    },
    videoId() {
      return this.$youtube.getIdFromUrl(this.video.url);
    },
  },
};
</script>

<style scoped>
img {
  max-width: 50%;
}
</style>
