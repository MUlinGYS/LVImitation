<template>
	<div>
		<div class="wrapper">
			<div
				class="smallSelectedBox"
				style="
					height: 90px;
					display: flex;
					align-items: center;
					overflow-x: scroll;
					margin: 0 5px;
				">
				<div
					v-for="(item, i) in items"
					:key="i"
					class="smallSelected"
					:style="{
						backgroundImage: `url(${item.icon})`,
					}"
					@click="scrollToTop(i, -20)">
					<div
						class="smallTransparent"
						:style="{
							display: selectedIndex === i ? 'none' : 'flex',
						}">
						{{ item.title }}
					</div>
				</div>
			</div>
			<div
				class="Selected"
				ref="selectedContainer"
				@scroll="handleBigSelectedScroll">
				<div
					v-for="(item, outerIndex) in items"
					:key="outerIndex"
					class="BigSelected">
					<div>
						<p
							style="
								font-size: 1.5em;
								height: auto;
								padding: 0.5rem 0;
								word-break: break-all;
							">
							{{ item.title }}
						</p>
					</div>
					<div
						class="BigSelectedImg"
						:style="{
							backgroundImage: `url(${item.banner})`,
						}"></div>
					<div
						style="
							height: auto;
							min-height: 100px;
							width: 100%;
							margin-top: 10px;
							display: flex;
							flex-direction: column;
							justify-content: space-around;
							align-items: center;
						">
						<div
							style="
								height: auto;
								min-height: 100px;
								width: 100%;
								display: flex;
								justify-content: space-evenly;
								align-items: center;
								flex-wrap: wrap;
							">
							<div
								v-for="(
									innerItem, innerIndex
								) in item.product || []"
								:key="innerIndex"
								style="
									display: flex;
									flex-direction: column;
									align-items: center;
									width: 32%;
									box-sizing: border-box;
								">
								<img
									:style="{
										backgroundImage: `url(${innerItem.img})`,
									}"
									style="
										height: 100px;
										width: 100%;
										background-size: cover;
										background-repeat: no-repeat;
										object-fit: contain;
									" />
								<p class="text-ellipsis">
									{{ innerItem.title }}
								</p>
								<p
									style="
										margin: 5px;
										font-size: 10px;
										color: #9d9d9d;
									">
									$200
								</p>
							</div>
						</div>
						<el-button
							round
							style="
								margin-top: 26px;
								display: flex;
								justify-content: center;
								height: 45px;
								align-items: center;
								width: 160px;
								color: black;
							"
							:id="item.id"
							@click="HomeponentID(item.id)"
							class="custom-button">
							查看全部<span
								style="margin-left: 5px"
								class="el-icon-arrow-right"></span>
						</el-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import { mapActions } from 'vuex';
	export default {
		name: 'Homeponent',
		props: ['tabData'],
		data() {
			return {
				selectedIndex: 0,
				isScrolling: false,
				items: [],
				// product: [],
			};
		},
		created() {
			// 在组件创建时将 guide 设置为 false
			this.$store.commit('ladiesAudition/setGuideFalse');
			this.sendPostRequest();
		},
		methods: {
			scrollToTop(index, leftAdjustment) {
				this.isScrolling = true;

				const smallSelectedBox =
					this.$el.querySelector('.smallSelectedBox');
				const smallSelected =
					smallSelectedBox.querySelectorAll('.smallSelected')[index];
				const startScrollLeft = smallSelectedBox.scrollLeft;
				const distance =
					smallSelected.offsetLeft - startScrollLeft + leftAdjustment;
				const duration = 500;
				let startTime = null;

				const animateScroll = (timestamp) => {
					if (!startTime) startTime = timestamp;
					const elapsed = timestamp - startTime;
					const progress = Math.min(elapsed / duration, 1);
					smallSelectedBox.scrollLeft =
						startScrollLeft + distance * progress;
					if (elapsed < duration) {
						requestAnimationFrame(animateScroll);
					} else {
						this.isScrolling = false;
					}
				};
				requestAnimationFrame(animateScroll);

				const selected = this.$refs.selectedContainer;
				const bigSelected =
					selected.querySelectorAll('.BigSelected')[index];
				const targetScrollTop = bigSelected.offsetTop - 95;

				let currentScrollTop = selected.scrollTop;
				startTime = null;

				const animateBigScroll = (timestamp) => {
					if (!startTime) startTime = timestamp;
					const elapsed = timestamp - startTime;
					const progress = Math.min(elapsed / duration, 1);
					selected.scrollTop =
						currentScrollTop +
						(targetScrollTop - currentScrollTop) * progress;
					if (elapsed < duration) {
						requestAnimationFrame(animateBigScroll);
					} else {
						this.isScrolling = false;
					}
				};
				requestAnimationFrame(animateBigScroll);

				this.selectedIndex = index;
			},
			handleBigSelectedScroll(event) {
				if (this.isScrolling) return;
				const selected = this.$refs.selectedContainer;
				const bigSelectedElements =
					selected.querySelectorAll('.BigSelected');
				const containerScrollTop = selected.scrollTop;

				let visibleTopIndex = null;
				for (let j = 0; j < bigSelectedElements.length; j++) {
					const bigSelected = bigSelectedElements[j];
					const elementTop = bigSelected.offsetTop;
					if (
						elementTop >= containerScrollTop &&
						(visibleTopIndex === null ||
							elementTop <
								bigSelectedElements[visibleTopIndex].offsetTop)
					) {
						visibleTopIndex = j;
					}
				}

				if (visibleTopIndex !== null) {
					this.scrollSmallSelectedToTop(visibleTopIndex);
				}
			},
			scrollSmallSelectedToTop(index) {
				const smallSelectedBox =
					this.$el.querySelector('.smallSelectedBox');
				const smallSelected =
					smallSelectedBox.querySelectorAll('.smallSelected')[index];
				const startScrollLeft = smallSelectedBox.scrollLeft;
				const distance =
					smallSelected.offsetLeft - startScrollLeft - 20;
				const duration = 500;
				let startTime = null;

				const animateScroll = (timestamp) => {
					if (!startTime) startTime = timestamp;
					const elapsed = timestamp - startTime;
					const progress = Math.min(elapsed / duration, 1);
					smallSelectedBox.scrollLeft =
						startScrollLeft + distance * progress;
					if (elapsed < duration) {
						requestAnimationFrame(animateScroll);
					}
				};
				requestAnimationFrame(animateScroll);

				this.selectedIndex = index;
			},
			...mapActions('ladiesAudition', ['setItemAndListId']),
			HomeponentID(itemid, Guide = true) {
				const itemId = itemid;
				const listId = this.tabData.id;
				console.log(itemId, listId);

				this.setItemAndListId({ itemId, listId, guide: Guide });
			},
			async sendPostRequest() {
				try {
					const response = await axios.post('/index/home', {
						data: {},
					});
					const titles = response.data.data;
					const foundItem = titles.find(
						(item) => item.title === this.tabData.title
					);
					if (foundItem) {
						this.items = foundItem.child;
						console.log(this.items);

						// this.product = foundItem.child.map(
						// 	(childItem) => childItem.child || []
						// );
						this.$nextTick(() => {});
					}
				} catch (error) {
					console.error(error);
				}
			},
		},
	};
</script>

<style scoped>
	.Selected {
		height: calc(100vh - 266px);
		width: calc(100vw - 10px);
		padding: 0 5px;
		overflow-y: auto;
		scrollbar-width: none;
	}

	.Selected::-webkit-scrollbar {
		display: none;
	}

	.smallSelected {
		height: 70px;
		width: 70px;
		min-width: 70px;
		margin-left: 15px;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		border-radius: 5px;
	}

	.smallSelectedBox::-webkit-scrollbar {
		display: none;
	}

	.BigSelected {
		height: 750px;
		width: 100%;
		margin-top: 5px;
		border-radius: 5px;
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		align-items: center;
	}

	.BigSelectedImg {
		height: 300px;
		width: 100%;
		background-size: 100% 100%;
		background-size: cover;
		background-repeat: no-repeat;
		object-fit: contain;
	}

	/* 透明灰夹层 */
	.smallTransparent {
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-size: 0.66em;
		border-radius: 5px;
	}

	.custom-button.el-icon-arrow-right {
		align-self: center;
	}

	.el-button.is-round {
		border-radius: 25px;
	}

	.text-ellipsis {
		margin-top: 10px;
		font-size: 11px;
		width: 100%;
		text-align: center;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
