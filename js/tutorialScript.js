const overview = document.getElementById("overview");
const background = document.getElementById("background");
const partA = document.getElementById("partA");
const partB = document.getElementById("partB");
const partC = document.getElementById("partC");
const partD = document.getElementById("partD");

const textContent = document.getElementById("textContent");

overview.addEventListener("click", function() {
    textContent.style.color="#213e47"
    textContent.innerHTML = "";
    

    textContent.innerHTML += `
    <b>LacOp:</b> An online simulation on Prokaryotic Transcriptional Regulation
    <br> <br>
    
    This simulation approximates the function of the E coli “Lactose Operon” in a single E. coli. 
    Use the tabs below to configure an initial sugar concentration, select desired mutations and then click 
    the button to “Run Pathway & Make Graph”. For example, (e.g. select Sugars, and set Lactose outside to 
    100 units, with the other sugars set to ‘0’), and select “Run…’. Each run will create a dynamic pathway 
    simulation with these inputs on our server and graph which the concentrations of key molecules through time. 
    By rerunning the pathway and modifying sugar levels and/or mutations, students will gain a deeper understanding 
    of how the lac operon is transcriptionally regulated.

    <br> <br>

    For initial simplicity, this simulation runs with a defaults that simulates the wild-type Lac Operon, 
    with the exception that “CAP” has been initially disabled. When students are ready for additional complexity, 
    they can activate CAP using the “CAP-cAMP complex” tab. Students can also test partial diploid strains using 
    the “Plasmid” tab.

    <br> <br>
    The Lac Operon is most famous for its role in helping geneticists understand transcriptional gene regulation in prokaryotes. In this exercise, you will use an interactive online simulation called ‘LacOp’ to model the metabolism of a single E.coli cell.  Our goal is to help you understand the dynamics of transcriptional gene regulation in a more fun and effective way than you could from a textbook.
    `;
    
});


background.addEventListener("click", function() {
    textContent.innerHTML = "";
    textContent.innerHTML += "Bacteria often have genes whose proteins work together in biochemical pathway(s).  Often those genes are clustered and transcribed together on a single RNA.  This sort of structure is called on operon.  Operons are thought to simplify transcriptional regulation because proteins that will be needed together in a pathway are transcribed together in a single RNA.\n"
    textContent.innerHTML += "The lac operon consists of a set of ‘genes’ E.coli uses to metabolize lactose into chemical energy.\n";
    textContent.innerHTML += "Since we are here to study gene regulation, the molecular ‘stars’ of this exercise are the regulatory molecules;  repressor(lacI), operator (lacO) and inducer (allolactose). Specifically, Repressor protein (lacI)  binds to the operon’s operator element (lacO), thereby repressing transcription of the operon.  However, if lactose is available in the environment, repressor binds lactose’s derivative Allolactose (aka. inducer). When repressor binds this allolactose ‘inducer’, it releases from the operator element, thus inducing transcription of the structural genes. These structural genes encode three enzymes (lacZ, lacY and lacA).  These structural genes (unlike the regulators) are the ones that directly metabolize lactose into useful energy. As a byproduct, LacZ also metabolizes lactose into Allolactose, which feeds back into the regulation of transcription.\n"
    textContent.innerHTML += "Much of this information is concisely (re) summarized in a figure displayed in the simulation that follows.\n"
    textContent.innerHTML += "Using that simulation is a fun way to get more comfortable with the role(s) of each molecules and explore gene regulation.  Recording your findings in this document as you work will help you go in the right direction and get the most out the simulation.   Ok, Let’s get to it!.\n"
    //textContent.innerHTML += ""
    
})
