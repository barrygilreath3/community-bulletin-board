# Community Bulletin Board
An Open-Source, Distributable Community Bulletin Board



## Overview
 This app is a community bulletin board, that will be open source and easily distributable for people to rebrand for their own community, it features a login / registration system and a chronological view of posts spanning vertically down the site. When the user reaches the bottom of the page of the default rendered posts (15 max), they can choose to render 15 more if there are older posts in the database.
 
 
 
 ## Features
 
 A login / registration system and a chronological view of posts spanning vertically down the site. When the user reaches the bottom of the page of the default rendered posts (15 max), they can choose to render 15 more if there are older posts in the database. Also features an admin account which can remove posts.
Users can view their old posts and edit / delete them.
Edit / delete buttons are only rendered on posts made by authenticated user. Server only accepts calls made from browser by that same user or an authenticated admin. we will distribute an auth token on login to accomplish this. This token will be cached in the browser so the user retains login through reloads.
Authenticated users will be able to “like” posts. No dislike feature.
Toggleable dislike feature configurable in server settings.



## Future Updates

In a future update we plan on implementing a reply feature that will allow users to reply to past posts.

## Mockup

https://www.figma.com/file/T3F6RFFYqqOlSMsb88rY33/Untitled?node-id=0%3A1
