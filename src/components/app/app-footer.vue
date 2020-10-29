<template>
  <div class="footer">
    <h4 class="footer__title">Связь со мной</h4>
    <div class="footer__social">
      <span class="footer__social_text">тел. +7 909 816 12 68</span>
      <hr class="footer__separator"/>
      <span class="footer__social_text">email: d.denis87@mail.ru</span>
      <hr class="footer__separator"/>
      <router-link class="footer__social_text" to="/contact">Обратная связь</router-link>
      <hr class="footer__separator"/>
      <div class="footer__social_ico">
        <a href="https://api.whatsapp.com/send?phone=79098161268" target="_blank"><img src="@/assets/images/social/whatsapp.png" alt="whatsapp" title="WhatsApp" class="footer__social_images"></a>
        <a href="https://t.me/DDenis87" target="_blank"><img src="@/assets/images/social/telegram.png" alt="telegram" title="Telegram" class="footer__social_images"></a>
      </div>
    </div>
    <h4 class="footer__title">Профиль</h4>
    <div class="footer__profile">
      <a href="https://github.com/ddenis87" target="_blank"><img src="@/assets/images/social/github.png" alt="guthub" title="Github" class="footer__social_images"></a>
      <a href="https://vk.com/id424812283" target="_blank"><img src="@/assets/images/social/vk.png" alt="vk" title="Vk" class="footer__social_images"></a>
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
    &_ico { display: inline-flex; flex-direction: row;  }
    &_text { margin: 0px 10px; }
    &_images {
      width: 25px;
      margin: 0px 10px;
      cursor: pointer;
    }
  }
}
@media screen and (max-width: 600px) {
  .footer {
    &__separator { display: none; }
    &__title { margin: 5px; }
    &__social {
      display: flex; flex-direction: column; 
       &_text { margin: 5px 0px; }
       &_images { margin: 5px 10px; }
    }
  }
}
</style>