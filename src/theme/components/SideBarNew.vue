<script>
import SideBarLinkVue from "./SideBarLink.vue";
import { collapsed, toggle_sidebar, sidebar_width } from "./state";

export default {
  props: {},
  components: { SideBarLinkVue },
  setup() {
    return { collapsed, sidebar_width, toggle_sidebar };
  },
};
</script>

<template>
  <div class="sidebar" :style="{ width: sidebar_width }">
    <h1>
      <span v-if="collapsed">
        <div>O</div>
      </span>
      <span v-else>
        <div>I</div>
      </span>
    </h1>

    <SideBarLinkVue to="/" icon="fas fa-home">Home</SideBarLinkVue>
    <SideBarLinkVue to="/projects" icon="fa-solid fa-diagram-project"
      >Project</SideBarLinkVue
    >
    <SideBarLinkVue to="/articles" icon="fa-regular fa-newspaper"
      >Articles</SideBarLinkVue
    >
    <SideBarLinkVue to="/stacks" icon="fa-solid fa-layer-group"
      >Stacks</SideBarLinkVue
    >
    <SideBarLinkVue to="/open-source" icon="fa-brands fa-osi"
      >Open Source</SideBarLinkVue
    >
    <SideBarLinkVue to="/education" icon="fa-solid fa-graduation-cap"
      >Education</SideBarLinkVue
    >
    <SideBarLinkVue to="/work-experience" icon="fa-solid fa-briefcase"
      >Education</SideBarLinkVue
    >

    <!-- <i class=""></i> -->

    <span
      class="collapse-icon"
      @click="toggle_sidebar"
      :class="{ 'rotate-180': collapsed }"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 100000;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
