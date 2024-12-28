"use client";

import React from "react";

const UserDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-xl font-semibold mb-4">Your Posts</h2>
          <p className="text-gray-600">View and manage posts you’ve created.</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Go to My Posts
          </button>
        </div>

        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
          <p className="text-gray-600">Update your profile and account settings.</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
