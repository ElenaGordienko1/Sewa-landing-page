const slider = document.getElementById('slider');
const nextBtn = document.getElementById('next-btn');

const slide = slider.querySelector('.reviews__slide');
const slideWidth = slide.offsetWidth + parseInt(getComputedStyle(slide).marginRight);

nextBtn.addEventListener('click', () => {
  slider.scrollBy({
    left: slideWidth,
    behavior: 'smooth'
  });
});
