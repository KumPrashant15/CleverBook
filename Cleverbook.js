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
// Function to switch tabs
function openTab(evt, tabName) {
  // Hide all tab contents
  var tabContents = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }

  // Remove "active" class from all tab links
  var tabLinks = document.getElementsByClassName("tab-link");
  for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active");
  }

  // Show the selected tab content
  document.getElementById(tabName).style.display = "block";

  // Add "active" class to the clicked tab link
  evt.currentTarget.classList.add("active");
}

// Function to scroll images horizontally automatically
var scrollIndex = 0;
var imageScrollInterval;

function startImageScroll() {
  imageScrollInterval = setInterval(scrollImages, 2000); // Change image every 2 seconds (2000 milliseconds)
}

function stopImageScroll() {
  clearInterval(imageScrollInterval);
}

function scrollImages() {
  var container = document.querySelector(".image-scroll-container");
  scrollIndex++;
  if (scrollIndex >= container.scrollWidth - container.clientWidth) {
    scrollIndex = 0;
  }
  container.scrollTo({
    left: scrollIndex,
    behavior: "smooth",
  });
}

// Start scrolling images when the page loads
window.onload = function () {
  startImageScroll();
};
