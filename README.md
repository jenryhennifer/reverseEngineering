# reverseEngineering

## Installation

``` 
npm install
```
This will install:
* bcryptjs, express, express-session, mysql2, passport, passport-local, sequelize

# server.js

This file requires express and express-session to be installed through npm install. It also requires passport.js and the models folder. 

The port is called and fisrt checks for either the environment variable PORT or will default to port 8080 as a local host:
```
var PORT = process.env.PORT || 8080;
```
Express uses urlencoded (library parsing), json(incoming JSON request parsing), static (service to static files), and session (tracking user login status). It also initializes passport and passport sessions.

Finally, sequelize sync is used to listen to the desired port and log the port information for the user.

```
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
```

# Config

## Middleware: isAuthenticated

This file applies the middleware for restricing routs a useris not allowed to visit if not logged in. Which means if the username and password are not found insisde the database, then the user cannot observe the '/members' URL. 

## convig.json

This connects the app to the database using your own personal server username and password. This will provide access to the database to add and read information.

## passport.js

This file requires [passport.js](https://www.passportjs.org) (used for authentication) with it's passport-local strategy to be installed before running. It also requires the models folder. 

# Routes

## api-routes

API routes navigates the api urls within the app. It uses app.post and app.get to either create or read information. When directed to the /api/login url the user's information is checked against the existing database to ensure they are a current user. The passport authenticate function

## html-routes


# Resources:

* https://www.passportjs.org


passportJS

    https://www.npmjs.com/package/passport

    LOCALSTRATEGY
    The local authentication strategy authenticates users using a username and password. The strategy requires a verify callback, which accepts these credentials and calls done providing a user.