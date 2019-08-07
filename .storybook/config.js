import {
  configure
} from '@storybook/vue';

import Vue from 'vue';
// import Vuex from 'vuex'; // Vue plugins

// Import your custom components.
import '../components/generic.scss';
import HRButton from '../components/buttons/HRButton.vue';

// Install Vue plugins.
// Vue.use(Vuex);

// Register custom components.
Vue.component('hr-button', HRButton);

function loadStories() {
  // You can require as many stories as you need.
  ['button', 'accordion', 'switch']
  .map(component => {
    require('../stories/' + component + '.stories.js')
  })
}

configure(loadStories, module);