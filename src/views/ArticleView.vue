<template>
  <main>
    <div class="">
      <h1>This is an Open Article</h1>
    </div>

    <div>
      <div v-for="article in articles" :key="article.id">
        <span>Articles</span>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("get_articles");
  },
  computed: mapState({
    articles: ({ article }) => article.articles,
  }),
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
