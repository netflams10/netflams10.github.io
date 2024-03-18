import axios from "axios";

const stack = {
  state() {
    return {
      stacks: [],
    };
  },
  mutations: {
    set_stacks(state, payload) {
      state.stacks = payload;
    },
  },
  getters: {},
  actions: {
    async get_stacks({ commit }) {
      try {
        const response = await axios.get("");

        commit("set_stacks", response.data?.stacks);
      } catch (error) {}
      // console.log("Action got here g", context, payload);
    },
  },
};

export default stack;
