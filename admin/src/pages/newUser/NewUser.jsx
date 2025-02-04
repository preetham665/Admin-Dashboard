import React, { useState } from "react";
import axios from "axios";
import "./newUser.css";
import { useNavigate } from "react-router-dom";

export default function NewUser() {
  const navigate = useNavigate(); // ✅ For redirecting to UserList after creation
  const [userData, setUserData] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    gender: "",
    active: "yes",
    avatar: "https://via.placeholder.com/50", // Default avatar
  });

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/users", userData);
      alert("User created successfully!");
      navigate("/users"); // ✅ Redirect to user list after creation
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Failed to create user. Please try again.");
    }
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm" onSubmit={handleSubmit}>
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" name="username" placeholder="john" onChange={handleChange} required />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" name="fullName" placeholder="John Smith" onChange={handleChange} required />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" name="email" placeholder="john@gmail.com" onChange={handleChange} required />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" name="password" placeholder="password" onChange={handleChange} required />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" name="phone" placeholder="+1 123 456 78" onChange={handleChange} required />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" name="address" placeholder="New York | USA" onChange={handleChange} required />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" value="male" onChange={handleChange} />
            <label>Male</label>
            <input type="radio" name="gender" value="female" onChange={handleChange} />
            <label>Female</label>
            <input type="radio" name="gender" value="other" onChange={handleChange} />
            <label>Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select name="active" className="newUserSelect" onChange={handleChange}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
