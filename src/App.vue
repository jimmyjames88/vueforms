<template>
    <div id="app">
        <div class="row">
            <Textfield v-for="field in form" :field="field" />
        </div>
    </div>
</template>

<script>
import Textfield from './components/Textfield.vue'

export default {
    name: 'app',
    components: {
        Textfield
    },
    data() {
        return {
            form: [
                // 1
                {
                    name: 'FieldName',
                    id: 'field-id',
                    label: 'The label',
                    help: 'Help yourself nerd',
                    // required: true,

                    inline: true,
                    columns: 6,

                    attributes: {
                        class: 'form-control',
                        placeholder: 'textfield PH',
                        type: 'password'
                    },

                    events: {
                        focus(){},
                        blur(){
                            console.log('WEOW!')
                        },
                        click(){

                        },
                        change(){},
                        keypress(){},
                    },

                    validation: {
                        front: {
                            email: true,
                            max: 10
                        },
                        laravel: ''
                    }
                },

                // 2
                {
                    name: 'FieldName2',
                    id: 'field-id2',
                    label: 'The label',
                    help: 'Help yourself nerd',
                    inline: true,
                    columns: 6,

                    attributes: {
                        class: 'form-control',
                        placeholder: 'textfield PH'
                    },

                    events: {
                        focus(){},
                        blur(){
                            console.log('WEOW!')
                        },
                        click(){

                        },
                        change(){},
                        keypress(){},
                    },

                    validation: {
                        front: {
                            email: true,
                            max: 10
                        },
                        laravel: ''
                    }
                }
            ]
        }
    }
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 18px;
    font-family: Verdana, sans-serif;
}

.row {
    display: flex;
    flex-wrap: wrap;
}

@media screen and (min-width: 768px) {
    @for $n from 1 through 12 {
        .col-#{$n} {
            width: percentage($n / 12);
            padding: 0 15px;
        }
    }
}
</style>
