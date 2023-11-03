<template>
  <div class="home">
    <HeaderView />
    <AboutView />
    <SkillView />
    <ProjectView />
    <ContactView />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderView from "@/components/HeaderView.vue";
import AboutView from "@/components/AboutView.vue";
import SkillView from "@/components/SkillView.vue";
import ProjectView from "@/components/ProjectView.vue";
import ContactView from "@/components/ContactView.vue";
import { onMounted } from "@vue/runtime-core";
import AOS from "aos";
export default {
  name: "HomeView",
  components: {
    HeaderView,
    AboutView,
    SkillView,
    ProjectView,
    ContactView,
  },
  setup() {
    onMounted(() => {
      AOS.init();
    });
  },
};
</script>
<style lang="scss">
.home {
  position: relative;
  height: 100%;
  width: 90%;
  margin: 0 auto;
  section {
    position: relative;
    width: 100%;
    margin-left: auto;
    height: 100vh;
    margin-bottom: 300px;
  }
}
</style>
