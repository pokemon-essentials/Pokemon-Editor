let map = require('../../assets/map1.json');
const state = {
  slayer: null,
  stileset: null,
  map
};

const mutations = {
  SELECT_TILESET(state, tileset) {
    state.stileset = tileset;
  }
};

const actions = {
  someAsyncTask({ commit }) {
    // do something async
    commit("INCREMENT_MAIN_COUNTER");
  }
};

export default {
  state,
  mutations,
  actions
};
