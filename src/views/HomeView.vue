<script>
import { mapState } from "vuex";
import HomepageSubHeader from "../components/uis/HomepageSubHeader.vue";
import Carousel from "../components/uis/Carousel.vue";

export default {
  components: { Carousel, HomepageSubHeader },
  data: () => {
    return {
      type_value: "",
      type_status: false,
      type_array: "Opeyemi Isaiah.",
      typing_speed: 200,
      char_index: 0,
    };
  },
  mounted() {
    this.$store.dispatch("get_specializations");
    this.$store.dispatch("get_operations");
  },
  computed: mapState({
    specializations: ({ role }) => role.specializations,
  }),
  methods: {
    type_text() {
      if (this.char_index < this.type_array.length) {
        if (!this.type_status) this.type_status = true;
        this.type_value += this.type_array.charAt(this.char_index);
        this.char_index++;
        setTimeout(this.type_text, 200);
      } else {
        this.type_status = false;
      }
    },
    // flip_box() {
    //   const titles = gsap.utils.toArray("p");
    //   const tl = gsap.timeline();

    //   titles.forEach((title) => {
    //     const splitTitle = new SplitTextJS(title);
    //   });
    // },
  },
  created() {
    setTimeout(this.type_text, 200);
    // setTimeout(this.flip_box, 2000);
  },
};
</script>

<template>
  <main class="main-container">
    <section class="header-section">
      <h2 class="header-section--title">
        <span><i class="fa-solid fa-arrow-right-long" /></span>
        Hi, my name is
        <span class="header-section--typed-text">{{ type_value }}</span>
        <span
          v-show="type_status"
          class="cursor_display"
          :class="{ typing: type_status }"
          >&nbsp;</span
        >
      </h2>

      <!-- <h2 class="header-section--sub-title">
        I design and develop
        <span
          class="header-section--typed-text"
          v-for="specialization in specializations"
          :key="specialization._id"
          >{{ specialization.name }}</span
        >
        <span class="cursor">&nbsp;</span>
      </h2> -->

      <HomepageSubHeader />

      <h2 class="header-section--note">
        Could you browse through to see more...
      </h2>
    </section>

    <section class="role-section">
      <h2 class="role-section--header">Roles</h2>

      <div class="role-section--carousel-container">
        <Carousel />
      </div>
    </section>
  </main>
</template>

<style>
/* // h3 {
//   font-size: 1.5rem;
//   font-weight: normal;
// }

// span.cursor_display.typing {
//   animation: none;
// }

// @keyframes cursorBlink {
//   25% {
//     background-color: #fff;
//   }
//   50% {
//     background-color: transparent;
//   }
//   75% {
//     background-color: #964b00;
//   }
//   100% {
//     background-color: transparent;
//   }
// } */
</style>
