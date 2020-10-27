<template>
  <div class="app" id="app">
    <div class="app-header" :class="{'app-header_scroll': headerShadow}">
      <app-header></app-header>
    </div>
    <!-- <div class="app-window">
      <app-window></app-window>
    </div> -->   
    <div class="app-body">
            <transition name="fade" mode="out-in">
      <router-view></router-view>
         </transition>
    </div>
    <div class="app-footer">
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/app/app-header.vue';
// import AppWindow from '@/components/app/app-window.vue';
import AppFooter from '@/components/app/app-footer.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    // AppWindow,
    AppFooter,
  },
  data() {
    return {
      headerShadow: false,
    }
  },
  created() {
    window.addEventListener('scroll', () => { (window.pageYOffset == 0) ? this.headerShadow = false : this.headerShadow = true; });
    this.$store.dispatch('SET_LIST_SKILS');
  },
}
</script>

<style lang="scss">
@import 'fonts.scss';
@import 'variable.scss';
html { overflow-y: scroll; }
html, body {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: grey;
}

.app {
  position: relative;
  display: grid;
  // grid-template-areas: "app-header" "app-window" "app-body" "app-footer";
  grid-template-areas: "app-header" "app-body" "app-footer";
  // grid-template-rows: $headerHeight $windowHeight auto $footerHeight;
  grid-template-rows: $headerHeight auto $footerHeight;
  grid-template-columns: 100%;
  width: 100%;
  box-sizing: border-box;
  font-family: 'Roboto';
  font-size: $pageFontSize;

  &-header {
    grid-area: app-header;
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0px $headerPaddingLR;
    height: $headerHeight;
    background-color: white; 
    box-sizing: border-box;
    transition: .5s;
    z-index: 999;
    &_scroll { box-shadow: 0px 5px 20px grey; }
  }
  &-window { grid-area: app-window; display: flex; justify-content: center; }
  &-body {
    grid-area: app-body; 
    display: flex; 
    justify-content: center; 
    padding: 0px $bodyPaddingLR;
    z-index: 888;
  }
  &-footer { grid-area: app-footer; display: flex; justify-content: center; background-color: whitesmoke;}
}
// .fade-enter-active, .fade-leave-active {
//   transition: opacity 1s, transform 1s;
// }
// .fade-enter, .fade-leave-to {
//   opacity: 0;
//   transform: translateX(-30%);
// }

</style>
