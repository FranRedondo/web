document.addEventListener("DOMContentLoaded", () => {
  const heart = document.querySelector(".heart");
  heart.addEventListener("click", () => {
      alert("¡Te amo mucho, Ailin! 💖");
  });

  const images = document.querySelectorAll(".carousel img");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let index = 0;

  function showImage(i) {
      images.forEach(img => img.classList.remove("active"));
      images[i].classList.add("active");
  }

  function nextImage() {
      index = (index + 1) % images.length;
      showImage(index);
  }

  prevBtn.addEventListener("click", () => {
      index = (index - 1 + images.length) % images.length;
      showImage(index);
  });

  nextBtn.addEventListener("click", nextImage);

  showImage(index);
  setInterval(nextImage, 3000); // Cambia de imagen automáticamente cada 3 segundos
});
