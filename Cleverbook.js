// document.getElementsByClassName("menu-toggle").addEventListener("click", () => {
//   let menu = document.getElementsByClassName("menu");
//   menu.classList.toggle("menu-visible");
// });

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// script.js
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');
  const speed = 200; // Speed of counting (higher is slower)

  const updateCount = (counter) => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      const increment = target / speed;

      if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(() => updateCount(counter), 10); // Adjust delay for smoother animation
      } else {
          counter.innerText = target;
      }
  };

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              updateCount(entry.target);
          } else {
              entry.target.innerText = '0'; // Reset the counter when it leaves the viewport
          }
      });
  }, {
      threshold: 0.1 // Adjust based on when you want to start the counting
  });

  counters.forEach(counter => {
      observer.observe(counter);
  });
});

function handleClick() {
  let menu = document.getElementById("hidden");
  menu.classList.toggle("menu-visible");
  // menu.style.display = "block";
  // console.log(menu)
}

// console.log(document.getElementById("hidden"));
