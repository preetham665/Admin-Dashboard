require("dotenv").config({ path: "../.env" }); // Ensure environment variables are loaded
const mongoose = require("mongoose");
const connectDB = require("../config/db"); // Import DB connection function
const User = require("../models/User"); // Import User model

// Debugging: Print MONGO_URI to check if it's loaded
console.log("Using MongoDB URI:", process.env.MONGO_URI);

(async () => {
  await connectDB(); // Ensure connection before performing DB operations

  const users = [
    {
      username: "john_doe",
      fullName: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
      address: "123 Main St",
      avatar: "https://via.placeholder.com/150",
    },
    {
      username: "jane_doe",
      fullName: "Jane Doe",
      email: "jane@example.com",
      phone: "0987654321",
      address: "456 Elm St",
      avatar: "https://via.placeholder.com/150",
    },
    
    {
      username: "jane_doe",
      fullName: "Jane Doe",
      email: "jane@example.com",
      phone: "0987654321",
      address: "456 Elm St",
      avatar: "https://via.placeholder.com/150",
    },
    {
      username: "jane_doe",
      fullName: "Jane Doe",
      email: "jane@example.com",
      phone: "0987654321",
      address: "456 Elm St",
      avatar: "https://via.placeholder.com/150",
    },
    
  ];

  try {
    console.log("Clearing existing users...");
    await User.deleteMany(); // Delete all users
    console.log("Existing users removed.");

    console.log("Seeding new users...");
    await User.insertMany(users);
    console.log("Database seeded successfully!");

    mongoose.disconnect(); // Close connection after seeding
  } catch (err) {
    console.error("Error seeding the database:", err.message);
    mongoose.disconnect();
  }
})();
