# Project Description

In this chapter we list the project description and the requirements that were made before work began on the application. That is done in three ways. First, we list the expected user groups according to their importance and priority. Next we list its functional and non-functional requirements. The chapter ends with use cases for A requirements and some edge cases.

## User groups

We analyzed the user base and split it into five different user groups. First is the casual folf player, that is the most important group we are trying to serve with the application. These are the players that only play a few rounds a year. To make the application appealing to this group it has, first and foremost, to be easy and straightforward to use. A new user must be able to use the application to see a list of courses, then go to a course and start registering his score as easily as possible.

Another user group is the dedicated folf players and is of medium importance. This user group overlaps with the casual players but differs not only in how often they play, but in what they expect from and how they would use the application. They would use the application not only to register the score, but also to track their progress in the game and would like to register as much data as possible. In interviews for example one interviewee said it would be crucial for this kind of application to be able to track what discs he used for each hole. So, gathering statistics and being able to have different view models of statistics is important for this group. They are also more familiar with the game and would like to be able to play different variants of games.

Tournament directors and tournament players are also a user group we would like to serve but has been classed with low importance. The reason is that doing so would expand the scope of the application beyond what can be achieved in a space of one semester. Our perception is that these features must be flawless and super easy to use or not implemented at all. First, we would have to implement an interface for the tournament directors that would allow them to create a schedule, order players in groups, allow them to view players score, change the score and so on. This interface would likely be used on computers and not mobiles and that would have to factor into the design. Considerations for tournament players is getting an overview of the tournament, tee times and score. Also, there would be restrictions on how they would register score, where each player in a group is responsible for registering other players score. Because of how different these features are from the Minimum Viable Product requirements seen in chapter 4.2.1 and would effectively change the application from being an app to register score to a tournament management application. Because of this we decided against implementing these features for now.

The last user group is code contributors. This group is important for the longevity of the application. Both to keep information that is not provided by the API correct but also to further improve the application, add functionality. To serve this group the application’s GitHub site must have documentation and the code must be well documented. Though it is within the realm of possibility that code contributors would propose and create pull requests with major changes to the application’s code base, we assume that in the beginning most changes would be minor fixes or changes to the layout. Therefore, having a well commented code for the team to be active on the GitHub’s issue page should go a long way to help contributors to understand the code and feel comfortable to make changes. It is important to have proper documentation on the technical environment and its source code. The workflow needs to be clear and that’s why we modelled it on [https://opensource.guide/](https://opensource.guide/).

---

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

---

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

---

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

---

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

---

### Code contributor

**Importance**: Medium/Low.

### Background

- **Age**: Teenager and older.
- **Gender**: All.
- **Education**: Some software skills, and knowledge of GitHub.
- **Technical exp**: Usually good.

### Use of the system

- **Use**: All year around.
- **Training**: None but need documentation on how-to.
- **Number of users**: Few.

### Context

- **Technical environment**: Laptops/computers. Code editors and network connection.
- **Real environment**: Personal computers.
- **Other environment**: At home or at work.

### Main tasks

- **Add new courses**
- **Add new types of games**
- **Change UI**
- **Make contribution to design and functionality**

## Requirements

The application requirements are separated first into functional requirements that are further divided into A, B and C priorities, with the C requirements being requirements that we deem highly unlikely to be fulfilled. Then we list the Non-Functional Requirements that are divided in the same way. They also show which use case they belong to and the status of the requirement. Note that for most of the non-functional requirements use cases are not especially listed because of how general they are.

After sprint 2 we decided to stop changing the numbering of those requirements already on the list even if a new one was added in order to link the use cases in chapter 4.3 to individual requirements and vice versa. As expected, new requirements have been added after that time, considering new insights from interviews and user testing. Those requirements are marked 100 something if deemed A requirement, 200 for B and 300 for C and 400 for non-functional requirements as well as being highlighted especially.

The functional requirement in listed in 4.2.1 – 4.2.3 are set up in the format “As a **User group** I want to be able to **Operation** so I can **Achievement**”. The non-functional requirements in chapter 4.2.4 are of the format The application **must/shall** **Achievement**.

Note that only A requirements are shown here. B and C requirements can be viewed in Appendix 1.

## Minimum Viable Product

### A - Requirements

| No. | User stories                                                                                                                                                                                                                    | Priority (A/B/C) | Use Case | Status |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | -------- | ------ |
| 1   | As a user, I want to be able to sign up so I can log in.                                                                                                                                                                        | A                | 1        | Done   |
| 2   | As a user, I want to be able to log in so I can keep track of my history. E.g. scores, courses played and players/users.                                                                                                        | A                | 2        | Done   |
| 3   | As a user, I want to be able keep track of my score when playing a certain course, so I can keep track of how well I am doing.                                                                                                  | A                | 7        | Done   |
| 4   | As a user, I want to be able to log my score, even without an internet connection.                                                                                                                                              | A                | 9, 10    |        |
| 5   | As a user, I want to be able to choose what course I am about to play so I can log the score for that course.                                                                                                                   | A                | 3, 9, 10 | Done   |
| 6   | As a user I want to be able to create a new game with a scorecard only for me, so I can play alone.                                                                                                                             | A                | 7        | Done   |
| 7   | As a user, I want to be able to create a new game that other users can join and have a mutual score card that anyone in the group can edit.                                                                                     | A                | 4        | Done   |
| 8   | As a user, I want to be able to join a game that another player has set up, so we can have a mutual score card.                                                                                                                 | A                | 5, 6     | Done   |
| 9   | As a user, when playing folf with other users, I want to be able to log my score and the score of other users. I want the score card to update in real time. That way, anyone in the group can log and view each other's score. | A                | 8        | Done   |
| 10  | As a user, I want to be able to see all the information that my fellow players are logging in real time so I can see how the game is going in real time.                                                                        | A                | 8        | Done   |
| 11  | As a user, I want to be able to log my score on a single page, so I do not have to jump between different pages, giving me increased overview of the game and not burdening my mental capacity to play well.                    | A                | 7        | Done   |
| 12  | As a user, I would like to have an on-screen keyboard on the score card when using a mobile device, so I don’t have to open and close the default OS keyboard each time I log or edit a score.                                  | A                | 7        | Done   |

### Non-functional Requirements

The non-functional requirements specify those requirements that can be used to judge the operation of the system, rather than specific behaviors. Because these requirements will often impact the application as a whole, specific uses of these requirements will not be linked to the use cases in 4.3 even though applicable, except in a couple of cases when deemed necessary to be explicit.

| No. | User stories                                                                                                                                                   | Priority (A/B/C) | Use Case | Status |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | -------- | ------ |
| 62  | The application must be usable on any mobile operating system with browser capabilities.                                                                       | A                |          | Done   |
| 63  | The application shall keep personal information secret and comply with Icelandic law and EU’s General Data Protection Regulations.                             | A                |          | Done   |
| 64  | The application must be usable on any desktop computer with browser capabilities.                                                                              | A                |          | Done   |
| 65  | The application must be scalable.                                                                                                                              | A                |          | Done   |
| 66  | The application shall support at least 100 users at any given time.                                                                                            | A                |          | Done   |
| 67  | The www.openfolf.net website must be optimized for search engine rankings, SEO friendly.                                                                       | A                | 1        | Done   |
| 68  | The system must send notifications to admins if the webpage, application or connected service go down.                                                         | A                |          | Done   |
| 69  | The application shall change the score of players playing a round in real time.                                                                                | A                |          | Done   |
| 70  | The application must have the capability of working as any other locally installed app such as having push notifications and can be added to user home screen. | A                | 2, 11    | Done   |
| 71  | The application shall have 98% uptime after launch date.                                                                                                       | B                |          | Done   |
| 72  | The application shall be able to log in a user within 5 seconds.                                                                                               | B                |          | Done   |
| 73  | The application’s source code must have proper documentation and guides for code contributors.                                                                 | B                |          | Done   |
| 74  | The application shall not accept advertising.                                                                                                                  | C                |          | Done   |
| 75  | The application’s source code shall be available for other users to view, fork and make pull requests on.                                                      | C                |          | Done   |
| 76  | The application must be usable on any smart watch with browser capabilities.                                                                                   | C                |          |        |
| 77  | The application shall have a public facing API for third party actors to get public/authorized data.                                                           | C                |          |        |

## Use cases

The use cases below try to envelop as many A requirements and edge cases as possible and should give a clear image of the application´s core functionality as the team viewed it in the beginning of sprint 3 when programming began.

---

**Name:**

A new user, searches for openFOLF on a search engine, launces the app and signs up.

**Number:** 1

**Priority:** A

**Precondition:**

- User must have internet connection.
- User must be able to find the site using search engines.

**Description (base flow):**

A user has heard of an app called openFOLF. He uses a search engine and looks for openFOLF and finds openfolf.net.

On the website there are some general information about openFOLF and a launch app button. He presses launch app and opens the application at the address app.openfolf.net. He sees a login page and from there he selects signup. There he registers an email, username and password and selects register.

He is greeted with a screen asking him to confirm his email. He goes to his email and there is a link that takes him to the front page of the application.

**Alternative flow:**

- A user, from his browser, goes straight to openfolf.net
- A user, from his browser, goes straight to app.openfolf.net
- A user tries to find it in the app store on their mobile device but are unable to find it. Because of that they search for it on a search engine.
- User enters a wrong password or username, gets a warning message.
- The user is already a registered user (see use case 2: A registered user logs in to openFOLF).

**Postcondition:**

- User is a registered user and signed in.

**Source (requirements):** 1, 17, 67

**Actors:** Casual folf players, dedicated folf players.

**Authors:** Dagur, Arnar.

---

**Name:**

A registered user logs in to openFOLF.

**Number:** 2

**Priority:** A

**Precondition:**

- User must have internet connection.
- User must be a registered user.

**Description (base flow):**

User goes to openfolf.net and selects launch app. In the application he is greeted by a login screen where he is asked to login with a username and password. The user presses the login button and is signed in. The application landing screen is opened.

**Alternative flow:**

- User goes straight to app.openfolf.net to open the application.
- The user, from his mobile selects the openFOLF icon on his home screen. He sees a splash screen.
- The application remembers the user and automatically logs him in and goes straight to the application’s main screen.
- The user uses email/username and password to login.
- The user´s email/username or password is incorrect.

**Postcondition:**

- The user is signed in.

**Source (requirements):** 2, 4, 70

**Actors:** Casual folf players, dedicated folf players.

**Authors:** Dagur, Arnar.

---

**Name:**

User selects a course he is going to play on.

**Number:** 3

**Priority:** A

**Precondition:**

- User must be a registered user and logged in.

**Description (base flow):**

From the openFOLF home screen he selects Play game. He is greeted with the Select Course page. There the user sees a list of available courses in alphabetical order and at the top is play unspecified course. He selects a course in the list he wants to play. The user is redirected to the Game lobby page.

**Alternative flow:**

- The user has allowed openFOLF to use his geolocation and the list of available courses is displayed in order of proximity (Req 25).
- The user has not allowed geolocation but has already played several courses before. Those courses recently played are listed with the most recently played first then the alphabetical order.
- The user does not have a network connection; the courses available when he was last connected are listed in alphabetical order.
- The user does not want to select a specific course or does not find his course on the list, selects play unspecified course. Gets redirected to a set custom course (see use case 10).

**Postcondition:**

- The user has selected a course to play on.

**Source (requirements):** 5, 25

**Actors:** Casual folf players, dedicated folf players.

**Authors:** Arnar.

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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
