// Composables
import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
    ],
  },
  {
    path: "/text-message",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "TextMessage",
        component: () => import(/* webpackChunkName: "home" */ "@/views/TextMessage.vue"),
      },
    ],
  },
  {
    path: "/template-message",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "TemplateMessage",
        component: () => import(/* webpackChunkName: "home" */ "@/views/TemplateMessage.vue"),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
