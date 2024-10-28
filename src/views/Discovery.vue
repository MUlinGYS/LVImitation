<template>
	<div>
		<Input></Input>
		<!-- <div class="found">
			<el-tabs
				style="max-width: 100vw"
				v-model="activeName"
				@tab-click="handleClick">
				<el-tab-pane label="女士甄选" name="first">
					<LadiesAudition
						:key="
							activeName === 'first' ? 'ladies' : 'ladies-unique'
						"
						:labels="0"></LadiesAudition>
				</el-tab-pane>
				<el-tab-pane label="男士甄选" name="second">
					<MensSelection
						:key="activeName === 'second' ? 'mens' : 'mens-unique'"
						:labels="1"></MensSelection>
				</el-tab-pane>
			</el-tabs>
		</div> -->
		<Selection></Selection>
	</div>
</template>
<script>
	import Input from '../components/input.vue';
	import Selection from '../components/Selection.vue';
	// import LadiesAudition from '../components/Discovery/MensSelection copy.vue';
	// import MensSelection from '../components/Discovery/MensSelection.vue';
	import Guide from './Guide.vue';
	export default {
		components: {
			Input,
			// LadiesAudition,
			// MensSelection,
			Selection,
			Guide,
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
