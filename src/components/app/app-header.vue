<template>
  <div class="header">
    <div>
      <h1 class="header__title">
        <span class="one">D</span>
        <span class="two">D</span>
        <span class="three">A</span>
      </h1>
    </div>
    <div class="header__navigation">
      <ul class="menu">
        <li class="menu__item"><router-link active-class="active" @click.prevent="goRoute('/')" to="/" exact="true">Главная</router-link></li>
        <li class="menu__item"><router-link active-class="active" @click.prevent="goRoute('/portfolio')" to="/portfolio">Портфолио</router-link></li>
        <li class="menu__item"><router-link active-class="active" @click.prevent="goRoute('/contact')" to="/contact">Контакты</router-link></li>
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
    display: inline-flex;
    margin: 0px;
    text-transform: uppercase;
    color: darkslategray;
    .one { transform: translate(0px, 8px); }
    .two { transform: translate(-2px, -5px); }
    .three { transform: translate(-24px, 20px); }
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