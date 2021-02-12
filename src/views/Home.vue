 <template>
  <div class="home">
    <h1>My Favorite Music Videos</h1>
    <div class="video-container">
      <div v-for="video in videos" :key="video.name">
        <router-link :to="{ name: 'VideoWatch', params: { id: video.id } }">
          <div class="video-box">
            <img :src="video.thumbnail" />
            <div>
              <h1>{{ video.name }} - {{ video.title }}</h1>
              <div v-html="video.description"></div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      videos: this.$store.state.videos,
    };
  },
};
</script>

<style lang="scss" scoped>
.video-container {
  .video-box {
    display: flex;
    justify-content: flex-start;
    border: 1px solid black;
    border-radius: 4px;
    margin: 16px;
    padding: 16px;
    text-align: left;

    img {
      width: 120px;
      height: 120px;
      padding: 8px 16px;
    }
  }
}
</style>