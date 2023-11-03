<template lang="">
  <section class="AboutMe">
    <ul class="AboutWrap">
      <li class="name">정훈영</li>
      <li class="bod">1992.05.29</li>
      <li class="address">서울시 송파구</li>
      <li class="email">gnsdud92@naver.com</li>
      <li class="studied">University of Sunderland</li>
      <li class="blog">블로그</li>
      <li class="resume">이력서</li>
    </ul>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss">
.AboutWrap {
  list-style: none;
  margin: 0;
  position: absolute;
  bottom: 10%;
  right: 0;
  text-align: right;

  li {
    line-height: 40px;
    font-size: 1.25rem;
    position: relative;
    &::after {
      content: "";
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      width: 22px;
      height: 22px;
      position: absolute;
      right: -30px;
      top: 8px;
    }
    &:nth-of-type(1) {
      &::after {
        background-image: url(../assets/icon_smile.png);
      }
    }
    &:nth-of-type(2) {
      &::after {
        background-image: url(../assets/icon_calendar.png);
      }
    }
    &:nth-of-type(3) {
      &::after {
        background-image: url(../assets/icon_home.png);
      }
    }
    &:nth-of-type(4) {
      &::after {
        background-image: url(../assets/icon_mail.png);
      }
    }
    &:nth-of-type(5) {
      &::after {
        background-image: url(../assets/icon_pencil.png);
      }
    }
    &:nth-of-type(6) {
      &::after {
        background-image: url(../assets/icon_laptop.png);
      }
    }
  }
}
</style>
