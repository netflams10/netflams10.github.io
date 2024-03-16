<template>
  <main>
    <section>
      <h2>Hi my name is Opeyemi</h2>
      <h4>
        I design and develop
        <span v-for="role in roles" :key="role._id">{{ role.name }}</span>
      </h4>
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
};
</script>
