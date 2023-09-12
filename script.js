let menu = document.querySelector('#menu-bnt'),
    navbar = document.querySelector('.header .flex .navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}
