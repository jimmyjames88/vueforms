<template>
    <div class="dropdown" :class="[columnsClass, { 'inline': field.inline }]">
        <label v-if="field.label">{{ field.label }}</label>
        <div class="dropdown-wrapper">
            <select v-model="value" v-bind="field.attributes">
                <option v-if="field.attributes.placeholder">{{ field.attributes.placeholder }}</option>
                <option v-for="(v, key) in field.options" :key="key" value="key">{{ v }}</option>
            </select>
            <div class="select-menu" @click="toggleDropdown">
                <span>{{ field.options[value] }}</span>
                <i class="fa fa-times dont-toggle" v-show="value" @click="makeSelection(null)"></i>
                <i class="fa fa-caret-down"></i>
            </div>
            <div class="dropdown-menu" :class="{ 'open' : dropdownOpen }">
                <div v-for="(v, key) in field.options" :key="key" :data-value="key" @click="makeSelection(key)">
                    {{ v }}
                </div>
            </div>
        </div>
        <div v-if="field.help" class="help">{{ field.help }}</div>
    </div>
</template>

<script>
import Base from '../assets/Base.js'

export default {
    name: 'Dropdown',
    mixins: [ Base ],
    props: [ 'field' ],

    data() {
        return {
            value: null,
            dropdownOpen: false,
        }
    },

    methods: {
        toggleDropdown(e) {
            if(! e.target.classList.contains('dont-toggle'))
            this.dropdownOpen = !this.dropdownOpen;
        },
        makeSelection(index) {
            this.value = index;
            this.dropdownOpen = false;
        }
    }

}
</script>

<style lang="scss">
.dropdown {
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

    .dropdown-wrapper {
        position: relative;
    }

    .select-menu {
        position: relative;
        display: flex;
        align-items: center;
        border: 1px solid #DDD;
        border-radius: 4px;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
        padding: 0.5em 2.5em 0.5em 0.5em;
        font-size: 1rem;
        font-family: Verdana, sans-serif;
        color: #555;
        width: 100%;
        height: 2.5em;
        cursor: pointer;

        > i {
            position: absolute;
            right: 0;


            &.fa-caret-down {
                margin-right: 0.5rem;
                color: #777;
            }

            &.fa-times {
                margin-right: 1.5em;
                color: #999;
            }
        }
    }

    select {
        display: none;
    }

    .dropdown-menu {
        position: absolute;
        display: none;
        left: 0;
        right: 0;
        background-color: #FFF;
        border-left: 1px solid #DDD;
        border-right: 1px solid #DDD;
        border-bottom: 1px solid #DDD;

        &.open {
            display: block;
        }

        > div {
            padding: 0.5em;
            color: #777;
            border-bottom: 1px solid #DDD;
            cursor: pointer;

            &:last-of-type {
                border-bottom: none;
            }

            &:hover {
                background-color: #f3f3f3;
            }
        }
    }

}
</style>