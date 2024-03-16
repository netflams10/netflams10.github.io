<template>
  <main>
    <section>
      <h2>
        Hi my name is
        <span class="typed-text">{{ type_value }}</span>
        <span class="cursor_display" :class="{ typing: type_status }"
          >&nbsp;</span
        >
      </h2>
      <h3>
        I design and develop
        <span class="typed-text" v-for="role in roles" :key="role._id">{{
          role.name
        }}</span>
        <span class="cursor">&nbsp;</span>
      </h3>

      <h4>Could you browse through to see more...</h4>
    </section>

    <section>
      <h2>Backend Developer</h2>
      <div>
        <ul>
          <li v-for="jd in backend" :key="jd._id">{{ jd.name }}</li>
        </ul>
      </div>
    </section>

    <section>
      <h2>FrontEnd Developer</h2>
      <div>
        <ul>
          <li v-for="jd in frontend" :key="jd._id">{{ jd.name }}</li>
        </ul>
      </div>
    </section>

    <section>
      <h2>Intern DevOps</h2>
      <div>
        <ul>
          <li v-for="jd in frontend" :key="jd._id">{{ jd.name }}</li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => {
    return {
      type_value: "",
      type_status: false,
      type_array: ["opeyemi", "Isaiah", "opeyemi Isaiah"],
      typing_speed: 200,
      erasing_speed: 100,
      new_text_delay: 2000,
      type_array_index: 0,
      char_index: 0,
    };
  },
  mounted() {
    this.$store.dispatch("get_roles");
    this.$store.dispatch("get_frontend_jd");
    this.$store.dispatch("get_backend_jd");
    this.$store.dispatch("get_devops_jd");
  },
  computed: mapState({
    roles: ({ role }) => role.roles,
    backend: ({ role }) => role.backend_jd,
    frontend: ({ role }) => role.frontend_jd,
    devops: ({ role }) => role.devops_jd,
  }),
  methods: {
    type_text() {
      if (this.char_index < this.type_array[this.type_array_index].length) {
        if (!this.type_status) this.type_status = true;
        this.type_value += this.type_array[this.type_array_index].charAt(
          this.char_index
        );
        this.char_index += 1;
        setTimeout(this.type_text, this.typing_speed);
      } else {
        this.type_status = false;
        setTimeout(this.erase_text, this.new_text_delay);
      }
    },
    erase_text() {
      if (this.char_index > 0) {
        if (!this.type_status) this.type_status = true;

        this.type_value = this.type_array[this.type_array_index].substring(
          0,
          this.char_index - 1
        );
        this.char_index -= 1;

        setTimeout(this.erase_text, this.erasing_speed);
      } else {
        this.type_status = false;
        this.type_array_index += 1;
        if (this.type_array_index > this.type_array.length)
          this.type_array_index = 0;
        setTimeout(this.type_text, this.typing_speed);
      }
    },
  },
  created() {
    setTimeout(this.type_text, this.new_text_delay + 200);
  },
};
</script>

<style lang="scss" scoped>
h3 {
  font-size: 1.5rem;
  font-weight: normal;
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
