# [Slash/Feed](https://cmcohen-slashfeed.herokuapp.com/)

## Table of contents
* [Intro](#intro)
* [Features](#features)
* [Planned Features](#planned-features)
* [Technologies](#technologies)
* [Demo Image](#demo-image)
* [Get Started](#get-started)


## Intro

Welcome to Slash/Feed! This web application is a fullstack project of my creation wherein I've attempted to implement social media functionality on a site that has "news feed" styling. The idea behind this approach is that the news nowadays is generally quite dark and depressing, so I thought it'd be fun to get your "news" from the people you actually care about!

Enjoy navigating around the website! You may sign up as a new user or login as the demo user by clicking the respective links in the navigation bar. A logged-in user may create a new post by click the "Create Post" button on the navigation bar. A logged-in user may also leave a comment for any post by navigating to that post's page and scrolling down to the "Comments" section, then clicking the relevant button. A logged-in user may leave a "Like" for any post by clicking the thumbs-up button, and remove the "Like" by clicking the button again.

## Features

Currently implemented features include:
- Signup and Login functionality for Users
- Create, read, update, and delete functionality for Posts
- Create, read, update, and delete functionality for Comments
- Create, read, and delete functionality for Likes
- Create, read, and delete functionality for Followers
- User profile displaying the user's follows, posts, and liked posts
- AWS image uploading

## Planned Features

Upcoming features include:
- WebSockets-based live chat

## Technologies
<p>
<!-- languages -->
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
<img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<!-- Frameworks -->
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" />
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
</p>

## Demo Image

![Slash/Feed Front Page](https://user-images.githubusercontent.com/103705214/209418494-d2b7afd6-cb9d-49a8-8e6b-93dc8604c7a0.png)

## Get Started

To run the app locally, navigate to the root directory in the terminal and enter `flask run`. In a separate terminal, navigate to the `/react-app` directory and enter `npm start`. This should automatically launch a browser window navigated to the proper localhost address. By default, the app will be running on port 3000.
