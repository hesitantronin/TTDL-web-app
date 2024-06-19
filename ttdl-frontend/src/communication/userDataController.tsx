import { useEffect, useState } from 'react';

export function userDataOverviewController() {

    type Interval = {
        timestamp: string;
        sitsInChair: string;
    };
    
    type UserRecord = {
        date: string;
        intervals: Interval[];
    };

    const exportToCSV = (selectedRecord: UserRecord, fileName = 'user_data.csv') => {
        if (!selectedRecord) return;

        const headers = ["Datum", "Tijdstip", "zit in stoel"];
        const csvData: (string | undefined)[][] = [headers];

        selectedRecord.intervals.forEach((interval: Interval) => {
            csvData.push([selectedRecord.date, interval.timestamp, interval.sitsInChair]);
        });

        const csvContent = csvData.map(row => row.join(',')).join('\n');

        const csv = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = window.URL.createObjectURL(csv);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
    };

    // for future use of the mesurement data from the database
    // const fetchUserMesurementData = async (id: any, date: string) => {
    //     const response = await fetch(`http://localhost:28080/api/measurement`);
    //     if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    // };

    return { exportToCSV};
}
