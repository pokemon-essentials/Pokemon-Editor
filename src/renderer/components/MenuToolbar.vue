<template>
    <div class="menu_toolbar">
      <button>
        <MapIcon @click="goto('landing')"></MapIcon>
      </button>
      <button>
        <MapIcon @click="goto('TilemapEditor')"></MapIcon>
      </button>
      <button>
        <CodeIcon @click="toggleProjectExplorer()"></CodeIcon>
      </button>
      <button>
        <DatabaseIcon @click="goto('EventEditor')"></DatabaseIcon>
      </button>
    </div>
</template>

<script>
import { MapIcon, CodeIcon, DatabaseIcon } from "vue-feather-icons";
import { EventBus } from "../EventBus";
export default {
  components: { MapIcon, CodeIcon, DatabaseIcon },
  methods: {
    toggleProjectExplorer() {
      EventBus.$emit("TOGGLE_PROJECT_EXPLORER");
    },
    goto(route) {
      this.$router.push({ name: route });
    }
  }
};
</script>


<style scoped>
.menu_toolbar {
  background-color: #232b2b;
  display: flex;
  flex-direction: column;
}

button {
  padding: 10px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.3);
  background-color: transparent;
  border: none;
  outline: none;
}
button:hover {
  color: white;
}
</style>

