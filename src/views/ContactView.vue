<template>
  <main class="contact-container">
    <h1 class="stack-container--header">Contact</h1>

    <div class="contact-content">
      <div class="contact-form">
        <form class="" @submit.prevent="handleSubmit">
          <label>Name</label>
          <input
            type="text"
            v-model="name"
            name="name"
            placeholder="Your Name"
          />
          <label>Email</label>
          <input
            type="email"
            v-model="email"
            name="email"
            placeholder="Your Email"
          />
          <label>Message</label>
          <textarea
            name="message"
            v-model="message"
            cols="30"
            rows="5"
            placeholder="Message"
          >
          </textarea>

          <input type="submit" value="Send" />
        </form>
      </div>

      <div class="contact-container-three">
        <div class="education-container--skill-badges"></div>
      </div>
    </div>
  </main>
</template>

<script>
import emailjs from "emailjs-com";
import Button from "../components/elements/Button.vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

export default {
  components: { Swiper, SwiperSlide, Button },
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    async handleSubmit(event) {
      event.preventDefault();
      try {
        await emailjs.send(
          process.env.MAIL_SERVICE_ID,
          process.env.MAIL_TEMPLATE_ID,
          {
            email: this.email,
            name: this.name,
            // subject: this.subject,
            text: this.message,
          },
          process.env.MAIL_USER_ID
        );

        this.$swal({
          title: "Success",
          text: "I will surely get back to you.",
          icon: "success",
          showCancelButton: false,
          confirmButtonColor: "#222222",
          // cancelButtonColor: "#d33",
          confirmButtonText: "Explore More",
        }).then((_result) => null);
      } catch (error) {
        console.log({ error });
      }

      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style lang="scss"></style>
