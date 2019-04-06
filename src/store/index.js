import Vue from 'vue';
import Vuex from 'vuex';
import actions from '~/src/store/actions';
import mutations from '~/src/store/mutations';
import state from '~/src/store/state';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions
});
