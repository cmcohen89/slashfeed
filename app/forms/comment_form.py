from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SelectField, IntegerField, SubmitField
from wtforms.validators import DataRequired, Length, NumberRange, URL

class CommentForm(FlaskForm):
    body = StringField("Body", validators=[DataRequired()])
    submit = SubmitField("Submit")
