// SignUpBtn.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom';
const SignUpBtn = () => {
    const navigate = useNavigate();
    const handleSignUp = () => {
        navigate('/signup');
    };
    return (
        <div>
            <button onClick={handleSignUp}
                className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-red-500 transition ease-in-out duration-200"
            >
                Sign Up
            </button>
        </div>
    )
}

export default SignUpBtn
