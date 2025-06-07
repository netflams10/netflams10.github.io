<script>
import avatar from "../../assets/images/my_image/cartoon.jpeg";
import SideBarLinkVue from "./SideBarLink.vue";
import SideBarSocialLink from "./SideBarSocialLink.vue";

export default {
  props: {
    open: { type: Boolean, required: true },
  },
  components: { SideBarLinkVue, SideBarSocialLink },
  setup() {
    return {};
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
          class="md:shadow-lg rounded-full"
          :class="{
            'h-[4vh] w-[4vh] md:h-[8em] md:w-[8em]': open,
            'h-[1.5vh] w-[1.5vh] md:h-[3em] md:w-[3em]': !open,
          }"
        />
      </div>
    </div>

    <div class="m-[1em] flex md:grid">
      <SideBarLinkVue to="/" icon="fas fa-home" :open="open"
        >Home</SideBarLinkVue
      >
      <SideBarLinkVue
        to="/projects"
        icon="fa-solid fa-diagram-project"
        :open="open"
        >Project</SideBarLinkVue
      >
      <SideBarLinkVue to="/articles" icon="fa-regular fa-newspaper" :open="open"
        >Articles</SideBarLinkVue
      >
      <SideBarLinkVue to="/stacks" icon="fa-solid fa-layer-group" :open="open"
        >Stacks</SideBarLinkVue
      >
      <SideBarLinkVue to="/open-source" icon="fa-brands fa-osi" :open="open"
        >Open Source</SideBarLinkVue
      >
      <SideBarLinkVue
        to="/education"
        icon="fa-solid fa-graduation-cap"
        :open="open"
        >Education</SideBarLinkVue
      >
      <SideBarLinkVue
        to="/work-experience"
        icon="fa-solid fa-briefcase"
        :open="open"
        >Experience</SideBarLinkVue
      >
      <SideBarLinkVue to="/contact" icon="fa-solid fa-envelope" :open="open"
        >Contact</SideBarLinkVue
      >
    </div>

    <!-- Social links -->
    <div class="hidden md:m-[1em] md:block">
      <SideBarSocialLink
        to="https://github.com/netflams10"
        icon="fa-brands fa-github"
        :open="open"
        >Github
      </SideBarSocialLink>

      <SideBarSocialLink
        to="https://www.linkedin.com/in/opeyemi-amusan-b0a2a8152/"
        icon="fa-brands fa-linkedin"
        :open="open"
        >LinkedIn
      </SideBarSocialLink>

      <SideBarSocialLink
        to="https://x.com/segunflams?s=09"
        icon="fa-brands fa-square-twitter"
        :open="open"
        >Twitter
      </SideBarSocialLink>
    </div>

    <span
      @click="$emit('toggle-collapse')"
      class="collapse-icon hidden md:flex md:absolute bottom-0 p-[.75em] right-0 cursor-pointer"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<style scoped></style>
