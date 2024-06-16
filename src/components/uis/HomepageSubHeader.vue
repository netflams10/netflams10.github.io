<script>
import { mapState } from "vuex";

export default {
  created() {
    setTimeout(this.type_text, this.typing_speed);
  },
  computed: mapState({
    specializations: ({ role }) => role.specializations,
  }),
  watch: {
    specializations(value) {
      this.default_lists = value;
    },
  },
  data() {
    return {
      text: "", // text to display
      current_text: "", // current translated text
      current_index: 0, // default list array index
      default_lists: [],
      typing_speed: 300, // timeout speed
      checkers: false,
      max_text_len: 0, // current text length
      min_text_len: 0, // decreasing length
      typing_length: 0, // how much has been typed
    };
  },
  methods: {
    // setting current index
    set_current_index(index) {
      // if (index > this.default_lists.length) return;
      this.max_text_len = this.default_lists[index].name.length;
      this.min_text_len = this.default_lists[index].name.length;
      this.current_text = this.default_lists[index].name;
      this.typing_length = 0;
      this.current_index = index;
    },
    // typing the data
    text_typing() {
      if (this.max_text_len === this.typing_length) {
        // max text length reached [start decreasing]
        this.text = this.text.slice(0, -1);
        this.min_text_len -= 1;
      } else {
        // start increasing
        this.text += this.current_text.charAt(this.typing_length);
        this.typing_length += 1;
      }
    },
    // looping the array
    type_text() {
      if (this.default_lists.length) {
        if (
          this.current_index > this.default_lists.length - 1 ||
          !this.current_text
        ) {
          this.set_current_index(0);
        } else if (
          this.max_text_len === this.typing_length &&
          this.min_text_len === 0
        ) {
          if (this.current_index === this.default_lists.length - 1)
            this.set_current_index(0);
          else this.set_current_index(this.current_index + 1);
        } else {
          this.text_typing();
        }
      }

      setTimeout(this.type_text, this.typing_speed);
    },
  },
};
</script>

<template>
  <h2 class="header-section--sub-title">
    I design and develop
    <span class="header-section--typed-text">{{ text }}</span>
    <span class="cursor_display type_status">&nbsp;</span>
  </h2>
</template>
