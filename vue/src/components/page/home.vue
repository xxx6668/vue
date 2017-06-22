<template>
	<div id="container">
		<div class="header">
			<div class="f_left message">
				<router-link to="#">
					<img src="../../assets/img/message.png" alt="" />
				</router-link>
			</div>
			<img src="../../assets/img/logo@2x.png" alt="" class="logo">
			<div class="f_right search">
				<a href="#">
					<img src="../../assets/img/search@2x.png" alt="" />
				</a>
			</div>
		</div>
		<!--轮播图-->
		<mt-swipe :auto="2000">
			<mt-swipe-item>
				<router-link to="/page/detail">
					<img src="../../assets/img/banner.png" alt="" />
				</router-link>
			</mt-swipe-item>
			<mt-swipe-item>
				<router-link to="/page/detail">
					<img src="../../assets/img/banner1.png" alt="" />
				</router-link>
			</mt-swipe-item>
		</mt-swipe>
		<div class="vip">
			<img src="../../assets/img/vip.png" alt="" />
		</div>
		<div class="best">
			<img src="../../assets/img/best.png" class="best_img" />
			<img src="../../assets/img/dr.png" class="best_dr" />
			<div class="best_jart">
				<p class="Jart">套餐一：蒂佳婷Dr.Jart+化妆品 呵护肌肤 5件装</p>
				<div class="new_price">
					￥199.00
					<s class="pre_price">
						￥499.00
					</s>
				</div>
			</div>
		</div>
		<div class="leader">
			<img src="../../assets/img/leader.png" class="leader_img" />
		</div>
		<div class="footer clearfix">
			<ul>
				<li class="index">
					<router-link to="#">
						<img :src="index" alt="" class="index_img" />
					</router-link>
				</li>
				<li class="my">
					<router-link to="/page/mine">
						<img :src="my" alt="" class="my_img" />
					</router-link>
				</li>
			</ul>
		</div>
		<div class="last">
			没有更多了哦
		</div>
	</div>
</template>

<script>
	import { Swipe, SwipeItem } from 'mint-ui';

	export default {
		name: 'hello',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				index: "../../../static/index-2.png",
				my: "../../../static/my.png"
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
<style scoped src="../../assets/css/index.css"></style>