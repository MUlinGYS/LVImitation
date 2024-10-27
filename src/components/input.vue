<template>
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
</template>
<script>
	export default {
		data() {
			return {
				input: '',
			};
		},
		methods: {},
	};
</script>
<style scoped></style>
