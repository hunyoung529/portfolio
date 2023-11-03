<template lang="">
  <section>
    <div class="projectWrap">
      <swiper
        :loop="true"
        :spaceBetween="10"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
        data-aos="fade-up"
      >
        <swiper-slide>
          <div class="imgBox">
            <figure><img src="../assets/Rectangle.png" alt="" /></figure>
            <div class="smallImg">
              <figure><img src="../assets/React.png" alt="" /></figure>
              <figure><img src="../assets/html.png" alt="" /></figure>
              <figure><img src="../assets/Rectangle.png" alt="" /></figure>
              <figure><img src="../assets/Rectangle.png" alt="" /></figure>
            </div>
          </div>
          <div class="textBox">
            <h2>프로젝트1</h2>
            <p class="skills">프로젝트 기술</p>
            <p class="introduction">
              내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
            </p>
            <a href="#">프로젝트 링크</a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <figure><img src="../assets/Rectangle.png" alt="" /></figure>
          <div class="textBox">
            <h2>프로젝트2</h2>
            <p class="skills">프로젝트 기술</p>
            <p class="introduction">
              내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
            </p>
            <a href="#">프로젝트 링크</a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <figure><img src="../assets/Rectangle.png" alt="" /></figure>
          <div class="textBox">
            <h2>프로젝트3</h2>
            <p class="skills">프로젝트 기술</p>
            <p class="introduction">
              내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
            </p>
            <a href="#">프로젝트 링크</a>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default {
  name: "ProjectView",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>
<style lang="scss" scoped>
.projectWrap {
  position: absolute;
  bottom: -20%;
  right: 0;
  margin-left: auto;
  width: 50%;
  height: 300px;
  .swiper-slide {
    h2 {
      font-size: 3rem;
      font-weight: thin;
    }
    .skills {
      font-size: 18px;
      font-weight: 300;
    }
    a {
      text-decoration: none;
      color: white;
    }
    .smallImg {
      display: flex;
      justify-content: space-around;
      figure {
        width: 20%;
      }
    }
    figure {
      cursor: pointer;
      margin: 0;
      width: 100%;
      overflow: hidden;
      object-fit: cover;
      img {
        width: 100%;
      }
    }
    .textBox {
      text-align: left;
    }
  }
}
</style>
