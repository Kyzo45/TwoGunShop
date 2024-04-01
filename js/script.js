//toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//if menu di klik
document.querySelector("#hb-menu");
onclick = () => {
  navbarNav.classList.toggle("active");
};

//close menu
const hamburger = document.querySelector('#hb-menu');

document.addEventListener('click', function(e){
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active');
  }
});


