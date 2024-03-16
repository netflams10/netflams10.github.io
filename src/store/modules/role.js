import axios from "axios";
import axiosInstance from "../../utility/axiosInstance";
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
        const response = await axiosInstance.get("");

        commit("set_roles", response.data?.roles);
      } catch (error) {}
      // console.log("Action got here g", context, payload);
    },
    async get_frontend_jd({ commit }) {
      try {
        const response = await axiosInstance.get("");

        commit("set_frontend_jd", response.data?.["frontend-jd"]);
      } catch (error) {}
      // console.log("Action got here g", context, payload);
    },
    async get_backend_jd({ commit }) {
      try {
        const response = await axiosInstance.get("");

        commit("set_backend_jd", response.data?.["backend-jd"]);
      } catch (error) {}
      // console.log("Action got here g", context, payload);
    },
    async get_devops_jd({ commit }) {
      try {
        const response = await axiosInstance.get("");

        commit("set_devops_jd", response.data?.["devops-jd"]);
      } catch (error) {}
      // console.log("Action got here g", context, payload);
    },
  },
};

export default roles;
