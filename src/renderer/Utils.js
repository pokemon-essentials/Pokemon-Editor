import store from "./store";

export function snapToGrid(value) {
  return Math.floor(value / store.state.Map.TILE_SIZE) * store.state.Map.TILE_SIZE;
}
