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


const oper2 = document.getElementById("oper2")
const rep2 = document.getElementById("rep2")
const perm2 = document.getElementById("perm2")
const bGal2 = document.getElementById("bGal2")
const CAPCAMP2 = document.getElementById("CAPCAMP2")
const prom2 = document.getElementById("prom2")


const plasPromPres = document.getElementById("plasPromPres");
const plasPromAbs = document.getElementById("plasPromAbs"); 
const plasOperPres = document.getElementById("plasOperPres"); 
const plasOperAbs = document.getElementById("plasOperAbs");
const plasRepNone = document.getElementById("plasRepNone"); 
const plasRepAbs = document.getElementById("plasRepAbs"); 
const plasRepLac = document.getElementById("plasRepLac"); 
const plasPermNone = document.getElementById("plasPermNone")
const plasPermAbs = document.getElementById("plasPermAbs");
const plasBNone = document.getElementById("plasBNone");
const plasBAbs = document.getElementById("plasBAbs");


plasPromPres.addEventListener("click", function() {
    prom2.innerHTML="";
    prom2.append(plasPromPres.value);
});
plasPromAbs.addEventListener("click", function() {
    prom2.innerHTML="";
    prom2.append(plasPromAbs.value);
});

plasOperPres.addEventListener("click", function() {
    oper2.innerHTML="";
    oper2.append(plasOperPres.value);
});

plasOperAbs.addEventListener("click", function() {
    oper2.innerHTML="";
    oper2.append(plasOperAbs.value);
});

plasRepNone.addEventListener("click", function() {
    rep2.innerHTML="";
    rep2.append(plasRepNone.value);
});

plasRepAbs.addEventListener("click", function() {
    rep2.innerHTML="";
    rep2.append(plasRepAbs.value);
});

plasRepLac.addEventListener("click", function() {
    rep2.innerHTML="";
    rep2.append(plasRepLac.value);
});

plasPermNone.addEventListener("click", function() {
    perm2.innerHTML="";
    perm2.append(plasPermNone.value);
});

plasPermAbs.addEventListener("click", function() {
    perm2.innerHTML="";
    perm2.append(plasPermAbs.value);
});

plasBNone.addEventListener("click", function() {
    bGal2.innerHTML="";
    bGal2.append(plasBNone.value);
});

plasBAbs.addEventListener("click", function() {
    bGal2.innerHTML="";
    bGal2.append(plasBAbs.value);
});



window.addEventListener("load", function(){
    // displays defaults
    permNone.click();
    promNone.click();
    opNone.click();
    repNone.click();
    betaNone.click();
    capInact.click();
    plasAbs.click();
    plasPromPres.click()
    plasOperPres.click()
    plasRepNone .click()
    plasPermNone.click()
    plasBNone.click()

    lacExIn.append(lacOut.value)
    lacInIn.append(lacIn.value)
    gluIn.append(gluc.value)
    lacAlIn.append(allo.value)
});




plasPres.addEventListener("click", function() {
    plas.innerHTML="";
    plas.append(plasPres.value);
    document.getElementById("pres").style.display = "block";
    document.getElementById("plasmidInputs").style.display = "block"
})

plasAbs.addEventListener("click", function() {
    plas.innerHTML="";
    plas.append(plasAbs.value);
    document.getElementById("pres").style.display = "none";
    document.getElementById("plasmidInputs").style.display = "none"
})




capAct.addEventListener("click", function() {
    CAP.innerHTML="";
    CAP.append(capAct.value);
})
capInact.addEventListener("click", function() {
    CAP.innerHTML="";
    CAP.append(capInact.value);
})

betaOne.addEventListener("click", function() {
    betaGal.innerHTML="";
    betaGal.append(betaOne.value);
})
betaNone.addEventListener("click", function() {
    betaGal.innerHTML="";
    betaGal.append(betaNone.value);
})

permOne.addEventListener("click", function() {
    permease.innerHTML="";
    permease.append(permOne.value);
})
permNone.addEventListener("click", function() {
    permease.innerHTML="";
    permease.append(permNone.value);
})

repTwo.addEventListener("click", function() {
    repressor.innerHTML="";
    repressor.append(repTwo.value);
})
repOne.addEventListener("click", function() {
    repressor.innerHTML="";
    repressor.append(repOne.value);
})
repNone.addEventListener("click", function() {
    repressor.innerHTML="";
    repressor.append(repNone.value);
})

opNone.addEventListener("click", function() {
    operator.innerHTML="";
    operator.append(opNone.value);
})
opOne.addEventListener("click", function() {
    operator.innerHTML="";
    operator.append(opOne.value);
})



promOne.addEventListener("click", function() {
    promoter.innerHTML="";
    promoter.append(promOne.value);
})

promNone.addEventListener("click", function() {
    promoter.innerHTML="";
    promoter.append(promNone.value);
})


/////
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
        

        // Get all elements with class="tabcontent" and hide them
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        
    }
    else {
        // Get all elements with class="tabcontent" and hide them
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // show tab content
        document.getElementById(tabName).style.display = "block";

        // Get all elements with class="tablinks" and remove the class "active"
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(tabName).style.display = "block";
        event.currentTarget.className += " active";
    }

    


}
