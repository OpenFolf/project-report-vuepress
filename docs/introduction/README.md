# Introduction

## openFOLF

This report describes the final project for a BSc in computer science from _Reykjavik University_. The goal was to create a _Progressive Web App_ that disc golf players can use while they play, to enhance their experience. The application was named **openFOLF** (in this report from now on referred to as the _application_).

## The problem

Disc golf, also known as Frisbee golf, and commonly referred to as folf in Iceland (in this report from now on referred to as _folf_), is enjoying ever increasing popularity worldwide. It is a popular and healthy way to enjoy the outdoors with friends. But there can be a problem when tallying the points and determining the winner, both for current and past games. This is something the _application_ aims to help with.

There have been a few folf apps made but nothing has managed to become the standard app among folf players in Iceland. Our aim was to achieve that by developing a progressive web application that will be open source and available for free online, instead of developing a platform specific mobile app. Enabling users to have a unified experience across different devices and platforms.

## Proposed solution

We set out to create an application that does not get in the way, a true utility tool to enhance the user’s enjoyment of the game.

In a nutshell, the project aimed to deliver a companion progressive web application with features such as:

- Keep track of score in game
- Playing against friends
- Get par info for every hole
- Locate the nearest disc golf course
- Keep track of score history
- See score updates in real time

In this project we focused on developing the core functionality like keeping score and displaying basic course information. The plan is then later to easily be able to add features and data regarding courses as the _application_ user base grows.

Folf has become quite popular and we see our user group as mainly being folf players in Iceland.

We used _Vue.js_, a front-end _JavaScript_ framework, to build the user interface. The design is a progressive web application for mobile users. The _Jamstack_ methodology and workflows were used to connect the front-end to the back-end, with the back-end consisting of a collection of microservices set up through _Amazon Web Services_. This way the _application_ will be scalable according to usage.
