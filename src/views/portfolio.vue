<template>
  <div class="portfolio">
    <div class="portfolio-card"><img class="portfolio-card__images" src="@/assets/images/project/hostel-min.png" /></div>
    <div class="portfolio-card"><img class="portfolio-card__images" src="@/assets/images/project/arch-min.png" /></div>
    <div class="portfolio-card"><img class="portfolio-card__images" src="@/assets/images/project/tyMarket-min.png" /></div>
    <div class="portfolio-card"><img class="portfolio-card__images" src="@/assets/images/project/psychologist-min.png" /></div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio'
}
</script>

<style lang="scss" scoped>
@import '~@/variable.scss';

.portfolio {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 850px;
  width: 100%;
  // border: 1px solid black;
  &-card {
    margin: 10px 10px;
    padding: 0px;
    max-width: 400px;
    width: 100%;
    max-height: 300px;
    height: 100%;
    overflow-y: hidden;
    border: 1px solid grey;
    box-sizing: border-box;
    transition: .3s;
    &:hover {
      padding: 10px;
    }
    &__images {
      width: 100%;
      height: auto;
    }
  }
}
</style>