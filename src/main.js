import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

Vue.config.productionTip = false

Object.defineProperty(Vue.prototype, '$locale', {
  get: function () {
    return i18n.locale
  },
  set: function (locale) {
    i18n.locale = locale
  }
})

Object.defineProperty(Vue.prototype, '$available_locales', {
  get: function () {
    return Object.keys(this.$i18n.messages);
  }
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
