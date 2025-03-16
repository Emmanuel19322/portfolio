document.querySelector('.js-home').addEventListener('click', () => {
  const scrollElm = document.scrollingElement;
  scrollElm.scrollTop = 50;
})
document.querySelector(".js-about").addEventListener("click", () => {
  const scrollElm = document.scrollingElement;
  scrollElm.scrollTop = 300;
});
document.querySelector(".js-project").addEventListener("click", () => {
  const scrollElm = document.scrollingElement;
  scrollElm.scrollTop = 600;
});
document.querySelector(".js-contact").addEventListener("click", () => {
  const scrollElm = document.scrollingElement;
  scrollElm.scrollTop = 1200;
});
document.querySelector(".js-arrow-up").addEventListener("click", () => {
  const scrollElm = document.scrollingElement;
  scrollElm.scrollTop = 0;
});

