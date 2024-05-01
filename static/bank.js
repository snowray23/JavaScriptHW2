//Task 1: Create a function to handle deposits into a bank account.
let bankBalance = 100;

function deposits(money){
    if (money > 0) {
        bankBalance += money;
        console.log(`deposited ${money}`);
    } else {
        console.log("nothing was deposited");

    }
    
}

//Task 2: Implement a function to handle withdrawals from a bank account, ensuring sufficient balance.
function withdrawals(money){
    if (money < bankBalance) {
        bankBalance -= money;
        console.log(`you have taken out ${30}`);
    } else {
        console.log("you did not have enough moeny in your account");
    }
}

//Task 3: Develop a function to check the current balance of the account
function checkBalance(){
    console.log(`the current balance is ${bankBalance}`)
}

deposits(100);
withdrawals(30);
checkBalance(bankBalance);