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
					v-for="(index, i) in loopCount"
					:key="i"
					class="smallSelected"
					@click="scrollToTop(index - 1, -20)">
					{{ index - 1 }}
				</div>
			</div>
			<div
				class="Selected"
				ref="selectedContainer"
				@scroll="handleBigSelectedScroll">
				<div
					v-for="(index, i) in loopCount"
					:key="i"
					class="BigSelected">
					{{ index - 1 }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'SelectedComponent',
		data() {
			return {
				loopCount: 8,
				selectedIndex: null,
				isScrolling: false,
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
				console.log('在滚动');
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
					console.log(
						`当前显示的最上方的大选择项是第 ${visibleTopIndex} 个`
					);
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
			},
		},
	};
</script>

<style scoped>
	.Selected {
		height: calc(100vh - 256px);
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
		height: 500px;
		background-image: url(../assets/lv.png);
		margin-top: 5px;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		border-radius: 5px;
	}
</style>
