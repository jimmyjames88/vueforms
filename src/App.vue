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

    data() {
        return {
            form:  {
                title: 'Some form title',
                attributes: {
                    method: '',
                    action: '',
                    enctype: ''
                },
                fields: [
                    {
                        fieldType: Textfield,
                        field: {
                            label: 'Full name',
                            name: 'fullname',
                            help: 'Checkity check yourself before your wreckity wreck yourself',
                            columns: 6,
                            inline: true,

                            validation: {
                                front: {
                                    email: true
                                }
                            }
                        }
                    },

                    {
                        fieldType: Checkbox,
                        field: {
                            id: 'cb1',
                            columns: 3,
                            label: 'Check me please',
                            help: 'Check it or don\'t, idgaf'
                        }
                    },

                    {
                        fieldType: Checkbox,
                        field: {
                            id: 'cb2',
                            columns: 3,
                            label: 'Check me as well please',
                            help: 'Ja booty',

                            events: {
                                checked() {
                                    alert('Ja checked de bootay')
                                },

                                unchecked() {
                                    alert('Nein booty...NEIN')
                                }
                            }
                        }
                    },

                    {
                        fieldType: Slider,
                        field: {
                            label: 'Satisfaction',
                            range: [0, 100],
                            help: 'I can\'t get none',
                            columns: 4
                        }
                    },

                    {
                        fieldType: Dropdown,
                        field: {
                            label: 'The dropdown label',
                            name: 'somedropdown',
                            id: 'somedropdown',
                            help: 'Click then click again stupid',
                            columns: 4,
                            attributes: {
                                placeholder: 'Select a province that matters'
                            },
                            options: [
                                { value: 'ab', label: 'Alberta'},
                                { value: 'bc', label: 'British Columbia' },
                                { value: 'mb', label: 'Manitoba' },
                                { value: 'sk', label: 'Saskatchewan'}
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
