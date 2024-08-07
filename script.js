function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");

  const contactSection = document.querySelector("#contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const dynamicText = document.getElementById("dynamic-text");
  const texts = ["Unity Developer", "Game Developer"];
  let currentIndex = 0;

  function changeText() {
    currentIndex = (currentIndex + 1) % texts.length;
    dynamicText.textContent = texts[currentIndex];
  }

  setInterval(changeText, 3000); // Change text every 3 seconds
});
