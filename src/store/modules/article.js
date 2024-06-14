import axiosInstance from "@/utility/axiosInstance";

const article = {
  state() {
    return {
      articles: [],
    };
  },
  mutations: {
    set_articles(state, payload) {
      state.articles = payload;
    },
  },
  getters: {},
  actions: {
    async get_articles({ commit }) {
      try {
        const response = await axiosInstance.get("");

        commit("set_articles", response.data?.articles);
      } catch (error) {}
      // console.log("Action got here g", context, payload);
    },
  },
};

export default article;
