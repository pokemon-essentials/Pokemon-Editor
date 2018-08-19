<template>
  <div id="app">
    <menu-toolbar></menu-toolbar>
    <ProjectExplorer></ProjectExplorer>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuToolbar from "./components/MenuToolbar";
import ProjectExplorer from "./components/ProjectExplorer";
export default {
  name: "pokemon-essentials-mv-editor",
  components: { MenuToolbar, ProjectExplorer }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
}

#app {
  display: flex;
  height: 100%;
  width: 100%;
}

img,
div,
canvas {
  image-rendering: optimizeSpeed;
  /* Legal fallback */
  image-rendering: optimize-contrast;
  /* CSS3 Proposed  */
  image-rendering: crisp-edges;
  /* CSS4 Proposed  */
  image-rendering: pixelated;
  /* CSS4 Proposed  */
}

.el-dialog__body {
  padding: 30px 20px;
  padding-top: 0;
}
</style>
