<template>
  <el-collapse class="command">
    <el-collapse-item name="1">
      <template slot="title">
        <span class="command__title">Show Text</span>
        <span>{{$truncate(model.text, 45)}}</span>
      </template>
      <el-row :gutter="10">
        <el-col span="6">
          <label for="">Image:</label>
          <div class="image"></div>
        </el-col>
        <el-col span="18">
          <div class="form-group">
            <label for="">Text:</label>
            <el-input type="textarea" v-model="model.text" :rows="4"></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col span="6" offset="6">
          <div class="form-group">
            <label for="">Background:</label>
            <el-select v-model="model.background" size="mini">
              <el-option :value="0" label="Background"></el-option>
              <el-option :value="1" label="Dim"></el-option>
              <el-option :value="2" label="Transparent"></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col span="6">
          <div class="form-group">
            <label for="">Window Position:</label>
            <el-select v-model="model.windowPosition" size="mini">
              <el-option :value="0" label="Top"></el-option>
              <el-option :value="1" label="Middle"></el-option>
              <el-option :value="2" label="Bottom"></el-option>
            </el-select>
          </div>

        </el-col>
      </el-row>

    </el-collapse-item>
  </el-collapse>
</template>

<script>
import Filters from "../../filters";
export default {
  mixins: [Filters],
  data() {
    return {
      model: {
        text: "",
        background: 0,
        windowPosition: 2
      }
    };
  }
};
</script>

<style scoped>
.command {
  background-color: #afcdfa;
  border-color: rgba(0, 0, 0, 0.5);
  color: #fff;
}
</style>
