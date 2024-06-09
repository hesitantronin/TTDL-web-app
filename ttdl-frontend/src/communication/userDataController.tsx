import { useEffect, useState } from 'react';

export function userDataOverviewController(){

    type Interval = {
        timestamp: string;
        sitsInChair: string;
    };
    
    type UserRecord = {
        date: string;
        intervals: Interval[];
    };
    // CSV export function
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
    
    

    //get user name ID etc
    const fetchData = async () => { 

    }

    //get data from that user from the day they want
    //need to get the day (first time open page assume yesterday) the user chooses
    const fetchUserData = async () => {}
    return { exportToCSV, fetchData, fetchUserData}
}