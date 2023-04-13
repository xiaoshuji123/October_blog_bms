import type { AxiosRequestConfig, AxiosResponse } from 'axios';
interface InstanceInterceptors<T = AxiosResponse> {
	requestSuccessFn?: (config: any) => any;
	requestFailFn?: (err: any) => any;
	responseSuccessFn?: (res: T) => T;
	responseFailFn?: (err: any) => any;
}

export interface MyRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
	interceptor?: InstanceInterceptors<T>;
}
