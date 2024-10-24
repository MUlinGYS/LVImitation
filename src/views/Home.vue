<template>
	<div>
		<div
			style="
				display: flex;
				align-items: center;
				justify-content: space-around;
				padding: 20px;
			">
			<!-- LOGO -->
			<!-- <div>
				<i
					class="el-icon-s-help"
					style="font-size: 30px; margin-top: 2px"></i>
			</div> -->
			<div style="width: 75vw">
				<el-input
					size="mini"
					placeholder="请输入内容"
					prefix-icon="el-icon-search"
					v-model="input">
				</el-input>
			</div>
		</div>

		<el-tabs
			v-model="activeName"
			@tab-click="handleClick">
			<el-tab-pane
				label="甄选"
				name="first">
				<selected-component></selected-component>
			</el-tab-pane>
			<el-tab-pane
				label="女士"
				name="second">
				<ladies-component></ladies-component>
			</el-tab-pane>
			<el-tab-pane
				label="男士"
				name="third">
				<men-component></men-component>
			</el-tab-pane>
			<el-tab-pane
				label="生活"
				name="fourth">
				<life-component></life-component>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>
<script>
	import SelectedComponent from '../components/SelectedComponent.vue';
	import LadiesComponent from '../components/LadiesComponent.vue';
	import MenComponent from '../components/MenComponent.vue';
	import LifeComponent from '../components/LifeComponent.vue';

	export default {
		components: {
			SelectedComponent,
			LadiesComponent,
			MenComponent,
			LifeComponent,
		},
		data() {
			return {
				input: '',
				activeName: 'first',
			};
		},
		methods: {
			handleClick(tab) {
				console.log(tab);
			},
		},
	};
</script>
<style>
	.el-input__icon {
		font-size: 15px !important;
	}

	.el-input__inner {
		border-radius: 20px !important;
	}

	.el-tabs__nav-scroll {
		display: flex;
		justify-content: space-around;
	}

	/* 设置被选中标签的文字颜色和粗细 */
	.el-tabs__item.is-active {
		font-size: 15px !important;
		color: black !important;
	}

	.el-tabs__item {
		font-size: 15px !important;
	}

	.el-tabs__active-bar {
		background-color: black !important;
	}

	.el-tabs__nav-wrap::after {
		display: none !important;
	}

	.el-tabs__item {
		padding: 0 30px !important;
	}
</style>
