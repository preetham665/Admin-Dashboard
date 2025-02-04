import React, { useState, useEffect } from "react";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./user.css";

export default function User() {
  const { id } = useParams(); // Capture the user ID from the URL
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [updatedUser, setUpdatedUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ✅ Fetch user details from backend
  useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log(`Fetching user from: http://localhost:3000/api/users/${id}`);
        const res = await axios.get(`http://localhost:3000/api/users/${id}`);
        console.log("User fetched successfully:", res.data);
        setUser(res.data);
        setUpdatedUser(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error details:", err);
        setError("Error fetching user details: " + (err.response?.data?.message || err.message || "Unknown error"));
        setLoading(false);
      }
    };
    if (id) {
      fetchUser();
    }
  }, [id]);

  // ✅ Handle input changes
  const handleInputChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  // ✅ Handle user update
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/users/${id}`, updatedUser);
      alert("User updated successfully!");
      navigate("/userList"); // Redirect to the user list
    } catch (err) {
      console.error("Error updating user:", err);
      alert("Failed to update user details");
    }
  };

  if (loading) return <p>Loading user details...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        {/* ✅ User Details Display */}
        <div className="userShow">
          <div className="userShowTop">
            <img src={user.avatar || "https://via.placeholder.com/100"} alt="User Avatar" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.username}</span>
              <span className="userShowUserTitle">{user.jobTitle || "No Title"}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user.username}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{user.birthDate || "Not provided"}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{user.phone}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{user.address}</span>
            </div>
          </div>
        </div>

        {/* ✅ User Edit Form */}
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm" onSubmit={handleUpdate}>
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input type="text" name="username" value={updatedUser.username || ""} onChange={handleInputChange} className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input type="text" name="fullName" value={updatedUser.fullName || ""} onChange={handleInputChange} className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input type="email" name="email" value={updatedUser.email || ""} onChange={handleInputChange} className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input type="text" name="phone" value={updatedUser.phone || ""} onChange={handleInputChange} className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input type="text" name="address" value={updatedUser.address || ""} onChange={handleInputChange} className="userUpdateInput" />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img className="userUpdateImg" src={user.avatar || "https://via.placeholder.com/100"} alt="User Avatar" />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
