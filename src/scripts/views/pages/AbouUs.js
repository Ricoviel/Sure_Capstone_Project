const AboutUs = {
  async render() {
    return `
      <div class="team">
        <div class="title">
            <h1>Our Team</h1>
        </div>

        <div class="ourTeam">
            <div class="card">
                <div class="images">
                    <img src="../assets/team1.png" alt="">
                </div>
                <div class="cardText">
                    <h3>No Name</h3>
                    <p>Front-End | UX-UX</p>
                    <br>
                    <p>halo perkenalkan nama saya nex carlos, saat ini saya adalah seorang frontend developer yang mengambil jurusan teknik informatika, sebagai seoarang mahasiswa, saya memiliki beberapa skill yang tentunya didapat saat proses pembelajaran diluar maupun di dalam kampus. membuat website dan mendesain tampilan website adalah keahlian yang saya miliki. tidak hanya itu,  saya juga mahir untuk dapat mengolah serta memproses data</p>
                </div>
            </div>
            <div class="card">
                <div class="images">
                    <img src="../assets/team2.png" alt="">
                </div>
                <div class="cardText">
                    <h3>No Name</h3>
                    <p>Front-End | UX-UX</p>
                    <br>
                    <p>halo perkenalkan nama saya nex carlos, saat ini saya adalah seorang frontend developer yang mengambil jurusan teknik informatika, sebagai seoarang mahasiswa, saya memiliki beberapa skill yang tentunya didapat saat proses pembelajaran diluar maupun di dalam kampus. membuat website dan mendesain tampilan website adalah keahlian yang saya miliki. tidak hanya itu,  saya juga mahir untuk dapat mengolah serta memproses data</p>
                </div>
            </div>
            <div class="card">
                <div class="images">
                    <img src="../assets/team3.png" alt="">
                </div>
                <div class="cardText">
                    <h3>No Name</h3>
                    <p>Front-End | UX-UX</p>
                    <br>
                    <p>halo perkenalkan nama saya nex carlos, saat ini saya adalah seorang frontend developer yang mengambil jurusan teknik informatika, sebagai seoarang mahasiswa, saya memiliki beberapa skill yang tentunya didapat saat proses pembelajaran diluar maupun di dalam kampus. membuat website dan mendesain tampilan website adalah keahlian yang saya miliki. tidak hanya itu,  saya juga mahir untuk dapat mengolah serta memproses data</p>
                </div>
            </div>
        </div>
    </div>

    <section class="visi">
        <div class="title">
            <h3>Visi Kami</h3>
        </div>

        <div class="visiContent">
            <div class="card">
                <p>Website sure menetapkan diri sebagai layananan pelaporan yang bergerak di bdang lingkungan guna mempermudah masyarakat untuk melaporkan adanya sampah di sekitar lingkungan mereka, yang berpusat di jakarta selatan dan akan berlanjut ke seluruh indonesia bahkan dunia, website SURE juga menjadi sarana edukasi yang memberikan informasi mengenai sampah dan juga cara mendaur ulang sampah yang baik dan benar</p>
            </div>
        </div>
    </section>

    <section class="misi">
        <div class="title">
            <h3>Misi Kami</h3>
        </div>

        <div class="misiContent">
            <ul>
                <li>Mewujudkan peningkatan kualitas lingkungan dalam rangka pelestarian fungsi lingkungan hidup dengan mengikutsertakan dunia usaha, masyarakat dan sekolah dalam pengelolaan lingkungan hidup degan mengikutsertakan dunia usaha, masyarakat dan sekolah dalam pengelolaan lingkungan</li>
                <li>Mewujudkan ruang terbuka hijau kawasan perkotaan yang memenuhi fungsi ekologis. fungsi estetis, fungsi sosial dan nyaman</li>
                <li>Mewujudkan tatakelola kebersihan dan pengelolaan persampahan yang berkualitas</li>
            </ul>
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
    // Fungsi ini dapat digunakan untuk melakukan manipulasi DOM setelah render, jika diperlukan.
  },
};

export default AboutUs;