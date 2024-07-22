import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PokemonComponent from "@/components/PokemonComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/pokemon/:id",
      name: "pokemon",
      component: PokemonComponent,
    },
  ],
});

export default router;
