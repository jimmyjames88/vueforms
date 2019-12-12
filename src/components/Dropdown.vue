<template>
    <div class="dropdown" :class="[columnsClass, concealedClass, { 'inline': field.inline }]">
        <label v-if="field.label">{{ field.label }}</label>
        <div class="dropdown-wrapper">
            <select v-model="value" v-bind="field.attributes">
                <option v-if="field.attributes && field.attributes.placeholder">{{ field.attributes.placeholder }}</option>
                <option v-for="option in field.options" :key="option.value" value="option.value">{{ option.label }}</option>
            </select>
            <div class="select-menu" @click="toggleDropdown" @keydown="keySelection" tabindex="0" ref="selectOverlay">
                <span>{{ value }}</span>
                <i class="fa fa-times dont-toggle" v-show="value" @click="makeSelection(null)"></i>
                <i class="fa fa-caret-down"></i>
            </div>
            <div class="dropdown-menu" :class="{ 'open' : dropdownOpen }">
                <div v-for="(option, index) in field.options" :key="option.value" :data-value="option.value" @click="makeSelection(index)">
                    {{ option.label }}
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
            indexValue: null,
            dropdownOpen: false,
        }
    },

    computed: {
        value() {
            if(this.indexValue !== null)
                return this.field.options[this.indexValue].label;

            return null;
        }
    },

    methods: {
        toggleDropdown(e) {
            if(! e.target.classList.contains('dont-toggle'))
            this.dropdownOpen = !this.dropdownOpen;
        },
        makeSelection(index) {
            if(this.indexValue === index) {
                this.$refs['selectOverlay'].focus();
                this.dropdownOpen = false;
                return false;
            }

            if(this.indexValue !== null && this.field.options[this.indexValue].events && this.field.options[this.indexValue].events.deselected)
                this.baseOptionDeselected(this.field.options[this.indexValue].events.deselected);

            this.indexValue = index;
            this.dropdownOpen = false;
            this.$refs['selectOverlay'].focus();

            if(index !== null && this.field.options[index].events && this.field.options[index].events.selected)
                this.baseOptionSelected(this.field.options[index].events.selected);

            if(index !== null && this.field.options[index].reveals)
                document.getElementById(this.field.options[index].reveals).classList.remove('concealed')
        },
        keySelection(event) {
            let fieldLength = this.field.options.length;

            if(event.keyCode == 38) {
                if(this.indexValue === 0)
                    this.indexValue = null;
                else if(this.indexValue === null)
                    this.indexValue = fieldLength - 1;
                else
                    this.indexValue--;

            } else if (event.keyCode == 40) {
                if(this.indexValue === null)
                    this.indexValue = 0;
                else if(this.indexValue < fieldLength - 1)
                    this.indexValue++;
                else if (this.indexValue === fieldLength - 1)
                    this.indexValue = null
            }
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

            &:active {
                background-color: #89ce89;
                color: #FFF;
            }
        }
    }

}
</style>
