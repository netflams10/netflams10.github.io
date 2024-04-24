<template>
  <aside :class="`${is_expanded && 'is-expanded'}`">
    <div class="logo">
      <img src="../../assets/images/linux.svg" alt="Linux Pengiuns" />
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-togle" @click="toggle_menu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div>

    <h3>menu</h3>
    <div class="menu">
      <router-link class="button" to="/">
        <span class="material-icons">home</span>
        <span class="text">Home</span>
      </router-link>

      <router-link class="button" to="/projects">
        <span class="material-icons">
          <Icon
            icon="fa6-solid:computer"
            class="material-icons"
            color="#ffb515"
          />
        </span>
        <span class="text">Projects</span>
      </router-link>

      <router-link class="button" to="/articles">
        <span class="material-icons">
          <Icon
            icon="material-symbols:article-shortcut"
            class="material-icons"
            color="#FF0000"
          />
        </span>
        <span class="text">Articles</span>
      </router-link>

      <router-link class="button" to="/stacks">
        <span class="material-icons">
          <Icon
            icon="material-symbols:social-leaderboard-rounded"
            class="material-icons"
            color="#FFD700"
          />
        </span>
        <span class="text">Stacks</span>
      </router-link>

      <router-link class="button" to="/open-source">
        <span class="material-icons">
          <Icon
            icon="vscode-icons:file-type-source"
            class="material-icons"
            color="	#57e32c"
          />
        </span>
        <span class="text">Open Source</span>
      </router-link>

      <router-link class="button" to="/education">
        <span class="material-icons">
          <Icon
            icon="material-symbols:award-star-outline"
            class="material-icons"
            color="	#57e32c"
          />
        </span>
        <span class="text">Testimonials</span>
      </router-link>

      <router-link class="button" to="/work-experience">
        <span class="material-icons">
          <Icon
            icon="material-symbols-light:credit-card-gear-sharp"
            class="material-icons"
            color="	#57e32c"
          />
        </span>
        <span class="text">Testimonials</span>
      </router-link>
    </div>

    <div class="flex"></div>
    <div class="menu">
      <a class="button" href="https://twitter.com/segunflams" target="_blank">
        <span>
          <Icon
            icon="arcticons:twitter-alt-2"
            class="material-icons"
            color="#1DA1F2"
          />
        </span>
        <span class="text">Twitter</span>
      </a>
      <a
        class="button"
        href="https://www.linkedin.com/in/opeyemi-amusan-b0a2a8152/"
        target="_blank"
      >
        <span>
          <Icon
            icon="ion:logo-linkedin"
            class="material-icons"
            color="#0077b5"
          />
        </span>
        <span class="text">Linked In</span>
      </a>
      <a class="button" href="https://github.com/netflams10" target="_blank">
        <span>
          <Icon
            icon="ph:github-logo-fill"
            class="material-icons"
            color="#24292e"
          />
        </span>
        <span class="social-text">Github</span>
      </a>
      <a class="button" href="mailto:segope44@gmail.com" target="__blank">
        <!-- <span class="material-icons">settings</span> -->
        <span>
          <Icon icon="mdi:gmail" class="material-icons" color="#c71610" />
        </span>
        <span class="text">Gmail</span>
      </a>
    </div>
  </aside>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const is_expanded = ref(false);

const toggle_menu = () => {
  is_expanded.value = !is_expanded.value;
};
</script>

<style scoped lang="scss">
/* width: var(--sidebar-width); */
aside {
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  padding: 1rem;
  background-color: var(--dark);
  color: var(--light);
  overflow: hidden;
  min-height: 100vh;

  transition: 0.2s ease-out;

  .flex {
    flex: 1 1 0;
  }

  .logo {
    margin-bottom: 1rem;

    img {
      width: 2rem;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    position: relative;
    top: 0;
    transition: 0.2s ease-out;

    .menu-toggle {
      transition: 0.2s ease-out;

      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-icons {
          color: var(--primary);
          transform: translateX(0.5rem);
          transition: 0.2s ease-out;
        }
      }
    }
  }

  h3,
  .button .text,
  .button .social-text {
    opacity: 0;
    transition: 0.3s ease-out;
  }

  h3 {
    color: var(--grey);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 0.5rem 1rem;
      transition: 0.2s ease-out;
      .material-icons {
        font-size: 2rem;
        color: var(--light);

        transition: 0.2s ease-out;
      }

      .text,
      .social-text {
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover,
      &.router-link-exact-active {
        background-color: var(--dark-alt);

        .material-icons {
          color: var(--primary);
        }
      }

      &.router-link-exact-active {
        border-right: 5px solid var(--primary);
      }
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -3rem;
      color: var(--light);

      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    h3,
    .button,
    .text,
    .social-text {
      opacity: 1;
    }

    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
  }
}
</style>
