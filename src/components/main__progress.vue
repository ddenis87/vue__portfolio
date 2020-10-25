<template>
  <div class="progress">
    <div class="progress-title">
      <img :src="'./assets/images/tech/' + listProperties.img" alt="" class="progress-title__images">
      <h5 class="progress-title__title">{{ listProperties.title }}</h5>
    </div>

    <div class="progress-bar">
      <div class="progress-bar__title">
        <h6 class="progress-bar__title_range">null</h6>
        <h6 class="progress-bar__title_range">Junior</h6>
        <h6 class="progress-bar__title_range">Middle</h6>
        <h6 class="progress-bar__title_range">Senior</h6>
        <h6 class="progress-bar__title_range">&nbsp;&nbsp;&nbsp;&#8734;</h6>
      </div>
      <div class="progress-bar__line"
           :style="{'background': `linear-gradient(135deg, darkcyan ${listProperties.progress}%, white 0% 100%)`}">
        <hr class="progress-bar__line-step"/>
        <hr class="progress-bar__line-step"/>
        <hr class="progress-bar__line-step"/>
        <hr class="progress-bar__line-step"/>
        <hr class="progress-bar__line-step"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainProgress',
  props: {
    listProperties: Object,
  },
}
</script>

<style lang="scss" scoped>
.progress {
  display: flex;
  align-items: center;
  padding-bottom: 6px;
  border-bottom: 1px solid darkslategrey;
  &-title {
    align-self: flex-end;
    display: inline-flex;
    max-width: 150px;
    width: 100%;
    &__title { margin: 0px 0px; }
    &__images {
      width: auto;
      height: 20px;
      margin-right: 10px;
    }
  }
  &-bar {
    width: 100%;
    &__title {
      display: flex;
      justify-content: space-between;
      &_range { margin: 0px; }
    }
    &__line {
      display: flex;
      justify-content: space-between;
      height: 8px;
      width: 100%;
      border: 1px solid grey;
      box-sizing: border-box;
      color:darkcyan;

      &-step {
        color: white;
        margin: 0px;

      }
    }
  }
}
</style>