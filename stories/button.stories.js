import Vue from 'vue';

import {
    storiesOf
} from '@storybook/vue';
import {
    withKnobs,
    boolean,
    text
} from '@storybook/addon-knobs';

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
import {
    HRButton
} from '../components/buttons';

console.log(HRButton)

storiesOf('Buttons', module)
    .addDecorator(withKnobs)
    .add('Special Buttons with Knobs', () => ({
        components: {
            HRButton
        },
        props: {
            disabled: {
                default: boolean('Disabled', false),
            },
            text: {
                default: text('Button Text', 'REPUBLICAN'),
            }
        },
        template: `
      <div>
        <h1>Special Buttons</h1>
        <h3>Hover Reveal Button</h3>
        <HRButton icon="zmdi-icon" text="Reveal"/>
        <HRButton icon="zmdi-icon" text="Proceed"/>

        <h3>Change the props below to see effect</h3>
			  <HRButton icon="zmdi zmdi-account" :disabled="$props.disabled" :text="$props.text"/>
        <HRButton icon="zmdi zmdi-account" :disabled="$props.disabled" :text="$props.text"/>
      </div>
  	`
    }))