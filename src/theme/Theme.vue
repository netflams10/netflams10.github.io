<template>
  <div
    class="w-[100vw] h-[100vh] overflow-hidden grid justify-items-center relative grid-cols-1"
    :class="{
      'md:grid-cols-[5rem,1fr]': !open,
      'md:grid-cols-[15rem,1fr]': open,
    }"
  >
    <!-- grid-cols-1 md:grid-cols-[15rem,1fr] -->
    <SideBarNew :open="open" @toggle-collapse="toggleSideBar" />
    <div
      class="w-full overflow-y-auto overflow-x-hidden bg-[#222222] md:border-l"
    >
      <RouterView />
    </div>
  </div>
</template>

<script>
import { sidebar_width } from "./components/state";
import SideBarNew from "./components/SideBarNew.vue";
import { ref } from "vue";

export default {
  components: { SideBarNew },
  setup() {
    const open = ref(false);
    const toggleSideBar = () => (open.value = !open.value);
    // console.log(first)
    return { open, sidebar_width, toggleSideBar };
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
