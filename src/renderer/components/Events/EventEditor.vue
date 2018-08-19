<template>

  <el-dialog :visible="true" width="1024px" title="Event Editor" fullscreen>
    <div class="EventEditor">
      <el-tabs type="card" @tab-click="handleClick" size="small">
        <el-tab-pane label="User">User</el-tab-pane>
        <el-tab-pane label="Config">Config</el-tab-pane>
        <el-tab-pane label="Role">Role</el-tab-pane>
        <el-tab-pane label="Task">Task</el-tab-pane>
      </el-tabs>
      <el-row type="flex" :gutter="20">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-button @click="openSwitchEditor" size="mini">...</el-button>
          </div>
        </el-col>
        <el-col :span="16"><div class="grid-content bg-purple">hola</div></el-col>
      </el-row>
      <SwitchDialog ref="SwitchDialog" ></SwitchDialog>
    </div>
  </el-dialog>
</template>

<script>
import SwitchDialog from "./SwitchDialog";
export default {
  components: { SwitchDialog },
  data() {
    return {};
  },
  methods: {
    openSwitchEditor() {
      this.$refs.SwitchDialog.open();
    }
  }
};
</script>

<style>
.EventEditor {
  width: 100%;
  /* padding: 10px; */
}
.el-row {
  /* margin-bottom: 20px; */
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
  padding: 5px;
}
.bg-purple {
  background: #d3dce6;
  padding: 5px;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
