// Handle scrolling when tapping on the navbar menu
function scrollToTargetAdjusted(a) {
  var element = document.getElementById(a);
  if (window.innerWidth < 768) { var headerOffset = 303 } else { var headerOffset = 63; };
  var elementPosition = element.getBoundingClientRect().top;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var offsetPosition = elementPosition + scrollTop - headerOffset;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}

const navbarMenu = document.querySelector('.nav-bar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  const linkid = document.querySelector(link).id;
  scrollToTargetAdjusted(linkid);
  navbarMenu.classList.remove('open');
});


//Navbar toggle button for small screen

const navbarToggleBtn = document.querySelector('.nav-bar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});



