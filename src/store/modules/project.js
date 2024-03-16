import axios from "axios";

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
        const response = await axios.get("http://localhost:3000/projects");

        commit("set_projects", response.data);
      } catch (error) {}
      // console.log("Action got here g", context, payload);
    },
  },
};

export default project;
