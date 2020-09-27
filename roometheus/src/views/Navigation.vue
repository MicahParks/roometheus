<template>
  <v-app-bar app color="primary" dark id="nav">
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />
      <span class="site-name">
        Roometheus
      </span>
    </div>

    <!-- <span class="blah"><router-link to="/cow">DickCow</router-link></span> -->
    <v-spacer v-on:click="egg()"></v-spacer>

    <router-link to="/"><i class="fas fa-home"></i> Home </router-link>
    <router-link to="/calendar"
      ><i class="fas fa-calendar"></i> Calendar
    </router-link>
    <router-link to="/todo"
      ><i class="fas fa-shopping-basket"></i> Groceries
    </router-link>
    <router-link to="/whiteboard"
      ><i class="fas fa-chalkboard"></i> Whiteboard
    </router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style lang="scss" scoped>
.site-name {
  font-size: 2em;
  font-style: bold;
}
#nav {
  a {
    font-weight: bold;
    color: whitesmoke;
    text-decoration: none;
    margin-right: 0.5%;
    &.router-link-exact-active {
      color: #a7d5f2;
    }
  }
}
</style>
