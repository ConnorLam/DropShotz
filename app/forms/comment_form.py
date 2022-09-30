from wsgiref.validate import validator
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError, NumberRange


def comment_length(form, field):
    comment = field.data
    if len(comment) < 5 or len(comment) > 2000:
        raise ValidationError('Comment must be between 5 and 2000 characters')


class CommentForm(FlaskForm):
    comment = StringField('Comment', validators=[DataRequired('Please provide text'), comment_length])