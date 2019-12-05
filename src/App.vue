<template>
    <div id="app">
        <VueForm :formData="form" />
    </div>
</template>

<script>
import VueForm from './components/VueForm.vue'
import Textfield from './components/Textfield.vue'
import Checkbox from './components/Checkbox.vue'
import RadioButton from './components/RadioButton.vue'
import RadioButtonGroup from './components/RadioButtonGroup.vue'
import CheckboxGroup from './components/CheckboxGroup.vue'
import Slider from './components/Slider.vue'

export default {
    name: 'app',
    components: {
        VueForm,
        Textfield,
		Checkbox,
		RadioButton,
		RadioButtonGroup,
		CheckboxGroup,
        Slider
    },

    data() {
        return {
            form:  {
                title: '',
                attributes: {

                },
                fields: [
                    {
                        fieldType: Textfield,
                        field: {
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
                                blur(){
                                    console.log('WEOW!')
                                }
                            },

                            validation: {
                                front: {
                                    email: true,
                                    max: 10
                                },
                                laravel: ''
                            }
                        }
                    },

                    {
                        fieldType: Textfield,
                        field: {
                            name: 'FieldName2',
                            id: 'field-id2',
                            label: 'The label',
                            help: 'Help yourself biotch',
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
                        }
                    },

                    {
                        fieldType: CheckboxGroup,
                        group: {
                            inline: false,
                            help: 'yolo',
                            columns: 6,
                            fields: [
                                {
                                    label: 'Titties',
                                    name: 'Checkbox1',
                                    id: 'cbg1',
                                    inline: true,
                                    help: 'swag',
                                },
                                {
                                    label: 'Beer',
                                    name: 'Checkbox2',
                                    id: 'cbg2',
                                    inline: true,
                                    help: 'sweeegg',
                                }
                            ]
                        }
                    }
                ]
            }
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

label {
	display: block;
	font-size: 0.75rem;
	font-weight: bold;
	color: #777;
}

.help {
	font-size: 0.625rem;
	font-style: italic;
	margin-top: 0.25rem;
	color: #999;

	&:before {
		content: '\f05a';
		font-family: 'FontAwesome';
		font-style: normal;
		margin-right: 0.25rem;
	}
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
