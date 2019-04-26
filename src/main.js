import Vue from 'vue';
import Index from './components/index.vue';

Vue.config.productionTip = false;

new Vue({
    // el: '#app',
    render: h => h(Index)
}).$mount('#app');
