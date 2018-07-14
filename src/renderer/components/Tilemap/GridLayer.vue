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
      let cols = this.Tilemap.width;
      let rows = this.Tilemap.height;
      let context = this.$el.getContext("2d");

      console.log(cols, rows);

      this.$el.width = this.Tilemap.width * this.Tilemap.TILE_SIZE;
      this.$el.height = this.Tilemap.height * this.Tilemap.TILE_SIZE;

      context.strokeStyle = "rgba(100,100,100,0.8)";
      context.lineWidth = 1;

      // fix the sub-pixel line problem by subtracting 0.5
      for (let col = 1; col < cols; col++) {
        context.beginPath();
        context.setLineDash([4, 1]);
        context.moveTo(col * this.Tilemap.TILE_SIZE, 0);
        context.lineTo(col * this.Tilemap.TILE_SIZE, this.$el.height);
        context.stroke();
      }

      for (let row = 1; row < rows; row++) {
        context.beginPath();
        context.setLineDash([4, 1]);
        context.moveTo(0, row * this.Tilemap.TILE_SIZE);
        context.lineTo(this.$el.width, row * this.Tilemap.TILE_SIZE);
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
    ...mapState(["Tilemap"])
  }
};
</script>

<style scoped>
canvas {
  position: absolute;
}
</style>
