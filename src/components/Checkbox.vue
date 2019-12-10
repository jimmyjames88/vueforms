<template>
	<div class="checkbox" :class="[columnsClass, { 'inline': field.inline }]">
		<div class="checkbox-wrapper">
			<input
				type="checkbox"
				:name="field.name || field.id"
				:id="field.id"
				v-bind="field.attributes"
				v-model="value"
				@change="doChange"/>
			<label
				tabindex="0"
				class="checkbox-toggle-wrapper"
				:for="field.id"
				@keypress="keyToggle">
				<div class="switch"></div>
			</label>
			<label v-if="field.label" :for="field.id">{{ field.label }}</label>
			<div class="error" v-if="error && value">{{ error }}</div>
		</div>
        <div class="help" v-if="!error || (!value && field.help)">{{ field.help }}</div>
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
			value: false
		}
	},

	methods: {

		doChange(event) {
			this.baseChange(vente);
		},
		keyToggle(event) {
			if (event.keyCode === 32)
				this.value = !this.value;
		}
	}
}
</script>

<style lang="scss">
.checkbox {

	&.inline,
	&.inline label:not(.checkbox-toggle-wrapper) {
		display: flex;
		align-items: center;

		.help {
			margin-top: 0;
			margin-left: 1em;
		}
	}

	.checkbox-wrapper {
		display: flex;

		> input[type='checkbox'] {
			position: absolute;
			width: 0;
			height: 0;
			visibility: hidden;
		}
	}


	label {
		cursor: pointer;
	}

	.checkbox-toggle-wrapper {
		background-color: #999;
		width: 3em;
		border-radius: 500px;
		display: inline-flex;
		margin-right: 0.5rem;
		transition: all 0.2s ease;
		height: 1.5em;
		position: relative;

		.switch {
			border-radius: 50%;
			background-color: #FFF;
			width: 1em;
			height: 1em;
			transition: all 0.2s ease;
			margin: 0.25em;
			position: absolute;
			left: 0;
		}
	}

	.checkbox-wrapper > input[type='checkbox']:checked {
		+ .checkbox-toggle-wrapper {
			background-color: #89ce89;

			.switch {
				left: 1.5em
			}
		}
	}

}
</style>
