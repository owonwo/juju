import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import ListGroup from './ListGroup.vue';
import ListItem from './ListItem.vue';

const vueInstance = {
	components: { ListGroup, ListItem },
}

storiesOf('List Components', module)
	.add('List', () => ({
		...vueInstance,
		template: `<div>
			<h3>List Component</h3>
			<div style="display:flex">
				<section style="flex: 1;min-width: 300px">
					<list-item>
						Hello From
					</list-item>
					<list-item>
						Prettify Hello
					</list-item>
				</section>
				<section style="flex: 1;min-width: 300px">
					<list-item>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod hic enim doloribus doloremque accusantium consequatur consectetur, quia sit ad dolor aperiam, id aspernatur autem provident libero animi expedita ea error.
					</list-item>
					<list-item>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut suscipit, similique sint?
					</list-item>
				</section>
			</div>
		</div>`
	}))