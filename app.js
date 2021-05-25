var slidIndex = 1;
var slides = document.getElementsByClassName("mySlide");
var dot = document.getElementsByClassName("dot");

// manual picture change
showSlide(slidIndex);

// automatic picture change
timer();

// arrow handler
function plusSlide(n) {
  showSlide((slidIndex += n));
}

// dot handler
function curentSlide(n) {
  showSlide((slidIndex = n));
}

// manual picture function
function showSlide(n) {
  var i;
  if (n > slides.length) {
    slidIndex = 1;
  }
  if (n < 1) {
    slidIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  slides[slidIndex - 1].style.display = "block";
  dot[slidIndex - 1].className += " active";
}

// automatic picture function
function timer() {
  var j;
  for (j = 0; j < slides.length; j++) {
    slides[j].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  slidIndex++;
  if (slidIndex > slides.length) {
    slidIndex = 1;
  }
  slides[slidIndex - 1].style.display = "block";
  dot[slidIndex - 1].className += " active";
  setInterval(timer, 3000);
}
