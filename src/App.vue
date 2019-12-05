<template>
    <div id="app">
        <div class="row">
			<Checkbox :field="form[2]" />
			<CheckboxGroup :group="form[3]" />
        </div>
    </div>
</template>

<script>
import Textfield from './components/Textfield.vue'
import Checkbox from './components/Checkbox.vue'
import RadioButton from './components/RadioButton.vue'
import RadioButtonGroup from './components/RadioButtonGroup.vue'
import CheckboxGroup from './components/CheckboxGroup.vue'

export default {
    name: 'app',
    components: {
        Textfield,
		Checkbox,
		RadioButton,
		RadioButtonGroup,
		CheckboxGroup
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

                    },

                    validation: {
                        front: {
                            email: true,
                            max: 10
                        },
                        laravel: ''
                    }
                },

				// 3
				{
                    name: 'FieldName',
                    id: 'field-id3',
                    label: 'The label',
                    help: 'Help yourself nerd',
                    // required: true,

                    inline: true,
                    columns: 6,

                    events: {
						checked() {
							console.log('checked')
						},
						unchecked() {
							console.log('unchecked')
						}
                    },

                    validation: {
                        front: {
                            email: true,
                            max: 10
                        },
                        laravel: ''
                    }
                },

				// RBG 4+5 [3]
				{
					label: 'Radio Button Group',
					help: 'Sup dawg?',
					columns: 4,
					//inline: true,

					fields: [
						{
		                    name: 'RadioGroup',
		                    id: 'field-id4',
		                    label: 'check 1',
		                    help: 'Help yourself nerd',
		                    // required: true,
							inline: true,

							events: {
								click() {
									console.log('clicked');
								},

								checked() {
									console.log('checked');
								},

								unchecked() {
									console.log('unchecked');
								}
							}
		                },

						// 5
						{
		                    name: 'RadioGroup',
		                    id: 'field-id5',
		                    label: 'check 2',
		                    help: 'Help yourself nerd',
		                    // required: true,
 							inline: true,
		                }
					]
				}
				// 4

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
