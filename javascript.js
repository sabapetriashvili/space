/* Hamburger Menu */
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('nav');
const menuWrap = document.querySelector('.wrap');

document.addEventListener("click", e => {
    if (hamburger.contains(e.target)) {
        menu.classList.toggle('active');
        hamburger.classList.toggle('active');
        menuWrap.classList.toggle('active');

    } else if (!menu.contains(e.target)) {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
        menuWrap.classList.remove('active');
    }
  });
