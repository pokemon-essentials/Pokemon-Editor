<template>
    <div class="tilemap_editor">
      <div class="sidebar">
        <LayersPanel></LayersPanel>
        <el-button size="mini" @click="openEventEditor">hola</el-button>
        <select name="" id="">
          <option v-for="tileset in TileEditor.map.tilesets" :key="tileset.name">{{tileset.name}}</option>
        </select>
        <TilesetPanel></TilesetPanel>
      </div>
      <div class="viewport">
        <div class="toolbar">
          <el-radio-group v-model="layer" size="small" @change="selectLayer">
            <el-radio-button
              v-for="(layer, index) in TileEditor.map.layers"
              :key="layer.name"
              :label="index"></el-radio-button>
            <el-radio-button label="Events"></el-radio-button>
          </el-radio-group>
        </div>
        <div ref="wrapper" class="board-wrapper">
          <TileLayer
            v-for="(layer, index) in TileEditor.map.layers"
            :key="layer.name"
            :data="layer.data"
            :selected="index == selectedLayer || selectedLayer == 0"></TileLayer>
          <GridLayer></GridLayer>
          <GhostTile></GhostTile>
        </div>
        <footer>
          {{x}} - {{y}}
        </footer>
      </div>
      <EventEditor ref="EventEditor"></EventEditor>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { EventBus } from "../EventBus";
import TilesetPanel from "./Tilemap/TilesetPanel";
import LayersPanel from "./Tilemap/LayersPanel";
import GhostTile from "./Tilemap/GhostTile";
import GridLayer from "./Tilemap/GridLayer";
import TileLayer from "./Tilemap/TileLayer";
import EventEditor from "./Events/EventEditor";

let mapdata = require("../assets/map1.json");

export default {
  components: { TilesetPanel, LayersPanel, GhostTile, GridLayer, TileLayer, EventEditor },
  created() {
    EventBus.$on("MOVE_GHOST_TILE", this.updateFooter);
  },
  data() {
    return { x: null, y: null, map: mapdata, layer: null, selectedLayer: 1 };
  },
  methods: {
    updateFooter(x, y) {
      this.x = x;
      this.y = y;
    },
    openEventEditor() {
      this.$refs.EventEditor.open();
    },
    selectLayer(index) {
      this.selectedLayer = index;
    }
  },
  computed: {
    ...mapState(["TileEditor"])
  }
};
</script>


<style scoped>
.tilemap_editor {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.sidebar {
  display: flex;
  flex-direction: column;
}

/* select {
  flex: 1;
  min-height: 20px;
} */

.viewport {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.board-wrapper {
  flex: 1;
  position: relative;
  overflow: auto;
}

.toolbar {
  background-color: #c1c1c1;
  min-height: 20px;
}

footer {
  background-color: #c1c1c1;
  min-height: 20px;
}

.toolbar {
  padding: 5px;
}
</style>
