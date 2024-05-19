// nav의 item(menu)부분 활성화 표시

const navTargetItems = document.querySelectorAll(".header__nav-item");

const removeActiveClasses = () => {
  navTargetItems.forEach(item => {
    item.classList.remove("active");
  });
};

navTargetItems.forEach(item => {
  item.addEventListener("click", () => {
    removeActiveClasses();
    item.classList.add("active");
  });
});

// 모바일 사이즈에서 스크롤 시 버튼 영역 사라지게
function handleScroll() {
  const header = document.querySelector(".header");
  const maxScroll = 50; // Maximum scroll distance
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > maxScroll) {
    header.style.top = "-50px";
  } else {
    header.style.top = `-${scrollTop}px`;
  }
}

function checkMediaQuery() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    document.addEventListener("scroll", handleScroll);
  } else {
    document.removeEventListener("scroll", handleScroll);
    document.querySelector(".header").style.top = "0"; // Reset top position
  }
}

window.addEventListener("resize", checkMediaQuery);
window.addEventListener("load", checkMediaQuery);
