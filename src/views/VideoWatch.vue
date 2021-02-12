<template>
  <div>
    <youtube :video-id="videoId" ref="youtube"></youtube>
    <h1>{{ video.name }} - {{ video.title }}</h1>
    <div v-html="video.description"></div>
  </div>
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