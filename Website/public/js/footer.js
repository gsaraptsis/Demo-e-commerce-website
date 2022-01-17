const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
            <div class="footer-content">
				<img src="img/light-logo.png" class="logo" alt="">
				<div class="footer-ul-container">
					<ul class="category">
						<li class="category-title">Hardware</li>
						<li><a href="cpu-collection.html" class="footer-link">Επεξεργαστές CPU</a></li>
						<li><a href="mb-collection.html" class="footer-link">Μητρικές κάρτες</li>
						<li><a href="gpu-collection.html" class="footer-link">Κάρτες γραφικών</a></li>
						<li><a href="#" class="footer-link">Μνήμες RAM</a></li>
					</ul>
					<ul class="category">
						<li class="category-title">Επικοινωνία</li>
						<li><a href="contact.html" class="footer-link">Επικοινωνία</a></li>
						<li><a href="#" class="footer-link">Ακολουθήστε μας</a></li>
						<li><a href="#" class="footer-link">FAQ</a></li>
						<li><a href="#" class="footer-link">Feedback</a></li>
					</ul>
				</div>
			</div>
			<p class="footer-title">adout us</p>
			<p class="info">Ιακώβου Απόστολος- 4689 & Σαραπτσής - Βενέτης Γιώργος - 4610</p>
    `;
}

createFooter();