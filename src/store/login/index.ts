import { TOKEN, USERINFO, USERMENUS } from '@/global/constants';
import router from '@/router';
import { getUserInfoById, getUserMenu, login } from '@/service/login';
import type { Ilogin } from '@/types';
import { localCache } from '@/utils/cache';
import { defineStore } from 'pinia';

interface IloginState {
	userInfo: any;
	userMenus: any;
	token: string;
}

const useLogin = defineStore('login', {
	state(): IloginState {
		return {
			userInfo: localCache.getCache(USERINFO) ?? {},
			userMenus: localCache.getCache(USERMENUS) ?? {},
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
				const userInfoRes = await getUserInfoById(id);
				this.userInfo = userInfoRes.data;

				// 3.获取用户的菜单权限
				const menusRes = await getUserMenu(id);
				this.userMenus = menusRes.data;
				localCache.setCache(USERINFO, this.userInfo);
				localCache.setCache(USERMENUS, this.userMenus);

				//跳转路由到main中
				router.push({
					name: 'main'
				});
			}
		}
	}
});

export default useLogin;
