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
