from django.db import models

# Create your models here.
class Post(models.Model):
    name = models.AutoField(max_length=50, primary_key=True)
    content = models.TextField(max_length=5000)


    def __unicode__(self):
        return self.name

    def __str__(self):
        return self.content