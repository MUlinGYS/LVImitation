<template>
	<div
		id="app"
		:style="{
			height: `${this.pageHeight}px`,
			padding: '0',
			flexGrow: '1',
		}">
		<el-container style="display: flex; flex-direction: column">
			<el-main
				:style="{ height: `${this.pageHeight - 50}px` }"
				style="padding: 0; flex-grow: 1">
				<component :is="currentComponent"></component>
			</el-main>
			<el-footer
				style="height: 50px; width: 100%; background-color: white">
				<el-menu
					:default-active="activeIndex"
					class="el-menu-demo"
					mode="horizontal"
					@select="handleSelect">
					<el-menu-item index="1">
						<i class="el-icon-s-home">
							<p>首页</p>
						</i>
					</el-menu-item>
					<el-menu-item index="2">
						<i class="el-icon-film">
							<p>发现</p>
						</i>
					</el-menu-item>
					<el-menu-item index="3">
						<i class="el-icon-s-claim">
							<p>甄礼指南</p>
						</i>
					</el-menu-item>
					<el-menu-item
						index="4"
						style="display: none"></el-menu-item>
				</el-menu>
			</el-footer>
		</el-container>
	</div>
</template>

<script>
	import Home from '../src/views/Home.vue';
	import Discovery from '../src/views/Discovery.vue';
	import Guide from '../src/views/Guide.vue';
	import detail from './views/detail.vue';
	import { mapState } from 'vuex';

	// 第三方库加速加载字体并进行相应的控制
	import WebFont from 'webfontloader';

	export default {
		name: 'App',
		data() {
			return {
				activeIndex: '1',
				components: {
					1: Home,
					2: Discovery,
					3: Guide,
					4: detail,
				},
				pageHeight: 0,
			};
		},
		computed: {
			...mapState('ladiesAudition', ['guide']),
			currentComponent() {
				return this.components[this.activeIndex] || Home;
			},
		},
		components: {
			Home,
			Discovery,
			Guide,
			detail,
		},
		methods: {
			handleSelect(index) {
				this.activeIndex = index;
			},
		},
		mounted() {
			this.$nextTick(() => {
				// 加速字体加载
				WebFont.load({
					custom: {
						families: ['huipian'],
						urls: ['../src/assets/fonts/极影毁片文宋-v1.00.ttf'],
					},
					// 当字体加载完成时的回调函数
					active: function () {
						// console.log('字体加载完成');
					},
				});
				this.pageHeight = window.innerHeight;
				document.body.style.height = this.pageHeight + 'px';
				console.log(this.pageHeight);
			});
		},
		watch: {
			guide(newVal) {
				if (newVal) {
					// 如果当前不是甄礼指南和详细页面，则进行跳转
					if (newVal === 1 || newVal === 2) {
						this.activeIndex = '3';
					} else if (newVal === 4) {
						this.activeIndex = '4';
					}
				}
			},
		},
	};
</script>

<style>
	/* body {
		font-family: 'huipian';
	} */
	#app {
		margin: 0;
		height: 100vh;
	}

	.el-menu-demo {
		display: flex;
		justify-content: space-between;
	}

	.el-menu-demo i {
		display: flex !important;
		flex-direction: column;
		align-items: center;
		font-size: 25px !important;
	}

	p {
		margin: 0;
		font-size: 10px;
	}

	.el-menu-demo .is-active {
		border-bottom: none !important;
	}

	.el-menu-demo .el-menu-item {
		border-bottom: none !important;
	}

	li {
		height: 39px !important;
	}

	.el-footer {
		padding-top: 10px !important;
	}
</style>
