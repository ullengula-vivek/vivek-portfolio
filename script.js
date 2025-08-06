// === Mobile Navbar Toggle ===
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // === Dark Mode Toggle ===
  const darkToggle = document.getElementById("dark-toggle");
  const body = document.body;

  // Set dark mode from localStorage on load
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
  }

  darkToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // === Contact Form Alert ===
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      // Let the form post, but show alert after a moment
      setTimeout(() => {
        alert("Thanks! Your message has been sent successfully.");
      }, 100);
    });
  }
});
