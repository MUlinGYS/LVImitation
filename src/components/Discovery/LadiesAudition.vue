<template>
	<div class="ladies-audition">
		<div class="ladies-audition-img">
			女士甄选<svg
				t="1729926575767"
				class="icon"
				viewBox="0 0 1024 1024"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				p-id="9900"
				width="32"
				height="32">
				<path
					d="M523.477333 691.925333l180.992-180.992-180.992-181.077333a42.666667 42.666667 0 1 1 60.330667-60.330667l211.2 211.2c6.4 6.4 10.325333 14.336 11.818667 22.613334l0.597333 5.034666v5.034667a42.496 42.496 0 0 1-12.416 27.648l-211.2 211.2a42.666667 42.666667 0 0 1-60.330667-60.330667z m-298.666666 0l180.992-180.992L224.810667 329.813333a42.666667 42.666667 0 1 1 60.330666-60.330666l211.2 211.2c6.4 6.4 10.325333 14.336 11.818667 22.613333l0.597333 5.034667v5.034666a42.496 42.496 0 0 1-12.416 27.648l-211.2 211.2a42.666667 42.666667 0 0 1-60.330666-60.330666z"
					fill="#ffffff"
					p-id="9901"></path>
			</svg>
		</div>
		<div>
			<el-tabs :tab-position="tabPosition" style="height: 200px">
				<el-tab-pane label="新品系列">
					<div
						ref="parentDiv"
						class="parent-div"
						style="
							height: 100%;
							width: 100%;
							display: flex;
							flex-wrap: wrap;
							justify-content: space-evenly;
							align-content: space-between;
						">
						<div
							v-for="(box, index) in 10"
							:key="index"
							:style="{
								width: boxWidth + 'px',
								height: boxWidth + 30 + 'px',
								marginTop: '5px',
								marginBottom: '5px',
							}">
							<div
								class="commodityImg"
								:style="{
									width: boxWidth + 'px',
									height: boxWidth + 'px',
									backgroundColor: 'green',
								}"></div>
							<p style="margin: 5px; text-align: center">
								SLENDER 钱夹
							</p>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="甄礼之选">甄礼之选</el-tab-pane>
				<el-tab-pane label="时尚包袋">时尚包袋</el-tab-pane>
				<el-tab-pane label="小型皮具">小型皮具</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'LadiesAudition',
		data() {
			return {
				tabPosition: 'left',
				parentWidth: 0,
			};
		},
		computed: {
			boxWidth() {
				return (this.parentWidth - 10) / 2 - 20; // 减去左右间距
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
				this.parentWidth = this.$refs.parentDiv.clientWidth;
			},
		},
	};
</script>
<style scoped>
	.ladies-audition {
		height: calc(100vh - 172px);
		padding: 0 10px;
	}
	.ladies-audition-img {
		background-image: url('../../assets/lv.png');
		height: 180px;
		width: 100%;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		font-size: 2rem;
	}
	.commodityImg {
		background-image: url('../../assets/lv.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	.ladies-audition >>> .el-tabs__item {
		height: 40px !important;
		width: 80px !important;
		display: flex !important;
		justify-content: center;
		align-items: center;
	}

	.ladies-audition >>> .el-tabs__nav {
		border-left: 1px solid rgb(228 228 228);
		border-right: 1px solid rgb(228 228 228);
		overflow-y: auto;
	}

	.ladies-audition >>> .el-tabs--left .el-tabs__active-bar.is-left,
	.el-tabs--left .el-tabs__active-bar.is-right,
	.el-tabs--right .el-tabs__active-bar.is-left,
	.el-tabs--right .el-tabs__active-bar.is-right {
		height: 20px !important;
		margin-top: 5px;
		display: none;
	}

	.ladies-audition >>> .el-tabs--left {
		height: calc(100vh - 347px) !important;
		border-right: 1px solid rgb(228 228 228);
	}

	.ladies-audition >>> .el-tabs--left .el-tabs__header.is-left {
		margin-right: 5px !important;
	}

	.ladies-audition >>> .el-tab-pane {
		width: calc(100vw - 112px);
		height: calc(100vh - 350px);
		/* background-color: black; */
		overflow: auto;
	}
</style>
