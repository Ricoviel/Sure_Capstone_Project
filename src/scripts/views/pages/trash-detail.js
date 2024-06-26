import Swiper from 'swiper';
import SureDBSource from '../../data/sure-source';
import { createTrashDetail } from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';

const TrashDetail = {
  async render() {
    return `
    <section id="trashDetails" class="trashDetails">

    </section>
    `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    // fungsi untuk manggil API
    const getDetail = await SureDBSource.detailTrash(url.id);
    console.log('data:', getDetail);
    const DetailContainer = document.querySelector('#trashDetails');
    DetailContainer.innerHTML = createTrashDetail(getDetail);

    const initSwiper = () => {
      // eslint-disable-next-line no-new
      new Swiper('.mySwiper', {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    };

    initSwiper();

    document.getElementById('kerjakanButton').addEventListener('click', () => {
      // Ambil nilai ID dari atribut data
      const trashDetails = document.getElementById('detailWrap');
      const id = trashDetails.getAttribute('data-id');
      console.log('hasil dari trash-detail:', id);
      // Redirect ke halaman proofupload dengan parameter ID
      window.location.href = `#/proofupload/${id}`;
    });
  },
};

export default TrashDetail;
