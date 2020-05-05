'use strict';
let creditScoreDeterminant = 650;
let loanApplicationList = {};
let creditScore;

class loanApplication {
    applicantname;
    dateofbirth;
    incomefield;
    creditScore;
    loanpurpose;
    loanamount;
    Id;
};


//create an instance of the class and initialise values to each of them
function initializeLoan(){
    let la1 = new loanApplication();
    la1.Id = createRandomCode(10)
    la1.applicantname = "Mr John Travolta";
    la1.dateofbirth = new Date(1980, 11, 30);
    la1.incomefield = 60000;
    la1.creditScore = 600;
    la1.loanpurpose = "my partner need the loan to purchase new equipment"
    la1.loanamount = 8000;
    loanApplicationList[0] = la1;


    let la2 = new loanApplication();
    la2.applicantname = "Miss Michelle Benjamin";
    la2.dateofbirth = new Date(1960, 8, 22);
    la2.incomefield = 135000;
    la2.creditScore = 670;
    la2.loanpurpose = "my partner need the loan to purchase new equipment"
    la2.loanamount = 50000;
    la2.Id = createRandomCode(10)
    loanApplicationList[1] = la2;


    let la3 = new loanApplication();
    la3.applicantname = "Mrs Debbie Row";
    la3.dateofbirth = new Date(19720, 5, 18);
    la3.incomefield = 115000;
    la3.creditScore = 450;
    la3.loanpurpose = "my partner need the loan to purchase new equipment"
    la3.loanamount = 30000;
    la3.Id = createRandomCode(10)
    loanApplicationList[2] = la3;

};
initializeLoan();


//creates a reference code should in case there are complaints from applicants
function createRandomCode(length) {
    let randomCodes = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
        randomCodes += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
 };

 //bind each applicants to drop down.
function bindLoansToDropDown(){
    for (let objects in loanApplicationList){
        let eachApplicants = loanApplicationList[objects];

        let dropDown = document.getElementById('loanApplications');
        let opt = document.createElement('option');
        opt.appendChild(document.createTextNode("Application of " + eachApplicants.applicantname));
        opt.value = eachApplicants.applicantname.toString();
        dropDown.appendChild(opt);

        if (dropDown[1].value){
            document.getElementById('fullName').innerText = eachApplicants.applicantname[0];
        };
    }
};
bindLoansToDropDown();


//this check for the elibility of applicants for loan using credit score
function loanEligibilityIneligibilityMessage(){
    if (creditScore <= creditScoreDeterminant && creditScore > 500){
        let status = document.getElementById('loanStatus')
        let alert = `Dear ${eachApplicants.applicantname}, your loan application of ${"$" + eachApplicants.loanamount}
        has been granted and your reference code is ${eachApplicants.Id}`;
        let message = document.createTextNode(alert);
        status.appendChild(message)
    }
    else if(creditScore < 500){
        let status = document.getElementById('loanStatus')
        let alert = `Dear ${eachApplicants.applicantname}, your loan application of ${"$" + eachApplicants.loanamount}
        has been denied and your reference code is ${eachApplicants.Id}`;
        let message = document.createTextNode(alert);
        status.appendChild(message);
    }
    else{
        let status = document.getElementById('loanStatus')
        let alert = `Loan application not found`;
        let message = document.createTextNode(alert);
        status.appendChild(message);
    };
}
loanEligibilityIneligibilityMessage();


//This checks for the datatype of data on the forms.
function formsInputType(){
    if (isNaN(document.getElementById('dateOfBirth').innerText)) {
        document.getElementById('dateOfBirth').innerText = 'undefined';
    }

    else if(isNaN(document.getElementById('incomeField').innerText)) {
        document.getElementById('incomeField').innerText = 'undefined';
    }

    else if(isNaN(document.getElementById('credit-score').innerText)) {
        document.getElementById('credit-score').innerText = 'undefined';
    }

    else if(isNaN(document.getElementById('loanAmount').innerText)) {
        document.getElementById('loanAmount').innerText = 'undefined';
    };
}
formsInputType();