<template>
  <main class="experience">
    <h1 class="stack-container--header">Work Experience</h1>

    <div class="experience-container">
      <div
        v-for="(work_experience, index) in work_experiences"
        :key="work_experience.id"
        class="experience-container-item"
        :class="{ 'slide-right': (index + 1) % 2 === 0 }"
      >
        <div class="experience-container-item-container">
          <div class="experience-container-item-container-header">
            <h4>{{ work_experience.name }}</h4>
            <h4>{{ work_experience.date }}</h4>
          </div>

          <p>{{ work_experience.position }}</p>

          <ul>
            <li v-for="jd in work_experience.jd" :key="jd.id">{{ jd.name }}</li>
          </ul>
        </div>
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
