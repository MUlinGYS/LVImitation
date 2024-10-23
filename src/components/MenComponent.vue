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
					@click="scrollToTop(i, -20)">
					<div
						class="smallTransparent"
						:style="{
							display: selectedIndex === i ? 'none' : 'flex',
						}">
						{{ item }}
					</div>
				</div>
			</div>
			<div
				class="Selected"
				ref="selectedContainer"
				@scroll="handleBigSelectedScroll">
				<div
					v-for="(item, i) in items"
					:key="i"
					class="BigSelected">
					<div style="font-size: 2em; height: 2em">{{ item }}</div>
					<div class="BigSelectedImg"></div>
					<div
						style="
							height: 330px;
							width: 100%;
							margin-top: 10px;
							display: flex;
							flex-direction: column;
							justify-content: space-around;
						">
						<div
							style="
								height: 100px;
								width: 100%;
								display: flex;
								justify-content: space-evenly;
								align-items: center;
							">
							<div
								v-for="i in 3"
								style="
									display: flex;
									flex-direction: column;
									align-items: center;
								">
								<img
									src="../assets/lv.png"
									style="height: 100px" />
								<P style="font-size: 11px">LV FLORAGRAM 手链</P>
								<p
									style="
										font-size: 10px;
										color: #9d9d9d;
										margin: 0;
									">
									$200
								</p>
							</div>
						</div>
						<div
							style="
								height: 100px;
								width: 100%;
								display: flex;
								justify-content: space-evenly;
								align-items: center;
							">
							<div
								v-for="i in 3"
								style="
									display: flex;
									flex-direction: column;
									align-items: center;
								">
								<img
									src="../assets/lv.png"
									style="height: 100px" />
								<P style="font-size: 11px">LV FLORAGRAM 手链</P>
								<p
									style="
										font-size: 10px;
										color: #9d9d9d;
										margin: 0;
									">
									$200
								</p>
							</div>
						</div>
					</div>
					<el-button
						round
						style="margin-top: 15px"
						>查看全部</el-button
					>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'MenComponent',
		data() {
			return {
				selectedIndex: 0,
				isScrolling: false,
				items: [
					'为她甄选',
					'为他甄选',
					'Vivienne Holidays 系列',
					'2024 女士SKI系列',
					'2024 男士SKI系列',
					'时尚点缀',
					'精选香氛',
					'旅行灵感',
					'智能系列',
				],
			};
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
		background-image: url(../assets/lv.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		border-radius: 5px;
	}

	.smallSelectedBox::-webkit-scrollbar {
		display: none;
	}

	.BigSelected {
		height: 770px;
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
		background-image: url(../assets/lv.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
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
		font-size: 0.8em;
	}
</style>
