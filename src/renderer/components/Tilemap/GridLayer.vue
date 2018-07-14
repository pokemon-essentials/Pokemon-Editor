<template>
  <canvas ref="canvas"
    @mousemove="moveGhotTile($event)"
    @mouseout="hideGhotTile()"
  ></canvas>
</template>

<script>
import { EventBus } from "../../EventBus";
import { mapState } from "vuex";
import { snapToGrid } from "../../Utils";

export default {
  mounted() {
    this.render();
  },
  methods: {
    render() {
      let cols = this.TileEditor.map.width;
      let rows = this.TileEditor.map.height;
      let context = this.$el.getContext("2d");

      this.$el.width = this.TileEditor.map.width * this.TileEditor.map.tilewidth;
      this.$el.height = this.TileEditor.map.height * this.TileEditor.map.tileheight;

      context.strokeStyle = "rgba(50,50,50,0.9)";
      context.lineWidth = 1;

      // fix the sub-pixel line problem by subtracting 0.5
      for (let col = 1; col < cols; col++) {
        context.beginPath();
        context.setLineDash([4, 1]);
        context.moveTo(col * this.TileEditor.map.tileheight, 0);
        context.lineTo(col * this.TileEditor.map.tileheight, this.$el.height);
        context.stroke();
      }

      for (let row = 1; row < rows; row++) {
        context.beginPath();
        context.setLineDash([4, 1]);
        context.moveTo(0, row * this.TileEditor.map.tilewidth);
        context.lineTo(this.$el.width, row * this.TileEditor.map.tilewidth);
        context.stroke();
      }
    },
    hideGhotTile() {
      EventBus.$emit("HIDE_GHOST_TILE");
    },
    moveGhotTile(e) {
      let parentRect = this.$parent.$refs.wrapper.getBoundingClientRect();
      let canvas = this.$refs.canvas.getBoundingClientRect();
      let offset = Math.abs(canvas.top - parentRect.top);
      let top = e.pageY - parentRect.top + offset;
      let left = e.pageX - parentRect.left;
      let x = snapToGrid(left);
      let y = snapToGrid(top);
      EventBus.$emit("MOVE_GHOST_TILE", x, y);
    }
  },
  computed: {
    ...mapState(["TileEditor"])
  }
};
</script>

<style scoped>
canvas {
  position: absolute;
  margin-bottom: 150px;
  margin-right: 150px;
}
</style>
