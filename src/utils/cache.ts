/* 有必要对这个浏览器的持久缓存做封装 */
enum CacheType {
	session,
	local
}
class Cache {
	storage: Storage;
	constructor(type: CacheType) {
		this.storage = type === CacheType.local ? localStorage : sessionStorage;
	}
	setCache(key: string, value: any) {
		this.storage.setItem(key, JSON.stringify(value));
	}
	getCache(key: string) {
		const value = this.storage.getItem(key);
		if (value) {
			return JSON.parse(value);
		}
	}
	removeCache(key: string) {
		this.storage.removeItem(key);
	}
	clearCache() {
		this.storage.clear();
	}
}
const sessionCache = new Cache(CacheType.session);
const localCache = new Cache(CacheType.local);
export { sessionCache, localCache };
