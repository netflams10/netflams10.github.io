<template>
  <main>
    <div class="">
      <h1>Stacks</h1>
      <div v-for="stack in stacks" :key="stack.id">
        <div>{{ stack.name }} {{ stack.image }}</div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";

export default {
  mounted() {
    this.$store.dispatch("get_stacks");
  },
  computed: mapState({
    stacks: ({ stack }) => stack.stacks,
  }),
};
</script>

<style></style>
