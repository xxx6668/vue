<template>
	<div id="container">
		<div class="headers clearfix">
			<router-link to="/" class="f_left" >
				<img src="../../assets/img/back.png" />
			</router-link>
			<span>注册</span>
		</div>
		<form action="#" class="forms clearfix">
			<div class="contents">
				<span>姓名：</span>
				<input type="text" placeholder="请输入您的姓名" />
			</div>
			<div class="contents">
				<span>身份证号：</span>
				<input type="number" placeholder="请输入您的身份证号码" />
			</div>
			<div class="contents">
				<span>身份证号：</span>
				<input type="type" placeholder="请输入您的身份证号码" />
			</div>
			<div class="contents">
				<span>密码：</span>
				<input type="type" placeholder="请设置登录密码" /> </div>
			<div class="contents">
				<span>学校：</span>
				<input type="type" placeholder="请输入您所在的学校（选填）" />
			</div>
			<div class="contents">
				<span>班级：</span>
				<input type="number" placeholder="请输入您所在的班级（选填）" />
			</div>
			<div class="contents">
				<span>系别：</span>
				<input type="number" placeholder="请输入您的系别（选填）" />
			</div>
			<div class="contents">
				<span>亲推号码：</span>
				<input type="number" placeholder="请输入亲推的手机号码" />
			</div>
			<div class="contents">
				<span>占位号码：</span>
				<input type="number" placeholder="请输入占位的手机号码" />
			</div>
			<div class="contents">
				<span>手机号：</span>
				<input type="number" placeholder="请输入您的手机号码" />
			</div>
			<div class="contents clearfix">
				<input type="number" placeholder="请输入验证码" />
				<input type="button" class="btn" value="获取验证码" />
			</div>
		</form>
		<div class="submit">
			<input type="button" value="注册" />
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped src="../../assets/css/register.css">
	/*@import '../../assets/css/register.css';*/
	

</style>