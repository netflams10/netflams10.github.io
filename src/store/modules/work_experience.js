import axiosInstance from "@/utility/axiosInstance";

const work_experience = {
  state() {
    return {
      work_experiences: [],
    };
  },
  mutations: {
    set_work_experiences(state, payload) {
      state.work_experiences = payload;
    },
  },
  getters: {},
  actions: {
    async get_work_experiences({ commit }) {
      try {
        const response = await axiosInstance.get("");

        commit("set_work_experiences", response.data?.work_experiences);
      } catch (error) {}
      // console.log("Action got here g", context, payload);
    },
  },
};

export default work_experience;
