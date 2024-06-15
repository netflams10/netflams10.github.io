<script>
import { mapState } from "vuex";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  components: { Carousel, Slide, Pagination, Navigation },
  props: {},
  data() {
    return { slide: ["Lakwe", "Jamaica", "Holland", "Nairobi"] };
  },
  computed: mapState({
    roles: ({ role }) => {
      return role.roles;
    },
  }),
};
</script>

<template>
  <carousel :items-to-show="1" class="carousel-container">
    <slide
      v-for="(role, index) in roles"
      :key="index"
      :wrap-around="true"
      :transition="400"
      :autoplay="200"
      slide-width="100%"
      class="carousel-container-slide"
    >
      <div class="carousel-header">
        <img :src="role.image" :alt="role.name" />
        <h2>{{ role.name }}</h2>
      </div>

      <div class="carousel-body">
        <ul v-for="jd in role.roles" :key="jd._id">
          <li><i class="fa-solid fa-arrow-right-long" />{{ jd.name }}</li>
        </ul>
      </div>
    </slide>

    <template #addons>
      <Pagination />
      <!-- <Navigation /> -->
    </template>
  </carousel>
</template>
