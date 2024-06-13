class footerBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
    <footer>
        <div class="card">
            <h4>Copyright @2024 | Sure Trashfinder</h4>
        </div>

        <div class="card">
            <ul>
                <li><a href=""><i class="fab fa-instagram"></i></a></li>
                <li><a href=""><i class="fab fa-tiktok"></i></a></li>
                <li><a href=""><i class="fab fa-facebook"></i></a></li>
                <li><a href=""><i class="fab fa-twitter"></i></a></li>
            </ul>
        </div>
    </footer>
        `;
    }
}

customElements.define('footer-bar', footerBar);
