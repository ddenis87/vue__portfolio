<template>
  <div class="contact" id="page">
    <h1>This is an contact page</h1>
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
.page-enter-active {
  opacity: 0;
  transition: all 0s;
}
.page-enter {
  opacity: 0;
}
</style>