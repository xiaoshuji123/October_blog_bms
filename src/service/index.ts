import { BASE_URL, TIME_OUT } from './config';
import MyRequest from './request/index';

const request = new MyRequest({
	baseURL: BASE_URL,
	timeout: TIME_OUT,
	headers: {
		'Content-Type': 'application/json'
	}
});
export default request;
