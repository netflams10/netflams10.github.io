import { createStore } from "vuex";

import os from "./modules/os";
import role from "./modules/role";
import stack from "./modules/stack";
import article from "./modules/article";
import project from "./modules/project";
import education from "./modules/education";
import work_experience from "./modules/work_experience";

// Create a new store instance.
const store = createStore({
  modules: { role, project, stack, education, work_experience, article, os },
});

export default store;
