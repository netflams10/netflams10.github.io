import axios from "axios";

const education = {
  state() {
    return {
      educations: [],
      testimonials: [],
      badges: [],
    };
  },
  mutations: {
    set_educations(state, payload) {
      state.educations = payload;
    },
    set_testimonials(state, payload) {
      state.testimonials = payload;
    },
    set_badges(state, payload) {
      state.badges = payload;
    },
  },
  getters: {},
  actions: {
    async get_badges({ commit }) {
      try {
        const response = await axios.get("http://localhost:3000/badges");

        commit("set_badges", response.data);
      } catch (error) {}
      // console.log("Action got here g", context, payload);
    },
    async get_testimonials({ commit }) {
      try {
        const response = await axios.get("http://localhost:3000/testimonials");

        commit("set_testimonials", response.data);
      } catch (error) {}
      // console.log("Action got here g", context, payload);
    },
    async get_educations({ commit }) {
      try {
        const response = await axios.get("http://localhost:3000/educations");

        commit("set_educations", response.data);
      } catch (error) {
        console.log(err);
      }
      // console.log("Action got here g", context, payload);
    },
  },
};

export default education;
