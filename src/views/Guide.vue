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
		<div class="productsList">
			<div
				ref="productsDiv"
				style="
					height: 100%;
					width: 100%;
					display: flex;
					flex-wrap: wrap;
					justify-content: flex-start;
					align-content: space-between;
				">
				<div
					class="product-div"
					v-for="(product, itemIndex) in products || []"
					:key="itemIndex"
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
						}">
						<img
							:src="`${product.img}`"
							style="background-size: contain; width: 90%" />
					</div>
					<div class="Price">
						<p style="font-size: 15px; margin-top: 50px">
							{{ product.title }}
						</p>
						<p style="font-size: 9px; margin-top: 10px">$300</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex';

	export default {
		data() {
			const menu = [];
			return {
				count: 0,
				menu,
				boldStates: Array.from({ length: menu.length }, () => false),
				currentImgPath: menu[0] ? menu[0].imgPath : null,
				currentName: menu[0] ? menu[0].name : null,
				isScrolling: false,
				parentWidth: 0,
				products: [],
				itemIndex: 0,
			};
		},
		created() {
			this.sendPostRequest(1);
		},
		computed: {
			...mapState('ladiesAudition', ['itemId', 'listId']),
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
				if (this.$refs.productsDiv) {
					this.parentWidth = this.$refs.productsDiv.clientWidth;
				}
			},
			toggleBold(index) {
				if (this.menu && this.menu.length > 0) {
					this.boldStates = this.boldStates.map(() => false);
					this.boldStates[index] = true;
					this.currentImgPath = this.menu[index].imgPath;
					this.currentName = this.menu[index].name;

					// 产品列表的内容取决于选中的菜单项
					this.products = this.menu[index].product || [];
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
			sendPostRequest(id) {
				const url = this.listId
					? '/index/foundList'
					: '/index/categoryList';
				const bodyParam = this.listId ? `id=${this.listId}` : 'id=1';
				return fetch(url, {
					method: 'POST',
					headers: {
						'Content-Type':
							'application/x-www-form-urlencoded;charset=UTF-8',
					},
					body: bodyParam,
				})
					.then((response) => response.json())
					.then((data) => {
						if (data.status === 1 && data.data) {
							
							this.menu = data.data.map((item) => ({
								id: item.id,
								name: item.title,
								product: item.product || [], 
								imgPath: item.banner || null,
							}));
							// 更新相关依赖数据
							this.boldStates = Array.from(
								{ length: this.menu.length },
								() => false
							);
							this.currentImgPath = this.menu[0]
								? this.menu[0].imgPath
								: null;
							this.currentName = this.menu[0]
								? this.menu[0].name
								: null;
							console.log(this.menu);
							this.toggleBold(0);
							// 查找 itemId 对应的菜单项并激活它
							const activeIndex = this.menu.findIndex(
								(item) => item.id === this.itemId
							);
							if (activeIndex !== -1) {
								this.toggleBold(activeIndex);
								setTimeout(() => {
									if (
										this.$el.querySelector(
											'.guide-container-menu'
										)
									) {
										this.scrollToFirst(activeIndex);
									}
								}, 0);
								console.log(activeIndex);
							}
							return data;
						}
					})
					.catch((error) => console.error(error));
			},
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
		/* background-size: contain; 保持图片的原始比例并使其完全适合容器 */
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
	.productsList {
		width: 100%;
		height: auto;
	}
	.productsImg {
		/* background-image: url('../assets/lv.png'); */
		display: flex;
		align-items: flex-end;
		justify-content: center;
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
