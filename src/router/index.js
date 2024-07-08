import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../views/ProjectView.vue"),
    },
    {
      path: "/articles",
      name: "articles",
      component: () => import("../views/ArticleView.vue"),
    },
    {
      path: "/stacks",
      name: "stacks",
      component: () => import("../views/StackView.vue"),
    },
    {
      path: "/open-source",
      name: "open-source",
      component: () => import("../views/OpenSourceView.vue"),
    },
    {
      path: "/education",
      name: "education",
      component: () => import("../views/EducationView.vue"),
    },
    {
      path: "/work-experience",
      name: "work-experience",
      component: () => import("../views/WorkExperienceView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
  ],
});

export default router;
