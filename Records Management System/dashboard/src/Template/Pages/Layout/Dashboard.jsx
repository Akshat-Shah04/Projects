import React, { useEffect, useState } from 'react';
import RecordsTable from './RecordsTable'; // Adjust the path as necessary
import Header from '../Common/Header';
import ButtonGroupCRUD from './ButtonGroupCRUD';
import AddRecord from '../Functionalities/AddRecord';

const Dashboard = () => {
    const [records, setRecords] = useState([]);
    const [selectedRecords, setSelectedRecords] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecords = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://66b6fcb27f7b1c6d8f1a98c0.mockapi.io/api/a1/client');
                if (!response.ok) throw new Error('Failed to fetch data');
                const data = await response.json();
                setRecords(data);
            } catch (error) {
                console.error('Error fetching records:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRecords();
    }, []);

    const handleSelectRecords = (selected) => {
        setSelectedRecords(selected); // Update the selected records state
    };

    return (
        <div>
            <Header />
            <div className="p-6">
            <ButtonGroupCRUD />
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    records.length === 0 ? (
                        <div>No records available</div>
                    ) : (
                        <RecordsTable
                            records={records}
                            onSelectRecords={handleSelectRecords}
                        />
                    )
                )}


            </div>
        </div>
    );
};

export default Dashboard;
