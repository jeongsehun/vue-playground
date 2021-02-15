<template>
  <v-row justify="center" align="center">
    <v-col cols="12" md="4">
      <h1>Video Create Page</h1>
      <v-text-field v-model="video.name" label="name"></v-text-field>
      <v-text-field v-model="video.title" label="title"></v-text-field>
      <v-textarea v-model="video.description" label="description"></v-textarea>
      <v-text-field
        v-model="video.url"
        label="url"
        hint="Add Video Url"
      ></v-text-field>
      <v-btn @click="createVideo">Create Video</v-btn>
    </v-col>
    <v-col cols="12" md="8">
      <video-card :video="video"></video-card>
    </v-col>
  </v-row>
</template>

<script>
import VideoCard from "@/components/VideoCard";

export default {
  components: {
    VideoCard,
  },
  data() {
    return {
      video: {
        id: 0,
        name: "",
        title: "",
        description: "",
        thumbnail: require("@/assets/logo.png"),
        url: "",
      },
    };
  },
  methods: {
    createVideo() {
      const videos = this.$store.state.videos;
      const hasMaxId = videos.reduce((previous, current) => {
        return previous > current ? previous : current;
      });

      // API 연동없이 테스트를 위해 임시 ID 설정
      this.video.id = hasMaxId.id + 1;
      this.$store.dispatch("createVideo", this.video);
      this.$router.push({ name: "VideoWatch", params: { id: this.video.id } });
    },
  },
};
</script>