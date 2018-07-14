let map = require("../../assets/map1.json");
// const checkImage = path =>

const state = {
  slayer: null,
  stileset: null,
  tilesets: [],
  map
};

const mutations = {
  SET_TILESET(state, tilesets) {
    state.stileset = tilesets;
  },
  PUSH_TILESETS(state, tilesets) {
    state.tilesets.push(tilesets);
  }
};

const actions = {
  LoadAllTileset({ dispatch }, paths) {
    let promises = [];
    for (const path of paths) {
      promises.push(dispatch("LoadTileset", path));
    }
    return Promise.all(promises);
  },
  LoadTileset({ commit }, path) {
    return new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve({ path, status: "ok" });
      img.onerror = () => resolve({ path, status: "error" });
      // img.src = path;
      img.src = "imgs/HGSS_Outside--assets.png";
      commit("PUSH_TILESETS", img);
    });
  }
};

export default {
  state,
  mutations,
  actions
};
