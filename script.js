const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelectorAll('.nav-link');
const navMenu = document.querySelector('.nav-menu');
const dropdown = document.querySelector('.dropdown_btn');
const link = document.querySelector('.links');
const links = document.querySelectorAll('.links a');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);

dropdown.addEventListener('click', () => {
  link.classList.toggle('hide-dd');
});

links.forEach((n) => {
  n.addEventListener('click', () => {
    link.classList.add('hide-dd');
  });
});


// carousel
const carousels = document.querySelectorAll('.carousel');
carousels.forEach((carousel) => {
  const imgs = carousel.querySelector('.image-container');
  const leftBtn = carousel.querySelector('.left');
  const rightBtn = carousel.querySelector('.right');
  const img = carousel.querySelectorAll('.image-container img'); // array of imgs

  let idx = 0;

  function changeImage() {
    if (idx > img.length - 1) {
      idx = 0;
    } else if (idx < 0) {
      idx = img.length - 1;
    }

    imgs.style.transform = `translateX(${-idx * 410}px)`;
  }

  function run() {
    idx++;
    changeImage();
  }

  // let interval = setInterval(run, 3000);

  rightBtn.addEventListener('click', () => {
    idx++;
    changeImage();
  });

  leftBtn.addEventListener('click', () => {
    idx--;
    changeImage();
  });
});

// carousel in football automatic
const footballs = document.querySelectorAll('.football');
footballs.forEach((carousel) => {
  const imgs = carousel.querySelector('.image-container');
  const fname = carousel.querySelector('.football_name');

  const img = carousel.querySelectorAll('.image-container img');
  const footBallName = carousel.querySelectorAll('.football_name p');

  let idx = 0;

  function changeImage() {
    if (idx > img.length - 1) {
      idx = 0;
    } else if (idx < 0) {
      idx = img.length - 1;
    }

    imgs.style.transform = `translateX(${-idx * 410}px)`;
    fname.style.transform = `translateX(${-idx * 409}px)`;
  }

  function run() {
    idx++;
    changeImage();
  }

  setInterval(run, 3000);
});