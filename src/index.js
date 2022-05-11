import './styles/main.scss'

const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar__container"),
  toggle = body.querySelector(".sidebar__toggle"),
  sidebarItem = body.querySelector(".sidebar__navigation"),
  searchBtn = body.querySelector(".header__search-icon"),
  searchInput = body.querySelector(".header__search-input"),
  burger = body.querySelector(".header__burger"),
  burgerline = body.querySelector(".header__burger-line"),
  navbar = body.querySelector(".header__navigation")
 
toggle.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar__container--close");
})

sidebarItem.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar__container--close");
})

let width = document.documentElement.clientWidth;
  if (width < 999) {
  sidebar.classList.add("sidebar__container--close");
}

searchBtn.addEventListener('click', function() {
  searchInput.focus();
})


burger.addEventListener('click', () => {
  navbar.classList.toggle("header__navigation--open")
  burgerline.classList.toggle("header__burger-line--open")
  
  navbar.addEventListener('click', () => {
    navbar.classList.remove("header__navigation--open")
    burgerline.classList.remove("header__burger-line--open")
  })
})
