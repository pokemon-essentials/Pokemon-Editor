<template>
  <el-select v-model="model" filterable size="mini">
    <el-option
      v-for="pokemon in Editor.data.pokemon"
      :key="pokemon.species"
      :label="pokemon.species"
      :value="pokemon.species">
    </el-option>
  </el-select>
</template>


<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      model: {}
    };
  },
  computed: {
    ...mapState(["Editor"])
  }
};
</script>
