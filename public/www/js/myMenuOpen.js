const myMenuBtn = document.getElementById("my-menu-btn");
const myMenuWrap = document.querySelector(".my-menu-wrap");
const myMenu = document.querySelector(".my-menu");

// 창열기 및 창닫기 함수
function toggleMenu(isOpen) {
  myMenuWrap.classList.toggle("open", isOpen);
  document.body.classList.toggle("no-scroll", isOpen);
  // myMenu.style.width = isOpen ? "250px" : "0";
  myMenu.style.right = isOpen ? "0" : "-300px";
}

// 창열기
myMenuBtn.addEventListener("click", () => toggleMenu(true));

// 창닫기
myMenuWrap.addEventListener("click", () => {
  if (myMenuWrap.classList.contains("open")) {
    toggleMenu(false);
  }
});

// 메뉴 클릭 시 이벤트 전파 중지
myMenu.addEventListener("click", event => event.stopPropagation());
