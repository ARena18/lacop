// Authors : Gina Philipose, Rena Ahn, Zachary Mullen
// JavaScript File : submit.js
// Last Update : August 29th, 2024

// keep track of scores
var firstScore = 0;
var lastScore = 0;
var improvScore = 0;

// display containers
const nameSpace = document.getElementById("nameSpace");
const improv = document.getElementById("improv");
const firstTest = document.getElementById("firstTest");
const lastTest = document.getElementById("lastTest");

// display results
window.addEventListener("load", showData);
function showData() {
    // correct answers: bcaabacbddcd
    let ans = "bcaabacbddcd";
    const getQuestions = localStorage.getItem("questions");
    const jsonQuestions = JSON.parse(getQuestions);

    // gets amount of wrong and right from post and pre tests
    for(let i=1; i<13; i++) {
        if(jsonQuestions.first[i]==ans[i-1]) {
            firstScore++;
        }
        if(jsonQuestions.last[i]==ans[i-1]) {
            lastScore++;
        }

        // displays user's answers for pre and post tests
        const questionF = document.getElementsByName("q" + i +"f");
        const questionL = document.getElementsByName("q" + i + "l");
        for(let j=0; j<4; j++) {
            if(questionF[j].value==ans[i-1]) {
                questionF[j].checked = true;
            } else {
                questionF[j].disabled = true;
            }
            if(questionL[j].value==ans[i-1]) {
                questionL[j].checked = true;
            } else {
                questionL[j].disabled = true;
            }
        }
    }
    // calculate and display scores
    nameSpace.innerHTML = jsonQuestions.name;
    firstPerc = (firstScore / 12 * 100).toFixed(1);
    firstTest.innerHTML = firstScore + "/12 (" + firstPerc + "%)" ;
    lastPerc = (lastScore / 12 * 100).toFixed(1);
    lastTest.innerHTML = lastScore + "/12 (" + lastPerc + "%)";
    improvScore = (lastPerc-firstPerc).toFixed(1);
    improv.innerHTML = improvScore + "%";
}

// opens tabs: post-test, pre-test, and correct answers
function openTab(event, tabName) {
    var tabcontent = document.getElementsByClassName("content"); // displayed content
    const tablinks = document.getElementsByClassName("tablinks"); // tab buttons
    
    if(event.currentTarget.className.indexOf(" active")!=-1){
        // Hide all "tabcontent" class elements
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // remove "active" status from all
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
    } else {
        // Get all elements with class="tabcontent" and hide them
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // show tab content for specific tab button clicked
        document.getElementById(tabName).style.display = "block";

        // remove "active" status from all
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show only the current tab as active
        document.getElementById(tabName).style.display = "block";
        event.currentTarget.className += " active";
    }
}
