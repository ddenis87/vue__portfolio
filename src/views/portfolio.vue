<template>
<div class="body-router" id="page">
  <div class="portfolio">
    <h4 class="portfolio__title">Портфолио</h4>
    <p class="portfolio__text">Большинство проектов над которыми работал, представляют из себя приложения для работы профильных специалистов при работе с базами данных. Они имеют специфический функционал и не особо нуждаются в дизайне (более значима функциональная часть), а потому не представлены здесь.</p>
    <p class="portfolio__text">Здесь представлены проекты которые были сделаны в ходе обучения и в качестве тестовых заданий. Один из представленных проектов (последний) является коммерческим, и можно сказать первым в направлении Frontend.</p>
    <div class="portfolio__body">
      <portfolio-card v-for="(item, index) in listItem" :key="index" :cardItem="item" @card-zoom="cardZoom"></portfolio-card>
    </div>
  </div>
  <portfolio-zoom class="body-router__zoom" :class="{'body-router__zoom_show': zoomVisibility}" :imagesUrl="zoomImagesUrl" @card-close="() => { zoomVisibility = false; }"></portfolio-zoom>
</div>
</template>

<script>
import PortfolioCard from '@/components/portfolio__card';
import PortfolioZoom from '@/components/portfolio__zoom';

export default {
  name: 'Portfolio',
  components: {
    PortfolioCard,
    PortfolioZoom,
  },
  computed: {
    listItem() { return this.$store.getters.GET_LIST_PROJECT; },
  },
  data() {
    return {
      zoomVisibility: false,
      zoomImagesUrl: '',
    }
  },
  beforeUnmount() { window.scrollTo(0,0); },
  methods: {
    cardZoom(url) {
      this.zoomImagesUrl = url;
      this.zoomVisibility = true;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/variable.scss';
@import 'animation-router.scss';
$widthMaxZoom: ($widthMaxContent / 2);

.body-router{
  position: relative;
  display: flex;
  justify-content: center;
  transition: all .3s;
  .portfolio {
    margin-bottom: 20px;
    max-width: $widthMaxContent;
    width: 100%;
    color: $bodyTextColor;
    
    &__title {
      text-align: left;
      text-transform: uppercase;
      font-weight: bold;
      color: $titleTextColor;
    }
    &__text {
      text-indent: 25px;
      text-align: justify;
    }
    &__body {
      align-self: center;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
  &__zoom {
    align-self: center;
    position: absolute;
    max-width: 0px;
    top: 60px;
    padding: 5px;
    border: 0px;
    border-radius: 3px;
    background-color: white;
    overflow: hidden;
    z-index: 999;
    opacity: 0;
    transition: opacity .5s, max-width .5s;
    &_show { 
      opacity: 1; 
      border: 3px solid black;
      max-width: $widthMaxZoom;
    }
  }
}
</style>