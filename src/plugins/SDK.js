const axios = require('axios');

export const SDK = {
  get : async (symbol)=> {
      let glass = await axios.get(`/depth?symbol=${symbol}`);   // делаем снепшот стакана по символу ${symbol}
      return glass.data;
      },
  subscribe : function(symbol)  {
      const {EventBus} = require('./EventBus')
      let ws = new WebSocket(`${process.env.VUE_APP_API_BINANCE_WS}${symbol.toLowerCase()}@depth`);
      return ws     // возвращаем сокет
  }
};