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
                    <img src="../assets/icon-user.png" alt="" class="iconUserLogin">
                    <label for="inputLoginUsername"></label>
                    <input id="inputLoginUsername" name="username" type="text" required placeholder="Username">
                </div>
                <div class="input">
                    <img src="../assets/icon-password.png" alt="" class="iconUserPassword">
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
    // Fungsi ini dapat digunakan untuk melakukan manipulasi DOM setelah render, jika diperlukan.
  },
};

export default Login;
