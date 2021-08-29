window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById('id').classList.toggle('fade-out');
  } else {
    document.getElementById('id').classList.toggle('fade-out');
  }
}