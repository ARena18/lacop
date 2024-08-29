// Authors : Gina Philipose, Rena Ahn, Zachary Mullen
// JavaScript File : tutorialScript.js
// Last Update : August 29th, 2024

 // auto open "overview" content
window.addEventListener("load", function() {
   const first = document.getElementById("over");
   first.click();
});

// opens tabs: overview, background, and papers
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
