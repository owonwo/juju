import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
// import HRButton from '../buttons/HRButton.vue';
// import ToggleSwitch from '../switches/ToggleSwitch.vue';
import TimelineItem from './TimelineItem.vue';
import TimelineList from './TimelineList.vue';
import TimelineFlat from './TimelineFlat.vue';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

const vueInstance = ({
	data: () => ({
		active: true
	}),
	components: { TimelineItem, TimelineFlat, TimelineList },
});

storiesOf('Timeline Flat', module)
	.add('Variants', () => ({
		...vueInstance,
		template: `<div>
      <h3>Flat Timeline</h3>
      <section style="display:flex">
	      <TimelineFlat>
	      	<TimelineItem activity="Requested for "/>
	      	<TimelineItem/>
	      	<TimelineItem/>
	      	<TimelineItem/>
	      	<TimelineItem/>
	      	<TimelineItem/>
	      	<TimelineItem/>
	      </TimelineFlat>

	      <TimelineList>
	      	<TimelineItem/>
	      	<TimelineItem/>
	      	<TimelineItem/>
	      	<TimelineItem/>
	      	<TimelineItem/>
	      	<TimelineItem/>
	      	<TimelineItem/>
	      </TimelineList>
      </section>
		</div>`
	}))
	// .add('Multiple Accordion', () => ({
	// 	...vueInstance,
	// 	template: `
	// 	<div>
	// 	<h3>Multiple Accordion</h3>
	// 	<accordion-list>
	// 			<accordion title="Students List">
	// 				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil vero earum dolor ab, quisquam sed voluptates perferendis mollitia dolorum! Tempore ipsam, dolorem fugiat nisi odio quibusdam fugit nam omnis sed.
	// 			</accordion>
	// 			<accordion title="The Better Life">
	// 				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus non debitis exercitationem pariatur, quia alias nulla voluptates aspernatur sit modi eveniet amet accusantium ipsam perspiciatis! Debitis, numquam praesentium adipisci dolorum.
	// 			</accordion>
	// 			<accordion title="The Meagic Principle">
	// 				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus praesentium et velit autem iusto illo fugit fuga quo aliquam, reiciendis similique dicta. Autem temporibus ipsam pariatur expedita, perferendis omnis voluptas.
	// 			</accordion>
	// 		</accordion-list>
	// 		</div>
	// 		`,
	// }))
	// .add('Accordion with Options', () => ({
	// 	...vueInstance,
	// 	template: `
	// 	<section>
	// 		<h3>Accordion with Header Options</h3>
	// 		<accordion-list>
	// 			<accordion>
	// 				<template slot="options">
	// 					<ToggleSwitch size="sm" v-model="active"/>
	// 				</template>
	// 				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil vero earum dolor ab, quisquam sed voluptates perferendis mollitia dolorum! Tempore ipsam, dolorem fugiat nisi odio quibusdam fugit nam omnis sed.
	// 			</accordion>
	// 			<accordion :show=true>
	// 				<template slot="options">
	// 					<ToggleSwitch size="sm"/>
	// 				</template>
	// 				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil vero earum dolor ab, quisquam sed voluptates perferendis mollitia dolorum! Tempore ipsam, dolorem fugiat nisi odio quibusdam fugit nam omnis sed.
	// 			</accordion>
	// 		</accordion-list>
	// 	</section>
	// 	`,
	// }));