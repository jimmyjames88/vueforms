export default {
    data() {
        return {
            error: null,
            dataKey: null
        }
    },

    mounted() {

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

        doValidate() {
            if(! this.field.events)
                return false

            let validate = this.validate(this.value);
            if(validate === true){
                this.error = null;
            } else {
                this.error = validate
            }

        },

        validate() {
            for(let key in this.field.validation.front)  {
                this.dataKey = key;

                let runRule = this[key](this.field.validation.front[key]);
                if(typeof(runRule) === 'object') {
                    return runRule.message;
                }
            }
            return true;

        },

        min(x) {
            if(this.value.length < x) {
                return {
                    message: x + ' char min'
                }
            }
        },

        max(x) {
            if(this.value.length > x) {
                return {
                    message: x + ' char max'
                }
            }
        },

        email(x) {
            if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value)) {
                return {
                    message: 'Bad email'
                }
            }
        },

        numeric(x) {
            if(isNaN(this.value)) {
                return {
                    message: 'Non-numeric value'
                }
            }
        },

        between(x) {
            console.log(x);
        }
    }
}
