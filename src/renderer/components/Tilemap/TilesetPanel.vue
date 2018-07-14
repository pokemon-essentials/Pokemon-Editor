<template>
  <div
    class="tileset_panel"
    @mousedown="selectTile($event)"
    @mousemove="dragSelect($event)"
    @mouseup="dragging = false"
    @mouseout="dragging = false"
    ref="parent">
    <TileSelection></TileSelection>
    <img src="~@/assets/HGSS_Outside.png" alt="" ref="tileset">
  </div>
</template>

<script>
import TileSelection from "./TileSelection";
import { EventBus } from "../../EventBus";
import { snapToGrid } from "../../Utils";
import { mapState } from "vuex";

export default {
  components: { TileSelection },
  data() {
    return {
      startPoint: { x: 0, y: 0 },
      endPoint: { x: 0, y: 0 },
      dragging: false
    };
  },
  methods: {
    selectTile(e) {
      this.$store.commit("SELECT_TILESET", this.$refs.tileset);
      this.dragging = true;
      let parentRect = this.$refs.parent.getBoundingClientRect();
      let tilesetRect = this.$refs.tileset.getBoundingClientRect();
      let offset = Math.abs(tilesetRect.top - parentRect.top);
      let top = e.pageY - parentRect.top + offset;
      let left = e.pageX - parentRect.left;
      this.startPoint.x = snapToGrid(left);
      this.startPoint.y = snapToGrid(top);
      let width = this.Map.TILE_SIZE;
      let height = this.Map.TILE_SIZE;
      EventBus.$emit("SELECT_TILE", this.startPoint.x, this.startPoint.y, width, height);
      EventBus.$emit("UPDATE_GHOST_TILE", this.startPoint, width, height);
    },
    dragSelect(e) {
      if (this.dragging) {
        e.preventDefault();
        let parentRect = this.$refs.parent.getBoundingClientRect();
        let tilesetRect = this.$refs.tileset.getBoundingClientRect();
        let offset = Math.abs(tilesetRect.top - parentRect.top);
        let top = e.pageY - parentRect.top + offset;
        let left = e.pageX - parentRect.left;
        this.endPoint.x = snapToGrid(left);
        this.endPoint.y = snapToGrid(top);

        // TODO: Fix Reverse Selection
        if (this.startPoint.x > this.endPoint.x) {
          [this.startPoint.x, this.endPoint.x] = [this.endPoint.x, this.startPoint.x];
        }
        if (this.startPoint.y > this.endPoint.y) {
          [this.startPoint.y, this.endPoint.y] = [this.endPoint.y, this.startPoint.y];
        }
        let width = this.endPoint.x - this.startPoint.x + this.Map.TILE_SIZE;
        let height = this.endPoint.y - this.startPoint.y + this.Map.TILE_SIZE;
        EventBus.$emit("SELECT_TILE", this.startPoint.x, this.startPoint.y, width, height);
        EventBus.$emit("UPDATE_GHOST_TILE", this.startPoint, width, height);
      }
    }
  },
  computed: {
    ...mapState(["Map"])
  }
};
</script>


<style>
.tileset_panel {
  width: 288px;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: content-box;
  border: none;
  text-overflow: clip;
  background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.0980392) 25%,
      rgba(0, 0, 0, 0) 25%,
      rgba(0, 0, 0, 0) 75%,
      rgba(0, 0, 0, 0.0980392) 75%,
      rgba(0, 0, 0, 0.0980392) 0
    ),
    linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.0980392) 25%,
      rgba(0, 0, 0, 0) 25%,
      rgba(0, 0, 0, 0) 75%,
      rgba(0, 0, 0, 0.0980392) 75%,
      rgba(0, 0, 0, 0.0980392) 0
    ),
    #ccc;
  background-position: 0 0, 16px 16px;
  background-origin: padding-box;
  background-clip: border-box;
  background-size: 32px 32px;
}
</style>
