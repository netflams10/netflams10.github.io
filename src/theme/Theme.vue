<template>
  <SideBarNew />
  <div :style="{ 'margin-left': sidebar_width }" class="container">
    <RouterView />
  </div>
</template>

<script>
import { sidebar_width } from "./components/state";
import SideBarNew from "./components/SideBarNew.vue";

export default {
  components: { SideBarNew },
  setup() {
    return { sidebar_width };
  },
};
</script>

<style>
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}

.container {
  border: 0.5px solid red;

  transition: 0.3s ease;

  height: 100vh;
  overflow: hidden;
  width: "100%";
}
</style>
