// Плавная прокрутка по якорям
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Карусель врачей
const carousel = document.getElementById("doctorCarousel");
const cards = Array.from(document.querySelectorAll(".doctor-card"));
const totalCards = cards.length;
const visibleCards = 2;
const cardWidth = 300 + 20; // Ширина карточки + отступ
let scrollInterval = null;
let isUserScrolling = false;

// Обновление индикатора
function updateProgressIndicator() {
  const currentIndex = Math.round(carousel.scrollLeft / cardWidth);
  const progressText = `Промотано ${currentIndex + 1} из ${totalCards}`;
  document.getElementById("progressIndicator").textContent = progressText;
}

// Остановка прокрутки при ручном управлении
function stopCarousel() {
  clearInterval(scrollInterval);
}

// События для драга
carousel.addEventListener("mousedown", () => {
  isUserScrolling = true;
  stopCarousel();
});

carousel.addEventListener("mouseup", () => {
  isUserScrolling = false;
  startCarousel();
});

carousel.addEventListener("mouseleave", () => {
  isUserScrolling = false;
  startCarousel();
});

// Обновление индикатора при прокрутке
carousel.addEventListener("scroll", () => {
  updateProgressIndicator();
});

// Инициализация
updateProgressIndicator();
startCarousel();
