import "./style.css";

const loveMe = document.querySelector(".loveMe") as HTMLDivElement;
const times = document.querySelector("#times") as HTMLDivElement;

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener("click", (e: MouseEvent) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (e: MouseEvent) => {
  const heart = document.createElement("i");
  heart.classList.add("fas", "fa-heart");

  const x = e.clientX;
  const y = e.clientY;

  const target = e.currentTarget as HTMLElement;
  const leftOffset = target.offsetLeft;
  const topOffset = target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);
  times.innerHTML = `${++timesClicked}`;

  setTimeout(() => {
    heart.remove();
  }, 1000);
};
