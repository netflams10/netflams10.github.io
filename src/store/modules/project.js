import axiosInstance from "@/utility/axiosInstance";

const project = {
  state() {
    return {
      projects: [],
    };
  },
  mutations: {
    set_projects(state, payload) {
      state.projects = payload;
    },
  },
  getters: {},
  actions: {
    async get_projects({ commit }) {
      try {
        const response = await axiosInstance.get("");

        commit("set_projects", response.data?.projects);
      } catch (error) {}
      // console.log("Action got here g", context, payload);
    },
  },
};

export default project;
