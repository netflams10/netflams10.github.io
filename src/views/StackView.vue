<template>
  <main class="stack-container">
    <h1 class="stack-container--header">Stacks</h1>

    <!-- loops for stacks -->
    <div class="stack-container--stack-container">
      <div class="stack-container--stack-container-liner" />
      <div
        class="stack-container--container"
        v-for="(stack, index) in stacks"
        :key="stack.id"
        :class="{ ' stack-right': (index + 1) % 2 === 0 }"
      >
        <div class="stack-container--stack">
          <div class="stack-container--stack-header">
            <img :src="stack.image" />
            <h4>{{ stack.name }}</h4>
          </div>
          <div
            v-for="lib in stack.children"
            :key="lib.id"
            class="stack-container--stack-description"
          >
            <h4>{{ lib.name }}</h4>

            <VueJsProgress
              :percentage="lib.percent"
              :height="20"
              :delay="600"
              :animation="true"
              bg="#455a64"
              color="white"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
import VueJsProgress from "vue-js-progress";

export default {
  components: { VueJsProgress },
  mounted() {
    this.$store.dispatch("get_stacks");
  },
  computed: mapState({
    stacks: ({ stack }) => stack.stacks,
  }),
};
</script>

<style></style>
