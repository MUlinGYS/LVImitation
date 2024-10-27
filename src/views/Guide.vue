<template>
	<div
		style="
			height: auto;
			min-height: 100%;
			display: flex;
			flex-direction: column;
		">
		<div
			class="guide-container-img"
			:style="{
				backgroundImage: 'url(' + currentImgPath + ')',
				backgroundSize: '100% 100%',
				backgroundRepeat: 'no-repeat',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				color: 'white',
				fontSize: '24px',
			}">
			{{ currentName }}
		</div>
		<div class="guide-container-menu">
			<div
				v-for="(item, index) in menu"
				:key="index"
				:class="{ active: boldStates[index] }"
				style="padding: 0 10px"
				@click="
					toggleBold(index);
					scrollToFirst(index);
				">
				{{ item.name }}
			</div>
		</div>
		<!-- <div
			style="
				display: flex;
				flex-direction: row-reverse;
				padding: 10px 20px 10px 0;
				background-color: white;
			">
			<svg
				t="1729943062581"
				class="icon"
				viewBox="0 0 1024 1024"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				p-id="8460"
				width="16"
				height="16"
				@click="toggleClass()">
				<path
					d="M838.074169 1024c-36.197133 0-71.19436-12.99897-98.59219-36.597101-27.097853-23.298154-45.296412-55.29562-51.395928-90.492831h-628.950176c-14.198875 0-25.697964-11.499089-25.697964-25.697964s11.499089-25.697964 25.697964-25.697965h629.250152c6.099517-35.197212 24.198083-67.294669 51.395928-90.592823 64.394899-54.295699 160.587278-46.19634 214.882978 18.198558s46.19634 160.587278-18.198559 214.882978c-27.497822 23.298154-62.395057 35.997148-98.392205 35.997148z m0.199984-254.279856c-56.095556-0.199984-101.591952 45.096428-101.791936 101.191983-0.199984 56.095556 45.096428 101.591952 101.191983 101.791937 56.095556 0.199984 101.591952-45.096428 101.791937-101.191984 0.099992-26.997861-10.59916-52.89581-29.697648-72.094289-18.898503-18.998495-44.596467-29.797639-71.494336-29.697647zM185.925831 662.928604c-84.293322-0.199984-152.48792-68.694558-152.187944-152.987881 0.199984-61.09516 36.697093-116.190796 92.992634-140.088902 52.995802-22.498218 114.190954-12.99897 157.887492 24.598051 27.097853 23.298154 45.296412 55.29562 51.395928 90.492831h629.250152c6.699469 0 13.198954 2.699786 17.998574 7.499406 4.79962 4.699628 7.499406 11.099121 7.499406 17.79859 0 14.198875-11.499089 25.697964-25.697964 25.697965H335.913949c-6.099517 35.197212-24.198083 67.294669-51.395928 90.592823-27.39783 23.498139-62.395057 36.397117-98.59219 36.397117z m0-253.679904c-55.995564 0-101.391968 45.396404-101.391968 101.391968S129.930267 612.032636 185.925831 612.032636c55.895572-0.099992 101.191984-45.496396 101.191984-101.391968 0-26.797877-10.699152-52.595833-29.697648-71.494337-18.898503-19.198479-44.696459-29.997624-71.494336-29.897631z m652.148338-103.691786c-36.197133 0-71.19436-12.99897-98.59219-36.597101-27.097853-23.298154-45.296412-55.29562-51.395928-90.492831h-628.950176c-14.198875 0-25.697964-11.499089-25.697964-25.697964S44.937 127.071054 59.135875 127.071054h629.250152c6.099517-35.197212 24.198083-67.294669 51.395928-90.592824C803.47691-18.017453 899.369313-10.618039 953.964988 53.076915c23.798115 27.797798 36.697093 63.194994 36.497109 99.792095 0.199984 84.093338-67.794629 152.387928-151.887968 152.587912-0.199984 0.099992-0.399968 0.099992-0.49996 0.099992z m0.299976-254.279856c-55.895572 0.099992-101.191984 45.496396-101.191984 101.391968 0 26.797877 10.699152 52.595833 29.697648 71.494336 39.396879 39.596863 103.391809 39.796847 143.088664 0.399968s39.796847-103.391809 0.399969-143.088664l-0.499961-0.499961c-18.998495-18.998495-44.696459-29.697647-71.494336-29.697647z"
					p-id="8461"
					fill="#2c2c2c"></path>
			</svg>
		</div>
		<div class="sift">
			<el-collapse @change="handleChange">
				<el-collapse-item title="材质" name="1">
					<div>
						与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
					</div>
				</el-collapse-item>
				<el-collapse-item title="颜色" name="2">
					<div>
						控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
					</div>
				</el-collapse-item>
				<el-collapse-item title="价格" name="3">
					<div>简化流程：设计简洁直观的操作流程；</div>
				</el-collapse-item>
			</el-collapse>
		</div> -->
		<div class="productsList">
			<div
				ref="productsDiv"
				style="
					height: 100%;
					width: 100%;
					display: flex;
					flex-wrap: wrap;
					justify-content: space-evenly;
					align-content: space-between;
				">
				<div
					class="product-div"
					v-for="(box, index) in 10"
					:key="index"
					:style="{
						width: boxWidth + 'px',
						height: boxWidth + 120 + 'px',
						marginTop: '5px',
						marginBottom: '5px',
					}">
					<div
						class="productsImg"
						:style="{
							width: boxWidth + 'px',
							height: boxWidth - 20 + 'px',
						}"></div>
					<div class="Price">
						<p style="font-size: 15px; margin-top: 50px">
							SLENDER 钱夹
						</p>
						<p style="font-size: 9px; margin-top: 10px">$300</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			const menu = [
				{
					id: 1,
					name: '长款钱夹',
					imgPath: require(`@/assets/lv.png`),
				},
				{
					id: 2,
					name: '短款钱夹',
					imgPath: require(`@/assets/lv.png`),
				},
				{
					id: 3,
					name: '钥匙包和卡包',
					imgPath: require(`@/assets/lv.png`),
				},
				{
					id: 4,
					name: '迷你手袋',
					imgPath: require(`@/assets/lv.png`),
				},
				{ id: 5, name: '手拿包', imgPath: require(`@/assets/lv.png`) },
				{
					id: 6,
					name: '长款钱夹',
					imgPath: require(`@/assets/lv.png`),
				},
				{
					id: 7,
					name: '短款钱夹',
					imgPath: require(`@/assets/lv.png`),
				},
				{
					id: 8,
					name: '钥匙包和卡包',
					imgPath: require(`@/assets/lv.png`),
				},
				{
					id: 9,
					name: '迷你手袋',
					imgPath: require(`@/assets/lv.png`),
				},
				{ id: 10, name: '手拿包', imgPath: require(`@/assets/lv.png`) },
			];
			return {
				count: 0,
				menu,
				boldStates: Array.from({ length: menu.length }, () => false),
				currentImgPath: menu[0] ? menu[0].imgPath : null,
				currentName: menu[0] ? menu[0].name : null,
				isScrolling: false,
				parentWidth: 0,
			};
		},
		created() {
			this.toggleBold(0);
		},
		computed: {
			boxWidth() {
				return this.parentWidth / 2; // 减去左右间距
			},
		},
		mounted() {
			this.$nextTick(() => {
				this.updateParentWidth();
			});
			window.addEventListener('resize', this.updateParentWidth);
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.updateParentWidth);
		},
		methods: {
			updateParentWidth() {
				this.parentWidth = this.$refs.productsDiv.clientWidth;
			},
			toggleBold(index) {
				if (this.menu && this.menu.length > 0) {
					this.boldStates = this.boldStates.map(() => false);
					this.boldStates[index] = true;
					this.currentImgPath = this.menu[index].imgPath;
					this.currentName = this.menu[index].name;
				}
			},
			handleChange(val) {
				console.log(val);
			},
			scrollToFirst(index) {
				if (this.isScrolling) return;
				this.isScrolling = true;
				const menuContainer = this.$el.querySelector(
					'.guide-container-menu'
				);
				const selectedItem =
					menuContainer.querySelectorAll('div')[index];
				const startScrollLeft = menuContainer.scrollLeft;
				const distance = selectedItem.offsetLeft - startScrollLeft;
				const duration = 500;
				let startTime = null;
				const animateScroll = (timestamp) => {
					if (!startTime) startTime = timestamp;
					const elapsed = timestamp - startTime;
					const progress = Math.min(elapsed / duration, 1);
					menuContainer.scrollLeft =
						startScrollLeft + distance * progress;
					if (elapsed < duration) {
						requestAnimationFrame(animateScroll);
					} else {
						this.isScrolling = false;
					}
				};
				requestAnimationFrame(animateScroll);
			},
			// toggleClass() {
			// 	const sift = document.querySelector('.sift');
			// 	const slide = document.querySelector('.slide-in-top');
			// 	if (sift && sift.classList.contains('sift')) {
			// 		sift.classList.remove('sift');
			// 		sift.classList.add('slide-in-top');
			// 	} else if (slide && slide.classList.contains('slide-in-top')) {
			// 		slide.classList.remove('slide-in-top');
			// 		slide.classList.add('sift');
			// 	} else {
			// 		console.error('没有找到');
			// 	}
			// },
		},
	};
</script>
<style scoped>
	.guide-container-menu {
		height: 50px;
		width: calc(100% - 20px);
		display: flex;
		flex-direction: row;
		overflow: auto;
		padding-left: 20px;
		background-color: white;
		position: sticky; /* 新属性sticky */
		top: 0; /* 距离页面顶部距离 */
	}
	.guide-container-img {
		height: 250px;
		width: 100%;
	}
	.guide-container-menu div {
		white-space: nowrap;
		font-weight: normal;
		display: flex;
		align-items: center;
		font-size: 13px;
	}
	.guide-container-menu div.active {
		font-weight: bold;
	}
	.guide-container-menu::-webkit-scrollbar {
		display: none;
	}

	/* .sift {
		display: none;
		height: auto;
		width: 100%;
	}

	.slide-in-top {
		width: 100%;
		height: 12rem;
		-webkit-animation: slide-in-top 0.5s
			cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
		animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}

	@-webkit-keyframes slide-in-top {
		0% {
			-webkit-transform: translateY(-1000px);
			transform: translateY(-1000px);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
			opacity: 1;
		}
	}
	@keyframes slide-in-top {
		0% {
			-webkit-transform: translateY(-1000px);
			transform: translateY(-1000px);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
			opacity: 1;
		}
	} */

	/* 层叠设计 */
	/* .guide-container-img {
		z-index: 10;
	}
	.guide-container-menu {
		z-index: 9;
		background-color: white;
	}
	svg.icon {
		z-index: 8;
	}
	.sift {
		z-index: 1;
	}

	.slide-in-top >>> .el-collapse-item__header {
		padding: 0 60px !important;
	}

	.slide-in-top >>> .el-collapse-item__content {
		padding: 0 60px !important;
	} */

	.productsList {
		width: 100%;
		height: auto;
	}
	.productsImg {
		/* background-image: url('../assets/lv.png'); */
		background-size: 100% 100%;
		background-repeat: no-repeat;
		border-radius: 0px;
		background: #f2f2f2;
		box-shadow: inset 50px 50px 100px #e8e8e8,
			inset -50px -50px 100px #fcfcfc;
	}
	.product-div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.Price {
		width: 100%;
		margin: 0;
		text-align: center;
		height: 33%;
		display: flex;
		align-items: center;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: space-evenly;
		background: rgb(217, 212, 212);
		background: linear-gradient(
			180deg,
			rgba(217, 212, 212, 1) 0%,
			rgba(255, 255, 255, 1) 1%
		);
	}
</style>
