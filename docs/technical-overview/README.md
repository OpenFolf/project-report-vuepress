# Technical Overview

In this chapter we first show the flow diagram of the application that shows how a user may navigate between different components. Then we briefly talk about the workflow we chose for this project, the Jamstack. Thereafter we list the programming languages used and what coding guidelines we followed and what version control was used. Next the technology stack is shown and explained.

## Flow diagram

Since we are making a progressive web application, openFOLF can be thought of as two domains, the website and the application. When a user goes to [openFOLF.net](https://www.openfolf.net/) he will be greeted with the landing page. There he will find general information about openFOLF (in this report from now on referred to as the website). When he clicks the “launch app” button he will be transferred to the application hosted on [app.openFOLF.net](https://app.openfolf.net/), that is a self-containing ecosystem that can be used as any other native app. Ideally a user would open [app.openFOLF.net](https://app.openfolf.net/) and save it to his home screen.

Figure 1 Flow diagram of the website openfolf.net and the application hosted at app.openfolf.net

## Jamstack

The Jamstack is an architecture or an approach to building websites and applications. It brings together JavaScript, APIs and markup, but those are the three core components used to create websites that are fast and highly dynamic. In essence Jamstack is an approach on how to build single page websites. But they are only single page in the technical meaning of the word because the site has only one HTML site. But a single page application can be highly dynamic and contain number of routes from the user’s perspective. In contrast to the more traditional, server site rendered websites, single page applications rely on the end user’s browser to do most of the heavy lifting. Because most of the logic is contained within the application, when a user wants to route to a different page, the application does not have to wait for some remote server to serve up the content and redirect the user, but has the potential to redirect the user instantly. This makes single page applications responsive and Jamstack sites are well suited to meet the demands of today’s mobile-first web.

The Jamstack isn’t any one specific technology and it is not driven by any large company. There is not a standards body that controls or defines it but instead the Jamstack is a movement, a community collection of best practices and workflows that result in high speed websites that are a joy to work on.

Some of the characteristics of the Jamstack:

- Resilient to heavy traffic and globally distributed via CDN
- Developer friendly Git based workflows
- Modular design and consumes other services via APIs

## Version Control

All changes in the source code during the development were tracked using Git, a distributed version-control system, hosted on GitHub. We set up an organization to handle the project and all source code and documentation is available there. In the future we will accept pull requests as we hope the application will live and continue as a community project.

## Programming Language

The application was written in ECMAScript, the standardized JavaScript. With the most recent versions of Node.js and Babel, we will use what is called ES.Next, which is a dynamic name that refers to whatever the next version is. This gives us access to all the latest features of ECMAScript and Babel insures compatibility with older clients.

### Node.js

Both front- and back-ends of the application rely on Node.js. Node.js is a cross-platform JavaScript runtime environment. In Node.js we can use the new ECMAScript standards without any problems, it has an abundance of different packages and it is a popular tool for any kind of project. By using only one programming language, the whole team could write all aspects of the application without the headache of making different programming languages and paradigms compatible with each other.

## Coding Guidelines

As a general guideline we followed the rules and best practices laid out by each framework. Furthermore, the use of ESLint + Prettier to lint and automatically format all code written will ensure that the code is unified in both style and appearance.

### Code Editor

Team members used Visual Studio Code to write and manage all source code. We chose VS Code because it’s free, open source and well supported. We augmented VS Code with a few plugins that helped with syntax highlighting, auto formatting and Emmet like snippets for specific frameworks. The five main plugins were ESLint, Prettier, Vetur, TODO Highlighter and GitLens.

## CI/CD

A big part of the Jamstack methodology is CI/CD or continuous integration and continuous delivery. The concept of always adding to your product in small increments in a safe and predictable manner.

### Continuous integration

In order to establish a unified codebase we set up our git workflow in such a way that we implemented small changes regularly into a central repository. Before the code was committed we used ESLint and Prettier to automatically adapt our code to predefined rules. This way the code would have a uniformed quality regardless of it being developed in different platforms and tools.

In this way we continuously integrated the code from team members into a unified codebase with a uniformed structure.

### Continuous delivery

Where continuous integration ends continuous delivery picks up. An automated way to move changes from development environment to a production environment of your selected infrastructure.

We used AWS’s Amplify service to manage our automated testing and build settings. This is then connected to our GitHub repository. When we push our changes onto the master branch an automated build and test process starts which delivers an email with the error message if there are any problems in the process. If everything is successful the application is then automatically deployed to openfolf.net, app.openfolf.net, doc.openfolf.net, etc. depending on the repository we pushed changes onto.

### Testing

Testing is a significant part of CI/CD. All builds were manually tested on a dev branch before being pushed to the development/master branch. In the build process automatic unit tests ran. If any of those tests produce an error, the build process is stopped and we get notified by email.

We implemented the unit tests with Vue Test Utils, a wrapper for the Jest testing framework. When selecting libraries for the app we tried to use those that were officially recommended by Vue.js such as Vuex and Vue Router because these frameworks are heavily tested.

## Search Engine Optimization

One of the functional requirement was to ensure that Google and other search engines know what openFOLF is, we had to make sure that all the meta information for [openfolf.net](https://www.openfolf.net/) and [docs.openfolf.net](https://docs.openfolf.net) was according to specification. Modern web crawlers look for meta data when they visit an URL. There are many different ways to list your meta data, we chose to cover some of the most used:

- Open Graph Protocol, used by Facebook
- Schema.org Markup, used by Google
- Twitter card

These meta tags describe the content of the website and how to navigate them. When these tags are correct, and everything is in order you are guaranteed that your site will come up in web searches.

With Google you can test this with their Light House Audit tool inside of Chrome. Our landing page and our docs page both score 100/100 in the SEO test. Google's search engine favors results that are mobile optimized. All of our sites are mobile first in their design principles and are progressive web apps scoring 97 for Best Practices and 99 for Accessibility.

## Front-end

For the front-end of the application we were looking for something approachable, versatile and performant. Vue.js was chosen for all those reasons. We laid out the project scaffolding and ran a development server using VueCLI, a command line tool for Vue.js development. The project was set up with Vue Router, a client-side router utilizing the History API. We used Vuex, a state management pattern and library based on the Flux pattern championed by Facebook. A centralized store for all the components in the application ensures that the state has only one source of truth and can only be mutated in a predictable fashion.

## Back-end

For the back-end of the application we used different services from Amazon Web Services (AWS). Amazon S3 was used to store the Vue.js front-end. CloudFront is a web service that was used to speed up distribution of our front-end by delivering our content through a worldwide network of data centers. Route53 addresses domain service requests to our website. Amazon Cognito was used for both the user and API authentication. We started out planning to map out all our API endpoints through Amazon API gateway but in sprint 3 decided to add GraphQL through AWS AppSync to our stack. The data is then stored in the NoSQL database from Amazon called DynamoDB.

Figure 2 Technical stack

## Database

We put a lot of importance on flexibility of the application and being able to adapt and continue to evolve the structure of the data we store. When designing the database for the application it was therefore important to emphasize flexibility and scaling with possible tradeoffs in performance.

We received permission from [DGCourseReview](https://www.dgcoursereview.com/) to use their API to collect data about courses in Iceland and use in the development of the app. But we eventually want to replace their data with our own. Either through our collaboration with folf entities in Iceland or our own data collection.

### SQL vs. NoSQL

We decided to use a NoSQL database over using a traditional relational SQL database. In a NoSQL database you can store data without carefully defining the structure upfront and you are able to add fields to the database tables without restructuring the database schema. This provided us with more flexibility and we were able to avoid extensive upfront planning of the database.

Another determining factor in choosing NoSQL over SQL was NoSQL’s ability to scale easily. SQL databases are designed primarily to be run on a single server and are therefore not easy to scale. The data in a NoSQL database is less structured and each stored object is relatively independent. This enables NoSQL databases to scale horizontally, you just add more and more servers when needed.

### DynamoDB

For our NoSQL database we are using DynamoDB from Amazon Web Services. With DynamoDB being part of the AWS ecosystem it enabled us to easily integrate it with our app. DynamoDB has a simple API that you can easily interact with, for example in Lambda functions. It also easily enables you to have a large amount of storage and extremely high read/write speeds. Only paying on demand for each request and not having to manage uptime of the database. With DynamoDB the horizontal scaling of the database happens automatically giving us almost infinite scaling ability, with little or no loss in performance.

### ER diagram

In order to better visualize the relationship between the data we needed to organize into our database we drew an Entity Relationship Diagram. At the center of our data scheme is the player who plays a game. Each player is represented by a single user but each user can be a player in different games. Each game as a course the game is played on but each course can be played in many different games. For each course there exist any number of holes but holes belong to a single course only.

Figure 3 ER diagram

### GraphQL

The main drawback with choosing a NoSQL database schema over SQL is that querying the data can be more complex and have less performance. In order to simplify querying of the database and optimize query performance we decided to use GraphQL.

GraphQL is a query language and a server-side runtime for executing queries on API’s. Queries are executed by using a type system which is defined for your desired data. GraphQL offers three types of requests, mutations for mutating the data, queries for querying the data and subscriptions for subscribing through a websocket connection to any changes in the database. Enabling real time representation of changes in the database. GraphQL is not tied to any specific database and all queries go through a single endpoint. This offers the ability of switching or combining data sources without having to make changes in the front-end.

### AWS AppSync

For our GraphQL service we used AWS AppSync which is the GraphQL service offered by the AWS ecosystem.

AWS AppSync is highly secure and scalable, being able to handle a large number of requests simultaneously. With the power of GraphQL AWS AppSync enables developers to easily choose which portions of the app is using real time data and which not. All the while making sure the data is protected.

### GraphQL Schema

In Appendix 2 is a rough representation of the GraphQL schema in our app, this can be easily changed and has been changed many times in the development process.

## Documentation

Along with the web application, we made a report documenting the design and production of the application. We set up a dedicated website for the report made with VuePress, the official Vue.js documentation tool. This turns the report into a PWA and makes reading it on mobile devices enjoyable. Furthermore, the option to install the docs locally for off-line consumption is possible on supported browsers. This is accessible at [docs.openfolf.net](https://docs.openfolf.net/).
