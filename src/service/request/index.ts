import axios from 'axios';
import type {
	AxiosInstance,
	AxiosRequestConfig,
	InternalAxiosRequestConfig,
	AxiosResponse,
	AxiosRequestHeaders
} from 'axios';

interface InstanceInterceptors<T = AxiosResponse> {
	requestSuccessFn?: (config: any) => any;
	requestFailFn?: (err: any) => any;
	responseSuccessFn?: (res: T) => T;
	responseFailFn?: (err: any) => any;
}

interface MyRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
	interceptor?: InstanceInterceptors<T>;
}

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
				return response;
			},
			(err) => {}
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
						resolve(res);
					}
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	get<T>(config: MyRequestConfig<T>) {
		this.request<T>({ method: 'GET', ...config });
	}
	post<T>(config: MyRequestConfig<T>) {
		this.request<T>({ method: 'POST', ...config });
	}
}

export default MyRequest;
