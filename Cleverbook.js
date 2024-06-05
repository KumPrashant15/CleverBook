document.addEventListener("DOMContentLoaded"),
  () => {
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");
    
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });

    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        tabLinks.forEach((link) => link.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));

        event.currentTarget.classList.add("active");
        const tabContent = document.querySelector(
          event.currentTarget.getAttribute("href")
        );
        tabContent.classList.add("active");
      });
    });
  };

  