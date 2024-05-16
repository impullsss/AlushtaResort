from django.views import View
from django.http import HttpResponse
from django.core.mail import send_mail

from .forms import BookingForm, NewsletterForm


class BookingFormView(View):

    form_class = BookingForm
    initial = {"key": "value"}

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)

        if form.is_valid():
            name = form.data.get('name')
            email = form.data['email']
            message = form.data['message']

            send_mail(
                f'Письмо от {name}',
                f'От пользователя {email} {message}',
                'impullss@gmail.com',
                ['CerberusWarDog@yandex.ru']
            )
            return HttpResponse(status=200)
        
        return HttpResponse(status=400)


class NewsletterView(View):

    form_class = NewsletterForm

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)

        if form.is_valid():
            email = form.data['email']

            send_mail(
                'Подписка на рассылку',
                'благодарю за подписку на рассылку',
                'impullss@gmail.com',
                [email]
            )
            return HttpResponse(status=200)
        
        return HttpResponse(status=400)