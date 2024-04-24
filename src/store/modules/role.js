import axios from "axios";
import axiosInstance from "../../utility/axiosInstance";
const roles = {
  state() {
    return {
      specializations: [],
      roles: [],
    };
  },
  mutations: {
    set_roles(state, payload) {
      state.specializations = payload;
    },
    set_operations(state, payload) {
      state.roles = payload;
    },
  },
  getters: {},
  actions: {
    async get_specializations({ commit }) {
      try {
        const response = await axiosInstance.get("");

        commit("set_roles", response.data?.specializations);
      } catch (error) {}
      // console.log("Action got here g", context, payload);
    },
    async get_operations({ commit }) {
      try {
        const response = await axiosInstance.get("");

        commit("set_operations", response.data?.["operations"]);
      } catch (error) {}
      // console.log("Action got here g", context, payload);
    },
  },
};

export default roles;
