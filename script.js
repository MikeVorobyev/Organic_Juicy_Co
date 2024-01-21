const menuIcon = document.querySelector('.menu-icon');
const header = document.querySelector('header');
const body = document.querySelector('body');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('menu-icon--active');
    header.classList.toggle('header--mobile');
    body.classList.toggle('no-scroll');
})


//------------- Слайдер со стрелками --------------

const sliderArrows = document.querySelector('.slider-arrows');
const sliderArrowsItem = sliderArrows.querySelectorAll('.slider-arrows__item');
const btnLeft = sliderArrows.querySelector('.slider-arrows__arrow--left');
const btnRight = sliderArrows.querySelector('.slider-arrows__arrow--right');

let slideIndex = 0;

function showSlideArrows(n = 0) {
    slideIndex += n;

    if (slideIndex < 0) {
        slideIndex = sliderArrowsItem.length - 1;
    }

    if (slideIndex >= sliderArrowsItem.length) {
        slideIndex = 0;
    }

    sliderArrowsItem.forEach(item => item.style.display = 'none');
    sliderArrowsItem[slideIndex].style.display = 'block';
}

showSlideArrows()

btnLeft.addEventListener('click', () => showSlideArrows(-1));
btnRight.addEventListener('click', () => showSlideArrows(1));


//------------- Слайдер с точками --------------

const sliderPoints = document.querySelector('.slider-points');
const sliderPointsItem = sliderPoints.querySelectorAll('.slider-points__item');
const sliderPointsNav = sliderPoints.querySelector('.slider-points__nav');

let points = [];

for (i = 0; i < sliderPointsItem.length; i++) {
    const point = document.createElement('button');
    point.dataset.slideTo = i;
    point.classList.add('slider-points__nav-item');

    if (i === 1) {
        point.classList.add('slider-points__nav-item--active');
    }

    if (i != 1) {
        sliderPointsItem[i].style.display = 'none'
    }

    point.addEventListener('click', showSlideDots);
    sliderPointsNav.append(point);
    points.push(point);
};

function showSlideDots(event) {
    const numberFromDataSlideTo = event.target.dataset.slideTo

    sliderPointsItem.forEach(items => items.style.display = 'none');
    sliderPointsItem[numberFromDataSlideTo].style.display = 'block';
    
    points.forEach(items => items.classList.remove('slider-points__nav-item--active'));
    event.target.classList.add('slider-points__nav-item--active');
}


//--------- Слайдер с ОДНОЙ стрелкой -----------

const orange = document.querySelector('.orange');
const orangeImg = orange.querySelectorAll('.orange__img'); 
const orangeArrowIcong = orange.querySelector('.orange__arrow-icon');

let orangeSlideIndex = 0;

orangeArrowIcong.addEventListener('click', () => showOrangeSlideArrows(1));

function showOrangeSlideArrows(n = 0) {
    orangeSlideIndex += n;

    if (orangeSlideIndex >= orangeImg.length) {
        orangeSlideIndex = 0;
    }

    orangeImg.forEach(item => item.style.display = 'none');
    orangeImg[orangeSlideIndex].style.display = 'block';
}

showOrangeSlideArrows()

//--------------------------------------------

