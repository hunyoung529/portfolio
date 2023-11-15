<template lang="">
  <section class="contact">
    <form class="contactWrap" ref="form" @submit.prevent="sendEmail">
      <p>문의와 피드백은 언제나 환영입니다.</p>
      <input type="text" placeholder="제목" class="title" name="subject" />
      <input type="email" placeholder="email" class="email" name="user_email" />
      <input type="text" placeholder="내용" class="content" name="message" />
      <input type="submit" value="Send" />
    </form>
  </section>
</template>
<script>
import emailjs from "@emailjs/browser";

export default {
  name: "ContactView",
  data() {
    return {};
  },
  methods: {
    sendEmail() {
      const subject = this.$refs.form.subject.value.trim();
      const email = this.$refs.form.user_email.value.trim();
      const message = this.$refs.form.message.value.trim();

      if (!email || !subject || !message) {
        alert("빈칸을 모두 채워주세요");
      } else {
        emailjs
          .sendForm(
            "service_ufitsw5",
            "template_njsde7i",
            this.$refs.form,
            "0Uhtx6rq2WLW4VOWr"
          )
          .then(
            (result) => {
              console.log("SUCCESS!", result.text);
              this.resetForm();
            },
            (error) => {
              console.log("FAILED...", error.text);
            }
          );
      }
    },
    resetForm() {
      const form = this.$refs.form;
      form.reset();
    },
  },
};
</script>
<style lang="scss" scoped>
.contact {
  .contactWrap {
    position: absolute;
    right: 0;
    bottom: 10%;
    text-align: left;
    width: 50%;
    margin-bottom: 200px;
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
      &:last-child {
        position: absolute;
        left: 40%;
        width: 20%;
        margin-top: 20px;
        border: 1px solid white;
      }
      &:not(:last-child) {
        padding-left: 5px;
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
