const Laporan = {
  async render() {
    return `
    <section class="lapor">
        <h3>Laporkan sampah di sekitar mu</h3>

        <div class="topLapor">
            <button>+</button>
            <button>+</button>
            <button>+</button>
        </div>
    </section>

    <section class="formLaporan">
        <div class="cards">
            <form action="">
                <label for="">Apa sampah yang kamu temukan</label>
                <br>
                <input type="text">
                <br>
                <div class="col2">
                    <div class="card">
                        <label for="">Wilayah</label>
                        <br>
                        <input type="text">
                    </div>
                    <div class="card">
                        <label for="">Titik Lokasi</label>
                        <br>
                        <input type="text">
                    </div>
                </div>
                <br>
                <label for="">Alamat lengkap</label>
                <br>
                <input type="text">
                <br>
                <br>
                <label for="">Deskripsikan Sampahnya</label>
                <br>
                <textarea name="" id=""></textarea>
            </form>
        <button>Submit</button>
        </div>
    </section>
      `;
  },
  async afterRender() {
    // Fungsi ini dapat digunakan untuk melakukan manipulasi DOM setelah render, jika diperlukan.
  },
};

export default Laporan;
