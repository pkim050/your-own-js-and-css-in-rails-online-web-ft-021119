$(document).ready(function() {
  const body = document.querySelector("body")
  body.addEventListener("click", function(e) {
    debugger
    if (e.target.id === "hide_this") {
      $("#hide_this").html("")
    }
  })
})
