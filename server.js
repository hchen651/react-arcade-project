const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");
//const multer = require('multer');
//const upload = multer({dest:__dirname + '/uploads/images'});

const routes = require("./routes");
//const users = require("./routes/api/users");

const app = express();
const PORT = process.env.PORT || 3001;

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  console.log("in production");
  app.use(express.static(path.join(__dirname, "client/build")));
}
app.use(express.static(path.join(__dirname, "client/public")));

// Connect to the Mongo DB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

//Alternative MongoDB connection, Commented out for testing
//mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_mf63n599:pp5dovtcjhr89fn4a7ueount1j@ds261486.mlab.com:61486/heroku_mf63n599");

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

//multer middleware for image uploading
// app.post('/upload', upload.single('photo'), (req, res) => {
//   if(req.file) {
//     res.json(req.file);
//   }
//   else throw 'error';
// })

// Routes - old
//app.use("/api/users", users);

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
