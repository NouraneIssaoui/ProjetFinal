const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

let spasImages = document.querySelectorAll(".spasImage");
spasImages.forEach((spasImage) => {
  spasImage.addEventListener("click", () => {
    removeActiveClassesSpas();
    spasImage.classList.add("actives");
  });
});

function removeActiveClassesSpas() {
  spasImages.forEach((spasImage) => {
    spasImage.classList.remove("actives");
  });
}

let suitesImages = document.querySelectorAll(".suitesImage");
suitesImages.forEach((suiteImag) => {
  suiteImag.addEventListener("click", () => {
    removeActiveClassesSuites();
    suiteImag.classList.add("activess");
  });
});

function removeActiveClassesSuites() {
  suitesImages.forEach((suiteImag) => {
    suiteImag.classList.remove("activess");
  });
}

let RestImages = document.querySelectorAll(".RestImage");
RestImages.forEach((ResImg) => {
  ResImg.addEventListener("click", () => {
    removeActiveClassesRes();
    ResImg.classList.add("activesssR");
  });
});

function removeActiveClassesRes() {
  RestImages.forEach((ResImg) => {
    ResImg.classList.remove("activesssR");
  });
}
function handelSubmit() {
  let check = document.getElementById("forCheck").value;
  if (check.includes("@")) {
    alert("Thank you for Contact us");
  }
}
