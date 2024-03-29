const cors = require('cors');
const passport = require('./passport-setup');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

// Sets up all the required initial middleware for the app
module.exports = function(app) {
  app.use(session({
    secret: 'your secret',
    resave: false,
    saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(
    cors({
      origin: process.env.FRONTEND_ENDPOINT,
      credentials: true
    })
  );
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
};