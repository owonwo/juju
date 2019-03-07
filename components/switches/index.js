import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
import ToggleSwitch from '../switches/ToggleSwitch.vue'

const vueInstance = ({
  components: { ToggleSwitch },
  data: () => ({
    active: true
  }),
  watch: {
    active(a, b) {
      console.log('active state', a, b);
    }
  },
  template: ``,
});

storiesOf('Switch', module)
	.addDecorator(withKnobs)
  .add('Switches', () => ({
    ...vueInstance,
    template: `
      <div>
        <h1>Regular Switches</h1>
        <section style="display: flex">
          <toggle-switch/>
          <toggle-switch size="sm"/>
          <toggle-switch size="sm" v-model="active" switch-style="rounded"/>
        </section>
        <br />
        <section style="display:flex">
          <toggle-switch switch-style="square"/>
          <toggle-switch size="sm" switch-style="square"/>
          <toggle-switch size="sm" v-model="active" switch-style="square"/>
        </section> 
        <br />
        <section style="display:flex">
          <toggle-switch switch-style="curved"/>
          <toggle-switch size="sm" switch-style="curved"/>
          <toggle-switch size="sm" v-model="active" switch-style="curved"/>
        </section>
      </div>
    `
  }))