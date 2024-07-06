<script>
import { ModalsContainer } from "vue-final-modal";

export default {
  components: { ModalsContainer },
  props: {
    show: { type: Boolean, required: true, default: false },
  },
  data() {
    return { open: false };
  },
  methods: {
    close() {
      this.$emit("close_modal");
    },
  },
  computed: {
    get_show() {
      return this.show;
    },
  },
};
</script>

<template>
  <div v-if="show" class="modal">
    <div class="modal-content">
      <slot name="header" /> <slot /> <slot name="footer" />
      <button @click="$emit('close')" class="modal-close">Close</button>
    </div>
    <div class="modal-overlay" @click="$emit('close')" />
  </div>
</template>
