class featureBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
    <section class="features">
        <div class="title">
            <h3>Fitur Kami</h3>
        </div>
    
        <div class="featuresContent">
            <a href="laporan.html">
                <div class="card">
                    <div class="images">
                        <img src="./img/Fitur/Plastic is the new coal, report finds.jpeg" alt="">
                    </div>
                    <div class="cardText">
                        <h3>Laporkan sampah</h3>
                        <p>Kamu menemukan sampah yang mengganggu? Segera laporkan lewat aplikasi kita.</p>
                    </div>
                </div>
            </a>
            <a href="eksplorasi.html">
                <div class="card">
                    <div class="images">
                        <img src="./img/Fitur/image 22.png">
                    </div>
                    <div class="cardText">
                        <h3>Bersihkan sampah</h3>
                        <p>Ayo bersihkan sampah yang mengganggu, masing-masing kontribusi dari kita akan membuat lingkungan kita terbebas dari polusi sampah.</p>
                    </div>
                </div>
            </a>
            <a href="jenis.html">
                <div class="card">
                    <div class="images">
                        <img src="./img/Fitur/jenis.jpg" alt="">
                    </div>
                    <div class="cardText">
                        <h3>Kenali jenis sampah</h3>
                        <p>Mau tau jenis sampah apa aja yang umum disekitarmu? Yuk kenali berbagai jenis mereka.</p>
                    </div>
                </div>
            </a>
        </div>
    </section>
        `;
    }
}

customElements.define('feature-bar', featureBar);
