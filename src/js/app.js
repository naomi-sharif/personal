const app = {

  init() {
    //
  },

  toggleHamburger() {
    const hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", function() {
      console.log('hello');
      hamburger.classList.toggle("active");
    })
  }
}

app.init()
