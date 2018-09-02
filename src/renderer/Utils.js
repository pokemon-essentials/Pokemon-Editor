var path = require("path");
var fs = require("fs");
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

export function getTilesetIndex(tiledata) {
  if (store.state.TileEditor.map.tilesets.length === 1) return 0;
  for (let index = 1; index < store.state.TileEditor.map.tilesets.length; index++) {
    const tileset = store.state.TileEditor.map.tilesets[index];
    if (tiledata < tileset.firstgid) {
      return index - 1;
    }
  }
}

export function allFilesSync(dir, fileList = []) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      fileList.push({ path: file, chlidren: allFilesSync(filePath)});
    } else {
      fileList.push({ filename: file, path: filePath });
    }
  });
  return fileList;
}
