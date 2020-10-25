<template>
  <div class="portfolio">
    <div class="first-small"><img class="first-small__img" src="@/assets/images/project/hostel-min.png" /></div>
    <div class="second-small"><img class="second-small__img" src="@/assets/images/project/arch-min.png" /></div>
    <div class="medium"><img class="medium__img" src="@/assets/images/project/tyMarket-min.png" /></div>
    <div class="large"><img class="large__img" src="@/assets/images/project/psychologist-min.png" /></div>
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
  display: grid;
  grid-template-areas: "first-small medium large"
                       "second-small medium large";
  grid-template-rows: auto auto;
  grid-template-columns: 20% 30% 1fr;
  max-width: $widthMaxContent;
  width: 100%;
  border: 1px solid black;

  .first-small {
    grid-area: first-small; 
    border: 1px solid red;
    &__img {
      width: 100%;
    }
  }
  .second-small { grid-area: second-small; border: 1px solid blue;
    &__img {
      width: 100%;
    }
  }
  .medium { grid-area: medium; border: 1px solid green;
    &__img {
      width: 100%;
    }
  }
  .large { grid-area: large; border: 1px solid grey;
    &__img {
      width: 100%;
    }
  }
}
</style>