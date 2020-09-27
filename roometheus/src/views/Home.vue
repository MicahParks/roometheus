<template>
  <div class="home">
    <v-container>
      <!-- <v-row>
        <v-col>
          asdf
        </v-col>
      </v-row> -->

      <v-row>
        <v-col>
        <div>
        Calendar
        </div>
        <div>
          <icon class="fas fa-calendar fa-5x" />
        </div>
        </v-col>

        <v-col>
          <div>
          Whiteboard
          </div>
          <div>
          <icon class="fas fa-chalkboard fa-5x" />
          </div>
        </v-col>

        <v-col>
          <div>
          Grocery List
          </div>
          <div>
          <icon class="fsa fa-shopping-basket fa-5x" />
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
