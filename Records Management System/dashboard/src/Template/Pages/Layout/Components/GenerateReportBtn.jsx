import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const GenerateReportBtn = () => {
    const location = useLocation();
    const isLockHeaderPage = location.pathname === '/login' || location.pathname === '/signup';
    return (
        <div>
            {!isLockHeaderPage && (
                <Link disabled to="" className="text-gray-300 text-lg hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">
                    Generate Report
                </Link>
            )}

            {isLockHeaderPage && (
                <Link to="" className="text-gray-300 text-lg hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">
                    Generate Report
                </Link>
            )}
        </div>
    )
}

export default GenerateReportBtn
