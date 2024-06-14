// import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ content }) {
    // this._button = button;
    // this._drawer = drawer;
    this._content = content;
  }

  //   _initialAppShell() {
  //     DrawerInitiator.init({
  //       button: this._button,
  //       drawer: this._drawer,
  //       content: this._content,
  //     });

  // kita bisa menginisiasikan komponen lain bila ada
  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
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
