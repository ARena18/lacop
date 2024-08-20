// Author : Rena Ahn
// JavaScript File : graph.js
// Last Update : August 13th, 2024

// Purpose : Graph simulation data using chart.js

import graphData from './main.js';
import { Chart, LineController, LineElement, Filler, PointElement, LinearScale, Title, CategoryScale, Legend, Tooltip } from 'https://cdn.jsdelivr.net/npm/chart.js@4.4.3/+esm';
Chart.register(LineController, LineElement, Filler, PointElement, LinearScale, Title, CategoryScale, Legend, Tooltip);

const runSimBtn = document.getElementById("runBtn");

function drawGraph() {
    new Chart(
        document.getElementById('displayGraph'),
        {
            type: 'line',
            data: {
            labels: graphData.map(row => row.time),
            datasets: [
                {
                    label: 'Allolactose',
                    data: graphData.map(row => row.allo),
                    borderColor: "red"
                },
                {
                    label: 'Beta-galactosidase',
                    data: graphData.map(row => row.bgal),
                    borderColor: "purple"
                },
                {
                    label: 'Glucose',
                    data: graphData.map(row => row.glucose),
                    borderColor: "yellow"
                },
                {
                    label: 'Lactose-In',
                    data: graphData.map(row => row.lacIn),
                    borderColor: "blue"
                },
                {
                    label: 'Lactose-Out',
                    data: graphData.map(row => row.lacOut),
                    borderColor: "green"
                },
                {
                    label: 'Permease',
                    data: graphData.map(row => row.perm),
                    borderColor: "orange"
                },
            ]
            }
        }
    );
}

runSimBtn.addEventListener("click", drawGraph);
