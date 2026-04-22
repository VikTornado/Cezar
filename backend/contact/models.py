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
