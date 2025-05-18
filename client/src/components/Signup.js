import React, { useState } from 'react';
 import { useNavigate } from 'react-router-dom';
import API from '../services/api';

const Signup = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/register', form);
      alert('Signup successful!');
      navigate('/login');
    } catch (err) {
      alert('Signup failed!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4">Signup</h2>

        <input      
          className="mb-4 w-full p-2 border rounded"
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
        />

        <input
          className="mb-4 w-full p-2 border rounded"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
