// LoginBtn.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginBtn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage authentication state
    const navigate = useNavigate();

    const handleNavigate = () => {
        if (isLoggedIn) {
            // Logout functionality (replace with actual logout logic if needed)
            setIsLoggedIn(false);
            alert('Logged out successfully!');
        } else {
            navigate('/login');
        }
    };

    return (
        <div>
            <button
                onClick={handleNavigate}
                className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-red-500 transition ease-in-out duration-200"
            >
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
        </div>
    );
};

export default LoginBtn;
