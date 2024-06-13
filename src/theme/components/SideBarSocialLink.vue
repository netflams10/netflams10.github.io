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
  <div class="link">
    <a :href="to" target="__blanc">
      <i class="icon" :class="icon" />
      <transition name="fade">
        <span v-if="!collapsed" class="icon-text"><slot /></span>
      </transition>
    </a>
  </div>
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
  display: flex;
  align-items: center;

  cursor: pointer;
  padding: 0.4em;
  /* padding-top: 0.5em;
  padding-bottom: 0.5em; */
  border-radius: 0.25em;
  height: 1.5em;

  color: white;
  text-decoration: none;
  margin-bottom: 5px;
  margin-top: 5px;
}

.link:hover {
  background-color: var(--sidebar-item-hover-href);
}

.link.active {
  background-color: var(--sidebar-item-active);
}

a {
  text-decoration: none;
  color: var(--sidebar-item-text);
}
.link a .icon {
  flex-shrink: 0;
  width: 35px;
  margin-right: 10px;
}

.icon-text {
  font-size: 1em;
}
</style>
