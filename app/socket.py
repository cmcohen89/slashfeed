from flask_socketio import SocketIO, emit, join_room, leave_room,send
import os
from .models import User
from flask import request
from flask_login import current_user


# configure cors_allowed_origins
if os.environ.get('FLASK_ENV') == 'production':
    origins = [
        'http://cmcohen-slashfeed.herokuapp.com',
        'https://cmcohen-slashfeed.herokuapp.com'
    ]
else:
    origins = "*"

# initialize your socket instance
socketio = SocketIO(cors_allowed_origins=origins)

socketUsers = []

@socketio.on('connect')
def on_connect():
    curr_user = User.query.get(current_user.get_id()).username
    user_exists = len([user for user in socketUsers if user['username'] == curr_user])
    if not user_exists:
        socketUser = {}
        socketUser['username'] = curr_user
        socketUser['sid'] = request.sid
        socketUsers.append(socketUser)


@socketio.on('disconnect')
def on_disconnect():
    for i in range(len(socketUsers)):
        if socketUsers[i]['username'] == User.query.get(current_user.get_id()).username:
            del socketUsers[i]
            break


@socketio.on('join')
def on_join(data):
    username = data['user']
    room = data['room']
    join_room(room)
    send(username + ' has entered the room.', to=room)


@socketio.on('leave')
def on_leave(data):
    username = data['user']
    room = data['room']
    leave_room(room)
    send(username + ' has left the room.', to=room)


@socketio.on("chat")
def handle_chat(data):
    if data['room']:
        room = data['room']
        emit("chat", data, broadcast=True, to=room)


@socketio.on("notify")
def notify(data):
    if data['username']:
        targetUser = [user for user in socketUsers if user['username'] == data['username']][0]
        emit("notify", data, broadcast=True, to=targetUser['sid'])
