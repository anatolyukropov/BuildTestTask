<template>
  <header class="header">
    <h1 class="header__title">Стаканы</h1>
    <nav class="navbar">
      <ul class="nav-links">
        <button
          v-for="tab in headerData.tabs"
          :key="tab"
          :class="['nav-links__button', { active: headerData.currentTab === tab }]"
          @click="switchTab(tab)"
        >
          {{ tab }}
        </button>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: ['headerData'],
  name: 'NavBar',
  data: () => ({}),
  methods : {
    switchTab (tab) {
      this.$emit('switchTab', tab)
    }
  }
};
</script>

<style scoped>
  .header {
    background-color: #FF9800;
  }
  .header__title {
    padding-left: 30px;
  }

  .navbar {
    width: 100%;
  }
  .nav-links {
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    align-self: flex-end;
    align-items: center;
    min-height: 100%;
    margin: 0;
    padding: 0;
  }
  .nav-links__button {
    list-style-type: none;
    padding: 0 20px;
    align-self: stretch;
    line-height:  100%;
    border: none;
    background-color: #FF9800;
    min-width: 120px;
  }
  .nav-links__button:focus {
    outline: none !important
  }

  .active {
    background-color: #EF6C00;
    border: none;
  }
  .header {
    display: flex;
    flex-direction: row;
  }


</style>
