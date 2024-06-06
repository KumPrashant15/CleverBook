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

function handleClick() {
  let menu = document.getElementById("hidden");
  menu.classList.toggle("menu-visible");
  // menu.style.display = "block";
  // console.log(menu)
}

// console.log(document.getElementById("hidden"));
