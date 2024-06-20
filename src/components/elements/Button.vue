<script>
export default {
  props: {
    title: { type: String, required: true },
    size: { type: String, required: false },
    on_click: { type: Function, required: true },
  },
};
</script>

<template>
  <button
    type="button"
    :class="size === 'small' ? 'button-small' : 'button-large'"
    @onclick="on_click"
  >
    {{ title }}
  </button>
</template>
