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
  <div
    class="md:w-full border md:border-none bg-[#d3d3d3] md:bg-[#222222] z-50 md:z-0 absolute md:relative h-[7vh] md:h-full overflow-hidden flex md:block px-4 md:px-0 items-center rounded-md md:rounded-none top-3 md:top-0 shadow-lg md:shadow-none"
  >
    <div
      class="md:my-5 md:grid md:justify-items-center rounded-full md:rounded-none overflow-hidden mr-5 md:mr-0 shadow-md md:shadow-none"
    >
      <div class="border-2 border-white rounded-full p-1">
        <img
          src="/assets/images/my_image/ope.jpeg"
          alt="My Very own face"
          class="h-[4vh] w-[4vh] md:h-[8em] md:w-[8em] md:shadow-lg rounded-full"
        />
      </div>
    </div>

    <div class="m-[1em] flex md:block">
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
        >Experience</SideBarLinkVue
      >
      <SideBarLinkVue to="/contact" icon="fa-solid fa-envelope"
        >Contact</SideBarLinkVue
      >
    </div>

    <!-- Social links -->
    <div class="hidden md:m-[1em] md:block">
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

    <!-- <span
      class="collapse-icon hidden md:block"
      @click="toggle_sidebar"
      :class="{ 'rotate-180': collapsed }"
    > -->
    <span
      class="collapse-icon hidden md:flex md:absolute bottom-0 p-[.75em] right-0"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<style scoped>
/* .sidebar {
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
}*/
</style>
