<template>
  <div class="content">
    <div class="symbol-type">Symbol = {{ currentSymbol }}</div>
    <div class="wrapper">
      <select class="select" v-model="currentSymbol">
        <option
          v-for="(item, index) in options"
          :key="index"
          class="select__option"
          >{{ item }}</option
        >
      </select>
      <ul class="list">
        <li class="list__content"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiffList",
  data: () => ({
    options: ["BTCUSDT", "BNBBTC", "ETHBTC"],
    currentSymbol: "BTCUSDT"
  }),
  watch: {
    currentSymbol(symbol) {
      this.$bus.$emit('symbol', symbol);
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 0 0 0 0;
}
.list {
  list-style-type: none;
}
.select {
  width: 150px;
  height: 50px;
  background-color: black;
  color: #ff9800;
  text-align: center;
}
.select__option {
  width: 150px;
  min-height: 3em !important;
  background-color: black;
  color: #ff9800;
  text-align: center;
}
.symbol-type {
  text-align: center;
  width: 100%;
  background-color: black;
  color: white;
}
</style>
