export default {
    install(Vue) {
        const {EventBus} = require('./EventBus');
        const {SDK} = require('./SDK');
        Vue.prototype.$bus = EventBus;
        Vue.prototype.$sdk = SDK;
    }
};