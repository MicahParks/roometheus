<template>
  <div id="app">
    <v-app>
      <v-main>
        <navigation></navigation>

        <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/views/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
