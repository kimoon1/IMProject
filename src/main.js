import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import router from './routes';

const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

createApp(App).use(store).use(router).mount('#app');
