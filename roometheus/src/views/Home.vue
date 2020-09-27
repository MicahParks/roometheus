<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col>
          <img src="../assets/logo.png" width="20%" height="auto"/>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
        <div>
        Calendar
        </div>
        <div>
          <a  href="#/calendar">
          <icon class="fas fa-calendar fa-5x" />
          </a>
        </div>
        </v-col>

        <v-col>
          <div >
          Whiteboard
          </div>
          <div>
            <a href="#/calendar">
          <icon class="fas fa-chalkboard fa-5x" />
            </a>
          </div>
        </v-col>

        <v-col>
          <div>
          Grocery List
          </div>
          <div>
            <a  href="#/todo">
          <icon class="fas fa-shopping-basket fa-5x" />
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home"
};
</script>
<style lang="scss" scoped>
.home {
 a, a:visited{
   color:#2c3e50;
 }
}
</style>