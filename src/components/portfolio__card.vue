<template>
  <div class="card">
    <div class="card-description">
      <h4 class="card-description__title">{{ cardItem.title }}</h4>
      <p class="card-description__text">{{ cardItem.description }}</p>
    </div>
    <img :src="cardItem.imagesSmall" alt="" class="card__images"/>
    <div class="card__stek">Стек:&nbsp;<span class="card__stek_title">{{ cardItem.stek }}</span>
      
    </div>
    <div class="card__control">
      <img src="@/assets/images/github-black.png" alt="" class="card__control_images"/>
      <img src="@/assets/images/enlarge.png" alt="" class="card__control_images" @click="$emit('card-zoom', cardItem.imagesFull)"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioCard',
  props: {
    cardItem: Object,
  }
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  margin: 10px 10px;
  padding: 0px;
  max-width: 380px;
  width: 100%;
  max-height: 280px;
  min-height: 280px;
  height: 100%;
  overflow-y: hidden;
  border: 1px solid grey;
  
  box-sizing: border-box;
  transition: .1s;
  &:hover { box-shadow: 2px 2px 5px grey; }
  &:hover > &__images { opacity: .1; }
  &:hover > &-description { opacity: 1; }
  &:hover > &__stek { max-height: 40px; }
  &:hover > &__control { max-height: 75px; }
  &__images {
    width: 100%;
    height: auto;
    transition: opacity .3s;
  }
  &-description {
    position: absolute;
    top: 0px;
    padding: 10px;
    opacity: 0;
    transition: opacity .3s;
    &__title {
      text-transform: uppercase;
    }
    &__text {
      margin: 0px;
      padding: 0px;
      color: darkslategray;
      text-indent: 15px;
    }
  }
  &__stek {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-height: 0px;
    height: 100%;
    bottom: 0px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, .8);
    transition: max-height .3s;
    overflow: hidden;
    color: whitesmoke;
    z-index: 555;
    &_title { text-transform: uppercase; }
  }
  &__control {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px 10px;
    width: 100%;
    max-height: 0px;
    height: 100%;
    bottom: 0px;
    box-sizing: border-box;
    background-color: unset;
    transition: max-height .3s;
    overflow: hidden;
    color: whitesmoke;
    z-index: 500;
    &_images {
      width: 28px;
      height: 28px;
      cursor: pointer;
    }
  }

}
</style>