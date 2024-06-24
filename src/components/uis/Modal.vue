<script>
import { ModalsContainer } from "vue-final-modal";

export default {
  components: { ModalsContainer },
  props: {
    show: { type: Boolean, required: true },
    title: { type: String, required: true },
  },
  data() {
    return { open: false };
  },
  methods: {
    confirm_modal() {
      this.open = false;
      $emit("confirm_modal");
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
  <ModalsContainer
    v-model="get_show"
    :title="title"
    @confirm="() => confirm_modal()"
  >
    <slot></slot
  ></ModalsContainer>
</template>
