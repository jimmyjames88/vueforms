import VueForm from '../components/VueForm.vue'
import Textfield from '../components/Textfield.vue'
import Checkbox from '../components/Checkbox.vue'
import RadioButton from '../components/RadioButton.vue'
import RadioButtonGroup from '../components/RadioButtonGroup.vue'
import CheckboxGroup from '../components/CheckboxGroup.vue'
import Slider from '../components/Slider.vue'
import Dropdown from '../components/Dropdown.vue'

export const fields = [
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
                {
                    value: 'ab',
                    label: 'Alberta',
                    events: {
                        selected() {
                            alert('Republic of Alberta 2020!')
                        },
                        deselected() {
                            alert('TRAITOR!')
                        }
                    }
                },
                { value: 'bc', label: 'British Columbia' },
                { value: 'mb', label: 'Manitoba' },
                { value: 'sk', label: 'Saskatchewan' }
            ]
        }
    }
]
