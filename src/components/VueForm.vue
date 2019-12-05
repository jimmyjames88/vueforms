<template>
    <form ref="form">

    </form>
</template>

<script>
import Vue from 'vue'
import Base from '../assets/Base.js'

export default {
    name: 'VueForm',

    props: [ 'formData' ],

    data() {
        return {
            form: {}
        }
    },

    mounted() {
        this.form = this.formData;
        console.log(this.form)
        for (let formField in this.form.fields) {
            let ComponentClass = Vue.extend(this.form.fields[formField].fieldType)

            if(this.form.fields[formField].field)
                var formData = { field: this.form.fields[formField].field }
            else if(this.form.fields[formField].group)
                var formData = { group: this.form.fields[formField].group }


            let instance = new ComponentClass({
                propsData: formData
            });
            instance.$mount();
            this.$refs.form.appendChild(instance.$el)
        }

    },
}
</script>

<style lang="scss">

</style>
