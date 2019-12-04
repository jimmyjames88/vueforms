export default {
	data() {
		return {
            error: null,
		}
	},

	computed: {
		columnsClass() {
			if(this.field.columns)
				return 'col-' + this.field.columns;

			return 'col-12';
		}
	},

	methods: {
		callFieldEvent(name) {
			if (this.field.events && typeof(this.field.events[name]) === 'function')
				this.field.events[name]();
		},

		doBlur() {
			this.value = this.value.trim();
			this.doValidate();
			this.callFieldEvent('blur');
		},

		doClick() {
			// do some stuff
			this.callFieldEvent('click');
		}
	}
}
