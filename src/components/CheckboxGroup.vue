<template>
	<div class="checkbox-group" :class="[columnsClass, { 'inline' : group.inline }]">
		<label v-if="group.label">{{ group.label }}</label>
		<Checkbox v-for="(field, index) in group.fields" :field="field" />
	</div>
</template>

<script>
import Base from '../assets/Base.js'
import Checkbox from './Checkbox.vue'


export default {
	name: 'CheckboxGroup',

	mixins: [ Base ],

	components: { Checkbox },

	props: [ 'group' ],

	data() {
		return {

		}
	},


}
</script>

<style lang="scss">
	.checkbox-group {

		.checkbox {
			margin-bottom: 0.5em;
		}

		&.inline {
			display: flex;

			.checkbox {
				margin: 0 1em;
			}
		}
	}
</style>
