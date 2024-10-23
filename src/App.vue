<template>
	<div id="app">
		<el-container>
			<el-main style="height: calc(100vh - 40px); padding: 0">
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
				</el-menu>
			</el-footer>
		</el-container>
	</div>
</template>

<script>
	import Home from '../src/views/Home.vue';
	import Discovery from '../src/views/Discovery.vue';
	import Guide from '../src/views/Guide.vue';

	export default {
		data() {
			return {
				activeIndex: '1',
				components: {
					1: Home,
					2: Discovery,
					3: Guide,
				},
			};
		},
		computed: {
			currentComponent() {
				return this.components[this.activeIndex];
			},
		},
		methods: {
			handleSelect(index) {
				this.activeIndex = index;
			},
		},
		components: {
			Home,
			Discovery,
			Guide,
		},
	};
</script>

<style scoped>
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
</style>
