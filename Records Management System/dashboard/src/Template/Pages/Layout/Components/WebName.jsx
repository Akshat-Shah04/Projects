import React from 'react'
import { Link } from 'react-router-dom'

const WebName = () => {
    return (
        <div>
            <Link to="/login" className='font-medium text-center hover:cursor-pointer no-underline  hover:ease-in hover:duration-400 text-lg text-orange-500'>
                National Congress Party
            </Link>

        </div>
    )
}

export default WebName
