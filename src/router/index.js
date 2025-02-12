import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/home",
			name: "home",
			component: HomeView,
		},
		{
			path: "/",
			name: "EuMauro",
			// route level code-splitting
			// this generates a separate chunk (inicials.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/eu.vue"),
		},
	],
});

export default router;
