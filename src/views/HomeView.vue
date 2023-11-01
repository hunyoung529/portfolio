<template>
  <div class="home">
    <HeaderView />
    <AboutView />
    <SkillView />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderView from "@/components/HeaderView.vue";
import AboutView from "@/components/AboutView.vue";
import SkillView from "@/components/SkillView.vue";
export default {
  name: "HomeView",
  components: {
    HeaderView,
    AboutView,
    SkillView,
  },
};
</script>
<style lang="scss">
.home {
  position: relative;
  height: 100%;
  width: 100%;
  section {
    width: 60%;
    margin-left: auto;
    border: 1px solid red;
    height: 100vh;
  }
}
</style>
