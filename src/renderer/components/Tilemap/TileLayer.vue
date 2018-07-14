<template>
  <canvas></canvas>
</template>

<script>
import { EventBus } from "../../EventBus";
import { mapState } from "vuex";
import { snapToGrid, indexToX, indexToY, indexToCol, indexToRow } from "../../Utils";

export default {
  props: ["data"],
  mounted() {
    this.render();
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
        // tile = (tile - 1) * this.TileEditor.map.tilewidth;
        tile -= 1;
        let sx = (tile % this.TileEditor.map.tilesets[0].columns) * this.TileEditor.map.tilewidth;
        let sy = Math.floor(tile / this.TileEditor.map.tilesets[0].columns) * this.TileEditor.map.tilewidth;
        let tx = indexToX(index);
        let ty = indexToY(index);
        // console.log(sy, sx, tx, ty);
        context.drawImage(this.TileEditor.stileset, sx, sy, w, h, tx, ty, w, h);
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
