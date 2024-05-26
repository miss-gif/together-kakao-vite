const myMenuBtn = document.getElementById("my-menu-btn");
const myMenuWrap = document.querySelector(".my-menu-wrap");
const myMenu = document.querySelector(".my-menu");

// 창열기
myMenuBtn.addEventListener("click", classAddOpen);
function classAddOpen() {
  myMenuWrap.classList.add("open");
  document.body.classList.add("no-scroll");
}

// 창닫기
myMenuWrap.addEventListener("click", () => {
  if (myMenuWrap.classList.contains("open")) {
    myMenuWrap.classList.remove("open");
    document.body.classList.remove("no-scroll");
  }
});

// 제어
myMenu.addEventListener("click", event => {
  event.stopPropagation();
});
