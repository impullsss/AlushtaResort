(function () {
    const aboutElement = document.querySelector('.main__appartment-about');
    const decorateButtonElement = document.querySelector('.main__appartment-description-more-button-decoreated');
    const descriptionElement = document.querySelector('.main__appartment-description');

    descriptionElement.addEventListener('click', () => {
      aboutElement.classList.toggle('main__appartment-about_open');
      decorateButtonElement.classList.toggle('main__appartment-description-more-button-decoreated_close');
    })
}())