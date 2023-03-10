const conString = process.env.ATLAS_URI;
const mongoose = require('mongoose');

// Set up default mongoose connection
mongoose.connect(conString, { useNewUrlParser: true, useUnifiedTopology: true });

// Get mongoose connection object
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Bind connection to open event (to get notification of successful connection)
db.once('open', function() {
  console.log('MongoDB connected!');
});

module.exports = db;