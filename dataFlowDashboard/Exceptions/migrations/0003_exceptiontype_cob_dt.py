# Generated by Django 3.2.4 on 2021-07-12 11:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Exceptions', '0002_remove_exceptiontype_cob_dt'),
    ]

    operations = [
        migrations.AddField(
            model_name='exceptiontype',
            name='cob_dt',
            field=models.DateField(null=True),
        ),
    ]
