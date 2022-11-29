// MENÚ LATERAL
var elements = document.querySelectorAll("nav div");

elements.forEach(navelement => {
  navelement.addEventListener("mouseover", function() {
  this.querySelector("i").classList.replace("fa-regular", "fa-solid");
})
  navelement.addEventListener("mouseout", function() {
  this.querySelector("i").classList.replace("fa-solid", "fa-regular");
})
});

// FUNCIÓN COLORES MENÚ LATERAL

users.forEach(user => {
    user.addEventListener("click", function() {
      if (this.style.backgroundColor != "rgb(218, 218, 218)") {
        this.style.backgroundColor = "rgb(218, 218, 218)";
      } else {
        this.style.backgroundColor = "white";
      } 
    })
  })