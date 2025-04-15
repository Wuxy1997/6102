<template>
	<view >
		<view class="shopping">
			
			<view class="shopping-nav">
				购物车
			</view>
			
			<view class="shopping-container">
				<view class="shopping-icon">
					<image class="icon-picture" src="../../static/shopping-icon.png"></image>
				</view>
				
				<view class="shopping-des">
					空空如也
				</view>
				
				<view class="shopping-btns" @click="gotoIndex">
					添加商品
				</view>
				
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLogin:false
			}
		},
		
		onLoad() {

			let token = JSON.parse(localStorage.getItem("token"));
			// console.log("购物车获取的token值：",token);
			if(token){
				this.isLogin = true;
			}else{
				this.isLogin = false;
			}
			
			if(!this.isLogin){
				uni.showToast({
					title:"您未登录过",
					icon:'none'
				})
				
				setTimeout(()=>{
					uni.navigateTo({
						url:"/pages/login/login"
					})
				},1000)
				// )
			}
		},
		
		methods: {
			gotoIndex(){
				uni.showToast({
					title:"正在加载中",
					icon:'none'
				})
				
				setTimeout(()=>{
					uni.switchTab({
						url:"/pages/index/index"
					},500)
				})
			}
		}
	}
</script>

<style>
	.shopping{
		height: calc(100vh - 100rpx);
		background-color: #efeff0;
		font-family: "黑体";
	}
	
	.shopping-nav{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100rpx;
		background-color: #0c34ba;
		font-size: 56rpx;
		/* font-weight: bold; */
		color: #fff;
		letter-spacing: 2.55px;
		font-size: 20px;
	}
	
	.shopping-container{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 87%;
		font-size: 48rpx;
	}
	
	.shopping-icon{
		width: 180rpx;
		height: 180rpx;
		/* border: 10rpx solid red; */
		padding: 50rpx;
		border-radius: 50% ;
		overflow: hidden;
		background-color: #e5e5e5;
	}
	
	.icon-picture{
		width: 100%;
		height: 100%;
		display: block;
	}
	
	.shopping-des{
		padding: 70rpx 0;
		font-size: 20px;
	}
	
	.shopping-btns{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 45%;
		height: 80rpx;
		background-color: #0c34ba;
		border-radius: 60rpx;
		color: #fff;
		letter-spacing: 1px;
		font-size: 18px;
	}
</style>
