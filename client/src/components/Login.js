import React, { useState, useEffect } from 'react';
import API from '../services/api';  // import your API helper
 const Dashboard = () => {
  const [showToken, setShowToken] = useState(false);
  const [userCount, setUserCount] = useState(null);

  const token = localStorage.getItem('token');

 useEffect(() => {
  const fetchUserCount = async () => {
    try {
      const res = await API.get('/users/count');
      setUserCount(res.data);
    } catch (error) {
      console.error('Error fetching user count:', error);
      setUserCount('N/A');
    }
  };

  fetchUserCount();
}, []);
 

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6 text-xl font-bold text-green-600 border-b">Spring Dashboard</div>
        <nav className="p-4">
          <ul className="space-y-4 text-gray-700">
            <li className="hover:text-green-600 cursor-pointer">Overview</li>
            <li
              className="hover:text-green-600 cursor-pointer"
              onClick={() => setShowToken(!showToken)}
              title="Click to toggle token"
            >
              Users (View Token)
            </li>
            <li className="hover:text-green-600 cursor-pointer">Reports</li>
            <li className="hover:text-green-600 cursor-pointer">Settings</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="mb-6 border-b pb-4 flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-gray-800">Welcome to the Dashboard</h1>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Logout
          </button>
        </header>

        {showToken && (
          <div className="mb-6 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded break-all">
            <strong>Your Token:</strong>
            <p>{token || 'No token found in localStorage'}</p>
          </div>
        )}

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">Total Users</h2>
            <p className="text-3xl text-green-600 font-bold">
              {userCount !== null ? userCount : 'Loading...'}
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">Active Sessions</h2>
            <p className="text-3xl text-green-600 font-bold">87</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">Server Status</h2>
            <p className="text-lg text-gray-600">✅ All systems operational</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
