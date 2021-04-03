### Repository for Node.js mentoring program

#### How to run Express app

1. Clone this repository
1. Run `npm install` to install dependencies
1. Run `npm run dev` to run server

#### API
By default port: 3000

GET '/' - Home page

GET '/users' - users list

POST '/users?login="string"&password="string"&age="number"' - create new user (All query parameters required)

GET '/users/:id' - user by id

PUT '/users/:id?login="string"&password="string"&age="number"' - update user by id (All query parameters optional)

DELETE '/users/:id' - delete user by id
