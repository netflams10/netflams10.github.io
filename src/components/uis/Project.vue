<script>
import Button from "../elements/Button.vue";

export default {
  props: {
    id: { type: Number, required: false },
    image: { type: String, required: false },
    project_name: { type: String, required: false },
  },
  components: { Button },
  methods: {
    send_id(id) {
      if (id) this.$emit("view_modal", id);
      console.log("Love her", id);
      // this.$emit("view_more");
    },
  },
};
</script>

<template>
  <img :src="image" :alt="project_name" />

  <div class="description">
    <h3>{{ project_name }}</h3>
    <Button title="View More" @on_click="this.$emit('view_modal', id)" />
  </div>
</template>
