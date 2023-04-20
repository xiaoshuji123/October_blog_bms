<template>
	<div class="header">
		<div class="left">
			<el-icon :size="25" @click="handelIconClick">
				<component :is="isFold ? 'Expand' : 'Fold'"></component>
			</el-icon>
			<head-breadcrumb></head-breadcrumb>
		</div>
		<div class="right">
			<head-info></head-info>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import headBreadcrumb from './cpns/headBreadcrumb.vue';
import headInfo from './cpns/headInfo.vue';

const emit = defineEmits(['foldChange']);

const isFold = ref(false);

const handelIconClick = () => {
	isFold.value = !isFold.value;
	emit('foldChange', isFold.value);
};
</script>

<style lang="less" scoped>
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px 0;
	box-sizing: border-box;
}
.left,
.right {
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	:deep(.el-icon) {
		margin-right: 10px;
	}
}
.right {
	margin-right: 20px;
}
</style>
