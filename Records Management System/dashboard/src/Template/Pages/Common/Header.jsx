import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo Section */}
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <a href="#" className='font-medium text-center hover:cursor-pointer no-underline  hover:ease-in hover:duration-400 text-lg text-orange-500'>National Congress Party</a>

                            </div>
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a
                                    href="#"
                                    className="text-gray-300 text-lg hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                                >
                                    Dashboard
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-300 text-lg hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                                >
                                    View All Users
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-300 text-lg hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                                >
                                    All your Entries
                                </a>
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
                            <button
                                className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-red-500 transition ease-in-out duration-200"
                            >
                                Login
                                {/* Change to 'Logout' based on authentication state */}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
