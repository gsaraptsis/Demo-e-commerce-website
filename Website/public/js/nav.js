const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <a href="index.html"><img src="img/dark-logo.png" class="brand-logo" alt=""></a>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="Αναζήτηση προϊόντος">
                    <button class="search-btn">Αναζήτηση</button>
                </div>
                <a href="signup.html"><img src="img/user.png" alt=""></a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">Αρχική</a></a></li>
            <li class="link-item"><a href="cpu-collection.html" class="link">Επεξεργαστές CPU</a></li>
            <li class="link-item"><a href="mb-collection.html" class="link">Μητρικές κάρτες</a></li>
            <li class="link-item"><a href="gpu-collection.html" class="link">Κάρτες γραφικών</a></li>
            <li class="link-item"><a href="#" class="link">Μνήμες RAM</a></li>
        </ul>
    `;
}

createNav();