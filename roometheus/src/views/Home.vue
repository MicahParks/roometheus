<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col>
          <img onClick="kickAssApp()" src="../assets/logoWebReady.png" width="22.5%" height="auto" />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <h1>
            Calendar
          </h1>
          <div class="feature-icon">
            <a href="#/calendar">
              <icon class="fas fa-calendar fa-7x" />
            </a>
          </div>
          <div  class="feature-desc">
Shine a light on your hectic schedule.  Keep up with your roommates' classes, plan your parties, and never miss a bill again!
          </div>
        </v-col>

        <v-col>
          <h1>
            Whiteboard
          </h1>
          <div class="feature-icon">
            <a href="#/whiteboard">
              <icon class="fas fa-chalkboard fa-7x" />
            </a>
          </div>
          <div class="feature-desc">
            Quickly and easily share your ideas using our shared whiteboard.  Collaborate with your roommates on brainstorming,  class projects, and doodle sessions.
          </div>
        </v-col>

        <v-col>
          <h1>
            Grocery List
          </h1>
          <div class="feature-icon">
            <a href="#/todo">
              <icon class="fas fa-shopping-basket fa-7x" />
            </a>
          </div>
          <div class="feature-desc">
              Make sure you're not doubling up on ramen noodles with our shared grocery list.  Easily add and remove food while keeping up with everyone's receipts
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  methods: {
    kickAssApp()  {
      // This is a fun app from https://kickassapp.com/
      var s = document.createElement('script');
      s.type = 'text/javascript';
      document.body.appendChild(s);
      s.src = '//hi.kickassapp.com/kickass.js';
      void (0);
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  a,
  a:visited {
    color: #2c3e50;
  }
}

.feature-desc {
  text-align:left;
}

.feature-icon {
  margin: 40px 0px 40px 0px;
}

.fa-7x {
font-size: 7em;
}
</style>
