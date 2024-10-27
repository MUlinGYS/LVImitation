<template>
	<div
		style="
			display: flex;
			align-items: center;
			justify-content: space-around;
			padding: 20px;
		">
		<!-- LOGO -->
		<div
			:style="{
				backgroundImage: `url(${Img})`,
			}"
			style="
				max-width: 100%;
				max-height: 100%;
				width: 11%;
				height: 28px;
				background-size: contain;
				background-repeat: no-repeat;
			"></div>
		<div style="width: 75vw">
			<el-input
				size="mini"
				placeholder="请输入内容"
				prefix-icon="el-icon-search"
				v-model="input"></el-input>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		data() {
			return {
				input: '',
				Img: null,
			};
		},
		created() {
			this.sendPostRequest();
		},
		methods: {
			async sendPostRequest() {
				try {
					const response = await axios.post('/index/home', {
						data: {},
					});
					const Img = response.data.logo;
					this.Img = Img;
					// console.log(Img);
					return this.Img;
				} catch (error) {
					// console.error(error);
					return null;
				}
			},
		},
	};
</script>

<style scoped></style>
