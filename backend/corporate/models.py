from django.db import models

class CorporateService(models.Model):
    title = models.CharField(max_length=200, verbose_name="Назва послуги")
    description = models.TextField(verbose_name="Опис")
    image = models.ImageField(upload_to="corporate/", null=True, blank=True, verbose_name="Фонове зображення")
    is_active = models.BooleanField(default=True, verbose_name="Активно")

    class Meta:
        verbose_name = "Корпоративна послуга"
        verbose_name_plural = "Корпоративні послуги"

    def __str__(self):
        return self.title
