<template>
  <canvas :class="{'selected':selected}"></canvas>
</template>

<script>
import { EventBus } from "../../EventBus";
import { mapState } from "vuex";
import { snapToGrid, indexToX, indexToY, getTilesetIndex } from "../../Utils";

export default {
  props: ["data", "selected"],
  created() {
    EventBus.$on("RENDER_MAP", this.render);
    EventBus.$on("TILESET_DRAW_PATTERN", this.drawPattern);
  },
  data() {
    return {};
  },
  methods: {
    render() {
      this.$el.width = this.TileEditor.map.width * this.TileEditor.map.tilewidth;
      this.$el.height = this.TileEditor.map.height * this.TileEditor.map.tileheight;
      let context = this.$el.getContext("2d");
      let w = this.TileEditor.map.tilewidth;
      let h = this.TileEditor.map.tileheight;
      for (let index = 0; index < this.data.length; index++) {
        let tile = this.data[index];
        if (tile === 0) continue;
        let tilesetIndex = getTilesetIndex(tile);
        let tileset = this.TileEditor.map.tilesets[tilesetIndex];
        if (!tileset) return;
        let tilesetImg = this.TileEditor.tilesets[tilesetIndex];
        tile -= 1;
        let sx = (tile % tileset.columns) * this.TileEditor.map.tilewidth;
        let sy = Math.floor(tile / tileset.columns) * this.TileEditor.map.tilewidth;
        let tx = indexToX(index);
        let ty = indexToY(index);
        // console.log(sy, sx, tx, ty);
        context.drawImage(tilesetImg, sx, sy, w, h, tx, ty, w, h);
      }
    },
    drawPattern(canvas, x, y) {
      if (!this.selected) return;
      /** @type {HTMLCanvasElement} */
      let context = this.$el.getContext("2d");
      context.clearRect(x, y, canvas.width, canvas.height);
      context.drawImage(canvas, x, y);
    }
  },
  computed: {
    ...mapState(["TileEditor"])
  }
};
</script>

<style scoped>
canvas {
  /* background-color: rgba(0, 0, 0, 0.1); */
  position: absolute;
  opacity: 0.5;
}

.selected {
  opacity: 1;
}
</style>
