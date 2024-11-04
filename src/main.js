import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Si estás usando Vue Router
import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()
createApp(App)
  .use(router)
  .mount('#app');

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('nav-list-mobile');
      console.log('Menu toggled');
    });
  }
});

const app = createApp(App);
app.use(router);
app.mount('#app');