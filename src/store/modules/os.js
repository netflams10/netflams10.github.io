import axiosInstance from "@/utility/axiosInstance";

const os = {
  state() {
    return {
      open_sources: [],
    };
  },
  mutations: {
    set_open_source(state, payload) {
      state.open_sources = payload;
    },
  },
  getters: {},
  actions: {
    async get_open_source({ commit }) {
      try {
        const response = await axiosInstance.get("");

        commit("set_open_source", response.data?.open_sources);
      } catch (error) {}
    },
  },
};

export default os;
