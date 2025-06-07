<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true },
    open: { type: Boolean, required: true },
  },
  setup(props) {
    const route = useRoute();
    const is_active = computed(() => route.path === props.to);
    return { is_active };
  },
};
</script>

<template>
  <router-link
    :to="to"
    class="mx-2 md:flex md:items-center md:py-2.5 cursor-pointer md:rounded-md md:h-8"
    :class="{
      'bg-[#263238]': is_active,
      'hover:bg-[#37474f] px-3': open,
      'md:justify-center': !open,
    }"
  >
    <i
      class="md:text-2xl"
      :class="[
        icon,
        !open ? 'hover:text-[#37474f]' : '',
        'transition-all duration-200',
      ]"
    />
    <span
      v-if="open"
      class="hidden md:block md:text-sm md:transition-opacity md:duration-200 md:ease-in-out md:opacity-100"
      :class="{ 'md:opacity-0': !open, 'md:opacity-100 md:ml-4': open }"
      ><slot
    /></span>
  </router-link>
</template>
