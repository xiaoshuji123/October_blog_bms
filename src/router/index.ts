import { createRouter, createWebHistory } from 'vue-router';
// import loginRouter from './login'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			redirect: '/login'
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('@/view/login/Login.vue')
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'notFound',
			component: () => import('@/view//notFound/NotFound.vue')
		}
	]
});

export default router;
