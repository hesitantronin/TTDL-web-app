import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import generalStyle from './stylesheets/generalStyle.module.css';
import dropdownStyle from './stylesheets/dropdownStyle.module.css';
import Navbar from './navbar';
import { userDataOverviewController } from '../communication/userDataController';

function UserDataOverview() {
    const { id, name, lastName } = useParams();
    const { exportToCSV} = userDataOverviewController();
    const [user, setUser] = useState({ name: `${name} ${lastName}` });

    // Hardcoded user records for now
    const [userRecords, setUserRecords] = useState([
        { date: "2024-05-16", intervals: [{ timestamp: "8:00-8:30", sitsInChair: "ja" }, { timestamp: "9:00-9:30", sitsInChair: "Nee" }, { timestamp: "10:00-10:30", sitsInChair: "ja" }] },
        { date: "2024-05-17", intervals: [{ timestamp: "9:00-9:30", sitsInChair: "nee" }, { timestamp: "10:30-11:00", sitsInChair: "ja" }, { timestamp: "12:00-12:30", sitsInChair: "Nee" }] },
        { date: "2024-05-18", intervals: [{ timestamp: "10:00-10:30", sitsInChair: "ja" }, { timestamp: "11:00-11:30", sitsInChair: "ja" }, { timestamp: "12:30-1:00", sitsInChair: "Nee" }] },
        { date: "2024-05-19", intervals: [{ timestamp: "11:00-11:30", sitsInChair: "nee" }, { timestamp: "1:00-1:30", sitsInChair: "ja" }, { timestamp: "2:00-2:30", sitsInChair: "Nee" }] },
        { date: "2024-05-20", intervals: [{ timestamp: "12:00-12:30", sitsInChair: "ja" }, { timestamp: "1:30-2:00", sitsInChair: "ja" }, { timestamp: "3:00-3:30", sitsInChair: "Nee" }] }
    ]);

    const [selectedDate, setSelectedDate] = useState(userRecords[0].date);

    // useEffect(() => {
    //     const initialize = async () => {
    //         try {
    //             const data = await fetchUserData(id);
    //             setUser(data.user);
    //             setUserRecords(data.records);

    //             if (data.records.length > 0) {
    //                 setSelectedDate(data.records[0].date);
    //             }
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     initialize();
    // }, [id]);


    const handleDateChange = (event: any) => {
        setSelectedDate(event.target.value);
    };

    const handleExport = () => {
        const selectedRecord = userRecords.find(record => record.date === selectedDate);
        if (selectedRecord) {
            const fileName = `${user.name}_${selectedDate}_data.csv`;
            exportToCSV(selectedRecord, fileName);
        } else {
            console.error("geselecteerde data niet gevonden.");
        }
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    const selectedRecord = userRecords.find(record => record.date === selectedDate);
    if (!selectedRecord) {
        return <div>No data available for the selected date.</div>;
    }

    return (
        <div>
            <Navbar />
            <div className={generalStyle.container}>
                <div className={generalStyle.box}>
                    <h2>{user.name}'s zitdata</h2>
                    <div style={{ position: 'absolute', right: -60, width: '30%' }}>
                        <button className={generalStyle.button} onClick={handleExport}>Download data</button>
                    </div>
                    <select 
                        onChange={handleDateChange} 
                        className={dropdownStyle.dropdown}
                        value={selectedDate} // Add this to keep the selected value in sync
                    >
                        {userRecords.map((record, index) => (
                            <option key={index} value={record.date}>
                                {record.date}
                            </option>
                        ))}
                    </select>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Datum</th>
                                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Tijdstip</th>
                                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>zit in stoel</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedRecord.intervals.map((interval, index) => (
                                <tr key={index}>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{selectedRecord.date}</td>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{interval.timestamp}</td>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{interval.sitsInChair}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default UserDataOverview;
