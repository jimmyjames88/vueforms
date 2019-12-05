<template>
	<div class="radio-button-group" :class="columnsClass">
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
