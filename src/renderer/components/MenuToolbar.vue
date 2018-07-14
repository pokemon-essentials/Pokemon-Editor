<template>
    <div class="menu_toolbar">
      <button>
        <MapIcon @click="toggleProjectExplorer()"></MapIcon>
      </button>
      <button>
        <CodeIcon @click="toggleProjectExplorer()"></CodeIcon>
      </button>
      <button>
        <DatabaseIcon @click="toggleProjectExplorer()"></DatabaseIcon>
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

