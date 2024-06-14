import API_ENDPOINT from '../../globals/api-endpoint';
import CONFIG from '../../globals/config';

// Fungsi untuk membuat template kartu restoran
const createHomeTrash = (trash) => `
         <div class="trashHomeDisplay">
            <a href="/#/trash/${trash.id}">
                <div class="homeCardTrash">
                    
                        <img src="${trash.pictures}" alt="">
                    
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
                    
                        <img src="${trash.pictures}" alt="">
                    
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
        <h3>Detail Sampah</h3>
        <div class="card">
            <div class="images">
                <img src="${trash.pictures[0]}" alt="">
                <ul>
                    <li><i class="fas fa-map-marker-alt"></i>Jakarta Selatan</li>
                    <li>Seseorang</li>
                </ul>
            </div>
            <div class="cardText">
                <h3>${trash.title}</h3>
                <p>${trash.description}</p>
                <p><strong>Saya ingin membersihkan tempat ini</strong></p>
                <button><a href="#/ProofUpload">Kerjakan</a></button>
            </div>
        </div>
`;

const createTrashHasil = (trash) => `
        <div class="hasilContent">
            <a href="/#/finished/${trash.id}">
                <div class="cardResult">
                    <div class="imagesResult">
                        <img src="${trash.pictures}" alt="">
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
            <div class="images">
                <img src="${trash.pictures[0]}" alt="">
                <ul>
                    <li><i class="fas fa-map-marker-alt"></i> ${trash.city}</li>
                    <li>${trash.finisher_name}</li>
                </ul>
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
                    <img src="${trash.pictures}" alt="">
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

// Fungsi untuk membuat tombol favorit
const createFavoriteButton = () => `
  <button aria-label="like this restaurant" id="likeButton" class="favorite_resto">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

// Fungsi untuk membuat tombol sudah difavoritkan
const createFavoritedButton = () => `
  <button aria-label="unlike this restaurant" id="likedButton" class="favorite_resto">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createHomeTrash,
  createSureEksplore,
  createTrashDetail,
  createFinishedDetail,
  createProofUpload,
  createTrashHasil,
  createFavoriteButton,
  createFavoritedButton,
};
