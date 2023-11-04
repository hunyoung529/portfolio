<template lang="">
  <section class="contact">
    <form class="contactWrap">
      <p>
        CSR 기반의 UIUX화면 구현 가능 EXPRESS 서버 연결 가능CSR 기반의 UIUX화면
        구현 가능 EXPRESS 서버 연결 가능CSR 기반의 UIUX화면 구현 가능
      </p>
      <input type="text" placeholder="제목" class="title" />
      <input type="email" placeholder="email" class="email" />
      <input type="text" placeholder="내용" class="content" />
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
    p {
      font-size: 18px;
      margin-bottom: 50px;
    }
    .content {
      padding: 50px 0;
    }
    input {
      width: 100%;
      display: block;
      box-sizing: border-box;
      background-color: transparent;
      padding: 10px 0;
      border: 0;
      color: white;

      &:not(:last-child) {
        border-bottom: 1px solid white;
      }
    }
    ::placeholder {
      color: white;
      font-family: "S-CoreDream-3Light";
    }
  }
}
</style>
