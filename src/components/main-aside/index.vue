<template>
	<div class="aside">
		<div class="logo">
			<img class="imgIcon" src="/favicon.ico" alt="" />
			<h2 v-if="!isFold" class="title">coderXsj</h2>
		</div>
		<el-menu
			:default-active="defaultActive"
			:collapse="isFold"
			:collapse-transition="false"
			background-color="#001529"
			text-color="#b7bdc3"
			active-text-color="#fff"
		>
			<template v-for="item in menus">
				<sub-menu :item="item"> </sub-menu>
			</template>
		</el-menu>
	</div>
</template>

<script setup lang="ts">
import subMenu from './cpns/asideSubMenu.vue';
import useLogin from '@/store/login';
import { ref } from 'vue';

defineProps({
	isFold: {
		type: Boolean,
		defalut: false
	}
});

const loginStore = useLogin();
const menus = loginStore.userMenus;

const defaultActive = ref(menus[0].children[0].id + '');
</script>

<style lang="less" scoped>
.logo {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 60px;
	color: #fff;
	.imgIcon {
		width: 25px;
		height: 25px;
	}
	.title {
		margin-left: 10px;
	}
}
.el-menu {
	border-right: none;
	user-select: none;
	transition: width 0.2s linear; /* 关闭菜单自带的过度动画，自己实现 */
}
</style>
