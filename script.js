document.addEventListener("DOMContentLoaded", function () {
  
const video = document.querySelector(".hero video");
const hero = document.querySelector(".hero");
const heroContent = document.querySelector(".hero-content");

if (video && hero && heroContent) {
  video.loop = true;

  // Har loop ke start par heading hide hogi
  video.addEventListener("timeupdate", () => {
    if (video.currentTime < 0.5) {
      heroContent.classList.remove("show-content");
      hero.classList.remove("shadow-mode");
    }

    // Car front view par aaye to reveal
    // Apni video ke mutabiq timing adjust karna
    if (video.currentTime >= 4 && video.currentTime < 4.5) {
      heroContent.classList.add("show-content");
      hero.classList.add("shadow-mode");
    }
  });
}


  if (soundButton && video) {
    soundButton.addEventListener("click", function () {
      video.muted = !video.muted;
      soundButton.textContent = video.muted
        ? "SOUND OFF"
        : "SOUND ON";
    });
  }
});