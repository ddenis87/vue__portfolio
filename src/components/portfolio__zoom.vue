<template>
  <div class="zoom">
    <img :src="url" 
         alt="" 
         class="zoom__images" 
         :class="{'zoom__images_visibility': isVisibility}" 
         id="fullimages" 
         @blur="{ isVisibility = false; $emit('card-close'); }" 
         tabindex="-1"/>
    <div class="zoom__control">
      <img class="control__images" 
           src="@/assets/images/close.png" 
           title="Закрыть" 
           alt=""/>
    </div>
  </div>
</template>

<script>
import nProgress from 'nprogress';

export default {
  name: 'PortfolioZoom',
  components: {
    nProgress,
  },
  props: {
    imagesUrl: String,
  },
  computed: {
    url() { if(this.imagesUrl) { nProgress.start(); document.getElementById('fullimages').focus(); this.isVisibility = true; } return this.imagesUrl; },
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
      nProgress.done();
    });
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
    transition: opacity .5s;
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