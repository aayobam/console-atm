//This is a simple javascript ATM program that performs basic ATM transactions operations

let accountBalance = parseFloat([1000]), depositAmount, withdrawAmount, transferAmount, rechargeAmount, phone_no, selection, action;

//This authenticates the registered user after supplying their pin code.
function Authentication(){
    let LoginAcess = [
        {"name" : "bradly cooper", "pass" : 1990},
        {"name" : 'james berry', "pass" : 1989},
        {"name" : "sarah lance", "pass" : 1980}
    ];

    let pin = prompt("enter your 4 digit pin number".toUpperCase()); // pin is input taken from user.
    let userName = (LoginAcess.find(({ pass }) => pass === parseInt(pin))["name"]).toUpperCase();//this finds and compare the user associated with a pin
    console.log(" Welcome " + userName +"\n perform operation by selecting between 1 to 6 : ".toUpperCase());
    main();
};
Authentication();


// This checks for the initial account balance
function checkBalance(){
    console.log("your account balance is : " + "$" + accountBalance)
    action = prompt("would you like to perform another operation?".toUpperCase());
    if (action === "yes" || action === "y"){
        main();
    }
    else{
        console.log("thanks for bannking with us".toUpperCase())
    };
};


// This handles deposit of money or funds.
function deposit(){
    depositAmount = parseFloat(prompt("enter deposit amount"))
    accountBalance += depositAmount;
    console.log("you have deposited "+ "$" + depositAmount + " and your new balance is " + "$" + accountBalance);
    action = prompt("would you like to perform another operation?".toUpperCase());

    if (action === "yes" || action === "y"){
        main();
    }
    else{
        console.log("thanks for bannking with us".toUpperCase())
    };
};


// This block handles withdrawal of funds
function withdrawal(){
    withdrawAmount = parseFloat(prompt("enter withdrawal amount".toUpperCase()));
    if (withdrawAmount <= accountBalance){
        accountBalance -= withdrawAmount;
        console.log("you have witdrawn " + "$" + withdrawAmount + " and your new balance is " + "$" + accountBalance)
    }
    else{
        console.log("insufficient funds")
    }
    action = prompt("would you like to perform another operation?".toUpperCase());

    if (action === "yes" || action === "y"){
        main()
    }
    else{
        console.log("thanks for bannking with us".toUpperCase())
    };

};


// This block handles funds transfer.
function transfers(){
    transferAmount = parseFloat(prompt("enter transfer amount".toUpperCase()))
    if(transferAmount <= accountBalance){
        accountBalance -= transferAmount;
        console.log("you have transfered " +  "$" + transferAmount + " and your new balance is " +  "$" + accountBalance);
    }
    else{
        console.log("insufficient funds");
    };

    action = prompt("would you like to perform another operation?")
    if (action === "yes" || action === "y"){
        main();
    }
    else{
        console.log("thanks for bannking with us".toUpperCase());
    };
};


// This block handles airtime recharge.
function airtimeRecharge(){
    let number = ["0","1","2","4","5","6","7","8","9","0","1"] //This logic is just to use its length to check validity of phone number,the values in the array doesn't compute values
    console.log(number.length)
    phone_no = parseInt(prompt("enter your 11 digit phone number : ".toUpperCase()));
    rechargeAmount = parseFloat(prompt("enter amount you want to recharge : ".toUpperCase()));
    if (rechargeAmount <= accountBalance && phone_no == number.length) {
        accountBalance -= rechargeAmount;
        console.log("you have recharged " + phone_no + " with " + "$" + transferAmount + " and your new balance is " + "$" + accountBalance);
    }
    else{
        console.log("insufficient and invalid phone number");
    };

    action = prompt("would you like to perform another operation?".toUpperCase());
    if (action === "yes" || action === "y"){
        main();
    }
    else{
        console.log("thanks for bannking with us".toUpperCase());
        exit();
    };
};


function cancelTransaction(){
    console.log("thanks for bannking with us".toUpperCase());
    exit();
};


function main(){
    console.log('**********************************************')
    console.log("[1] - CHECK BALANACE      [2] - DEPOSIT MONEY\n[3] - MAKE WITHDRAWL      [4] - MAKE TRANSFER\n[5] - AIRTIME RECHARGE    [6] - EXIT ")
    console.log('**********************************************')
    selection = prompt("type 1....6 to select transaction".toUpperCase())
    switch(selection){
        case "1":
            checkBalance();
            break;
            
        case "2":
            deposit();
            break;

        case "3":
            withdrawal();
            break;

        case "4":
            transfers();
            break;

        case "5":
            airtimeRecharge();
            break;

        case "6":
            cancelTransaction();
            break;

        default:
            break;
    };
};
