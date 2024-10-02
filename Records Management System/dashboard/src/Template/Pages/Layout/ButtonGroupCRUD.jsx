import React from 'react'

const ButtonGroupCRUD = () => {
    return (
        <div className='d-flex flex-row gap-2 flex-wrap justify-evenly mb-3'>
            <button to="/addRecord" className='bg-amber-400 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-md grow'>Add Record</button>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md grow'>Export Records</button>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md grow'>Delete Records</button>
            <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md grow'>Print Records</button>
        </div>
    )
}

export default ButtonGroupCRUD
