<template>
  <div class="Landing">
    <el-button @click="openProject">Open Project</el-button>
    <el-button>Create New Project</el-button>
  </div>
</template>

<script>
import fs from "fs";

const REQUIRE_FILES = [
  "/pokemon-essentials",
  "/project",
  "/project/data/pe",
  "/project/data/pe/pokedex.json",
  "/project/data/pe/abilities.json",
  "/project/data/pe/moves.json"
];

export default {
  methods: {
    openProject() {
      let path = this.$electron.remote.dialog.showOpenDialog({ properties: ["openFile", "openDirectory"] });
      if (path) {
        let directory = path[0];
        console.log(fs.existsSync(directory));
        fs.existsSync(directory + "/project/data/pe/pokedex.json");
        for (const filename of REQUIRE_FILES) {
          if (!fs.existsSync(directory + filename)) {
            this.$notify.error({
              title: "Error",
              message: "The selected folder isn't a Pokemon Essential Project"
            });
            return;
          }
        }
        this.$store.dispatch("OpenProject", directory);
      }
    }
  }
};
</script>



<style scoped>
.Landing {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #6e7577;
}
</style>

