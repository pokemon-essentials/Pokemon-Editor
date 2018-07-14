<template>
  <div class="tile_selection" :style="styles"></div>
</template>


<script>
import { EventBus } from "../../EventBus";
export default {
  data() {
    return {
      top: 0,
      left: 0,
      height: 0,
      width: 0
    };
  },
  created() {
    EventBus.$on("SELECT_TILE", this.move);
  },
  methods: {
    move(x, y, w, h) {
      this.left = x;
      this.top = y;
      this.height = h;
      this.width = w;
    }
  },
  computed: {
    styles() {
      return {
        top: this.top + "px",
        left: this.left + "px",
        height: this.height + "px",
        width: this.width + "px"
      };
    }
  }
};
</script>


<style>
.tile_selection {
  /* display: none; */
  background-color: rgba(0, 0, 255, 0.5);
  border: 2px solid #fff;
  color: rgba(255, 255, 255, 0.9);
  position: absolute;
  left: 0;
  top: 0;
  text-align: center;
  pointer-events: none;
}
</style>
