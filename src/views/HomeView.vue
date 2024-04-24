<template>
  <main>
    <section>
      <h2>
        Hi my name is
        <span class="typed-text">{{ type_value }}</span>
        <span
          v-show="type_status"
          class="cursor_display"
          :class="{ typing: type_status }"
          >&nbsp;</span
        >
      </h2>
      <h3>
        I design and develop
        <span
          class="typed-text"
          v-for="specialization in specializations"
          :key="specialization._id"
          >{{ specialization.name }}</span
        >
        <span class="cursor">&nbsp;</span>
      </h3>

      <h4>Could you browse through to see more...</h4>
    </section>

    <section class="jd-container">
      <article class="jd-wrapper">
        <h2>Roles</h2>
        <div v-for="role in roles" :key="role._id" class="roles_container">
          <img :src="role.image" alt="role.name" class="modal_pagination" />
          <span>{{ role.name }}</span>
          <div v-for="task in role.roles" :key="task._id">
            <span>{{ task.name }}</span>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
import { mapState } from "vuex";
import gsap from "gsap";
import SplitTextJS from "split-text-js";

export default {
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
    roles: ({ role }) => role.roles,
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
    flip_box() {
      const titles = gsap.utils.toArray("p");
      const tl = gsap.timeline();

      titles.forEach((title) => {
        const splitTitle = new SplitTextJS(title);
      });
    },
  },
  created() {
    setTimeout(this.type_text, 200);
    setTimeout(this.flip_box, 2000);
  },
};
</script>

<style lang="scss" scoped>
h3 {
  font-size: 1.5rem;
  font-weight: normal;
}

.jd-container {
  .jd-wrapper {
    .modal_pagination {
      width: 40px;
      height: 30px;
    }
  }
}

h2 {
  font-size: 2rem;
  font-weight: normal;

  span.typed-text {
    color: #964b00;
  }

  span.cursor_display {
    display: inline-block;
    margin-left: 3px;
    width: 4px;
    background-color: #fff;
    animation: cursorBlink 1s infinite;
  }

  span.cursor_display.typing {
    animation: none;
  }
}

@keyframes cursorBlink {
  25% {
    background-color: #fff;
  }
  50% {
    background-color: transparent;
  }
  75% {
    background-color: #964b00;
  }
  100% {
    background-color: transparent;
  }
}
</style>
