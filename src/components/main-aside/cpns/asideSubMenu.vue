<template>
	<el-sub-menu :index="item.id + ''">
		<template #title>
			<el-icon v-if="item.icon">
				<component :is="item.icon.split('-icon-')[1]"></component>
			</el-icon>
			<span>{{ item.name }}</span>
		</template>
		<template v-for="citem in item.children">
			<el-menu-item :index="citem.id + ''">{{ citem.name }}</el-menu-item>
			<!-- <template v-else>
				<sub-menu :item="citem"></sub-menu>
			</template> -->
		</template>
	</el-sub-menu>
</template>

<script setup lang="ts">
import subMenu from './asideSubMenu.vue';
interface Iprops {
	item: {
		[key: string]: any;
	};
}
withDefaults(defineProps<Iprops>(), {
	item: () => ({
		id: 1,
		name: '测试',
		icon: 'el-icon-lock',
		children: []
	})
});
</script>

<style lang="less" scoped>
.el-menu-item:hover {
	background-color: #0a60bd;
	color: #fff;
}
.el-menu-item.is-active {
	background-color: #0a60bd;
}
</style>
