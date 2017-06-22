<template>
	<div id="container">
		<div class="header">
			<div class="top clearfix">
				<div class="setting f_right">
					<router-link to="#">
						<img src="../../assets/img/set.png" alt="" />
					</router-link>
				</div>
				<div class="message f_right">
					<router-link to="/page/system">
						<img src="../../assets/img/message2.png" alt="" />
					</router-link>
				</div>
			</div>
			<div class="person clearfix">
				<router-link to="#" class="f_left">
					<img src="../../assets/img/img.png" alt="" />
				</router-link>
				<ul class="f_left">
					<li>芦苇微微</li>
					<li>会员等级：[LV.1]</li>
				</ul>
			</div>
		</div>
		<div class="money">
			<ul>
				<li>
					<router-link to="#">
						<p>7,332.06</p>
						<p>余额</p>
					</router-link>

				</li>
				<li>
					<router-link to="#">
						<p>823.05</p>
						<p>奖励金</p>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="order">
			<router-link to="#" class="clearfix">
				<p class="f_left">我的订单</p>
				<img src="../../assets/img/my_arrow.png" alt="" class="f_right" />
			</router-link>
		</div>
		<ul class="clearfix more">
			<li>
				<router-link to="#">
					<img src="../../assets/img/pay.png" alt="" />
					<p>代付款</p>
				</router-link>
			</li>
			<li>
				<router-link to="#">
					<img src="../../assets/img/shipper.png" alt="" />
					<p>代付款</p>
				</router-link>
			</li>
			<li>
				<router-link to="#">
					<img src="../../assets/img/goods.png" alt="" />
					<p>代付款</p>
				</router-link>
			</li>
			<li>
				<router-link to="#">
					<img src="../../assets/img/pingjia.png" alt="" />
					<p>代付款</p>
				</router-link>
			</li>
			<li>
				<router-link to="#">
					<img src="../../assets/img/money.png" alt="" />
					<p>代付款</p>
				</router-link>
			</li>
		</ul>
		<div class="bgc"></div>
		<ul class="details clearfix">
			<li>
				<router-link to="#">
					<img src="../../assets/img/bonus.png" alt="" />
					<p>代付款</p>
				</router-link>
			</li>
			<li>
				<router-link to="#">
					<img src="../../assets/img/ewm.png" alt="" />
					<p>代付款</p>
				</router-link>
			</li>
			<li>
				<router-link to="#" class="dis">
					<img src="../../assets/img/tip.png" alt="" />
					<p>代付款</p>
				</router-link>
			</li>
			<li>
				<router-link to="#">
					<img src="../../assets/img/welfare.png" alt="" />
					<p>代付款</p>
				</router-link>
			</li>
			<li>
				<router-link to="#">
					<img src="../../assets/img/tema.png" alt="" />
					<p>代付款</p>
				</router-link>
			</li>
			<li>
				<router-link to="#" class="dis">
					<img src="../../assets/img/collect.png" alt="" />
					<p>代付款</p>
				</router-link>
			</li>
		</ul>
		<div class="footer clearfix">
			<ul>
				<li class="index">
					<router-link to="/page/home">
						<img :src="index" alt="" class="index_img" />
					</router-link>
				</li>
				<li class="my">
					<router-link to="#">
						<img :src="my" alt="" class="my_img" />
					</router-link>
				</li>
			</ul>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'hello',
		data() {
			return {
				index: "../../../static/index.png",
				my: "../../../static/my-2.png"
			}
		},
		methods: {
			/*indexClick() {
				this.my = "../../static/my.png"
				this.index = "../../static/index-2.png"
			},
			myClick() {
				this.my = "../../static/my-2.png"
				this.index = "../../static/index.png"
			}*/
		}
	}
</script>
<style scoped src="../../assets/css/mine.css">

</style>