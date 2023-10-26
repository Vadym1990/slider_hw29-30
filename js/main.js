const slider = document.querySelector('.slider');
const sliderElements = ['slider__slides', 'slider__dots', 'slider__manage'];

const sliderItems = sliderElements.map(function (el) {
    return `<div class ="${el}"></div>`
}).join('');

slider.innerHTML = sliderItems;

const sliderSlides = document.querySelector('.slider__slides');
const sliderSlidesElements = [
    {
        title: 'LoTR: The Fellowship of the Ring',
        img: 'fellowship.jpg',
        text: 'The Lord of the Rings: The Fellowship of the Ring is a 2001 epic fantasy adventure film directed by Peter Jackson from a screenplay by Fran Walsh, Philippa Boyens, and Jackson, based on 1954s The Fellowship of the Ring, the first volume of the novel The Lord of the Rings by J. R. R. Tolkien.'
    },
    {
        title: 'LoTR: Two Towers',
        img: 'two-towers.jpg',
        text: 'The Lord of the Rings: The Two Towers is a 2002 epic fantasy adventure film directed by Peter Jackson from a screenplay by Fran Walsh, Philippa Boyens, Stephen Sinclair, and Jackson, based on 1954s The Two Towers, the second volume of the novel The Lord of the Rings by J. R. R. Tolkien.'
    },
    {
        title: 'LoTR: Return of the King',
        img: 'return-of-the-king.jpg',
        text: 'The Lord of the Rings: The Fellowship of the Ring is a 2001 epic fantasy adventure film directed by Peter Jackson from a screenplay by Fran Walsh, Philippa Boyens, and Jackson, based on 1954s The Fellowship of the Ring, the first volume of the novel The Lord of the Rings by J. R. R. Tolkien.'
    }
];



const sliderSlidesItems = sliderSlidesElements.map(function (el) {
    return `
            <div class = "slide">
                <img class = "slide__img" src = "img/${el.img}">
                <div>
                    <h1 class = "slide__title">${el.title}</h1>
                    <p class = "slide__text">${el.text}</p>
                </div>
            </div>
            `
}).join('');

sliderSlides.innerHTML = sliderSlidesItems;

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// ----------------------------- SLIDER-DOTS ------------------------ //

const sliderDots = document.querySelector('.slider__dots');

for (let i = 0; i < sliderSlidesElements.length; i++) {
    let div = document.createElement('div');
    div.className = 'dot';
    sliderDots.appendChild(div);
}

const dots = document.querySelectorAll('.dot');

setActiveDot();

function setActiveDot() {
    dots.forEach(function (el) {
        el.classList.remove('dot_active')
    });
    dots[currentSlide].classList.add('dot_active');
}

dots.forEach(function (el, index) {
    el.dataset.index = index;
})

dots.forEach(function (el) {
    el.onclick = function () {
        currentSlide = this.dataset.index;

        setActiveDot();
        setActiveSlide();
    }
})

// ------------------------ SLIDER-BTNs----------------------------//

const sliderManage = document.querySelector('.slider__manage');

for (let i = 0; i < 2; i++) {
    let button = document.createElement('button');
    button.className = 'slider-btn';
    sliderManage.appendChild(button);
}
const sliderBtns = document.querySelectorAll('.slider-btn');

sliderBtns[0].classList.add('slider-btn_prev');
sliderBtns[1].classList.add('slider-btn_next');

const sliderBtnPrev = document.querySelector('.slider-btn_prev').innerHTML = 'Previous';
const sliderBtnNext = document.querySelector('.slider-btn_next').innerHTML = 'Next';

// --------------------------------SLIDES---------------------------- //
const slidesCount = slides.length;


setActiveSlide();

function setActiveSlide() {
    slides.forEach(function (el) {
        el.classList.remove('slide_active')
    });
    slides[currentSlide].classList.add('slide_active');
}

function nextSlide() {
    currentSlide++;
    console.log(currentSlide);
    if (currentSlide >= slidesCount) {
        currentSlide = 0;
    }
    setActiveSlide()
}
function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slidesCount - 1;
    }
    setActiveSlide()
}

const btnFunc = [prevSlide, nextSlide];

sliderBtns.forEach(function (btn, index) {
    btn.onclick = function () {
        btnFunc[index]();
        setActiveDot();
    }
})

