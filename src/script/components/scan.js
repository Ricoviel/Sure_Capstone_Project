class donasiBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="scan">
                <div class="card">
                    <div class="images">
                        <img src="img/qr.png" alt="">
                    </div>
                    <div class="cardText">
                        <h1>Donasi <br> Aplikasi Trashfinder</h1>
                        <p>Sociallbuzz</p>
                        <p>Donasi kamu akan di donasikan</p>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('donasi-bar', donasiBar);
