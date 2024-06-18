const Jenis = {
  async render() {
    return `
    <section class="trashHero">
        <div class="cardTextHero">
            <h3 class="titleHero">Time to Recycle</h3>
            <p class="taglineHero">Let's take care of our planet</p>
        </div>
    </section>

    <section class="anorganik">
        <div class="cardContent">
            <div class="images">
                <img src="../assets/anorganik.png" alt="">
            </div>
            <div class="cardText">
                <h3>Anorganik</h3>
                <p>Sampah anorganik adalah jenis sampah yang berasal dari bahan-bahan non hayati, baik berupa produk sintetis maupun hasil proses teknologi pengolahan bahan tambang</p>
            </div>
        </div>
    </section>

    <section class="organik">
        <div class="cardContent">
            <div class="cardText">
                <h3>Organik</h3>
                <p>Sampah Organik adalah jenis sampah yang berasal dari sisa-sisa makhluk hidup, baik hewan, tanaman, maupun manusia. Sampah ini memiliki sifat mudah terurai secara alami oleh mikroorganisme dalam waktu yang relatif singkat.</p>
            </div>
            <div class="images">
                <img src="../assets/organik.png" alt="">
            </div>
        </div>
    </section>

    <section class="danger">
        <h3>Sampah Bahan Berbahaya dan Beracun</h3>

        <div class="dangerContent">
            <div class="card">
                <img src="../assets/image 23.png" alt="">
            </div>
            <div class="cardText">
                <p>Sampah B3 umumnya diwadahi dengan tempat sampah berwarna merah. Sampah B3 merupakan sampah yang dapat membahayakan manusia, hewan, atau lingkungan sekitar. Contoh sampah B3 yaitu sampah kaca, kemasan detergen atau pembersih lainnya, serta pembasmi serangga dan sejenisnya</p>
            </div>
        </div>
    </section>

    <section class="gallery">
        <div class="title">
            <h3>Our Gallery</h3>
        </div>

        <div class="galleryContent">
            <div class="card">
                <div class="images">
                    <img src="../assets/Biogas(organik).jpg" alt="">
                    <div class="cardText">
                        <p class="cardTitle"><b>Sampah Organik - Biogas</b></p>
                        <p class="cardInfo">Energi yang dihasilkan dari limbah organik seperti kotoran ternak, atau limbah dapur seperti sayuran yang sudah digunakan </p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="images">
                    <img src="../assets/kompos(organik).jpg" alt="">
                    <div class="cardText">
                        <p class="cardTitle"><b>Sampah Organik - Kompos</b></p>
                        <p class="cardInfo">Pupuk yang terbuat dari sampah rumah tangga, sampah tanaman, sampah pasar dan lain-lain dan dibuat melalui proses pengomposan.</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="images">
                    <img src="../assets/pakanHewan(organik).jpeg" alt="">
                    <div class="cardText">
                        <p class="cardTitle"><b>Sampah Organik - Pakan Hewan</b></p>
                        <p class="cardInfo">Pemanfaatan sampah organik seperti sisa makanan dapat digunakan untuk memberi makan hewan.</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="images">
                    <img src="../assets/tempatSampah(anorganik).jpg" alt="">
                    <div class="cardText">
                        <p class="cardTitle"><b>Sampah Anorganik - Tempat Sampah</b></p>
                        <p class="cardInfo">Pembuatan tempat sampah dari plastik sehingga lebih berguna untuk lingkungan.</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="images">
                    <img src="../assets/pot(anorganik).jpg" alt="">
                    <div class="cardText">
                        <p class="cardTitle"><b>Sampah Anorganik - Pot</b></p>
                        <p class="cardInfo">Sampah seperti botol bekas, kaleng, kantong kresek, dan lainnya dapat dimanfaatkan untuk membuat bahan kerajinan tangan.</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="images">
                    <img src="../assets/tas(anorganik).png" alt="">
                    <div class="cardText">
                        <p class="cardTitle"><b>Sampah Anorganik - Tas</b></p>
                        <p class="cardInfo">Kerajinan tangan yang dibuat dengan memanfaatkan plastik bekas.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
  },
  async afterRender() {
    // Fungsi ini dapat digunakan untuk melakukan manipulasi DOM setelah render, jika diperlukan.
  },
};

export default Jenis;
