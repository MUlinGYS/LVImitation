<template>
	<div>
		<Input></Input>

		<el-tabs
			style="max-width: 100vw"
			v-model="activeName"
			@tab-click="handleClick">
			<el-tab-pane label="甄选" name="first">
				<selected-component></selected-component>
			</el-tab-pane>
			<el-tab-pane label="女士" name="second">
				<ladies-component></ladies-component>
			</el-tab-pane>
			<el-tab-pane label="男士" name="third">
				<men-component></men-component>
			</el-tab-pane>
			<el-tab-pane label="生活" name="fourth">
				<life-component></life-component>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>
<script>
	import SelectedComponent from '../components/Home/SelectedComponent.vue';
	import LadiesComponent from '../components/Home/LadiesComponent.vue';
	import MenComponent from '../components/Home/MenComponent.vue';
	import LifeComponent from '../components/Home/LifeComponent.vue';
	import Input from '../components/input.vue';

	export default {
		components: {
			SelectedComponent,
			LadiesComponent,
			MenComponent,
			LifeComponent,
			Input,
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
