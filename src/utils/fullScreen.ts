/*
 * 封装一个全屏的工具函数
 * 1.判断一下该浏览器是否支持全屏 document.fullscreenEnabled
 * 2.获取到需要全屏的元素调用requestFullscreen方法
 * 3.全局侦听一下fullscreenchange时间，能够进入全屏模式成功或者退出时的消息通知
 */

export function fullscreenChange() {
	// 判断是否支持全屏
	const isFullscreenEnabled = document.fullscreenEnabled;
	if (!isFullscreenEnabled) {
		alert('暂不支持全屏展示');
		return;
	}
	if (document.fullscreenElement) {
		document.exitFullscreen();
		return;
	}
	const appEl = document.querySelector('#app') as HTMLElement;
	// 拿到需要全屏的元素进行调用requestFullscreen 方法用于发出异步请求使元素进入全屏模式
	if (appEl.requestFullscreen) {
		appEl.requestFullscreen();
	}
}

export function handleFullscreenChange() {
	// 返回当前文档中正在以全屏模式显示的Element节点，如果没有使用全屏模式，则返回null
	let fullscreenElement = document.fullscreenElement as HTMLElement;
	if (fullscreenElement) {
		document.body.style.overflow = 'hidden'; // 隐藏滚动条
		fullscreenElement.style.width = '100%';
		fullscreenElement.style.height = '100%';
		fullscreenElement.style.backgroundColor = '#fff';
		fullscreenElement.style.position = 'fixed';
		fullscreenElement.style.top = '0';
		fullscreenElement.style.left = '0';
		console.log('进入全屏');
	} else {
		console.log('退出全屏');
		// document.body.style.overflow = 'auto'; // 隐藏滚动条
		// const appEl = document.querySelector('#app') as HTMLElement;
		// appEl.style.width = '';
		// appEl.style.height = '';
		// appEl.style.position = '';
		// appEl.style.top = '';
		// appEl.style.left = '';
	}
}
