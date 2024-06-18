const Login = {
  async render() {
    return `
    <section class="main_login">
        <section class="left-content">
            <img src="../assets/sign-in.png" alt="Register People Animated" class="image-animation">
        </section>
        <section class="right-content-Login">
            <h2>LOGIN</h2>
            <form id="formulir-Login">
                <div class="input">
                  
                    <label for="inputLoginUsername"></label>
                    <input id="inputLoginUsername" name="username" type="text" required placeholder="Username">
                </div>
                <div class="input">
                 
                    <label for="inputLoginUserPassword"></label>
                    <input id="inputLoginUserPassword" name="password" type="password" required placeholder="Password">
                </div>
                <input id="login" type="submit" name="Submit" value="Login"><br>
            </form>
            <p>Belum punya akun? <a href="#/register">Register Sekarang</a></p>
        </section>
    </section>
        `;
  },
  async afterRender() {
    const form = document.getElementById('formulir-Login');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const username = document.getElementById('inputLoginUsername').value;
      const password = document.getElementById('inputLoginUserPassword').value;

      try {
        const response = await fetch('https://sure-api.riandev.xyz/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
          // Simpan token di localStorage
          localStorage.setItem('token', data.token);
          localStorage.setItem('full_name', data.full_name);

          // Arahkan pengguna ke halaman utama
          window.location.href = '#/home'; // Ganti dengan URL halaman utama Anda
        } else {
          throw new Error(data.message || 'Terjadi kesalahan saat login.');
        }
      } catch (error) {
        alert(error.message);
        console.error('Error saat login:', error);
      }
    });
  },
};

export default Login;
