import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Login from './pages/login.page';
import SignUp from './pages/auth.page';
import SearchList from './pages/SearchList';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" replace />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/search-list" element={<SearchList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
