<template>
  <canvas></canvas>
</template>

<script>
import { EventBus } from "../../EventBus";
import { mapState } from "vuex";
import { snapToGrid, indexToX, indexToY, getTilesetIndex } from "../../Utils";

export default {
  props: ["data"],
  created() {
    EventBus.$on("RENDER_MAP", this.render);
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
        let tilesetImg = this.TileEditor.tilesets[tilesetIndex];
        tile -= 1;
        let sx = (tile % tileset.columns) * this.TileEditor.map.tilewidth;
        let sy = Math.floor(tile / tileset.columns) * this.TileEditor.map.tilewidth;
        let tx = indexToX(index);
        let ty = indexToY(index);
        // console.log(sy, sx, tx, ty);
        context.drawImage(tilesetImg, sx, sy, w, h, tx, ty, w, h);
      }
    }
  },
  computed: {
    ...mapState(["TileEditor"])
  }
};
</script>

<style scoped>
canvas {
  /* background-color: antiquewhite; */
  position: absolute;
}
</style>
