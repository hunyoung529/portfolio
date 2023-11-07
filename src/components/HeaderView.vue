<template lang="">
  <div class="header">
    <div class="header_wrap">
      <div class="name">
        <h2>
          JUNG <br />
          HUN YOUNG
        </h2>
        <p>FRONT-END DEVELOPER</p>
      </div>
      <nav class="menu">
        <p :class="{ active: activeSection === 'about' }" @click="scrollTo(0)">
          ABOUT
        </p>
        <p
          :class="{ active: activeSection === 'skill' }"
          @click="scrollTo(1550)"
        >
          SKILL
        </p>
        <p
          :class="{ active: activeSection === 'project' }"
          @click="scrollTo(3000)"
        >
          PROJECT
        </p>
        <p
          :class="{ active: activeSection === 'contact' }"
          @click="scrollTo(4600)"
        >
          CONTACT
        </p>
      </nav>
      <aside class="toTop" :class="{ active: activeSection != 'about' }">
        <img src="../assets/icon_arrow.png" @click="scrollTo(0)" />
      </aside>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderView",
  data() {
    return {
      currentScrollPosition: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.updateScroll);
  },
  methods: {
    scrollTo(v) {
      window.scrollTo({ left: 0, top: v, behavior: "smooth" });
    },
    updateScroll() {
      this.currentScrollPosition =
        window.scrollY || document.documentElement.scrollTop;
    },
  },
  computed: {
    activeSection() {
      if (this.currentScrollPosition >= 3800) return "contact";
      else if (this.currentScrollPosition >= 2800) return "project";
      else if (this.currentScrollPosition >= 1400) return "skill";
      else return "about";
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  z-index: 5;
  position: fixed;
  width: 40%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  .header_wrap {
    height: 100%;
    .name {
      position: absolute;
      left: 0;
      top: 5%;
      h2 {
        font-size: 5.625rem;
        font-weight: 100;
        border-bottom: 1px solid white;
        margin-bottom: 20px;
      }
      p {
        font-weight: 300;
      }
    }
    .menu {
      position: absolute;
      left: 0;
      bottom: 10%;
      margin-top: 150px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding: 0;
      p.active {
        font-weight: 600;
        opacity: 1;
      }
      p:hover {
        cursor: pointer;
      }
      p {
        font-weight: 100;
        font-size: 2.5rem;
        margin: 0;
        opacity: 0.6;
      }
    }

    .toTop {
      position: fixed;
      left: 45%;
      bottom: 5%;
      padding: 15px;
      border-radius: 50%;
      width: 25px;
      height: 25px;
      animation: topButton 2s infinite;
      cursor: pointer;
      display: none;
    }
    .toTop.active {
      display: block;
    }
    @keyframes topButton {
      0% {
        transform: translateY(0%);
      }
      50% {
        transform: translateY(30%);
      }
      100% {
        transform: translateY(0%);
      }
    }
  }
}
</style>
