const loadButton = document.querySelector('#load-image');
const imageNames = ['galaxies.png', 'bridge.jpg', 'stars.jpg', 'sombrero.jpg'];
const numOfImages = imageNames.length;

let numberOfTimesLoaded = 0;

loadButton.addEventListener('click', () => {
    const loadedImageIndex = numberOfTimesLoaded % numOfImages;
    const imageSource = `img/${imageNames[loadedImageIndex]}`;
    numberOfTimesLoaded++;

    updateImageSource(imageSource);
    // updateImageSource(imageSource, imageContainer);
});

const imageContainer = document.querySelector('#image-container');
const image = imageContainer.querySelector('img');

image.addEventListener('load', () => {
    // setTimeout(() => {
        imageContainer.classList.remove('loading');
        image.classList.add('visible');
    // }, 500);
});

function updateImageSource(source) {
    image.classList.remove('visible');
    imageContainer.classList.add('loading');
    image.src = source;
}

// Probati sa network throttle i manjim slikama

// function updateImageSource(source, container) {
//     const image = container.querySelector('img');
//
//     image.src = '';
//     image.classList.add('visible');
//
//     container.classList.remove('loading-error');
//     container.classList.add('loading');
//
//     fetch(source)
//         .then(response => {
//             if (response.ok) {
//                 image.src = source;
//             } else {
//                 image.classList.remove('visible');
//                 container.classList.add('loading-error');
//             }
//         })
//         .catch(error => {
//             console.error(error);
//             image.classList.remove('visible');
//             container.classList.add('loading-error');
//         })
//         .finally(() => {
//             container.classList.remove('loading');
//         });
// }
