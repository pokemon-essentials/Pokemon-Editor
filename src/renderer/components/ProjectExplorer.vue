<template>
    <div class="project_explorer" v-if="visible"></div>
</template>

<script>
import { EventBus } from "../EventBus";
export default {
  data() {
    return {
      visible: true
    };
  },
  created() {
    EventBus.$on("TOGGLE_PROJECT_EXPLORER", this.toogle);
  },
  methods: {
    toogle() {
      this.visible = !this.visible;
    }
  }
};
</script>


<style>
.project_explorer {
  background-color: #353839;
  min-width: 250px;
}
</style>

