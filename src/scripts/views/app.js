/* eslint-disable no-lonely-if */
// import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ content }) {
    // this._button = button;
    // this._drawer = drawer;
    this._content = content;
  }

  // _initialAppShell() {
  //   DrawerInitiator.init({
  //     button: this._button,
  //     drawer: this._drawer,
  //     content: this._content,
  //   });

  // kita bisa menginisiasikan komponen lain bila ada
  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    // Hidden User Login
    const name = await localStorage.getItem('full_name');
    const userDropdown = document.getElementById('user-dropdown');

    console.log('Hasil dari name:', name);

    // Bersihkan userDropdown
    userDropdown.innerHTML = '';

    if (!name) {
      // Tambahkan elemen "Login" jika belum ada
      if (!document.getElementById('login')) {
        const loginElement = document.createElement('a');
        loginElement.href = '#/login';
        loginElement.id = 'login';
        loginElement.textContent = 'Login';
        userDropdown.appendChild(loginElement);
      }

      // Tambahkan elemen "Register" jika belum ada
      if (!document.getElementById('register')) {
        const registerElement = document.createElement('a');
        registerElement.href = '#/register';
        registerElement.id = 'register';
        registerElement.textContent = 'Register';
        userDropdown.appendChild(registerElement);
      }
    } else {
      // Tambahkan elemen "Logout" jika belum ada
      if (!document.getElementById('logout')) {
        const logoutElement = document.createElement('a');
        logoutElement.href = '#/home';
        logoutElement.id = 'logout';
        logoutElement.textContent = 'Logout';
        logoutElement.onclick = function (event) {
          event.preventDefault(); // Mencegah aksi default dari link
          localStorage.removeItem('token');
          localStorage.removeItem('full_name');
          location.reload(); // Reload halaman
          alert('You have been logged out');
        };
        userDropdown.appendChild(logoutElement);
      }
    }

    this._content.innerHTML = await page.render();
    await page.afterRender();

    // const SkipElementary = document.querySelector('.skiptomaincontent');
    // SkipElementary.addEventListener('click', (event) => {
    //   event.preventDefault();
    //   document.querySelector('#main-resto').focus();
    // });
  }
}

export default App;
