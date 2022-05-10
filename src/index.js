import './styles/main.scss'

const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar__container"),
  toggle = body.querySelector(".sidebar__toggle"),
  searchBtn = body.querySelector(".header__search-icon"),
  searchInput = body.querySelector(".header__search-input"),
  burger = body.querySelector(".header__burger"),
  navbar = body.querySelector(".header__navigation"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");


  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar__container--close");
  });
  searchBtn.addEventListener('click', function() {
    searchInput.focus();
  });
  
  burger.addEventListener('click', () => {
    navbar.classList.toggle("header__navigation--open")
  });

  modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
      modeText.innerText = "Light Mode"
    } 
  });
  