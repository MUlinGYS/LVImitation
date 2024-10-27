<template>
	<div id="app">
		<el-container>
			<el-main style="height: calc(100vh - 50px); padding: 0">
				<component :is="currentComponent"></component>
			</el-main>
			<el-footer style="height: 39px">
				<el-menu
					:default-active="activeIndex"
					class="el-menu-demo"
					mode="horizontal"
					@select="handleSelect">
					<el-menu-item index="1">
						<i class="el-icon-s-home"><p>首页</p></i>
					</el-menu-item>
					<el-menu-item index="2">
						<i class="el-icon-film"><p>发现</p></i>
					</el-menu-item>
					<el-menu-item index="3">
						<i class="el-icon-s-claim"><p>甄礼指南</p></i>
					</el-menu-item>
					<!-- <el-menu-item index="4">
						<i class="el-icon-suitcase-1"><p>购物袋</p></i>
					</el-menu-item>
					<el-menu-item index="5">
						<i class="el-icon-user"><p>我的</p></i>
					</el-menu-item> -->
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
	import test from './views/test.vue';

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
					5: test,
				},
			};
		},
		computed: {
			currentComponent() {
				return this.components[this.activeIndex];
			},
		},
		created() {},
		components: {
			Home,
			Discovery,
			Guide,
			detail,
			test,
		},
		methods: {
			handleSelect(index) {
				this.activeIndex = index;
			},
		},
		mounted() {
			// 加速字体加载
			WebFont.load({
				custom: {
					families: ['huipian'],
					urls: ['../src/assets/fonts/极影毁片文宋-v1.00.ttf'],
				},
				// 当字体加载完成时的回调函数
				active: function () {
					console.log('字体加载完成');
				},
			});
		},
	};
</script>

<style>
	body {
		font-family: 'huipian';
	}
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
