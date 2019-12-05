<template>
	<div class="radio-button" :class="columnsClass">
		<input
			type="radio"
			:name="field.name || field.id"
			:id="field.id"
			v-bind="field.attributes"
			v-model="value"
			@change="doChange"/>
			<label class="radio-button-wrapper" :for="field.id">
				<div class="switch"></div>
			</label>
			<label v-if="field.label" :for="field.id">{{ field.label }}</label>
	</div>
</template>

<script>
import Base from '../assets/Base.js'

export default {
	name: 'RadioButton',

	mixins: [ Base ],

	props: [ 'field' ],

	data() {
		return {
			value: 0
		}
	},

	methods: {
		doChange(e) {
			return this.baseChange();
		}
	}
}
</script>

<style lang="scss">
.radio-button {
	display: flex;
	align-items: center;

	> input[type='radio'] {
		position: absolute;
		width: 0;
		height: 0;
	}

	label {
		cursor: pointer;
	}

	.radio-button-wrapper {
		transition: all 0.1s ease;
		background-color: #CCC;
		box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
		border-radius: 500px;
		display: inline-flex;
		margin-right: 0.5rem;
		cursor: pointer;

		&:active {
			position: relative;
			top: 1px;
			left: 1px;
		}


		.switch {
			border-radius: 50%;
			background-color: #FFF;
			width: 0.5em;
			height: 0.5em;
			margin: 0.325rem;
		}
	}

	> input[type='radio']:checked {
		+ .radio-button-wrapper {
			background-color: #89ce89;
			justify-content: flex-end;
		}
	}

}
</style>
