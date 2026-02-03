
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');
const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
  if (e.target.tagName !== 'IMG') return;

  const img = e.target;
  const src = img.getAttribute('src');
  const alt = img.getAttribute('alt');
  const full = src.replace('-sm.jpg', '-full.jpg');

  modalImage.src = full;
  modalImage.alt = alt;

  modal.showModal();

}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

menuButton.addEventListener("click", () => {
    // Busca todos los enlaces dentro del nav
    const navLinks = nav.querySelectorAll("a");
    navLinks.forEach(link => {
        // Si están ocultos, los muestra. Si están visibles, los oculta.
        link.style.display = link.style.display === "block" ? "none" : "block";
    });
});
          