import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/todos';

// Load vuex
Vue.use(Vuex);

//create ower store
export default new Vuex.Store({
  modules: {
    todos
  }
});
