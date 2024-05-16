(function () {

    const subscribeButtonElem = document.querySelector('.footer__subscribe-button');
    const subscribeEmailElem = document.querySelector('.footer__subscribe-email');

    subscribeButtonElem.addEventListener('click', () => {
        const subscribeForm = new FormData();
        subscribeForm.append('email', subscribeEmailElem.value);

        fetch('http://127.0.0.1:8000/api/newsletterForm', {
            method: 'POST',
            body: subscribeForm
        }).then(request => {
        })
    })
}())