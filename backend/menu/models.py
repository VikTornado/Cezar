from django.db import models

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
