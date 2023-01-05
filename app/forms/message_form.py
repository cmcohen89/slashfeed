from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

class MessageForm(FlaskForm):
    body = StringField("Body", validators=[DataRequired()])
    submit = SubmitField("Submit")
