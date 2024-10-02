// ButtonCRUD.js
import React, { useState } from 'react';

const ButtonCRUD = ({ records, setRecords }) => {
    const [selectedRecord, setSelectedRecord] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        panNumber: '',
        receiptNumber: '',
        chequeNumber: '',
        referredBy: '',
        city: '',
        date: '',
        amount: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddRecord = () => {
        setRecords([...records, { id: Date.now(), ...formData }]); // Assign a unique id
        setFormData({
            name: '',
            panNumber: '',
            receiptNumber: '',
            chequeNumber: '',
            referredBy: '',
            city: '',
            date: '',
            amount: ''
        });
    };

    const handleEditRecord = (record) => {
        setSelectedRecord(record);
        setFormData(record);
    };

    const handleUpdateRecord = () => {
        setRecords(records.map(record => 
            record.id === selectedRecord.id ? { ...selectedRecord, ...formData } : record
        ));
        setFormData({
            name: '',
            panNumber: '',
            receiptNumber: '',
            chequeNumber: '',
            referredBy: '',
            city: '',
            date: '',
            amount: ''
        });
        setSelectedRecord(null);
    };

    const handleDeleteRecord = (id) => {
        setRecords(records.filter(record => record.id !== id));
    };

    return (
        <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">{selectedRecord ? 'Edit Record' : 'Add New Record'}</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
                {Object.keys(formData).map((key) => (
                    <input
                        key={key}
                        type="text"
                        name={key}
                        value={formData[key]}
                        onChange={handleInputChange}
                        placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                        className="border border-gray-300 rounded-md px-4 py-2"
                    />
                ))}
            </div>
            <button
                onClick={selectedRecord ? handleUpdateRecord : handleAddRecord}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
                {selectedRecord ? 'Update Record' : 'Add Record'}
            </button>

            <h2 className="text-xl font-bold mt-6">Records</h2>
            <div className="mt-4">
                {records.map((record) => (
                    <div key={record.id} className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded">
                        <span>{record.name}</span>
                        <div>
                            <button
                                onClick={() => handleEditRecord(record)}
                                className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDeleteRecord(record.id)}
                                className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 ml-2"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ButtonCRUD;
