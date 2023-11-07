<template lang="">
  <section class="AboutMe">
    <ul class="AboutWrap">
      <li class="name"><p>정훈영</p></li>
      <li class="bod"><p>1992.05.29</p></li>
      <li class="address"><p>서울시 송파구</p></li>
      <li class="email"><p>gnsdud92@naver.com</p></li>
      <li class="studied"><p>University of Sunderland</p></li>
      <li class="blog"><p>블로그</p></li>
      <li class="resume">
        <p>
          <a href="./pdf/resume.pdf" download="resume.pdf" target="_blank"
            >이력서</a
          >
        </p>
      </li>
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
    a {
      text-decoration: none;
      color: inherit;
    }
    p {
      margin: 0 auto;
      display: inline-block;
    }
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
    &:nth-of-type(7) {
      &::after {
        background-image: url(../assets/icon_download.png);
      }
      p:hover {
        border-bottom: 1px solid white;
        cursor: pointer;
      }
    }
  }
}
</style>
