<template>
	<div class="checkbox" :class="columnsClass">
		<input
			type="checkbox"
			:name="field.name || field.id"
			:id="field.id"
			v-bind="field.attributes"
			v-model="value"/>
			<label class="checkbox-wrapper" :for="field.id" @click="doClick">
				<div class="switch"></div>
			</label>
			<label v-if="field.label" :for="field.id">{{ field.label }}</label>

	</div>
</template>

<script>
import Base from '../assets/Base.js'

export default {
	name: 'Checkbox',

	mixins: [ Base ],

	props: [ 'field' ],

	data() {
		return {
			value: 0
		}
	}
}
</script>

<style lang="scss">
.checkbox {
	display: flex;
	align-items: center;

	> input[type='checkbox'] {
		position: absolute;
		opacity: 0;
	}

	.checkbox-wrapper {
		padding: 0.25rem;
		background-color: #999;
		width: 3em;
		height: 1.5em;
		border-radius: 500px;
		display: inline-flex;
		cursor: pointer;
		margin-right: 0.5rem;

		.switch {
			border-radius: 50%;
			background-color: #FFF;
			width: 1em;
			height: 1em;
		}
	}

	> input[type='checkbox']:checked {
		+ .checkbox-wrapper {
			background-color: #89ce89;
			justify-content: flex-end;
		}
	}

}
</style>
