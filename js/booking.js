function init_1() {
  const slideImage = document.querySelectorAll('.slide-image.slider-1');
  const slidesContainer = document.querySelector('.slides-container.slider-1');
  const nextBtn = document.querySelector('.next-btn.slider-1');
  const prevBtn = document.querySelector('.prev-btn.slider-1');


  let numberOfImages = slideImage.length;
  let slideWidth = slideImage[0].clientWidth;
  let currentSlide = 0;
  slideImage.forEach((img, i) => {
    console.log(img);
    img.style.left = i * 100 + "%";
  });

  slideImage[0].classList.add("active");

  nextBtn.addEventListener("click", () => {
    if (currentSlide >= numberOfImages - 1) {
      goToSlide(0);
      return;
    }

    currentSlide++;
    goToSlide(currentSlide);
  });

  prevBtn.addEventListener("click", () => {
    if (currentSlide <= 0) {
      goToSlide(numberOfImages - 1);
      return;
    }

    currentSlide--;
    goToSlide(currentSlide);
  });

  function goToSlide(slideNumber) {
    slidesContainer.style.transform =
      "translateX(-" + slideWidth * slideNumber + "px)";

    currentSlide = slideNumber;
    setActiveClass();
  }

  function setActiveClass() {
    let currentActive = document.querySelector(".slide-image.slider-1.active");
    currentActive.classList.remove("active");
    slideImage[currentSlide].classList.add("active");
  }



}
init_1();

function init_2() {
  const slideImage = document.querySelectorAll('.slide-image.slider-2');
  const slidesContainer = document.querySelector('.slides-container.slider-2');
  const nextBtn = document.querySelector('.next-btn.slider-2');
  const prevBtn = document.querySelector('.prev-btn.slider-2');


  let numberOfImages = slideImage.length;
  let slideWidth = slideImage[0].clientWidth;
  let currentSlide = 0;
  slideImage.forEach((img, i) => {
    console.log(img);
    img.style.left = i * 100 + "%";
  });

  slideImage[0].classList.add("active");

  nextBtn.addEventListener("click", () => {
    if (currentSlide >= numberOfImages - 1) {
      goToSlide(0);
      return;
    }

    currentSlide++;
    goToSlide(currentSlide);
  });

  prevBtn.addEventListener("click", () => {
    if (currentSlide <= 0) {
      goToSlide(numberOfImages - 1);
      return;
    }

    currentSlide--;
    goToSlide(currentSlide);
  });

  function goToSlide(slideNumber) {
    slidesContainer.style.transform =
      "translateX(-" + slideWidth * slideNumber + "px)";

    currentSlide = slideNumber;
    setActiveClass();
  }

  function setActiveClass() {
    let currentActive = document.querySelector(".slide-image.slider-2.active");
    currentActive.classList.remove("active");
    slideImage[currentSlide].classList.add("active");
  }



}
init_2();

function init_3() {
  const slideImage = document.querySelectorAll('.slide-image.slider-3');
  const slidesContainer = document.querySelector('.slides-container.slider-3');
  const nextBtn = document.querySelector('.next-btn.slider-3');
  const prevBtn = document.querySelector('.prev-btn.slider-3');


  let numberOfImages = slideImage.length;
  let slideWidth = slideImage[0].clientWidth;
  let currentSlide = 0;
  slideImage.forEach((img, i) => {
    console.log(img);
    img.style.left = i * 100 + "%";
  });

  slideImage[0].classList.add("active");

  nextBtn.addEventListener("click", () => {
    if (currentSlide >= numberOfImages - 1) {
      goToSlide(0);
      return;
    }

    currentSlide++;
    goToSlide(currentSlide);
  });

  prevBtn.addEventListener("click", () => {
    if (currentSlide <= 0) {
      goToSlide(numberOfImages - 1);
      return;
    }

    currentSlide--;
    goToSlide(currentSlide);
  });

  function goToSlide(slideNumber) {
    slidesContainer.style.transform =
      "translateX(-" + slideWidth * slideNumber + "px)";

    currentSlide = slideNumber;
    setActiveClass();
  }

  function setActiveClass() {
    let currentActive = document.querySelector(".slide-image.slider-3.active");
    currentActive.classList.remove("active");
    slideImage[currentSlide].classList.add("active");
  }



}
init_3();

function init_4() {
  const slideImage = document.querySelectorAll('.slide-image.slider-4');
  const slidesContainer = document.querySelector('.slides-container.slider-4');
  const nextBtn = document.querySelector('.next-btn.slider-4');
  const prevBtn = document.querySelector('.prev-btn.slider-4');


  let numberOfImages = slideImage.length;
  let slideWidth = slideImage[0].clientWidth;
  let currentSlide = 0;
  slideImage.forEach((img, i) => {
    console.log(img);
    img.style.left = i * 100 + "%";
  });

  slideImage[0].classList.add("active");

  nextBtn.addEventListener("click", () => {
    if (currentSlide >= numberOfImages - 1) {
      goToSlide(0);
      return;
    }

    currentSlide++;
    goToSlide(currentSlide);
  });

  prevBtn.addEventListener("click", () => {
    if (currentSlide <= 0) {
      goToSlide(numberOfImages - 1);
      return;
    }

    currentSlide--;
    goToSlide(currentSlide);
  });

  function goToSlide(slideNumber) {
    slidesContainer.style.transform =
      "translateX(-" + slideWidth * slideNumber + "px)";

    currentSlide = slideNumber;
    setActiveClass();
  }

  function setActiveClass() {
    let currentActive = document.querySelector(".slide-image.slider-4.active");
    currentActive.classList.remove("active");
    slideImage[currentSlide].classList.add("active");
  }



}
init_4();

function init_5() {
  const slideImage = document.querySelectorAll('.slide-image.slider-5');
  const slidesContainer = document.querySelector('.slides-container.slider-5');
  const nextBtn = document.querySelector('.next-btn.slider-5');
  const prevBtn = document.querySelector('.prev-btn.slider-5');


  let numberOfImages = slideImage.length;
  let slideWidth = slideImage[0].clientWidth;
  let currentSlide = 0;
  slideImage.forEach((img, i) => {
    console.log(img);
    img.style.left = i * 100 + "%";
  });

  slideImage[0].classList.add("active");

  nextBtn.addEventListener("click", () => {
    if (currentSlide >= numberOfImages - 1) {
      goToSlide(0);
      return;
    }

    currentSlide++;
    goToSlide(currentSlide);
  });

  prevBtn.addEventListener("click", () => {
    if (currentSlide <= 0) {
      goToSlide(numberOfImages - 1);
      return;
    }

    currentSlide--;
    goToSlide(currentSlide);
  });

  function goToSlide(slideNumber) {
    slidesContainer.style.transform =
      "translateX(-" + slideWidth * slideNumber + "px)";

    currentSlide = slideNumber;
    setActiveClass();
  }

  function setActiveClass() {
    let currentActive = document.querySelector(".slide-image.slider-5.active");
    currentActive.classList.remove("active");
    slideImage[currentSlide].classList.add("active");
  }



}
init_5();

function init_6() {
  const slideImage = document.querySelectorAll('.slide-image.slider-6');
  const slidesContainer = document.querySelector('.slides-container.slider-6');
  const nextBtn = document.querySelector('.next-btn.slider-6');
  const prevBtn = document.querySelector('.prev-btn.slider-6');


  let numberOfImages = slideImage.length;
  let slideWidth = slideImage[0].clientWidth;
  let currentSlide = 0;
  slideImage.forEach((img, i) => {
    console.log(img);
    img.style.left = i * 100 + "%";
  });

  slideImage[0].classList.add("active");

  nextBtn.addEventListener("click", () => {
    if (currentSlide >= numberOfImages - 1) {
      goToSlide(0);
      return;
    }

    currentSlide++;
    goToSlide(currentSlide);
  });

  prevBtn.addEventListener("click", () => {
    if (currentSlide <= 0) {
      goToSlide(numberOfImages - 1);
      return;
    }

    currentSlide--;
    goToSlide(currentSlide);
  });

  function goToSlide(slideNumber) {
    slidesContainer.style.transform =
      "translateX(-" + slideWidth * slideNumber + "px)";

    currentSlide = slideNumber;
    setActiveClass();
  }

  function setActiveClass() {
    let currentActive = document.querySelector(".slide-image.slider-6.active");
    currentActive.classList.remove("active");
    slideImage[currentSlide].classList.add("active");
  }



}
init_6();

let eleSection = document.createElement('div');
eleSection.setAttribute('class','ap_section')
let eleImage = document.createElement('img');
eleImage.src = JSON.parse(localStorage.getItem('data')).hotelImages[0];
eleSection.append(eleImage)


$(document).ready(function () {
  $(".ap_container").prepend(eleSection);      
    });


let dd = document.querySelector('.dynamic-data');
console.log(dd)
let hEle = document.createElement('h1');
hEle.innerText = JSON.parse(localStorage.getItem('data')).hotelName;

console.log(hEle)
dd.append(hEle);


document.querySelector(".button_1").addEventListener("click",paymentPage);

function paymentPage(){
  window.location.href="reserve.html"

}

document.querySelector(".button_2").addEventListener("click",paymentPage2);

function paymentPage2(){
  window.location.href="reserve.html"
}

document.querySelector(".button_3").addEventListener("click",paymentPage3);

function paymentPage3(){
  window.location.href="reserve.html"
}
document.querySelector(".button_4").addEventListener("click",paymentPage4);

function paymentPage4(){
  window.location.href="reserve.html"
}
document.querySelector(".button_5").addEventListener("click",paymentPage5);

function paymentPage5(){
  window.location.href="reserve.html"
}

document.querySelector(".button_6").addEventListener("click",paymentPage6);

function paymentPage6(){
  window.location.href="reserve.html"
}

document.querySelector(".button_7").addEventListener("click",paymentPage7);

function paymentPage7(){
  window.location.href="reserve.html"
}