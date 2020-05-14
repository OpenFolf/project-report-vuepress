# Appendix 2

A rough representation of the GraphQL schema in the application.

```graphql
type User @model {
  id: ID!
  username: String
  email: String
  gamesPlayed: [Player] @connection(name: "PlayedGame")
  defTee: Tee
  defMode: Mode
}
​
type Player @model {
  id: ID!
  user: User @connection(name: "PlayedGame")
  game: Game @connection(name: "GamePlayed")
  totalScore: String
  scoreArray: [String]
}
​
type Game @model {
  id: ID!
  course: Course @connection
  owner: User @connection
  players: [Player] @connection(name: "GamePlayed")
  lobbyCode: String
  gameStatus: String
  gameDate: String
}
​
type Course @model {
  id: ID!
  name: String
  holeCount: String
  holes: [Hole] @connection
  teetype: String
  baskettype: String
  description: String
  latitude: String
  longitude: String
  red: Boolean
  white: Boolean
  blue: Boolean
  yellow: Boolean
  course_photo_url_medium: String
}
​
type Hole @model {
  id: ID!
  no: String
  course: Course @connection
  redLength: String
  whiteLength: String
  blueLength: String
  yellowLength: String
  redPar: String
  whitePar: String
  bluePar: String
  yellowPar: String
}
​
enum Mode {
  LIGHT
  DARK
}
​
enum Tee {
  RED
  WHITE
  BLUE
  YELLOW
}
```
