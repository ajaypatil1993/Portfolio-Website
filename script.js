// Typing Animation
var typed = new Typed(".typing", {
  strings: ["UI/UX Designer", "React.JS Developer", "Front-End Developer", "UI/UX Designer", "Freelancer"],
  typeSpeed: 100,           // Speed of typing in milliseconds
  backSpeed: 60,            // Speed of backspacing in milliseconds
  backDelay: 1500,          // Time before backspacing (1.5 seconds)
  startDelay: 500,          // Time before typing starts (0.5 seconds)
  loop: true,               // Loop animation
});


// Aside Navigation
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const anchor = navList[i].querySelector("a");
  anchor.addEventListener("click", function () {
    removeBackSection();

    for (let j = 0; j < totalNavList; j++) {
      const currentAnchor = navList[j].querySelector("a");

      if (currentAnchor.classList.contains("active")) {
        addBackSection(j);
        allSection[j].classList.add("back-section");
      }

      currentAnchor.classList.remove("active");
    }

    this.classList.add("active");
    showSection(this);

    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

// Remove back-section class from all sections
function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

// Add back-section class to a specific section
function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

// Show the selected section
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }

  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

// Update the navigation bar to reflect the current section
function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    const currentAnchor = navList[i].querySelector("a");
    currentAnchor.classList.remove("active");

    const target = element.getAttribute("href").split("#")[1];
    if (target === currentAnchor.getAttribute("href").split("#")[1]) {
      currentAnchor.classList.add("active");
    }
  }
}

// Hire Me button click event
document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  console.log(sectionIndex);
  showSection(this);
  updateNav(this);
});

// Navigation toggler button functionality
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

// Toggle the aside section and sections when the nav toggler is clicked
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");

  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}
