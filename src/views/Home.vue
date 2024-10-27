<template>
	<div>
		<Input></Input>
		<el-tabs
			style="max-width: 100vw"
			v-model="activeName"
			@tab-click="handleClick">
			<!-- 循环动态生成 el-tab-pane -->
			<el-tab-pane
				v-for="(item, index) in titleData"
				:key="index"
				:label="item"
				:name="'tab' + index">
				<!-- 传入对应标签名称 -->
				<Homeomponent :tab-name="item"></Homeomponent>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	import axios from 'axios';
	// import SelectedComponent from '../components/Home/SelectedComponent.vue';
	// import LadiesComponent from '../components/Home/LadiesComponent.vue';
	// import MenComponent from '../components/Home/MenComponent.vue';
	// import LifeComponent from '../components/Home/LifeComponent.vue';
	import Homeomponent from '../components/Home/Homeponent.vue';
	import Input from '../components/input.vue';

	export default {
		components: {
			// SelectedComponent,
			// LadiesComponent,
			// MenComponent,
			// LifeComponent,
			Homeomponent,
			Input,
		},
		data() {
			return {
				input: '',
				activeName: 'tab0',
				titleData: null,
			};
		},
		created() {
			this.sendPostRequest();
		},
		methods: {
			handleClick(tab) {
				// console.log(this.titleData);
			},
			async sendPostRequest() {
				try {
					const response = await axios.post('/index/home', {
						data: {},
					});
					const titles = response.data.data.map((item) => item.title);
					this.titleData = titles;
					return this.titleData;
				} catch (error) {
					// console.error(error);
					return null;
				}
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
