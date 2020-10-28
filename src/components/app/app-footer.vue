<template>
  <div class="footer">
    <h4 class="footer__title">Связь со мной</h4>
    <div class="footer__social">
      <span class="footer__social_text">тел. +7 909 816 12 68</span>
      <hr class="footer__separator"/>
      <router-link class="footer__social_text" to="/contact">Форма обратной связи</router-link>
      <hr class="footer__separator"/>
      <img src="@/assets/images/social/whatsapp.png" alt="" class="footer__social_images">
      <hr class="footer__separator"/>
      <img src="@/assets/images/social/telegram.png" alt="" class="footer__social_images">
    </div>
    <h4 class="footer__title">Профиль</h4>
    <div class="footer__profile">
      <img src="@/assets/images/social/github.png" alt="" class="footer__social_images">
      <hr class="footer__separator"/>
      <img src="@/assets/images/social/vk.png" alt="" class="footer__social_images">
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  &__separator { height: 90%; }
  &__title {
    margin: 10px;
    text-transform: uppercase;
  }
  &__social, &__profile {
    display: inline-flex;
    align-items: center;
    &_text { margin: 0px 10px; }
    &_images {
      width: 25px;
      margin: 0px 10px;
      cursor: pointer;
    }
  }
}
</style>