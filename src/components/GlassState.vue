<template>
  <div class="content">
    <div class="symbol-type">Symbol = {{ symbol }}</div>
    <div class="wrapper">
      <tableComp :items="glass.bids"></tableComp>
      <tableComp :items="glass.asks"></tableComp>
    </div>
  </div>
</template>

<script>
import tableComp from "./TableComp.vue";
export default {
  name: "GlassState",
  components: { tableComp },
  data: () => ({
    glass: {
      bids: null,
      asks: null
    },
    symbol: "BTCUSDT",
    ws : null
  }),
  async created() {
    let glass = await this.$sdk.get(this.symbol);   // делаем снепшот
    this.glass = glass;                             // отрисовываем снепшот
    this.ws = this.$sdk.subscribe(this.symbol);     // подписываемся на получение diff
    this.ws.onmessage = async event => {            // запускаем callBack при получении сообщений
      let data = JSON.parse(event.data);            // арсим данные в Json
      console.log(data.s);                          // Это для тестов, смотрим что получаем
      let [asksAdd, bidsAdd] = [                    // создаём массивы новых данных
        data.a.filter(item => item[1] != 0),
        data.b.filter(item => item[1] != 0)
      ];
      this.glass.asks.splice(0, asksAdd.length);    // удаляем из буффера asks столько данных сколько пришло
      this.glass.bids.splice(0, bidsAdd.length);    // удаляем из буффера bids столько данных сколько пришло
      this.glass.asks = [...this.glass.asks, ...asksAdd]; // дописываем полученные данные в буфер asks
      this.glass.bids = [...this.glass.bids, ...bidsAdd]; // дописываем полученные данные в буфер bids
    };
    this.$bus.$on("symbol",  symbol => {
      this.symbol = symbol;
      this.ws.close();
      this.ws = this.$sdk.subscribe(this.symbol);
    });
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 10px 0 0 0;
}
.symbol-type {
  text-align: center;
  width: 100%;
  background-color: black;
  color: white;
}
</style>
