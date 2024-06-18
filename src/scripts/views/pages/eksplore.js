import SureDBSource from '../../data/sure-source';
import { createSureEksplore } from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';

const SureEksplore = {
  async render() {
    return `
    <div class="trashTitle">
          <h3>Sampah yang perlu di bersihkan</h3>
    </div>
    <section id="trash" class="trash">
      
    </section>

    <section class="scan">
        <div class="card">
            <div class="images">
                <img src="../assets/qr.png" alt="Barcode Saweria Sure">
            </div>
            <div class="cardText">
                <h1>Donasi <br> Aplikasi Trashfinder</h1>
                <p>Sociallbuzz</p>
                <p>Donasi kamu akan di donasikan</p>
            </div>
        </div>
    </section>
    `;
  },
  async afterRender() {
    // fungsi untuk manggil API
    const getListEksplore = await SureDBSource.trashList();
    console.log(getListEksplore);
    const EksploreContainer = document.querySelector('#trash');
    getListEksplore.forEach((trash) => {
      EksploreContainer.innerHTML += createSureEksplore(trash);
    });
  },
};

export default SureEksplore;
