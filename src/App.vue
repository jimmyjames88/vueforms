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
import Dropdown from './components/Dropdown.vue'

export default {
    name: 'app',
    components: {
        VueForm,
        Dropdown,
        Textfield,
		Checkbox,
        CheckboxGroup,
		RadioButton,
		RadioButtonGroup,
        Slider
    },

    methods: {
        revealField(id) {
            document.getElementById(id).classList.remove('concealed');
        }
    },

    data() {
        return {
            form:  {
                title: 'Contact form',
                attributes: {
                    method: '',
                    action: '',
                    enctype: ''
                },
                fields: [
                    // full name
                    {
                        fieldType: Textfield,
                        field: {
                            columns: 12,
                            label: 'Full name',
                            help: 'ex. John Smith'
                        }
                    },

                    // email
                    {
                        fieldType: Textfield,
                        field: {
                            columns: 12,
                            label: 'Email address',
                            help: 'ex. john@somewhere.com',
                            validation: {
                                front: {
                                    email: true
                                }
                            }
                        },

                    },

                    // phone
                    {
                        fieldType: Textfield,
                        field: {
                            columns: 12,
                            label: 'Phone number',
                            help: 'ex. (403) 555-5555',
                            validation: {
                                front: {
                                    max: 20
                                }
                            }
                        }
                    },

                    // prefered contact method
                    {
                        fieldType: RadioButtonGroup,
                        group: {
                            label: 'Preferred contact method',
                            columns: 6,
                            fields: [
                                {
                                    columns: 6,
                                    id: 'contact_method1',
                                    name: 'contact_method',
                                    label: 'Email',
                                    help: 'You suck!',
                                    attributes: {
                                        value: 'email'
                                    }
                                },
                                {
                                    columns: 6,
                                    id: 'contact_method2',
                                    name: 'contact_method',
                                    label: 'Phone',
                                    help: 'Make a choice dickhead',
                                    attributes: {
                                        value: 'phone'
                                    }

                                }
                            ]

                        }
                    },

                    // gender
                    {
                        fieldType: CheckboxGroup,
                        group: {
                            label: 'Gender',
                            columns: 6,
                            fields: [
                                {
                                    label: 'Male',
                                    id: 'gender-male',
                                    name: 'gender',
                                    value: 'Male',
                                    help: 'Do you have a hee hee?'
                                },
                                {
                                    label: 'Female',
                                    id: 'gender-female',
                                    name: 'gender',
                                    value: 'Female',
                                    help: 'Do you have a hoo hoo?'
                                }
                            ]
                        }
                    },

                    // province
                    {
                        fieldType: Dropdown,
                        field: {
                            label: 'Province',
                            options: [
                                {
                                    value: 'ab',
                                    label: 'Alberta',
                                    reveals: 'HiddenTest'
                                }
                            ]
                        }
                    },

                    // HiddenTest
                    {
                        fieldType: Checkbox,
                        field: {
                            concealed: true,
                            id: 'HiddenTest',
                            label: 'Country',
                            help: 'YOLO!'
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

.concealed {
    display: none;
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
    margin-bottom: 0.5em;
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
