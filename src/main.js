import { createApp } from 'vue'
import './main.scss'
import router from './router/index.js';
import App from './App.vue'
import BaseButton from './components/base/BaseButton.vue';
import BaseHeadingOne from './components/base/BaseHeadingOne.vue';
import BaseHeadingTwo from './components/base/BaseHeadingTwo.vue';
import BaseProduct from './components/base/BaseProduct.vue';
import { MotionPlugin } from '@vueuse/motion'






const app = createApp(App);



app.use(router);
app.component('BaseButton', BaseButton);
app.component('BaseHeadingOne', BaseHeadingOne);
app.component('BaseHeadingTwo', BaseHeadingTwo);
app.component('BaseProduct', BaseProduct);
app.use(MotionPlugin)
app.mount('#app');