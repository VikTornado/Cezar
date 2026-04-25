from django.db import models

class ContactRequest(models.Model):
    name = models.CharField(max_length=150, verbose_name="Ім'я")
    phone = models.CharField(max_length=20, verbose_name="Телефон")
    message = models.TextField(blank=True, verbose_name="Повідомлення")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Час створення")

    class Meta:
        verbose_name = "Заявка"
        verbose_name_plural = "Заявки клієнтів"
        ordering = ['-created_at']

    def __str__(self):
        return f"Заявка від {self.name} ({self.phone})"

import os
import requests
from django.db.models.signals import post_save
from django.dispatch import receiver

@receiver(post_save, sender=ContactRequest)
def send_telegram_notification(sender, instance, created, **kwargs):
    if created:
        token = os.getenv('TELEGRAM_BOT_TOKEN')
        chat_id = os.getenv('TELEGRAM_CHAT_ID')
        
        if token and chat_id:
            message = (
                f"🚨 *Нова заявка на сайті Cezar!*\n\n"
                f"👤 *Ім'я:* {instance.name}\n"
                f"📞 *Телефон:* {instance.phone}\n"
            )
            if instance.message:
                message += f"💬 *Коментар:* {instance.message}\n"
                
            url = f"https://api.telegram.org/bot{token}/sendMessage"
            payload = {
                'chat_id': chat_id,
                'text': message,
                'parse_mode': 'Markdown'
            }
            try:
                requests.post(url, json=payload, timeout=5)
            except Exception as e:
                print(f"Failed to send Telegram notification: {e}")
