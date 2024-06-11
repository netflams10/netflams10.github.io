<template>
  <SideBarNew />
  <div :style="{ 'margin-left': sidebar_width }" class="">
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

<style lang="scss">
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
</style>
