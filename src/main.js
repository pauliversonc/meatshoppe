import { createApp } from 'vue'
import './main.scss'
import router from './router/index.js';
import App from './App.vue'
import BaseButton from './components/base/BaseButton.vue';
import BaseHeadingOne from './components/base/BaseHeadingOne.vue';
import BaseHeadingTwo from './components/base/BaseHeadingTwo.vue';
import BaseProduct from './components/base/BaseProduct.vue';
import BaseInputText from './components/base/BaseInputText.vue';
import BaseCollapse from './components/base/BaseCollapse.vue';
import BaseHeadingFive from './components/base/BaseHeadingFive.vue';
import { MotionPlugin } from '@vueuse/motion'






const app = createApp(App);



app.use(router);
app.component('BaseButton', BaseButton);
app.component('BaseHeadingOne', BaseHeadingOne);
app.component('BaseHeadingTwo', BaseHeadingTwo);
app.component('BaseProduct', BaseProduct);
app.component('BaseInputText', BaseInputText);
app.component('BaseCollapse', BaseCollapse);
app.component('BaseHeadingFive', BaseHeadingFive);
app.use(MotionPlugin)
app.mount('#app');