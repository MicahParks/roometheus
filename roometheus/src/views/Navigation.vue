<template>
<b-navbar  id="nav" toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Roometheus</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
        <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
        <b-nav-item><router-link to="/whiteboard">Whiteboard</router-link></b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>    
</template>

<script>


export default {
  name: "Navigation",
};
</script>