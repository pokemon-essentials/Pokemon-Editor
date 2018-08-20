<template>

  <el-dialog width="1024px" title="Event Editor" :visible.sync="visible"
    :close-on-click-modal="false" fullscreen>
    <div class="EventEditor">



      <div class="container">
        <aside>
          <div class="panel" id="conditions">
            <span class="panel__title">Conditions</span>
            <div class="panel__body">
              <el-checkbox v-model="model.switch1Valid" size="mini" label="Switch"></el-checkbox>
              <el-button @click="openSwitchEditor" size="mini" :disabled="!model.switch1Valid">...</el-button>
            </div>
          </div>

          <div class="panel" id="image">
            <span class="panel__title">Image</span>
            <div class="panel__body">
            </div>
          </div>

          <div class="panel" id="automov">
            <span class="panel__title">Autonomun movement</span>
            <div class="panel__body">
            </div>
          </div>

          <div class="panel" id="options">
            <span class="panel__title">Options</span>
            <div class="panel__body">
              <el-checkbox v-model="model.walkAnime" size="mini" label="Walking"></el-checkbox>
              <br>
              <el-checkbox v-model="model.stepAnime" size="mini" label="Steppeing"></el-checkbox>
              <br>
              <el-checkbox v-model="model.directionFix" size="mini" label="Direction Fix"></el-checkbox>
              <br>
              <el-checkbox v-model="model.through" size="mini" label="Through"></el-checkbox>
            </div>
          </div>

          <div class="panel" id="priority">
            <span class="panel__title">Priority</span>
            <el-select v-model="model.priorityType" size="mini">
              <el-option :value="0" label="Below Characters"></el-option>
              <el-option :value="1" label="Same As Characters"></el-option>
              <el-option :value="2" label="Above Characters"></el-option>
            </el-select>
          </div>

          <div class="panel" id="trigger">
            <span class="panel__title">Trigger</span>
            <el-select v-model="model.trigger" size="mini">
              <el-option :value="0" label="Action Button"></el-option>
              <el-option :value="1" label="Player Touch"></el-option>
              <el-option :value="2" label="Event Touch"></el-option>
              <el-option :value="3" label="Autorun"></el-option>
            </el-select>
          </div>



        </aside>
        <main>
        <div class="panel">
            <span class="panel__title">Content</span>
            <div class="panel__body">
            </div>
          </div>
        </main>
      </div>

      <SwitchDialog ref="SwitchDialog" ></SwitchDialog>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button size="mini" type="primary" @click="dialogVisible = false" round>Ok</el-button>
      <el-button size="mini" @click="close" round>Cancel</el-button>
      <el-button size="mini" type="primary" @click="dialogVisible = false" disabled  round>Apply</el-button>
    </span>
  </el-dialog>
</template>

<script>
import SwitchDialog from "./SwitchDialog";
export default {
  components: { SwitchDialog },
  data() {
    return {
      visible: false,
      panels: [],
      model: {
        priorityType: 1,
        trigger: 0,
        walkAnime: true,
        directionFix: false,
        stepAnime: false,
        through: false
      }
    };
  },
  methods: {
    openSwitchEditor() {
      this.$refs.SwitchDialog.open();
    },

    open() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    }
  }
};
</script>

<style scoped>
.EventEditor {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.el-select {
  width: 100%;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
}

.container aside {
  width: 400px;
  padding-right: 5px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 4fr 2fr 1fr 1fr;
  grid-gap: 10px;
}

#conditions {
  grid-column-start: 1;
  grid-column-end: 5;
}

#automov{
  grid-column-start: 2;
  grid-column-end: 5;
}

#options {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 6;
}

#priority {
  grid-column-start: 3;
  grid-column-end: 5;
}
#trigger {
  grid-column-start: 3;
  grid-column-end: 5;
}

.container main {
  padding-left: 5px;
  flex: 1;
}
</style>
