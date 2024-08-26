// Author : Gina Philipose, Rena Ahn, Zachary Mullen
// JavaScript File : main.js
// Last Update : August 24th, 2024

// Purpose : Driver file for the LacOp project/simulation

import { runLO } from "./lacop.js";
import {
  Chart,
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Legend,
  Tooltip
} from 'https://cdn.jsdelivr.net/npm/chart.js@4.4.3/+esm';
Chart.register(
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Legend,
  Tooltip
);

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
  const plasmidStatus = document.querySelector('input[name="tab8Options"]:checked').value;

  // Simulation Variables
  let mutList = [promotorInput, operatorInput, repInput, permInput, bgalInput, cAMPInput];
  let plasmidList = [];
  const graphData = [];   // array of JSON objects storing variable data at each time interval

  if(plasmidStatus == "Present") {
    const plasmidPromotor = document.querySelector('input[name="promo"]:checked').value;
    const plasmidOperator = document.querySelector('input[name="oper"]:checked').value;
    const plasmidRep = document.querySelector('input[name="repress"]:checked').value;
    const plasmidPerm = document.querySelector('input[name="perm"]:checked').value;
    const plasmidBgal = document.querySelector('input[name="beta"]:checked').value;
    plasmidList = [plasmidPromotor, plasmidOperator, plasmidRep, plasmidPerm, plasmidBgal];
  }

  // Gathering Simulation Data
  console.log(mutList);
  console.log(plasmidList);
  const simCell = runLO(mutList, plasmidList, alloInput, lacInInput, lacOutInput, glucoseInput);   // Cell object
    // default parameters : ['Inactive'], [], 0, 0, 200, 0

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
  return graphData;
}

// Uses simulation data to draw/make a graph
// Utilizes Function(s)...runSim
// Pre : none
// Post : none
function drawGraph() {
  const data = runSim();
  let newLabels = data.map(row => row.time);
  let newDataSets = [
          {
            label: 'Allolactose',
            data: data.map(row => row.allo),
            borderColor: "#DC0445",
            backgroundColor: "#DC0445"   // red
          },
          {
            label: 'Beta-galactosidase',
            data: data.map(row => row.bgal),
            borderColor: "#702D76",
            backgroundColor: "#702D76"   // purple
          },
          {
            label: 'Glucose',
            data: data.map(row => row.glucose),
            borderColor: "#FFBA49",
            backgroundColor: "#FFBA49"   // yellow
          },
          {
            label: 'Lactose-In',
            data: data.map(row => row.lacIn),
            borderColor: "#020AA1",
            backgroundColor: "#020AA1"   // blue
          },
          {
            label: 'Lactose-Out',
            data: data.map(row => row.lacOut),
            borderColor: "#5FAD56",
            backgroundColor: "#5FAD56"   // green
          },
          {
            label: 'Permease',
            data: data.map(row => row.perm),
            borderColor: "#FF9B71",
            backgroundColor: "#FF9B71"   // orange
          },
  ];
  
  let lineChart = Chart.getChart('graphContainer');
  if(lineChart) {
    lineChart.data.datasets = newDataSets;
    lineChart.data.labels = newLabels;
    lineChart.update();
    return;
  }
  
  new Chart(
    document.getElementById('graphContainer'),
    {
        type: 'line',
        data: {
          labels: newLabels,
          datasets: newDataSets
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: "Operon Graph"
            }
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Pseudo-Seconds"
              },
                ticks: {
                callback: (t, i) => i % 10 ? '' : newLabels[i]
              }
            },
            y: {
              title: {
                display: true,
                text: "Molecular Units"
              }
            }
          }
        }
    }
  );
}

const runSimBtn = document.getElementById("runBtn");   // button to run simulation
runSimBtn.addEventListener("click", drawGraph);
