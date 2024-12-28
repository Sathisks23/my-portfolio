"use client";

import React from "react";

const AdminDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-xl font-semibold mb-4">Manage Users</h2>
          <p className="text-gray-600">View and manage all registered users.</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Go to Users
          </button>
        </div>

        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-xl font-semibold mb-4">Manage Posts</h2>
          <p className="text-gray-600">View, edit, and delete posts created by users.</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Go to Posts
          </button>
        </div>

        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-xl font-semibold mb-4">Analytics</h2>
          <p className="text-gray-600">View website statistics and performance metrics.</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View Analytics
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
