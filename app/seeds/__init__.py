from flask.cli import AppGroup
from .users import seed_users, undo_users
from .comments import seed_comments, undo_comments
from .followers import seed_followers, undo_followers
from .likes import seed_likes, undo_likes
from .message_threads import seed_message_threads, undo_message_threads
from .messages import seed_messages, undo_messages
from .post_images import seed_post_images, undo_post_images
from .posts import seed_posts, undo_posts

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_followers()
    seed_posts()
    seed_post_images()
    seed_comments()
    seed_likes()
    seed_message_threads()
    seed_messages()

    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_messages()
    undo_message_threads()
    undo_likes()
    undo_comments()
    undo_post_images()
    undo_posts()
    undo_followers()
    undo_users()
    # Add other undo functions here
