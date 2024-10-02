import React, { useState } from 'react';

const RecordsTable = ({ records, onSelectRecords }) => {
    const [selectedRecords, setSelectedRecords] = useState([]);

    // Handle selecting/deselecting a single record
    const handleCheckboxChange = (record) => {
        let updatedSelectedRecords;
        if (selectedRecords.includes(record)) {
            updatedSelectedRecords = selectedRecords.filter((item) => item !== record);
        } else {
            updatedSelectedRecords = [...selectedRecords, record];
        }
        setSelectedRecords(updatedSelectedRecords);
        if (onSelectRecords) {
            onSelectRecords(updatedSelectedRecords); // Call parent function only if it exists
        }
    };

    // Handle selecting/deselecting all records
    const handleSelectAllChange = () => {
        if (selectedRecords.length === records.length) {
            setSelectedRecords([]);
            if (onSelectRecords) {
                onSelectRecords([]); // Deselect all if function is provided
            }
        } else {
            setSelectedRecords(records);
            if (onSelectRecords) {
                onSelectRecords(records); // Select all if function is provided
            }
        }
    };

    return (
        <div className="overflow-y-scroll h-[70vh]">
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
                        <th className="py-2 px-4 border-b">Cheque Number</th>
                        <th className="py-2 px-4 border-b">Receipt Number</th>
                        <th className="py-2 px-4 border-b">Referred By</th>
                        <th className="py-2 px-4 border-b">Address Line 1</th>
                        <th className="py-2 px-4 border-b">Address Line 2</th>
                        <th className="py-2 px-4 border-b">City</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((record, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="py-2 px-4 border-b">
                                <input
                                    type="checkbox"
                                    checked={selectedRecords.includes(record)}
                                    onChange={() => handleCheckboxChange(record)}
                                />
                            </td>
                            <td className="py-2 px-4 border-b">{record.name}</td>
                            <td className="py-2 px-4 border-b">{record.date}</td>
                            <td className="py-2 px-4 border-b">{record.panNumber}</td>
                            <td className="py-2 px-4 border-b">{record.aadharNumber}</td>
                            <td className="py-2 px-4 border-b">{record.amount}</td>
                            <td className="py-2 px-4 border-b">{record.chequeNumber}</td>
                            <td className="py-2 px-4 border-b">{record.receiptNumber}</td>
                            <td className="py-2 px-4 border-b">{record.referredBy}</td>
                            <td className="py-2 px-4 border-b">{record.address1}</td>
                            <td className="py-2 px-4 border-b">{record.address2}</td>
                            <td className="py-2 px-4 border-b">{record.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RecordsTable;
