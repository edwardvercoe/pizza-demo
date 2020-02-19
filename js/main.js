const progressTag = document.querySelector("div.progress")
const bodyTag = document.querySelector("body")
const checkbox = document.querySelector("input[name=navCheckbox]");
const btnMenu = document.querySelector(".btn-menu")
const navMenuOptions = document.querySelectorAll(".nav-list li")

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
        console.log("checky checked")
    } else {
        console.log("no no no")
    }
});

btnMenu.addEventListener( 'click', function() {
  checkbox.checked = true;
  console.log("attempting to check")
})

navMenuOptions.forEach(e => {
  e.addEventListener( 'click', function() {
    checkbox.checked = false;
    console.log("attempting to uncheck")
  })
})
