# Generated by Django 4.2 on 2024-12-24 15:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_homebanner_options'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='activity',
            options={'verbose_name_plural': 'Activities'},
        ),
        migrations.AlterModelOptions(
            name='contactus',
            options={'verbose_name_plural': 'Inquiries'},
        ),
        migrations.AlterModelOptions(
            name='gallery',
            options={'verbose_name_plural': 'Gallery Images'},
        ),
        migrations.AlterModelOptions(
            name='getinvolved',
            options={'verbose_name_plural': 'Get Involved'},
        ),
        migrations.AlterModelOptions(
            name='howitsgoing',
            options={'verbose_name_plural': 'How Its Going'},
        ),
        migrations.AlterModelOptions(
            name='howitstarted',
            options={'verbose_name_plural': 'How It Started'},
        ),
        migrations.AlterModelOptions(
            name='ourteam',
            options={'verbose_name_plural': 'Our Team'},
        ),
        migrations.AlterModelOptions(
            name='ourvalues',
            options={'verbose_name_plural': 'Our Values'},
        ),
        migrations.AlterModelOptions(
            name='whatwedo',
            options={'verbose_name_plural': 'What We Do'},
        ),
        migrations.AlterModelOptions(
            name='whoweare',
            options={'verbose_name_plural': 'Who We Are'},
        ),
    ]
