document
  .querySelector(".cta-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#signup-form").style.display = "flex";
  });

// Close the popup when clicking outside of it
document
  .querySelector("#signup-form")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      this.style.display = "none";
    }
  });
