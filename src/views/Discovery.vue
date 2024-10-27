<template>
	<div>
		<Input></Input>
		<div class="found">
			<el-tabs
				style="max-width: 100vw"
				v-model="activeName"
				@tab-click="handleClick">
				<el-tab-pane label="女士甄选" name="first">
					<LadiesAudition
						:key="
							activeName === 'first' ? 'ladies' : 'ladies-unique'
						"></LadiesAudition>
				</el-tab-pane>
				<el-tab-pane label="男士甄选" name="second">
					<MensSelection
						:key="
							activeName === 'second' ? 'mens' : 'mens-unique'
						"></MensSelection>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>
<script>
	import Input from '../components/input.vue';
	import LadiesAudition from '../components/Discovery/LadiesAudition.vue';
	import MensSelection from '../components/Discovery/MensSelection.vue';
	export default {
		components: {
			Input,
			LadiesAudition,
			MensSelection,
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
<style></style>
