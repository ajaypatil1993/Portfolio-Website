// Theme Colors Switcher
const alternateStyles = document.querySelectorAll(".alternate-style");

// Load the saved theme color from localStorage
function loadThemeColor() {
  const savedColor = localStorage.getItem("themeColor");
  if (savedColor) {
    setActiveStyle(savedColor);
  } else {
    // If no theme color is set, apply the default style
    alternateStyles[0].removeAttribute("disabled");
  }
}

// Set the active style and save the selected color in localStorage
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
      localStorage.setItem("themeColor", color); // Save selected color
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

// Add event listeners to color picker elements (Assuming buttons or inputs to pick colors)
document.querySelectorAll(".color-picker").forEach((picker) => {
  picker.addEventListener("click", function () {
    const color = this.getAttribute("data-color");
    setActiveStyle(color);
  });
});

// Call loadThemeColor when the page loads to apply the saved color
window.addEventListener("load", () => {
  loadThemeColor();
});

// Style Switcher Toggle
const styleSwitcher = document.querySelector(".style-switcher");
styleSwitcher.addEventListener("click", () => {
  styleSwitcher.classList.toggle("open");
});

// Hide style switcher on scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

// Theme Light and Dark Mode Toggle
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
  const icon = dayNight.querySelector("i");

  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");

  document.body.classList.toggle("dark");
});
// Set the correct icon on page load based on current theme
window.addEventListener("load", () => {
  const icon = dayNight.querySelector("i");

  if (document.body.classList.contains("dark")) {
    icon.classList.add("fa-sun");
  } else {
    icon.classList.add("fa-moon");
  }
});
