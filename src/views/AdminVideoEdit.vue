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
      <v-btn @click="editVideo">Edit Video</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["videos"]),
    video() {
      return this.videos.find((v) => v.id == this.$route.params.id);
    },
  },
  methods: {
    editVideo() {
      this.$store.dispatch("editVideo", this.video);
      this.$router.push({ name: "AdminVideoList" });
    },
  },
};
</script>