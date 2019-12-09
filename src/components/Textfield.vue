<template>
    <div class="textfield"
        :class="[{ 'inline': field.inline }, columnsClass]">
        <label for="field.id">{{ field.label }}</label>
        <div class="field-wrapper">
            <div class="input-wrapper">
            <input
                :type="field.password ? 'password' : 'text'"
                :name="field.name || field.id"
                :id="field.id"
                v-bind="field.attributes"
                @keyup="baseValidate"
                @blur="baseBlur"
                v-model="value"/>
                <i class="fa fa-check" v-show="!error && value"></i>
            </div>
            <div class="error" v-if="error && value">{{ error }}</div>
            <div class="help" v-if="!error || (!value && field.help)">{{ field.help }}</div>
        </div>
    </div>
</template>

<script>
import Base from '../assets/Base.js';
import Validation from '../assets/ValidationMixin.js'

export default {
        name: 'Textfield',

        mixins: [ Base, Validation ],

        props: [ 'field', 'rules' ],

        data() {
            return {
                value: ''
            }
        },

        created() {

        },

        methods: {

        }



}
</script>

<style lang="scss">

.textfield {
    margin-bottom: 1.25rem;
    width: 100%;
    display: flex;
    flex-direction: column;

    &.inline {
        @media screen and (min-width: 768px) {
            flex-direction: row;
            align-items: center;

            label {
                margin-right: 0.5rem;
            }

            .help,
            .error {
                position: absolute;
            }
        }
    }

    .field-wrapper {
        flex-grow: 1;
    }

    .input-wrapper {
        position: relative;
        display: flex;
        align-items: center;

        > i {
            position: absolute;
            right: 0;
            margin-right: 0.5rem;
            color: #89ce89;
        }
    }

    input[type='text'],
    input[type='password'] {
        border: 1px solid #DDD;
        border-radius: 4px;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
        padding: 0.5rem;
        font-size: 1rem;
        font-family: Verdana, sans-serif;
        color: #555;
        width: 100%;
    }

    .error {
        font-size: 0.625rem;
        font-style: italic;
        margin-top: 0.25rem;
        color: #fe202b;

        &:before {
            content: '\f071';
            font-family: 'FontAwesome';
            font-style: normal;
            margin-right: 0.25rem;
        }
    }
}
</style>
