<template>
  <main class="container">
    <div class="">
      <h1>Badges</h1>
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

    <div class="">
      <h1>Testimonials</h1>
      <div v-for="testimonial in testimonials" :key="testimonial.id">
        <!-- <pdf src="{{ testimonial.url }}"></pdf> -->
        {{ testimonial.name }}
        <!-- {{ testimonial.url }} -->
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
// import pdf from "vue-pdf";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

export default {
  components: { Swiper, SwiperSlide },
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

<style lang="scss">
.container {
  width: 100%;
  .swiper {
    width: 150px;
    height: 200px;
    overflow: hidden;

    .badge-img {
      width: 120px;
      height: 120px;
    }

    div {
      width: "100%";
      text-align: center;

      a {
        color: white;
        width: "100%";
        font-size: 10px;
      }
    }
  }
}
</style>
