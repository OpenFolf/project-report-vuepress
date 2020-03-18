# Design Overview

We knew from the beginning that we wanted to make a progressive web application and that the minimum viable product would be an application that would at least keep the score of players. It would consist of the openFOLF.is website that would have the “hero banner” look, a simple, single page website with general information. The other would be the application. After a splash screen, a player would login and then log his/her score. With the purpose of being agile we will design the application in small increments as we fulfill the requirements according to the requirements list.

We decided to use Vuetify, a material design component framework for as many components as possible. We will then customize and adapt to our own design ideas as needed.

In this chapter we first show the flow diagram of the application and then briefly talk about the workflow we chose for this project, the JAM stack. Then we list the coding guidelines we will follow and what version control and programming language will be used. Following that the technological stack is shown and explained. The chapter ends by listing the low fidelity prototypes made by the team along with some explanations and discussions on how to move forward with the project.

## Flow diagram

Since we are making a progressive web application, openFOLF can be thought of as two domains, the website and the application. When a user goes to openFOLF.is he will be greeted with the landing page with general information about openFOLF (in this report from now on referred to as the website). When he clicks the “launch app” button he will be transferred to the application hosted on app.openFOLF.is, that is a self-containing ecosystem that can be used as any other native app. Ideally a user would open app.openFOLF.is and save it to his home screen. Because of that all links on openFOLF.is landing page must exist in the app as well.

Figure 1 shows the flow chart of the application. There are two ways to reach the scorecard in the flow chart but only one way may be implemented. If the way from the application front page straight to the scorecard is implemented, then select courses and select players will be done from that screen and is not shown on the picture below. Furthermore, if B and C requirements are implemented additional views will be added to the scoreboard, such as a view for each individual hole.

Figure 1 Flow diagram

## JAM Stack

The JAM stack brings together JavaScript, APIs and markup. Those are the three core components used to create websites that are fast and highly dynamic. JAM stack sites are well suited to meet the demands of today’s mobile-first web.

The JAM stack isn’t any one specific technology and it is not driven by any large company. There is not a standards body that controls or defines it but instead the JAM stack is a movement, a community collection of best practices and workflows that result in high speed websites that are a joy to work on.

Some of the characteristics of the JAM stack:

- Resilient to heavy traffic and globally distributed via CDN
- Developer friendly Git based workflows
- Modular design and consumes other services via APIs

## Coding Guidelines

As a general guideline we will follow the rules and best practices laid out by each framework. Furthermore, the use of ESLint + Prettier to lint and automatically format all code written will ensure that the code is unified in both style and appearance.

### Code Editor

Team members will use Visual Studio Code to write and manage all source code. We chose VS Code because it’s free, open source and well supported. We augment VS Code with a few plugins that help with syntax highlighting, auto formatting and Emmet like snippets for specific frameworks. The four main plugins are ESLint, Prettier, Vetur and TODO Highlighter.

### Code Comments

When adding comments to the code, a special #tag is added to label its nature and/or owner. TODO Highlighter will then color the comment, making managing them so much simpler and help curb the increase in technical debt.

## Version Control

All changes in the source code during the development will be tracked using Git, a distributed version-control system, hosted on GitHub. We’ve setup an organization to handle the project and all source code and documentation is available there. In the future we will accept pull requests as we hope the application will live and continue as a community project.

## Programming Language

The application will be written in ECMAScript, the standardized JavaScript. With the most recent versions of Node.js and Babel, we will use what is called ES.Next, which is a dynamic name that refers to whatever the next version is. This gives us access to all the latest features of ECMAScript and Babel insures compatibility with older clients.

### Node.js

Both front- and back-ends of the application rely on Node.js. Node.js is a cross-platform JavaScript runtime environment. In Node.js we can use the new ECMAScript standards without any problems, it has an abundance of different packages and it is a popular tool for any kind of project. By using only one programming language, the whole team can write all aspects of the application without the headache of making different programming languages and paradigms compatible with each other.

## Front-end

For the front-end of the application we were looking for something approachable, versatile and performant. Vue.js was chosen for all those reasons. To lay out the project scaffolding and run a development server we will use VueCLI, a command line tool for Vue.js development. The project will be set up with Vue Router, a client-side router utilizing the History API. Alongside Vue Router will be Vuex, a state management pattern and library for Vue.js. As a centralized store for all the components in the application, it ensures that the state has only one source of truth and can only be mutated in a predictable fashion.

## Back-end

For the back-end of the application we will use different services from Amazon Web Services (AWS). Amazon S3 will be used to store the Vue.js front-end. CloudFront is a web service that will be used to speed up distribution of our front-end by delivering our content through a worldwide network of data centers. Route53 will address domain service requests to our website. Amazon Cognito will be used for both user and API authentication. We will map out our API endpoints through Amazon API gateway. Our business logic will be written in Node.js in AWS lambda functions. The data will then be stored in the NoSQL database from Amazon called DynamoDB.

Figure 2 Technical stack

## Low fidelity wireframes

Here below can be seen the design ideas for the application after sprint 0. It was decided that the application would be designed with a mobile first strategy and because of that all the wireframes show how the application will look on a mobile screen.

First the team drew sketches on a whiteboard and then they were redrawn with Balsamiq wireframes.

Figure 3 shows how we imagine the opening page of openfolf.is would look like. As mentioned, the front page would be a hero banner, with three to four views that would appear when the user would scroll down. The size of each hero banner would be the vertical length of the screen and below the user could find general information about the application and about the openFOLF project in general, about us page and a donate page.

Figures 4 and 5 show what the login and sign up screens will look like. A user will first be directed to the login site and from there could either continue to the application if registered or go to the sign up page.

One of the main considerations of the team is that the application is first and foremost an app to log the score of a folf round for a single user or with a group. Having geolocation tags so a user can see how far he is from the basket, being able to see tips on how to play and to create tournaments is extra. Because of this the team found that making the main application page as clean as possible to make it as easy for a user to start logging the score as soon possible.

Pictures 6 and 7 show the application front page looks like with and without the burger menu open.

As can be seen on figure 6, there are two buttons on the main page, new game and a new game with setup. As can be seen in the flowchart on figure 1 there will be two ways to start a new game. One with setup, where a player goes through a process of selecting first a course then the players that are going to play the round before starting a game. The other option shows the scorecard right away. From the scorecard the user selects what course he is playing and adds friends that the user is playing with. It is unlikely that both options will be available, but the team has not yet reached a conclusion on which option will be implemented.

Having an initial setup would be the safe and easy path. A user selects a course, players to play with but when the game is started is unable to add other users or change selected course without starting a new game. Writing this information to the database would be straightforward. And because other scorecard applications that we have tested as a research for this app have implemented this method, we roughly know how this could be implemented.

The other way, where the scorecard would change dynamically is shown on picture x.6. Here the scorecard opens right away. If the course is changed, the par field updates accordingly, and a user can be added to the group at any point.

Which one we choose depends on three main factors.

How hard is it to implement? This would make the score card data in the database less structured and more edge cases would have to be considered. Having more options while logging the score makes the change of the application crashing mid game, and therefore failing its prime objective.

Will the scorecard be too bloated? With the added buttons to select courses and players, along with the scorecard, is there enough space on the mobiles with smaller screens?

User experience. Is it intuitive to use?

Whichever version we choose, the scoreboard will be the core component of the app and the usability of the app depends on its implementation. Because of this more detailed design will be made in later iterations after we are more familiar with the chosen tech stack and usability testing.
