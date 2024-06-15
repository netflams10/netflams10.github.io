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
  --sidebar-bg-color: #222222;
  --sidebar-item-hover: #455a64;
  --sidebar-item-active: #263238;
  --sidebar-item-hover-href: #37474f;

  --sidebar-item-text: #ffffff;
}

.container {
  border: 0.5px solid var(--sidebar-item-hover);

  transition: 0.3s ease;

  height: 100vh;
  overflow: hidden;
  width: "100%";

  background-color: var(--sidebar-bg-color);
}
</style>
