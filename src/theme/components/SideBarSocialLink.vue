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
  <div class="hover:bg-[#37474f] flex items-center cursor-pointer p-[.5em] rounded-[.25em] h-[1.5em] my-[.5em]" :class="{'bg-[263238]' : is_active}">
    <a :href="to" target="__blanc" class="">
      <i class="icon" :class="icon" />
      <transition name="fade">
        <span v-if="!collapsed" class="text-[1em]"><slot /></span>
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
.link a .icon {
  flex-shrink: 0;
  width: 35px;
  margin-right: 10px;
}

</style>
