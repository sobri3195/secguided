import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-dark-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="bg-dark-800 rounded-lg p-6 space-y-2">
        <p>Welcome to your dashboard! This is a protected area.</p>
        <p className="text-gray-400">Login sebagai: <span className="text-cyan-300 capitalize">{user?.role || 'student'}</span></p>
        <p className="text-gray-500 text-sm">User: {user?.email}</p>
      </div>
    </div>
  );
};

export default Dashboard;
