const path = require("path");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
// const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
// const hpp = require("hpp");
const cookieParser = require("cookie-parser");

const noteRouter = require("./routes/noteRoutes");
const viewRouter = require("./routes/viewRoutes");

////
const app = express();

// SETTING UP PUG ENGINE
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

///// GLOBAL MIDDLEWARES
// Serving static files
app.use(express.static(path.join(__dirname, "public")));

// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// Body parser, reading data from the body into req.body
app.use(express.json({ limit: "10kb" }));
app.use(bodyParser.json());

// Cookie Parser
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against xss
app.use(xss());

app.use("/api/v1/note", noteRouter);
app.use("/", viewRouter);

module.exports = app;
