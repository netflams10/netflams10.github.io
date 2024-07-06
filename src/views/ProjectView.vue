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
          :id="project.id"
          :image="project.image"
          :project_name="project.name"
          @view_modal="view_modal"
        />
      </div>
    </div>
  </main>
  <ProjectDetail
    v-if="this.data && this.show"
    :show="show"
    :data="data"
    @close_modal="close_modal"
  />
</template>

<script>
import { mapState } from "vuex";
import ProjectDetail from "@/components/uis/ProjectDetails.vue";
import Project from "@/components/uis/Project.vue";

export default {
  components: { Project, ProjectDetail },
  data() {
    return {
      show: false,
      data: null,
    };
  },
  mounted() {
    this.$store.dispatch("get_projects");
  },
  computed: mapState({
    projects: ({ project }) => project.projects,
  }),
  methods: {
    view_modal(id) {
      this.data = this.projects.find((item) => item.id === id);
      this.show = true;
    },
    close_modal() {
      this.data = null;
      this.show = false;
    },
  },
};
</script>

<style></style>
