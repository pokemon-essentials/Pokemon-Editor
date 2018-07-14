const state = {
  TILE_SIZE: 32,
  width: 18,
  height: 12,
  slayer: null,
  stileset: null
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
