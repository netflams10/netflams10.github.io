<template>
  <div class="w-[100vw] h-[100vh] overflow-hidden grid grid-cols-1 md:grid-cols-[15rem,1fr] justify-items-center relative">
    <SideBarNew />
    <div class="w-full overflow-y-auto overflow-x-hidden bg-[#222222] md:border-l">
      <RouterView />
    </div>
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
</style>
