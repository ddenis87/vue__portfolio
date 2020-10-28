<template>
  <div class="portfolio" id="page">
    <!-- <div class="portfolio-card"><img class="portfolio-card__images" src="@/assets/images/project/hostel-min.png" /></div>
    <div class="portfolio-card"><img class="portfolio-card__images" src="@/assets/images/project/arch-min.png" /></div>
    <div class="portfolio-card"><img class="portfolio-card__images" src="@/assets/images/project/tyMarket-min.png" /></div>
    <div class="portfolio-card"><img class="portfolio-card__images" src="@/assets/images/project/psychologist-min.png" /></div> -->
    <portfolio-card v-for="(item, index) in listItem" :key="index" :cardItem="item"></portfolio-card>
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
  beforeUnmount() { this.goTopPage() },
  methods: {
    goTopPage() {
      window.scrollTo(0,0);
    }
  },
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
  margin: 20px 0px;
  transition: all .3s;
}
.page-enter-active {
  opacity: 0;
  transition: all 0s;
}
.page-enter {
  opacity: 0;
}
</style>