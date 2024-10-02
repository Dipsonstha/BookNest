import React, { useState, useEffect } from "react";
import axios from "axios";

const UserProfile = () => {
  // const [user, setUser] = useState({});
  const user = JSON.parse(localStorage.getItem("user")); // Adjust if using cookies

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  useEffect(() => {
    // Fetch the logged-in user's data
    const fetchUserData = async () => {
      try {
        // Assuming the token is stored in localStorage
        const user = JSON.parse(localStorage.getItem("user")); // Adjust if using cookies
        console.log(user);
        const response = await axios.get(
          `http://localhost:80/BookNest/bookstore-backend/user/getOneUser.php?id=${user?.id}`
        );
        console.log(response.data);
        // setUser(response.data);
        // setFormData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:80/BookNest/bookstore-backend/user/updateUser.php",
        formData
      );
      setUser(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-lg">
      {/* Profile Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/100"
            alt="User Avatar"
            className="w-20 h-20 rounded-full mr-4"
          />
          <div>
            <h2 className="text-2xl font-bold">{user.fullname}</h2>
          </div>
        </div>
        <button
          onClick={handleEdit}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-4 text-center mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-2xl font-bold">{user.totalListings}</h3>
          <p className="text-gray-500">Total Listings</p>
        </div>
      </div>

      {/* Profile Information Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4">Manage Your Profile</h3>
        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex justify-between">
              <label className="font-medium">Your Name:</label>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="border rounded-md p-1"
                required
              />
            </div>
            <div className="flex justify-between">
              <label className="font-medium">Email Address:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-md p-1"
                required
              />
            </div>
            <div className="flex justify-between">
              <label className="font-medium">Phone Number:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength={10}
                className="border rounded-md p-1"
              />
            </div>
            <div className="flex justify-between">
              <label className="font-medium">Address:</label>
              <input
                type="tel"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="border rounded-md p-1"
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition"
            >
              Save Changes
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="font-medium">Your Name:</span>
              <span>{user.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Email Address:</span>
              <span>{user.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Phone Number:</span>
              <span>{user.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Address:</span>
              <span>{user.address}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
