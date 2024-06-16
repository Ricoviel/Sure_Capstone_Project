const Register = {
  async render() {
    return `
    <section class="main_register">
        <section class="left-content">
            <img src="../assets/sign-up.png" alt="Register People Animated" class="image-animation">
        </section>
        <section class="right-content">
            <h2>REGISTER</h2>
            <form id="formulir-Register">
                <div class="input">
                    <label for="inputUserEmail"></label>
                    <input id="inputUserEmail" name="nama" type="text" required placeholder="Email">
                </div>
                <div class="input">
                    <label for="inputFullname"></label>
                    <input id="inputFullname" name="Fullname" type="text" required placeholder="Masukan Nama Lengkap">
                </div>
                <div class="input">
                    <label for="inputUsername"></label>
                    <input id="inputUsername" name="username" type="text" required placeholder="Masukan Username">
                </div>
                <div class="input">
                    <label for="date"></label>
                    <input id= "date" name="date" type="date" required placeholder="Tanggal/Bulan Lahir">
                </div>
                <div class="input">
                    <label for="inputUserPassword"></label>
                    <input id="inputUserPassword" name="password" type="password" required placeholder="Password">
                </div>
                <input id="register" type="submit" name="Submit" value="Resgiter"><br>
            </form>
            <p>Sudah punya akun? <a href="#/login">Login Sekarang</a></p>
        </section>
    </section>
      `;
  },
  async afterRender() {
    const form = document.getElementById('formulir-Register');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const full_name = document.getElementById('inputFullname').value;
      const date_of_birth = document.getElementById('date').value;
      const email = document.getElementById('inputUserEmail').value;
      const username = document.getElementById('inputUsername').value;
      const password = document.getElementById('inputUserPassword').value;

      //   if (password !== repassword) {
      //     alert('Passwords do not match');
      //     return;
      //   }

      try {
        const response = await fetch('https://sure-api.riandev.xyz/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            full_name, date_of_birth, email, username, password,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          alert('Register success! Please check your email for OTP verification.');
          const email = document.getElementById('inputUserEmail').value;
          console.log('hasil dari email:', email);

          // Simpan email ke sessionStorage
          sessionStorage.setItem('userEmail', email);

          // Redirect ke halaman proofupload dengan parameter ID
          window.location.href = '#/verify-otp'; // Ganti dengan URL halaman OTP verification Anda
        } else {
          throw new Error(data.message || 'Terjadi kesalahan saat registrasi.');
        }
      } catch (error) {
        alert(error.message);
        console.error('Error saat registrasi:', error);
      }
    });
  },
};

export default Register;
