import { createRouter, createWebHistory } from "vue-router";
import { RT_HOME } from "../constants/routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/portfolio",
      name: RT_HOME,
      component: () => import("../pages/Portfolio.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name !== RT_HOME) {
    next({ name: RT_HOME });
  } else {
    next();
  }
});

export default router;
