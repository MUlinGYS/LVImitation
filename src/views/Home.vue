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
				:label="item.title"
				:name="'tab' + index"
				:tab-id="item.id">
				<!-- 这里添加了 tab-id 属性 -->
				<!-- 传入对应标签名称 -->
				<Homeomponent :tab-data="item"></Homeomponent>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	import axios from 'axios';
	import Homeomponent from '../components/Homeponent.vue';
	import Input from '../components/input.vue';

	export default {
		components: {
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
					const dataWithId = response.data.data.map((item) => ({
						title: item.title,
						id: item.id,
					}));
					this.titleData = dataWithId;
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
		padding: 0 20px !important;
	}

	.el-tabs__header {
		position: sticky !important;
		/* 新属性sticky */
		top: 0;
		background-color: white;
		z-index: 10;
		/* 距离页面顶部距离 */
	}
</style>
