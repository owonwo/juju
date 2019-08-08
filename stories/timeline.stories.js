import Vue from 'vue';

import {
    storiesOf
} from '@storybook/vue';

import {
    List,
    Flat,
    Item
} from '../components/timelines';

const vueInstance = ({
    data: () => ({
        active: true
    }),
    components: {
        Item,
        Flat,
        List
    },
});

storiesOf('Timeline Flat', module)
    .add('Variants', () => ({
        ...vueInstance,
        template: `<div>
      <h3>Flat Timeline</h3>
      <section style="display:flex">
	      <Flat>
	      	<Item activity="Requested for "/>
	      	<Item/>
	      	<Item/>
	      	<Item/>
	      	<Item/>
	      	<Item/>
	      	<Item/>
	      </Flat>

	      <List>
	      	<Item/>
	      	<Item/>
	      	<Item/>
	      	<Item/>
	      	<Item/>
	      	<Item/>
	      	<Item/>
	      </List>
      </section>
		</div>`
    }))