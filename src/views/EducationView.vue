<template>
  <main class="education">
    <h1 class="stack-container--header">Education</h1>

    <div class="education-container">
      <div class="education-container--certicate">
        <div
          class="education-container--certicate-item"
          v-for="education in educations"
          :key="education.id"
        >
          <h4>{{ education.name }}</h4>
          <p>{{ education.graduation_year }}</p>
          <h4>{{ education.certificate }}</h4>
        </div>
      </div>

      <div class="education-container--skill">
        <div class="education-container--skill-badges">
          <h1 class="stack-container--header">Badges</h1>
          <Swiper
            :grab-cursor="true"
            :autoplay="{
              delay: 1000,
              disableOnInteraction: false,
            }"
          >
            <SwiperSlide v-for="badge in badges" :key="badge.id">
              <img :src="badge.image" :alt="badge.name" class="badge-img" />

              <a :href="badge.url" target="_blank">{{ badge.name }}</a>
            </SwiperSlide>
          </Swiper>
        </div>

        <div class="education-container--skill-badges-testimonial">
          <h1>Testimonials</h1>
          <div
            class="education-container--skill-badges-testimonial-item"
            v-for="testimonial in testimonials"
            :key="testimonial.id"
          >
            <!-- <pdf src="{{ testimonial.url }}"></pdf> -->
            <h4>{{ testimonial.name }}</h4>
            <Button
              title="View"
              @on_click="() => console.log(testimonial.url)"
            />
            <!-- {{ testimonial.url }} -->
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
import Button from "../components/elements/Button.vue";
// import pdf from "vue-pdf";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

export default {
  components: { Swiper, SwiperSlide, Button },
  modules: [],
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

<style lang="scss"></style>
