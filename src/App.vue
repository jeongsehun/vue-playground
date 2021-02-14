<template>
  <v-app>
    <v-app-bar elevation="1" fixed app>
      <v-toolbar-title
        style="cursor: pointer"
        v-text="title"
        @click="$router.push('/')"
      />
      <v-spacer />
      <v-btn outlined>Sign in</v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer absolute>
      <span>&copy; {{ new Date().getFullYear() }} Sehun Jeong</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    title: "MY X SET",
  }),
  created() {
    this.$store.dispatch("loadVideos");
  },
};
</script>
