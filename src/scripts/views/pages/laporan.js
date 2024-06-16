import SureDBSource from '../../data/sure-source';
import UrlParser from '../../routes/url-parser';

const Laporan = {
  async render() {
    return `
    <section class="lapor">
        <h3>Laporkan sampah di sekitar mu</h3>

         <div class="topLapor">
            <input type="file" id="fileInput1" style="display:none;">
            <div class="uploadBoxLaporan" id="uploadBox1">+</div>
        
            <input type="file" id="fileInput2" style="display:none;">
            <div class="uploadBoxLaporan" id="uploadBox2">+</div>
        
            <input type="file" id="fileInput3" style="display:none;">
            <div class="uploadBoxLaporan" id="uploadBox3">+</div>
        </div>
    </section>

    <section class="formLaporan">
        <div class="cards">
            <form id="trashReportForm">
                <label for="title">Apa sampah yang kamu temukan</label>
                <br>
                <input type="text" id="title">
                <br>
                <div class="col2">
                    <div class="card" id="wilayah">
                        <label for="wilayah">Wilayah</label>
                        <br>
                        <select name="wilayah" id="selectCities" class="selectCities">
                                
                        </select>
                    </div>
                    <div class="card">
                        <label for="locationUrl">Titik Lokasi</label>
                        <br>
                        <input type="text" id="locationUrl">
                    </div>
                </div>
                <br>
                <label for="address">Alamat lengkap</label>
                <br>
                <input type="text" id="address">
                <br>
                <br>
                <label for="description">Deskripsikan Sampahnya</label>
                <br>
                <textarea id="description"></textarea>
            </form>
        <button id="uploadButton">Submit</button>
        </div>
    </section>
      `;
  },
  async afterRender() {
    const getCities = await SureDBSource.cityList();
    console.log(getCities);
    const citySelector = document.getElementById('selectCities');

    for (const city in getCities) {
      const optgroup = document.createElement('optgroup');
      optgroup.label = city;

      getCities[city].forEach((location) => {
        const option = document.createElement('option');
        option.value = location.id;
        option.textContent = location.name;
        optgroup.appendChild(option);
      });

      citySelector.appendChild(optgroup);
    }
    // Event listeners for image upload boxes
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

      // Validasi ukuran gambar sebelum mengunggah
      if ((foto1 && foto1.size > 300 * 1024) || (foto2 && foto2.size > 300 * 1024) || (foto3 && foto3.size > 300 * 1024)) {
        alert('Semua gambar harus berukuran maksimal 300 KB');
        return;
      }

      // Ambil nilai dari form
      const title = document.getElementById('title').value;
      const description = document.getElementById('description').value;
      const cityId = document.getElementById('selectCities').value;
      const address = document.getElementById('address').value;
      const locationUrl = document.getElementById('locationUrl').value;

      // Validasi input tidak boleh kosong
      if (!title || !description || !cityId || !address || !locationUrl) {
        alert('Semua bidang harus diisi');
        return;
      }

      // Buat FormData untuk mengirim data ke backend
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('city_id', cityId);
      formData.append('address', address);
      formData.append('location_url', locationUrl);
      if (foto1) formData.append('gambar1', foto1);
      if (foto2) formData.append('gambar2', foto2);
      if (foto3) formData.append('gambar3', foto3);

      // Get the valid trash_id from the URL
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const trashId = url.id;

      // Kirim data ke backend menggunakan fetch
      try {
        const token = localStorage.getItem('token');
        console.log('Data Token:', token);
        const response = await fetch('https://sure-api.riandev.xyz/trash', {
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

export default Laporan;
