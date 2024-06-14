<template>
  <main>
    <div class="">
      <h1>This is an Open Source</h1>
    </div>

    <div>
      <div v-for="oc in open_sources" :key="oc.id">
        <span></span>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";

export default {
  mounted() {
    this.$store.dispatch("get_open_source");
  },
  computed: mapState({
    open_sources: ({ os }) => os.open_sources,
  }),
};
</script>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
