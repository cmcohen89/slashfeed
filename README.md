<p align="center">
  <a href="https://cmcohen-slashfeed.herokuapp.com/"><img src="https://i.imgur.com/5ilQmpP.png" /></a>
</p>

## Table of contents
* [Intro](#intro)
* [Features](#features)
* [How To Use](#how-to-use)
* [Technologies](#technologies)
* [Demo Images](#demo-images)
* [Get Started](#get-started)


## Intro

Welcome to Slash/Feed! This web application is a fullstack project of my creation wherein I've attempted to implement social media functionality on a site that has "news feed" styling. The idea behind this approach is that the news nowadays is generally quite dark and depressing, so I thought it'd be fun to get your "news" from the people you actually care about!

## Features

Currently implemented features include:
- Signup and Login functionality for Users
- Create, read, update, and delete functionality for Posts
- Create, read, update, and delete functionality for Comments
- Create, read, and delete functionality for Likes
- Create, read, and delete functionality for Followers
- Create, read, and delete functionality for Chat threads and the Messages therein
- Websocket functionality for the aforementioned Chats/Messages
- Create, read and update functionality for Post Images and User Profile Images
- User search
- User profile displaying the user's follows, posts, and liked posts
- "My Feed" page showing posts from only the users that the current user follows
- AWS image uploading

## How To Use
### Posts
- Create a post from the New Post page, accessible by clicking the "New Post" button in the top-right of the navigation bar
- View posts on the "All Posts" page, and click one to see its own post page
- Update a post by clicking the post's edit symbol on a post the current user created on their own profile page
- Update a post's image by clicking the image's edit symbol on a post the current user created on their own profile page
- Delete posts by clicking the post's delete symbol on a post the current user created on their own profile page

### Comments
- Comment on a post by submitting it in the form on the bottom-right of any post's page
- View all comments for a particular post on its page
- Update a comment by clicking the edit symbol on a comment the current user submitted
- Delete a comment by clicking the delete symbol on a comment the current user submitted

### Likes
- Like a post by clicking the "like" symbol on any post (available anywhere the post can be seen)
- View a post's total likes in the bottom-right of a post's card, or on its own page
- View any user's liked posts from their profile page
- Unlike a post by once again clicking the "like" symbol if the current user has already liked the post

### Followers
- Follow a user by clicking the "Follow" button on their profile page
- View any user's current followers and followings by clicking those links on their profile page
- View the posts of the current user's followings by clicking "My Feed" on the navigation bar
- Unfollow a user by clicking the "Unfollow" button on their profile page

### Chat/Messages (Socket.io)
- View the chat modal by clicking the "Messages" button on the navigation bar
- Create a new chat thread with a user by clicking the "Message" button on their profile page, or by searching for a user in the chat modal
- Delete a chat thread by clicking the delete symbol when hovering over any chat thread in the chat modal
- View the live messages of a specific chat thread by clicking on the relevant user's name on the left side of the chat modal
- Send a live message by choosing a chat thread and submitting the message in the form in the bottom-right of the chat modal
- Delete a message by clicking the delete symbol when hovering over any message the current user has sent

### User Search
- Search for any user by typing in their first name, last name, or username in the navigation bar's search input
- Search for any user to chat with by in their first name, last name, or username in the chat modal's search input

### User Profile
- View any user's profile by clicking their name or image on a post or in the search bar

### AWS
- Upload images directly from your device by clicking the purple upload symbol to the right of any image URL input


## Technologies
<p>
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" />
<img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
<img src="https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white" />
<img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" />
<img src="https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101" />
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
<img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" />
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
<img src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white" />
</p>

## Demo Images

### Landing Page
![Landing Page](https://user-images.githubusercontent.com/103705214/211230599-252849a7-21fe-4843-9ff4-0ee791abd9dc.png)
### Home Page
![Home Page](https://user-images.githubusercontent.com/103705214/211230639-eac9f1a1-08de-4f6e-bfe5-5fd42ac8eeb2.png)
### Post Page
![Post Page](https://user-images.githubusercontent.com/103705214/211230669-a4503da8-9285-4eb9-a144-453fb7f6420e.png)
### Profile Page
![Profile Page](https://user-images.githubusercontent.com/103705214/211230699-268187dc-c299-4ec4-84ae-c254aa8ae4ad.png)
### Chat Modal
![Chat Modal](https://user-images.githubusercontent.com/103705214/211230776-9e2c9c3a-4248-484f-8f59-487370cc6965.png)

## Get Started

To run the app locally, navigate to the root directory in the terminal and install the relevant dependencies by entering `pipenv install -r requirements.txt` into the terminal. Enter `pipenv shell` to intialize the virtual environemnt, then enter `flask db upgrade` and `flask seed all` to intialize the database. Enter `flask run` to start the backend server. In a separate terminal, navigate to the `/react-app` directory and install the relevant dependencies by entering `npm install`, and then enter `npm start`. This should automatically launch a browser window navigated to the proper localhost address. By default, the app will be running on port 3000.
