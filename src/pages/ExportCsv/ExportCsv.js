import React from 'react'
import { CSVLink, CSVDownload } from "react-csv";

// Format the numbers as strings with two decimal places
const csvData = [
    ["firstname", "lastname", "Number"],
    ["Ahmed", "Tomi", (1234).toFixed(2)],   // Format as string with 2 decimals
    ["Raed", "Labes", (123).toFixed(2)],    // Format as string with 2 decimals
    ["Yezzi", "Min l3b", (99).toFixed(2)]   // Format as string with 2 decimals
];

function ExportCsv() {
    return (
        <>
            <CSVLink data={csvData}>Download me</CSVLink>
            <CSVDownload data={csvData} target="_blank" />
        </>
    )
}

export default ExportCsv
