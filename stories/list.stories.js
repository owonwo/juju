import Vue from 'vue';
import {
    storiesOf
} from '@storybook/vue';

import {
    CCard
} from '../components/cards';
import {
    ListItem,
    ListGroup
} from '../components/list';

const vueInstance = {
    components: {
        ListGroup,
        ListItem,
        CCard,
    },
}

storiesOf('List Components', module)
    .add('List', () => ({
        ...vueInstance,
        template: `<div>
			<h3>List Component</h3>
            <div style="display:flex">
                <CCard title="Quotes">
					<list-item>
						Hello Micheal
					</list-item>
					<list-item>
						Prettify Hello
					</list-item>
                </CCard>
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