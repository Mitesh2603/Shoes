import { createRouter, createWebHistory } from "vue-router";
import Register from "./components/Register.vue";
import Login from "./components/Login.vue";
import Home from "./components/Home.vue";
import Men from "./components/Navbar/Men.vue";
import Women from "./components/Women.vue";
import Kids from "./components/Navbar/Kids.vue";
import Customize from "./components/Navbar/Customize.vue";
import Favourites from "./components/Navbar/Favourites.vue";
import Puma from "./components/Sidebar/Puma.vue";
import Skechers from "./components/Sidebar/Skechers.vue";
import Reebok from "./components/Sidebar/Reebok.vue";
import Nike from "./components/Sidebar/Nike.vue";
import Adidas from "./components/Sidebar/Adidas.vue";

export const router = createRouter({
  history: createWebHistory(),

  routes: [
    { path: "/Register", component: Register, name: "Register" },
    { path: "/", component: Login, name: "Login" },
    { path: "/Home", component: Home, name: "Home" },
    { path: "/Men", component: Men, name: "Men" },
    { path: "/Women", component: Women, name: "Women" },
    { path: "/Kids", component: Kids, name: "Kids" },
    { path: "/Customize", component: Customize, name: "Customize" },
    { path: "/Favourites", component: Favourites, name: "Favourites" },
    { path: "/Puma", component: Puma, name: "Puma" },
    { path: "/Skechers", component: Skechers, name: "Skechers" },
    { path: "/Reebok", component: Reebok, name: "Reebok" },
    { path: "/Nike", component: Nike, name: "Nike" },
    { path: "/Adidas", component: Adidas, name: "Adidas" },
  ],
});
