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
        <Project
          :image="project.image"
          :project_name="project.name"
          :project_url="project.url"
        />
        <!-- <img :src="project.image" :alt="project.name" /> -->
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
import Project from "@/components/uis/Project.vue";

export default {
  components: { Project },
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
