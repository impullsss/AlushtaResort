(function () {

    const subscribeButtonElem = document.querySelector('.footer__subscribe-button');
    const subscribeEmailElem = document.querySelector('.footer__subscribe-email');
    const notificationErrorElem = document.querySelector('.footer__subscribe-notification_error');
    const notificationSuccessElem = document.querySelector('.footer__subscribe-notification_success');

    subscribeButtonElem.addEventListener('click', () => {
        const subscribeForm = new FormData();
        subscribeForm.append('email', subscribeEmailElem.value);

        subscribeButtonElem.innerHTML = `<div class="loader"></div>`

        notificationErrorElem.classList.remove('footer__subscribe-notification_visable');
        notificationSuccessElem.classList.remove('footer__subscribe-notification_visable');

        fetch('http://127.0.0.1:8000/api/newsletterForm', {
            method: 'POST',
            body: subscribeForm
        }).then(request => {
            if (request.status >= 400) {
                notificationErrorElem.classList.add('footer__subscribe-notification_visable');
            } else {
                notificationSuccessElem.classList.add('footer__subscribe-notification_visable');
            }

            subscribeButtonElem.innerHTML = 'Ok'
            subscribeEmailElem.value = ''
        })
    })
}())