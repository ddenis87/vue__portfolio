<template>
  <div class="window">
    <h2 class="window__title">Frontend developer</h2>
    <h6 class="window__description">Creating user interfaces</h6>
  </div>
</template>

<style lang="scss" scoped>
@import '~@/variable.scss';
.window {
  display: flex;
  flex-direction: column;
  justify-content: center;
  letter-spacing: 0.8em;
  color:wheat;
  text-transform: uppercase;
  padding: 0px $windowPaddingLR;
  max-width: $widthMaxContent;
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/images/window.jpg');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  background-attachment: fixed;
  box-sizing: border-box;

  &__title { margin: 0px; }
  &__description { margin: 0px; }
}
</style>