const path = require('path');
const express = require('express');
const expressEjsLayout = require('express-ejs-layouts');
const morgan = require('morgan');

const viewRouter = require('./routes/viewRoutes');
//const apiRouter = require('./routes/apiRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Global Middleware
app.use(expressEjsLayout);
// Serving static files
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(`Request made at ${req.requestTime}`);
  next();
});
// Dev logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Routes
app.use('/', viewRouter);
//app.use('/api/v1/', apiRouter);

module.exports = app;
