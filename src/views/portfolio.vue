<template>
  <div class="portfolio" id="page">
    <h4 class="portfolio__title">Портфолио</h4>
    <p class="portfolio__text">Большенство проектов над которыми работал, представляют из себя приложения для работы профильных специалистов при работе с базами данных. Они имеют специфический функционал и не особо нуждаются в дизайне (более значима функциональная часть), а потому не представлены здесь.</p>
    <p class="portfolio__text">Здесь представлены проекты которые были сделаны в ходе обучения и в качестве тестовых заданий. Один из представленных проектов (последний) является коммерческим, и можно сказать первым в направлении Frontend-а.</p>
    
    <!-- <div class="portfolio-title">
      <h4 class="portfolio-title__title">Портфолио</h4>
      <p class="portfolio-title__text">Большенство проектов над которыми работал, представляют из себя приложения для работы профильных специалистов при работе с базами данных. Они имеют специфический функционал и не особо нуждаются в дизайне (более значима функциональная часть), а потому не представлены здесь.</p>
      <p class="portfolio-title__text">Здесь представлены проекты которые были сделаны в ходе обучения и в качестве тестовых заданий. Один из представленных проектов (последний) является коммерческим, и можно сказать первым в направлении Frontend-а.</p>
    </div> -->
    <div class="portfolio__body">
      <portfolio-card v-for="(item, index) in listItem" :key="index" :cardItem="item"></portfolio-card>
    </div>
  </div>
</template>

<script>
import PortfolioCard from '@/components/portfolio__card';

export default {
  name: 'Portfolio',
  components: {
    PortfolioCard,
  },
  computed: {
    listItem() { return this.$store.getters.GET_LIST_PROJECT; },
  },
  beforeUnmount() { window.scrollTo(0,0); },
}
</script>

<style lang="scss" scoped>
@import '~@/variable.scss';

.portfolio {
  margin-bottom: 20px;
  max-width: $widthMaxContent;
  width: 100%;
  color: $bodyTextColor;
  transition: all .3s;
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

.page-enter-active {
  opacity: 0;
  transition: all 0s;
}
.page-enter {
  opacity: 0;
}
</style>