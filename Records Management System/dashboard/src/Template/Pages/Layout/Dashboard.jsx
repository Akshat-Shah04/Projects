import React, { useEffect, useState } from 'react';
import RecordsTable from './RecordsTable'; // Adjust the path as necessary
import Header from '../Common/Header';
import ButtonGroupCRUD from './ButtonGroupCRUD';
import AddRecord from '../Functionalities/AddRecord';

const Dashboard = () => {
    const [records, setRecords] = useState([]);
    const [selectedRecords, setSelectedRecords] = useState([]);

    useEffect(() => {
        const fetchRecords = async () => {
            const response = await fetch('https://66b6fcb27f7b1c6d8f1a98c0.mockapi.io/api/a1/client'); // Replace with your API endpoint
            const data = await response.json();
            setRecords(data);
        };
        fetchRecords();
    }, []);

    // Function to add a new record
    const handleAddRecord = (newRecord) => {
        setRecords((prevRecords) => [...prevRecords, newRecord]); // Directly add the new record
    };

    // Function to handle selected records
    const handleSelectRecords = (selected) => {
        setSelectedRecords(selected); // Update the selected records
    };

    return (
        <div>
            <Header />
            <div className="p-6">
                <ButtonGroupCRUD />
                {/* <AddRecord onAddRecord={handleAddRecord} />  */}

                <RecordsTable 
                    records={records} 
                    onSelectRecords={handleSelectRecords} 
                />
            </div>
        </div>
    );
};

export default Dashboard;
