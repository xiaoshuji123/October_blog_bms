<script setup lang="ts">
import LoginBgc from '@/assets/svg/LoginBgc.vue';
import { reactive, ref } from 'vue';
const isRemPwd = ref(false);
const form = reactive({
	name: '',
	password: ''
});

const handelBtnChange = () => {
	console.log(isRemPwd.value);
};

const handelLogin = () => {};
</script>

<template>
	<div class="Login">
		<LoginBgc></LoginBgc>
		<div class="panel">
			<h2>后台管理系统</h2>
			<div class="content">
				<el-form :model="form" label-position="left" label-width="auto">
					<el-form-item label="账号" prop="name" required>
						<el-input v-model="form.name" />
					</el-form-item>
					<el-form-item label="密码" prop="password" required>
						<el-input v-model="form.password" />
					</el-form-item>
				</el-form>
				<el-checkbox v-model="isRemPwd" label="记住密码" size="large" @change="handelBtnChange" />
			</div>
			<div class="footer">
				<el-button type="primary" size="large" @click="handelLogin">立即登录</el-button>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
.Login {
	width: 100vw;
	height: 100vh;
}
.panel {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 400px;
	height: 300px;
	background-color: #fff;
	padding: 20px;
	border-radius: 7px;
	box-sizing: border-box;
	.content {
		padding: 20px 0;
	}
}
.footer {
	width: 230px;
	.el-button {
		width: 100%;
	}
}
</style>
