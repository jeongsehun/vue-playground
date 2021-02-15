<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <h1>Admin Page</h1>
      <div class="flex-table">
        <div>Title</div>
        <div>Name</div>
        <div>Description</div>
        <div>Actions</div>
      </div>
      <div v-for="video in videos" :key="video.id" class="flex-table">
        <div>{{ video.title }}</div>
        <div>{{ video.name }}</div>
        <div>{{ video.description | abbreviate }}</div>
        <div class="actions">
          <router-link :to="{ name: 'VideoWatch', params: { id: video.id } }"
            >Show</router-link
          >
          <router-link
            :to="{ name: 'AdminVideoEdit', params: { id: video.id } }"
            >Edit</router-link
          >
          <v-btn @click="deleteVideo(video)">Delete</v-btn>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["videos"]),
  },
  filters: {
    abbreviate(text) {
      if (text) {
        text = text.replace("<p>", "");
        return text.slice(0, 50);
      }
    },
  },
  methods: {
    deleteVideo(video) {
      this.$store.dispatch("deleteVideo", video);
    },
  },
};
</script>

<style lang="scss" scoped>
.flex-table {
  display: grid;
  grid-template-columns: repeat(auto-fill, 33%);
  padding: 8px;
  border-bottom: 1px solid black;

  &:nth-of-type(2n) {
    background-color: #dedede;
  }

  .actions {
    * {
      padding-right: 16px;
    }
  }
}
</style>