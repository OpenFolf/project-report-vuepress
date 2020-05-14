# Design Overview

We knew from the beginning that we wanted to make a progressive web application and that the minimum viable product would be an application that would at least keep the score of players. As stated before, it would consist of the [openFOLF.net](https://www.openfolf.net) website that would have the “hero banner” look, a simple, single page website with general information. The other would be the _application_ at [app.openFOLF.net](https://app.openfolf.net/) After a splash screen, a player would login and then log his/her score. With the purpose of being agile we designed the _application_ in small increments as we fulfilled the requirements according to the requirements list.

The chapter begins with a short history of how the _application_ progressed both in design and functionality. It is done by showing the first drawings on a whiteboard, the team made at the beginning of the project, and a brief discussion on how we planned to build. Then we show the low fidelity prototypes and at last how the application looks at its third iteration, just before handing in the assignment.

Next is a sub-chapter on testing. We decided to perform usability testing to help us with design of the _application_, as usability testing is focused on UI/UX capabilities of the _application_. We list main findings and how we changed the _application_ if change was necessary.

At the end of the chapter we name some of the improvements that we were not able to implement before hand in but will be prioritized when moving forward with the _application_.

<div style="display: flex; flex-flow: row; justify-content: center;">
  <img src="/images/wireframe.png" alt="Early wireframe for openFOLF.net" />
</div>

_Figure 4:_ Early wireframe

## Design Process

_Figure 4_ is an illustration of the first draft of the _application_ after sprint 0. More wireframes and screenshots of the _application_ throughout the process can be viewed in the appendix. In the following subchapters the design process of some of the main features of the _application_ trough out the semester. This will include some discussion and references to relevant pictures in the appendix.

### Early drafts

The team made the first drafts of the _application_ together, were we drew rough sketches on a whiteboard and then redrew those with _Balsamiq_ wireframes. It was decided that the _application_ would be designed with a mobile first strategy in mind and because of that all the wireframes show how the _application_ will look on a mobile screen.

Figure 2 in the appendix shows how we imagined the opening page of [openfolf.net](https://www.openfolf.net/) would look like. When signed in the main page of the _application_ is shown. For the look and feel of the _application_, we decided to use _Vuetify_, a material design component framework for _Vue.js_ for as many components as possible. We then customized and adapted our own design ideas where needed.

One of the main considerations of the team is that the _application_ is first and foremost an app to log the score of a folf round for a single user or with a group. Having geolocation tags so a user can find the nearest course, change his score card name and other features that would enrich the experience were however extra fluff. Because of this the team found that making the main application page as clean as possible to make it as easy for a user to start logging the score as soon possible. If the user wanted to do something else, he would have to access that through some kind of menu, in the first wireframe draft the solution was a burger menu.

At the end of sprint 3 the team had finished first iteration of the front-end, this can be viewed in figures 5-8. The main changes were that after the login screen a bottom navigation bar would appear instead of a burger menu. This menu was mainly selected because of UX design considerations; with this setup the user would be able to use only one hand to access most of the sites content without sacrificing the goal of making the path for a user to start a game any longer or unclear. By then the menu consisted of a home, new game, join game and options. By this time the team had taken interviews with folf players and created use cases for the A requirements. Creating the use cases polished how we imagined the flow of the _application_, and the flowchart shown in figure 9 in the appendix shows what the team aimed for when we started again, from a clean slate, in the next iteration of the _application_ at the start of sprint 4.

### Iteration 2

Having put a lot of work into the use cases and the work of making them consistent amplified some of the issues of certain features, or solutions to a problem, would inevitably bring. One of those features was how friends were to play a game together. This is a core requirement for the _application_ and first solution was to have a "friend" system. In short, each user could add another user to his friends list, in order to make it as easy as possible connect to each other and share a score card when playing. We knew that we did not want to create a social media app and this solution would steer the _application_ in a completely different direction than we had envisioned. By the end of sprint 3 we decided to completely scrap this idea and instead opted to implement a game lobby. A user would select a course he wanted to play and would then start a game lobby that would generate a unique code, that other players could use to join the lobby. When all players have joined the lobby the owner presses start game and all players are redirected to the scorecard.

Though this concept of a game lobby should be known to most of those that have played multiplayer games, it is not as straight forward or logical as the one with the friend list that is known through social media sites. This became clear in user testing.

### Iteration 3

By this time we had a working prototype that we were able to use for testing, but not much more, since much of the functionality was not ready. We had done some informal interviews and testing by this time but decided to do a formal usability testing on the _application_. Continuation of the design process is at the end of this chapter.

## Usability testing

In order to get varied test data to help with the design and feel of the _application_, we performed several usability tests with a wide range of subjects. For subjects we invited our friends and family to play, also random strangers we met at folf courses. With few subjects we tried think aloud testing where users were asked to vocalize what they were doing in the _application_. That worked well but could not be done in all cases because sometimes there were people around and the test subjects felt a little awkward doing so. With others we just observed while playing alone or in groups. We also played along ourselves on a few occasions. Tests were performed at various folf courses in the Reykjavik area at various times in the design process.

### Measurable Goals

We decided on a few measurable goals we wanted to try and achieve in our usability test. We tried to capture the main usability factors of effectiveness, efficiency and satisfaction. We also added some tasks that would give us an insight into how users would fare in interacting with the UX design of the _application_.

| Nr.    | Description                                             | Usability factor | Data                   | THE GOAL                             |
| ------ | ------------------------------------------------------- | ---------------- | ---------------------- | ------------------------------------ |
| **1**  | User is able to start a game within 30 sec              | Efficiency       | Time                   | Average time <30 sec                 |
| **2**  | User is able to select desired course                   | Effectiveness    | Finished/ Not finished | Finish task <20 sec                  |
| **3**  | User is able to change his/her scorecard name           | Effectiveness    | Finished/ Not finished | Finish task <30 sec                  |
| **4**  | General satisfaction with playing a game in the app     | Satisfaction     | Grade between 0 and 5  | Average score >= 4                   |
| **5**  | General satisfaction with stats page                    | Satisfaction     | Grade between 0 and 5  | Average score >= 4                   |
| **6**  | User is able to sign-up within 1 min                    | Efficiency       | Time                   | Average time <30 sec                 |
| **7**  | User is able to log score for all players               | Effectiveness    | Finished/ Not finished | Finish task <20 sec                  |
| **8**  | Real time updating of scorecard throughout playing time | Effectiveness    | Finished/ Not finished | Average successful completion >=95%  |
| **9**  | User does not ask for help more than once during test   | Effectiveness    | Count of help requests | Average number of help requests =< 1 |
| **10** | User is able to join a game given a lobby code          | Effectiveness    | Finished/ Not finished | Finish task <30 sec                  |

### How tests were performed

We mainly got friends to test our app, some had played folf before, others had not. We told them that we would ask them to perform a few tasks while they were playing and keeping score of their folf round.

We explicitly explained that the product was in testing phase, they themselves were not being tested and all feedback would be well received.

Tasks that users were asked to perform during testing:

- Sign up for an openFOLF account.
- Sign-in to _application_.
- Change your scorecard name on user profile.
- Select a course to play.
- Invite friends to play along if you started a game.
- Start a game & or join a game through lobby code.
- Keep score through game time.
- Finish game.
- Look at statistics for recently finished game.

Questions asked after test:

- What did you think of the overall experience of using the app?
- What did you think of the stats page?
- What did you specifically like about the app?
- What did you dislike about the app?
- Anything special you would like to add to an app like this?

We performed tests together as a group as well as individually. To collect data during testing we always had one member of our team assigned to data collection. Taking notes, registering data and using a stopwatch to measure the time it took for users to perform various tasks in the app. Other team members either played along or were not present during tests.

### Results from tests

---

_**User is able to start a game within 30 sec.**_

At first this task did not test particularly well. Quite a few users were not sure where in the app to go and start a game. Most found out eventually but did not perform the task within the goal we had set ourselves. Some users even had to ask us how to start a game. Some did not understand the lobby concept.

**Our reaction**: _We set up a prominent play button that explains to new users how to use the app and the lobby concept. After this change the usability of this task scored extremely well. New users seemed to have no problem in creating a game after that._

---

_**User is able to select desired course.**_

After the second iteration of the application, when user testing began, the top bar where a user would select a course only had a flag icon. Below that a list with the names of the courses and its distance from the user. (figure 14, appendix 3)

While some users found it logical to press the play button and from there select a course to play others thought it was confusing to see a list with no explanation. Having location services enabled made it so that the folf course we were at was at the top. Selecting that course and pressing play then came easy to users and all users were able to finish the task.

One user that has never played folf but is a golf player thought the distances shown were how long the course was. In golf, how good a golf course is tends to be measured on how long they are and he thought having those distances was confusing.

The few users that did not enable location services had no problem finding the course they desired as they are in alphabetical order.

**Our reaction**: _We changed the header to say SELECT COURSE and enlarged all heading font sizes within the application._

---

_**User is able to change his/her scorecard name.**_

In general users were able to change their scorecard name without problem. Most users also tried toggling the theme between dark and light mode, several comments were made regarding how much they liked this feature.

Some were confused at what a scorecard name was and asked if it was like a user name and were confused when it only allowed for 3 letters.

**Potential reaction**: _As they were first time users it was not too worrisome that users did not know what a scorecard name was. We could though add a username as well in later iterations of the application to emphasize the difference between a username and scorecard name._

---

_**General satisfaction with playing a game in the app.**_

General satisfaction was relatively high. We scored above our measurement goal. Potentially this result is artificially high as some test subjects were friends and others might be a little bit uncomfortable in giving an honest assessment. This is nevertheless very good news and reinforces our believe that we are on the right track with the application.

---

_**General satisfaction with stats page.**_

Most users felt the stats page should show more varied options of stats regarding games users have played. Otherwise they really liked the look and feel of the stats page and users seemed to have no trouble looking up score from previous games.

**Potential reaction**: _Add more statistic options for users to see regarding their gameplay in future iterations of the application._

---

_**User is able to sign-up within 1 min.**_

Most users were able to sign up within this time limit. Quite a few noted that it would be nice to be able to sign in using _Google_ or _Facebook_. A user thought that the _application_ was broken because after sending the confirmation code the user was redirected to the sign in page without him noticing.

**Potential reaction**: _Add Google auth and/or Facebook in the future. We had discussed that we did not want Google or Facebook to be the first thing new users of our open source application would see. We might review that stance in later iterations of the application._

_Furthermore, some kind of user feedback has to be added to the sign in process._

---

_**User can log score for all players.**_

When using the score card (figure 17, appendix 3) most players were able to log their score and the score off other players. Most registered their score; then by default the cell below where they registered becomes active. Then they manually selected their team members cell and registered their score.

The team had made a _zigzag_ button for when a user is logging the score of all players. Instead of making the cell below active it makes the cell to its right active until all players score for that hole has been logged and then drops down to the next hole. But only one realized how to use it, and that was only by pressing all the buttons to see what they would, before logging any score and finding out that way. Others had to ask what the button does.

One thing that users voiced regarding the scorecard when they were testing the _application_ on small phones, such as iPhone 8, was that could not see the whole table. There for they could not see for whom they were logging the score.

**Potential reaction**: _The zigzag button is unclear but does not seem to distract or bother those that do not use it. The team feels that its function is important for those that discover what it does and because of this we do not want to remove it. But both that button and the light mode/dark mode must be put in a menu, some later iterations. Furthermore, the zigzag button must display some tool tip that describes its function when pressed._

_Because some users were not able to see the whole table, the tool header must float on top when user scrolls down the table to register score._

---

_**Real time updating of scorecard throughout playing time.**_

Real time updating of the scorecard did not go well in our first tests. Users were losing connection and scorecard was not always updating in real time on the later holes of the course.

**Our reaction**: _We figured out that maintaining a websocket connection over such a long period of time was not feasible. We re-wrote our subscription logic and during later tests users reported no problems regarding real time updates._

---

_**User does not ask for help more than once during test.**_

The number of times a user asked for help during tests kept going down as we made tweaks to the design and functionality of the application. In the later tests majority of users often never asked for help during the whole test.

---

_**User is able to join a game given a lobby code.**_

Like in the task of creating a game this task did not test particularly well in the beginning. Users were not sure where to go to join a game. Most found out eventually but did not perform the task within the goal we had set ourselves.

**Our reaction**: _We set up a prominent play button that explains to new users how to use the app. After this change the usability of this task scored extremely well. New users seemed to have no problem in joining a game after that._

---

_**General reaction of users.**_

Users seemed to like the overall experience of using the application. The average rating was well above our goal of 4 and in later tests we received full marks most of the time.

Users specifically liked the ability to find courses near you and being able to see in real time how the other players were doing.

When users were asked what they would most like to add to an application like this the most common answer was more information regarding individual holes. Quite a few wanted an avatar and a username as well.

In general, the usability testing helped us move the app design forward and has given us a road map on how to continue the development of the application.

---

<div style="display: flex; flex-flow: row; justify-content: center;">
  <img src="/images/home.png" alt="Iteration 3 - The Home screen"  />
</div>

_Figure 5:_ Iteration 3. The Home screen

## Latest design iteration

All the user testing, though focused on usability, found a lot of breaking bugs that the team was able to address and fix. Moreover, we got a lot of good feedback and ideas, some of which we were able to implement, others that will have to be implemented later and still others that do not fit the application or its scope. The aim from the start had been to be able to update the scorecard dynamically and at the end of sprint 3 we were able to make this work. By sprint 6 we were realizing that we could utilize this technology to a greater extent by combining it with the Vuex state management and Vue.js’s internal routing. By doing so, it solved much of our past worries about what would happen if the owner quit mid game or if a user would temporarily lose network connection (see alternative flow for use cases 7 and 8). For example, if one user in a group loses connection temporarily and the application is closed. If that happens, he can sign back in and from join game enter the lobby code again, he is then redirected back to the score card. That, or other team members register his score.

<div style="display: flex; flex-flow: row; justify-content: center;">
  <img src="/images/scorecard.png" alt="Iteration 3 - The Scorecard"  />
</div>

_Figure 6:_ Iteration 3. The Scorecard

By the end of the semester most notable UI considerations had been addressed. The team was able to implement all but one A requirement and implementing those were a priority. Figures depicting the latest iteration, iteration 3 can be viewed in Appendix 3. But further UI improvements must be done in the future that were not, given the time frame, within scope. Some are simple to implement, such as adding a loading bar to give the user visual feedback when pages are loading. A few have been mentioned above in results from the test. Another is to rewrite the scorecard component, because when addressing problems from user testing with the scorecard in iteration 2 we made a lot of changes, so much so that it introduced new problems. But we acknowledged from the start that the scorecard was the component within the app that would have to go through the most iterations, because users will spend most of their time interacting with that component. But one issue that must be resolved is to make it clearer on which hole the player is playing. Then there is the idea of further improvements to the scorecard, that is to create a menu for the zigzag button, the light/dark mode toggle and to add a button that opens a map of the course. Folf.is has course overviews of almost all folf courses in Iceland, and with their permission we would like to add it to the app. This would improve usability considerably since knowing where the next tee is not always obvious for new players.

<div style="display: flex; flex-flow: row; justify-content: center;">
  <img src="/images/lobby.png" alt="Iteration 3 - The Pre-Game Lobby"  />
</div>

_Figure 7:_ Iteration 3. The pre-game Lobby

These changes are going to be top priority of the next iteration of the application.
