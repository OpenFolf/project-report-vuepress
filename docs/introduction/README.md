# Introduction

## openFOLF

This report describes the final project for a BSc in computer science from Reykjavik University. The goal is to create a Progressive Web App that frisbee golf players can use while they play, to enhance their experience. The application will be named openFOLF (in this report from now on referred to as the application).

## The problem

Disc golf, also known as Frisbee golf, and commonly referred to as folf in Iceland (In this report from now on referred to as folf), is enjoying ever increasing popularity worldwide. It is a popular and healthy way to enjoy the outdoors with friends. But there can be a problem when tallying the points and determining the winner, both for current and past games. This is something the application aims to help with.

There have been a few folf apps made but nothing has managed to become the standard app among folf players in Iceland. We aim to achieve that by developing a progressive web application that will be open source and available for free online, instead of developing a platform specific mobile app. The hope is that it will succeed, where others have seen less success, in becoming the standard companion app for folf players.

In a nutshell, the project aims to deliver a companion progressive web application with features such as:

- Keep track of scores
- Creating a tournament among friends
- See an overview of the holes that lay ahead on the course
- Locate the nearest disc golf course
- Keep track of score history
- Compare yourself with other players

In this project we intend to focus on a few courses in Reykjavik and thereby creating a template which would enable us to rather easily add more courses to the application later.

Folf has become very popular in Iceland. Initially we see our user group as mainly being folf players in Iceland, with plans to move globally later.

We plan on using Vue.js, a frontend JavaScript framework, to build the user interface. The design is a progressive web application for mobile users. The JAM stack methodology and workflows will be used to connect the front-end to the back-end, with the back-end consisting of a collection of microservices set up through Amazon Web Services. This way the application will be scalable according to usage.
