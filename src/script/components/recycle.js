class recycleBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
    <section class="recyle">
        <div class="card">
            <h3>Menjaga Lingkungan Dengan</h3>

            <div class="cardContent">
                <div class="reduce">
                    <img src="./img/3R/lets-icons_reduce.png" alt="">
                    <h3><strong>Reduce</strong> berusaha mengurangi jumlah sampah yang di haruskan</h3>
                </div>
                <div class="reuse">
                    <img src="./img/3R/reuse 1.png" alt="">
                    <h3><strong>Reuse</strong> menggunakan kembali bahan yang masih bisa digunakan</h3>
                </div>
                <div class="recycle">
                    <img src="./img/3R/recycle-symbol 1.png" alt="">
                    <h3><strong>Reduce</strong> mengolah kembali sampah menjadi bahan yang bisa digunakan kembali</h3>
                </div>
            </div>
        </div>
    </section>
        `;
    }
}

customElements.define('recycle-bar', recycleBar);
