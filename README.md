# Community Bulletin Board
An Open-Source, Distributable Community Bulletin Board

## Overview
For this project, four team members collaborated to conceive, design, and build a full-stack application.  Our team was motivated to provide a place where community members could connect with one another.  According to a recent survey:

- Only 33% of Americans consider their neighbors friends or close friends, whereas 66% consider their neighbors strangers or acquaintances.
- 27% of Americans are active in online neighborhood groups.
- Americans in the Midwest region are most likely to be friends with their neighbors.
- 1 in 4 Americans consider their neighbors strangers.**

Our team wants to help make neighborhoods better by bringing neighbors together. To achieve this goal, we designed a helpful, easy-to use community bulletin-board application.  This app is open source and easily distributable for communities to use for their own purposes.  The app features a login / registration system and a chronological view of posts spanning vertically down the site.  When the registered user reaches the bottom of the page of the default rendered posts (15 max), the user can choose to render 15 more if there are older posts in the database.

--

** Source: https://www.thezebra.com/resources/home/neighbors-survey/
 
 ## User Story
 ```
 As a community member
 I WANT to connect with people of my own community
 SO THAT I can be informed about community events, read comments from other community members, and share my own thoughts as well.
 ```
 
## Mockup
https://www.figma.com/file/T3F6RFFYqqOlSMsb88rY33/Untitled?node-id=0%3A1

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

 ## Features
 
- A responsive design
- A login / registration system
- A chronological view of posts spanning vertically down the site
- An admin account which can remove posts
- Create / edit / & delete posts
- Like / dislike post(s) feature
- Dislike feature toggleable in server settings
- Authentication - Server only accepts calls made from browser by that same user or an authenticated admin.
- Cache - we will distribute an auth token on login to accomplish this. This token will be cached in the browser so the user retains login through reloads.

## Screenshot
Coming Soon

## Future Development
In a future update we plan on implementing a reply feature that will allow users to reply to past posts.

## Links
### Github
https://github.com/barrygilreath3/community-bulletin-board/
### NPM Package
https://www.npmjs.com/package/@gtbootcampproject2/community-bulletin-board
