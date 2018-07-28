import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 组件
import Home from "../components/pages/home/Home.vue";
import Films from "../components/pages/film/Films.vue";

const router = new VueRouter({
	routes : [
		{
			path: "",
			redirect: "/home"
		},
		{
			path: "/home",
			component: Home
		},
		{
			path: "/films",
			component: Films
		}
	]
});

export default router;