import axios from "axios";

const roles = {
  state() {
    return {
      roles: [],
      backend_jd: [],
      frontend_jd: [],
      devops_jd: [],
    };
  },
  mutations: {
    set_roles(state, payload) {
      state.roles = payload;
    },
    set_frontend_jd(state, payload) {
      state.frontend_jd = payload;
    },
    set_backend_jd(state, payload) {
      state.backend_jd = payload;
    },
    set_devops_jd(state, payload) {
      state.devops_jd = payload;
    },
  },
  getters: {},
  actions: {
    async get_roles({ commit }) {
      try {
        const response = await axios.get("http://localhost:3000/roles");

        commit("set_roles", response.data);
      } catch (error) {}
      // console.log("Action got here g", context, payload);
    },
    async get_frontend_jd({ commit }) {
      try {
        const response = await axios.get("http://localhost:3000/frontend-jd");

        commit("set_frontend_jd", response.data);
      } catch (error) {}
      // console.log("Action got here g", context, payload);
    },
    async get_backend_jd({ commit }) {
      try {
        const response = await axios.get("http://localhost:3000/backend-jd");

        commit("set_backend_jd", response.data);
      } catch (error) {}
      // console.log("Action got here g", context, payload);
    },
    async get_devops_jd({ commit }) {
      try {
        const response = await axios.get("http://localhost:3000/devops-jd");

        commit("set_devops_jd", response.data);
      } catch (error) {}
      // console.log("Action got here g", context, payload);
    },
  },
};

export default roles;
