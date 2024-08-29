// Authors : Gina Philipose, Rena Ahn, Zachary Mullen
// JavaScript File : first.js
// Last Update : August 29th, 2024

const simButton = document.getElementById("goToSim");
const sim1 = document.getElementById("sim1");
const sim2 = document.getElementById("sim2");
const sim3 = document.getElementById("sim3");


// blocks from opening 'simulation', 'tutorial', and 'about' tabs while on pre-test page
sim1.addEventListener("click", function() {
    confirm("Please finish the pre-test first.");
});
sim2.addEventListener("click", function() {
    confirm("Please finish the pre-test first.");
});
sim3.addEventListener("click", function() {
    confirm("Please finish the pre-test first.");
});

simButton.addEventListener("click", function() {
    // check if all questions have been answered
    let allSelected = true;
    for(let i = 1; i < 13; i++) {
        var question = document.getElementsByName("q" + i);
        var select = false;
        for(let i = 0; i < 4; i++) {
            if(question[i].checked) {
                select = true;
                break;
            }
        }
        if(select==false){
            allSelected = false;
            break;
        }
    }
    const nameID = document.getElementById("nameID");
    if(nameID.value.trim() == "") {
        allSelected = false;
    }

    //json object to store in localstorage with user results
    var questions = {
        name: "none",
        first: {
            q1: 0,
            q2: 0,
            q3: 0,
            q4: 0,
            q5: 0,
            q6: 0,
            q7: 0,
            q8: 0,
            q9: 0,
            q10: 0,
            q11: 0,
            q12: 0,
        },
        last: {
            q1: 0,
            q2: 0,
            q3: 0,
            q4: 0,
            q5: 0,
            q6: 0,
            q7: 0,
            q8: 0,
            q9: 0,
            q10: 0,
            q11: 0,
            q12: 0,
        },
        finish: 0 // indicates whether someone has already taken the pre AND post tests
    };

    if(allSelected==true) { // all questions have been answered
        // store results into json object
        questions.name = nameID.value;
        const q1 = document.querySelector("input[name='q1']:checked");
        questions.first[1] = q1.value;
        const q2 = document.querySelector("input[name='q2']:checked");
        questions.first[2] = q2.value;
        const q3 = document.querySelector("input[name='q3']:checked");
        questions.first[3] = q3.value;
        const q4 = document.querySelector("input[name='q4']:checked");
        questions.first[4] = q4.value;
        const q5 = document.querySelector("input[name='q5']:checked");
        questions.first[5] = q5.value;
        const q6 = document.querySelector("input[name='q6']:checked");
        questions.first[6] = q6.value;
        const q7 = document.querySelector("input[name='q7']:checked");
        questions.first[7] = q7.value;
        const q8 = document.querySelector("input[name='q8']:checked");
        questions.first[8] = q8.value;
        const q9 = document.querySelector("input[name='q9']:checked");
        questions.first[9] = q9.value;
        const q10 = document.querySelector("input[name='q10']:checked");
        questions.first[10] = q10.value;
        const q11 = document.querySelector("input[name='q11']:checked");
        questions.first[11] = q11.value;
        const q12 = document.querySelector("input[name='q12']:checked");
        questions.first[12] = q12.value;

        // local storage can only store strings->convert       
        const questionString = JSON.stringify(questions);
        localStorage.setItem("questions", questionString);

        // go to simulation page
        window.location.href = "index.html";
    } else { // not all questions have been answered
        confirm("Please answer all questions.")
    }
})
