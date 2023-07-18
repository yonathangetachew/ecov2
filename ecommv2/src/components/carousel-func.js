// window.onload = function(){
// let slidePosition = 0;
// const slides = document.getElementsByClassName('carousel__item');
// const nextButton = document.getElementById('carousel__button--next');
// const prevButton = document.getElementById('carousel__button--prev');
// const totalSlides = slides.length;

// if (nextButton) {
//   nextButton.addEventListener("click", function() {
//     moveToNextSlide();
//   });
// }

// if (prevButton) {
//   prevButton.addEventListener("click", function() {
//     moveToPrevSlide();
//   });
// }

// function updateSlidePosition() {
//   for (let slide of slides) {
//     slide.classList.remove('carousel__item--visible');
//     slide.classList.add('carousel__item--hidden');
//   }

//   slides[slidePosition].classList.add('carousel__item--visible');
// }

// function moveToNextSlide() {
//   if (slidePosition === totalSlides - 1) {
//     slidePosition = 0;
//   } else {
//     slidePosition++;
//   }

//   updateSlidePosition();
// }

// function moveToPrevSlide() {
//   if (slidePosition === 0) {
//     slidePosition = totalSlides - 1;
//   } else {
//     slidePosition--;
//   }

//   updateSlidePosition();
// }
// }

window.onload = function () {
  fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
      let productsHtml = "";
      for (let i = 0; i < data.length; i++) {
        let item = data[i];

        let product = `
            
            <div class="product">
      <img src="${item.img}"alt="">
      <h3>${item.title}</h3>
      <p class="price">${item.price}</p>
      <p class="description">${item.description}</p>
    </div>
            
            
            `;

        productsHtml += product;
      }

      let products = document.getElementsByClassName("products")[0];
      products.innerHTML = productsHtml;
    })
    .catch((err) => console.log(err));
};