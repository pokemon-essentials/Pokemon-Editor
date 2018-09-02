<template>
  <div class="layers_panel">
    <div v-for="layer in TileEditor.map.layers" :key="layer.name" >
{{layer.name}}
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
import { EventBus } from "../../EventBus";
export default {
  computed: {
    ...mapState(["TileEditor"])
  }
};
</script>



<style>
.layers_panel {
  background-color: #3b444b;
}
</style>
