import Swiper from 'swiper';
import SureDBSource from '../../data/sure-source';
import { createFinishedDetail } from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';

const FinishedDetail = {
  async render() {
    return `
    <section id="trashDetails" class="trashDetails">
        
    </section>
    `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    console.log('hasil url: ', url);
    // fungsi untuk manggil API
    const GetFinishedDetail = await SureDBSource.trashFinishedDetail(url.id);
    console.log('data:', GetFinishedDetail);
    const DetailFinishedContainer = document.querySelector('#trashDetails');
    DetailFinishedContainer.innerHTML = createFinishedDetail(GetFinishedDetail);
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
  },
};

export default FinishedDetail;
