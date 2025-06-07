<script>
export default {
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true },
    open: { type: Boolean, required: true },
  },
};
</script>

<template>
  <a
    :href="to"
    target="__blanc"
    class="flex items-center py-2.5 cursor-pointer rounded-md h-8"
    :class="{
      'hover:bg-[#37474f] px-3': open,
      'justify-center': !open,
    }"
  >
    <i
      class="text-2xl"
      :class="[
        icon,
        !open ? 'hover:text-[#37474f]' : '',
        'transition-all duration-200',
      ]"
    />
    <span
      v-if="open"
      class="text-sm transition-opacity duration-200 ease-in-out opacity-100 ml-4"
      :class="{ 'opacity-0': !open, 'opacity-100': open }"
      ><slot
    /></span>
  </a>
</template>
