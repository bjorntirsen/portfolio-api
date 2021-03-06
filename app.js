const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const csp = require('express-csp');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
const expressEjsLayout = require('express-ejs-layouts');
const favicon = require('serve-favicon');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const viewRouter = require('./routes/viewRoutes');
const apiRouter = require('./routes/apiRoutes');
const adminRouter = require('./routes/adminRoutes');
const cspConfig = require('./cspConfig');

const app = express();

app.enable('trust proxy');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Global Middleware
// Serving static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'img', 'favicon.ico')));

app.use(cors());
app.options('*', cors());

// Set security HTTP headers
app.use(helmet());
csp.extend(app, cspConfig);

app.use(expressEjsLayout);

// Dev logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api', limiter);

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

// Data sanitization against XSS
app.use(xss());

// Prevent param pollution
app.use(hpp());

app.use(compression());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(`Request made at ${req.requestTime}`);
  next();
});

//Routes
app.use('/', viewRouter);
app.use('/api/v1/', apiRouter);
app.use('/admin/', adminRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404));
});

//Error handler
app.use(globalErrorHandler);

module.exports = app;
