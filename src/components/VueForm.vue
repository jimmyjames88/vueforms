<template>
    <form class="vue-form" v-bind="form.attributes">
        <h2 class="form-title" v-if="form.title">{{ form.title }}</h2>
        <div class="row" ref="formFields"></div>
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
            this.$refs.formFields.appendChild(instance.$el)
        }

    },
}
</script>

<style lang="scss">
.vue-form {
    max-width: 1140px;
    margin: 1em auto;
    background-color: #FFF;
    border: 1px solid #DDD;
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.1);
    padding: 1em;

    .form-title {
        margin-bottom: 1em;
    }
}

</style>
