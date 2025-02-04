// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// require('dotenv').config(); // Load environment variables
// console.log('MongoDB URI:', process.env.MONGO_URI);


// const app = express();
// const PORT = process.env.PORT || 5000;
// const mongoURI = process.env.MONGO_URI; // Load MONGO_URI from .env

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Connect to MongoDB
// mongoose
//   .connect(mongoURI) // `mongoURI` is your connection string
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => {
//     console.error('Failed to connect to MongoDB:', err.message);
//     console.error('Error details:', err);
//   });
// // Define routes (example)
// app.get('/', (req, res) => {
//   res.send('Server is running...');
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// console.log('MongoDB URI:', process.env.MONGO_URI);



const mongoose = require("mongoose");
require("dotenv").config(); // Ensure environment variables are loaded

const connectDB = async () => {
  try {
    console.log("Using MongoDB URI:", process.env.MONGO_URI); // Debugging
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process if connection fails
  }
};

module.exports = connectDB;
