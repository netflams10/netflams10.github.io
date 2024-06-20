<script>
import Button from "../elements/Button.vue";
export default {
  props: {
    project_url: { type: String, required: false },
    image: { type: String, required: false },
    project_name: { type: String, required: false },
  },
  components: { Button },
  data() {
    return {};
  },
  methods: {
    viewmore(url) {
      console.log(url);
    },
  },
};
</script>

<template>
  <img :src="image" :alt="project_name" />

  <div class="description">
    <h3>{{ project_name }}</h3>
    <Button title="View More" :on_click="viewmore(project_url)" />
    <!-- <div>{{ project.url }}</div> -->
  </div>
</template>
