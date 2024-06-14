import SureDBSource from '../../data/sure-source';
import { createTrashHasil } from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';

const Hasil = {
  async render() {
    return `
    <div class="teksTitle">
         <h3>Sampah yang Sudah di Bersihkan</h3>
    </div>
    <section id="hasil" class="hasil">
      
    </section>

    <section class="scan">
        <div class="card">
            <div class="images">
                <img src="../assets/qr.png" alt="">
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
    const getListEksplore = await SureDBSource.trashFinished();
    console.log(getListEksplore);
    const EksploreContainer = document.querySelector('#hasil');
    getListEksplore.forEach((trash) => {
      EksploreContainer.innerHTML += createTrashHasil(trash);
    });
  },
};

export default Hasil;
