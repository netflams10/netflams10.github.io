<template>
  <main class="experience">
    <h1 class="stack-container--header">Work Experience</h1>

    <div class="">
      <div
        v-for="work_experience in work_experiences"
        :key="work_experience.id"
      >
        {{ work_experience.name }} {{ work_experience.date }}
        {{ work_experience.position }}
        <ul>
          <li v-for="jd in work_experience.jd" :key="jd.id">{{ jd.name }}</li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("get_work_experiences");
  },
  computed: mapState({
    work_experiences: ({ work_experience }) => work_experience.work_experiences,
  }),
};
</script>

<style></style>
