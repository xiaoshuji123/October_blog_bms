<template>
	<div class="aside">
		<div class="title">
			<img class="imgIcon" src="../../../public/favicon.ico" alt="" />
			<h2 class="">coderXsj</h2>
		</div>
		<el-menu
			default-active="39"
			class="el-menu-vertical-demo"
			background-color="#001529"
			text-color="#b7bdc3"
			active-text-color="#fff"
		>
			<template v-for="item in menus">
				<el-sub-menu :index="item.id + ''">
					<template #title>
						<el-icon>
							<component :is="item.icon.split('-icon-')[1]"></component>
						</el-icon>
						<span>{{ item.name }}</span>
					</template>
					<template v-for="citem in item.children">
						<el-menu-item :index="citem.id + ''">{{ citem.name }}</el-menu-item>
					</template>
					<!-- <el-sub-menu index="1-4">
						<template v-for="citem in item.children">
							<template #title>{{ citem.name }}</template>
							<el-menu-item index="1-4-1">item one</el-menu-item>
						</template>
					</el-sub-menu> -->
				</el-sub-menu>
			</template>
		</el-menu>
	</div>
</template>

<script setup lang="ts">
import useLogin from '@/store/login';

const loginStore = useLogin();
const menus = loginStore.userMenus;
</script>

<style lang="less" scoped>
.title {
	display: flex;
	align-items: center;
	justify-content: center;
	line-height: 60px;
	color: #fff;
	.imgIcon {
		width: 25px;
		height: 25px;
		margin-right: 10px;
	}
}
.el-menu {
	border-right: none;
	user-select: none;
}
.el-menu-item:hover {
	background-color: #0a60bd;
	color: #fff;
}
.el-menu-item.is-active {
	background-color: #0a60bd;
}
</style>
