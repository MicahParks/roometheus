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
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
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

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
