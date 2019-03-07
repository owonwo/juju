import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
import CCard from './CurvedCard.vue';
import ToggleSwitch from '../switches/ToggleSwitch.vue'
import ListItem from '../list/ListItem.vue';
import ListGroup from '../list/ListGroup.vue';

const vueInstance = ({
  components: { CCard, ToggleSwitch, ListItem, ListGroup },
  template: ``,
});

storiesOf('Cards', module)
	.addDecorator(withKnobs)
  .add('Curved Card', () => ({
    ...vueInstance,
    template: `<c-card title="Study Pre-requisites">
    Hello Sammy
  </c-card>`,
  }))
  .add('Card with Options', () => ({
    ...vueInstance,
    template: `
      <div style="display: flex">
        <c-card 
          title="The Fire Ferret"
          subtitle="The logging of the waters.">
         The Opening is near.. <br />
         Waiting for the sky to land.
        </c-card>
        <c-card title="The Opening"> 
          <template slot="card-actions">
            <toggle-switch size="sm"/>
            <toggle-switch size="sm" switch-style="curved"/>
            <toggle-switch size="sm" switch-style="square"/>
          </template>
          The competition is not working as expected.
        </c-card>
      </div>
    `
  }))
  .add('Card with List', () => ({
    ...vueInstance,
    template: `
      <section style="display:flex">
        <c-card title="Study List" subtitle="Awaking the best in you.">
          <list-group>
            <list-item>Micheal Walter</list-item>
            <list-item>James Blunt</list-item>
            <list-item>Richard Peter</list-item>
            <list-item>Enrique Profesis</list-item>
          </list-group>
        </c-card>
        <c-card title="Book Shop" subtitle="BEST BOOKS EVERY SEEN.">
          <list-group class="flat">
            <list-item>
              <span style="float: right">
                <small>UNSEEN</small>
                <ToggleSwitch size="sm" switch-style="curved"/>
                <small>SEEN</small>
              </span>
              T.H.I.N.K B.I.G
            </list-item>
            <list-item>The Positive Attitude</list-item>
            <list-item>Rich Dad/Poor Dad</list-item>
            <list-item>Why Men think the way they do?</list-item>
          </list-group>
        </c-card>
      </section>
    `
  }))