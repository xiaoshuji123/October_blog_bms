<template>
	<div class="Login">
		<LoginBgc></LoginBgc>
		<div class="panel">
			<h2>后台管理系统</h2>
			<div class="content">
				<el-form
					:model="form"
					:rules="rules"
					label-position="left"
					label-width="auto"
					ref="elFormRef"
				>
					<el-form-item label="账号" prop="name" required>
						<el-input v-model="form.name" />
					</el-form-item>
					<el-form-item label="密码" prop="password" required>
						<el-input v-model="form.password" type="password" show-password />
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
<script setup lang="ts">
import { reactive, ref } from 'vue';
import LoginBgc from '@/assets/svg/LoginBgc.vue';
import useLogin from '@/store/login';
import { localCache } from '@/utils/cache';
import type { ElForm } from 'element-plus';

const isRemPwd = ref(localCache.getCache('isRemPwd'));
const form = reactive({
	name: localCache.getCache('name') ?? '',
	password: localCache.getCache('password') ?? ''
});
const elFormRef = ref<InstanceType<typeof ElForm>>();
const rules = {
	name: [
		{ required: true, message: '请输入账号', trigger: 'blur' },
		{ pattern: /^[a-z0-9]{6,20}$/, message: '长度为6-20', trigger: 'change' }
	],
	password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
};

const handelBtnChange = () => {
	if (isRemPwd.value) {
		localCache.setCache('name', form.name);
		localCache.setCache('password', form.password);
		localCache.setCache('isRemPwd', isRemPwd.value);
	} else {
		localCache.removeCache('name');
		localCache.removeCache('password');
		localCache.removeCache('isRemPwd');
	}
};
const loginStore = useLogin();

const handelLogin = () => {
	elFormRef.value?.validate((valid) => {
		console.log(valid);
		if (valid) {
			loginStore.loginAction(form);
		}
	});
};
</script>
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
