<template>
  <canvas></canvas>
</template>

<script>
import { EventBus } from "../../EventBus";
import { mapState } from "vuex";

export default {
  created() {
    EventBus.$on("UPDATE_GHOST_TILE", this.update);
    EventBus.$on("HIDE_GHOST_TILE", this.hide);
    EventBus.$on("MOVE_GHOST_TILE", this.move);
  },
  data() {
    return {};
  },
  methods: {
    update(startPoint, w, h) {
      let context = this.$el.getContext("2d");
      context.clearRect(0, 0, this.width, this.height);
      this.$el.width = w;
      this.$el.height = h;
      let img = this.TileEditor.tilesets[this.TileEditor.stileset];
      context.drawImage(img, startPoint.x, startPoint.y, w, h, 0, 0, w, h);
    },
    move(x, y) {
      this.$el.style.left = x + "px";
      this.$el.style.top = y + "px";
      this.show();
    },
    hide() {
      this.$el.style.display = "none";
    },
    show() {
      this.$el.style.display = "block";
    }
  },
  computed: {
    ...mapState(["TileEditor"])
  }
};
</script>

<style scoped>
canvas {
  opacity: 0.6;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
