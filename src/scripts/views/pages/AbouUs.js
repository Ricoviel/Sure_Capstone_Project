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
                    <img src="../assets/informal-i.jpeg" alt="Foto ikbal fadilah">
                </div>
                <div class="cardText">
                    <h3>No Name</h3>
                    <p>Front-End | UI-UX</p>
                    <br>
                    <p>Halo, perkenalkan nama saya Ikbal Fadillah. Saat ini, saya adalah seorang frontend developer yang sedang menempuh pendidikan di jurusan Teknik Informatika di Universitas Pancasila. Sebagai seorang mahasiswa, saya memiliki beberapa skill yang didapat dari proses pembelajaran di dalam maupun di luar kampus. Keahlian saya mencakup pembuatan website dan skill desain tampilan website. Tidak hanya itu, saya juga mahir dalam mengolah serta memproses data, serta mampu mengimplementasi desain ke dalam kodingan dengan baik</p>
                </div>
            </div>
            <div class="card">
                <div class="images">
                    <img src="../assets/../assets/informal-k.jpeg" alt="Foto Enrico Juan">
                </div>
                <div class="cardText">
                    <h3>No Name</h3>
                    <p>Front-End | UI-UX</p>
                    <br>
                    <p>Halo, perkenalkan nama saya Enrico Juan Carlos. Saya saat ini menempuh pendidikan di jurusan Teknik Informatika di Universitas Pancasila dan bekerja sebagai frontend developer. Sebagai mahasiswa, saya telah mengembangkan beberapa skill melalui pembelajaran di dalam dan di luar kampus. Keahlian saya termasuk membuat website yang responsive serta mendesain tampilan website dengan memanfaatkan skill desain, Figma, dan UI/UX. Selain itu, saya juga mahir dalam mengolah dan memproses data, serta dapat mengimplementasi desain ke dalam kodingan dengan efektif.</p>
                </div>
            </div>
            <div class="card">
                <div class="images">
                    <img src="../assets/informal-r.jpeg" alt="Foto Rian Wahyu">
                </div>
                <div class="cardText">
                    <h3>No Name</h3>
                    <p>Back-End | API </p>
                    <br>
                    <p>Halo, perkenalkan nama saya Rian Wahyu. Saat ini, saya adalah seorang Back-End Developer yang memiliki beberapa skill yang diperoleh melalui pembelajaran yang telah saya peroleh. Keahlian saya meliputi membuat website dan mendesain tampilan website. Selain itu, saya juga mahir dalam mengolah serta memproses data, mengintegrasikan API, mengatur database, serta mengembangkan dan memantau database. Saya juga berpengalaman dalam menghubungkan aplikasi pada server dan mengelola infrastruktur server. </p>
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
                <img src="../assets/qr.png" alt="Gambar qris">
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
