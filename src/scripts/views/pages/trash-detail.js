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
    console.log('hasil url: ', url);
    // fungsi untuk manggil API
    const getDetail = await SureDBSource.detailTrash(url.id);
    console.log('data:', getDetail);
    const DetailContainer = document.querySelector('#trashDetails');
    DetailContainer.innerHTML = createTrashDetail(getDetail);
  },
};

export default TrashDetail;
