<template>
  <div class="header">
    <h1 class="header__title">Frontend</h1>
    <div class="header__navigation">
      <ul class="menu">
        <router-link class="menu__item" active-class="active" tag="li" to="/" exact="true">Главная</router-link>
        <router-link class="menu__item" active-class="active" tag="li" to="/portfolio">Портфолио</router-link>
        <router-link class="menu__item" active-class="active" tag="li" to="/contact">Контакты</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
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