<template>
	<div>
		<div
			style="
				height: 630px;
				position: relative; /* 确保子元素可以相对于此容器定位 */
			">
			<el-carousel
				ref="carousel"
				:loop="true"
				:autoplay="true"
				height="600px"
				indicator-position="none"
				@change="onCarouselChange">
				<el-carousel-item v-for="(item, index) in menu" :key="index">
					<div class="image-container">
						<img
							:src="item.imgPath"
							alt="Carousel Image"
							style="
								width: 90%;
								height: 100%;
								object-fit: contain;
							" />
					</div>
				</el-carousel-item>
			</el-carousel>
			<p class="overlay-text">
				{{ currentIndex + 1 }} / {{ currentImageCount }}
			</p>
		</div>
		<div class="commodity-name">
			<!-- 短横线 -->
			<div
				style="
					width: 100%;
					height: 30px;
					display: flex;
					align-items: center;
					justify-content: center;
				">
				<div
					style="
						width: 50px;
						height: 2px;
						background-color: #9e9e9e;
					"></div>
			</div>
			<!-- name -->
			<div
				style="
					height: auto;
					width: calc(100% - 130px);
					padding: 0 100px 0 30px;
				">
				<p style="font-size: 20px">
					《PHARRELL: CARBON ,PRESSURE & TIME》珠宝作品集
				</p>
			</div>
			<!-- 价格 -->
			<div
				style="
					height: auto;
					width: calc(100% - 60px);
					padding: 15px 30px;
					display: flex;
					align-items: center;
					justify-content: space-between;
				">
				<p style="font-size: 14px">￥2000</p>
				<img src="../assets/fx.png" />
			</div>
		</div>
		<!-- 介绍 -->
		<div style="height: auto; width: calc(100% - 60px); padding: 10px 30px">
			<p style="font-size: 12px">
				本作品集展示设计师兼音乐家PharrellWilliams
				创作的百余件珠宝作品。Pharrell
				Williams于2000年代与路易威登初次进行珠宝合作，为他与其他品牌的日后合作莫定根基。作者随着张张照片讲述该设计师的创作历程，探究嘻哈文化在精品行业的更新迭代。此版配有品牌专属封面，可供收藏。
			</p>
		</div>
		<div
			style="
				height: auto;
				width: calc(100% - 60px);
				padding: 20px 30px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-top: 1px solid #cecece;
				border-bottom: 1px solid #cecece;
			">
			<p style="font-size: 15px">商品货号 {{ CatalogNumber }}</p>
			<div style="display: flex; align-items: center">
				<p style="margin-right: 5px; font-size: 15px">复制</p>
				<i class="el-icon-tickets"></i>
			</div>
		</div>
		<div style="height: auto; width: 100%" v-for="PHAR in PHAR">
			<img :src="PHAR.PHARIMG" style="width: 100%" />
		</div>
		<div class="shoufengqing" style="height: auto; width: 100%">
			<el-collapse v-model="activeNames" @change="handleChange">
				<el-collapse-item title="详细特征" name="1">
					<div>
						撰文:Pharrell Williams，撰稿人:NIGO® 和Tylerthe Creator
					</div>
					<div>216 页</div>
					<div>硬面精装</div>
					<div>
						网站中的信息可能存在技术失准、色差、尺码误差或因产品改良，生产批次等因素造成的细节误差，网站展示的产品图片可能与实际外观不一致。如有相关问题，请致电顾客服务中心。
					</div>
				</el-collapse-item>
				<el-collapse-item title="配送服务" name="2">
					<div>
						一旦订单确认，除非您选择到提供“线上购买，专卖店取货”服务的专卖店取货，否则您订购的产品将由我们的合作快递服务公司递送到您下单时提供给我们的地址。如果因为您向我们提供的地址不正确或不完整导致我们无法及时递送您的订单，我们不承担因此产生的任何责任。请注意，我们的递送仅限于中国大陆地区(不包括香港特别行政区、澳门特别行政区和台湾地区)。产品可以递送的地区还取决于我们合作的快递服务公司是否有能力送达。
					</div>
				</el-collapse-item>
				<el-collapse-item title="支付方式" name="3">
					<div>
						在向您发运产品前，您必须通过支付宝、微信支付或银行转账(前提是您应是付款银行账户、微信账户、支付宝账户的合法持有人并且您定居在中国大陆地区)或在本网站上不时可用的其他付款方式进行支付。付款金额必须为人民币。如果您通过银行转账付款，我们将通过电子邮件或短信将路易威登的银行账户详细信息发送给您。银行账户、微信账户或支付宝账户持有人的姓名必须与下单人员的姓名相符。此外，不接受国际银行转账和现金转账。
					</div>
				</br>
					<div>
						注:如您通过【路易威登】内的微信小程序购买商品，目前仅能通过微信支付的方式进行支付。
					</div>
				</el-collapse-item>
			</el-collapse>
		</div>
	</div>
</template>

<script>
	import Hammer from 'hammerjs';

	export default {
		data() {
			const menu = [
				{
					imgPath: require('@/assets/PHARRELL1.png'),
				},
				{
					imgPath: require('@/assets/PHARRELL2.png'),
				},
			];
			const PHAR = [
				{
					PHARIMG: require('@/assets/PHARRELL3.png'),
				},
				{
					PHARIMG: require('@/assets/PHARRELL3.png'),
				},
				{
					PHARIMG: require('@/assets/PHARRELL3.png'),
				},
			];
			return {
				menu,
				currentIndex: 0, // 当前显示的图片索引
				currentImageCount: menu.length, // 总图片数量
				CatalogNumber: 'R09195',
				PHAR,
				activeNames: ['1'],
			};
		},
		methods: {
			onCarouselChange(index) {
				// 更新当前图片索引
				this.currentIndex = index;
			},
			handleChange(val) {
				console.log(val);
			},
		},
		mounted() {
			const carousel = this.$refs.carousel;
			const hammer = new Hammer(carousel.$el);
			hammer.on('swipeleft', () => {
				carousel.next();
			});
			hammer.on('swiperight', () => {
				carousel.prev();
			});
		},
	};
</script>

<style scoped>
	.el-carousel__item h3 {
		position: relative;
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: white;
	}

	.el-carousel__item:nth-child(2n + 1) {
		background-color: white;
	}

	.image-container {
		width: 100%;
		height: 90%;
		padding: 20px 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #e9e9e9;
	}

	.overlay-text {
		z-index: 2;
		position: absolute; /* 使用绝对定位 */
		bottom: 0;
		right: 20px;
		letter-spacing: -3px;
		margin: 10px; /* 可以根据需要调整边距 */
		color: black; /* 文字颜色，可以根据需要调整 */
		font-size: 1.3rem; /* 文字大小，可以根据需要调整 */
	}

	.el-carousel__mask {
		height: auto;
	}

	.commodity-name {
		width: 100%;
		height: auto;
		padding-bottom: 10px;
		background-color: #ffffff;
		position: sticky; /* 新属性sticky */
		top: 0; /* 距离页面顶部距离 */
	}

	.shoufengqing >>> .el-collapse-item__header {
		padding: 0 30px !important;
	}

	.shoufengqing >>> .el-collapse-item__content {
		padding: 0 30px !important;
	}
</style>
