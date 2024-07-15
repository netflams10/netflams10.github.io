<template>
  <div class="mobile_not_present" v-if="is_mobile">
    Currently, there is no design available for smaller screens. I kindly ask
    for your understanding as my expertise is primarily in backend
    development😏🥲.
  </div>
  <Theme v-else />
</template>

<script>
import Theme from "./theme/Theme.vue";

export default {
  components: { Theme },
  data() {
    return { is_mobile: false };
  },
  created() {
    const check =
      /Andoird|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth <= 768;
    this.is_mobile = check;
  },
};
</script>
