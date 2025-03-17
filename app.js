document.querySelector('.js-home').addEventListener('click', () => {
  const scrollElm = document.scrollingElement;
  scrollElm.scrollTop = 50;
})
document.querySelector(".js-about").addEventListener("click", () => {
  const scrollElm = document.scrollingElement;
  scrollElm.scrollTop = 800;
});
document.querySelector(".js-project").addEventListener("click", () => {
  const scrollElm = document.scrollingElement;
  scrollElm.scrollTop = 1600;
});
document.querySelector(".js-contact").addEventListener("click", () => {
  const scrollElm = document.scrollingElement;
  scrollElm.scrollTop = 2400;
});
document.querySelector(".js-arrow-up").addEventListener("click", () => {
  const scrollElm = document.scrollingElement;
  scrollElm.scrollTop = 0;
});

