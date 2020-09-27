import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Whiteboard from "../views/Whiteboard.vue";
import Calendar from "../views/Calendar.vue";
import TodoList2 from "../views/TodoList2.vue";
import Cow from "../views/Cow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/whiteboard",
    name: "Whiteboard",
    component: Whiteboard
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: Calendar
  },
  {
    path: "/todo",
    name: "Todo List",
    component: TodoList2
  },
  {
    path: "/cow",
    name: "Cow",
    component: Cow
  }
];

const router = new VueRouter({
  routes
});

export default router;
