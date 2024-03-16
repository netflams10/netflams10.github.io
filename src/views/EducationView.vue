<template>
  <main>
    <div class="">
      <h1>Badges</h1>
      <div v-for="badge in badges" :key="badge.id">
        {{ badge.name }} {{ badge.course }} {{ badge.image }} {{ badge.url }}
      </div>
    </div>
    <div class="">
      <h1>Testimonials</h1>
      <div v-for="testimonial in testimonials" :key="testimonial.id">
        {{ testimonial.name }}
        {{ testimonial.url }}
      </div>
    </div>
    <div>
      <h1>Education</h1>
      <div v-for="education in educations" :key="education.id">
        {{ education.name }} {{ education.graduation_year }}
        {{ education.start_year }} {{ education.certificate }}
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("get_badges");
    this.$store.dispatch("get_testimonials");
    this.$store.dispatch("get_educations");
  },
  computed: mapState({
    testimonials: ({ education }) => education.testimonials,
    badges: ({ education }) => education.badges,
    educations: ({ education }) => education.educations,
  }),
};
</script>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
