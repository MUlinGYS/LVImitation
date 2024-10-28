<template>
	<div class="ladies-audition">
		<div class="ladies-audition-img">
			{{ activeTitle }}
			<svg
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
			<el-tabs
				:tab-position="tabPosition"
				style="height: 200px"
				@tab-click="onTabClick">
				<el-tab-pane
					v-for="(list, listIndex) in lists"
					:key="list.id"
					:label="list.title">
					<div
						ref="parentDiv"
						class="parent-div"
						style="
							height: 100%;
							width: 100%;
							display: flex;
							flex-wrap: wrap;
							align-content: flex-start;
							justify-content: center;
						">
						<div
							v-for="(innerItem, innerIndex) in list.child || []"
							:key="innerIndex"
							@click="SelectionID(innerItem, listIndex)"
							style="width: 30vw; height: 36%; padding: 5px 10px">
							<div
								class="commodityImg"
								:style="{
									backgroundImage: `url(${innerItem.icon})`,
								}"></div>
							<p style="margin: 5px; text-align: center">
								{{ innerItem.title }}
							</p>
						</div>
					</div>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import { mapActions } from 'vuex';

	export default {
		props: ['labels'],
		name: 'LadiesAuditionCopy',
		data() {
			return {
				tabPosition: 'left',
				lists: [],
				activeTitle: '',
			};
		},
		computed: {},
		created() {
			// 在组件创建时将 guide 设置为 false
			this.$store.commit('ladiesAudition/setGuideFalse');
			this.sendPostRequest();
		},
		methods: {
			updateParentWidth() {
				if (this.$refs.parentDiv) {
					this.parentWidth = this.$refs.parentDiv.clientWidth;
				}
			},
			async sendPostRequest() {
				try {
					const response = await axios.post('/index/category', {
						data: {
							labels: this.labels,
						},
					});
					const data = response.data.data;
					this.lists = data;
					// 设置默认标题
					if (this.lists.length > 0) {
						this.activeTitle = this.lists[0].title;
					}
				} catch (error) {
					console.error(error);
				}
			},
			onTabClick(tab) {
				this.activeTitle = tab.label;
			},
			...mapActions('ladiesAudition', ['setItemAndListId']),
			SelectionID(innerItem, listIndex, Guide = true) {
				const itemId = innerItem.id;
				const listId = this.lists[listIndex].id;
				this.setItemAndListId({ itemId, listId, guide: Guide });
			},
		},
	};
</script>
<style scoped>
	.ladies-audition {
		height: calc(100vh - 118px);
		padding: 0 10px;
	}
	.ladies-audition-img {
		background-image: url('https://test.eonet.cc/Uploads/images/banner.png');
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
		width: 100%;
		height: 75%;
		background-size: contain; /* 保持图片的原始比例并使其完全适合容器 */
		background-position: center; /* 将背景图像居中 */
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

	.ladies-audition >>> .el-tabs--left.el-tabs__active-bar.is-left,
	.el-tabs--left.el-tabs__active-bar.is-right,
	.el-tabs--right.el-tabs__active-bar.is-left,
	.el-tabs--right.el-tabs__active-bar.is-right {
		height: 20px !important;
		margin-top: 5px;
		display: none;
	}

	.ladies-audition >>> .el-tabs--left {
		height: calc(100vh - 298px) !important;
		border-right: 1px solid rgb(228 228 228);
	}

	.ladies-audition >>> .el-tabs--left.el-tabs__header.is-left {
		margin-right: 5px !important;
	}

	.ladies-audition >>> .el-tab-pane {
		width: calc(100vw - 112px);
		height: calc(100vh - 300px);
		/* background-color: black; */
		overflow: auto;
	}

	/* 侧边黑条 */
	.ladies-audition >>> .el-tabs__active-bar.is-left {
		display: none !important;
	}
</style>
