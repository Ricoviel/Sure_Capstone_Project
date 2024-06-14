import 'regenerator-runtime';
import '../style/style.css';
// import './components/headbar.js';
import './components/dropdown.js';
import './components/carousel.js';
import App from './views/app';

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
