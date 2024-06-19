<template>
  <main class="project--container">
    <div class="">
      <h1>Project</h1>
    </div>

    <div class="projext--container-list">
      <div
        v-for="project in projects"
        :key="project.id"
        class="projext--container-list-item"
      >
        <img :src="project.image" :alt="project.name" />
        <!-- <div>
          <h3>{{ project.name }}</h3>
          <div>{{ project.url }}</div>
        </div> -->
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";

export default {
  mounted() {
    this.$store.dispatch("get_projects");
  },
  computed: mapState({
    projects: ({ project }) => project.projects,
  }),
  watch() {},
};
</script>

<style></style>
