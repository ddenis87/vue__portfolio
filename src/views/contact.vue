<template>
  <div class="contact" id="page">
    <h4 class="contact__title">Контакты</h4>
    <p class="contact__text">Если у вас возникли вопросы, можете связаться со мной одним из способов представленных в низу страницы, или заполнить форму и я свяжусь с вами.</p>

    <div class="contact__body">
      <form class="contact-form">
        <label class=""><input class="contact-form__field" type="text" placeholder="Укажите Имя" v-model="formField.userName" ></label>
        <label class=""><input class="contact-form__field" type="text" placeholder="Email" v-model="formField.email"></label>
        <label class=""><input class="contact-form__field" type="text" placeholder="Номер телефона" v-model="formField.phone"></label>
        <label class=""><textarea class="contact-form__field-text" rows="4" placeholder="Ваш вопрос" v-model="formField.quest"></textarea></label>
        <div class="contact-form__control">
          <div class="status">
            <span class="status__text" :class="{'status__text-error': isError}">{{ statusText }}</span>
          </div>
          <div class="button">
            <button class="contact-form__button" :class="{'visibility-hidden': isLoad}" @click.prevent="sendMail">Отправить</button>
            <!-- <img class="contact-form__images" :class="{'visibility-hidden': !isLoad}" src="@/assets/images/load.gif"> -->
          </div>
        </div>
      </form>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      formField: {userName: '', email: '', phone: '', quest: '', clear: function() {this.userName = ''; this.email = ''; this.phone = ''; this.quest = '';}},
      isLoad: false, isError: false,
      statusText: '',
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~@/variable.scss';

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
        margin-bottom: 10px;
        padding: 10px;
        border: 1px solid darkslategray;
        border-radius: 3px;
        outline: none;
      }
      &__field-text {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid darkslategray;
        border-radius: 3px;
        box-sizing: border-box;
        resize: none;
        outline: none;
      }
    }
  }
}

.page-enter-active {
  opacity: 0;
  transition: all 0s;
}
.page-enter {
  opacity: 0;
}
</style>