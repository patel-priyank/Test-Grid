const defaultHeight = window.getComputedStyle(document.documentElement).getPropertyValue('--default-height');
const defaultWidth = window.getComputedStyle(document.documentElement).getPropertyValue('--default-width');

const photo = document.querySelector('.photo');
const image = photo.querySelector('img');
const about = document.querySelector('.about');

const updatePhotoHeight = () => {
  image.style.height = defaultHeight;
  image.style.width = defaultWidth;

  photo.style.maxHeight = about.clientHeight + 'px';

  if (photo.clientHeight > photo.clientWidth) {
    image.style.height = '100%';
    image.style.width = 'unset';
  } else {
    image.style.height = 'unset';
    image.style.width = '100%';
  }
};

window.addEventListener('resize', updatePhotoHeight);

updatePhotoHeight();
