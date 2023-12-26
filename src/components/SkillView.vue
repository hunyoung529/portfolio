<template lang="">
  <section class="skill">
    <div class="skillWrap">
      <h2>FROM 비전공자 TO BE 개발자!</h2>
      <p>개발에 관심이 있어 여러 기술들을 배우고 있습니다.</p>
      <p>배운 기술들을 사용한 결과물은 PROJECT에서 찾아보실 수 있습니다.</p>
      <div class="skillList">
        <div data-aos="fade-left" class="skillItem">
          <figure class="imgBox">
            <img src="../assets/javascript.png" alt="React" />
          </figure>
          <div class="textBox">
            <p>동적 웹페이지 제작 가능</p>
            <p>비동기 처리,API로 데이터 처리 가능</p>
          </div>
        </div>
        <div data-aos="fade-left" class="skillItem">
          <figure class="imgBox">
            <img src="../assets/html.png" alt="React" />
          </figure>
          <div class="textBox">
            <p>웹 표준을 준수하는 웹사이트 제작 가능</p>
            <p>시멘틱 마크업 구성 가능</p>
          </div>
        </div>
        <div data-aos="fade-left" class="skillItem">
          <figure class="imgBox">
            <img src="../assets/css.png" alt="React" />
          </figure>
          <div class="textBox">
            <p>반응형 레이아웃 제작 가능</p>
            <p>애니메이션 등을 사용해서 UX 향상 가능</p>
          </div>
        </div>
        <div data-aos="fade-left" class="skillItem">
          <figure class="imgBox">
            <img src="../assets/React.png" alt="React" />
          </figure>
          <div class="textBox">
            <p>CSR 기반의 UIUX화면 구현 가능</p>
            <p>EXPRESS 서버 연결 가능</p>
          </div>
        </div>
        <div data-aos="fade-left" class="skillItem">
          <figure class="imgBox">
            <img src="../assets/jquery.png" alt="React" />
          </figure>
          <div class="textBox">
            <p>동적 웹사이트 구현 가능</p>
          </div>
        </div>
        <div data-aos="fade-left" class="skillItem">
          <figure class="imgBox">
            <img src="../assets/sass.png" alt="React" />
          </figure>
          <div class="textBox">
            <p>SASS/SCSS를 사용하여 효율적이고</p>
            <p>가독성 좋은 스타일시트 제작 가능</p>
          </div>
        </div>
        <div data-aos="fade-left" class="skillItem">
          <figure class="imgBox">
            <img src="../assets/vuejs.png" alt="React" />
          </figure>
          <div class="textBox">
            <p>CSR 기반의 UIUX화면 구현 가능</p>
            <p>EXPRESS 서버 연결 가능</p>
          </div>
        </div>
        <div data-aos="fade-left" class="skillItem">
          <figure class="imgBox">
            <img src="../assets/nextjs.png" alt="React" />
          </figure>
          <div class="textBox">
            <p>nextjs를 사용하여</p>
            <p>SSR 웹페이지 구현 가능</p>
          </div>
        </div>
        <div data-aos="fade-left" class="skillItem">
          <figure class="imgBox">
            <img src="../assets/mysql.png" alt="React" />
          </figure>
          <div class="textBox">
            <p>mysql을 활용해서 서버의</p>
            <p>데이터베이스 관리 가능</p>
          </div>
        </div>

        <div data-aos="fade-left" class="skillItem">
          <figure class="imgBox">
            <img src="../assets/mariadb.png" alt="React" />
          </figure>
          <div class="textBox">
            <p>mariadb를 활용하여 서버 구축 및 연결 가능</p>
          </div>
        </div>
        <div data-aos="fade-left" class="skillItem">
          <figure class="imgBox">
            <img src="../assets/mongodb.png" alt="React" />
          </figure>
          <div class="textBox">
            <p>mongodb를 활용하여 서버 구축 및 연결 가능</p>
          </div>
        </div>
        <div data-aos="fade-left" class="skillItem">
          <figure class="imgBox">
            <img src="../assets/git.png" alt="React" />
          </figure>
          <div class="textBox">
            <p>github를 활용해서</p>
            <p>프로젝트 배포 및 관리 가능</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "SkillView",
};
</script>
<style lang="scss" scoped>
.skillWrap {
  position: absolute;
  top: 20%;
  right: 5%;
  text-align: left;

  h2 {
    font-size: 40px;
  }
  p {
    font-size: 1.125rem;
  }

  .skillList {
    margin-top: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 50px;
    row-gap: 10px;
    .skillItem {
      display: flex;
      align-items: center;
      figure {
        margin-left: 0;
        margin-right: 20px;
        background-color: white;
        border-radius: 20%;
        img {
          width: 80px;
          height: 80px;
          object-fit: contain;
          padding: 5px;
        }
      }
    }
  }
}
</style>
