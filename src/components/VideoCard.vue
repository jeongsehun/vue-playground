<template>
  <v-card>
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="headline" v-text="video.title"></v-card-title>
        <v-card-subtitle v-text="video.name"></v-card-subtitle>
        <v-card-actions>
          <v-btn text :to="{ name: 'VideoWatch', params: { id: video.id } }">
            Listen Now
          </v-btn>
        </v-card-actions>
      </div>
      <v-avatar class="ma-3" size="125" tile>
        <v-img :src="video.thumbnail"></v-img>
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
    },
  },
};
</script>