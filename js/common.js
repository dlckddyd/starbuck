const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click' , function () {
  // 서치라는 클래스명의 div 요소를 클릭하면 검색부분에 인풋요소를 포커스를 해라
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  // 검색부분에 포커스 되면 css에서 선언하기 위함
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색'); // html 속성 에트리뷰트
});

searchInputEl.addEventListener('blur', function () {
  // 포커스 해제시 통합검색 없애기
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', ''); // html 속성 에트리뷰트
});


// FOOTER
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 올해가 몇년도인지 불러옴