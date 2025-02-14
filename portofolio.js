// navbar
window.onscroll = function () {
  const header = document.querySelector("header");
  const nav = header.offsetTop;

  if (window.pageYOffset > nav) {
    header.classList.add("navbar");
  } else {
    header.classList.remove("navbar");
  }
};

// hamburger menu
const hambergerMenu = document.getElementById("hamburger-menu");
hambergerMenu.addEventListener("click", function () {
  hambergerMenu.classList.toggle("hamburger-active");

  //nav mobile
  const navmobile = document.getElementById("nav-mobile");
  navmobile.classList.toggle("hidden");

  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("nav-mobile")) {
      navmobile.classList.add("hidden");
      hambergerMenu.classList.remove("hamburger-active");
    }
  });
});

//animasi judul
const texts = document.querySelectorAll("#text");
const totalTexts = texts.length;
let currentIndex = 0;

function animateTexts() {
  // Reset semua teks ke keadaan tersembunyi
  texts.forEach((text) => {
    text.classList.remove("opacity-100");
    text.classList.add("opacity-0");
  });

  // Tampilkan teks saat ini
  texts[currentIndex].classList.remove("opacity-0");
  texts[currentIndex].classList.add("opacity-100");

  // Setelah 5 detik, sembunyikan teks saat ini
  setTimeout(() => {
    texts[currentIndex].classList.remove("opacity-100");
    texts[currentIndex].classList.add("opacity-0");

    // Pindah ke teks berikutnya
    currentIndex = (currentIndex + 1) % totalTexts; // Loop kembali ke awal
    animateTexts(); // Panggil fungsi ini lagi untuk teks berikutnya
  }, 5000); // Teks muncul selama 1 detik
}

// Mulai animasi
animateTexts();

// animasi my skill
let animasi = document.querySelectorAll(".animation-await");

setTimeout(() => {
  animasi.forEach((x) => {
    x.classList.add("animate-pulse");
  });
}, 1000);

//click for service
const service = document.querySelectorAll("#service");
const deskripsi = document.querySelectorAll("#deskripsi");
const containService = document.querySelectorAll("#contain-service");

//for design ui/ux
containService[0].addEventListener("click", function () {
  service[0].classList.toggle("blur-sm");
  deskripsi[0].classList.toggle("opacity-100");
});

//for web development
containService[1].addEventListener("click", function () {
  service[1].classList.toggle("blur-sm");
  deskripsi[1].classList.toggle("opacity-100");
});

//show img sertifikat
document.addEventListener("click", function (x) {
  if (x.target.id === "sertifikat") {
    x.target.parentElement.classList.remove("hover:opacity-70");
    const modal = document.getElementById("modal-sertifikat");
    const modalImg = document.getElementById("modal-sertifikat-img");
    modal.classList.remove("hidden");
    const sertifikat = x.target.src;
    modalImg.innerHTML = `<img
                src="${sertifikat}"
                alt=""
                class="cursor-auto md:w-[700px]"
              />`;
  }
});

document.addEventListener("click", function (x) {
  if (x.target.id === "modal-sertifikat-img") {
    x.target.parentElement.classList.add("hidden");
    x.target.parentElement.classList.remove("opacity-0");
  }
});

// animasi show
document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        entry.target.classList.remove("hide"); // Hapus kelas 'hide' saat elemen terlihat
      } else {
        entry.target.classList.remove("show");
        entry.target.classList.add("hide"); // Tambahkan kelas 'hide' saat elemen keluar viewport
      }
    });
  });

  fadeElements.forEach((el) => observer.observe(el)); // Pantau setiap elemen
});
