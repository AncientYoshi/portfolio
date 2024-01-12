//const sections = document.querySelectorAll(".sections");
//const sectBtns = document.querySelectorAll(".controlls");
//const sectBtn = document.querySelectorAll(".control");
//const allSections = document.querySelector(".main-content");

//function PageTransition() {
//  for (let i = 0; i < sectBtn.length; i++) {
//    sectBtn[i].addEventListener("click", function () {
//      let currentBtn = document.querySelectorAll(".active-btn");
//      currentBtn[0].className = currentBtn[0].className.replace(
//        "active-btn",
//        ""
//      );
//      this.className += " active-btn";
//    });
//  }
//}

//PageTransition();
const sections = document.querySelectorAll(".section"); // Use .section instead of .sections
const sectBtns = document.querySelector(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransition() {
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].classList.remove("active-btn"); // Use classList.remove() instead of replacing the className
      this.classList.add("active-btn"); // Use classList.add() to add the 'active-btn' class
    });
  }

  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      sectBtn.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

PageTransition();
