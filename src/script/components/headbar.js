class HeaderBar extends HTMLElement {
    connectedCallback() {
        this.render();
        this.addDropdownToggle();
    }

    render() {
        this.innerHTML = `
            <header>
                <div class="navbar">
                    <div class="logo">
                        <h3>Trash <span>Finder</span></h3>
                    </div>

                    <div class="navigation">
                        <ul>
                            <li><a href="index.html">Beranda</a></li>
                            <li><a href="eksplorasi.html">Eksplorasi</a></li>
                            <li><a href="jenis.html">Jenis</a></li>
                            <li><a href="hasilKerja.html">Hasil</a></li>
                            <li><a href="laporan.html">Laporan</a></li>
                            <li><a href="AboutUs.html">Tentang Kami</a></li>
                        </ul>
                    </div>

                    <div class="sci">
                        <a href="#" id="user-icon"><i class="fa fa-user"></i></a>
                        <div class="dropdown" id="user-dropdown">
                            <a href="register.html">Register</a>
                            <a href="login.html">Login</a>
                        </div>
                    </div>

                    <div class="burger">
                        <div class="bars"></div>
                        <div class="bars"></div>
                        <div class="bars"></div>
                    </div>
                </div>
            </header>
        `;
    }
}

customElements.define('header-bar', HeaderBar);