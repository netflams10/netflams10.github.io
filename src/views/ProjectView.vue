<template>
  <main>
    <div class="">
      <h1>Project</h1>
    </div>
    <div>
      <div v-for="project in projects" :key="project.id">
        <div>
          <h3>{{ project.name }}</h3>
          <div>{{ project.url }}</div>
        </div>
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
};
</script>

<style>
/* @media (min-width: 1024px) {
  .about {
    max-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
