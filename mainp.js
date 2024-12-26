// Select all slides
const slidesp = document.querySelectorAll(".slidep");

// loop through slides and set each slides translateX
slidesp.forEach((slidep, indx) => {
  slidep.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlidep = document.querySelector(".btn-nextp");

// current slide counter
let curSlidep = 0;
// maximum number of slides
let maxSlidep = slidesp.length - 1;

// add event listener and navigation functionality
nextSlidep.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlidep === maxSlidep) {
    curSlidep = 0;
  } else {
    curSlidep++;
  }

  //   move slide by -100%
  slidesp.forEach((slidep, indx) => {
    slidep.style.transform = `translateX(${100 * (indx - curSlidep)}%)`;
  });
});

// select next slide button
const prevSlidep = document.querySelector(".btn-prevp");

// add event listener and navigation functionality
prevSlidep.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlidep === 0) {
    curSlidep = maxSlidep;
  } else {
    curSlidep--;
  }

  //   move slide by 100%
  slidesp.forEach((slidep, indx) => {
    slidep.style.transform = `translateX(${100 * (indx - curSlidep)}%)`;
  });
});

var images = document.querySelectorAll('img');
images.forEach(function(image) {
  image.setAttribute('loading', 'lazy');
});