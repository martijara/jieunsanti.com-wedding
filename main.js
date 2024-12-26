const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionX = offset*(-0.3)-100 + "px";
})


window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    offset-=3100;
    parallax1.style.backgroundPositionY = offset*(0.1) + "px";
})

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    offset-=4800;
    parallax2.style.backgroundPositionY = offset*(-0.1) + "px";
})

function myFunction() {
    document.getElementById("check").checked = false;
  }


  
function reveal() {
var reveals = document.querySelectorAll(".reveal");
  
for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}
  
window.addEventListener("scroll", reveal);

const targetDate = new Date('2025-02-21T15:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeDifference = targetDate - now;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  const timerElement = document.getElementById('timer');
  timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (timeDifference <= 0) {
    clearInterval(countdownInterval);
    window.location.href = 'https://www.magarnirmal.com.np/'; // Redirect to another webpage
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();



// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select next slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});




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