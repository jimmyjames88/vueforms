export default {
	data() {
		return {
            error: null,
		}
	},

	computed: {
		columnsClass() {
			if(this.field && this.field.columns)
				return 'col-' + this.field.columns;
			else if (this.group && this.group.columns)
				return 'col-' + this.group.columns;

			return null;
			//return 'col-12';
		}
	},

	methods: {
		callFieldEvent(name) {
			if (this.field.events && typeof(this.field.events[name]) === 'function')
				this.field.events[name]();
		},

		baseBlur() {
			this.value = this.value.trim();
			this.baseValidate();
			this.callFieldEvent('blur');
		},

		baseClick() {
			// do some stuff
			this.callFieldEvent('click');
		},

		baseChecked() {
			this.callFieldEvent('checked');
		},

		baseUnchecked() {
			this.callFieldEvent('unchecked');
		},

		baseChange() {
			if(this.value)
				this.baseChecked()
			else
				this.baseUnchecked()

			this.callFieldEvent('change');
		}
	}
}
