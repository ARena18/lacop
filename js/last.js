// Authors : Gina Philipose, Rena Ahn, Zachary Mullen
// JavaScript File : last.jss
// Last Update : August 29th, 2024

const endSubmit = document.getElementById("endSubmit");
const sim1 = document.getElementById("sim1");
const sim2 = document.getElementById("sim2");
const sim3 = document.getElementById("sim3");

// blocks from opening simulation, tutorial, and about tabs while on pre-test page
sim1.addEventListener("click", function() {
    confirm("Please finish the post-test first.")
})
sim2.addEventListener("click", function() {
    confirm("Please finish the post-test first.")
})
sim3.addEventListener("click", function() {
    confirm("Please finish the post-test first.")
})

endSubmit.addEventListener("click", function() {
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

    if(allSelected==true) { // all questions have been answered
        // get json object string and turn back into json object
        const getQuestions = localStorage.getItem("questions");
        const jsonQuestions = JSON.parse(getQuestions);
        
        // store post-test results
        const q1 = document.querySelector("input[name='q1']:checked");
        jsonQuestions.last[1] = q1.value;
        const q2 = document.querySelector("input[name='q2']:checked");
        jsonQuestions.last[2] = q2.value;
        const q3 = document.querySelector("input[name='q3']:checked");
        jsonQuestions.last[3] = q3.value;
        const q4 = document.querySelector("input[name='q4']:checked");
        jsonQuestions.last[4] = q4.value;
        const q5 = document.querySelector("input[name='q5']:checked");
        jsonQuestions.last[5] = q5.value;
        const q6 = document.querySelector("input[name='q6']:checked");
        jsonQuestions.last[6] = q6.value;
        const q7 = document.querySelector("input[name='q7']:checked");
        jsonQuestions.last[7] = q7.value;
        const q8 = document.querySelector("input[name='q8']:checked");
        jsonQuestions.last[8] = q8.value;
        const q9 = document.querySelector("input[name='q9']:checked");
        jsonQuestions.last[9] = q9.value;
        const q10 = document.querySelector("input[name='q10']:checked");
        jsonQuestions.last[10] = q10.value;
        const q11 = document.querySelector("input[name='q11']:checked");
        jsonQuestions.last[11] = q11.value;
        const q12 = document.querySelector("input[name='q12']:checked");
        jsonQuestions.last[12] = q12.value;
       
        // indicate that both the pre and post tests have been complete (the simulation page will no longer lead to a test)
        jsonQuestions.finish = 1;
        
        //store back into localstorage
        const questionString = JSON.stringify(jsonQuestions);
        localStorage.setItem("questions", questionString);

        // go to inmprovement page for results
        window.location.href = "submission.html";
    } else { // not all questions have been answered
        confirm("Please answer all questions.");
    }
})
