<script>
export default {
  props: {
    title: { type: String, required: true },
    size: { type: String, required: false },
  },
};
</script>

<template>
  <button
    type="button"
    class="button"
    :class="size === 'small' ? 'button-small' : 'button-large'"
    @click="this.$emit('on_click')"
  >
    {{ title }}
  </button>
</template>
