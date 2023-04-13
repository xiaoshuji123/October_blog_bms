import { TOKEN } from '@/global/constants';
import { localCache } from '@/utils/cache';
import { createRouter, createWebHistory } from 'vue-router';
// import loginRouter from './login'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			redirect: '/main'
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('@/view/login/Login.vue')
		},
		{
			path: '/main',
			name: 'main',
			component: () => import('@/view/Main/Main.vue')
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'notFound',
			component: () => import('@/view//notFound/NotFound.vue')
		}
	]
});

/* 路由守卫->检查一下有无token，没有进行登录 */
router.beforeEach((to) => {
	const token = localCache.getCache(TOKEN);
	if (to.path === '/main' && !token) {
		return '/login';
	}
});

export default router;
