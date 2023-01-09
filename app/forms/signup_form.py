from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length, URL
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Someone has already signed up with that email. Imposter!!')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Someone already has that username. Try getting more creative!')


class SignUpForm(FlaskForm):
    first_name = StringField('firstname', validators=[DataRequired()])
    last_name = StringField('lastname', validators=[DataRequired()])
    username = StringField(
        'username', validators=[DataRequired(), username_exists])
    email = StringField('email', validators=[DataRequired(), user_exists])
    profile_img_url = StringField("Preview Image URL",
        validators=[
            DataRequired(),
            Length(min=0, max=1500, message="The image URL must be less than 1500 characters."),
            URL(message="Please enter a valid URL for your image.")
        ])
    password = StringField('password',
        validators=[
            DataRequired(),
            Length(min=6, message="Are you hoping to get hacked? Make your password at least 6 characters!"),
            Length(max=20, message="What is this, a bank? Keep your password to 20 characters.")
        ])
