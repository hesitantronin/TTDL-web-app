import React, { useState } from 'react';
import generalStyle from './stylesheets/generalStyle.module.css';
import dropdownStyle from './stylesheets/dropdownStyle.module.css';
import Navbar from './navbar';

function UserDataOverview() {
    //when taking data from endpoint take all data every half hour and display it.
    const userRecords = [
        { date: "2024-05-16", intervals: [{ timestamp: "8:00-8:30", sitsInChair: "ja" }, { timestamp: "9:00-9:30", sitsInChair: "Nee" }, { timestamp: "10:00-10:30", sitsInChair: "ja" }] },
        { date: "2024-05-17", intervals: [{ timestamp: "9:00-9:30", sitsInChair: "nee" }, { timestamp: "10:30-11:00", sitsInChair: "ja" }, { timestamp: "12:00-12:30", sitsInChair: "Nee" }] },
        { date: "2024-05-18", intervals: [{ timestamp: "10:00-10:30", sitsInChair: "ja" }, { timestamp: "11:00-11:30", sitsInChair: "ja" }, { timestamp: "12:30-1:00", sitsInChair: "Nee" }] },
        { date: "2024-05-19", intervals: [{ timestamp: "11:00-11:30", sitsInChair: "nee" }, { timestamp: "1:00-1:30", sitsInChair: "ja" }, { timestamp: "2:00-2:30", sitsInChair: "Nee" }] },
        { date: "2024-05-20", intervals: [{ timestamp: "12:00-12:30", sitsInChair: "ja" }, { timestamp: "1:30-2:00", sitsInChair: "ja" }, { timestamp: "3:00-3:30", sitsInChair: "Nee" }] }
    ];

    const dates = userRecords.map(record => record.date);
    const [selectedDate, setSelectedDate] = useState(dates[0]);

    const handleDateChange = (event: any) => {
        setSelectedDate(event.target.value);
    };

    const selectedRecord = userRecords.find(record => record.date === selectedDate);
    if (!selectedRecord) {
        return null;
    }

    return (
        <div>
            <Navbar />
            <div className={generalStyle.container}>
                <div className={generalStyle.box}>
                    <h2>gebruiker 1 data</h2>
                    <div style={{ position: 'absolute', right: -60, width: '30%' }}>
                        <button className={generalStyle.button}>Download data</button>
                    </div>
                    <select 
                        onChange={handleDateChange} 
                        className={dropdownStyle.dropdown}
                    >
                        {dates.map((date, index) => (
                            <option key={index} value={date}>
                                {date}
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
