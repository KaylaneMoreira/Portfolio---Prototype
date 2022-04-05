let show = true;
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  document.body.style.overflow = show ? "hidden" : "initial"
  navbarLinks.classList.toggle('active', show)
  show = !show;
})

