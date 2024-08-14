// Author : Rena Ahn
// JavaScript File : graph.js
// Last Update : August 13th, 2024

// Purpose : Graph simulation data using chart.js

import graphData from './main.js';
import { Chart } from 'https://cdn.jsdelivr.net/npm/chart.js@4.4.3/+esm';

const runSimBtn = document.getElementById("runBtn");

function drawGraph() {
    console.log("drawGraph ran");
    new Chart(
        document.getElementById('displayGraph'),
        {
            type: 'line',
            data: {
            labels: graphData.map(row => row.time),
            datasets: [
                {
                label: 'Allolactose',
                data: graphData.map(row => row.allo)
                },
                {
                label: 'Beta-galactosidase',
                data: graphData.map(row => row.bgal)
                },
                {
                label: 'Glucose',
                data: graphData.map(row => row.glucose)
                },
                {
                label: 'Lactose-In',
                data: graphData.map(row => row.lacIn)
                },
                {
                label: 'Lactose-Out',
                data: graphData.map(row => row.lacOut)
                },
                {
                label: 'Permease',
                data: graphData.map(row => row.perm)
                },
            ]
            }
        }
    );
}

runSimBtn.addEventListener("click", drawGraph);

export { drawGraph }
