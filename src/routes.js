import Vue from "vue";
import VueRouter from "vue-router";
import 'dotenv/config'

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/create-product" },
  { path: "*", redirect: "/not-found" },
  {
    name: "AddProduct",
    path: "/create-product",
    component: () => import("./pages/AddProduct.vue")
  },
  {
    name: "ViewProduct",
    path: "/view-product",
    component: () => import("./pages/ViewProduct.vue")
  },
  {
    name: "404",
    path: "/not-found",
    component: () => import("./pages/FourOFour.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;