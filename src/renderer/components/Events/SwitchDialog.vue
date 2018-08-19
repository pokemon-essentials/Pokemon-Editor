<template>
  <el-dialog
    title="Switch Selector"
    width="400px"
    :visible.sync="visible"
    :close-on-click-modal="false"
    append-to-body>
    <el-table height="250" :data="switches" :show-header="false" style="width:100%" size="mini" border stripe>
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="name" label="Name" align="left"></el-table-column>
    </el-table>
    <el-input size="mini" placeholder="name"></el-input>
    <span slot="footer" class="dialog-footer">
      <el-button size="mini" type="primary" @click="dialogVisible = false" round>Ok</el-button>
      <el-button size="mini" @click="close" round>Cancel</el-button>
      <el-button size="mini" type="primary" @click="dialogVisible = false" disabled  round>Apply</el-button>
    </span>
  </el-dialog>
</template>


<script>
export default {
  data() {
    return {
      visible: false,
      switches: [
        { name: "start" },
        { name: "skipped intro" },
        { name: "skipped intro" },
        { name: "skipped intro" },
        { name: "skipped intro" },
        { name: "skipped intro" },
        { name: "skipped intro" },
        { name: "skipped intro" },
        { name: "skipped intro" },
        { name: "skipped intro" },
        { name: "skipped intro" }
      ]
    };
  },
  methods: {
    open() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    }
  },
  computed: {}
};
</script>

<style>
.el-button {
  min-width: 100px;
}
</style>
