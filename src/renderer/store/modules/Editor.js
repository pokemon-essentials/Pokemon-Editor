const fs = require("fs");
const state = {
  path: null,
  data: {
    pokemon: null,
    abilities: null,
    moves: null
  },
  scripts: [],
  maps: []
};

const mutations = {
  SET_PATH(state, path) {
    state.path = path;
    state.data.pokemon = JSON.parse(fs.readFileSync(path + "/project/data/pe/pokedex.json", "utf8"));
    state.data.abilities = JSON.parse(fs.readFileSync(path + "/project/data/pe/abilities.json", "utf8"));
    state.data.moves = JSON.parse(fs.readFileSync(path + "/project/data/pe/moves.json", "utf8"));
    state.maps = fs.readdirSync(path + "/project/maps");
  }
};

const actions = {
  OpenProject({ commit }, path) {
    commit("SET_PATH", path);
  }
};

export default {
  state,
  mutations,
  actions
};
