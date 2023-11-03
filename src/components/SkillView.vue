<template lang="">
  <section class="skill">
    <div class="skillWrap">
      <h2>끊임없이 발전하는 개발자!</h2>
      <p>프론트엔드에 관심이 있어 여러 프레임워크를 사용해보고 있습니다.</p>
      <p>결과물은 PROJECC에서 확인하실수 있습니다......</p>
      <div class="skillList">
        <div data-aos="fade-left" class="skillItem">
          <figure class="imgBox">
            <img src="../assets/javascript.png" alt="React" />
          </figure>
          <div class="textBox">
            <p>CSR 기반의 UIUX화면 구현 가능</p>
            <p>EXPRESS 서버 연결 가능</p>
          </div>
        </div>
        <div data-aos="fade-left" class="skillItem">
          <figure class="imgBox">
            <img src="../assets/html.png" alt="React" />
          </figure>
          <div class="textBox">
            <p>CSR 기반의 UIUX화면 구현 가능</p>
            <p>EXPRESS 서버 연결 가능</p>
          </div>
        </div>
        <div data-aos="fade-left" class="skillItem">
          <figure class="imgBox">
            <img src="../assets/css.png" alt="React" />
          </figure>
          <div class="textBox">
            <p>CSR 기반의 UIUX화면 구현 가능</p>
            <p>EXPRESS 서버 연결 가능</p>
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
            <p>CSR 기반의 UIUX화면 구현 가능</p>
            <p>EXPRESS 서버 연결 가능</p>
          </div>
        </div>
        <div data-aos="fade-left" class="skillItem">
          <figure class="imgBox">
            <img src="../assets/sass.png" alt="React" />
          </figure>
          <div class="textBox">
            <p>CSR 기반의 UIUX화면 구현 가능</p>
            <p>EXPRESS 서버 연결 가능</p>
          </div>
        </div>
        <div data-aos="fade-left" class="skillItem">
          <figure class="imgBox">
            <img src="../assets/mysql.png" alt="React" />
          </figure>
          <div class="textBox">
            <p>CSR 기반의 UIUX화면 구현 가능</p>
            <p>EXPRESS 서버 연결 가능</p>
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
            <p>CSR 기반의 UIUX화면 구현 가능</p>
            <p>EXPRESS 서버 연결 가능</p>
          </div>
        </div>
        <div data-aos="fade-left" class="skillItem">
          <figure class="imgBox">
            <img src="../assets/mariadb.png" alt="React" />
          </figure>
          <div class="textBox">
            <p>CSR 기반의 UIUX화면 구현 가능</p>
            <p>EXPRESS 서버 연결 가능</p>
          </div>
        </div>
        <div data-aos="fade-left" class="skillItem">
          <figure class="imgBox">
            <img src="../assets/mongodb.png" alt="React" />
          </figure>
          <div class="textBox">
            <p>CSR 기반의 UIUX화면 구현 가능</p>
            <p>EXPRESS 서버 연결 가능</p>
          </div>
        </div>
        <div data-aos="fade-left" class="skillItem">
          <figure class="imgBox">
            <img src="../assets/git.png" alt="React" />
          </figure>
          <div class="textBox">
            <p>CSR 기반의 UIUX화면 구현 가능</p>
            <p>EXPRESS 서버 연결 가능</p>
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
  right: 0;
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
