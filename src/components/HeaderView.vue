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
        <p class="About active" @click="handleScroll('AboutWrap')">ABOUT</p>
        <p class="Skill" @click="handleScroll('skillWrap')">SKILL</p>
        <p class="Project" @click="handleScroll('projectWrap')">PROJECT</p>
        <p class="Contact" @click="handleScroll('contactWrap')">CONTACT</p>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderView",
  methods: {
    handleScroll(className) {
      this.$emit("scrollToClass", className);
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
  }
}
</style>
