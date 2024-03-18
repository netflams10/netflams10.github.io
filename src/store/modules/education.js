import axios from "axios";
import axiosInstance from "@/utility/axiosInstance";

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
        const response = await axiosInstance.get("");

        commit("set_badges", response.data?.badges);
      } catch (error) {}
      // console.log("Action got here g", context, payload);
    },
    async get_testimonials({ commit }) {
      try {
        const response = await axiosInstance.get("");

        commit("set_testimonials", response.data?.testimonials);
      } catch (error) {}
      // console.log("Action got here g", context, payload);
    },
    async get_educations({ commit }) {
      try {
        const response = await axiosInstance.get("");

        commit("set_educations", response.data?.educations);
      } catch (error) {
        console.log(err);
      }
      // console.log("Action got here g", context, payload);
    },
  },
};

export default education;
