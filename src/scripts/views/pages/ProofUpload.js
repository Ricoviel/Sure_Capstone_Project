import SureDBSource from '../../data/sure-source';
import { createProofUpload } from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';

const ProofUpload = {
  async render() {
    return `
    <section class="ProofUpload">
        <section id="uploadDetails" class="uploadDetails">
            
        </section>
        
        <section class="thankYouSection">
            <h1>Terimakasih!!</h1>
            <p>Atas partisipasi kamu dalam menjaga kebersihan lingkungan! Bumi mengapresiasi segala usaha kamu, mari melanjutkan berbuat baik ke bumi yang kita tinggali. Selanjutnya tolong unggah foto lokasi sampah yang telah kamu bersihkan, pastikan foto memiliki angle yang sama dari pengunggah yaa...</p>
            <div class="uploadContainer">
                <input type="file" id="fileInput1" style="display:none;">
                <div class="uploadBox" id="uploadBox1">+</div>
            
                <input type="file" id="fileInput2" style="display:none;">
                <div class="uploadBox" id="uploadBox2">+</div>
            
                <input type="file" id="fileInput3" style="display:none;">
                <div class="uploadBox" id="uploadBox3">+</div>
            </div>
            <p>* Foto maksimal berukuran 300kb</p>
            <textarea placeholder="Deskripsikan kegiatan kamu barusan" id="description" class="uploadDeskripsi"></textarea>
            <button id="uploadButton">Unggah pembersihan</button>
        </section>
    </section>
    `;
  },
  async afterRender() {
    try {
      // Fungsi untuk memanggil API
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      console.log('hasil url dari proof: ', url.id);

      const trash = await SureDBSource.detailTrash(url.id);

      const EksploreContainer = document.querySelector('#uploadDetails');
      if (EksploreContainer) {
        EksploreContainer.innerHTML = createProofUpload(trash);
      } else {
        console.error('#uploadDetails element not found in DOM.');
      }
    } catch (error) {
      console.error('Error fetching trash details:', error);
    }

    document.getElementById('uploadBox1').addEventListener('click', () => {
      document.getElementById('fileInput1').click();
    });

    document.getElementById('uploadBox2').addEventListener('click', () => {
      document.getElementById('fileInput2').click();
    });

    document.getElementById('uploadBox3').addEventListener('click', () => {
      document.getElementById('fileInput3').click();
    });

    // Display selected images with size validation
    document.getElementById('fileInput1').addEventListener('change', (event) => {
      validateAndDisplayImage(event, 'uploadBox1');
    });

    document.getElementById('fileInput2').addEventListener('change', (event) => {
      validateAndDisplayImage(event, 'uploadBox2');
    });

    document.getElementById('fileInput3').addEventListener('change', (event) => {
      validateAndDisplayImage(event, 'uploadBox3');
    });

    function validateAndDisplayImage(event, uploadBoxId) {
      const uploadBox = document.getElementById(uploadBoxId);
      const file = event.target.files[0];

      if (file.size > 300 * 1024) { // 300 KB in bytes
        alert('Ukuran file tidak boleh lebih dari 300 KB');
        // eslint-disable-next-line no-param-reassign
        event.target.value = ''; // Clear the input
        return;
      }

      const reader = new FileReader();
      reader.onload = function (event) {
        const imageUrl = event.target.result;
        uploadBox.innerHTML = `<img src="${imageUrl}" alt="Uploaded Image">`;
      };

      reader.readAsDataURL(file);
    }

    // Event listener untuk tombol upload
    document.getElementById('uploadButton').addEventListener('click', async () => {
      // Ambil foto yang diunggah
      const foto1 = document.getElementById('fileInput1').files[0];
      const foto2 = document.getElementById('fileInput2').files[0];
      const foto3 = document.getElementById('fileInput3').files[0];
      const description = document.getElementById('description').value;
      // Validasi jumlah gambar yang diunggah
      if (!foto1 || !foto2 || !foto3) {
        alert('Harap unggah 3 gambar sebelum mengirimkan.');
        return;
      }

      if (!description) {
        alert('Harap masukan pesan deskripsi!');
        return;
      }

      // Validasi ukuran gambar sebelum mengunggah
      if ((foto1.size > 300 * 1024) || (foto2.size > 300 * 1024) || (foto3.size > 300 * 1024)) {
        alert('Semua gambar harus berukuran maksimal 300 KB');
        return;
      }

      // Ambil pesan pengguna

      // Buat FormData untuk mengirim data ke backend
      const formData = new FormData();
      formData.append('user_message', description);
      formData.append('gambar1', foto1);
      formData.append('gambar2', foto2);
      formData.append('gambar3', foto3);

      // Get the valid trash_id from the URL
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const trashId = url.id;

      // Kirim data ke backend menggunakan fetch
      try {
        const token = localStorage.getItem('token');
        console.log('Data Token:', token);

        const response = await fetch(`https://sure-api.riandev.xyz/trash/proof/${trashId}`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });

        const data = await response.json();
        if (response.ok) {
          console.log('Response from server:', data);
          alert('Data berhasil diunggah!');
          // Navigate to the next page
          window.location.href = '/'; // Replace with your actual next page URL
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        console.error('Error saat mengirim data:', error);
        alert('Terjadi kesalahan saat mengunggah data.');
      }
    });
  },
};

export default ProofUpload;
