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
                    <label for="inputUserName"></label>
                    <input id="inputUserName" name="nama" type="text" required placeholder="Email">
                </div>
                <div class="input">
                    <label for="inputUsername"></label>
                    <input id="inputUsername" name="username" type="text" required placeholder="Username">
                </div>
                <div class="input">
                    <label for="date"></label>
                    <input id= "date" name="date" type="date" required placeholder="Tanggal/Bulan Lahir">
                </div>
                <div class="input">
                    <label for="inputUserPassword"></label>
                    <input id="inputUserPassword" name="password" type="password" required placeholder="Password">
                </div>
                <div class="input">
                    <label for="inputUserRePassword"></label>
                    <input id="inputUserRePassword" name="Repassword" type="password" required placeholder="Ulangi Password">
                </div>
                <input id="register" type="submit" name="Submit" value="Resgiter"><br>
            </form>
            <p>Sudah punya akun? <a href="#/login">Login Sekarang</a></p>
        </section>
    </section>
      `;
  },
  async afterRender() {
    // Fungsi ini dapat digunakan untuk melakukan manipulasi DOM setelah render, jika diperlukan.
  },
};

export default Register;
