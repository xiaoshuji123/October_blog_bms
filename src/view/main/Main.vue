<template>
	<div class="main">
		<el-container>
			<el-aside width="200px">
				<main-aside></main-aside>
			</el-aside>
			<el-container>
				<el-header>
					<main-header></main-header>
				</el-header>
				<el-main>Main</el-main>
			</el-container>
		</el-container>
	</div>
</template>
<script setup lang="ts">
import MainAside from '@/components/main-aside/index.vue';
import mainHeader from '@/components/main-header/index.vue';
</script>

<style lang="less" scoped>
.main {
	height: 100%;
	width: 100%;
	.el-aside {
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
