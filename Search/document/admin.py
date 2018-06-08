from django.contrib import admin
from document.models import Post
# Register your models here.

class PostModelAdmin(admin.ModelAdmin):
    list_display = ["name", "content"]
    search_fields = ["content"]
    class Meta:
        model = Post

admin.site.register(Post, PostModelAdmin)