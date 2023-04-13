import { TOKEN } from '@/global/constants';
import { localCache } from '@/utils/cache';
import { BASE_URL, TIME_OUT } from './config';
import MyRequest from './request/index';

const request = new MyRequest({
	baseURL: BASE_URL,
	timeout: TIME_OUT,
	interceptor: {
		requestSuccessFn: (config) => {
			config.headers.Authorization = 'Bearer ' + localCache.getCache(TOKEN);
			return config;
		}
	}
});
export default request;
