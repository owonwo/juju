import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';

import Dropdown from './Dropdown.vue';
import LabelDropdown from './LabelDropdown.vue';

const vueInstance = {
	data: () => ({
		actor: select('Option', ['Micheal', 'Frank', 'Johnson'])
	}),
	components: { Dropdown, LabelDropdown },
}

const options = `
	<li>Option 1</li>
	<li>Option 2</li>
	<li>Option 3</li>
	<li>Option 4</li>
`;

const makeTemplate = (template) => ({
	...vueInstance,
	template
});

storiesOf('Form', module)
  .addDecorator(withKnobs)
	.add('Dropdown', () => makeTemplate(`
		<section>
			<h1>Dropdown/Select Components</h1>
			<div class="flex">
				<dropdown :disabled="true" label="download">
					${options}
				</dropdown>
				<dropdown :disabled="false" label="download">
					${options}
				</dropdown>
				<dropdown class="is-rounded" :on-hover="true" :disabled="false" label="download">
					${options}
				</dropdown>
			</div>
		</section>
	`))
	.add('Labelled Dropdown', () => makeTemplate(`
			<div style="display: flex">
				<label-dropdown class="classic" label="CLASSIC">
					${options}
				</label-dropdown>
				<label-dropdown :on-hover="true" class="legacy" label="OPEN ON HOVER">
					${options}
				</label-dropdown>
				<div>
					<label-dropdown class="legacy" label="">
						${options}
					</label-dropdown>
				</div>
				<label-dropdown :disabled="true" class="modern" label="HOVER CURVED">
					${options}
				</label-dropdown>
			</div>
	`));