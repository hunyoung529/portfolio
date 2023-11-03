<template lang="">
  <section class="contact">
    <form class="contactWrap">
      <input type="text" />
      <input type="email" />
      <input type="text" />
      <input type="submit" />
    </form>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.contact {
  .contactWrap {
    position: absolute;
    right: 0;
    bottom: 10%;
    text-align: left;
    width: 50%;
    input {
      width: 300px;
      display: block;
    }
  }
}
</style>
