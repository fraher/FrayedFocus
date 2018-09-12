import Vue from 'vue';
import Hello from './app/Hello.vue';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import {MdButton, MdContent, MdTabs, MdToolbar} from 'vue-material/dist/components';
Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(MdToolbar);

import './index.css';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: Hello
      }
    }
  ]
});

export default new Vue({
  el: '#root',
  router,
  render: h => h('router-view')
});
