<template>
	<div class="main">
		<el-container>
			<el-aside :width="isFold ? '60px' : '200px'">
				<main-aside :isFold="isFold"></main-aside>
			</el-aside>
			<el-container>
				<el-header>
					<main-header @foldChange="foldChange"></main-header>
				</el-header>
				<el-main>Main</el-main>
			</el-container>
		</el-container>
	</div>
</template>
<script setup lang="ts">
import MainAside from '@/components/main-aside/index.vue';
import mainHeader from '@/components/main-header/index.vue';
import { ref } from 'vue';

const isFold = ref(false);
const foldChange = (isFlag: boolean) => {
	isFold.value = isFlag;
	console.log(isFold.value);
};
</script>

<style lang="less" scoped>
.main {
	height: 100%;
	width: 100%;
	.el-aside {
		transition: width 0.2s linear;
		background-color: #001529;
		&::-webkit-scrollbar {
			display: none;
		}
	}
	.el-container {
		height: 100%;
	}
}
</style>
