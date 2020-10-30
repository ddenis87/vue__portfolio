<template>
  <div class="main" id="page">
    <div class="main__window">
      <main-window></main-window>
    </div>
    <div class="main__body">
      <div class="body-item body-item_left">
        <h4 class="body-item__title">Обо мне</h4>
        <p class="body-item__text">Привет, меня зовут Денис Донцов мне {{ (new Date().getFullYear() - new Date('10/03/1987').getFullYear()) }}, и я занимаюсь Frontend разработкой. Сейчас я работаю в сфере защиты информации попутно разрабатывая и внедряя 
          небольшие решения для автоматизации рабочих процессов.</p> 
        <p class="body-item__text">Почему Frontend? Наверное, потому что приятно видеть открытые приложения, разработанные тобой, видеть, что люди пользуются твоими решениями, видеть результат своей работы.
          Порой увлекшись процессом разработки забываешь, что людям иногда надо есть, спать (придумал же кто-то). Время отдыха предпочитаю проводить с пользой, пешие прогулки, велопрогулки, роликовые коньки, бассейн.</p>
      </div>
      <div class="body-item body-item_right">
        <h4 class="body-item__title">Образование</h4>
        <ul class="list">
          <li class="list__item">Благовещенский Государственный Педагогический Университет</li>
          <ul class="list-sub">
            <li class="list-sub__item">Высшее</li>
            <li class="list-sub__item">Физико-математический факультет</li>
            <li class="list-sub__item">Инженер информационных технологий</li>
          </ul>
        </ul>
        <ul class="list">
          <li class="list__item">Академия АйТи</li>
          <ul class="list-sub">
            <li class="list-sub__item">Профессиональная переподготовка</li>
            <li class="list-sub__item">Комплексная защита объектов информатизации</li>
          </ul>
        </ul>
      </div>
    </div>
    <div class="main__body main__body_center">
      <div class="body-item">
        <h4 class="body-item__title">Навыки</h4>
        <p class="body-item__text">На сегодняшний день, моей целью является дальнейшее развитие имеющихся навыков и изучение новых.</p>
        <main-progress class="body-item__progress" v-for="(item, index) in listSkils" :listProperties="item" :key="index"></main-progress>
      </div>
    </div>
  </div>
</template>

<script>
import MainWindow from '@/components/main__window.vue';
import MainProgress from '@/components/main__progress.vue';

export default {
  name: 'Main',
  components: {
    MainWindow,
    MainProgress,
  },
  computed: {
    listSkils() { return this.$store.getters.GET_LIST_SKILS; }
  },
  beforeUnmount() { window.scrollTo(0,0); },
}
</script>

<style lang="scss" scoped>
@import '~@/variable.scss';
@import 'animation-router.scss';

.main {
  margin-bottom: 20px;
  max-width: $widthMaxContent;
  width: 100%;
  color: $bodyTextColor;
  transition: all .3s;
  &__window { height: $windowHeight; }
  &__body {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    font-family: 'Open sans';
    font-size: 1em;
    &_center { justify-content: center; }
    .body-item {
      max-width: ($widthMaxContent - 40px) / 2;
      min-width: 400px;
      width: 100%;
      &_left { margin-right: 10px; }
      &_right { margin-left: 10px; }
      &__title {
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
      }
      &__text {
        text-indent: 25px;
        text-align: justify;
      }
      .list {
        margin-bottom: 10px;
        padding: 0px;
        &__item { list-style: none; }
        &-sub {
          padding-left: 18px;
          &__item {
            padding: 2px;
            list-style: none;
            &::before {
              content: "";
              display: inline-block;
              width: 15px;
              height: 15px;
              background-image: url('~@/assets/images/arrow.png');
              background-repeat: no-repeat;
              background-size: contain;
              background-position-y: 3px;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 860px) {
  .main {
    &__body {
      justify-content: center;
      flex-wrap: wrap;
      .body-item {
        &_left, &_right { margin: 0px; }
      }
    }
  }
}
</style>
