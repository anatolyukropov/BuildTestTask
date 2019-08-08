<template>
  <div id="app">
    <navBar
      :headerData="headerData"
      v-on:switchTab="tab => (this.headerData.currentTab = tab)"
      class="navbar"
    />
    <keep-alive>
      <component class="content" :is="currentTabComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import navBar from "./components/NavBar.vue";

export default {
  name: "app",
  data: () => ({
    headerData: {
      tabs: ["GlassState", "DiffList"],
      currentTab: "GlassState",
    },
  }),
  computed: {
    currentTabComponent() {                               //при изменении currentTab меняем компонент
      return this.headerData.currentTab;
    }
  },
  components: {
    navBar,
    GlassState : () => import(/* webpackChunkName:"GlassState" */'./components/GlassState.vue'),  // функциональный импорт, webpack создаст отдельный бандл с ленивой загрузкой
    DiffList :   () => import(/* webpackChunkName:"DiffList" */'./components/DiffList.vue'),      // функциональный импорт, webpack создаст отдельный бандл с ленивой загрузкой
  },

};
</script>

<style>
body {
  min-height: 100%;
  margin: 0;
  padding: 0;
}

</style>
