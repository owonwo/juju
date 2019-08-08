import {
  configure
} from '@storybook/vue';

import Vue from 'vue';
// import Vuex from 'vuex'; // Vue plugins

// Import your custom components.
import '../components/generic.scss';
// Install Vue plugins.
// Vue.use(Vuex);

// Register custom components.
function loadStories() {
  // You can require as many stories as you need.
  ['button', 'accordion', 'switch', 'card', 'list', 'form', 'timeline']
  .map(component => {
    require('../stories/' + component + '.stories.js')
  })
}

configure(loadStories, module);