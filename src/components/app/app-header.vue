<template>
  <div class="header">
    <h1 class="header__title">Frontend</h1>
    <div class="header__navigation">
      <ul class="menu">
        <router-link class="menu__item" active-class="active" tag="li" @click.prevent="goRoute('/')" to="/" exact="true">Главная</router-link>
        <router-link class="menu__item" active-class="active" tag="li" @click.prevent="goRoute('/portfolio')" to="/portfolio">Портфолио</router-link>
        <router-link class="menu__item" active-class="active" tag="li" @click.prevent="goRoute('/contact')" to="/contact">Контакты</router-link>
        <!-- <a href="#" @click.prevent="goRoute('/')"><li class="menu__item">Главная</li></a>
        <a href="#" @click.prevent="goRoute('/portfolio')"><li class="menu__item">Портфолио</li></a>
        <a href="#" @click.prevent="goRoute('/contact')"><li class="menu__item">Контакты</li></a> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    goRoute(valueRouter) {
      if (valueRouter == this.$route.path) return;
      document.getElementById('page').classList.add('page-enter');
      setTimeout(() => {
        this.$router.push(valueRouter);
      }, 300);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/variable.scss';

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: $widthMaxContent;
  width: 100%;
  background-color: white;
  &__title {
    letter-spacing: .3em;
    text-transform: uppercase;
  }
  &__navigation {
    font-size: 1em;
    text-transform: uppercase;
    .menu {
      padding: 0;
      margin-right: -10px;
      &__item {
        display: inline-block;
        padding: 10px 10px;
        &:hover {
          border-top: 2px solid white;
          border-bottom: 2px solid coral;
        }
      }
      .active { color: coral; }
    }
  }
}

</style>