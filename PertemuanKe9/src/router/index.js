import Cart from "../views/Cart.vue";
import Log from "../views/Log.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Cart",
      component: Cart,
    },
    {
      path: "/log",
      name: "Log",
      component: Log,
    },
  ],
});

export default router;
