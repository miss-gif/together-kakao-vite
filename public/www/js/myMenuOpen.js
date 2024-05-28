const myMenuBtn = document.getElementById("my-menu-btn");
const myMenuWrap = document.querySelector(".my-menu-wrap");
const myMenu = document.querySelector(".my-menu");

let scrollPosition = 0;

// 창열기 및 창닫기 함수
function toggleMenu(isOpen) {
  if (isOpen) {
    // 메뉴를 열기 전 현재 스크롤 위치 저장
    scrollPosition = window.pageYOffset;
    myMenuWrap.classList.add("open");
    document.body.classList.add("no-scroll");
    document.body.style.top = `-${scrollPosition}px`;
  } else {
    // 메뉴를 닫을 때 스크롤 위치 복원
    myMenuWrap.classList.remove("open");
    document.body.classList.remove("no-scroll");
    document.body.style.top = "";
    window.scrollTo(0, scrollPosition);
  }
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
