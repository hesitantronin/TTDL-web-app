import { useEffect, useState } from 'react';
import generalStyle from './stylesheets/generalStyle.module.css';
import { Link } from 'react-router-dom';  
import Navbar from './navbar';

function UserDataOverview(){
    const userRecords = [
        { date: "2024-05-16", sitsInChair: "Yes", timestamp: "8:00-11:00" },
        { date: "2024-05-17", sitsInChair: "No", timestamp: "9:00-12:00" },
        { date: "2024-05-18", sitsInChair: "Yes", timestamp: "10:00-13:00" },
        { date: "2024-05-19", sitsInChair: "No", timestamp: "11:00-14:00" },
        { date: "2024-05-20", sitsInChair: "Yes", timestamp: "12:00-15:00" }
    ];
    
    return (
        <div>
            <Navbar />
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: 'rgba(184,210,235,255)'
        }}>
            <div style={{
                backgroundColor: 'white',
                width: '800px',
                padding: '50px',
                margin: '20px',
                boxSizing: 'border-box',
                position: 'relative',
                borderRadius: '10px'
            }}>
                <h2>gebruiker 1 data</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Datum</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>zit in stoel</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>tijdstip</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userRecords.map((record, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{record.date}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{record.sitsInChair}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{record.timestamp}</td>
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