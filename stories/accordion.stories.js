import Vue from 'vue';

import {
	storiesOf
} from '@storybook/vue';
import {
	Accordion,
	AccordionList
} from '../components/accordions';
import {
	HRButton,
} from '../components/buttons';
import ToggleSwitch from '../components/switches/ToggleSwitch.vue';
// import { withKnobs, boolean, text } from '@storybook/addon-knobs';

const vueInstance = ({
	data: () => ({
		active: true
	}),
	components: {
		Accordion,
		AccordionList,
		HRButton,
		ToggleSwitch
	},
});

storiesOf('Accordions', module)
	.add('Accordion', () => ({
		...vueInstance,
		template: `<div>
      <h3>Accordion</h3>
			<accordion>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto perspiciatis laborum, quia autem. Labore tempora doloribus ex. Ullam vel similique distinctio enim, cupiditate, ut magni praesentium nulla soluta nihil atque!
			</accordion>
		</div>`
	}))
	.add('Multiple Accordion', () => ({
		...vueInstance,
		template: `
		<div>
		<h3>Multiple Accordion</h3>
		<accordion-list>
				<accordion title="Students List">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil vero earum dolor ab, quisquam sed voluptates perferendis mollitia dolorum! Tempore ipsam, dolorem fugiat nisi odio quibusdam fugit nam omnis sed.
				</accordion>
				<accordion title="The Better Life">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus non debitis exercitationem pariatur, quia alias nulla voluptates aspernatur sit modi eveniet amet accusantium ipsam perspiciatis! Debitis, numquam praesentium adipisci dolorum.
				</accordion>
				<accordion title="The Meagic Principle">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus praesentium et velit autem iusto illo fugit fuga quo aliquam, reiciendis similique dicta. Autem temporibus ipsam pariatur expedita, perferendis omnis voluptas.
				</accordion>
			</accordion-list>
			</div>
			`,
	}))
	.add('Accordion with Options', () => ({
		...vueInstance,
		template: `
		<section>
			<h3>Accordion with Header Options</h3>
			<accordion-list>
				<accordion>
					<template slot="options">
						<ToggleSwitch size="sm" v-model="active"/>
					</template>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil vero earum dolor ab, quisquam sed voluptates perferendis mollitia dolorum! Tempore ipsam, dolorem fugiat nisi odio quibusdam fugit nam omnis sed.
				</accordion>
				<accordion :show=true>
					<template slot="options">
						<ToggleSwitch size="sm"/>
					</template>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil vero earum dolor ab, quisquam sed voluptates perferendis mollitia dolorum! Tempore ipsam, dolorem fugiat nisi odio quibusdam fugit nam omnis sed.
				</accordion>
			</accordion-list>
		</section>
		`,
	}));