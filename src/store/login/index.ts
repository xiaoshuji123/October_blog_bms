import { TOKEN } from '@/global/constants';
import router from '@/router';
import { getUserInfoById, getUserMenu, login } from '@/service/login';
import type { Ilogin } from '@/types';
import { localCache } from '@/utils/cache';
import { defineStore } from 'pinia';

/* 下面的token变量进行抽取常量 */

const useLogin = defineStore('login', {
	state() {
		return {
			userInfo: {},
			userMenus: {},
			token: localCache.getCache(TOKEN) ?? ''
		};
	},
	getters: {},
	actions: {
		async loginAction(data: Ilogin) {
			const res = await login(data);
			if (res?.code === 0) {
				const id = res.data.id;
				const name = res.data.name;
				this.token = res.data.token;

				// 1.对token进行持久缓存
				localCache.setCache(TOKEN, this.token);

				// 2.获取用户的详细信息
				const userInfo = await getUserInfoById(id);
				this.userInfo = userInfo;

				// 3.获取用户的菜单权限
				const menus = await getUserMenu(id);
				this.userMenus = menus;

				//跳转路由到main中
				router.push({
					name: 'main'
				});
			}
		}
	}
});

export default useLogin;
