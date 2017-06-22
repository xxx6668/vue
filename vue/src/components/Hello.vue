<template>
	<div id="container">
		<div class="login">
			<div class="header-back">
				<a href="#"><img src="../assets/img/back.png" alt="" class="arrowL-img" /></a>
				<h1>登录</h1>
			</div>
			<div class="login-content">
				<img src="../assets/img/LOGO2.png" alt="" class="logo2" />
				<div class="login-part">
					<p class="prompt1"></p>
					<ul class="comWidth">
						<li>
							<img src="../assets/img/accout.png" alt="" /><input type="text" placeholder="请输入手机号" id="login_telephone" />
						</li>
						<li>
							<img src="../assets/img/pw.png" alt="" /><input type="password" placeholder="请输入密码" id="login_password" />
						</li>
					</ul>
					<p class="prompt2"></p>
					<div class="button-big login-btn">
						<router-link to="/page/home">登录</router-link>
					</div>
					<div class="register-text comWidth">
						<router-link to="/page/register"><span class="fl-lt">免费注册<i id="oauth"></i><i id="oauth2"></i></span></router-link>
						<router-link to="#"><span class="fl-rt">忘记密码</span></router-link>
					</div>
					<div id="output"></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { Swipe, SwipeItem } from 'mint-ui';
	export default {
		name: 'hello',
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../assets/css/common.css"></style>
<style scoped src="../assets/css/login.css"></style>