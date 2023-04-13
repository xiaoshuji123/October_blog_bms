import type { Ilogin } from '@/types';
import service from '..';

export function login(data: Ilogin) {
	return service.post({
		url: '/login',
		data
	});
}

export function getUserInfoById(id: number) {
	return service.get({
		url: `/users/${id}`
	});
}

export function getUserMenu(id: number) {
	return service.get({
		url: `/role/${id}/menu`
	});
}
