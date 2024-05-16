from django import forms

class BookingForm(forms.Form):
    name = forms.CharField(max_length=200)
    email = forms.EmailField()
    message = forms.CharField(max_length=240)

class NewsletterForm(forms.Form):
    email = forms.EmailField()