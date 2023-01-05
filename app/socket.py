from flask_socketio import SocketIO, emit, join_room, leave_room,send
import os


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


# handle chat messages
@socketio.on("chat")
def handle_chat(data):
    if data['room']:
        room = data['room']
        emit("chat", data, broadcast=True, to=room)

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
