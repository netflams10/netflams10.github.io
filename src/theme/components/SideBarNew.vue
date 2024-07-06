<script>
import avatar from "../../assets/images/my_image/cartoon.jpeg";
import SideBarLinkVue from "./SideBarLink.vue";
import SideBarSocialLink from "./SideBarSocialLink.vue";
import { collapsed, toggle_sidebar, sidebar_width } from "./state";

export default {
  props: {},
  components: { SideBarLinkVue, SideBarSocialLink },
  setup() {
    return { collapsed, sidebar_width, toggle_sidebar };
  },
};
</script>

<template>
  <div class="sidebar" :style="{ width: sidebar_width }">
    <div class="sidebar-header">
      <span v-if="collapsed">
        <h1>O</h1>
      </span>
      <span v-else>
        <div>
          <img
            src="/assets/images/my_image/ope.jpeg"
            alt="My Very own face"
            class=""
          />
        </div>
      </span>
    </div>

    <div class="sidebar--nav-list">
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
        >Work Experience</SideBarLinkVue
      >
    </div>

    <!-- Social links -->
    <div class="sidebar--nav-list">
      <SideBarSocialLink
        to="https://github.com/netflams10"
        icon="fa-brands fa-github"
      >
        Github
      </SideBarSocialLink>

      <SideBarSocialLink
        to="https://www.linkedin.com/in/opeyemi-amusan-b0a2a8152/"
        icon="fa-brands fa-linkedin"
      >
        LinkedIn
      </SideBarSocialLink>

      <SideBarSocialLink
        to="https://x.com/segunflams?s=09"
        icon="fa-brands fa-square-twitter"
      >
        Twitter
      </SideBarSocialLink>
    </div>
    <!-- End Social links -->

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
  z-index: 99;
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

img {
  width: 70px;
  height: 70px;
  border-radius: 100%;
  border: 1px solid var(--sidebar-item-hover-href);
}

.sidebar-header {
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  margin-top: 0.8em;
  margin-bottom: 0.8em;
}

.sidebar--nav-list {
  margin: 1em 0;
}
</style>
