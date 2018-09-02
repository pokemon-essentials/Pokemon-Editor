<template>
  <el-dialog
    title="Select an Image"
    width="960px"
    :visible.sync="visible"
    :close-on-click-modal="false"
    :lock-scroll="false"
    append-to-body>
    <div v-for="f in files" :key="f.path" v-if="f.filename">
      <div @click="preview(f.path)">{{f.filename}}</div>
    </div>
    <div v-for="f in files" :key="f" v-if="f.chlidren">
      <h4>{{f.path}}</h4>
      <div v-for="c in f.chlidren" :key="c.path">
        <div @click="preview(c.path)">{{c.filename}}</div>
      </div>
    </div>


    <img :src="selected" alt="">
    </el-dialog>
</template>

<script>
import { mapState } from "vuex";
import { allFilesSync } from "../Utils";

export default {
  data() {
    return {
      visible: true,
      files: [],
      selected: ""
    };
  },
  created() {
    this.loadFilesInfo();
  },
  methods: {
    loadFilesInfo() {
      this.files = allFilesSync(this.path);
    },
    open() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
    preview(f) {
      this.selected = f;
    }
  },
  computed: {
    path() {
      return this.Editor.path + "/project/img/characters";
    },
    ...mapState(["Editor"])
  }
};
</script>


<style scoped>
.el-dialog {
  max-height: 400px;
}
</style>
