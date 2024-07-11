from django.db import models

# Create your models here.


class Exercise(models.Model):
    name = models.CharField(max_length=180)

    def __str__(self) -> str:
        return super().__str__()
    
class Workout (models.Model):
    date = models.DateField()
    exercises = models.ManyToManyField(Exercise)

    def __str__(self) -> str:
        return f"Workout on {self.date}"
    