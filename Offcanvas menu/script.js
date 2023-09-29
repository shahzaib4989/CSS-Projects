const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const offCanvasMenu = document.querySelector('.offcanvas-menu');
const overlay = document.querySelector('#overlay');

openBtn.addEventListener('click', function () {
  offCanvasMenu.classList.add('active');
  // make it visible
  overlay.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
  offCanvasMenu.classList.remove('active');
  // hide with menu hide
  overlay.style.display = 'none';
});

//  get click when someone click on overlay

overlay.addEventListener('click', function () {
  offCanvasMenu.classList.remove('active');
  overlay.style.display = 'none';
});
