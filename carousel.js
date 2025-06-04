let slideIndex = 1;
arata_slide(slideIndex);

function urm_slide(n) {
  arata_slide(slideIndex += n);
}

function slide_actual(n) {
  arata_slide(slideIndex = n);
}

function arata_slide(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  if (dots.length > 0) {
    dots[slideIndex-1].className += " active";
  }
}