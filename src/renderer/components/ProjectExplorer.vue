<template>
    <div class="project_explorer" v-if="visible">
      <el-tree :data="data" :props="defaultProps"></el-tree>
    </div>
</template>

<script>
import { EventBus } from "../EventBus";
export default {
  data() {
    return {
      visible: true,
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  created() {
    EventBus.$on("TOGGLE_PROJECT_EXPLORER", this.toogle);
  },
  methods: {
    toogle() {
      this.visible = !this.visible;
    }
  },
  computed: {
    data() {
      return [
        {
          label: "Maps",
          children: [
            {
              label: "Level three 3-2-1"
            }
          ]
        },
        { label: "Scripts" }
      ];
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

