<template>
  <v-row>
    <v-col cols="12" sm="8" md="6" v-for="video in videos" :key="video.name">
      <video-card :video="video"></video-card>
    </v-col>
  </v-row>
</template>

<script>
import VideoCard from "@/components/VideoCard";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: { VideoCard },
  computed: {
    ...mapState(["videos"]),
  },
};
</script>
