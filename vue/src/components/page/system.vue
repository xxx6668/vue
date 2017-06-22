<template>
	<div id="container">
		<div class="header clearfix">
			<router-link to="/page/home" class="clearfix" >
				<img src="../../assets/img/back.png" class="header_img" />
			</router-link>
			系统消息
		</div>
		<div class="content">
			<ul>
				<!--提现到账-->
				<li>
					<div class="time">5月10日 15:37</div>
					<div class="arrive">
						<p class="money">提现到账</p>
						<p class="date">5月10日 15:37</p>
						<p class="amount">提现金额</p>
						<p class="sum">￥571.40</p>
						<div class="bank">提现银行：
							<span>招商银行（0263）</span>
						</div>
						<div>提现时间：
							<span>2017-12-23 15:45:48</span>
						</div>
						<div>到账时间：
							<span>2017-12-23 15:45:48</span>
						</div>
						<div>备注：
							<span>您的提现金额已到账，请注意查收</span>
						</div>
					</div>
				</li>
				<!--提现发起-->
				<li>
					<div class="time">5月10日 15:37</div>
					<div class="ready">
						<p class="money">提现到账</p>
						<p class="date">5月10日 15:37</p>
						<p class="amount">提现金额</p>
						<p class="sum">￥571.40</p>
						<div class="bank">提现银行：
							<span>招商银行（0263）</span>
						</div>
						<div>提现时间：
							<span>2017-12-23 15:45:48</span>
						</div>
						<div>预计到账时间：
							<span>2017-12-23 15:45:48</span>
						</div>
						<div>备注：
							<span>您的提现金额已发起</span>
						</div>
					</div>
				</li>
				<!--系统提醒-->
				<li>
					<div class="time">5月10日 15:37</div>
					<div class="xiaochaung">
						<p class="money">校创科技</p>
						<p class="date">消息提醒</p>
						<div>
							欢迎你再次回来校创科技
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
</script>
<style scoped src="../../assets/css/system.css">

</style>