<script>
import { computed } from "vue";
import { collapsed } from "./state";
import { useRoute } from "vue-router";

export default {
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true },
  },
  setup(props) {
    const route = useRoute();
    const is_active = computed(() => route.path === props.to);
    return { is_active, collapsed };
  },
};
</script>

<template>
  <router-link :to="to" class="flex py-[.9em] items-center cursor-pointer p-[.5em] h-[.5em] rounded-[.25em] hover:bg-[#455a64]" :class="{ active: is_active }">
    <i class="icon" :class="icon" />
    <transition name="fade" class="hidden md:block md:ml-2">
      <span v-if="!collapsed"><slot /></span>
    </transition>
  </router-link>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.link {

  /* padding: 0.5em;
  border-radius: 0.25em;
  height: 1.5em;

  color: white;
  text-decoration: none;

  margin-bottom: 5px;
  margin-top: 5px; */
}

.link:hover {
  background-color: var(--sidebar-item-hover);
}

.link.active {
  background-color: var(--sidebar-item-active);
}

.link .icon {
  flex-shrink: 0;
  width: 25px;
  margin-right: 10px;
}
</style>
