function createImage(src){
    const image = document.createElement('img');
    image.src = src;
    return image;
}

function onThumbnailClick(event){
    const image = createImage(event.currentTarget.src);
    document.body.classList.add('no-scroll');
    modalView.style.top = window.pageYOffset + 'px';
    modalView.appendChild(image);
    modalView.classList.remove('hidden');
}


const albumView = document.querySelector('#album-view');
const modalView = document.querySelector('#modal-view');

for (let i = 0; i < PHOTO_LIST.length; i++) {
    const photoSrc = PHOTO_LIST[i];
    const image = createImage(photoSrc);
    image.addEventListener('click',onThumbnailClick);
    albumView.appendChild(image);
}


function onmodalClick(){
    document.body.classList.remove('no-scroll');
    modalView.classList.add('hidden');
    modalView.innerHTML = '';
}


modalView.addEventListener('click',onmodalClick);