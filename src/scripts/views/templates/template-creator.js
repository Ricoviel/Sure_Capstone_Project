import API_ENDPOINT from '../../globals/api-endpoint';
import CONFIG from '../../globals/config';

// Fungsi untuk membuat template kartu restoran
const createHomeTrash = (trash) => `
         <div class="trashHomeDisplay">
            <a href="/#/trash/${trash.id}">
                <div class="homeCardTrash">
                    
                        <img src="${trash.pictures}" alt="Tumpukan sampah">
                    
                    <div class="cardTextHomeDisplay">
                        <p>${trash.city}</p>
                        <h3>${trash.title}</h3>
                        <p>${trash.description}</p>
                    </div>
                </div>
            </a>
        </div>
`;

const createSureEksplore = (trash) => `
        <div class="trashContent">
            <a href="/#/trash/${trash.id}">
                <div class="card">
                    
                        <img src="${trash.pictures}" alt="Tumpukan sampah">
                    
                    <div class="cardText">
                        <p>${trash.city}</p>
                        <h3>${trash.title}</h3>
                        <p>${trash.description}</p>
                    </div>
                </div>
            </a>
        </div>
`;

const createTrashDetail = (trash) => `
    <section id="detailWrap" data-id="${trash.id}">
    <h3>Detail Sampah</h3>
    <div class="card">
        <div class="images swiper mySwiper">
            <div class="swiper-wrapper">
                ${trash.pictures.map((picture) => `
                    <div class="swiper-slide">
                        <img src="${picture}" alt="${trash.title}">
                    </div>
                `).join('')}
            </div>
            <ul>
                <li><i class="fas fa-map-marker-alt"></i> ${trash.city}</li>
                <li>${trash.uploader_name}</li>
            </ul>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="cardText">
            <h3>${trash.title}</h3>
            <p class="descriptionDetail">${trash.description}</p>
            <p class="addressDetail"><i>Alamat: ${trash.address}</i></p>
            <p><strong>Saya ingin membersihkan tempat ini</strong></p>
            <button id="kerjakanButton">Kerjakan</button>
        </div>
    </div>
</section>
`;

const createTrashHasil = (trash) => `
        <div class="hasilContent">
            <a href="/#/finished/${trash.id}">
                <div class="cardResult">
                    <div class="imagesResult">
                        <img src="${trash.pictures}" alt="Hasil pembersihan tumpukan sampah">
                    </div>
                    <div class="teksDesc">
                        <p>${trash.city}</p>
                        <h3>${trash.title}</h3>
                        <p>${trash.finisher_message}</p>
                    </div>
                </div>
            </a>
        </div>
`;

const createFinishedDetail = (trash) => `
    <h3>Sampah Sudah Dibersihkan</h3>
    <div class="card">
        <div class="images swiper mySwiper">
        <div class="swiper-wrapper">
        ${trash.pictures.map((picture) => `
            <div class="swiper-slide">
            <img src="${picture}" alt="${trash.title}">
            </div>
            `).join('')}
            </div>
            <ul>
                <li><i class="fas fa-map-marker-alt"></i> ${trash.city}</li>
                <li>${trash.finisher_name}</li>
            </ul>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="cardText">
            <h3>${trash.title}</h3>
            <p>${trash.finisher_message}</p>
            <p><a href="${trash.location_url}" target="_blank"> <i class="fas fa-map-marker-alt"></i> ${trash.location_url}</a></p>
        </div>
    </div>
`;

const createProofUpload = (trash) => `
        <div class="uploadCard">
                <div class="imagesUpload">
                    <img src="${trash.pictures[0]}" alt="Tumpukan sampah yang ingin dibersihkan">
                </div>
                <div class="uploadCardText">
                    <div class="header">
                        <h3>${trash.title}</h3>
                        <p class="location">${trash.city}</p>
                    </div>
                    <p>${trash.description}</p>
                </div>
        </div>
`;

export {
  createHomeTrash,
  createSureEksplore,
  createTrashDetail,
  createFinishedDetail,
  createProofUpload,
  createTrashHasil,
};
