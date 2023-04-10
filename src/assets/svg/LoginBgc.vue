<template>
	<div class="login-bgc"></div>
</template>
<style lang="less" scoped>
.login-bgc {
	position: absolute;
	z-index: -1;
	width: 100%;
	height: 100%;
	background-color: #cc0033;
	background-image: radial-gradient(closest-side, #32c5ff, rgba(235, 105, 78, 0)),
		radial-gradient(closest-side, rgb(119, 120, 89), rgba(243, 11, 164, 0)),
		radial-gradient(closest-side, rgb(234, 135, 7), rgba(254, 234, 131, 0)),
		radial-gradient(closest-side, #20e050, rgba(170, 142, 245, 0));
	background-size: 130vw 130vh, 120vw 120vh, 100vw 150vh, 120vw 130vh;
	background-position: -80vw -80vh, 30vw -20vh, -20vw 20vh, 30vw 20vh;
	background-repeat: no-repeat;
	animation: 15s moiveAnimation infinite linear;
}

@keyframes moiveAnimation {
	0%,
	100% {
		background-size: 130vw 130vh, 120vw 120vh, 100vw 150vh, 120vw 130vh;
		background-position: -80vw -80vh, 30vw -20vh, -20vw 20vh, 30vw 20vh;
	}
	25% {
		background-size: 120vw 120vh, 130vw 150vh, 130vw 120vh, 100vw 110vh;
		background-position: -30vw -30vh, 40vw -10vh, 0vw 10vh, -10vw 20vh;
	}
	50% {
		background-size: 130vw 130vh, 140vw 100vh, 100vw 150vh, 90vw 110vh;
		background-position: 10vw -60vh, 20vw 10vh, 10vw 30vh, 10vw -20vh;
	}
	75% {
		background-size: 140vw 140vh, 100vw 130vh, 100vw 150vh, 130vw 110vh;
		background-position: -70vw -70vh, 0vw -10vh, 30vw -20vh, 20vw 30vh;
	}
}
</style>
