# Progress Overview

Using Agile and Scrum to manage the project was logical because all the team members have learned about the methodology in other CS courses. In this chapter we show the sprint schedule of the project and the team’s distribution of work. Lastly there is a short summary of each sprint, what goals were set and what was achieved and the main point from the sprint retrospective.

## Sprint Schedule

| Sprint | Start   | End     |
| ------ | ------- | ------- |
| 0      | 16. Jan | 4. Feb  |
| 1      | 5. Feb  | 18. Feb |
| 2      | 19. Feb | 3. Mar  |
| 3      | 4. Mar  | 17. Mar |
| 4      | 18. Mar | 1. Apr  |
| 5      | 2. Apr  | 14. Apr |
| 6      | 15. Apr | 21. Apr |
| 7      | 22. Apr | 28. Apr |
| 8      | 29. Apr | 5. May  |
| 9      | 6. May  | 15. May |

Below is the sprint schedule for the project. The first sprint was 3 weeks, the next four were 2-week sprints, then we originally planned for a 3-week sprint over the exam period, but we ended up changing it to a 2-week sprint. Finally, we had 1-week sprints until hand-in of the project.

## Sprint Backlog

The group had its first meeting 1 month before the assignment started. There we shared ideas about the project and what technical environment we would use. At the start of the semester the tech stack had not been decided, except that we would write the front-end in Vue.js. We wanted to implement a Jamstack with AWS as the back-end. But because of how different the stack was from what we knew from earlier work these first weeks were spent getting familiar with both Vue.js and AWS. There were some worries that implementing the back-end with AWS, without any prior experience of working with those services could be too much of a hurdle so making a simple Node.js server would be a backup solution.

### Sprint 0

The first sprint, one we chose to name sprint 0, started 16. January and lasted till 4. February. We deemed it necessary to study up on different frameworks we thought would fit our project. After a lot of consideration, we ended up deciding that Amazon Web Services (AWS) and related services would work for us. In order to cement the technical stack of the project a lot of time in this sprint was spent on studying up on AWS. The resulting technical environment can be seen in chapters 5.6 and 5.7. We had a pretty good idea that we wanted to use Vue.js for the front-end and Node.js for the back-end. We spent some time in this sprint reading up on these frameworks to make sure that they were right for us.

The main purpose of this sprint was preparation for the work ahead. We had meetings to discuss work arrangements and high-level technical ideas. We started creating requirements for the application and user stories, researched other scorecard apps, made risk assessments and drew up first sketches of the design of the application.

#### Retrospective Sprint 0

The first sprint went well, not least because we have worked together before. Because the team is unable to work physically together, some have full-time work, others are working nights and so on, but also because we don´t have a private workspace we can go to where we know the other members will be working, the communication between team members was lacking. We decided to create a virtual daily standup on slack to keep everyone up to date.
Figure 12 Distribution of working hours. Sprint 0

### Sprint 1

This sprint lasted from February 5 – 18. On February 15 we handed in our first draft of the report and had to present the assignment two days later. Because of that most of the sprint, for all three team members, went into writing the report, finalizing the slides and so on. In this sprint we also got a workspace in SERES incubator near RU where we had space to work on our project.

#### Retrospective Sprint 1

Was mostly positive. We were happy with the work we had done on the report and the daily check in on slack gave everybody a much better overview of what other team members were doing and made us more coordinated. Having a workspace at SERES was also a positive improvement.

Figure 13 Distribution of working hours. Sprint 1

### Sprint 2

February 19 till 4th of Mars. We got a lot of good feedback on our report from the instructor that needed addressing in the report. In this sprint the team started to divide assignments between group members, Arnar and Ægir would fix and finalize the report and Dagur would start working on the back-end full force. Though the main things that needed to be done on the report were to fix the flow chart, the requirements and write use cases, the whole sprint went into finalizing those things along with taking interviews. Creating detailed use cases meant that a lot of new requirements had to be rewritten and reorganized and the flow chart was changed dramatically. The low-fi wireframes in the first report were almost all scrapped. After all this work we were confident that we were at last ready to start programming in the next sprint. We started the sprint with the goal of creating a new low-fi wireframe in order to perform usability testing for the application. But because of how detailed work we did on the use cases, we felt that we weren’t missing out or making some glaring mistake UX wise so we decided that we would start programming the front-end before performing usability testing. The goal of Dagur, while working on the back-end was to ‘slice the cake’. As expected, there were some minor snags that had to be figured out and fixed in order to do that, but by the end of the sprint the first iteration of the sign up/sign in process was ready.

#### Retrospective Sprint 2

No major grievances, from any team members. The daily check in was still working well so communication was good. But we felt that the report had been taking up too much time and that the project was moving slowly. In our first timeline we had started programming by this time. However, the childcare and other strikes, sickness, a laptop of a team member breaking down and work in other courses had taken its toll on this project and made this sprint below par. All these things were however external factors and there was no problem with the project per se, so we hoped for the best and were excited to start work on the front-end.

Figure 14 Distribution of working hours. Sprint 3

### Sprint 3

Mars 4th till Mars 18th. At the start of this sprint the back-end was starting to take on form and it was time to start programming the front-end. Although the first iteration of the sign in process had been finished in sprint 2, the goal of this sprint was to be able to send data from the back-end to the application. By this time work on the front-end had started and first drafts of the Sign in/Sign out components, as well as the home screen and navigation had been implemented. But we were encountering problems with both the state management within the application and the flow of the data to the back-end. The idea had been to create different REST API endpoints that would go through lambda functions and write and retrieve data from our database. In order to simplify the endpoint management, we wanted to see if GraphQL might make life easier for us. We did some research and decided that using GraphQL through AWS AppSync would be the way to go. After a small learning curve, we implemented and tested writing and retrieving data through this method. This worked extremely well and decided to implement this into our tech stack.

The state management of our application was one thing we quickly realized was necessary for an application of this size. We started reading up on Vuex, which is a state management pattern and library for Vue applications. It works by creating a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion. However, implementing these technologies took some time to set up. Using GraphQL and Vuex to manage the data in our app gives us a lot of flexibility and freedom in designing the front-end of our application. By the end of sprint 3 these technologies had been successfully implemented and configured and next task would be to gather data, structure the database and keep working on the front-end.

#### Retrospective Sprint 3

The corona virus hit full force in this sprint and that had a major impact on the project. No team member has been infected but closing of schools, ban on public events and so on has been distractive. The good thing is that although the school has been closed SERES is still open, so we still have a workspace, although there is talk of closing SERES down as well. Because of these factors we have not been able to meet as often as we had hoped for and were unable to meet for the sprint retrospective. Instead had to have a video conference. We were a little stressed in the beginning of the sprint and felt that things were moving too slowly, but despite everything, we made a lot of progress this sprint and think that implementing GraphQL and Vuex was the right thing to do and that it will save us a lot of work in the end.

Figure 15 Distribution of working hours. Sprint 3

### Sprint 4

This sprint, from 18th of mars to 1st of April, was below par. It was mostly because during this sprint we had to focus on tasks and final projects in other courses. But at the end of this sprint all projects in other courses are done and now we can focus all our time and effort on the application. There is little over 30 days left before we turn in the project and we were going in to crunch time. This sprint went mostly into data gathering, designing and implementing the GraphQL schema and, populating the database. Work on the front-end continued, but still only with mock data. Goal for the next sprint is to slice the cake by the end of next sprint.

#### Retrospective Sprint 4

We decided to meet up at SERES despite the COVID-19 pandemic every day. The last two weeks have been quite difficult for us as we attempted to work from home. The few times that we have been together working in a hackathon type of environment we have gotten so much done. We decided to spend more time working in the same environment hoping that would speed up development and ensure that we will be able to deliver a viable project on time.

### Sprint 5

02.04.20 - 15.4.2020

In this sprint it felt like all was coming together. We have done a lot of planning, in some regards too much, but in this sprint work on the front-end and its components started for real. Because we all have roughly the same idea of what we are building, our collaboration has gone well. Dagur has been working mostly on the back-end, serving up the data, working on the GraphQL schemas and the Vuex store. Ægir made considerable work on the service workers webpack and other configurations in order to make the app a PWA as well as working on the app and its components. Arnar also worked on the app's components, its design and at the end of this sprint the first iteration of all components except for the Lobby and the Scorecard are ready. Furthermore, the team set up continuous deployment for the app. The goal for the end of next sprint is to have a working MVP.

#### Retrospective Sprint 5

This sprint was the first where all team members came to SERES and worked on the project together, almost every day, and is one of the reasons why we were able to achieve so much in this sprint. Because of that we stopped doing the daily standup on Slack that in retrospect was not the right thing to do because it's very useful to use that check-in as a diary. But since we are all working in the same place, we are going to start doing daily standup face to face, each morning but keep on writing what we did the previous day on slack. One thing that we discussed was that we could improve, especially this late in the project, was to properly finish our tasks and components. That is, to remove all console logs, unused functions and variables and comment our code to avoid technical debt later.

### Sprint 6

15.4.2020 - 22.4.2020

Our goal of having a MVP at the end of this sprint was realized by this time though we had a lot of bugs that had to be addressed. The biggest of those was the app sync that allowed users to get a real time update on the scoreboard when other users registered their score. It would stop working when users closed the phone, so they had to manually refresh the page to get the new score. Furthermore, user testing showed that some aspects of the app were unclear. We got a lot of good feedback but were afraid of scope creep. Because of this we decided that we would have a feature freeze on the project and would only implement and improve those features that were most commented on in the user testing and would lead to broad changes to the code base. This also meant that we had to go through the requirements and create a ‘summer wish list’ that we wanted to implement later. Therefore, the next sprint would mainly focus on polishing the UI and fixing bugs and code clean up.

#### Retrospective Sprint 6

This sprint went very well. All the tasks that went on the Trello board were implemented fast and efficiently. Working together went well and we started to peer program a lot this sprint. That was done because by this time we were connecting a lot of different components and services that were made by different team members. That work went very well and gave all the team members a good overview of the apps code base. But by this time, we were starting to get a little tired. Finishing the MVP had been a milestone, but each of us had been working on the project without break for some time now though the work was fun. But the deadline is slowly creeping up, so we have to keep the pressure on a little longer. We were also able to go out folfing and test the app for the first time which was fun and was something we were going to try to do as often as we could in the coming weeks.

### Sprint 7

22.4.2020 – 29.04.2020

Overall a good sprint. We were able to finish all items on the Trello board that we had planned to do before code freeze and clean up most of the bugs we knew about. We did a lot of user testing this week, both formal usability testing and sending friends the link to the app and asked them to use the app when playing folf. We got a lot of good feedback but only implemented UI changes and fixed those bugs that were found. We were able to fix the app sync, but it would stop working if the screen was turned off. We also made considerable changes to the routing within the app, what was necessary to reap all benefits of using app sync. The problem would arise if user A, for example, had started a game lobby that user B had joined, and user A would press start game while user B had his mobile screen turned off. If this happened, user B would not be redirected to the scorecard and the game had to be restarted. The solution was to make all game routing dependent on the game objects Vuex state and would route all players in a game when the game state changed. By solving this problem, and other bug that we had encountered this sprint, as well as those UI/UX changes made to address shortcoming realized in usability tests we felt that the application was ready for hand in. In the next sprint we would focus on the report and only fix application breaking bugs, if found.

#### Retrospective Sprint 7

Working together went well this sprint.  We were able to create an app that we were proud of, with no obvious bugs and spirits were high. What was not ideal in this sprint was that it was sometimes hard to focus, mostly because we were beginning to feel a little exhausted but were glad that we had been able to power through and finish all the items on the Trello board. We discussed how we would organize the workflow this summer when we would continue to work on the application after handing it in. We also felt that the team should keep folfing and testing the app.
