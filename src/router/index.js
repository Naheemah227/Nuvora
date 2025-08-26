import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import About from "@/views/AboutView.vue";
import Shop from "@/views/ShopView.vue";
// import SkinCare from "@/views/SkinCareDetailView.vue";
import HairCareCard from "@/components/common/HairCareCard.vue";
import SignUp from "@/views/SignUp.vue";
import Login from "@/views/Login.vue";
import ProductDetail from "@/views/ProductDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/shop",
      name: "Shop",
      component: Shop,
    },
    // {
    //   path: "/skincare",
    //   name: "Skincare",
    //   component: Skincare,
    // },
    // {
    //   path: "/skincare/:id", // 👈 removed the space here
    //   name: "SkinCareDetail", // 👈 better name
    //   component: SkinCare,
    //   props: true, // 👈 pass `id` as prop
    // },
    {
      path: "/signup",
      name: "Signup",
      component: SignUp,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/haircare",
      name: "HairCare",
      component: HairCareCard,
    },
    {
      path: "/product/:id",
      name: "ProductDetail", // give it a name
       component: () => import("@/views/ProductDetail.vue"),
      props: true, // allows route params as props
    },
  ],
});

export default router;
