import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/login" element={<ProtectedLogin />}/>
        <Route path="/register" element={<ProtectedRegister />}/>
        <Route path="/chats" element={
        <ProtectedRoute>
            <ChatList />
        </ProtectedRoute>
        } />
        <Route path="/chat/:conversationId" element={<Conversation />} /> */}
      </Routes>
    </Router>
  )
}
