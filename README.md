# Task Tracker
---

## Prerequisite
* [Node.js](https://nodejs.org/en/) installed.
* [MongoDB](https://www.mongodb.com/) installed.

## Installation
* Clone or download this repository.
```
git clone https://github.com/jovanidash21/task-tracker.git
```
* Using a terminal or cmd, navigate to the project directory.
```
cd task-tracker
```
* Install node modules.
```
npm install
```
* Start the MongoDB Server.
```
mongod
``` 
* Open another terminal or cmd and run mongo.
```
mongo
``` 
* Create a database locally using MongoDB on your computer.
```
use task-tracker
```
* Create a ```.env``` file. 
* Copy and paste the texts in ```.env.example``` to ```.env``` and insert the values for each environment variables.
* Open another terminal or cmd and run the project.
```
npm run build
```
* Open a browser and visit ```localhost:3000```.
* Signup to create an account.
* Run in dev mode.
```
npm run dev
```

## NPM Scripts
* ```npm start``` - start the server.
* ```npm run build``` - run the project in production mode.
* ```npm run dev``` - run the project in dev mode.
* ```npm run webpack:prod``` - run the webpack in production mode.
* ```npm run webpack:dev``` - run the webpack in dev mode.
* ```npm run node:prod``` - run the node server in production mode.
* ```npm run node:dev``` - run the node server in dev mode.

## Credits
- [Login Page](http://codepen.io/andytran/pen/GJOBZj)
- [Skel Theme](https://html5up.net/uploads/demos/overflow/)

## Website
[Live Demo](https://task-tracker-jovanidash21.herokuapp.com/)

## License
Licensed under [MIT](https://opensource.org/licenses/mit-license.php).