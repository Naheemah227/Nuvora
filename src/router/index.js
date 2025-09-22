import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import About from "@/views/AboutView.vue";
import Shop from "@/views/ShopView.vue";
// import SkinCare from "@/views/SkinCareDetailView.vue";
import HairCareCard from "@/components/common/HairCareCard.vue";
import SignUp from "@/views/SignUp.vue";
import Login from "@/views/Login.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import CartView from "@/views/CartView.vue";
// import admin from "@/views/admin"
import AdminDashBoard from "@/views/admin/DashBoard.vue";
import AdminUsers from "@/views/admin/Users.vue";
import AdminProducts from "@/views/admin/Products.vue";
import AdminOrders from "@/views/admin/Orders.vue";
import TestFireStoreView from "@/views/TestFireStoreView.vue";
import UploadProducts from "@/components/section-folder/UploadProducts.vue";

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
    {
      path: "/cart",
      name: "Cart",
      component: CartView,
    },
    {
      path: "/admin/dashboard",
      name: "AdminDashboard",
      component: AdminDashBoard,
    },

    {
      path: "/admin/users",
      name: "AdminUsers",
      component: AdminUsers,
    },
    {
      path: "/admin/orders",
      name: "adminorders",
      component: AdminOrders,
    },
    {
      path: "/admin/products",
      name: "AdminProducts",
      component: AdminProducts,
    },
    {
      path: "/test",
      name: "TestFireStore",
      component: TestFireStoreView,
    },
    {
      path: "/Upload/products",
      name: "UploadProducts",
      component: UploadProducts,
    },
  ],
});

export default router;
