document.addEventListener("DOMContentLoaded", function () {
  // Tetapkan tahun saat ini
  document.getElementById("year").innerText = new Date().getFullYear();

  // Fungsionalitas menu mobile
  const mobileMenuButton = document.getElementById("mobile-menu");
  const navList = document.querySelector("nav ul");

  mobileMenuButton.addEventListener("click", function () {
    navList.classList.toggle("show");
  });

  // Perubahan latar belakang navbar saat di-scroll
  const nav = document.querySelector("nav");

  window.addEventListener("scroll", function () {
    nav.classList.toggle("scrolled", window.scrollY > 50);
  });

  // Sorot tautan aktif berdasarkan bagian saat ini
  function highlightLink(sectionId, linkId) {
    const section = document.getElementById(sectionId);
    const link = document.getElementById(linkId);

    function isSectionInView() {
      const rect = section.getBoundingClientRect();
      return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
    }

    function handleScroll() {
      if (isSectionInView()) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }

    // Periksa saat halaman dimuat
    handleScroll();

    // Periksa saat di-scroll
    window.addEventListener("scroll", handleScroll);
  }

  // Sorot tautan untuk bagian-bagian berbeda
  highlightLink("kategori", "kategori-link");
  highlightLink("featured", "featured-link");
  // highlightLink("AboutMe", "AboutMe-link");
  highlightLink("blog", "blog-link");
});

// Perubahan gambar latar belakang untuk jumbotron
const jumbotron = document.querySelector(".jumbotron");
const images = ["./assets/img/header-bg (1).jpg", "./assets/img/header-bg (2).jpg", "./assets/img/header-bg (3).jpg", "./assets/img/header-bg (4).jpg"];
let currentImageIndex = 0;

function changeBackgroundImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  const imageUrl = `url('${images[currentImageIndex]}')`;
  jumbotron.style.backgroundImage = imageUrl;
}

// Panggil fungsi secara awal
changeBackgroundImage();

// Atur interval untuk mengubah gambar latar belakang setiap beberapa detik
setInterval(changeBackgroundImage, 5000); // Ubah 5000 menjadi interval yang diinginkan (dalam milidetik)
