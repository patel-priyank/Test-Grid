const photo = document.querySelector('.photo');
const image = photo.querySelector('img');
const about = document.querySelector('.about');

const updatePhotoHeight = () => {
  image.style.height = '0';
  image.style.width = '0';

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
