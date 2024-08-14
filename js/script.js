//// ask about missing functions?: .includes, .indexOf

import graphData from './main.js';
import { Chart } from 'https://cdn.jsdelivr.net/npm/chart.js@4.4.3/+esm';

let runSimBtn = getElementById("runBtn");
function drawGraph() {   // adding a graph
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
    console.log("drawGraph ran");
}


const display = document.getElementById("displayInputs");

const lacIn = document.getElementById("lacIn");
const lacOut = document.getElementById("lacOut");
const allo = document.getElementById("allo");
const gluc = document.getElementById("gluc");

const lacExIn = document.getElementById("lacExInput");
const gluIn = document.getElementById("gluInput");
const lacInIn = document.getElementById("lacInInput");
const lacAlIn = document.getElementById("lacAlInput");

//containers to put inputs in
const promoter = document.getElementById("prom");
const operator = document.getElementById("oper");
const repressor = document.getElementById("rep");
const permease = document.getElementById("perm");
const betaGal = document.getElementById("bGal");
const CAP = document.getElementById("CAPCAMP");

const promOne = document.getElementById("promOne");
const promNone = document.getElementById("promNone");

const opOne = document.getElementById("opOne");
const opNone = document.getElementById("opNone");
const repOne = document.getElementById("repOne");
const repNone = document.getElementById("repNone");
const repTwo = document.getElementById("repTwo");
const permOne = document.getElementById("permOne");
const permNone = document.getElementById("permNone");
const betaNone = document.getElementById("betaNone");
const betaOne = document.getElementById("betaOne");
const capAct = document.getElementById("capAct");
const capInact = document.getElementById("capInact");

const plas = document.getElementById("plas");
const plasPres = document.getElementById("plasPres");
const plasAbs = document.getElementById("plasAbs");



plasPres.addEventListener("input", function() {
    plas.innerHTML="";
    plas.append(plasPres.value);
})
plasAbs.addEventListener("input", function() {
    plas.innerHTML="";
    plas.append(plasAbs.value);
})




capAct.addEventListener("input", function() {
    CAP.innerHTML="";
    CAP.append(capAct.value);
})
capInact.addEventListener("input", function() {
    CAP.innerHTML="";
    CAP.append(capInact.value);
})

betaOne.addEventListener("input", function() {
    betaGal.innerHTML="";
    betaGal.append(betaOne.value);
})
betaNone.addEventListener("input", function() {
    betaGal.innerHTML="";
    betaGal.append(betaNone.value);
})

permOne.addEventListener("input", function() {
    permease.innerHTML="";
    permease.append(permOne.value);
})
permNone.addEventListener("input", function() {
    permease.innerHTML="";
    permease.append(permNone.value);
})

repTwo.addEventListener("input", function() {
    repressor.innerHTML="";
    repressor.append(repTwo.value);
})
repOne.addEventListener("input", function() {
    repressor.innerHTML="";
    repressor.append(repOne.value);
})
repNone.addEventListener("input", function() {
    repressor.innerHTML="";
    repressor.append(repNone.value);
})

opNone.addEventListener("input", function() {
    operator.innerHTML="";
    operator.append(opNone.value);
})
opOne.addEventListener("input", function() {
    operator.innerHTML="";
    operator.append(opOne.value);
})



promOne.addEventListener("input", function() {
    promoter.innerHTML="";
    promoter.append(promOne.value);
})

promNone.addEventListener("input", function() {
    promoter.innerHTML="";
    promoter.append(promNone.value);
})

lacOut.addEventListener("input", function(){
    lacExIn.innerHTML = "";
    lacExIn.append(lacOut.value);  
})
gluc.addEventListener("input", function(){
    gluIn.innerHTML = "";
    gluIn.append(gluc.value);  
})
lacIn.addEventListener("input", function(){
    lacInIn.innerHTML = "";
    lacInIn.append(lacIn.value);  
})
allo.addEventListener("input", function(){
    lacAlIn.innerHTML = "";
    lacAlIn.append(allo.value);  
})




function openTab(event, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("content");
    tablinks = document.getElementsByClassName("tablinks");
    
    if(event.currentTarget.className.indexOf(" active")!=-1){
        


        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }


        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        
    }
    else {

        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }


        document.getElementById(tabName).style.display = "block";


        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

 
        document.getElementById(tabName).style.display = "block";
        event.currentTarget.className += " active";
    }

    


}

// Open the first tab by default
// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelector('.tablinks').click();
// });

export {
    drawGraph,
    openTab
};
