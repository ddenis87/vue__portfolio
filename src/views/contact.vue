<template>
  <div class="contact" id="page">
    <h4 class="contact__title">Контакты</h4>
    <p class="contact__text">Если у вас возникли вопросы, можете связаться со мной одним из способов, представленных внизу страницы, или заполнить форму, и я свяжусь с вами.</p>
    <div class="contact__body">
      <form class="contact-form">
        <label class=""><input class="contact-form__field" type="text" placeholder="Имя" v-model="formField.userName" ></label>
        <label class=""><input class="contact-form__field" type="text" placeholder="Email" v-model="formField.email"></label>
        <label class=""><input class="contact-form__field" type="text" placeholder="Номер телефона" v-model="formField.phone"></label>
        <label class=""><textarea class="contact-form__field contact-form__field-text" rows="4" placeholder="Ваш вопрос" v-model="formField.quest"></textarea></label>
        <div class="contact-form__control">
          <button class="contact-form__button" @click.prevent="sendMail" :disabled="isLoad">Отправить</button>
          <img class="contact-form__images" :class="{'contact-form__images_show': isLoad}" src="@/assets/images/load.gif">
          <span class="contact-form__text">{{ statusText }}</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import nProgress from 'nprogress';

export default {
  name: 'Contact',
  components: {
    nProgress,
  },
  data() {
    return {
      formField: {userName: '', email: '', phone: '', quest: '', clear: function() {this.userName = ''; this.email = ''; this.phone = ''; this.quest = '';}},
      isLoad: false,
      statusText: '',
    }
  },
  methods: {
    sendMail: function(event) {
      this.isLoad = true;
      nProgress.start();
      let formSend = new FormData();
      formSend.set('userName', this.formField.userName);
      formSend.set('email', this.formField.email);
      formSend.set('phone', this.formField.phone);
      formSend.set('quest', this.formField.quest);
      let req = new XMLHttpRequest();
      req.open('POST', 'https://formspree.io/xbjzqdgb');
      req.setRequestHeader('Accept', 'application/json');
      req.onreadystatechange = () => {
        if (req.readyState !== XMLHttpRequest.DONE) {
          this.isLoad = false;
          nProgress.done();
          this.statusText = 'Ошибка, попробуйте позже или свяжитесь со мной иным способом.'; 
          setTimeout(() => {this.statusText = '';}, 5000); 
          return;
        }
        if (req.status === 200) {
          this.isLoad = false;
          nProgress.done();
          this.statusText = 'Контакты и вопрос отправлены. В ближайшее время я свяжусь с Вами.'
          setTimeout(() => {this.statusText = '';}, 5000);
          this.formField.clear();
        } else {
          this.isLoad = false;
          nProgress.done();
          this.statusText = 'Ошибка, попробуйте позже или свяжитесь со мной иным способом.';
          setTimeout(() => {this.statusText = '';}, 5000);
        }
      };
      req.send(formSend);
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@/variable.scss';
@import 'animation-router.scss';

.contact {
  margin-bottom: 20px;
  max-width: $widthMaxContent;
  width: 100%;
  color: $bodyTextColor;
  transition: all .3s;
  &__title {
      text-align: left;
      text-transform: uppercase;
      font-weight: bold;
      color: $titleTextColor;
    }
  &__text {
    text-indent: 25px;
    text-align: justify;
  }
  &__body {
    .contact-form {
      width: 50%;
      &__field {
        display: block;
        width: 200px;
        margin-bottom: 20px;
        padding: 10px;
        border: 1px solid darkslategray;
        border-radius: 3px;
        outline: none;
        &:hover, &:focus { box-shadow: -1px -1px 3px lightblue, 1px 1px 3px lightblue; }
      }
      &__field-text {
        width: 100%;
        box-sizing: border-box;
        resize: none;
      }
      &__control {
        display: flex;
        align-items: center;
      }
      &__button {
        max-width: 120px;
        width: 100%;
        padding: 5px 15px;
        border: 1px solid darkslategray;
        background-color: whitesmoke;
        outline: none;
        cursor: pointer;
        &:hover { background-color: lightgray; }
      }
      &__images {
        margin: 0px 10px;
        height: 25px;
        width: auto;
        opacity: 0;
        transition: .5s;
        &_show { opacity: 1; }
      }
      &__text { font-size: .8em; }
    }
  }
}

@media screen and (max-width: 600px) {
  .contact {
    &__body {
      .contact-form {
        width: 100%;
        box-sizing: border-box;
        &__field {
          width: 100%;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>