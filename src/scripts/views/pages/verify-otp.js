const Verifiy = {
  async render() {
    return `
      <section class="login-otp">
          <section class="wrap_otp">
              <h2>Verifikasi OTP</h2>
              <form id="formulir-otp">
                    <div class="input">
                        <label for="inputUserEmail"></label>
                        <input id="inputUserEmail" name="nama" type="text" required placeholder="Email">
                    </div>
                    <input id="inputverif" class="input" type="text" inputmode="numeric" maxlength="6" />
                    <br>
                    <button id="submit" type="submit">Submit</button>
              </form>
          </section>
      </section>
          `;
  },
  async afterRender() {
    // eslint-disable-next-line no-unused-expressions
    const userEmail = sessionStorage.getItem('userEmail');
    document.getElementById('inputUserEmail').value = userEmail;
    const form = document.getElementById('formulir-otp');
    const submitButton = document.getElementById('submit');

    submitButton.addEventListener('click', async (event) => {
      event.preventDefault();

      try {
        const otp = document.getElementById('inputverif').value;
        console.log('hasil otp:', otp);
        console.log('hasil email: ', userEmail);
        const response = await fetch('https://sure-api.riandev.xyz/verify-otp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: userEmail, otp }),
        });

        const data = await response.json();

        if (response.ok) {
          alert('OTP verified successfully!');
          sessionStorage.removeItem('userEmail');
          // Redirect to the login page
          window.location.href = '#/login';
        } else {
          throw new Error(data.message || 'Failed to verify OTP.');
        }
      } catch (error) {
        alert(error.message);
        console.error('Error during OTP verification:', error);
      }
    });
  },
};

export default Verifiy;
