<template>
	<el-icon :size="20" @click="handelClick"><FullScreen /></el-icon>
	<el-dropdown @command="command">
		<el-avatar
			:size="40"
			src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
		/>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item command="exit">
					<el-icon><CircleClose /></el-icon>
					<span>退出系统</span>
				</el-dropdown-item>
				<el-dropdown-item divided command="info">
					<el-icon><InfoFilled /></el-icon>
					<span>个人信息</span>
				</el-dropdown-item>
				<el-dropdown-item divided command="editPassword">
					<el-icon><Unlock /></el-icon>
					<span>修改密码</span>
				</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script setup lang="ts">
import { TOKEN } from '@/global/constants';
import router from '@/router';
import { fullscreenChange, handleFullscreenChange } from '@/utils/fullScreen';

type CommandType = 'exit' | 'info' | 'editPassword';
const command = (value: CommandType) => {
	switch (value) {
		case 'exit':
			localStorage.removeItem(TOKEN);
			router.push('/login');
			break;
		case 'info':
			break;
		case 'editPassword':
			break;
	}
};
document.addEventListener('fullscreenchange', handleFullscreenChange);
const handelClick = () => {
	fullscreenChange();
};
</script>

<style lang="less" scoped>
.el-dropdown-menu {
	padding: 6px 10px;
}
</style>
