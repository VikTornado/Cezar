from django.db import models
from django.core.exceptions import ValidationError

class HeroBanner(models.Model):
    title = models.CharField(max_length=200, default="Cezar", verbose_name="Головний заголовок")
    subtitle = models.CharField(max_length=300, default="Справжня родинна гостинність", verbose_name="Підзаголовок")
    image = models.ImageField(upload_to="hero/", verbose_name="Фонове зображення (на весь екран)")
    is_active = models.BooleanField(default=True, verbose_name="Активний")

    class Meta:
        verbose_name = "Головний Банер"
        verbose_name_plural = "Головний Банер"

    def clean(self):
        if self.is_active:
            HeroBanner.objects.filter(is_active=True).exclude(pk=self.pk).update(is_active=False)

    def save(self, *args, **kwargs):
        self.clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

class Category(models.Model):
    name = models.CharField(max_length=100, verbose_name="Назва")
    slug = models.SlugField(unique=True, verbose_name="Slug")
    image = models.ImageField(upload_to="categories/", null=True, blank=True, verbose_name="Зображення")
    description = models.TextField(blank=True, verbose_name="Опис")
    order = models.IntegerField(default=0, verbose_name="Сортування")

    class Meta:
        verbose_name = "Категорія"
        verbose_name_plural = "Категорії"
        ordering = ['order']

    def __str__(self):
        return self.name

class Dish(models.Model):
    title = models.CharField(max_length=200, verbose_name="Назва страви")
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='dishes', verbose_name="Категорія")
    description = models.TextField(blank=True, verbose_name="Опис")
    price = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True, verbose_name="Ціна")
    weight = models.CharField(max_length=50, blank=True, verbose_name="Вага / Об'єм")
    calories = models.IntegerField(null=True, blank=True, verbose_name="Калорійність (ккал)")
    ingredients = models.TextField(blank=True, verbose_name="Склад страви")
    main_image = models.ImageField(upload_to="dishes/", null=True, blank=True, verbose_name="Головне зображення")
    is_popular = models.BooleanField(default=False, verbose_name="Популярна страва")
    is_available = models.BooleanField(default=True, verbose_name="В наявності")

    class Meta:
        verbose_name = "Страва"
        verbose_name_plural = "Страви"

    def __str__(self):
        return self.title

class DishImage(models.Model):
    dish = models.ForeignKey(Dish, on_delete=models.CASCADE, related_name='images', verbose_name="Страва")
    image = models.ImageField(upload_to="dishes/gallery/", verbose_name="Додаткове зображення")

    class Meta:
        verbose_name = "Фото страви"
        verbose_name_plural = "Галерея страв"

    def __str__(self):
        return f"Фото для {self.dish.title}"

class GalleryImage(models.Model):
    image = models.ImageField(upload_to="gallery/", verbose_name="Фотографія")
    caption = models.CharField(max_length=200, blank=True, verbose_name="Короткий підпис")
    order = models.IntegerField(default=0, verbose_name="Сортування (порядок)")
    is_visible = models.BooleanField(default=True, verbose_name="Відображати на сайті")

    class Meta:
        verbose_name = "Фото для галереї"
        verbose_name_plural = "Галерея"
        ordering = ['order', '-id']

    def __str__(self):
        return self.caption if self.caption else f"Фото #{self.id}"
