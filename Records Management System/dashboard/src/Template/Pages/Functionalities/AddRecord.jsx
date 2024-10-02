// AddRecord.jsx
import React, { useState } from 'react';

const AddRecord = ({ onAddRecord }) => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        panNumber: '',
        amount: '',
        chequeNumber: '',
        receiptNumber: '',
        city: '',
        referredBy: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://66b6fcb27f7b1c6d8f1a98c0.mockapi.io/api/a1/client', { // Replace with your API endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to add record');
            }

            const newRecord = await response.json();
            alert('Record added successfully!'); // Alert on successful addition
            onAddRecord(newRecord); // Call the parent function to update the dashboard directly


            setFormData({ // Reset form data
                name: '',
                date: '',
                panNumber: '',
                amount: '',
                chequeNumber: '',
                receiptNumber: '',
                city: '',
                referredBy: '',
            });
        } catch (error) {
            console.error('Error adding record:', error);
            alert('Error adding record: ' + error.message); // Alert on error
        }
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="w-3/4 mt-12 mb-12 mx-auto p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Add New Record</h2>
                <form onSubmit={handleSubmit}>
                    {/* Form Fields */}
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <label className="block text-gray-700 font-semibold mb-1">Name <span className='inline-block me-4 text-red-600'>*</span></label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="block text-gray-700 font-semibold mb-1">Date <span className='text-red-600'>*</span></label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            />
                        </div>
                    </div>
                    {/* Add other form fields for PAN number, amount, cheque number, receipt number, city, and referred by */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">PAN Number <span className='text-red-600'>*</span></label>
                            <input
                                type="text"
                                name="panNumber"
                                value={formData.panNumber}
                                onChange={handleChange}
                                className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Amount Paid <span className='text-red-600'>*</span></label>
                            <input
                                type="number"
                                name="amount"
                                value={formData.amount}
                                onChange={handleChange}
                                className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Cheque Number <span className='text-red-600'>*</span></label>
                            <input
                                type="text"
                                name="chequeNumber"
                                value={formData.chequeNumber}
                                onChange={handleChange}
                                className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Receipt Number <span className='text-red-600'>*</span></label>
                            <input
                                type="text"
                                name="receiptNumber"
                                value={formData.receiptNumber}
                                onChange={handleChange}
                                className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">City <span className='text-red-600'>*</span></label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Referred By </label>
                            <input
                                type="text"
                                name="referredBy"
                                value={formData.referredBy}
                                onChange={handleChange}
                                className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddRecord;
