//Header.jsx
import React from 'react';
import LoginBtn from '../Layout/Components/LoginBtn';
import WebName from '../Layout/Components/WebName';
import DashboardBtn from '../Layout/Components/DashboardBtn';
import EntriesBtn from '../Layout/Components/EntriesBtn';
import GenerateReportBtn from '../Layout/Components/GenerateReportBtn';
import SignUp from '../Layout/SignUp';
import { useLocation, useNavigate } from 'react-router-dom';
import SignUpBtn from '../Layout/Components/SignUpBtn';
import LogOutBtn from '../Layout/Components/LogOutBtn';

const Header = () => {
    const location = useLocation(); // Get the current path
    const isLoginPage = location.pathname === '/login';
    const isSignUpPage = location.pathname === '/signup';
    
    const navigate = useNavigate()
    const handleLogIn = () => {
        navigate('/login')
    }

    const handleSignUp = () => {
        navigate('/signup')
    }
    return (
        <div>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <WebName />
                            </div>
                            <div className="ml-10 flex items-baseline space-x-4">
                                <DashboardBtn />
                                <EntriesBtn />
                                <GenerateReportBtn />
                                <a
                                    href="#"
                                    className="text-gray-300 text-lg hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                                >
                                    Calendar
                                </a>
                            </div>
                        </div>
                        {/* Login/Logout Button */}
                        <div className="ml-10">
                            {isLoginPage && <SignUpBtn /> }
                            {isSignUpPage && <LoginBtn /> }
                            {(!isLoginPage && !isSignUpPage) && <LogOutBtn />}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
