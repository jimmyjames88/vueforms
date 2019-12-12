<template>
	<div class="radio-button-group" :class="columnsClass">
		<label v-if="group.label">{{ group.label }}</label>
		<RadioButton v-for="(field, index) in group.fields" :field="field" />
	</div>
</template>

<script>
import Base from '../assets/Base.js'
import RadioButton from './RadioButton.vue'


export default {
	name: 'RadioButtonGroup',

	mixins: [ Base ],

	components: { RadioButton },

	props: [ 'group' ],

	data() {
		return {

		}
	},

}
</script>

<style lang="scss">

</style>
