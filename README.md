# Community Bulletin Board

> An Open-Source, Distributable Community Bulletin Board by Jalen Atkinson, Autumn Fields, Barry Gilreath, and Joseph Pugmire.


## Table of Contents
  * [Overview](#overview)
  * [User Story](#user-story)
  * [Technologies](#technologies)
  * [Features](#features)
  * [Installation Instructions](#installation-instructions)
  * [Screenshots and Video](#screenshots-and-video)
  * [Future Development](#future-development)
  * [Links](#links)
  

## Overview
```
For this project, four team members collaborated to conceive, design, and build a full-stack application.  Our team was motivated to provide a place where community members could connect with one another.  According to a recent survey:

- Only 33% of Americans consider their neighbors friends or close friends, whereas 66% consider their neighbors strangers or acquaintances.
- 27% of Americans are active in online neighborhood groups.
- Americans in the Midwest region are most likely to be friends with their neighbors.
- 1 in 4 Americans consider their neighbors strangers.**

Our team wants to help make neighborhoods better by bringing neighbors togehther. To achieve this goal, we designed a helpful, easy-to use community bulletin-board application.  This app is open source and easily distributable for communities to use for their own purposes.  The app features a login / registration system and a chronological view of posts spanning vertically down the site.

** Source: https://www.thezebra.com/resources/home/neighbors-survey/
```

 ## User Story
 ```
 As a community member
 I WANT to connect with people of my own community
 SO THAT I can be informed about community events, read comments from other community members, and share my own thoughts as well.
 ```
 
---

## Technologies
- Javascript
- JQuery
- Handlebars.js
- Express
- Sequelize
- mySql2
- Session
- CSS
- Bootstrap

---

 ## Features
- A responsive design
- A login / registration system
- A chronological view of posts spanning vertically down the site
- An admin account which can remove posts
- Adding posts
- Like / dislike posts
- Authentication - Server only allows a logged in user to create posts.
- Cache - we will distribute an auth token on login to accomplish this. This token will be cached in the browser so the user retains login through reloads

---

## Installation Instructions
* Edit handlebars files to rebrand with your own community name.
```
 ./views/home.handlebars (line 9)
 ./views/userhome.handlebars (line 9)
```
* set custom database password according to .env example
```
 .env.EXAMPLE
```
* Ensure you have mySQL installed. Then install mysql server, launch server, set login in .env file
```
 If you do not currently have mysql installed, check out the documentation here for instructions: 
 https://dev.mysql.com/doc/refman/8.0/en/getting-mysql.html 
```

* Open your workspace and terminal then run the following commands:
```
npm install

node seeds/seed.js

node server.js
```

* Once you see the message "Now listening on port 3001" you have completed installation and running!

---

## Screenshots and Video

> Video Demonstration: https://drive.google.com/file/d/1y3xXetazuULoI4Lk81ShgbBdF53XwSwl/view?usp=sharing

![Capture of application](./assets/cap1.png)

![Capture of application](./assets/cap2.png)

![Capture of application](./assets/cap3.png)

![Capture of application](./assets/cap4.png)

![Capture of application](./assets/cap5.png)

## Future Development
For future development we plan features such as:
- Different account types (admin, regular)
- Dislike feature toggleable in server settings
- Comment feature to reply to posts
- Sort and filter functions to change the rendered posts

---

## Links

### Github Repository
https://github.com/barrygilreath3/community-bulletin-board/

### NPM
pending

---

## This project brought to you by:
Jalen Atkinson: https://github.com/JalenAtkinson12 

Autumn Fields: https://github.com/autumnlf

Barry Gilreath: https://github.com/barrygilreath3

Joseph Pugmire: https://github.com/jpugmire

