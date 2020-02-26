const progressTag = document.querySelector("div.progress")
const bodyTag = document.querySelector("body")
const checkbox = document.querySelector("input[name=navCheckbox]");
const btnMenu = document.querySelector(".btn-menu")
const btnContact = document.querySelector(".btn-contact")
const navMenuOptions = document.querySelectorAll(".nav-list li")
const mapOverlay = document.querySelector(".map-overlay")
const modalContainer = document.querySelector("#modal-container")
const modalBg = document.querySelector(".modal-background")
const phoneBtn = document.querySelector(".logo-phone")


// scroll progression bar
document.addEventListener("scroll", function() {
  const pixels = window.pageYOffset
  const pageHeight = bodyTag.getBoundingClientRect().height
  const totalScrollableDistance = pageHeight - window.innerHeight

  const percentage = (pixels / totalScrollableDistance) * 100
  progressTag.style.width = `${percentage}%`

})

// NAV checkbox

checkbox.addEventListener( 'change', function() {
    if(this.checked) {
      document.querySelector("html").classList.add('modal-active');
    } else {
      document.querySelector("html").classList.remove('modal-active');
    }
});

btnMenu.addEventListener( 'click', function() {
  checkbox.checked = true;
})

navMenuOptions.forEach(e => {
  e.addEventListener( 'click', function() {
    document.querySelector("html").classList.remove('modal-active');
    checkbox.checked = false;
  })
})

// Remove map overlay

mapOverlay.addEventListener('click', function() {
  mapOverlay.classList.add('remove-overlay')
})


// Modal activation

btnContact.addEventListener( 'click', function(e) {
  e.preventDefault();
  modalContainer.classList.remove('out')
  document.querySelector("#modal-container").classList.add('five');
  document.querySelector("html").classList.add('modal-active');
})

phoneBtn.addEventListener( 'click', function(e) {
  e.preventDefault();
  modalContainer.classList.remove('out')
  document.querySelector("#modal-container").classList.add('five');
  document.querySelector("html").classList.add('modal-active');
})

modalBg.addEventListener( 'click', function(e) {
  modalContainer.classList.add('out')
  document.querySelector("html").classList.remove('modal-active');

})

// Display logo on scroll
const logo = document.querySelector(".logo-sml");
const upArrow = document.querySelector(".logo-upArrow");
window.onscroll = function() {logoScroll()};

function logoScroll() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    logo.classList.add("logo-visible");
    upArrow.classList.add("arrow-visible");

  } else {
    logo.classList.remove("logo-visible");
    upArrow.classList.remove("arrow-visible");
  }
}

