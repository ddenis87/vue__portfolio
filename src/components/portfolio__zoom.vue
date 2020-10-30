<template>
  <div class="zoom">
    <img :src="imagesUrl" alt="" class="zoom__images" :class="{'zoom__images_visibility': isVisibility}" id="fullimages"/>
    <div class="zoom__control">
      <img class="control__images" src="@/assets/images/close.png" title="Закрыть" alt="" @click="() => { isVisibility = false; $emit('card-close'); }">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioZoom',
  props: {
    imagesUrl: String,
  },
  data() {
    return {
      isVisibility: false,
    }
  },
  mounted() {
    let fullImages = document.getElementById('fullimages');
    fullImages.addEventListener('load', () => {
        this.isVisibility = true;
      })
  },
}
</script>

<style lang="scss" scoped>
.zoom {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  &__images {
    width: 100%;
    opacity: 0;
    transition: opacity .3s;
    &_visibility { opacity: 1; }
  }
  &__control {
    position: absolute;
    top: 10px;
    right: 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 15px;
    background-color: white;
    cursor: pointer;
    .control__images {
      width: 25px;
    }
  }
}
</style>