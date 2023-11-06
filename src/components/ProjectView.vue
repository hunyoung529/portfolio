<template lang="">
  <section class="project" ref="project">
    <div class="projectWrap">
      <swiper
        :loop="true"
        :spaceBetween="10"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
        data-aos="fade-down"
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
            <p class="skills">프로젝트 기술</p>
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
          title: "프로젝트1",
          description: "프로젝트1에 대한 설명입니다.",
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
          description: "프로젝트1에 대한 설명입니다.",
          link: "#",
          mainImage: require("../assets/Rectangle3.png"),
          smallImages: [
            require("../assets/Rectangle1.png"),
            require("../assets/Rectangle2.png"),
            require("../assets/Rectangle3.png"),
            require("../assets/Rectangle4.png"),
          ],
        },
        {
          id: 3,
          title: "프로젝트3",
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
  top: 30%;
  color: white;
}
.swiper-button-next {
  right: 31%;
}
</style>
