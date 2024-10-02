import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RecordsTable = ({ records, onSelectRecords, onRefetchRecords }) => {
    const [selectedRecords, setSelectedRecords] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleCheckboxChange = (record) => {
        const recordId = record.id; // Assuming each record has a unique ID
        const updatedSelectedRecords = selectedRecords.includes(recordId)
            ? selectedRecords.filter((item) => item !== recordId)
            : [...selectedRecords, recordId];

        setSelectedRecords(updatedSelectedRecords);
        if (onSelectRecords) {
            onSelectRecords(updatedSelectedRecords);
        }
    };

    const handleSelectAllChange = () => {
        if (selectedRecords.length === records.length) {
            setSelectedRecords([]);
            if (onSelectRecords) {
                onSelectRecords([]);
            }
        } else {
            const allRecordIds = records.map(record => record.id); // Get all record IDs
            setSelectedRecords(allRecordIds);
            if (onSelectRecords) {
                onSelectRecords(allRecordIds);
            }
        }
    };

    const handleEdit = (record) => {
        if (!record) {
            alert('No record selected for editing!');
        } else {
            navigate('/editRecord', { state: { record, onRefetchRecords } }); // Pass onRefetchRecords to EditRecord
        }
    };

    const filteredRecords = records.filter(record =>
        record.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="overflow-y-scroll h-[70vh]">
            <div className="bg-white border border-gray-300 rounded-lg shadow-md px-4 mt-2 mb-2">
            <input
                type="text"
                placeholder="Search by Name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border p-2 mb-4"
            />
            </div>
            <table className="min-w-full bg-white border border-gray-300">
                <thead className="sticky top-0 bg-gray-200 z-10">
                    <tr>
                        <th className="py-2 px-4 border-b">
                            <input
                                type="checkbox"
                                checked={selectedRecords.length === records.length}
                                onChange={handleSelectAllChange}
                            />
                        </th>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Date</th>
                        <th className="py-2 px-4 border-b">PAN Number</th>
                        <th className="py-2 px-4 border-b">Aadhar Number</th>
                        <th className="py-2 px-4 border-b">Amount</th>
                        <th className="py-2 px-4 border-b">Phone Number</th>
                        <th className="py-2 px-4 border-b">Cheque Number</th>
                        <th className="py-2 px-4 border-b">Receipt Number</th>
                        <th className="py-2 px-4 border-b">Referred By</th>
                        <th className="py-2 px-4 border-b">Address Line 1</th>
                        <th className="py-2 px-4 border-b">Address Line 2</th>
                        <th className="py-2 px-4 border-b">City</th>
                        <th className="py-2  px-4 border-b"></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredRecords.map((record) => (
                        <tr key={record.id} className="hover:bg-gray-100">
                            <td className="py-2 px-4 border-b">
                                <input
                                    type="checkbox"
                                    checked={selectedRecords.includes(record.id)} // Check against ID
                                    onChange={() => handleCheckboxChange(record)}
                                />
                            </td>
                            <td className="py-2 text-sm px-4 border-b">{record.name}</td>
                            <td className="py-2 text-sm px-4 border-b">{record.date}</td>
                            <td className="py-2 text-sm px-4 text-nowrap border-b">{record.panNumber}</td>
                            <td className="py-2 text-sm px-4 text-nowrap border-b">{record.aadharNumber}</td>
                            <td className="py-2 text-sm px-4 text-nowrap border-b">{record.amount}</td>
                            <td className="py-2 text-sm px-4 text-nowrap border-b">{record.phone}</td>
                            <td className="py-2 text-sm px-4 text-nowrap border-b">{record.chequeNumber}</td>
                            <td className="py-2 text-sm px-4 text-nowrap border-b">{record.receiptNumber}</td>
                            <td className="py-2 text-sm px-4 border-b">{record.referredBy}</td>
                            <td className="py-2 text-sm px-4 border-b">{record.address1}</td>
                            <td className="py-2 text-sm px-4 border-b">{record.address2}</td>
                            <td className="py-2 text-sm px-4 border-b">{record.city}</td>
                            <td className="py-2 px-4 border-b">
                                <button
                                    onClick={() => handleEdit(record)}
                                    className='bg-blue-700 rounded-lg shadow-md shadow-slate-900 px-4 py-2 text-white hover:animate-pulse hover:bg-blue-500 hover:duration-100 hover:ease-in-out'
                                >
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RecordsTable;
