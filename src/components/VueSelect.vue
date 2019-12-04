<template>
    <div>
        <label>{{ data.label }}</label>
        <select>
            <option
                v-for="(value, key) in data.options"
                :key="key"
                :value="key">
                {{ value }}
            </option>
        </select>
        <div class="vue-select">
            <div class="field">
                <div class="selected">{{ selected }}</div>
                <button @click="toggleDropdown">o</button>
            </div>
            <ul class="dropdown" :class="{ 'open' : dropdownOpen }">
                <li
                    v-for="(value, key) in data.options"
                    :key="key"
                    :value="key">
                    {{ value }}
                </li>
            </ul>
        </div>
        <div class="help">{{ data.help }}</div>
    </div>
</template>

<script>
export default {
    name: 'VueSelect',
    props: [ 'data' ],
    methods: {
        checkState() {
            console.log('click');
        },

        toggleDropdown() {
            this.dropdownOpen = !this.dropdownOpen;
        }
    },
    data() {
        return {
            selected: ' ',
            dropdownOpen: false
        }
    }
}
</script>

<style scoped lang="scss">
.help {
    font-size: 0.75rem;
}

label {
    display: block;
}

.vue-select {
    border: 1px solid #CCC;
    border-radius: 6px;
    padding: 0.25rem;

    .field {
        display: flex;
    }

    .dropdown {
        transform: scaleY(0);
        opacity: 0;
        overflow: hidden;
        transition: all 0.4s;
        transform-origin: top;

        &.open {
            transform: scaleY(1);
            opacity: 1;
            overflow: auto;
        }
    }
}
</style>
