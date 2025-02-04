import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './userList.css';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function UserList() {
  const [data, setData] = useState([]);

  // Fetch user data from backend API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/users"); // Fetch all users
        console.log("Fetched users from backend:", response.data); // Debugging
        setData(response.data); // Set state with user data
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  // Handle user deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/users/${id}`);
      setData((prevData) => prevData.filter((user) => user._id !== id)); // Remove deleted user
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 200 },
    {
      field: 'username',
      headerName: 'User',
      width: 150,
      renderCell: (params) => (
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar || "https://via.placeholder.com/50"} alt="" />
          {params.row.username}
        </div>
      ),
    },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    { field: 'address', headerName: 'Address', width: 200 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <>
          <Link to={`/user/${params.row._id}`}>
            <button className="userListEdit">Edit</button>
          </Link>
          <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row._id)} />
        </>
      ),
    },
  ];

  return (
    <div className="userList">
      <Paper sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          getRowId={(row) => row._id} // Ensure unique IDs
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableRowSelectionOnClick
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  );
}
