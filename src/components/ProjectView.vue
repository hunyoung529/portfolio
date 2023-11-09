<template lang="">
  <section class="project" ref="project">
    <div class="projectWrap">
      <swiper
        :loop="true"
        :spaceBetween="10"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
        data-aos="zoom-in"
      >
        <swiper-slide v-for="(slide, index) in slides" :key="slide.id">
          <div class="imgBox">
            <figure class="currentImage">
              <img :src="slide.mainImage" alt="" />
            </figure>
            <div class="smallImg">
              <figure
                v-for="(smallImage, imgIndex) in slide.smallImages"
                :key="imgIndex"
              >
                <img
                  :src="smallImage"
                  alt="Small Image"
                  :class="{ selectedImage: smallImage === slide.mainImage }"
                  @click="changeLargeImage(index, imgIndex)"
                />
              </figure>
            </div>
          </div>
          <div class="textBox">
            <h2>{{ slide.title }}</h2>
            <p class="skills">{{ slide.skills }}</p>
            <p class="introduction">{{ slide.description }}</p>
            <a :href="slide.link">프로젝트 링크</a>
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
  data() {
    return {
      slides: [
        {
          id: 1,
          title: "라이온힐 펜션",
          skills: "HTML,CSS,Javascript,Jquery",
          description:
            "기존에 있던 웹페이지를 새로운 컨셉 아래 완전 리뉴얼 해서 만들어 봤습니다.",
          link: "#",
          mainImage: require("../assets/project1_1.png"),
          smallImages: [
            require("../assets/project1_1.png"),
            require("../assets/project1_2.png"),
            require("../assets/project1_3.png"),
            require("../assets/project1_4.png"),
            require("../assets/project1_5.png"),
          ],
        },
        {
          id: 2,
          title: "프로젝트2",
          skills: "React,SCSS",
          description: "프로젝트1에 대한 설명입니다.",
          link: "#",
          mainImage: require("../assets/project1_1.png"),
          smallImages: [
            require("../assets/project1_1.png"),
            require("../assets/project1_1.png"),
            require("../assets/project1_1.png"),
            require("../assets/project1_1.png"),
          ],
        },
        {
          id: 3,
          title: "프로젝트3",
          skills: "Nextjs,SCSS",
          description: "프로젝트2에 대한 설명입니다.",
          link: "#",
          mainImage: require("../assets/project3_1.png"),
          smallImages: [
            require("../assets/project3_2.png"),
            require("../assets/project3_3.png"),
            require("../assets/project3_4.png"),
            require("../assets/project3_5.png"),
          ],
        },
      ],
      currentSlide: 0,
    };
  },
  methods: {
    changeLargeImage(slideIndex, imageIndex) {
      this.currentSlide = slideIndex;
      this.slides[slideIndex].mainImage =
        this.slides[slideIndex].smallImages[imageIndex];
    },
  },
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
<style lang="scss">
.projectWrap {
  position: absolute;
  bottom: -20%;
  right: 0;
  margin-left: auto;
  width: 50%;
  height: 300px;
  margin-bottom: 400px;
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
    .imgBox {
      display: flex;
      height: 460px;
      .currentImage {
        width: 70%;
        height: 100%;
        margin-right: 10px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .smallImg {
        width: 20%;
        justify-content: space-between;
        display: flex;
        flex-direction: column;

        figure {
          width: 100%;
          height: 20%;
          img {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
          }
        }
      }
      .selectedImage {
        border: 3px solid blue;
      }
      figure {
        cursor: pointer;
        margin: 0;
        width: 100%;

        object-fit: contain;
        img {
          width: 100%;
        }
      }
    }

    .textBox {
      text-align: left;
    }
  }
}
.swiper-button-next,
.swiper-button-prev {
  top: 70%;
  color: white;
}
.swiper-button-prev {
  left: 80%;
}
.swiper-button-next {
  right: 10%;
}
</style>
