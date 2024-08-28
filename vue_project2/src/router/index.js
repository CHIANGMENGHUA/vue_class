import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/About.vue"),
      children: [
        { path: "us", component: () => import("@/views/AboutUs.vue") },
        { path: "others", component: () => import("@/views/AboutOthers.vue") },
      ],
    },
    {
      path: "/products",
      name: "products",
      component: () => import("@/views/Products.vue"),
    },
    {
      path: "/products/:sn?",
      name: "allProducts",
      component: () => import("@/views/Products.vue"),
    },
  ],
});

export default router;
