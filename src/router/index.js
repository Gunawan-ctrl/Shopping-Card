import Vue from "vue";
import VueRouter from "vue-router";
import Product from "../views/product/Index.vue";
import ProductDetail from "../views/product/Detail.vue";
import Card from "../views/card/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "product",
    component: Product,
  },
  {
    path: "/product/:id",
    name: "productdetail",
    component: ProductDetail,
  },
  {
    path: "/card",
    name: "card",
    component: Card,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
