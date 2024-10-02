import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const DashboardBtn = () => {

    const location = useLocation();
    const isLockHeaderPage = location.pathname === '/login' || location.pathname === '/signup';
    return (
        <div>
            {!isLockHeaderPage && (
                <Link
                    to="/dashboard"
                    className="text-gray-300 text-lg hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                >
                    Dashboard
                </Link>
            )}

            {
                isLockHeaderPage && (
                    <Link
                        className="text-gray-300 text-lg hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                    >
                        Dashboard
                    </Link>
                )
            }


        </div>
    )
}

export default DashboardBtn
