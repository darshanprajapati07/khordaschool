const images = document.querySelectorAll('.gallery img');
const galleryContainer = document.querySelector('.gallery-container');
const dotsContainer = document.querySelector('.dots');
const overlay = document.querySelector('.overlay');

let currentIndex = 0;

images.forEach((img, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dot.dataset.index = index;
  dot.addEventListener('click', () => showImage(parseInt(dot.dataset.index)));
  dotsContainer.appendChild(dot);

  img.addEventListener('click', () => {
    showImage(index);
    currentIndex = index;
  });
});

function showImage(index) {
  const image = images[index].cloneNode();
  const enlargedContainer = document.createElement('div');
  enlargedContainer.classList.add('enlarged');
  enlargedContainer.appendChild(image);
  document.body.appendChild(enlargedContainer);

  const dotContainer = document.createElement('div');
  dotContainer.classList.add('dot-container');
  dotsContainer.childNodes.forEach(dot => {
    dotContainer.appendChild(dot.cloneNode(true));
  });
  enlargedContainer.appendChild(dotContainer);

  const dots = dotContainer.querySelectorAll('.dot');
  dots[currentIndex].classList.add('active');

  overlay.classList.add('show');

  setTimeout(() => {
    enlargedContainer.classList.add('show');
  }, 50);

  document.addEventListener('keydown', handleKeyPress);

  enlargedContainer.addEventListener('click', () => {
    enlargedContainer.classList.remove('show');
    overlay.classList.remove('show');
    setTimeout(() => {
      enlargedContainer.remove();
    }, 500);
    document.removeEventListener('keydown', handleKeyPress);
  });

  function handleKeyPress(event) {
    if (event.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      image.src = images[currentIndex].src;
      updateDotColor();
    } else if (event.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % images.length;
      image.src = images[currentIndex].src;
      updateDotColor();
    }
  }

  function updateDotColor() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
  }
}
