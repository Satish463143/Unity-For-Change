# Generated by Django 5.1.4 on 2025-01-07 12:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_howitstarted_options_alter_whatwedo_options_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='getinvolved',
            name='date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='getinvolved',
            name='time',
            field=models.TimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='ourvalues',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
    ]
