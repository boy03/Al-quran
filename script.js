// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
//Ketika menu di klik
document.querySelector('#lis-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};
// click diluar untuk menghilangkan

const menu = document.querySelector('#lis-menu');
document.addEventListener('click', function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
