// Author : Gina Philipose, Rena Ahn, Zachary Mullen
// JavaScript File : main.js
// Last Update : August 20th, 2024

// Purpose : Driver file for the LacOp project/simulation

import { runLO } from "./lacop.js";
import { Chart, LineController, LineElement, Filler, PointElement, LinearScale, Title, CategoryScale, Legend, Tooltip } from 'https://cdn.jsdelivr.net/npm/chart.js@4.4.3/+esm';
Chart.register(LineController, LineElement, Filler, PointElement, LinearScale, Title, CategoryScale, Legend, Tooltip);

// Runs the simulation to gather simulation data
// Returns an array of JSON objects representing simulation variable data at
// certain time intervals
// Pre : none
// Post : none
function runSim() {
  // User Input Values
  const lacInInput = parseInt(document.getElementById("lacIn").value);
  const lacOutInput = parseInt(document.getElementById("lacOut").value);
  const glucoseInput = parseInt(document.getElementById("gluc").value);
  const alloInput = parseInt(document.getElementById("allo").value);
  const promotorInput = document.querySelector('input[name="tab2Options"]:checked').value;
  const operatorInput = document.querySelector('input[name="tab3Options"]:checked').value;
  const repInput = document.querySelector('input[name="tab4Options"]:checked').value;
  const permInput = document.querySelector('input[name="tab5Options"]:checked').value;
  const bgalInput = document.querySelector('input[name="tab6Options"]:checked').value;
  const cAMPInput = document.querySelector('input[name="tab7Options"]:checked').value;

  // Simulation Variables
  let mutList = [promotorInput, operatorInput, repInput, permInput, bgalInput, cAMPInput];
  const simCell = runLO(mutList, [], alloInput, lacInInput, lacOutInput, glucoseInput);   // Cell object
    // default parameters : ['noneP', 'ALLO', 'LO', 'noneZ', 'noneY', 'LI', 'GLU', 'Inactive', 'noneO', 'noneI'], [], 0, 0, 200, 0
    // !!!!! Note : plasmid mutList is currently not implemented
  const graphData = [];   // array of JSON objects storing variable data at each time interval

  // insert row for each time point
  for (let i = 0; i < simCell.time; i++) {
    graphData.push({
      time: i,
      allo: simCell.archiveConditions.allo[i].toFixed(3),
      bgal: simCell.archiveConditions.bgal[i],
      glucose: simCell.archiveConditions["glucose + galactose"][i].toFixed(3),
      lacIn: simCell.archiveConditions.lacIn[i].toFixed(3),
      lacOut: simCell.archiveConditions.lacOut[i].toFixed(3),
      perm: simCell.archiveConditions.perm[i]
    })
  }

  console.log(mutList);
  return graphData;
}

// Uses simulation data to draw/make a graph
// Utilizes Function(s)...runSim
// Pre : none
// Post : none
function drawGraph() {
  const data = runSim();
  new Chart(
    document.getElementById('displayGraph'),
    {
        type: 'line',
        data: {
          labels: data.map(row => row.time),
          datasets: [
            {
                label: 'Allolactose',
                data: data.map(row => row.allo),
                borderColor: "#982649"
            },
            {
                label: 'Beta-galactosidase',
                data: data.map(row => row.bgal),
                borderColor: "#9C95DC"
            },
            {
                label: 'Glucose',
                data: data.map(row => row.glucose),
                borderColor: "#E9B872"
            },
            {
                label: 'Lactose-In',
                data: data.map(row => row.lacIn),
                borderColor: "#094D92"
            },
            {
                label: 'Lactose-Out',
                data: data.map(row => row.lacOut),
                borderColor: "#21A179"
            },
            {
                label: 'Permease',
                data: data.map(row => row.perm),
                borderColor: "orange"
            },
          ]
        }
    }
  );
}

const runSimBtn = document.getElementById("runBtn");   // button to run simulation
runSimBtn.addEventListener("click", drawGraph);
