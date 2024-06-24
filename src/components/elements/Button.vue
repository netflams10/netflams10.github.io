<script>
export default {
  props: {
    title: { type: String, required: true },
    size: { type: String, required: false },
  },
  methods: {},
};
</script>

<template>
  <button
    type="button"
    :class="size === 'small' ? 'button-small' : 'button-large'"
    @click="$emit('on_click')"
  >
    {{ title }}
  </button>
</template>
