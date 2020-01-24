const progressTag = document.querySelector("div.progress")
const bodyTag = document.querySelector("body")

// scroll progression bar
document.addEventListener("scroll", function() {
  const pixels = window.pageYOffset
  const pageHeight = bodyTag.getBoundingClientRect().height
  const totalScrollableDistance = pageHeight - window.innerHeight

  const percentage = (pixels / totalScrollableDistance) * 100
  progressTag.style.width = `${percentage}%`

})
