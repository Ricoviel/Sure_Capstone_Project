import Swiper from 'swiper/bundle';
import SureDBSource from '../../data/sure-source';
import { createHomeTrash } from '../templates/template-creator';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = {
  async render() {
    return `
      <section class="hero">
      <div class="heroWrapper swiper mySwiper">
        <div class="cardWrapper swiper-wrapper">
          <div class="card card1 swiper-slide">
            <div class="heroText">
              <h1>Kolaborasi</h1>
              <p>Unggah lokasi <br> sampah yang kamu <br> ketahui</p>
            </div>
          </div>
          <div class="card card2 swiper-slide">
            <div class="heroText">
              <h1>Kontribusi</h1>
              <p>Bersihkan sampah <br> dan ajak teman kamu </p>
            </div>
          </div>
          <div class="card card3 swiper-slide">
            <div class="heroText">
              <h1>Eksplorasi</h1>
              <p>Ketahuilah, banyak <br> lingkungan tercemar <br> di luar sana</p>
            </div>
          </div>
        </div>
        <!-- tombol navigasi -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </div>
    </section>
    
          <section class="penyuluhan">
            <div class="title">
                <h3>Aksi Penyuluhan</h3>
            </div>
            <div class="penyuluhanContent">
                <div class="coll1">
                    <div class="images">
                        <img src="/assets/bigImg.png" alt="">
                    </div>
                    <div class="cardText">
                        <h4>Membersihkan selokan di ciseeng</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quo tempore, ipsa hic ratione cupiditate!</p>
                    </div>
                </div>
                <div class="coll2">
                    <div class="card">
                        <div class="images">
                            <img src="/assets/smallImg.png" alt="">
                        </div>
                        <div class="cardText">
                            <h4>Membersihkan selokan di ciseeng</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quo tempore, ipsa hic ratione cupiditate!</p>
                        </div>
                    </div>
                    <div class="card card2">
                        <div class="images">
                            <img src="/assets/smallImg.png" alt="">
                        </div>
                        <div class="cardText">
                            <h4>Membersihkan selokan di ciseeng</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quo tempore, ipsa hic ratione cupiditate!</p>
                        </div>
                    </div>
                </div>
            </div>
          </section>
    
          <div class="homeTrashTitle">
            <h3>Sampah yang perlu di bersihkan</h3>
          </div>
          <section id="homeTrash" class="homeTrash">
            
          </section>
          <div class="HomeTrashButton">    
            <button><a href="#/eksplorasi">Lihat Semua</a></button>
          </div>
    
          <section class="recyle">
            <div class="card">
                <h3>Menjaga Lingkungan Dengan</h3>
                <div class="cardContent">
                    <div class="reduce">
                        <img src="../assets/3R/lets-icons_reduce.png" alt="">
                        <h3><strong>Reduce</strong> berusaha mengurangi jumlah sampah yang di haruskan</h3>
                    </div>
                    <div class="reuse">
                        <img src="../assets/3R/reuse 1.png" alt="">
                        <h3><strong>Reuse</strong> menggunakan kembali bahan yang masih bisa digunakan</h3>
                    </div>
                    <div class="recycle">
                        <img src="../assets/3R/recycle-symbol 1.png" alt="">
                        <h3><strong>Reduce</strong> mengolah kembali sampah menjadi bahan yang bisa digunakan kembali</h3>
                    </div>
                </div>
            </div>
          </section>
    
          <section class="features">
            <div class="title">
                <h3>Fitur Kami</h3>
            </div>
            <div class="featuresContent">
                <a href="#/laporan">
                    <div class="card">
                        <div class="images">
                            <img src="../assets/Fitur/Plastic is the new coal, report finds.jpeg" alt="">
                        </div>
                        <div class="cardText">
                            <h3>Laporkan sampah</h3>
                            <p>Kamu menemukan sampah yang mengganggu? Segera laporkan lewat aplikasi kita.</p>
                        </div>
                    </div>
                </a>
                <a href="#/eksplorasi">
                    <div class="card">
                        <div class="images">
                            <img src="../assets/Fitur/image 22.png">
                        </div>
                        <div class="cardText">
                            <h3>Bersihkan sampah</h3>
                            <p>Ayo, kontribusi dari kita akan membuat lingkungan kita terbebas dari polusi sampah.</p>
                        </div>
                    </div>
                </a>
                <a href="#/jenis">
                    <div class="card">
                        <div class="images">
                            <img src="../assets/Fitur/jenis.jpg" alt="">
                        </div>
                        <div class="cardText">
                            <h3>Kenali jenis sampah</h3>
                            <p>Mau tau jenis sampah apa aja yang umum disekitarmu? Yuk kenali berbagai jenis mereka.</p>
                        </div>
                    </div>
                </a>
            </div>
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
    // Ambil nama pengguna dari Local Storage
    const fullName = localStorage.getItem('full_name');

    // Tampilkan nama pengguna di elemen dengan id 'userFullName'
    const userFullNameElement = document.getElementById('userFullName');
    if (userFullNameElement) {
      userFullNameElement.textContent = fullName || 'Guest'; // Default ke 'Guest' jika tidak ada nama pengguna
    }

    // Fungsi untuk manggil API
    const getListEksplore = await SureDBSource.trashList();
    console.log(getListEksplore);

    // Select the container
    const EksploreContainer = document.querySelector('#homeTrash');

    // Limit the number of items to 4
    const limitedList = getListEksplore.slice(0, 4);

    // Iterate over the limited list and render each item
    limitedList.forEach((trash) => {
      EksploreContainer.innerHTML += createHomeTrash(trash);
    });

    // Inisialisasi Swiper setelah konten dimuat
    const swiper = () => {
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
    swiper();
  },
};

export default Home;
