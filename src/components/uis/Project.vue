<script>
import Button from "../elements/Button.vue";
import Modal from "./Modal.vue";
export default {
  props: {
    project_url: { type: String, required: false },
    image: { type: String, required: false },
    project_name: { type: String, required: false },
  },
  components: { Button, Modal },
  data() {
    return {
      show: true,
    };
  },
  methods: {
    viewmore(url) {
      console.log(url);
      this.show = true;
    },
    click_confirm_modal() {
      console.log(this.show);
      this.show = false;
    },
  },
};
</script>

<template>
  <img :src="image" :alt="project_name" />

  <div class="description">
    <h3>{{ project_name }}</h3>
    <Button title="View More" @on_click="viewmore(project_url)" />
    <!-- <div>{{ project.url }}</div> -->
  </div>

  <Modal
    :show="show"
    :title="project_name"
    @confirm_modal="() => click_confirm_modal()"
  />
</template>
