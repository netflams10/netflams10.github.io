<script>
import Modal from "./Modal.vue";

export default {
  components: { Modal },
  props: {
    show: { type: Boolean, default: false, required: true },
    data: { type: Object, default: false, required: true },
  },
  methods: {
    close_modal() {
      this.$emit("close_modal");
    },
  },
};
</script>

<template>
  <Modal :show="show" @close="close_modal"
    ><div class="project-detail--container">
      <img :src="data.image" />
      <div class="project-detail--container-container">
        <h3>{{ data?.name }}</h3>
        <div v-html="data.description" />
      </div>
      <div class="project-detail--container-container-footer">
        <div></div>
        <a :href="data?.url" target="__blanc">View Site</a>
      </div>
    </div>
  </Modal>
</template>
