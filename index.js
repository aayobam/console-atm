'use strict';
let creditScoreDeterminant = 650;
let loanApplicationList = {};


class loanApplication {
    applicantname;
    dateofbirth;
    incomefield;
    creditScore;
    loanpurpose;
    loanamount;
};


//create an instance of the class and initialise values to each of them
function initializeLoan(){
    let la1 = new loanApplication();
    la1.applicantname = "Mr John Travolta";
    la1.dateofbirth = new Date(1980, 11, 30);
    la1.incomefield = 60000;
    la1.creditScore = 500;
    la1.loanpurpose = "my partner need the loan to purchase new equipment";
    la1.loanamount = 8000;
    loanApplicationList[0] = la1;


    let la2 = new loanApplication();
    la2.applicantname = "Miss Michelle Benjamin";
    la2.dateofbirth = new Date(1960, 8, 22);
    la2.incomefield = 135000;
    la2.creditScore = 670;
    la2.loanpurpose = "i need this to go on holiday vacation and honeymoon";
    la2.loanamount = 50000;
    
    loanApplicationList[1] = la2;


    let la3 = new loanApplication();
    la3.applicantname = "Mrs Debbie Row";
    la3.dateofbirth = new Date(1972, 5, 18);
    la3.incomefield = 115000;
    la3.creditScore = 499;
    la3.loanpurpose = "i and my family need to secure a new house";
    la3.loanamount = 30000;
    
    loanApplicationList[2] = la3;
};
initializeLoan();


/*
creates a reference code should in case there are complaints from applicants
function createRandomCode(length) {
    let randomCodes = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
        randomCodes += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
 };
 createRandomCode(length);
 */

 //bind each applicants to drop down.
function bindLoansToDropDown(){
    let dropDown = document.getElementById('loanApplications');

    for (let objects in loanApplicationList){
        let eachApplicants = loanApplicationList[objects];
        let opt = document.createElement('option');
        opt.setAttribute("data-index", objects);
        opt.appendChild(document.createTextNode("Application of " + eachApplicants.applicantname));
        opt.value = eachApplicants.applicantname.toString();
        dropDown.appendChild(opt); 
    }
    dropDown.onchange = function(e) {
        var index = this.options[this.selectedIndex].getAttribute("data-index");
        var obj = loanApplicationList[index];
        document.getElementById('fullName').value = obj.applicantname;
        document.getElementById('dateOfBirth').value = obj.dateofbirth;
        document.getElementById('incomeField').value = parseFloat(obj.incomefield);
        document.getElementById('credit-score').value = obj.creditScore;
        document.getElementById('loanPurpose').value = obj.loanpurpose;
        document.getElementById('loanAmount').value = parseFloat(obj.loanamount);
        function loanStatusAlert(){
            let message1 = `Dear ${obj.applicantname}, your loan application of ${'$' + obj.loanamount} has been approved.`;
            let message2 = `Dear ${obj.applicantname}, your loan application of ${'$' + obj.loanamount} 
            was not approved because of too low credit score.`;
            if (creditScore <= creditScoreDeterminant && creditScore >= 500){
                document.getElementById('loanStatus').innerText = message1;
            }
            else{
                document.getElementById('loanStatus').innerText = message2;
            };
        };
        loanStatusAlert();
    }
};
bindLoansToDropDown();


//This checks for the datatype of data on the forms.
function formsInputType(){
    if (isNaN(document.getElementById('dateOfBirth').value)) {
        document.getElementById('dateOfBirth').value = 'undefined';
    }

    else if(isNaN(document.getElementById('incomeField').value)) {
        document.getElementById('incomeField').value = 'undefined';
    }

    else if(isNaN(document.getElementById('credit-score').value)) {
        document.getElementById('credit-score').value = 'undefined';
    }

    else if(isNaN(document.getElementById('loanAmount').value)) {
        document.getElementById('loanAmount').value = 'undefined';
    };
}
formsInputType();


const buttonApply = document.getElementById("btn-apply").addEventListener('click', function() {

    if (document.getElementById("fullName").value = " "){
        document.getElementById('for-fullname').classList.remove('display');
    }
    else if (document.getElementById("dateOfBirth").value = " "){
        document.getElementById('for-dateOfBirth').classList.remove('display');
    }
    else if (document.getElementById("incomeField").value = " "){
        document.getElementById('for-incomeField').classList.remove('display');
    }
    else if (document.getElementById("credit-score").value = " "){
        document.getElementById('for-creditscore').classList.remove('display');
    }
    else if (document.getElementById("loanPurpose").value = " "){
        document.getElementById('for-loanPurpose').classList.remove('display');
    }
    else if (document.getElementById("loanAmount").value = " "){
        document.getElementById('for-loanAmount').classList.remove('display');
    };

});git


