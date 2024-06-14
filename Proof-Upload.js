const ProofUpload = {
  async render() {
    return `
    <section id="ProofUpload" class="ProofUpload">
        <section id="uploadDetails" class="uploadDetails">
            <h2> Halo selamat datang </h2>
        </section>
        
        <section class="thankYouSection">
            <h1>Terimakasih!!</h1>
            <p>Atas partisipasi kamu dalam menjaga kebersihan lingkungan! Bumi mengapresiasi segala usaha kamu, mari melanjutkan berbuat baik ke bumi yang kita tinggali. Selanjutnya tolong unggah foto lokasi sampah yang telah kamu bersihkan, pastikan foto memiliki angle yang sama dari pengunggah yaa...</p>
            <div class="uploadContainer">
                <div class="uploadBox">+</div>
                <div class="uploadBox">+</div>
                <div class="uploadBox">+</div>
            </div>
            <textarea placeholder="Deskripsikan kegiatan kamu barusan" class="uploadDeskripsi"></textarea>
            <button>Unggah pembersihan</button>
        </section>
    </section>
`;
  },

  async afterRender() {
    // fungsi untuk manggil API
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    console.log('hasil url: ', url);

    const getListEksplore = await SureDBSource.trashList();
    console.log(getListEksplore);
    const EksploreContainer = document.querySelector('#uploadDetails');
    getListEksplore.forEach((trash) => {
      EksploreContainer.innerHTML += createProofUpload(trash);
    });
  },
};

export default ProofUpload;
