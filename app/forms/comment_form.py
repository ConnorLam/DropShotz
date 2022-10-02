from wsgiref.validate import validator
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError, NumberRange


def comment_length(form, field):
    comment = field.data
    if len(comment) > 500:
        raise ValidationError('Comment must be 500 characters or less')


class CommentForm(FlaskForm):
    comment = StringField('Comment', validators=[DataRequired('Please provide text'), comment_length])