import { ElMessage } from 'element-plus';
import axios from 'axios';
import type { AxiosInstance } from 'axios';
import type { MyRequestConfig } from './type';

class MyRequest {
	instance: AxiosInstance;
	constructor(config: MyRequestConfig) {
		this.instance = axios.create(config);

		/* 全局拦截器 */
		this.instance.interceptors.request.use(
			(config) => {
				return config;
			},
			(err) => {}
		);

		this.instance.interceptors.response.use(
			(response) => {
				return response.data;
			},
			(err) => {
				console.log(err);
				ElMessage({
					message: err.response.data,
					type: 'error'
				});
			}
		);

		/* 实例拦截器 */
		this.instance.interceptors.request.use(
			config.interceptor?.requestSuccessFn,
			config.interceptor?.requestFailFn
		);
		this.instance.interceptors.response.use(
			config.interceptor?.responseSuccessFn,
			config.interceptor?.responseFailFn
		);
	}

	request<T = any>(config: MyRequestConfig<T>) {
		/* 针对某个接口进行请求拦截 */
		if (config.interceptor?.requestSuccessFn) {
			config = config.interceptor.requestSuccessFn(config);
		}

		return new Promise<T>((resolve, reject) => {
			this.instance
				.request<any, T>(config)
				.then((res) => {
					if (config.interceptor?.responseSuccessFn) {
						res = config.interceptor?.responseSuccessFn(res);
					}
					resolve(res);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	get<T = any>(config: MyRequestConfig<T>) {
		return this.request({ method: 'GET', ...config });
	}
	post<T = any>(config: MyRequestConfig<T>) {
		return this.request({ method: 'POST', ...config });
	}
}

export default MyRequest;
