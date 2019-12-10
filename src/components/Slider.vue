<template>
<div class="slider" :class="columnsClass">
    <label v-if="field.label">{{ field.label }}</label>
    <div class="slider-wrapper">
        <input
            tabindex="0"
            :name="field.name"
            :id="field.id || field.name"
            type="range"
            :min="field.range[0]"
            :max="field.range[1]"
            :step="field.step"
            v-model="value">
        <div class="slider-value">{{ value }}</div>
    </div>
    <div v-if="field.help" class="help">{{ field.help }}</div>
</div>
</template>

<script>
import Base from '../assets/Base.js'

export default {
    name: 'Slider',
    mixins: [ Base ],
    props: [ 'field' ],

    data() {
        return {
            value: 50
        }
    }
}
</script>

<style lang="scss">
.slider {

    .slider-wrapper {
        display: flex;
        align-items: center;
        color: #777;

        .slider-value {
            margin: 0 0 0 0.25em;
            font-size: 0.75rem;
            font-weight: bold;
            color: #BBB;
            min-width: 3em;
            text-align: center;
        }
    }

    input[type='range'] {
        -webkit-appearance: none;  /* Override default CSS styles */
        appearance: none;
        width: 100%; /* Full-width */
        height: 1.5em; /* Specified height */
        background: #999; /* Grey background */
        -webkit-transition: .2s; /* 0.2 seconds transition on hover */
        transition: opacity .2s;
        border-radius: 500px;
        padding: 0.25em;

        &::-webkit-slider-thumb {
            -webkit-appearance: none; /* Override default look */
            appearance: none;
            width: 2em; /* Set a specific slider handle width */
            height: 1em; /* Slider handle height */
            background: #FFF; /* Green background */
            cursor: pointer; /* Cursor on hover */
            border-radius: 500px;
        }

        &::-moz-range-thumb {
            width: 2em; /* Set a specific slider handle width */
            height: 1em; /* Slider handle height */
            background: #FFF; /* Green background */
            cursor: pointer; /* Cursor on hover */
            border-radius: 500px;
            border: none;
        }
    }
}
</style>
