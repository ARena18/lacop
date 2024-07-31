// Author : Richard Charczenko
// Edited by : Gina Philipose, Rena Ahn, Zachary Mullen
/* JavaScript File : genomeInfo.js
     The original File was a Python file (GenomeInfo.py) hosted with Flask
     Translation By : Gina Philipose, Zachary Mullen
*/
// Version 2
// Last Update : July 30th, 2024

// Purpse : Define the Genome class

class Genome {
    // Constructor
    // Pre : PARAM mutations is a dictionary
    // Post : FIELD mut is set to PARAM mutations;
    //        FIELD counter is set to '0'
    constructor(mutations) {
        this.mut = mutations;
        this.counter = 0;   // !!! Note : suspect is not necessary if not implemented FIELD visited
    }

    // Returns true if PARAM item is in FIELD mut, returns false otherwise
    // Pre : PARAM item is a string variable (recommended for proper output)
    // Post : none
    has(item) {   // !!! Note : originally try-catch statement
        if(item in this.mut) {
            return true;
        } 
        return false;
    }

    // Checks the status of both operator and promoter
    // Returns 'true' if both are true (transcription can occur), and
    // returns 'false' otherwise
    // Utilizes Function(s)...operator, promoter
    // Pre : PARAM allo is a number variable,
    //       PARAM lacOut is a number variable,
    //       PARAM rep is a list of repressor variables,
    //       PARAM glucose is a number variable
    // Post : none
    transcribe(allo, lacOut, rep, glucose) {
        if(this.operator(allo, lacOut, rep, glucose) && this.promoter()) {
            return true;
        }
        return false;
    }

    // Models the Lactose operon promoter
    // Returns 'true' if no mutation, returns 'false' otherwise
    // Pre : none
    // Post : none
    promoter() {
        return this.mut["ProMutation"] === null;
    }
    /* Future notes:
        - Promoter research article
            https://www.ncbi.nlm.nih.gov/pmc/articles/PMC178712/pdf/1790423.pdf
    */

    // Models the Lactose operon operator
    // If there is no mutation within the operon then the repressor may be checked
    // Else the operator will always be active
    // When lactose is present in the environment then other compounds within the
    // cell will be converted to allo, thus the +=5 in the presence of lacOut   !!!!! where is the += 5?
    // Returns 'true' if the operator is on, 'false' otherwise
    // Utilizes Function(s)...Repressor.bound
    // Pre : PARAM allo is a number variable,
    //       PARAM lacOut is a number variable,
    //       PARAM rep is a list of repressor variables,
    //       PARAM glucose is a number variable
    // Post : none
    operator(allo, lacOut, rep, glucose) {
        if(this.mut["OpMutation"] === null) {
            for(let r of rep) {
                if(!(r.bound(allo, lacOut, glucose))) {
                    return false;
                }
            }
        }
        return true;
    }

    /* Note on Testing Variables and Functions
       - Related : FIELD visited, FIELD counter, FUNC __iter__, FUNC next, FUNC __str__
       - (1) : Excluding FIELD counter, the related fields and functions are not
               implemented. Is this desired?
       - (2) : FIELD counter seems related to visited and is not used elsewhere.
               Is the field then necessary?
    */
}

export default Genome;
