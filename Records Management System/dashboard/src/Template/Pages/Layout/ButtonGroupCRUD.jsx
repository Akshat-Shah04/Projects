import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonGroupCRUD = () => {
    const navigate = useNavigate()
    const handleAdd = () => {
        navigate('/addRecord')
    }
    const handleExport = () => {
        console.log("Export Records clicked");
    };

    const handleDelete = () => {
        console.log("Delete Records clicked");
    };

    const handlePrint = () => {
        console.log("Print Records clicked");
    };

    return (
        <div className='d-flex flex-row gap-2 flex-wrap justify-evenly mb-3'>
            <button onClick={handleAdd} className='bg-amber-400 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-md grow'>Add Record</button>
            <button onClick={handleExport} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md grow'>Export Records</button>
            <button onClick={handleDelete} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md grow'>Delete Records</button>
            <button onClick={handlePrint} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md grow'>Print Records</button>
        </div>
    )
}

export default ButtonGroupCRUD
