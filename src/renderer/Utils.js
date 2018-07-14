import store from "./store";

export function snapToGrid(value) {
  return Math.floor(value / store.state.TileEditor.map.tilewidth) * store.state.TileEditor.map.tilewidth;
}

export function indexToX(index) {
  return (index % store.state.TileEditor.map.width) * store.state.TileEditor.map.tilewidth;
}

export function indexToY(index) {
  return Math.floor(index / store.state.TileEditor.map.width) * store.state.TileEditor.map.tileheight;
}

export function indexToCol(index) {
  return index % store.state.TileEditor.map.width;
}

export function indexToRow(index) {
  return Math.floor(index / store.state.TileEditor.map.height);
}
