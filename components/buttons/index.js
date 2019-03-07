import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
import HRButton from './HRButton.vue';

storiesOf('Buttons', module)
	.addDecorator(withKnobs)
  .add('Special Buttons', () => `<div>
		  	<hr-button icon="zmdi-icon" text="Reveal"/>
		  	<hr-button icon="zmdi-icon" text="Proceed"/>
		  	<hr-button icon="zmdi-icon" 
		  		:disabled="disabled" 
		  		:text="text"/>
	  	</div>`)
  .add('Special Buttons with Knobs', () => ({
  	components: { HRButton },
  	props: {
  		disabled: {
  			default: boolean('Disabled', false),
  		},
  		text: {
  			default: text('Button Text', 'Proceed'),
  		}
  	},
  	template: `
			<hr-button icon="zmdi zmdi-account" :disabled="$props.disabled" :text="$props.text"/>
  	`
  }))
