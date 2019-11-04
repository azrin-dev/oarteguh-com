const mongoose = require('mongoose');

// Make sure we are running node 7.6+
const [major, minor] = process.versions.node.split('.').map(parseFloat);
if (major < 11 || (major === 11 && minor <= 8)) {
  console.log('Please update node version');
  process.exit();
}

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env', useUnifiedTopology: true });

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

// READY?! Let's go!
// // Import db model
require('./server/models/User');
require('./server/models/Post');
require('./server/models/Comment');
require('./server/models/Like');

const app = require('./app');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});