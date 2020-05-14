# Project Description

In this chapter we list the project description and the requirements that were made before work began on the _application_. That is done in three ways. First, we list the expected user groups according to their importance and priority. Next we list its functional and non-functional requirements. The chapter ends with use cases for A requirements and some edge cases.

## User groups

We analyzed the user base and split it into four different user groups. First is the casual _folf player_, that is the most important group we are trying to serve with the _application_. These are the players that only play a few rounds a year. To make the _application_ appealing to this group it has, first and foremost, to be easy and straightforward to use. A new user must be able to use the _application_ to see a list of courses, then go to a course and start registering his score as easily as possible.

Another user group is the _dedicated folf_ players and is of medium importance. This user group overlaps with the casual players but differs not only in how often they play, but in what they expect from and how they would use the _application_. They would use the _application_ not only to register the score, but also to track their progress in the game and would like to register as much data as possible. In interviews for example one interviewee said it would be crucial for this kind of application to be able to track what discs he used for each hole. So, gathering statistics and being able to have different view models of statistics is important for this group. They are also more familiar with the game and would like to be able to play different variants of games.

_Tournament directors_ and _tournament players_ are also a user group we would like to serve but has been classed with low importance. The reason is that doing so would expand the scope of the _application_ beyond what can be achieved in a space of one semester. Our perception is that these features must be flawless and super easy to use or not implemented at all. First, we would have to implement an interface for the tournament directors that would allow them to create a schedule, order players in groups, allow them to view players score, change the score and so on. This interface would likely be used on computers and not mobiles and that would have to factor into the design. Considerations for tournament players is getting an overview of the tournament, tee times and score. Also, there would be restrictions on how they would register score, where each player in a group is responsible for registering other players score. Because of how different these features are from the Minimum Viable Product requirements and would effectively change the _application_ from being an app to register score to a tournament management application. Because of this we decided against implementing these features for now.

<hr style="border: 0; height: 1px; background-image: linear-gradient(to right, rgba(0, 0, 0, 0), #005737, rgba(0, 0, 0, 0));" />

### Casual folf player

**Importance**: High.

### Background

- **Age**: Teenagers and older.
- **Gender**: All.
- **Education**: Any, but basic English skill is needed.
- **Technical exp**: Usually good.

### Use of the system

- **Use**: Mostly used in the summertime. Less usage over the winter.
- **Training**: None.
- **Number of users**: 5000.

### Context

- **Technical environment**: Using network data connection on a mobile phone.
- **Real environment**: At the disc golf course. Can use the network connection or register the score and save it when on WiFi
- **Other environment**: At home.

### Main tasks

- **Register score.**
- **Get location.**
- **Get the distance of the basket.**

<hr style="border: 0; height: 1px; background-image: linear-gradient(to right, rgba(0, 0, 0, 0), #005737, rgba(0, 0, 0, 0));" />

### Dedicated folf player

**Importance**: Medium.

### Background

- **Age**: Teenagers and older.
- **Gender**: All.
- **Education**: Any, but basic English skill is needed.
- **Technical exp**: Usually good.

### Use of the system

- **Use**: All year around.
- **Training**: None.
- **Number of users**: 300.

### Context

- **Technical environment**: Using network data connection on a mobile phone.
- **Real environment**: At the disc golf course. Can use the network connection or register the score and save it when on WiFi
- **Other environment**: At home.

### Main tasks

- **Register score.**
- **Get location.**
- **Get the distance of the basket.**
- **View statistics.**
- **Play alternative types of games.**

<hr style="border: 0; height: 1px; background-image: linear-gradient(to right, rgba(0, 0, 0, 0), #005737, rgba(0, 0, 0, 0));" />

### Tournament directors

**Importance**: Low.

### Background

- **Age**: 20 and older.
- **Gender**: All.
- **Education**: Any, but basic English skill is needed.
- **Technical exp**: Usually good.

### Use of the system

- **Use**: All year around.
- **Training**: Some.
- **Number of users**: Few.

### Context

- **Technical environment**: Laptops/computers. Using network data connection or WiFi.
- **Real environment**: Outside or in the club house.
- **Other environment**: At home.

### Main tasks

- **Register, add and remove tournament players**
- **Create and Manage tournament schedule**
- **Register scores**
- **View real time score**
- **View statistics**

<hr style="border: 0; height: 1px; background-image: linear-gradient(to right, rgba(0, 0, 0, 0), #005737, rgba(0, 0, 0, 0));" />

### Tournament players

**Importance**: Low.

### Background

- **Age**: Teenager and older.
- **Gender**: All.
- **Education**: Any, but basic English skill is needed.
- **Technical exp**: Usually good.

### Use of the system

- **Use**: All year around.
- **Training**: None.
- **Number of users**: Few.

### Context

- **Technical environment**: Using network data connection on a mobile phone.
- **Real environment**: At the disc golf course, indoor training facility. Can use the network connection or register the score and save it when on WiFi.
- **Other environment**: At home.

### Main tasks

- **View event time and relevant tournament information**
- **View statistics**

<hr style="border: 0; height: 1px; background-image: linear-gradient(to right, rgba(0, 0, 0, 0), #005737, rgba(0, 0, 0, 0));" />

## Requirements

The _application_ requirements are separated first into functional requirements that are further divided into A, B and C priorities, with the C requirements being requirements that we deem highly unlikely to be fulfilled. Then we list the Non-Functional Requirements that are divided in the same way. They also show which use case they belong to and the status of the requirement. Note that for most of the non-functional requirements use cases are not especially listed because of how general they are.

After sprint 2 we decided to stop changing the numbering of those requirements already on the list even if a new one was added in order to link the use cases later in this chapter to individual requirements and vice versa. As expected, new requirements have been added after that time, considering new insights from interviews and user testing. Those requirements are marked 100 something if deemed an A requirement, 200 for a B and 300 for a C and 400 for any non-functional requirements as well as being highlighted especially.

The functional requirements listed in _**"Minimal Viable Product"**_ are set up in the format "As a **User group** I want to be able to **Operation** so I can **Achievement**". The non-functional requirements in later in this chapter are of the format the _application_ **must/shall** **Achievement**.

## Minimum Viable Product

### A - Requirements

| No.    | User stories                                                                                                                                                                                                                    | Priority (A/B/C) | Use Case | Status |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | -------- | ------ |
| **1**  | As a user, I want to be able to sign up so I can log in.                                                                                                                                                                        | A                | 1        | Done   |
| **2**  | As a user, I want to be able to log in so I can keep track of my history. E.g. scores, courses played and players/users.                                                                                                        | A                | 2        | Done   |
| **3**  | As a user, I want to be able keep track of my score when playing a certain course, so I can keep track of how well I am doing.                                                                                                  | A                | 7        | Done   |
| **4**  | As a user, I want to be able to log my score, even without an internet connection.                                                                                                                                              | A                | 9, 10    |        |
| **5**  | As a user, I want to be able to choose what course I am about to play so I can log the score for that course.                                                                                                                   | A                | 3, 9, 10 | Done   |
| **6**  | As a user I want to be able to create a new game with a scorecard only for me, so I can play alone.                                                                                                                             | A                | 7        | Done   |
| **7**  | As a user, I want to be able to create a new game that other users can join and have a mutual score card that anyone in the group can edit.                                                                                     | A                | 4        | Done   |
| **8**  | As a user, I want to be able to join a game that another player has set up, so we can have a mutual score card.                                                                                                                 | A                | 5, 6     | Done   |
| **9**  | As a user, when playing folf with other users, I want to be able to log my score and the score of other users. I want the score card to update in real time. That way, anyone in the group can log and view each other's score. | A                | 8        | Done   |
| **10** | As a user, I want to be able to see all the information that my fellow players are logging in real time so I can see how the game is going in real time.                                                                        | A                | 8        | Done   |
| **11** | As a user, I want to be able to log my score on a single page, so I do not have to jump between different pages, giving me increased overview of the game and not burdening my mental capacity to play well.                    | A                | 7        | Done   |
| **12** | As a user, I would like to have an on-screen keyboard on the score card when using a mobile device, so I don’t have to open and close the default OS keyboard each time I log or edit a score.                                  | A                | 7        | Done   |

### B - Secondary Goals

| No.     | User stories                                                                                                                                                                                                                 | Priority (A/B/C) | Use Case | Status |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | -------- | ------ |
| **13**  | As a user, I would like to be able to see all sorts of statistics about how I have been playing so I can track my improvements.                                                                                              | B                | 8        |        |
| **14**  | As a user, I want to be able to see the history of all the games I have played, so I can see where I played, when and with whom.                                                                                             | B                | 8        | Done   |
| **15**  | As a user, I want to be able to select different types of games to play (Nassau, Match Play, Skins game etc.).                                                                                                               | B                |          |        |
| **16**  | As a user, I want to be able to register other players as my friends, so I can see who my friends are in the app.                                                                                                            | B                | 11       |        |
| **17**  | As a user, I want to be able to send an invite link to other players so they can join me in a game. (If a player is not a user, he/she should be made to go through sign-up process first). So, we can start playing sooner. | B                | 11       |        |
| **18**  | As a user, I want to be able to be signed in immediately after I confirm my e-mail address, so I do not have to go through the log-in process again.                                                                         | B                |          |        |
| **19**  | As a user, I want to be able to see an overview picture of each basket, so I can better decide how to play it.                                                                                                               | B                |          |        |
| **20**  | As a user, I want to be able to have a public profile, so others can see my _openFOLF_ profile.                                                                                                                              | B                |          |        |
| **21**  | As a user, I want to be able to customize the core features of the app, so I can decide on what is seen on the initial page. E.g. shortcuts and features I use all the time.                                                 | B                |          |        |
| **22**  | As a user, I want to be able to choose a username so I can be identified by my _openFOLF_ name.                                                                                                                              | B                |          |        |
| **23**  | As a user, I would like to get a suggestion for a username when I sign-up, so I don’t have to choose a username.                                                                                                             | B                |          |        |
| **24**  | As a user, I want to be able to donate money to the _openFOLF_ project so I can continue using the web app without worries of ads or subscription models in the future.                                                      | B                |          |        |
| **201** | As a user, I want to be able to add user to my friend list from the lobby so we can start a game faster in the future.                                                                                                       | B                | 12       |        |

### C - Tertiary Goals

| No.     | User stories                                                                                                                                                                                                                                 | Priority (A/B/C) | Use Case | Status |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | -------- | ------ |
| **25**  | As a user, I would like to share the geo-location feature on my phone to see what courses are near me so I can find a course to play.                                                                                                        | C                | 3, 10    | Done   |
| **26**  | As a user, I want to be able to use the app to see distances, my location relevant to the basket, so I know how far I must throw the disk.                                                                                                   | C                |          |        |
| **27**  | As a user, I want to be able to use the app to see in what direction the basket is relevant to my location so I know where it’s at if it is obscured from my line of sight.                                                                  | C                |          |        |
| **28**  | As a user, I want to be able to register a folf course that is not in the app yet so I can log scores on any course I want.                                                                                                                  | C                |          |        |
| **29**  | As a user, I want to be able to register a new course in the app. Just by giving it a name and by registering the GPS coordinates of the basket so I can add any courses not yet registered in the app.                                      | C                |          |        |
| **30**  | As a code contributor, I want to be able to add a new course by adding to the source code that is publicly available on the _openFOLF_ GitHub repository.                                                                                    | C                |          |        |
| **31**  | As a user, I want to be able to join a game with a QR code so I can join a game easily.                                                                                                                                                      | C                | 6        |        |
| **32**  | As a user, I want to be able to add a new friend with a QR code so I can add new friends easily.                                                                                                                                             | C                |          |        |
| **33**  | As a user, I would like to get pro-tips regarding how best to play each basket so I can best plan how to play the basket.                                                                                                                    | C                |          |        |
| **34**  | As a user, I want to be able to access the official folf rules so I can learn how to play and quickly look up rules if any disagreements arise during game play.                                                                             | C                |          |        |
| **35**  | As a user, I want to be able to access the rules of the game and any guides on different aspects of the game.                                                                                                                                | C                |          |        |
| **36**  | As a user, I want to be able to easily find folf related news through the app so I can be up to date on all things frisbee golf related.                                                                                                     | C                |          |        |
| **37**  | As a user, I want to be able to go to either openfolf.net or www.openfolf.net to learn about what _openFOLF_ is.                                                                                                                             | C                |          | Done   |
| **38**  | As a user, I want to be able to log what discs I used while playing a certain basket so I can keep track on how I played that basket in the past.                                                                                            | C                |          |        |
| **39**  | As a user, I want to be able to change the score for a game that has already been played.                                                                                                                                                    | C                | 7, 8, 9  |        |
| **40**  | As a user, I want to be able to stop playing in the middle of a game without saving the score to the database/history.                                                                                                                       | C                |          |        |
| **41**  | As a user, I want to be able to look at the history of other users on _openFOLF_ that are on my friends list.                                                                                                                                | C                |          |        |
| **42**  | As a user, I want to be able to see what the average score of other players on the course is.                                                                                                                                                | C                |          |        |
| **43**  | As a user, I want to be able to see how many players are currently playing certain course to get a rough estimate on if the course is too crowded.                                                                                           | C                |          |        |
| **44**  | As a user, I want to be able to access an _openFOLF_ API and directly access all my data so I can use it in whatever purpose I want.                                                                                                         | C                |          |        |
| **45**  | As a user of another app, I want to be able to easily import my game history into _openFOLF_, so I can easily switch apps.                                                                                                                   | C                |          |        |
| **46**  | As a user, I want to be able to post my score on Facebook (social media) so I can share with people how good at folf I am.                                                                                                                   | C                |          |        |
| **47**  | As a user, I want to be able to sign up by other means. E.g. _Facebook_, _Google_ etc... So, I don’t have to have an _openFOLF_ profile.                                                                                                     | C                |          |        |
| **48**  | As a user, I would like the program to suggest a handicap while competing with others, so competition with others can be fairly measured even though we are at different skill levels.                                                       | C                |          |        |
| **49**  | As a user that has a registered handicap, I want to be able to see directly how many points I will get for the basket.                                                                                                                       | C                |          |        |
| **50**  | As a user, I would like to register my discs in the app so I can see my own collection and share them with other users.                                                                                                                      | C                |          |        |
| **51**  | As a user, when adding score to the score card I would like to be able to register what discs I used for each basket so I can see statistics of what discs I use the most and see what discs I used the last time I played a certain basket. | C                |          |        |
| **52**  | As a user, I want to be able to see a bird's eye view of how the course looks.                                                                                                                                                               | C                |          |        |
| **53**  | As a user, I want to be able to access the mobile phone camera through the app to take a picture I can save with the game I just played so I can attach a photo to the log of the game.                                                      | C                |          |        |
| **54**  | As a user, I want to see how the weather forecast is for the course I am about to play so I can judge the conditions correctly.                                                                                                              | C                |          |        |
| **55**  | As a user, I want to be able to see how the weather has historically influenced my scores so I can see how well I do in certain weather conditions.                                                                                          | C                |          |        |
| **56**  | As a user, I want to be able to bet against my friends on the outcome of the match. Using an _Ethereum_ (blockchain) smart contract that automatically deposits money to the winners account.                                                | C                |          |        |
| **57**  | As a user, I want to be able to have a league that has many players, playing on different courses over a long period of time so I can have a big tournament over a long period of time with my friends.                                      | C                |          |        |
| **58**  | As a tournament organizer, I want to be able to access the score of all tournament players.                                                                                                                                                  | C                |          |        |
| **59**  | As a tournament player, I want to be able to register to a tournament via the _openFOLF_ app.                                                                                                                                                | C                |          |        |
| **60**  | As a tournament organizer, I want to be able to create a new tournament with the _openFOLF_ app.                                                                                                                                             | C                |          |        |
| **61**  | As a tournament player, I want to be able to log my score on _openFOLF_ and give any third parties access to my live score.                                                                                                                  | C                |          |        |
| **301** | As a user I would like to register my tee, and select from what tee box I’m playing from, to better keep track of my statistics.                                                                                                             | C                | 13       |        |

### Non-functional Requirements

The non-functional requirements specify those requirements that can be used to judge the operation of the system, rather than specific behaviors. Because these requirements will often impact the application as a whole, specific uses of these requirements will not be linked to the use cases later in the chapter even though applicable, except in a couple of cases when deemed necessary to be explicit.

| No.    | User stories                                                                                                                                                   | Priority (A/B/C) | Use Case | Status |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | -------- | ------ |
| **62** | The application must be usable on any mobile operating system with browser capabilities.                                                                       | A                |          | Done   |
| **63** | The application shall keep personal information secret and comply with _Icelandic law and EU’s General Data Protection Regulations_.                           | A                |          | Done   |
| **64** | The application must be usable on any desktop computer with browser capabilities.                                                                              | A                |          | Done   |
| **65** | The application must be scalable.                                                                                                                              | A                |          | Done   |
| **66** | The application shall support at least 100 users at any given time.                                                                                            | A                |          | Done   |
| **67** | The openfolf.net website must be optimized for search engine rankings, _SEO_ friendly.                                                                         | A                | 1        | Done   |
| **68** | The system must send notifications to admins if the webpage, application or connected service go down.                                                         | A                |          | Done   |
| **69** | The application shall change the score of players playing a round in real time.                                                                                | A                |          | Done   |
| **70** | The application must have the capability of working as any other locally installed app such as having push notifications and can be added to user home screen. | A                | 2, 11    | Done   |
| **71** | The application shall have 98% uptime after launch date.                                                                                                       | B                |          | Done   |
| **72** | The application shall be able to log in a user within 5 seconds.                                                                                               | B                |          | Done   |
| **73** | The application’s source code must have proper documentation and guides for code contributors.                                                                 | B                |          | Done   |
| **74** | The application shall not accept advertising.                                                                                                                  | C                |          | Done   |
| **75** | The application’s source code shall be available for other users to view, fork and make pull requests on.                                                      | C                |          | Done   |
| **76** | The application must be usable on any smart watch with browser capabilities.                                                                                   | C                |          |        |
| **77** | The application shall have a public facing API for third party actors to get public/authorized data.                                                           | C                |          |        |

## Use cases

The use cases below try to envelop as many A requirements and edge cases as possible and should give a clear image of the _application´s_ core functionality as the team viewed it in the beginning of sprint 3 when programming began.

<hr style="border: 0; height: 1px; background-image: linear-gradient(to right, rgba(0, 0, 0, 0), #005737, rgba(0, 0, 0, 0));" />

**Name:**

A new user, searches for _openFOLF_ on a search engine, launches the app and signs up.

**Number:** 1

**Priority:** A

**Precondition:**

- User must have internet connection.
- User must be able to find the site using search engines.

**Description (base flow):**

A user has heard of an app called _openFOLF_. He uses a search engine and looks for _openFOLF_ and finds openfolf.net.

On the website there are some general information about _openFOLF_ and a launch app button. He presses launch app and opens the application at the address app.openfolf.net. He sees a login page and from there he selects _SignUp_. There he registers an email, a username and a password and selects _SignUp_.

He is greeted with a screen asking him to confirm his email. He goes to his email and there is a link that takes him to the front page of the application.

**Alternative flow:**

- A user, from his browser, goes straight to openfolf.net
- A user, from his browser, goes straight to app.openfolf.net
- A user tries to find it in the app store on their mobile device but are unable to find it. Because of that they search for it on a search engine.
- User enters a wrong password or username, gets a warning message.
- The user is already a registered user (see use case 2: A registered user logs in to _openFOLF_).

**Postcondition:**

- User is a registered user and signed in.

**Source (requirements):** 1, 17, 67

**Actors:** Casual folf players, dedicated folf players.

**Authors:** Dagur, Arnar.

<hr style="border: 0; height: 1px; background-image: linear-gradient(to right, rgba(0, 0, 0, 0), #005737, rgba(0, 0, 0, 0));" />

**Name:**

A registered user logs in to _openFOLF_.

**Number:** 2

**Priority:** A

**Precondition:**

- User must have internet connection.
- User must be a registered user.

**Description (base flow):**

User goes to openfolf.net and selects launch app. In the application he is greeted by a login screen where he is asked to login with a username and password. The user presses the login button and is signed in. The application landing screen is opened.

**Alternative flow:**

- User goes straight to app.openfolf.net to open the application.
- The user, from his mobile selects the _openFOLF_ icon on his home screen. He sees a splash screen.
- The application remembers the user and automatically logs him in and goes straight to the application’s main screen.
- The user uses email/username and password to login.
- The user´s email/username or password is incorrect.

**Postcondition:**

- The user is signed in.

**Source (requirements):** 2, 4, 70

**Actors:** Casual folf players, dedicated folf players.

**Authors:** Dagur, Arnar.

<hr style="border: 0; height: 1px; background-image: linear-gradient(to right, rgba(0, 0, 0, 0), #005737, rgba(0, 0, 0, 0));" />

**Name:**

User selects a course he is going to play on.

**Number:** 3

**Priority:** A

**Precondition:**

- User must be a registered user and logged in.

**Description (base flow):**

From the _openFOLF_ home screen he selects Play game. He is greeted with the Select Course page. There the user sees a list of available courses in alphabetical order and at the top is play unspecified course. He selects a course in the list he wants to play. The user is redirected to the Game lobby page.

**Alternative flow:**

- The user has allowed _openFOLF_ to use his geolocation and the list of available courses is displayed in order of proximity (Req 25).
- The user has not allowed geolocation but has already played several courses before. Those courses recently played are listed with the most recently played first then the alphabetical order.
- The user does not have a network connection; the courses available when he was last connected are listed in alphabetical order.
- The user does not want to select a specific course or does not find his course on the list, selects play unspecified course. Gets redirected to a set custom course (see use case 10).

**Postcondition:**

- The user has selected a course to play on.

**Source (requirements):** 5, 25

**Actors:** Casual folf players, dedicated folf players.

**Authors:** Arnar.

<hr style="border: 0; height: 1px; background-image: linear-gradient(to right, rgba(0, 0, 0, 0), #005737, rgba(0, 0, 0, 0));" />

**Name:**

User sets up a new game that other users join by lobby code.

**Number:** 4

**Priority:** A

**Precondition:**

- User must have internet connection.
- User must be logged in.
- User has selected a course to play.

**Description (base flow):**

From Select courses the user is directed to Game lobby. There he sees a screen where the lobby code is displayed, a drop down with different types of games, and a Start game button. As other players join the game they are displayed in a list on the screen. When all players have joined the hosting user presses Start game and the score board is displayed.

**Alternative flow:**

- The game lobby code does not work; other players use the lobby code, but it doesn’t work.
- The players that have joined the game are not displayed on the list.
- A user joins that the host does not want to join the game and wants to kick that player out of the lobby. Not implemented in the application.
- A user uses a QR code to join the lobby (see use case 6).
- The user that joined the lobby quits the lobby before the game starts, the list of players is updated.

**Postcondition:**

- The user that went through the setup and the other players in the lobby are redirected to the score card.

**Source (requirements):** 7

**Actors:** Casual folf players, dedicated folf players.

**Authors:** Arnar.

<hr style="border: 0; height: 1px; background-image: linear-gradient(to right, rgba(0, 0, 0, 0), #005737, rgba(0, 0, 0, 0));" />

**Name:**

User joins a lobby by inserting a lobby code.

**Number:** 5

**Priority:** A

**Precondition:**

- User must have internet connection.
- User must be logged in.
- Another user has started a Game lobby for a new game (4).

**Description (base flow):**

From the main screen of the application the user selects Join game. There he is asked to enter a lobby code. He enters the lobby code and presses join.

**Alternative flow:**

- The user enters the lobby code when the game has already been started; gets an invalid code message.
- The user that joins the lobby wants to change game settings; only the lobby host has privileges to do so.

**Postcondition:**

- The user joins the other users lobby. From there they can send each other friend requests and start the game.

**Source (requirements):** 8

**Actors:** Casual folf players, dedicated folf players.

**Authors:** Arnar.

<hr style="border: 0; height: 1px; background-image: linear-gradient(to right, rgba(0, 0, 0, 0), #005737, rgba(0, 0, 0, 0));" />

**Name:**

User joins a lobby by scanning a QR code.

**Number:** 6

**Priority:** C

**Precondition:**

- User must have internet connection.
- Another user has started a Game lobby for a new game.

**Description (base flow):**

From any QR scanner application the user scans the QR code of the user hosting the lobby and is redirected to the lobby.

**Alternative flow:**

- The user is joining the lobby is not a registered user to log in/sign up screen. He signs up and gets an email to verify his account. In the email is a link, that the user clicks and is redirected to the lobby.
- The user is not logged in to the app is directed to log in/sign up screen. After signing in is redirected to the lobby.
- User joins by lobby code (see user case 5).

**Postcondition:**

- The user joins the other users lobby. From there they can send each other friend requests and start the game.

**Source (requirements):** 8, 31

**Actors:** Casual folf players, dedicated folf players.

**Authors:** Arnar.

<hr style="border: 0; height: 1px; background-image: linear-gradient(to right, rgba(0, 0, 0, 0), #005737, rgba(0, 0, 0, 0));" />

**Name:**

User plays a solo game with internet connection.

**Number:** 7

**Priority:** A

**Precondition:**

- User must have internet connection.
- User must be logged in.
- User sets up a game lobby and starts a game.

**Description (base flow):**

After initial setup the user is redirected to the score card. There is a view of the score card, an onscreen keyboard and an end game button. The scorecard has three columns; hole number, their par and an empty column where the user adds his score. Below are the cumulative points of the first 9 holes and the cumulative score of the player.

After finishing the round, the user enters end round. He gets a screen asking him Play another round and End game. He is transferred to a page with the game’s statistics and an OK button. The user selects Ok and is redirected to the main page of the application.

**Alternative flow:**

- The user loses network connection mid game but likes to save the score; the score is saved next time the user has network connection.
- The user selects Play another round and a fresh scorecard is shown but the accumulative score is displayed below and the accumulative par of the course. Later when the user selects End Game the user will see statistics of all the rounds played.
- The user selects Play another round, but this time the wants to play them in reverse order. Not supported by the application.
- The course the user is playing is more than 9 holes. A toggle button appears on the screen with the text Front/back to see first 9 or the rest of the holes.
- The course that has more than 18 holes. Not supported by the application.
- The user, after selecting end game sees that for one hole is wrong; can change the score in the history and statistics menu.

**Postcondition:**

- The players score is saved and can be viewed in the history and statistics.

**Source (requirements):** 3, 6, 12, 39

**Actors:** Casual folf players, dedicated folf players.

**Authors:** Arnar, Ægir.

<hr style="border: 0; height: 1px; background-image: linear-gradient(to right, rgba(0, 0, 0, 0), #005737, rgba(0, 0, 0, 0));" />

**Name:**

User joins and plays a game with other users and has internet connection.

**Number:** 8

**Priority:** A

**Precondition:**

- User must have internet connection.
- User must be logged in.
- User has created or joined a lobby.

**Description (base flow):**

After initial setup the user is redirected to the score card (see description in use case 7). Any player can add or register score for anyone in the group.

When the round is finished the user that created the lobby is asked if they want to Play another round or End game. The lobby owner selects End Game and the user is transferred to a page with the game’s statistics and an OK button. The user selects Ok and is redirected to the main page of the application.

**Alternative flow:**

- The user hosting the game loses network connection mid game. All other users get a connection lost message displayed on their screen. The connection cannot be re-initialized. The user hosting the game can keep registering the score; the score for all users is saved next time the hosting user has network connection.
- The lobby owner selects Play another round and a fresh scorecard is shown but the accumulative score is displayed below and the accumulative par of the course. Later when the lobby owner selects End Game the user will see statistics of all the rounds played.
- The course that the user is playing is more than 9 holes. A toggle button appears on the screen with the text Front/back to see first 9 or the rest of the holes.
- The course has more than 18 holes. Not supported by the application.
- The user, after selecting end game sees that for one hole is wrong; can change the score in the history and statistics menu.

**Postcondition:**

- The players score is saved and can be viewed in the history and statistics.

**Source (requirements):** 9, 10, 13, 14, 39

**Actors:** Casual folf players, dedicated folf players.

**Authors:** Arnar.

<hr style="border: 0; height: 1px; background-image: linear-gradient(to right, rgba(0, 0, 0, 0), #005737, rgba(0, 0, 0, 0));" />

**Name:**

User plays a game without internet connection.

**Number:** 9

**Priority:** A

**Precondition:**

- User must be logged in.

**Description (base flow):**

From the main menu a user selects Play Game. Is greeted with the Select Course page. He selects a course and presses continue. There he is redirected to the Offline Lobby. There he can select type of game and add a guest player. The user clicks add a guest player and a modal opens. There he is asked to give the new player a name, add another player and a done button. After entering the players name, he selects done and the modal closes.

**Alternative flow:**

- The user loses network connection mid game but likes to save the score; the score is saved next time the user has network connection.
- The user, after selecting end game sees that for one hole is wrong but wants to save it; can change the score in the history and statistics menu.
- If the user registered the score of another user while offline, and that player likes to register his score/connect that score to an existing user account, not supported by the application.

**Postcondition:**

- The user can register the score for himself and the guest. The guest is unable to connect the score to another user account.
- The players score is saved and can be viewed in the history and statistics.

**Source (requirements):** 4, 5, 39

**Actors:** Casual folf players, dedicated folf players.

**Authors:** Arnar.

<hr style="border: 0; height: 1px; background-image: linear-gradient(to right, rgba(0, 0, 0, 0), #005737, rgba(0, 0, 0, 0));" />

**Name:**

User plays a course not on the list of available courses.

**Number:** 10

**Priority:** A

**Precondition:**

- User must be a registered user and logged in.

**Description (base flow):**

From the openFOLF home screen he selects Play game. He is greeted with the Select Course page. There the user sees a list of available courses in alphabetical order and at the top is play unspecified course. He selects play unspecified course. The user is redirected to the set custom course page. There the user can give the course a name. After entering a name, the user presses Start game and the score board is displayed.

**Alternative flow:**

- The user does not want to name the course, is registered on the scoreboard and in the user’s history as unspecified course.
- The user has allowed openFOLF to use his geolocation and the list of available courses is displayed in order of proximity.
- The user has not allowed geolocation but has already played several courses before. Those courses recently played are listed with the most recently played first then the alphabetical order.
- The user does not have a network connection; the courses available when he was last connected are listed in alphabetical order.

**Postcondition:**

- The user has selected a course to play on.

**Source (requirements):** 4, 5, 10

**Actors:** Casual folf players, dedicated folf players.

**Authors:** Arnar, Ægir.

<hr style="border: 0; height: 1px; background-image: linear-gradient(to right, rgba(0, 0, 0, 0), #005737, rgba(0, 0, 0, 0));" />

**Name:**

User sets up a new game and sends an invite to another registered player that is on his friends list to play a round with.

**Number:** 11

**Priority:** B

**Precondition:**

- User must be logged in.
- User has selected a course to play.
- User must have added another registered user to his friends list.

**Description (base flow):**

From the Select courses the user is directed to Game lobby. There he sees a screen where the lobby code is displayed, a drop down with different types of games, a Send invite and Start game button. The user selects Send invite that opens a modal with his friend list and a done button. The user selects a friend and by doing that sending an invite to that player and then pressed done that closes the modal. After the friend accepts the invite that friend is displayed on the list of players in the lobby. When all players have joined the hosting user presses Start game and the score board is displayed.

**Alternative flow:**

- The user wants to send an invite to a player that is not on the friend list; the other players must use the lobby or QR code (see use case 5 and 6).
- The user that is being invited to play does not have the application opened; gets a push notification that he has been invited to a game.
- The user that is being invited to play does not have the application opened, nor has allowed push notifications; when signing in sees a notification that he has been invited to a game.
- A user that got a notification from another user to play a game, but that game is already started; gets an invitation expired message.

**Postcondition:**

- The user that went through the setup and the other player are redirected to the score card.

**Source (requirements):** 16, 17, 70

**Actors:** Casual folf players, dedicated folf players.

**Authors:** Arnar.

<hr style="border: 0; height: 1px; background-image: linear-gradient(to right, rgba(0, 0, 0, 0), #005737, rgba(0, 0, 0, 0));" />

**Name:**

User sends another registered user a friend request from the game lobby.

**Number:** 12

**Priority:** B

**Precondition:**

- User must be logged in.
- User has selected a course to play.
- User has started a Game lobby for a new game.
- Another user uses lobby code to join the lobby.

**Description (base flow):**

User 1 starts a Game lobby and the lobby code is displayed. User 2 joins the game lobby with that code and user 2 is displayed on the list of players. Next users 2 username has a send friend request button that user 1 presses. User 2 gets a notification of a new friend request and accepts.

**Alternative flow:**

- The user that got the friend request does not receive the message; the users won’t be added to each other’s friends lists.

**Postcondition:**

- Both users are now on each other’s friends list.
- Both users can now send each other invites to play a game and see each other’s statistics.

**Source (requirements):** 201

**Actors:** Casual folf players, dedicated folf players.

**Authors:** Arnar.

<hr style="border: 0; height: 1px; background-image: linear-gradient(to right, rgba(0, 0, 0, 0), #005737, rgba(0, 0, 0, 0));" />

**Name:**

A user playing solo changes his tee type.

**Number:** 13

**Priority:** C

**Precondition:**

- User must be logged in.
- User has selected a course to play.
- User must have added another registered user to his friends list.

**Description (base flow):**

From Select Course the user is redirected to the Game Lobby. There he sees among other (for details see case 4) things his name and next to it the red button with the word “tee”. The color represents from what tee box the player is going to play from. The course selected has two tees available to throw form, a red and a white one. The user selects the “tee” button which opens a modal that displays a list of the colors that the course has available. The user selects white and closes the menu.

**Alternative flow:**

- The user does not know what the colors mean. Next to the red tee is in bracket (normal Par) and is selected by default.
- The user usually plays the blue tee but there is only the red and white, the red will be selected at default.

**Postcondition:**

- The user that went through the setup and the other player are redirected to the score card.

**Source (requirements):** 301

**Actors:** Dedicated folf players.

**Authors:** Arnar.
