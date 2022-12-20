from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SelectField, IntegerField, SubmitField
from wtforms.validators import DataRequired, Length, NumberRange, URL

class PostForm(FlaskForm):
    title = StringField("Title", validators=[DataRequired()])
    body = StringField("Body", validators=[DataRequired()])
    preview_img_url = StringField("Preview Image URL",
        validators=[
            DataRequired(),
            Length(min=0, max=1500, message="The image URL must be less than 1500 characters."),
            URL(message="Please enter a valid URL for your image.")
        ])
    submit = SubmitField("Submit")


class PostUpdateForm(FlaskForm):
    title = StringField("Title", validators=[DataRequired()])
    body = StringField("Body", validators=[DataRequired()])
    submit = SubmitField("Submit")
